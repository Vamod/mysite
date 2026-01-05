import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function StyledScreen() {
  return (
    <div className="min-h-screen bg-background text-foreground">
     
      <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur">
        <div className="mx-auto max-w-5xl px-6 py-4 flex items-center justify-between gap-4">
          <div className="leading-tight">
            <p className="text-sm text-muted-foreground">Valerio Modesti</p>
            <h1 className="text-lg font-semibold">Frontend Developer</h1>
          </div>

          <nav className="hidden md:flex items-center gap-2" aria-label="Navigazione">
            <Button variant="ghost" size="sm" asChild><a href="#progetti">Progetti</a></Button>
            <Button variant="ghost" size="sm" asChild><a href="#chi-sono">Chi sono</a></Button>
            <Button variant="ghost" size="sm" asChild><a href="#contatti">Contatti</a></Button>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 space-y-10">
        {/* Hero */}
        <section className="space-y-5">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">React</Badge>
            <Badge variant="secondary">Angular</Badge>
            <Badge variant="outline">Legacy (jQuery)</Badge>
            <Badge variant="outline">A11y / Performance</Badge>
          </div>

          <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
            UI moderne, accessibili e manutenibili.
          </h2>

          <p className="max-w-2xl text-lg text-muted-foreground">
            Frontend-focused con esperienza full-stack (Laravel). Lavoro bene sia su progetti moderni sia su codebase legacy.
          </p>

          <div className="flex flex-wrap gap-3">
            <Button asChild><a href="#contatti">Contattami</a></Button>
            <Button variant="secondary" asChild><a href="#progetti">Vedi progetti</a></Button>
          </div>
        </section>

        <Separator />

        {/* Progetti */}
        <section id="progetti" className="space-y-4">
          <h3 className="text-xl font-semibold">Progetti</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Dashboard B2B</CardTitle>
                <CardDescription>Componenti riusabili, stati e UX curati.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                React + shadcn, attenzione a accessibilità e performance.
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Refactor Legacy</CardTitle>
                <CardDescription>Migrazione progressiva da jQuery.</CardDescription>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Refactor incrementale per ridurre rischi e regressioni.
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About */}
        <section id="chi-sono" className="space-y-3">
          <h3 className="text-xl font-semibold">Chi sono</h3>
          <p className="text-muted-foreground max-w-2xl">
            Mi piace costruire interfacce solide, con una base semantica forte e una UI rifinita. Comunico in modo chiaro e lavoro per iterazioni.
          </p>
        </section>

        {/* Contatti */}
        <section id="contatti" className="space-y-3">
          <h3 className="text-xl font-semibold">Contatti</h3>
          <p className="text-muted-foreground">Scrivimi: <a className="underline" href="mailto:tu@email.it">tu@email.it</a></p>
        </section>
      </main>

      <footer className="border-t">
        <div className="mx-auto max-w-5xl px-6 py-8 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Valerio Modesti
        </div>
      </footer>
    </div>
  );
}
