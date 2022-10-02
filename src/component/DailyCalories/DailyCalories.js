import { response } from "express";
import { Component, useState, useEffect } from "react";
const axios = require("axios");

function DailyCalories() {
  const [restaurant, setRestaurant] = useState("");
  const [meal, setMeal] = useState(null);
  const [calories, setCalories] = useState(2000);

    function handleChange(e){
      setCalories(e.target.value);
    }
    function getMealData(){
      fetch(
        `https://api.spoonacular.com/mealplanner/generate?apiKey=724f1998bda24a498285eba50cd247fb&timeFrame=day&targetCalories=${calories}`
      )
      .then((response) => response.json())
      .then((data) => {
          setMeal(data)
          console.log(data)
      })
      .catch(() => {
        console.log("error")
      })
    }

    return (
      <>
      <section className="controls">
        <input type="number" placeholder="calories" onChange={handleChange} />
      </section>
      <button onClick={getMealData}>Get Daily Meal</button>
    </>
  );
}

export default DailyCalories;