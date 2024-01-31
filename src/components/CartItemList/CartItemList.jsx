import './CartItemList.css';
import { useCart } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import CartItem from '../CartItem/CartItem';

const CartItemList = () => {
    const { cart, clearCart, getTotalQuantity, getTotal } = useCart();

    return (
        <div className='CartItemList'>
        <table className='ListCart'>
            <thead>
                <tr>
                    <th><strong>Cantidad</strong></th>
                    <th><strong>Producto</strong></th>
                    <th><strong>Precio</strong></th>
                    <th><strong>Total</strong></th>
                    <th><strong>Remover</strong></th>
                </tr>
            </thead>
            <tbody>
                {cart.map(element => (
                    <CartItem key={element.id} element={element} />
                ))}
                <tr>
                    <td><strong>{getTotalQuantity()}</strong></td>
                    <td><strong>Productos</strong></td>
                    <td></td>
                    <td><strong>{getTotal()}</strong></td>
                    <td>
                        <button onClick={() => clearCart()} className='btn-x'>
                            Vaciar carrito
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <Link to='/checkout' className='Option'>
            Finalizar compra
        </Link>
        </div>
    );
};

export default CartItemList;
