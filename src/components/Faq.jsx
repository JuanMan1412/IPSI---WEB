import { faqs } from "../data/Colegio";

export default function Faq() {
  return (
    <section id="preguntas">
      <div className="wrap">
        <div className="enc">
          <h2>Preguntas frecuentes</h2>
        </div>
        <div className="faq">
          {faqs.map((f) => (
            <details key={f.pregunta}>
              <summary>{f.pregunta}</summary>
              <p>{f.respuesta}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}