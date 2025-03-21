import { createContext, useState } from "react";
import { food_items } from "../../assets/assets"; // Import food_items

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});

  const addToCart = (food) => {
    setCartItems((prevCart) => ({
      ...prevCart,
      [food.id]: (prevCart[food.id] || 0) + 1,
    }));
  };

  const removeFromCart = (id) => {
    setCartItems((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id] > 1) {
        updatedCart[id] -= 1;
      } else {
        delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  const ContextValue = {
    cartItems,
    food_list: food_items,
    addToCart,
    removeFromCart,
  };

  return (
    <StoreContext.Provider value={ContextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
