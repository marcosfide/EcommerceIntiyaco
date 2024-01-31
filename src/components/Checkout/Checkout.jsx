import { addDoc, collection, documentId, getDocs, query, where, writeBatch } from "firebase/firestore";
import { useCart } from "../../context/CartContext";
import OrderForm from "../OrderForm/OrderForm";
import { db } from "../../services/firebase/fireBaseConfig";
import { useState } from "react";
import Toastify from 'toastify-js'

const Checkout = () => {

    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState(null);

    const {cart, getTotal, clearCart} = useCart();

    const createOrder = async(userData) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: userData,
                items: cart,
                total: getTotal()
            }
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            const ids = cart.map(prod => prod.id)
            const productsCollection = query(collection(db, 'products'), where(documentId(), 'in', ids))
    
            const querySnapshot = await getDocs(productsCollection)
            const {docs} = querySnapshot
    
            docs.forEach(doc => {
                const fields = doc.data();
                const stockDb = fields.stock
                
                const productsAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productsAddedToCart.quantity
    
                if(stockDb >= prodQuantity){
                    batch.update(doc.ref, {stock: stockDb - prodQuantity})
                } else{
                    outOfStock.push({id:doc.id, ...fields})
                }
            })
    
            if(outOfStock.length === 0){
                batch.commit()
                const orderCollection = collection(db, 'orders')
                const {id} = await addDoc(orderCollection, objOrder)
                setOrderId(id)
                clearCart()
            }else{
                Toastify({
                    text: "No hay stock suficiente de algun producto",
                    duration: 3000,
                    destination: "https://github.com/apvarun/toastify-js",
                    newWindow: true,
                    close: true,
                    gravity: "top", // `top` or `bottom`
                    position: "left", // `left`, `center` or `right`
                    stopOnFocus: true, // Prevents dismissing of toast on hover
                    style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                    },
                    onClick: function(){} // Callback after click
                }).showToast();
            }
            
        } catch (error) {
            console.error('Hubo un erro al crear la orden');
        } finally{
            setLoading(false)
        }
        
    }

    if(loading){
        return <h2>Se esta generando su orden... Por favor aguarde un momento</h2>
    }

    if(orderId){
        return <h2>El id de su compra es {orderId}</h2>
    }


    return (
        <>
            <h1>CHECKOUT</h1>
            <OrderForm onCreate={createOrder}/>
        </>
    )
}

export default Checkout;