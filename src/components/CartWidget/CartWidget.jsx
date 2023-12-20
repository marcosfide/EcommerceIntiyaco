import whiteCart from './assets/whiteCart.png'

const CartWidget = () => {
    const cartStyle = {
        width: '22px',
        padding: '5px',
        marginTop: '5px',
        marginBottom: '-8px',
        color: 'white'
    };

    return (
        <div>
            <img src={whiteCart} alt="cart" style={cartStyle} />
            0
        </div>
    );
}

export default CartWidget;