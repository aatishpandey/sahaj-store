import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../utils/CartReducer";
import { useAxios } from "../utils/useAxios";
import { useState, useEffect } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartState, cartDispatch] = useReducer(cartReducer, {
        myCart: [],
        myWishlist: [],
    });

    const { apiRes, loading } = useAxios("/api/products");
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        if (!loading) {
            setProductList(apiRes.products);
        }
    },[apiRes,loading])

    return (
        <CartContext.Provider value={{ cartState, cartDispatch, productList, loading }}>
            {children}
        </CartContext.Provider>
    );
}

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
