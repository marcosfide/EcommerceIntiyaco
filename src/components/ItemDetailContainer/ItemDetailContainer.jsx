import { useEffect, useState } from "react";
import "./ItemDetailContainer.css";
// import { getProductById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { db } from "../../services/firebase/fireBaseConfig";
import { getDoc, doc } from 'firebase/firestore';


const ItemDetailContainer = ({title}) => {
    const [product, setProduct] = useState(null)

    const { itemId } = useParams()

    useEffect(() => {

        const productDocument = doc(db, 'products', itemId);

        getDoc(productDocument)
            .then(queryDocumentSnapshot => {
            const fields = queryDocumentSnapshot.data()
            const productAdapted = { id: queryDocumentSnapshot.id, ...fields }
            setProduct(productAdapted)
            })
            .catch(error => {
                console.error('error', 'Hubo un error');
            })

        // getProductById(itemId)
        // .then(response => {
        //     setProduct(response)
        // })
        // .catch(error => {
        //     console.error(error);
        // })

    }, [itemId])

    return(
        <div className="ItemDetailContainer">
            <h1>{title}</h1>
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer;