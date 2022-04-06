import { createContext, useReducer, useContext } from "react"

import { productReducerFn } from "../utils/productReducerFn";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducerFn, {
        sortBy: "",
        rating: {
            four: false,
            three: false,
            two: false,
            one: false
        },
        category: {
            monitor: false,
            headphone: false,
            keyboard: false,
        },
        gender: {
            men: false,
            women: false
        },
        sliderVal: 1000
    })
    return (
        <ProductContext.Provider value={{ state, dispatch }} >
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);

export { ProductProvider, useProduct }