import React, {useState} from "react";
import ProductContext from "../context/prodocts";
import {useContext} from "react";


function Product(props) {
    const productContext = useContext(ProductContext)
    return (
        <div>
            <span className='m-2 text-info'
                  style={{borderRadius: "15px", backgroundColor: "gray", padding: 10}}>{props.productName}</span>
            <button onClick={handleRest} className='m-2 btn btn-smol btn-secondary'>Reset</button>
            <span>{props.children}</span>
            <span className='m-2 badge bg-primary'>{productCount()}</span>
            <button onClick={handelIncrement} className='m-2 btn btn-smol btn-success'>+</button>
            <button onClick={handleDecrement} className='m-2 btn btn-smol btn-warning'>-</button>
            <button onClick={handleDelete} className='m-2 btn btn-smol btn-danger'>Delete
            </button>
        </div>
    );

    function productCount() {
        console.log(props.count)
        if (props.count >= 1)
            return props.count
        else
            return "zero"
    }

    function handelIncrement() {
        productContext.onIncrement(props.id)
    }

    function handleDelete() {
        productContext.onDelete(props.id)
    }

    function handleRest() {
        productContext.onReset(props.id)
    }

    function handleDecrement() {
        productContext.onDecrement(props.id)
    }

}

export default Product