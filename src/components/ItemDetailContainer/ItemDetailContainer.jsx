import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductsById } from "../../services/firebase/firestore/products";


const ItemDetailContainer = ({title}) => {
    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()

    useEffect(() => {
        setLoading(true);

        getProductsById(itemId)
            .then(product => {
                setProduct(product)
            })
            .catch(error => {
                console.error('Hubo un error');
            })
            .finally(() => {
                setLoading(false);
            })
        
    }, [itemId]);
    

    if(loading){
        return <h2>Cargando detalle del producto...</h2>
    }

    return(
        <div className="ItemDetailContainer">
            <h1>{title}</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;