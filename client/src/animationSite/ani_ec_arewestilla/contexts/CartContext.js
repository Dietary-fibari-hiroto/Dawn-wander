import React, { createContext, useContext, useReducer, useEffect } from "react";

// reducer
function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.item];
    case "REMOVE_ITEM":
      return state.filter((item) => item.id !== action.id);
    default:
      return state;
  }
}

// 安全な初期値読み込み
const initialState = (() => {
  try {
    const stored = JSON.parse(localStorage.getItem("cart"));
    return Array.isArray(stored) ? stored : [];
  } catch {
    return [];
  }
})();

// Context
const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
