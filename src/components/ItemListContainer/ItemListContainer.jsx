import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getProducts } from "../../services/firebase/firestore/products";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() =>{
        setLoading(true)

        getProducts(categoryId)
            .then(products => {
                setProducts(products)
            })
            .catch(error => {
                console.error('Hubo un error');
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])


    if(loading){
        return <h1>Cargando productos...</h1>
    }


    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;