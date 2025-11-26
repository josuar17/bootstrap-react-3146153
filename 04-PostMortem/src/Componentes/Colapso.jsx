export default function Colapso() {
  return (
    <div className="colapso-section text-white">
      <h2>COLAPSO</h2>
      <p>Descripción de tu comic…</p>

      <h3 className="mt-4">IMÁGENES ALUSIVAS</h3>

      <div className="container mt-4">
        <div className="row justify-content-center">
          <div className="col-md-3">
            <img src="/img1.jpg" className="colapso-img" />
          </div>
          <div className="col-md-3">
            <img src="/img2.jpg" className="colapso-img" />
          </div>
          <div className="col-md-3">
            <img src="/img3.jpg" className="colapso-img" />
          </div>
        </div>
      </div>

      <h3 className="mt-5">CONTEXTO DEL MUNDO</h3>
      <p className="mt-3">Texto explicando el lore.</p>
    </div>
  );
}
