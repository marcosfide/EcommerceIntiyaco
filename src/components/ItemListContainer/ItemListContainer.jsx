import { useEffect, useState } from "react";
// import { getProductByCategory, getProducts } from "../../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from 'react-router-dom';
import { db } from "../../services/firebase/fireBaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() =>{

        const productsCollection = categoryId ?
        query(collection(db, 'products'), where('category', '==', categoryId)) :
        collection(db, 'products')

        getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data();
                    return{id: doc.id, ...fields}
                })
                setProducts(productsAdapted);
            })
            .catch(error => {
                console.error(error);
            })

    }, [categoryId])


    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer;