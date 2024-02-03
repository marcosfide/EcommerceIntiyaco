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
        <article className="ItemDetail">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <section className="InfoContainerItemDetail">
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
                <div className="RightDetail">
                    <div className="Description">
                        <p className="Info">
                            <strong>Categoria:</strong> {category}
                        </p>
                        <p className="Info">
                            <strong>Descripción:</strong> {description}
                        </p>
                        <p className="Info">
                            <strong>Precio:</strong> ${price}
                        </p>
                    </div>
                    <footer className="ItemFooter">
                        <ItemCount initial={productQuantity} stock={stock} onAdd={handleOnAdd} className='ItemCount'/>
                        {
                        productQuantity > 0 ? 
                        <Link to='/cart' className="Option">Ver carrito</Link> :
                        <></>
                        }
                    </footer>
                </div>
            </section>
        </article>
    )
}

export default ItemDetail;