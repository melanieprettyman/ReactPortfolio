import {currencyFormatter} from "../../util/formatting.js";

export default function CartItem({item, onIncr, onDec}) {
    return(
    <li className="cart-item" >

        <p>
        {item.name} - {item.quantity} x {currencyFormatter.format(item.price)}
        </p>

        <p className="cart-item-actions">
            <button onClick={onDec}>-</button>
            <span>QTY</span>
            <button onClick={onIncr}>+</button>
        </p>
    </li>
    );
}