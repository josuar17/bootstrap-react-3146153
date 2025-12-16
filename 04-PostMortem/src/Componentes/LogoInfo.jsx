import React from 'react';


export default function Logoinfo({ onLogoClick }) {
  return (
    <div className="w-100 d-flex justify-content-center align-items-start" style={{ backgroundColor:"#7a0000", padding:"80px 0", minHeight:"100vh", position:"relative" }}>
      <div className="container">

        <div className="row mb-5 pb-4 border-bottom border-white border-2">
          <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="fw-bolder text-white text-uppercase d-inline-block" style={{ fontSize:"3.5rem" }}>
              NUESTRO <span style={{ color:"#ff0000" }}>LOGO</span>
            </h1>
          </div>
          <div className="col-12 col-lg-6 text-center text-lg-end">
            <p className="text-white fw-bold text-center" style={{ fontSize:"0.9rem", width:"100%" }}>
              Tipografía: <span style={{ color:"black", fontWeight:"bolder", fontSize:"1rem" }}>"POST"</span> en negro y <span style={{ color:"red", fontWeight:"bolder", fontSize:"1rem" }}>"MORTEM"</span> en rojo refuerzan el contraste entre ambos conceptos.
            </p>
          </div>
        </div>

        <div className="row justify-content-center pt-5">
          <div className="col-12 position-relative" style={{ maxWidth:"800px", minHeight:"600px", paddingTop:"50px" }}>

            <div className="d-none d-lg-flex justify-content-center position-absolute top-50 start-50 translate-middle " style={{ zIndex:1 }}>
              <img src="/LOGO.png" className="img-fluid" style={{ width:"100%", maxWidth:"280px", cursor:"pointer" }} onClick={onLogoClick} />
            </div>

            <div className="d-lg-none d-flex justify-content-center mb-5">
              <img src="/LOGO.png" className="img-fluid" style={{ width:"100%", maxWidth:"200px", cursor:"pointer" }} onClick={onLogoClick} />
            </div>

            <div className="d-none d-lg-block" style={{ pointerEvents: "none" }}>
              <div className="position-absolute" style={{ top:"0", left:"0", maxWidth:"200px", textAlign:"right", color:"#ffffff", fontSize:"0.9rem", lineHeight:"1.4" }}>
                <p>Calavera dividida: La mitad blanca representa la vida, la negra simboliza la muerte, mostrando su coexistencia.<span style={{ height:"10px", width:"10px", backgroundColor:"white", borderRadius:"50%", display:"inline-block", marginLeft:"10px" }}></span></p>
              </div>

              <div className="position-absolute" style={{ bottom:"0", left:"0", maxWidth:"200px", textAlign:"right", color:"#ffffff", fontSize:"0.9rem", lineHeight:"1.4" }}>
                <p>Rama en el lado blanco: Simboliza la fuerza de la naturaleza, mostrando cómo la vida surge y se expande incluso en los entornos más difíciles.<span style={{ height:"10px", width:"10px", backgroundColor:"white", borderRadius:"50%", display:"inline-block", marginLeft:"10px" }}></span></p>
              </div>

              <div className="position-absolute" style={{ top:"0", right:"0", maxWidth:"200px", textAlign:"left", color:"#ffffff", fontSize:"0.9rem", lineHeight:"1.4" }}>
                <p><span style={{ height:"10px", width:"10px", backgroundColor:"white", borderRadius:"50%", display:"inline-block", marginRight:"10px" }}></span>Fondo oscuro: Resalta los elementos y aporta una estética distópica e impactante.</p>
              </div>

              <div className="position-absolute" style={{ bottom:"0", right:"0", maxWidth:"200px", textAlign:"left", color:"#ffffff", fontSize:"0.9rem", lineHeight:"1.4" }}>
                <p><span style={{ height:"10px", width:"10px", backgroundColor:"white", borderRadius:"50%", display:"inline-block", marginRight:"10px" }}></span>POST MORTEM representa la dualidad entre vida y muerte con un diseño minimalista y simbólico.</p>
              </div>
            </div>

            <div className="row d-lg-none text-center g-4">
              <div className="col-12">
                <p className="fw-bold text-white">Calavera dividida:</p>
                <p style={{ color:"#ffffff", fontSize:"0.9rem" }}>La mitad blanca representa la vida, la negra simboliza la muerte, mostrando su coexistencia.</p>
              </div>
              <div className="col-12">
                <p className="fw-bold text-white">Rama en el lado blanco:</p>
                <p style={{ color:"#ffffff", fontSize:"0.9rem" }}>Simboliza la fuerza de la naturaleza, mostrando cómo la vida surge y se expande incluso en los entornos más difíciles.</p>
              </div>
              <div className="col-12">
                <p className="fw-bold text-white">Fondo oscuro:</p>
                <p style={{ color:"#ffffff", fontSize:"0.9rem" }}>Resalta los elementos y aporta una estética distópica e impactante.</p>
              </div>
              <div className="col-12">
                <p className="fw-bold text-white">Dualidad:</p>
                <p style={{ color:"#ffffff", fontSize:"0.9rem" }}>POST MORTEM representa la dualidad entre vida y muerte con un diseño minimalista y simbólico.</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
