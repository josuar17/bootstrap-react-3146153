import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    
    <nav className="navbar bg-white px-4 py-3 shadow-sm">
      <div className="container-fluid d-flex align-items-center justify-content-between">
       
        <div className="d-flex align-items-center gap-3">
          <img style={{height:'45px'}} src="/LOGO.png" alt="" />
          <span style={{ fontSize: "1.5rem" }} className="fw-bold m-0">
            POST <span style={{ color: "red" }}>MORTEM</span>
          </span>
        </div>

     
        <button
          className="border-0 bg-transparent d-lg-none"
          onClick={() => setOpen(!open)}
        >
          <i className="bi bi-list fs-1"></i>
        </button>

       
        <div
          className={`d-lg-flex gap-4 align-items-center ${
            open ? "d-flex flex-column mt-3" : "d-none"
          } d-lg-flex`}
        >
          <i className="bi bi-person fs-5" aria-label="perfil"></i>
          <i className="bi bi-search fs-5" aria-label="buscar"></i>
          <i className="bi bi-info-circle fs-5" aria-label="informacion"></i>
          <i className="bi bi-cart fs-5" aria-label="carrito"></i>
        </div>
      </div>
    </nav>
  );
}
