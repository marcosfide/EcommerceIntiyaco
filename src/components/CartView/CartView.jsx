import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import CartItemList from "../CartItemList/CartItemList";


const CartView = () => {
    const {getTotalQuantity} = useCart()
    return(
        <>
        {
            getTotalQuantity() > 0 ?
                <>
                    <h1>Proctos en el carrito</h1>
                    <CartItemList/>
                </>
                :
                <>
                    <h2>No hay productos en el carrito</h2>
                    <Link to='/' className="Option">
                        Ver productos
                    </Link>
                </>
        }
        </>
    )

}


export default CartView;