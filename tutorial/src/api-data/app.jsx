import React, {Component} from "react";
import Users from "./users";
import Navbar from "./navbar";
import Home from "./home";
import Register from "./register";
import Login from "./login";
import Profile from "./profile";
import {Route,Routes} from "react-router-dom";
import Test from "./test";
import NotFound from "./not-found";

class App extends Component {

    render() {
        return (
            <>
                <Navbar></Navbar>
                <div className="container">
                        <Routes>
                            <Route exact path="/" element={<Home/>}/>
                            <Route path="/users" element={<Users/>}/>
                            <Route path="/profile/:id" Component={Profile}/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/Register" element={<Register/>}/>
                            <Route path={"*"} element={<NotFound/>}/>

                            # For test query and links id,...
                            <Route path="/Test/:id" element={<Test/>}/>
                        </Routes>
                </div>

            </>

        )
    }
}

export default App;