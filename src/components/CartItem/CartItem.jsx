import { useCart } from "../../context/CartContext";

const CartItem = ({ element }) => {
    const { removeItem } = useCart();

    return (
        <tr>
            <td>{element.quantity}</td>
            <td>{element.name}</td>
            <td>{element.price}</td>
            <td>{element.price * element.quantity}</td>
            <td>
                <button onClick={() => removeItem(element)} className="btn-x">
                    ×
                </button>
            </td>
        </tr>
    );
};

export default CartItem;
