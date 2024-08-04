import React from "react";
import Product from "./product";
import ProductContext from "./context/prodocts";

class Products extends React.Component {

    static contextType = ProductContext

    render() {
        return (
            <div>
                {this.context.products.map((p, index) => (
                    <Product onDelete={this.context.onDelete} id={p.id} key={index} productName={p.productName}
                             count={p.count} onReset={this.context.onReset} onDecrement={this.context.onDecrement}
                             onIncrement={this.context.onIncrement}> {p.productName} description
                        ...</Product>
                ))}
            </div>
        )
    }
}

export default Products