import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import api from "../api/axios";
import Navbar from "../components/Navbar";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await api.get("/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products");
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId) => {
    try {
      await api.post("/api/cart/add", { productId, quantity: 1 });
      toast.success("Added to cart");
    } catch (error) {
      console.error(error);
      toast.error("Failed to add to cart");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="loader-center">
          <div className="spinner" />
        </div>
      </>
    );
  }

  return (
    <div className="page">
      <Navbar />
      <main className="container page-padding">
        <h1 className="page-title">Products</h1>
        <p className="page-subtitle">Browse our latest collection</p>

        {products.length === 0 ? (
          <div className="empty-state">
            <p>No products available.</p>
          </div>
        ) : (
          <div className="grid">
            {products.map((product) => (
              <div key={product.id} className="card">
                <div className="card-image">
                  {product.imageUrl ? (
                    <img src={product.imageUrl} alt={product.name} />
                  ) : (
                    <span>No image</span>
                  )}
                </div>
                <div className="card-body">
                  <h3 className="card-title">{product.name}</h3>
                  <p className="card-description" title={product.description}>
                    {product.description}
                  </p>
                  <p className="card-category">{product.category}</p>
                  <p className="card-price">
                    ₹{Number(product.price).toLocaleString()}
                  </p>
                  <button
                    onClick={() => addToCart(product.id)}
                    className="btn-secondary"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default Products;