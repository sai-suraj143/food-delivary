import "./PlaceOrder.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../components/context/StoreContext";
const PlaceOrder = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);
  return (
    <form action="php" className="proceed-payment">
      <div className="payment-left">
        <div className="multifields">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
        </div>
        <div className="multifields">
          <input type="email" name="email" placeholder="Email" />
          <input type="text" placeholder="Street" />
        </div>
        <div className="multifields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multifields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <div className="multifields">
          <input type="text" placeholder="phone" />
        </div>
      </div>
      <div className="payment-right">
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
          <Link to="/order">
            <button className="proceed-to-payment">Check out</button>
          </Link>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
