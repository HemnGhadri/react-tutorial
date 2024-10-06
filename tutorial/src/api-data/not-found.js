import React, {Component} from "react";
import {Link} from "react-router-dom";

class NotFound extends Component{
    render() {
        return(
            <>
            <h1>Not Found page </h1>
            <Link to={"/users/"}>Go Back Users</Link>
            </>
        )
    }
}

export default NotFound