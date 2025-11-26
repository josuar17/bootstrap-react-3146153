export default function Autores() {
  return (
    <div className="autores-section text-white container">
      <h2 className="mb-4"><img src="/logo.png" height="40" /> Autores</h2>

      <div className="row justify-content-center">
        
        <div className="col-md-3">
          <img src="/josuar.jpg" className="autores-img" />
          <p className="fw-bold mt-2">Josuar Avila</p>
        </div>

        <div className="col-md-5 autores-text">
          <p>
            Somos dos jóvenes creativos… (tu texto)
          </p>
        </div>

        <div className="col-md-3">
          <img src="/ismael.jpg" className="autores-img" />
          <p className="fw-bold mt-2">Ismael Cardona</p>
        </div>
      </div>
    </div>
  );
}
