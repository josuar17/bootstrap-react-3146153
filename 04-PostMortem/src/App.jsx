import React from 'react'

import Navbar from "./componentes/Navbar.jsx";
import Colapso from './Componentes/Colapso.jsx';
import Autores from './Componentes/Autores.jsx';
import Footer from './Componentes/Footer.jsx';
import Tienda from './Componentes/Tienda.jsx';
import Personajes from './Componentes/Personajes.jsx';
import Logoinfo from './Componentes/LogoInfo.jsx';
import Novedades from './Componentes/Novedades.jsx';
import Hero from './Componentes/Hero.jsx';

export const App = () => {
  return (
      <>
      <Navbar/>
      <Hero/>
      <Autores/>
      <Novedades/>
      <div>
      <Logoinfo
        onLogoClick={() => {
          alert("Hiciste click en el logo");
        }}
      />
     </div>
      <Colapso/>
      <Personajes nombreAlejandro="Alejandro" />
      <Tienda/>
      <Footer/>
      
    </>
  )
}
