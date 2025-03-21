// FoodDisplay.jsx
import React from "react";
import { food_items } from "../../assets/assets.js";
import FoodItem from "../FoodItems/FoodItem.jsx";
import "./FoodDisplay.css";

const FoodDisplay = () => {
  return (
    <div className="food-display">
      {food_items.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
};

export default FoodDisplay;
