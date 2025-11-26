export default function Tienda() {
  return (
    <div className="tienda-section">
      <h2 className="mb-3">TIENDA</h2>
      <p>Post Mortem es más que una tienda…</p>

      <div className="container mt-4">
        <div className="row justify-content-center">

          <div className="col-md-4 tienda-item">
            <img src="/sueter.jpg" />
            <h4>Sweater Post Mortem</h4>
            <p>$ 100.000</p>
            <button className="tienda-btn">Añadir al Carrito</button>
          </div>

          <div className="col-md-4 tienda-item">
            <img src="/libro.jpg" />
            <h4>Libro Post Mortem</h4>
            <p>$ 50.000</p>
            <button className="tienda-btn">Añadir al Carrito</button>
          </div>

        </div>
      </div>
    </div>
  );
}
