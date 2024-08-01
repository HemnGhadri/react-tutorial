import React, {useState} from "react";


function Product(props) {
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
        props.onIncrement(props.id)
    }

    function handleDelete() {
        props.onDelete(props.id)
    }

    function handleRest() {
        props.onReset(props.id)
    }

    function handleDecrement() {
        props.onDecrement(props.id)
    }

}

export default Product