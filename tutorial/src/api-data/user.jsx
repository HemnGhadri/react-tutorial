import React, {Component} from "react";
import {Link} from "react-router-dom";

class User extends Component {
    render() {
        return (
            <tr>
                <td scope="row">{this.props.id}</td>
                <td><img width="150" height="150" src={this.props.avatar} alt="Profile 1" className="rounded-circle"/>
                </td>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>Admin</td>
                <td>
                    <button onClick={this.handleEdite} className="btn btn-sm btn-primary">Edit</button>
                    &nbsp;
                    <button onClick={this.handleDelete} className="btn btn-sm btn-danger">Delete</button>
                    &nbsp;
                    <Link to={`/profile/${this.props.id}`} className="btn btn-sm btn-danger">Show</Link>
                </td>
            </tr>
        )
    }

    handleDelete = () => {
        this.props.onDelete(this.props.id)
    }

    handleEdite = () => {
        this.props.onEdite(this.props.id)
    }
}

export default User