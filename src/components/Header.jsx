import { useState } from "react";

const LINKS = [
  { href: "#niveles", label: "Niveles" },
  { href: "#galeria", label: "Fotos" },
  { href: "#videos", label: "Videos" },
  { href: "#ubicacion", label: "Ubicación" },
  // { href: "#contacto", label: "Consultas" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="header">
      <div className="wrap header__bar">
        <a className="marca" href="#inicio" onClick={() => setAbierto(false)}>
          <img className="marca__logo" src="/galeria/logo ipsi.jpg" alt="Instituto Privado Santa Inés" width="40" height="40" />
          <span>
            <b>Instituto Privado Santa Inés</b>
          </span>
        </a>

        <button
          className="header__toggle"
          aria-label="Abrir menú"
          aria-expanded={abierto}
          onClick={() => setAbierto((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`nav ${abierto ? "nav--abierto" : ""}`}>
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setAbierto(false)}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}