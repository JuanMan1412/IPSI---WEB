import { useState } from "react";
import { galeria } from "../data/Colegio";

export default function Galeria() {
  const [abierta, setAbierta] = useState(null);

  return (
    <section id="galeria">
      <div className="wrap">
        <div className="enc">
          <h2>La vida en el colegio</h2>
          <p>Un vistazo a las instalaciones, los actos y el día a día de los alumnos.</p>
        </div>
        <div className="galeria__grid">
          {galeria.map((foto, i) => (
            <button
              key={foto.src}
              className="galeria__item"
              onClick={() => setAbierta(i)}
              aria-label={`Ampliar: ${foto.alt}`}
            >
              <img src={foto.src} alt={foto.alt} loading="lazy" />
            </button>
          ))}
        </div>
      </div>

      {abierta !== null && (
        <div className="lightbox" onClick={() => setAbierta(null)}>
          <button className="lightbox__cerrar" aria-label="Cerrar">✕</button>
          <img src={galeria[abierta].src} alt={galeria[abierta].alt} />
        </div>
      )}
    </section>
  );
}