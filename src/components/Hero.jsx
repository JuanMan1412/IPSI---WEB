export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="wrap hero__grid">
        <div className="hero__texto">
          <h1>Un colegio inclusivo para crecer en Lastenia</h1>
          <p>
            Instituto Privado Santa Inés acompaña a cada alumno desde el Nivel Inicial
            hasta el egreso, con un equipo propio de seguimiento personalizado.
          </p>
          <div className="hero__acciones">
            <a className="btn btn--primario" href="#contacto">Consultar inscripción</a>
            <a className="btn btn--borde" href="#niveles">Ver los niveles</a>
          </div>
          <ul className="chips">
            <li>Nivel Inicial a Secundario</li>
            <li>Colegio inclusivo</li>
            <li>Banda del Río Salí, Tucumán</li>
          </ul>
        </div>

        <div className="hero__video">
          <video
            src="/firma-ley-teresa.mp4"
            poster="/hero-video-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            controls
          />
        </div>
      </div>
    </section>
  );
}