import React from "react";
import { Product } from "../Shared/Product";

export interface CartProduct extends Product{ 
    quantity: number;
}

export interface GlobalContextProps {
    cartState: CartProduct[];
    setCartState: (cartState: CartProduct[]) => void;
}

export const initialCartState = {
    cartState: [] ,
    setCartState: () => {}
}

const CartContext = React.createContext<any>([]);
export const CartContextProvider = CartContext.Provider;
export default CartContext;