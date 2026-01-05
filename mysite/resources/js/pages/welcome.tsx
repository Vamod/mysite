import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import PlainScreen from "@/components/screens/plain";
import StyledScreen from "@/components/screens/styled";
import AppearanceToggleDropdown from "@/components/appearance-dropdown";

const STORAGE_KEY = "css-mode"; // "on" | "off"

export default function Welcome() {
    const [cssOn, setCssOn] = useState(false);
    const [styledVisible, setStyledVisible] = useState(false);
    const FIRST_VISIT_KEY = "css-hint-seen";

    const [showCssHint, setShowCssHint] = useState(false);

    useEffect(() => {
        const seen = localStorage.getItem(FIRST_VISIT_KEY);

        if (!seen) {
            requestAnimationFrame(() => setShowCssHint(true));
        }
    }, []);


    useEffect(() => {
        const root = document.documentElement;

        // Plain quando cssOn=false
        root.classList.toggle("css-off", !cssOn);

        if (!cssOn) {
            // Modalità spoglia: niente dark, niente color-scheme dark
            root.classList.remove("dark");
            root.style.colorScheme = "light";
        } else {
            // Torna a lasciare che AppearanceToggleDropdown gestisca il tema
            root.style.removeProperty("color-scheme");
        }
        localStorage.setItem(STORAGE_KEY, cssOn ? "on" : "off");
    }, [cssOn]);

    useEffect(() => {
        if (cssOn) {
            // entrando in styled: parti "nascosto" e poi mostra nel frame successivo
            setStyledVisible(false);
            requestAnimationFrame(() => setStyledVisible(true));
        } else {
            // tornando a plain: niente animazione, torna subito false
            setStyledVisible(false);
        }
    }, [cssOn]);


    return (
        <>
            <Head title="Valerio Modesti">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>
            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full max-w-[335px] text-sm not-has-[nav]:hidden lg:max-w-4xl ui-chrome">
                    <nav className="flex items-center justify-end gap-4">
                        {cssOn && <AppearanceToggleDropdown />}

                        <Button
                            variant={cssOn ? "secondary" : "default"}
                            size="sm"
                            onClick={() => {
                                setCssOn(v => !v);
                                setShowCssHint(false);
                                localStorage.setItem(FIRST_VISIT_KEY, "true");
                            }}
                            className={showCssHint ? "css-hint-loop" : undefined}
                        >
                            {cssOn ? "CSS: OFF" : "CSS: ON"}
                        </Button>

                    </nav>

                </header>
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[335px] flex-col-reverse lg:max-w-4xl lg:flex-row">
                        {cssOn ?
                            (
                                <div
                                    className={[
                                        "transition-all duration-500 ease-out",
                                        styledVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
                                    ].join(" ")}
                                >
                                    <StyledScreen />
                                </div>
                            )
                            : (
                                <PlainScreen></PlainScreen>

                            )}
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    )
}
