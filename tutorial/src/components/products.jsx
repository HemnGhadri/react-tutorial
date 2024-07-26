import React from "react";
import Product from "./product";

class Products extends React.Component {

    stats = {
        products:
            [
                {id: 1, productName: "laptop", count: 0},
                {id: 2, productName: "phone", count: 1},
                {id: 3, productName: "airpods", count: 5},
            ]
    }

    render() {
        return (
            <div>
                {this.stats.products.map((p, index) => (
                    <Product key={index} productName={p.productName} count={p.count}> {p.productName} description
                        ...</Product>
                ))}
            </div>
        )
    }
}

export default Products