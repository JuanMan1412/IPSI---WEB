import { colegio } from "../data/colegio";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__grid">
        <span>© {new Date().getFullYear()} {colegio.nombre} · {colegio.ubicacion}</span>
        <span><a href={`mailto:${colegio.email}`}>{colegio.email}</a></span>
      </div>
    </footer>
  );
}