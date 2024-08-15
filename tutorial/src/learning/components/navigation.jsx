import React from "react";
import ProductContext from "./context/prodocts";
class Navigation extends React.Component{
    static contextType = ProductContext
    render(){
        return (
            <nav className="navbar navbar-light bg-light">
                <span className="navbar-brand mb-0 h1">Product count: {this.handleProductCounts()}</span>
            </nav>
        )
    }

    handleProductCounts = () => {
        let sum = 0
        this.context.products.forEach(function (p) {
            sum += p.count
        })
        return sum
    }
}

export default Navigation