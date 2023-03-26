import React, { useEffect, useState } from "react";
import { Card } from  "antd"
import { useNavigate } from "react-router-dom"
import axios from "axios";
import { useSelector, useDispatch } from "react-redux"
import { adduserdata } from "../Redux/Action/userdata";

const { Meta } = Card;



export default function ListPage() {

    const [mealList, setMealList] = useState([])

    const data = useSelector((data)=>data)
    console.log(data)

    


    useEffect(()=>{

        axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
             .then(res => {
                console.log(res.data.meals.slice(0,10))
                setMealList(res.data.meals.slice(0,10))
             }) 
             .catch(err => {
                console.log(err)
             })  
        
    },[])


    const navigate = useNavigate()


    function onInputhandle(id){
        navigate(`/recipe/${id}`)
    }

    



    // function Filteroption(){
    //     const [values,setvalues] = useState()

    //     useEffect(()=>{
    //         fetch("").then
    //     })
    // }

    const mealListMap = mealList.map((data)=>{
        return  <div className="CardOne">
        <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src={data.strMealThumb}/>}
            onClick={()=>onInputhandle(data.idMeal)}>
            <Meta title={data.strMeal} description="Tap to explore more about the dish" />
        </Card>
       
        </div>
    })

    return (
        <div className="Container">
            <div className="Semi-Container">
                {mealListMap}

            </div>

        </div>
        

    )
}