import { createContext, useState } from "react";
import axios from "axios";

export const CartContext = createContext()


export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])

  return (
    <CartContext.Provider value={{cart, setCart}}>
      {children}
    </ CartContext.Provider>
  )
}