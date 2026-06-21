import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import api from "../api/axios";

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCart();
  }, []);

  const fetchCart = async () => {
    try {
      const response = await api.get("/api/cart");
      setCartItems(response.data);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load cart");
    } finally {
      setLoading(false);
    }
  };

  const increaseQuantity = async (id) => {
    try {
      await api.put(`/api/cart/${id}/increase`);
      fetchCart();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update quantity");
    }
  };

  const decreaseQuantity = async (id) => {
    try {
      await api.put(`/api/cart/${id}/decrease`);
      fetchCart();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update quantity");
    }
  };

  const removeItem = async (id) => {
    try {
      await api.delete(`/api/cart/${id}`);
      toast.success("Item removed");
      fetchCart();
    } catch (error) {
      console.error(error);
      toast.error("Failed to remove item");
    }
  };

  const placeOrder = async () => {
    try {
      await api.post("/api/orders/place");
      toast.success("Order placed successfully");
      navigate("/orders");
    } catch (error) {
      console.error(error);
      toast.error("Failed to place order");
    }
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

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
      <main className="container page-padding max-w-xl">
        <h1 className="page-title">Shopping cart</h1>

        {cartItems.length === 0 ? (
          <div className="empty-state">
            <p>Your cart is empty.</p>
            <button onClick={() => navigate("/products")} className="link">
              Browse products
            </button>
          </div>
        ) : (
          <>
            <ul className="list">
              {cartItems.map((item) => (
                <li key={item.id} className="list-item">
                  <div className="list-item-main">
                    <h3>{item.product.name}</h3>
                    <p className="text-muted">
                      ₹{Number(item.product.price).toLocaleString()}
                    </p>
                  </div>
                  <div className="list-item-actions">
                    <div className="qty-control">
                      <button onClick={() => decreaseQuantity(item.id)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => increaseQuantity(item.id)}>+</button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="btn-remove"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="cart-summary">
              <p>
                Total ({cartItems.length}{" "}
                {cartItems.length === 1 ? "item" : "items"})
              </p>
              <p className="cart-total">₹{Number(total).toLocaleString()}</p>
            </div>

            <button onClick={placeOrder} className="btn-primary btn-full">
              Place order
            </button>
          </>
        )}
      </main>
    </div>
  );
}

export default Cart;