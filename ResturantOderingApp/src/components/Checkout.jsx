import Modal from "./UI/Modal.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import useHttp from "../hooks/useHttp.js";
import Error from "./Error.jsx";

import {useContext} from "react";

import CartContext from "../store/CartContext.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";
import {currencyFormatter} from "../util/formatting.js";

//Create our requestConfig and pass it as a parameter to useHttp. Now we're only creating this object once and not re-executing sendReq
const requestConfig = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
};
export default function Checkout(){

    const cartContext = useContext(CartContext);
    const userProgressContext = useContext(UserProgressContext);

    const {
            data,
            isLoading: isSending,
            error,
            sendRequest,
            clearData
          } = useHttp('http://localhost:3000/orders', requestConfig);

    const cartTotal = cartContext.items.reduce(
        (totalPrice, item) => totalPrice + (item.quantity * item.price), 0
    );

    function handleClose() {
        userProgressContext.hideCheckout();
    }

    function handleFinish() {
        userProgressContext.hideCheckout();
        cartContext.clearCart();
        clearData();
   }

    function handleSubmit(event) {

        event.preventDefault();

        const formData = new FormData(event.target);
        const customerData = Object.fromEntries(formData.entries()); // { email: test@example.com }

        //Send order object
        sendRequest(
          JSON.stringify({
            order: {
              items: CartContext.items,
              customer: customerData,
            },
          })
        );
    }

    //Remove buttons from screen if sending form
    let actions = (
        <>
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button>Submit Order</Button>
        </>
      );

      if (isSending) {
        actions = <span>Sending order data...</span>;
      }

      //Display a success message if data was sent without error
      if (data && !error) {
        return (
          <Modal
            open={userProgressContext.progress === 'checkout'}
            onClose={handleFinish}
          >
            <h2>Success!</h2>
            <p>Your order was submitted successfully.</p>
            <p>
              We will get back to you with more details via email within the next
              few minutes.
            </p>
            <p className="modal-actions">
              <Button onClick={handleFinish}>Okay</Button>
            </p>
          </Modal>
        );
      }

    return(
        <Modal open={userProgressContext.progress === 'checkout'} onClose={handleClose} >
            <form onSubmit={handleSubmit}>
                <h2>Checkout</h2>
                <p>Total Amount: {currencyFormatter.format(cartTotal)} </p>

                <Input label="Full Name" type="text" id="name"/>
                <Input label="E-Mail Address" type="email" id="email"/>
                <Input label="Street" type="text" id="street"/>
                <div className="control-row">
                    <Input label="Postal Code" type="text" id="postal-code"/>
                    <Input label="City" type="text" id="city"/>
                </div>
                {error && <Error title="Failed to submit order" message={error} />}

                <p className="modal-actions">{actions}</p>


            </form>
        </Modal>
    );
}