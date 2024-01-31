import whiteCart from './assets/whiteCart.png'
import './CartWidget.css'
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const CartWidget = () => {
    const {getTotalQuantity} = useCart()

    return (
        <>
        {
        getTotalQuantity() > 0 ? 
        <Link to='/cart' className='CartWidget'>
            <img src={whiteCart} alt="cart" className='WhiteCart' />
            {getTotalQuantity()}
        </Link>
        :
        <></>
        }
        </>
    );
}

export default CartWidget;