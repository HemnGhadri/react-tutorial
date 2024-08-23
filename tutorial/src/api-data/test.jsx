import React from "react";
import {useParams, useLocation} from "react-router-dom";
const Test = ()=> {

    console.log(useParams())


    const queryParams = new URLSearchParams(useLocation().search);
    console.log(queryParams)


    return(
        <>
            Test
        </>
    )
}

export default Test