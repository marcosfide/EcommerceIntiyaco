import whiteCart from './assets/whiteCart.png'
import './CartWidget.css'

const CartWidget = () => {

    return (
        <div className='CartWidget'>
            <img src={whiteCart} alt="cart" className='WhiteCart' />
            0
        </div>
    );
}

export default CartWidget;