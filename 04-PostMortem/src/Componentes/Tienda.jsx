import React from 'react';

export default function Tienda() {
  
  return (
    <div className="w-100 d-flex justify-content-center align-items-start" style={{ backgroundColor: '#000000', padding: '80px 0', minHeight: '100vh', color: '#ffffff' }}>
      <div className="container">
        
       
        <div className="row text-center mb-5">
          <div className="col-12 d-flex justify-content-center align-items-center mb-4" style={{ backgroundColor: '#7a0000', padding: '15px 0' }}>
            <img src="/LOGO.png" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
            <h1 style={{ fontSize: '2rem', fontWeight: 'bolder', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '3px' }}>TIENDA</h1>
            <img src="/LOGO.png" style={{ width: '30px', height: '30px', marginLeft: '10px' }} />
          </div>
          
          <div className="col-12">
            <p style={{ fontSize: '1.2rem', color: '#ffffff', fontWeight: 'bold' }}>Post Mortem es más que una tienda: es el inicio del fin. Elige lo esencial y sé parte de Colapso.</p>
          </div>
        </div>

       
        <div className="row justify-content-center g-5 pt-5">
            
           
            <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
                <h3 style={{ fontSize: '1.5rem', color: '#ff0000', marginBottom: '20px' }}>Sueter Post Mortem</h3>
                <img src="/BUSO.png" style={{ width: '100%', maxWidth: '300px', height: 'auto', marginBottom: '20px' }} className="img-fluid" />
                
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4', marginBottom: '20px', maxWidth: '300px' }}>Buzo gris de corte urbano con el logo Post Mortem al centro del pecho. Minimalista, cómodo y creado por la marca que dio vida al cómic Colapso.</p>
                
                <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', color: '#ffffff', marginBottom: '20px' }}>$ 100.00</p>
                
                <button style={{ backgroundColor: '#000000', color: '#ffffff', border: '2px solid #ffffff', padding: '10px 30px', textTransform: 'uppercase', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 'bold' }}>Añadir al Carrito <span style={{ marginLeft: '10px' }}>🛒</span></button>
            </div>

            <div className="col-12 col-md-6 d-flex flex-column align-items-center text-center">
                <h3 style={{ fontSize: '1.5rem', color: '#ff0000', marginBottom: '20px' }}>Libro Post Mortem</h3>
                <img src="/LIBRO.png" style={{ width: '100%', maxWidth: '300px', height: 'auto', marginBottom: '20px' }} className="img-fluid" />
                
                <p style={{ fontSize: '0.9rem', lineHeight: '1.4', marginBottom: '20px', maxWidth: '300px' }}>Versión impresa del cómic Colapso: una historia post-apocalíptica ilustrada, cruda y emocional. Para leer, sentir y coleccionar.</p>
                
                <p style={{ fontSize: '1.5rem', fontWeight: 'bolder', color: '#ffffff', marginBottom: '20px' }}>$ 50.00</p>
                
                <button style={{ backgroundColor: '#000000', color: '#ffffff', border: '2px solid #ffffff', padding: '10px 30px', textTransform: 'uppercase', cursor: 'pointer', fontSize: '0.9rem', fontWeight: 'bold' }}>Añadir al Carrito <span style={{ marginLeft: '10px' }}>🛒</span></button>
            </div>

        </div>

      </div>
    </div>
  );
}