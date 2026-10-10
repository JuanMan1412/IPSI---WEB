import { videos } from "../data/colegio";

export default function Videos() {
  const hayVideos = videos.some((v) => v.youtubeId);

  return (
    <section id="videos" className="videos">
      <div className="wrap">
        <div className="enc">
          <h2>Conocé el colegio en video</h2>
          <p>Un recorrido por las instalaciones y la vida institucional.</p>
        </div>

        {hayVideos ? (
          <div className="grid grid--2">
            {videos
              .filter((v) => v.youtubeId)
              .map((v) => (
                <div key={v.titulo} className="video__caja">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.youtubeId}`}
                    title={v.titulo}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <p>{v.titulo}</p>
                </div>
              ))}
          </div>
        ) : (
          <p className="videos__vacio">
            Pronto vamos a sumar videos del colegio acá.
          </p>
        )}
      </div>
    </section>
  );
}