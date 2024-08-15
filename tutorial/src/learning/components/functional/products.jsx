import React, {useState} from "react";
import ProductContext from "../context/prodocts";
import {useContext} from "react";
import Product from "./product";

const products = () => {
    const productContext = useContext(ProductContext)
    return (
        <div>
            {productContext.products.map((product, index) => (
                    <Product key={index} productName={product.productName} id={product.id} onDelete={handleDelete}
                             onReset={handleReset} count={product.count} onIncrement={handelIncrement}
                             onDecrement={handelDecrement}> {product.productName} description ...</Product>
                )
            )}
        </div>
    )

    function handleDelete(productId) {
        productContext.onDelete(productId)
    }

    function handleReset(productId) {
        productContext.onReset(productId)
    }

    function handelIncrement(productId) {
        productContext.onIncrement(productId)
    }

    function handelDecrement(productId) {
        productContext.onDecrement(productId)
    }
}

export default products