import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";


const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const { addItem, getProductQuantity } = useCart()

    const handleOnAdd = (quantity) => {
        const objProductToAdd = {
            id, name, price, quantity
        }
        addItem(objProductToAdd)
    }

    const productQuantity = getProductQuantity(id)

    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section className="InfoContainerItemDetail">
                <p className="Info">
                    Categoria: {category}
                </p>
                <p className="Info">
                    Descripción: {description}
                </p>
                <p className="Info">
                    Precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={productQuantity} stock={stock} onAdd={handleOnAdd} className='ItemCount'/>
                {
                productQuantity > 0 ? 
                <Link to='/cart' className="Option">Ver carrito</Link> :
                <></>
                }
            </footer>
        </article>
    )
}

export default ItemDetail;