import {createContext} from "react";

const ProductContext = createContext({
    products:[],
    onDelete:()=>{},
    onReset:()=>{},
    onIncrement:()=>{},
    onDecrement:()=>{},
})

export default ProductContext