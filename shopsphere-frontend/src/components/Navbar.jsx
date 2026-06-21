import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button
          onClick={() => navigate("/products")}
          className="navbar-brand"
        >
          ShopSphere
        </button>

        <nav className="navbar-nav">
          <button onClick={() => navigate("/products")}>Products</button>
          <button onClick={() => navigate("/orders")}>Orders</button>
          <button onClick={() => navigate("/cart")}>Cart</button>
          <button onClick={logout} className="navbar-logout">
            Logout
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;