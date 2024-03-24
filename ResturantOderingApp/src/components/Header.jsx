//import logoImg from '../assets/logo.jpg';
import logoImg from '../assets/logo2.jpeg';

import Button from "./UI/Button.jsx";
import {useContext} from "react";
import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Header() {
    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);

    const totalCartContext = cartContext.items.reduce((totalNumberOfItem,item)=>{
        return totalNumberOfItem + item.quantity;
    },0);

    function handleShowCart(){
        userProgressContext.showCart();
    }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>Prettyman's Peculiar Pantry</h1>
      </div>
      <nav>
        <Button textOnly={true} onClick={handleShowCart}> Cart ({totalCartContext}) </Button>
      </nav>
    </header>
  );
}