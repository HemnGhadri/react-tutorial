import React, {Component} from "react";
import {createRef} from "react";
import axios from "axios";

class Register extends Component {

    password = createRef()
    email = createRef()
    state = {register_status: false}


    render() {
        return (
            <>
                <div className="container my-5">
                    {
                        this.state.register_status ?
                            (<div className="alert alert-success" role="alert">
                                Successful user register
                            </div>) :
                            <></>
                    }

                    <h2 className="mb-4">User Login</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input ref={this.email} type="email" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with
                                anyone
                                else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input ref={this.password} type="password" className="form-control"
                                   id="exampleInputPassword1"
                                   placeholder="Password"/>
                        </div>
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                        </div>
                        <button onClick={this.onSubmit} type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </>
        )
    }

    onSubmit = async (e) => {
        e.preventDefault()
        console.log(this.password.current.value)
        console.log(this.email.current.value)
        const data = {
            email: this.email,
            password: this.password
        }
        const response = await axios.post(`https://reqres.in/api/register/${data}`)
        if (response.status === 201) {
            this.setState({register_status: true})
        }
        console.log(response)
        console.log(response.status)
    }
}

export default Register