export default function Autores() {
  return (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ background: "#7a0000", padding: "40px 0" }}
    >
      <div className="container">
        <div className="row text-center justify-content-center align-items-center g-5">
 
          <div className="col-md-3 d-flex flex-column align-items-center">
            <img
              src="/JOSUAR.png"
              className="img-fluid"
              style={{ width: "100%", maxWidth: "260px", borderRadius: "25px" }}
            />
            <h5 className="fw-bold mt-3 text-white">Josuar Avila</h5>
          </div>

          
          <div className="col-md-5 text-white">
            <img
              src="/LOGO.png"     
              style={{ width: "80px", marginBottom: "15px" }}
            />
            <h2 className="fw-bold mb-3">Autores</h2>
            <p style={{ lineHeight: "1.6" }}>
              Somos dos jóvenes creativos que estudian Producción de Multimedia en el SENA.
              Unidos por su pasión por el diseño, la narrativa y la tecnología, decidieron crear juntos un proyecto llamado "Post Mortem", una marca que combina estética apocalíptica y reflexión social. Actualmente están desarrollando "Colapso", un cómic digital interactivo que explora un mundo al borde del fin, donde la supervivencia y la conciencia humana se enfrentan a la decadencia tecnológica. Su proyecto refleja tanto su visión artística como su compromiso con temas actuales.
            </p>
          </div>

          
          <div className="col-md-3 d-flex flex-column align-items-center">
            <img
              src="/ISMAEL.png"
              className="img-fluid"
              style={{ width: "100%", maxWidth: "260px", borderRadius: "25px" }}
            />
            <h5 className="fw-bold mt-3 text-white">Ismael Cardona</h5>
          </div>

        </div>
      </div>
    </div>
  );
}
