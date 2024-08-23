import React, {Component, useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";

function Profile() {
    const {id} = useParams()
    console.log(useParams())
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        // Function to fetch user data
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://reqres.in/api/users/${id}`);
                setUser(response.data.data);
                setLoading(true)

            } catch (error) {
                console.log(error)

            }
        };
        fetchUserData();

    }, []);

    return (
        <>
            {
                loading ? (
                    <div className="card" style={{width: "18rem"}}>
                        <img src={user.avatar} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                            <p className="card-text">
                                Email: {user.email} <br/>

                            </p>
                            <Link to="/users" className="btn btn-primary">Go back</Link>
                        </div>
                    </div>
                ) : (<>Loading</>)
            }

        </>
    )

}

export default Profile