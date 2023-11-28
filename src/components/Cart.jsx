import {useId} from "react";
import {CartIcon, ClearCartIcon} from "./Icons.jsx";
import './Cart.css'
import {useCart} from "../hooks/useCart.js";

function CartItem({thumbnail, price, title, quantity, addToCart}) {
    return (
        <li>
            <img src={thumbnail} alt={title}>
            </img>
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckBoxId = useId()
    const {cart, clearCart, addToCart} = useCart()
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckBoxId}>
                <CartIcon></CartIcon>
            </label>
            <input id={cartCheckBoxId} type='checkbox' hidden/>

            <aside className='cart'>
                <ul>
                    {
                        cart.map(product => (
                                <CartItem
                                    key={product.id}
                                    addToCart={() => addToCart(product)}
                                    {...product}/>
                            )
                        )
                    }
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon></ClearCartIcon>
                </button>
            </aside>
        </>
    )
}