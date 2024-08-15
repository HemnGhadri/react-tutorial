import React from 'react';
import {Component} from 'react';
import Navigation from "./components/navigation"
import Products from "./components/functional/products";
import ProductContext from "./components/context/prodocts";

class App extends Component {
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
            <ProductContext.Provider value={{
                products: this.state.products,
                onDelete: this.handleDelete,
                onReset: this.handleReset,
                onIncrement: this.handelIncrement,
                onDecrement: this.handleDecrement,

            }}>
                <Navigation/>
                <Products></Products>
            </ProductContext.Provider>

        );
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

export default App;