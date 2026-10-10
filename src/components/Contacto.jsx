import { useState } from "react";
import { colegio } from "../data/colegio";

export default function Contacto() {
  const [form, setForm] = useState({ nombre: "", tel: "", nivel: "", hijo: "", msg: "" });

  function actualizar(campo, valor) {
    setForm((f) => ({ ...f, [campo]: valor }));
  }

  function enviar(e) {
    e.preventDefault();
    const texto =
      `Hola, quiero consultar por una vacante.\n\n` +
      `Responsable: ${form.nombre}\n` +
      `Teléfono: ${form.tel}\n` +
      `Nivel: ${form.nivel}\n` +
      `Alumno/a: ${form.hijo || "-"}\n` +
      `Mensaje: ${form.msg || "-"}`;

    if (colegio.whatsapp) {
      window.open(`https://wa.me/${colegio.whatsapp}?text=${encodeURIComponent(texto)}`, "_blank");
    } else {
      window.location.href =
        `mailto:${colegio.email}?subject=${encodeURIComponent("Consulta de vacante - " + form.nivel)}` +
        `&body=${encodeURIComponent(texto)}`;
    }
  }

  return (
    <section id="contacto" className="contacto">
      <div className="wrap contacto__grid">
        <div>
          <div className="enc">
            <h2>Consultá por una vacante</h2>
            <p>Al enviar, se abre tu aplicación de correo con el mensaje listo para mandar al colegio.</p>
          </div>
          <form onSubmit={enviar} className="form">
            <div className="campo">
              <label htmlFor="nombre">Nombre y apellido del adulto responsable</label>
              <input id="nombre" required value={form.nombre} onChange={(e) => actualizar("nombre", e.target.value)} />
            </div>
            <div className="campo">
              <label htmlFor="tel">Teléfono o WhatsApp</label>
              <input id="tel" type="tel" required value={form.tel} onChange={(e) => actualizar("tel", e.target.value)} />
            </div>
            <div className="campo">
              <label htmlFor="nivel">Nivel que te interesa</label>
              <select id="nivel" required value={form.nivel} onChange={(e) => actualizar("nivel", e.target.value)}>
                <option value="">Elegí un nivel</option>
                <option>Nivel Inicial</option>
                <option>Nivel Primario</option>
                <option>Nivel Secundario</option>
                <option>Nivel Terciario</option>
              </select>
            </div>
            <div className="campo">
              <label htmlFor="hijo">Nombre y edad del alumno o alumna</label>
              <input id="hijo" placeholder="Ej.: Sofía, 6 años" value={form.hijo} onChange={(e) => actualizar("hijo", e.target.value)} />
            </div>
            <div className="campo campo--full">
              <label htmlFor="msg">Mensaje (opcional)</label>
              <textarea id="msg" value={form.msg} onChange={(e) => actualizar("msg", e.target.value)} />
            </div>
            <div className="campo campo--full">
              <button className="btn btn--primario" type="submit">Enviar consulta</button>
            </div>
          </form>
        </div>

        <aside className="tarjeta-contacto">
          <h3>Contacto directo</h3>
          <dl>
            <div><dt>Correo</dt><dd><a href={`mailto:${colegio.email}`}>{colegio.email}</a></dd></div>
            <div><dt>Facebook</dt><dd><a href={colegio.facebook} target="_blank" rel="noopener noreferrer">Instituto Privado Santa Ines</a></dd></div>
            <div><dt>Instagram</dt><dd><a href={colegio.instagram} target="_blank" rel="noopener noreferrer">@ipsantaines</a></dd></div>
            <div><dt>Dirección</dt><dd>{colegio.direccion}</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  );
}