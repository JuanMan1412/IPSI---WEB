import { niveles } from "../data/Colegio";

export default function Niveles() {
  return (
    <section id="niveles">
      <div className="wrap">
        <div className="enc">
          <h2>Un lugar para cada etapa</h2>
          <p>Consultanos por vacantes, horarios y propuesta de cada sala, grado o año.</p>
        </div>
        <div className="grid grid--4">
          {niveles.map((n) => (
            <article key={n.nombre} className="tarjeta">
              <h3>{n.nombre}</h3>
              <p>{n.descripcion}</p>
              <a href="#contacto">Consultar vacantes</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}