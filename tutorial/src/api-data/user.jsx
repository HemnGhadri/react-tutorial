import React, {Component} from "react";

class User extends Component {
    render() {
        return (
            <tr>
                <td scope="row">{this.props.id}</td>
                <td><img src={this.props.avatar} alt="Profile 1" className="rounded-circle"/></td>
                <td>{this.props.name}</td>
                <td>{this.props.email}</td>
                <td>Admin</td>
                <td>
                    <button onClick={this.handleEdite} className="btn btn-sm btn-primary">Edit</button>&nbsp;
                    <button onClick={this.handleDelete}  className="btn btn-sm btn-danger">Delete</button>
                </td>
            </tr>
        )
    }

    handleDelete=()=>{
        this.props.onDelete(this.props.id)
    }

    handleEdite=()=>{
        this.props.onEdite(this.props.id)
    }
}

export default User