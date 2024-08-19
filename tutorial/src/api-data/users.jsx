import React from "react";
import {Component} from "react";
import axios from "axios";
import User from "./user";
import LoadingUsers from "./loading/loadingUsers";
import styles from "./css/style.css"

class Users extends Component {
    state = {
        users: [],
        loading: true
    };

    async componentDidMount() {
        const response = await axios.get("https://reqres.in/api/users");
        setTimeout(() => {
            this.setState({users: response.data.data, loading: false});
        }, 3000)

    }

    render() {
        return (
            <>
                <div className="container my-5">
                    <h2 className="mb-4">User List</h2>
                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Profile</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Role</th>
                                <th scope="col">Actions</th>
                            </tr>
                            </thead>
                            <tbody>

                            {this.state.loading ?
                                (<LoadingUsers></LoadingUsers>) :
                                (this.state.users.map((user) => (
                                    <User
                                        key={user.id}
                                        id={user.id}
                                        name={user.first_name + " " + user.last_name}
                                        email={user.email}
                                        avatar={user.avatar}
                                        onDelete={this.handelDelete}
                                        onEdite={this.handelEdite}
                                    ></User>
                                )))
                            }

                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        )
    }

    handelDelete = (userId) => {
        console.log(userId)
    }
    handelEdite = (userId) => {
        console.log(userId)
    }
}

export default Users