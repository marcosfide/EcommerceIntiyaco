import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { getProducts } from "../../services/firebase/firestore/products";
import { useAsync } from "../../hooks/useAsync";

const ItemListContainer = ({greeting}) => {

    const {categoryId} = useParams()

    const asyncFunction = () => getProducts(categoryId)

    const {loading, data: products, error} = useAsync(asyncFunction, [categoryId])

    if(loading){
        return <h1>Cargando productos...</h1>
    }

    if(error){
        return <h1>Hubo un error</h1>
    }


    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;