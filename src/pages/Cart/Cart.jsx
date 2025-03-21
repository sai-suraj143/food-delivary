import React, { useContext } from "react";
import { StoreContext } from "../../components/context/StoreContext";
import "./Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {food_list && food_list.length > 0 ? (
          food_list.map((item) => {
            if (cartItems[item.id] > 0) {
              return (
                <div className="cart-item" key={item.id}>
                  <img
                    src={item.food_image}
                    alt={item.food_name}
                    className="cart-item-image"
                  />
                  <p>{item.food_name}</p>
                  <p>₹{item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>₹{cartItems[item.id] * item.price}</p>
                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              );
            }
            return null;
          })
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="cart-details">
          <h2>Cart Totals</h2>
          <p>
            Sub total
            <span className="cart-total">
              ₹
              {food_list.reduce((total, item) => {
                return total + (cartItems[item.id] || 0) * item.price;
              }, 0)}
            </span>
          </p>
          <hr />
          <p>
            Delivery fee <span>₹2</span>
          </p>
          <hr />
          <p>
            Total
            <span className="cart-total">
              ₹
              {food_list.reduce((total, item) => {
                return total + (cartItems[item.id] || 0) * item.price;
              }, 0) + 2}
            </span>
          </p>
        </div>
        <Link to="/order">
          <button className="proceed-to-payment">proceed to payment</button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
