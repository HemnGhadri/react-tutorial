import React, {useState} from "react";
import Product from "./functional/product";

const products = () => {
    const [products, seProduct] = useState([

        {id: 1, productName: "laptop", count: 0},
        {id: 2, productName: "phone", count: 1},
        {id: 3, productName: "airpods", count: 5},
    ])
    return (
        <div>
            {products.map((product, index) => (
                    <Product key={index} productName={product.productName}
                             count={product.count}> {product.productName} description ...</Product>
                )
            )}
        </div>
    )
}

export default products