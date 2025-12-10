import React from 'react'

import Navbar from "./componentes/Navbar.jsx";
import Hero from "./componentes/Hero.jsx";
import Novedades from "./componentes/Novedades.jsx";
import LogoInfo from "./componentes/LogoInfo.jsx";
import Personajes from "./componentes/Personajes.jsx";
import Tienda from "./componentes/Tienda.jsx";
import Footer from "./componentes/Footer.jsx";
import Colapso from './Componentes/Colapso.jsx';
import Autores from './Componentes/Autores.jsx';

export const App = () => {
  return (
      <>
      <Navbar />
      <Hero/>
      <Autores/>
      <Novedades />
      <LogoInfo />
      <Colapso/>
      <Personajes />
      <Tienda />
      <Footer />
    </>
  )
}
