import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { useEffect } from "react";
import { Button, Drawer } from 'antd';
import { useSelector, useDispatch } from "react-redux"
import { adduserdata } from "../Redux/Action/userdata";

 
export default function Recipe (){

    const [mealData, setMealData] = useState({})
    const [userData, setUserData] = useState({})

    const getuserdata = (event) => {
      setUserData({...userData,[event.target.name]:event.target.value})
    }

    const data = useSelector((data)=>data)
    console.log(data)

    const navigate = useNavigate()

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
      setOpen(true);
    };
    const onClose = () => {
      setOpen(false);
    };

    const dispatch = useDispatch()

   const {id} = useParams()

   useEffect(()=>{

    axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
         .then(res => {
            console.log(res.data)
            setMealData(res.data.meals[0])
           
         }) 
         .catch(err => {
            console.log(err)
         })  
    
},[])

const checkout = () => {
  dispatch(adduserdata({
   mealdetail:mealData,
   userInput:userData
}))
  navigate("/purchase")
}

    return(
        <div className="recipedetails">
            <p>{mealData.strMeal}</p>
            <h1><u>Recipe</u></h1>
            <h1>{mealData.strIngredient1}</h1>
            <h1>{mealData.strIngredient2}</h1>
            <h1>{mealData.strIngredient3}</h1>
            <h1>{mealData.strIngredient4}</h1>
            <h1>{mealData.strIngredient5}</h1>
            <h1>{mealData.strIngredient6}</h1>
            <h1>{mealData.strIngredient7}</h1>
            <h1>{mealData.strIngredient8}</h1>
            <h1><u>Instructions</u></h1>
            <h1>{mealData.strInstructions}</h1>

            <div>
            <Button type="primary" onClick={showDrawer}>Checkout</Button>
      <Drawer title="Shipping Info" placement="right" onClose={onClose} open={open}>
        <p><i>Hey Chef !</i></p>
        <p>Please Enter the Shipping address</p>
        <form>
        <input name="address" type="text" placeholder="Address line" onChange={(e)=>getuserdata(e)}/>
        <input name="address1" type="text" placeholder="Address line"onChange={(e)=>getuserdata(e)}/>
        <input name="address2" type="text" placeholder="Address line" onChange={(e)=>getuserdata(e)}/>
        </form>
        {/* <form>
      <textarea  placeholder="Your Recipe will delivery here" />
    </form> */}

    <p><i> "Good food warms the heart and feeds the soul"</i></p>

        <Button onClick={()=>checkout()}>Purchase</Button>
      </Drawer>
            </div>
        </div>


            

    )
}
