import React,{useState} from 'react'
// import './AddFoodData.css'
const AddFoodData = () => {
    const [foodName, setFoodName] =useState('')
    const [foodPrice, setFoodPrice] =useState('')
    const [foodDescription, setFoodDescription] =useState('')
    const [foodImage, setFoodImage] =useState('')
    const [foodCatagory, setFoodCatagory]=useState('')

    const [restaurantName, setRestaurantName]= useState('')
    const [restaurantAddress, setRestaurantAddress]= useState('')  
    const [restaurantPhone, setRestaurantPhone]= useState('')

  console.log(foodName)
  return (
    <div className="form-outer">
        <h1>Add Food Data</h1>
        <form className="form-inner">
            <label>Food Name</label>
            <input type="text" name="food_name" 
               onChange={(e)=>{ setFoodName(e.target.value) }} />
            <br/>
            <label>Food Description</label>
            <input type="text" name="food_description" />
            <br/>
            <label>Food Price</label>
            <input type="text" name="food_price" />
            <br/>
            <br>
            <label>Food Catagory</label>
            <input type="text" name="food_catagory" />
            </br>
            <label>Food Image</label>
            <input type="file" name="food_image" />
            <br/>
            <label>Restaurant Name</label>
            <input type="text" name="restaurant_name" />
            <br/>
            <label>Restaurant Address</label>
            <input type="text" name="restaurant_address" />
            <br/>
            <label>Restaurant Phone</label>
            <input type="text" name="restaurant_phone" />
            <br/>
            <button>Add Food</button>
            
        </form>
    </div>
  )
}

export default AddFoodData