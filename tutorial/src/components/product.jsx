import React from "react";
import '../css/product.css'

class Product extends React.Component {
    state = {
        productName: "",
        count: 0
    }
    price = 3600

    render() {
        // let num = 5
        const ourList = ['One', 'Two', "Three", "Four"]
        const mapList = ourList.map((item, index) => <li key={index} className='list-group-item'>{item}</li>)
        const {productName} = this.props
        return (
            <React.Fragment>
                <span className='m-2 text-info' style={{borderRadius: "15px", backgroundColor: "lightgray", padding: 10}}>{productName}</span>
                <span className='m-2 badge bg-primary'>{this.productCount()}</span>
                <span className='m-2 badge bg-secondary'>{this.price >= 0 ? this.price : "Zero"}</span>
                <button onClick={this.handelIncrement} className='m-2 btn btn-smol btn-success'>+</button>
                <button onClick={this.handleDecrement} className='m-2 btn btn-smol btn-warning'>-</button>
                <button onClick={() => this.handleDelete(this.price)} className='m-2 btn btn-smol btn-danger'>Delete
                </button>
                <button onClick={() => this.testPrice(this.price)} className='m-2 btn btn-smol btn-danger'>Test price
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
        const {count} = this.state
        if (count >= 3)
            return count
        else
            return 0
    }

    handelIncrement = () => {
        this.setState({count: this.state.count += 1})
        console.log(this.state)
    }

    handleDecrement = ()=> {
        this.setState({count: this.state.count -= 1})
        console.log(this.state)
    }

    handleDelete(price) {
        console.log(price)
    }
}

export default Product