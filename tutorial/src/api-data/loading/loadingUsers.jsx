import Skeleton from "react-loading-skeleton";
import React from "react";
import 'react-loading-skeleton/dist/skeleton.css'

const LoadingUsers = () => {
    const arr = Array(6).fill({});
    return arr.map((value, key) => {

        return (

            <tr key={key} className="text-center">
                <td><Skeleton width={30} height={30}/></td>
                <td><Skeleton width={100} height={100} circle={true}/></td>
                <td><Skeleton width={100} height={100}/></td>
                <td><Skeleton width={100} height={100}/></td>
                <td><Skeleton width={100} height={100}/></td>
                <td><Skeleton width={200} height={100}/></td>
            </tr>
        )

    })

}

export default LoadingUsers;