import './Footer.css'
import {useFilters} from "../hooks/useFilters.js";
import {useCart} from "../hooks/useCart.js";
export function Footer(){
    const {filters} =  useFilters()
    const {cart} = useCart()
    return(
        <footer className='footer'>
            {
                JSON.stringify(filters,null,2)
            }
            {
                JSON.stringify(cart,null,2)
            }
            <h4>Prueba Técnica de React </h4>
        </footer>
    )
}