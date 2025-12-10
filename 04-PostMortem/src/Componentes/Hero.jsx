export default function HomeSection() {
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ backgroundImage: "url('/fondo.png')", backgroundSize: "cover", backgroundPosition: "center", minHeight: "90vh", padding: "40px 0" }}
    >
      <div className="container">
        <div style={{gap:'10rem'}} className="row justify-content-center">

         
          <div className="col-md-5">
            <div
              className="p-4 text-white"
              style={{ background: "rgba(255, 0, 0, 0.35)", borderRadius: "25px", backdropFilter: "blur(4px)" }}
            >
              <h3 className="fw-bold mb-3">
                INTRODUCCIÓN A <br /> NUESTRA MARCA
              </h3>
              <p>
                Post Mortem es una marca creativa con identidad distópica
                y minimalista que reflexiona sobre la vida y el rescate.
                Su estética árida simboliza sobrevivencia y resiliencia,
                donde los rastros de un mundo en ruinas conviven con señales
                de resistencia y esperanza.

              </p>
            </div>
          </div>

          
          <div className="col-md-5">
            <div
              className="p-4 text-white"
              style={{ background: "rgba(255, 0, 0, 0.35)", borderRadius: "25px", backdropFilter: "blur(4px)" }}
            >
              <h3 className="fw-bold mb-3">CONTEXTUALIZACIÓN</h3>
              <p>
                En un mundo marcado por el exceso tecnológico y la
                desconexión humana, Post Mortem propone experiencias
                narrativas sobre cómo reconectar con lo esencial.
                Su universo plantea futuros posibles donde lo digital
                vuelve a ser útil, la naturaleza y la intuición vuelven
                a tener valor y lo humano recupera su importancia.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
