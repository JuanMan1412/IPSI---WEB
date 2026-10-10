import { condicionesInclusion } from "../data/colegio";

export default function Inclusion() {
  return (
    <section id="inclusion" className="inclusion">
      <div className="wrap">
        <div className="enc">
          <span className="destacado">El colegio más inclusivo de la zona este</span>
          <h2>Educación inclusiva, con seguimiento personalizado</h2>
          <p>
            Contamos con un equipo y protocolos propios para acompañar de forma individual
            a alumnos con autismo, síndrome de Down, discapacidades motrices, TDAH y otras
            condiciones, dentro del aula y junto a sus compañeros.
          </p>
        </div>
        <div className="grid grid--4">
          {condicionesInclusion.map((c) => (
            <div key={c.titulo} className="tarjeta tarjeta--oscura">
              <h3>{c.titulo}</h3>
              <p>{c.texto}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}