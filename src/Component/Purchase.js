import React from "react";
import { useSelector } from "react-redux"

export default function PurchasePage (){

    const data = useSelector((data)=>data.userdata)
    console.log(data)
    return(
        <div>
            <h1>You are order is </h1>
            <h1>{data.userInput.address} </h1>
        </div>
    )
}
