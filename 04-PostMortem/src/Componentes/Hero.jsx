export default function Hero() {
  return (
    <div className="hero-container">
      <img src="/fondo.jpg" className="hero-img" alt="fondo" />

      <div className="hero-cards">
        <div className="hero-card text-white">
          <h3>INTRODUCCIÓN A NUESTRA MARCA</h3>
          <p>
            Post Mortem es una empresa creada con la intención de…
          </p>
        </div>

        <div className="hero-card text-white">
          <h3>CONTEXTUALIZACIÓN</h3>
          <p>
            En un mundo marcado por los avances tecnológicos…
          </p>
        </div>
      </div>
    </div>
  );
}
