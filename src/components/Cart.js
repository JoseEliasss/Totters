import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, addToCart, removeFromCart } from "../redux/CartSlice";
import "../gallery/style/Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  // Calculate total amount
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleOrderNow = () => {
    setShowModal(true);
  };

  const handleSubmitOrder = (e) => {
    e.preventDefault();
    setShowModal(false);
    dispatch(clearCart());
  };

  // If cart is empty, show a styled message
  if (cartItems.length === 0) {
    return (
      <p style={{
        textAlign: "center",
        fontSize: "25px",
        fontWeight: "800",
        margin: "auto",
        textTransform: "uppercase",
        letterSpacing: "2px",
        margin: "200px"
      }}>
        Your cart is empty
      </p>
    );
  }

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.DPic} alt={item.dName} className="cart-image" />
          <div className="cart-item-info">
            <h3>{item.dName}</h3>
            <p>{item.restaurant}</p>
            <p>Quantity: x{item.quantity}</p>
            <p>${(item.price * item.quantity).toFixed(2)}</p>
            <div className="cart-item-controls">
              <button
                className="incrementButton"
                onClick={() => dispatch(addToCart(item))}
              >
                +
              </button>
              <button
                className="decrementButton"
                onClick={() => dispatch(removeFromCart(item))}
              >
                -
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Display Total Amount */}
      <div className="total-amount">
        <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      </div>

      <button className="orderButton" onClick={handleOrderNow}>
        Order Now
      </button>

      {showModal && (
        <div className="order-modal">
          <div className="modal-content">
            <h2>Complete Your Order</h2>
            <form onSubmit={handleSubmitOrder}>
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Phone Number:
                <input type="text" name="phone" required />
              </label>
              <label>
                Location:
                <input type="text" name="location" required />
              </label>
              <label>
                Payment Type:
                <select name="paymentType" required>
                  <option value="credit">Credit Card</option>
                  <option value="paypal">Whish Money</option>
                  <option value="cashLL">Lebanese Pound</option>
                  <option value="cash$">US Dollar</option>
                </select>
              </label>
              <button type="submit">Submit Order</button>
              <button type="button" onClick={() => setShowModal(false)}>
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
