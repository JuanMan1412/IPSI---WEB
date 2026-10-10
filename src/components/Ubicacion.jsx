import { colegio } from "../data/Colegio";

export default function Ubicacion() {
  return (
    <section id="ubicacion" className="ubicacion">
      <div className="wrap ubicacion__grid">
        <div>
          <div className="enc" style={{ marginBottom: 0 }}>
            <h2>Estamos en Lastenia</h2>
          </div>
          <address>{colegio.direccion}</address>
          <a className="btn btn--primario" href={colegio.mapsUrl} target="_blank" rel="noopener noreferrer">
            Abrir en Google Maps
          </a>
        </div>
        <div className="ubicacion__mapa">
          <iframe
            title="Ubicación del colegio"
            loading="lazy"
            src={`https://www.google.com/maps?q=${encodeURIComponent(colegio.direccion)}&output=embed`}
          />
        </div>
      </div>
    </section>
  );
}