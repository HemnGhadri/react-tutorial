import React from "react";
import '../css/product.css'

class Product extends React.Component {
    price = 3600

    render() {
        // let num = 5
        const ourList = ['One', 'Two', "Three", "Four"]
        const mapList = ourList.map((item, index) => <li key={index} className='list-group-item'>{item}</li>)
        const {productName} = this.props
        return (
            <React.Fragment>
                <button onClick={this.handelReset} className='m-2 btn btn-smol btn-secondary'>Reset</button>
                <span className='m-2 text-info'
                      style={{borderRadius: "15px", backgroundColor: "lightgray", padding: 10}}>{this.props.productName}</span>
                <span>{this.props.children}</span>
                <span className='m-2 badge bg-primary'>{this.productCount()}</span>
                <span className='m-2 badge bg-secondary'>{this.price >= 0 ? this.price : "Zero"}</span>
                <button onClick={this.handelIncrement} className='m-2 btn btn-smol btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn btn-smol btn-warning'>-</button>
                <button onClick={this.handleDelete} className='m-2 btn btn-smol btn-danger'>Delete
                </button>

                <button onClick={() => this.testPrice(this.price)} className='m-2 btn btn-smol btn-primary'>Test price
                </button>
                <hr></hr>
                <ul className="list-group">
                    {mapList}
                </ul>
            </React.Fragment>
        )
    }

    testPrice(num) {
        if (num >= 5)
            return num
        else
            return 0
    }

    productCount() {
        const {count} = this.props
        if (count >= 0)
            return count
        else
            return "zero"
    }

    handelIncrement = () => {
        this.props.onIncrement(this.props.id)
    }

    handleDecrement = () => {
        this.props.onDecrement(this.props.id)
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id);
    }
    handelReset = () => {
        this.props.onReset(this.props.id);
    }
}

export default Product