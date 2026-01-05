// resources/js/components/screens/plain.tsx
import React from "react";

export default function PlainScreen() {
  return (
    <div className="legacy-wrap">
      <h1>Valerio Modesti - Frontend Developer</h1>
      <p><em>Modalità legacy: layout a tabelle (sì, lo so).</em></p>

      <p>
        <b>MENU</b> | <a href="#progetti">Progetti</a> |{" "}
        <a href="#chi-sono">Chi sono</a> | <a href="#contatti">Contatti</a>
      </p>

      <table className="legacy-table" cellPadding={0} cellSpacing={0}>
        <colgroup>
          <col style={{ width: "28%" }} />
          <col style={{ width: "72%" }} />
        </colgroup>

        <tbody>
          <tr>
            {/* COLONNA SINISTRA */}
            <td data-label="Sidebar">
              <h3>Stack</h3>
              <ul>
                <li>React</li>
                <li>Angular</li>
                <li>jQuery (legacy)</li>
              </ul>

              <hr />

              <h3>Status</h3>
              <p>✅ Disponibile per collaborazioni</p>

              <hr />

              <p>
                <small>Tip: premi “CSS: ON” per tornare nel {new Date().getFullYear()}.</small>
              </p>
            </td>

            {/* COLONNA DESTRA */}
            <td data-label="Contenuto">
              <h2>UI moderne, accessibili e manutenibili.</h2>
              <p>
                Frontend-focused con esperienza full-stack (Laravel). Lavoro bene
                su progetti moderni e su codebase legacy.
              </p>

              <hr />

              <h3 id="progetti">Progetti</h3>
              <ul>
                <li>
                  <b>Dashboard B2B</b> — componenti riusabili, stati e UX curati
                </li>
                <li>
                  <b>Refactor Legacy</b> — migrazione progressiva da jQuery
                </li>
              </ul>

              <hr />

              <h3 id="chi-sono">Chi sono</h3>
              <p>Mi piace costruire interfacce solide…</p>

              <hr />

              <h3 id="contatti">Contatti</h3>
              <p>
                Email: <a href="mailto:tu@email.it">tu@email.it</a>
              </p>
            </td>
          </tr>

          <tr>
            <td colSpan={2}>
              <small>© {new Date().getFullYear()} - Powered by &lt;table&gt;</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
