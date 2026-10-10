import { useState } from "react";

const LINKS = [
  { href: "#niveles", label: "Niveles" },
  { href: "#inclusion", label: "Inclusión" },
  { href: "#galeria", label: "Fotos" },
  { href: "#videos", label: "Videos" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#contacto", label: "Consultas" },
];

export default function Header() {
  const [abierto, setAbierto] = useState(false);

  return (
    <header className="header">
      <div className="wrap header__bar">
        <a className="marca" href="#inicio" onClick={() => setAbierto(false)}>
          <svg className="marca__escudo" width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
            <rect width="40" height="40" rx="10" fill="var(--azul)" />
            <path d="M8 32V19a6 6 0 0 1 12 0v13z" fill="#fff" />
            <path d="M20 32V15a6 6 0 0 1 12 0v17z" fill="var(--rojo)" />
          </svg>
          <span>
            <b>Instituto Privado Santa Inés</b>
            <small>Lastenia</small>
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
          <a className="btn btn--primario" href="#contacto" onClick={() => setAbierto(false)}>
            Consultar
          </a>
        </nav>
      </div>
    </header>
  );
}