import React from "react";
import '../css/product.css'

class Products extends React.Component {

    price = 3600

    render() {
        let count = 5
        const ourList = ['One', 'Two', "Three", "Four"]
        const mapList = ourList.map((item, index) => <li key={index} className='list-group-item'>{item}</li>)
        return (
            <React.Fragment>
                <span className='m-2 text-info' style={{borderRadius: "15px", backgroundColor: "gray", padding: 10}}>Our products</span>
                <span className='m-2 badge bg-primary'>{this.productCount(count)}</span>
                <span className='m-2 badge bg-secondary'>{this.price >= 0 ? this.price : "Zero"}</span>
                <button onClick={this.handelIncrement} className='m-2 btn btn-smol btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn btn-smol btn-warning'>-</button>
                <button onClick={()=>this.handleDelete(this.price)} className='m-2 btn btn-smol btn-danger'>Delete</button>
                <hr></hr>
                <ul className="list-group">
                    {mapList}
                </ul>
            </React.Fragment>
        )
    }

    productCount(count) {
        if (count >= 5)
            return count
        else
            return 0
    }

    handelIncrement = ()=> {
        console.log(this.price)
    }

    handleDecrement() {
        console.log("Decrement")
    }

    handleDelete(price) {
        console.log(price)
    }
}

export default Products