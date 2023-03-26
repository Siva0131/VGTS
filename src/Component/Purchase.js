import React from "react";
import { useSelector } from "react-redux"

export default function PurchasePage (){

    const data = useSelector((data)=>data.userdata)
    console.log(data)
    return(
        <div className="purchasepage">
            <p><u>Name :</u>{data.userInput.name}</p>
            <p><u>Email ID :</u>{data.userInput.email}</p>
            <p><u>Address:</u></p>
            <p>{data.userInput.address} </p>
            <p>{data.userInput.address1} </p>
            <p>{data.userInput.address2} </p>
            <p><i>"Good food is the foundation of genuine happiness"</i> </p>
        </div>
    )
}
