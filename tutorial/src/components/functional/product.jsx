import React, {useState} from "react";


function Product(props) {
    const [count, setCount] = useState(props.count)
    return (
        <div>
            <span className='m-2 text-info' style={{borderRadius: "15px", backgroundColor: "gray", padding: 10}}>{props.productName}</span>
            <span>{props.children}</span>
            <span className='m-2 badge bg-primary'>{productCount()}</span>
            <button onClick={handelIncrement} className='m-2 btn btn-smol btn-success'>+</button>
            <button onClick={()=>handleDecrement(count, setCount)} className='m-2 btn btn-smol btn-warning'>-</button>
            <button onClick={() => handleDelete(3600)} className='m-2 btn btn-smol btn-danger'>Delete
            </button>
        </div>
    );

    function productCount() {
        if (count >= 3)
            return count
        else
            return 0
    }

    function handelIncrement() {
        setCount(count + 1)
        console.log(count)
    }

    function handleDelete(price) {
        console.log(price)
    }


}

function handleDecrement(count, setCount) {
    setCount(count - 1)
    console.log(count)
}

export default Product