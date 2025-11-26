export default function Personajes() {
  return (
    <div className="personajes-section text-white">
      <h2 className="mb-4">PERSONAJES</h2>

      <div className="container">
        <div className="row justify-content-center">

          <div className="col-md-3 text-center">
            <img src="/alejandro.png" className="personaje-img" />
            <h5 className="mt-3">Alejandro</h5>
            <p>Descripción…</p>
          </div>

          <div className="col-md-3 text-center">
            <img src="/abril.png" className="personaje-img" />
            <h5 className="mt-3">Abril</h5>
            <p>Descripción…</p>
          </div>

          <div className="col-md-3 text-center">
            <img src="/dario.png" className="personaje-img" />
            <h5 className="mt-3">Dario</h5>
            <p>Descripción…</p>
          </div>

        </div>
      </div>
    </div>
  );
}
