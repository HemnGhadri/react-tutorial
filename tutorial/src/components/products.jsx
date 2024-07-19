import React from "react";
import Product from "./functional/product";

class Products extends React.Component{
    render() {
        return(
            <div>
                <Product productName="loptops"/>
                 <Product productName="air pods"/>
            </div>
        )
    }
}

export default Products