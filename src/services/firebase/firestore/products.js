import { db } from "../fireBaseConfig";
import { getDoc, doc, getDocs, collection, query, where } from "firebase/firestore";

export const getProducts = (categoryId) => {
    const productsCollection = categoryId ?
        query(collection(db, 'products'), where('category', '==', categoryId)) :
        collection(db, 'products')

        return getDocs(productsCollection)
            .then(querySnapshot => {
                const productsAdapted = querySnapshot.docs.map(doc => {
                    const fields = doc.data();
                    return{id: doc.id, ...fields}
                })
                return productsAdapted
            })
            .catch(error => {
                return error
            })
}

export const getProductsById = (itemId) => {

    const productDocument = doc(db, 'products', itemId);
    
    return getDoc(productDocument)
        .then(queryDocumentSnapshot => {
            const fields = queryDocumentSnapshot.data();
            const productAdapted = { id: queryDocumentSnapshot.id, ...fields };
            return productAdapted
        })
        .catch(error => {
            return error
        })
}