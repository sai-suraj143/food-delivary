import React, { useContext } from "react";
import "./FoodItem.css";
import { StoreContext } from "../../components/context/StoreContext";
import { Link } from "react-router-dom";

const FoodItem = ({ food }) => {
  const { addToCart } = useContext(StoreContext); // Get addToCart function

  return (
    <div className="food-item food-item-border">
      <img
        src={food.food_image}
        alt={food.food_name}
        className="food-item-image"
      />
      <h2 className="food-item-title">{food.food_name}</h2>
      <p className="food-item-category">Category: {food.food_category}</p>
      <p className="food-item-type">Type: {food.food_type}</p>
      <p className="food-item-price">₹{food.price}</p>
      <button onClick={() => addToCart(food)}>Add</button>{" "}
    </div>
  );
};

export default FoodItem;
