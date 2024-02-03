import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";


const ItemDetailContainer = ({title}) => {

    const {itemId} = useParams()

    const asyncFunction = () => getProductsById(itemId)

    const {loading, data: product, error} = useAsync(asyncFunction, itemId)

    if(loading){
        return <h1>Cargando productos...</h1>
    }

    if(error){
        return <h1>Hubo un error</h1>
    }

    return(
        <div className="ItemDetailContainer">
            <h1>{title}</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;