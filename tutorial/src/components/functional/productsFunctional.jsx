import React, {useState} from "react";
import Product from "./product";

const products = () => {
    const [products, seProduct] = useState([

        {id: 1, productName: "laptop", count: 0},
        {id: 2, productName: "phone", count: 1},
        {id: 3, productName: "airpods", count: 5},
    ])
    return (
        <div>
            {products.map((product, index) => (
                    <Product key={index} productName={product.productName} id={product.id} onDelete={handleDelete}
                             onReset={handleReset} count={product.count} onIncrement={handelIncrement}
                             onDecrement={handelDecrement}> {product.productName} description ...</Product>
                )
            )}
        </div>
    )

    function handleDelete(productId) {
        const newProduct = products.filter(p => p.id !== productId)
        seProduct(newProduct)
    }

    function handleReset(productId) {
        const newProduct = products.map(p => {
                if (p.id === productId) {
                    p.count = 0;
                }
                return p
            }
        )
        console.log(newProduct)
        seProduct(newProduct)
    }

    function handelIncrement(productId) {
        const newProduct = products.map(p => {
            if (p.id === productId) {
                p.count = p.count + 1
            }
            return p
        })
        seProduct(newProduct)
    }

    function handelDecrement(productId) {
        const newProduct = products.map(p => {
            if (p.id === productId) {
                p.count = p.count - 1
            }
            return p
        })
        seProduct(newProduct)
    }
}

export default products