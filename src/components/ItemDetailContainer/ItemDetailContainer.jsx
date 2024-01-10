import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = ({title}) => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {
        getProductById(itemId)
        .then(response => {
            setProduct(response)
        })
        .catch(error => {
            console.error(error);
        })
    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <h1>{title}</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;