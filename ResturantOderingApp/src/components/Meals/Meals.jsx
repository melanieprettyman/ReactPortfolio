import { useState, useEffect } from 'react';
import Meal from './Meal.jsx';
import useHttp from "../../hooks/useHttp.js";
import Error from "../Error.jsx";


//Display list of meals

    /*Fetches list of meals from BE
      BE app.js has app.get('/meals') which will return meal data (/data/available-meals.json) which is an array of meal obj's*/

//Create our requestConfig and pass it as a parameter to useHttp. Now we're only creating this object once and not re-executing sendReq
const requestConfig = {};

export default function Meals() {

  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp('http://localhost:3000/meals', requestConfig, []);

  if (isLoading) {
    return <p className="center">Fetching meals...</p>;
  }

  if(error){
    return <Error title="Failed to fetch meals" message={error}/>
  }

  //Return list of meals
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
          <Meal key={meal.id} meal={meal} />
      ))}
    </ul>
  );
}