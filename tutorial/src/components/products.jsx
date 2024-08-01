import React from "react";
import Product from "./product";

class Products extends React.Component {

    state = {
        products:
            [
                {id: 1, productName: "laptop", count: 7},
                {id: 2, productName: "phone", count: 1},
                {id: 3, productName: "airpods", count: 5},
            ]
    }

    render() {
        return (
            <div>
                {this.state.products.map((p, index) => (
                    <Product onDelete={this.handleDelete} id={p.id} key={index} productName={p.productName}
                             count={p.count} onReset={this.handleReset} onDecrement={this.handleDecrement}
                             onIncrement={this.handelIncrement}> {p.productName} description
                        ...</Product>
                ))}
            </div>
        )
    }

    handleDelete = (productId) => {
        const newProducts = this.state.products.filter(p => p.id !== productId);
        this.setState({products: newProducts});
    }

    handleReset = (productId) => {
        const newProducts = this.state.products.map(p => {
            p.count = p.id === productId ? 0 : p.count;
            return p
        });
        console.log(newProducts);
        this.setState({products: newProducts});
        console.log("reset")
    }
    handleDecrement = (productId) => {
        const newProducts = this.state.products.map(p => {
            if (p.id === productId) {
                p.count = p.count - 1
            }
            return p
        });
        this.setState({products: newProducts})
    }
    handelIncrement = (productId) => {
        const newProducts = this.state.products.map(p => {
            if (p.id === productId) {
                p.count = p.count + 1
            }
            return p
        });
        this.setState({products: newProducts})
    }
}

export default Products