

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom px-4">
      <a className="navbar-brand d-flex align-items-center" href="#">
        <img src="/logo.png" height="45" alt="logo" />
        <span className="ms-2 brand-text">POST MORTEM</span>
      </a>

      <div className="ms-auto d-flex gap-3">
        <i className="bi bi-person"></i>
        <i className="bi bi-gear"></i>
        <i className="bi bi-cart"></i>
      </div>
    </nav>
  );
}
