import React from "react";
import {Component} from "react";
import axios from "axios";
import User from "./user";
import LoadingUsers from "./loading/loadingUsers";
import styles from "./css/style.css"

class Users extends Component {
    state = {
        users: [],
        loading: true,
        error: ""
    };

    async componentDidMount() {
        const response = await axios.get("https://reqres.in/api/users");
        setTimeout(() => {
            this.setState({users: response.data.data, loading: false});
        }, 1000)

    }

    render() {
        return (
            <>
                {this.state.error ? (
                        <div className="alert alert-danger">
                            <strong>Danger!</strong> {this.state.error}.
                        </div>
                    ) :
                    (<div></div>)
                }


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

    handelDelete = async (userId) => {
        console.log('Start delete user')
        const response = await axios.delete(`https://reqres.in/api/users/${userId}`)
        // if response.
        if (response.status === 204) {
            const newUsers = this.state.users.filter((user) => {
                if (user.id !== userId) {
                    return user
                }
            })
            this.setState({users: newUsers})
            console.log(`delete user ${userId}`)
        } else {
            this.setState({error: "Error in Delete User"})

        }
    }
    handelEdite = async (userId) => {

        await axios.put(`https://reqres.in/api/users/${userId}`).then(success => {
                // handle success
                console.log(success)
                if (success.status !== 200) {
                    throw "Error update"
                }
                const newUsers = this.state.users.map((user) => {
                    if (user.id === userId) {
                        user.first_name = "Seyed Hemn"
                        user.last_name = "Ghaderi"
                        user.avatar = "https://picsum.photos/200/"
                    }
                    return user
                })
                this.setState({users: newUsers})
            }
        ).catch(error => {
                // handle error
                console.log(error)
                this.setState({error: "Error in Update User"})
            }
        ).finally(function () {
            // always executed
            console.log("Done this function")
        })


        // console.log('start update user')
        // const response = await axios.put(`https://reqres.in/api/users/${userId}`)
        // if (response.status === 200) {
        //     const newUsers = this.state.users.map((user) => {
        //         if (user.id === userId) {
        //             user.first_name = "Seyed Hemn"
        //             user.last_name = "Ghaderi"
        //             user.avatar = "https://picsum.photos/200/"
        //         }
        //         return user
        //     })
        //     this.setState({users:newUsers})
        // }
        // else{
        //      this.setState({error: "Error in Update User"})
        // }
        // console.log('end update user')
    }
}

export default Users