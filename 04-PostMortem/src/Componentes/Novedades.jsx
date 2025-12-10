import React from 'react';

export default function Novedades() {
  return (
    <div className="w-100 d-flex flex-column" style={{ backgroundColor: "#000000" }}>

      
      <div className="w-100 d-flex justify-content-center align-items-start" style={{ backgroundColor: '#000000ff', padding: '50px 0 100px'}}>
        <div className="container">
          
          
          <div className="row d-lg-none text-center mb-4">
            <div className="col-12">
              <h1 className="fw-bold text-white text-uppercase" style={{ fontSize: '3rem' }}>NOVEDADES</h1>
            </div>
          </div>
          
          <div style={{backgroundColor:'#635C5C', marginTop:'2rem'}} className="row text-center justify-content-center align-items-center g-5 ">

            
            <div className="col-12 col-md-8 col-lg-4 d-flex flex-column align-items-center align-items-lg-end">
              <div 
                style={{ borderRadius: '0',width: '100%',maxWidth: '280px',height: '400px',padding: '30px 20px',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-between'}}
              >
                
                <img
                  src="/LANZAMIENTO.png"className="img-fluid"style={{ width: "100%", maxWidth: "200px", objectFit: 'cover' }} alt="Portada del cómic Colapso en una tablet"
                />
              </div>
            </div>

            
            <div className="d-none d-lg-flex col-lg-3 justify-content-center align-items-center">
              <h1 className="fw-bold text-white text-uppercase" style={{ fontSize: '3rem' }}>NOVEDADES</h1>
            </div>

            
            <div className="col-12 col-md-8 col-lg-4 d-flex flex-column align-items-center align-items-lg-start">
              <div 
                style={{ borderRadius: '0',width: '100%',maxWidth: '280px',height: '400px',padding: '30px 20px',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'space-between'}}
              >
                <img
                  src="/NUEVA SECCION.png"className="img-fluid"style={{ width: "100%", maxWidth: "200px", objectFit: 'contain' }}alt="Icono de un globo terráqueo"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
      
      
      <div className="w-100 d-flex justify-content-center" style={{ padding: "50px 0 80px 0" }}>
        <div className="container">
          <div style={{gap:'20rem'}} className="row justify-content-center ">
            
            
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                <div style={{ backgroundColor: '#000000', width: '100%', maxWidth: '100px', height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="/DATOS.png"className="img-fluid"style={{ width: "100%", maxWidth: "70px", height: "auto" }}alt="Icono de Post Mortem"
                    />
                </div>
                <h5 className="fw-normal mt-3 text-white">Datos Curiosos</h5>
            </div>

           
            <div className="col-6 col-md-3 d-flex flex-column align-items-center">
                <div style={{ backgroundColor: '#000000', width: '100%', maxWidth: '100px', height: '140px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img
                        src="/LOGO.png"style={{ width: "100%", maxWidth: "100px", height: "auto" }}alt="Icono de Producto Estrella"
                    />
                </div>
                <h5 className="fw-normal mt-3 text-white">Producto Estrella</h5>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}