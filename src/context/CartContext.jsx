import { createContext, useContext, useState } from 'react';
import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

const CartContext = createContext()

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
  
    const addItem = (productToAdd) => {
      if(!isInCart(productToAdd)){
        setCart(prev => [...prev, productToAdd])
        Toastify({
            text: `Se ha añadido ${productToAdd.quantity} ${productToAdd.name} al carrito`,
            duration: 3000,
            close: true,
            gravity: "top", 
            position: "right",
            stopOnFocus: true,
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){}
        }).showToast();
      }else{
        const cartUpdated = cart.map(prod => {
          if(prod.id === productToAdd.id) {
            return {
              ...prod,
              quantity: productToAdd.quantity
            }
          }else{
            return prod
          }
        })
        setCart(cartUpdated)
        Toastify({
            text: `Se ha actualizado la cantidad de ${productToAdd.name} a ${productToAdd.quantity} unidad/es`,
            duration: 3000,
            close: true,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){}
        }).showToast();
      }
    }
  
    const isInCart = (product) => {
      return cart.some(prod => prod.id === product.id)
    }
  
    const removeItem = (product) => {
      const cartUpdated = cart.filter(prod => prod.id !== product.id)
      setCart(cartUpdated)
      Toastify({
          text: `El producto ${product.name} ha sido eliminado del carrito`,
          duration: 3000,
          close: false,
          gravity: "top",
          position: "right",
          stopOnFocus: true,
          style: {
          background: "linear-gradient(to right, rgb(191 37 37), rgb(185 201 61))",
          },
          onClick: function(){}
      }).showToast();
    }

    const getTotalQuantity = () => {
        let accu = 0
        cart.forEach(prod => {
            accu += prod.quantity
        });
        return accu
    }

    const getTotal = () => {
        let total = 0;
        cart.forEach(prod => {
            total += (prod.price * prod.quantity)
        })
        return total
    }

    const clearCart = () => {
        setCart([])
        Toastify({
            text: `El carrito ha sido vaciado`,
            duration: 3000,
            close: false,
            gravity: "top",
            position: "right",
            stopOnFocus: true,
            style: {
            background: "linear-gradient(to right, rgb(191 37 37), rgb(185 201 61))",
            },
            onClick: function(){}
        }).showToast();
    }

    const getProductQuantity = (productId) => {
      const product = cart.find(prod => prod.id === productId)
      return product?.quantity
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, getTotalQuantity, getTotal, clearCart, getProductQuantity}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    return useContext(CartContext)
}