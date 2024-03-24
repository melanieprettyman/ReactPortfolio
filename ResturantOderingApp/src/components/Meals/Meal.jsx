import {currencyFormatter} from "../../util/formatting.js";
import Button from "../UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../../store/CartContext.jsx";

/*
 Returns a meal component which is a list item article with meal info
     Meal obj in BE
     {
        "id": "m1",
        "name": "Mac & Cheese",
        "price": "8.99",
        "description": "Creamy cheddar cheese mixed with perfectly cooked macaroni, topped with crispy breadcrumbs. A classic comfort food.",
        "image": "images/mac-and-cheese.jpg"
      }

    meal.image is just the name of the file--we need a link to the images url. Use template literals to do this
       `http://localhost:3000/${meal.image}`
*/

export default function Meal({meal}){
    const cartContext = useContext(CartContext);
    function handleAddMealToCart(){
        cartContext.addItem(meal);
    }

    return(
        <li className="meal-item">
            <article>
                <img src={`http://localhost:3000/${meal.image}`} alt={meal.name}/>

                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-item-price">{currencyFormatter.format(meal.price)}</p>
                    <p className="meal-item-description">{meal.description}</p>
                </div>

                <p className="meal-item-actions">
                    <Button onClick={handleAddMealToCart} >Add to Cart</Button>
                </p>
            </article>
        </li>
    );
}