import {useContext} from "react";
import Modal from "../UI/Modal.jsx";
import Button from "../UI/Button.jsx";
import CartContext from "../../store/CartContext.jsx";
import {currencyFormatter} from "../../util/formatting.js";
import UserProgressContext, {UserProgressContextProvider} from "../../store/UserProgressContext.jsx";
import CartItem from "./CartItem.jsx";


//Responsible for outputting the cart data on the screen
//Should return a modal
export default function Cart(){

    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);


    const cartTotal = cartContext.items.reduce(
        (totalPrice, item) => totalPrice + (item.quantity * item.price), 0
    );

    function handleCloseCart(){
        userProgressContext.hideCart();
    }
    function handleGoToCheckout(){
        userProgressContext.showCheckout();
    }

    //using our context, access list of items[], map through them--output a cart item
    return <Modal className="cart"
                  open={userProgressContext.progress ==='cart'}
                  onClose={userProgressContext.progress === 'cart' ? handleCloseCart : null}>

        <h2>Your Cart</h2>

        <ul>
            {cartContext.items.map((item) => (
                    <CartItem key={ item.id}
                              item={item}
                              onIncr={()=>cartContext.addItem(item)}
                              onDec={()=>cartContext.removeItem(item.id)}
                    />
                )
            )}
        </ul>

        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions">
            <Button textOnly={true} onClick={handleCloseCart} >Close</Button>
            {/*conditionally show button if there are items in cart*/}
            {cartContext.items.length >0 &&
                (<Button onClick={handleGoToCheckout}>Go to Checkout</Button>)
            }
        </p>

    </Modal>
}