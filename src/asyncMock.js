import remeraBlanca from "./assets/remeraBlanca.png";
import remeraGris from "./assets/remeraGris.png";
import tazaClara from "./assets/taza1.png";
import tazaOscura from "./assets/taza2.png";
import llaveroCorto from "./assets/llavero2.png";
import llaveroLargo from "./assets/llavero1.png";

const products = [
    { 
        id: '1', 
        name: 'Remera blanca', 
        price: 15000, 
        category: 'remera', 
        img:remeraBlanca, 
        stock: 25, 
        description:'Descripcion de Remera blanca'
    },
    { 
        id: '2', 
        name: 'Remera Gris', 
        price: 15000, 
        category: 'remera', 
        img:remeraGris, 
        stock: 25, 
        description:'Descripcion de Remera Gris'
    },
    { 
        id: '3', 
        name: 'Taza Clara', 
        price: 9000, 
        category: 'taza', 
        img:tazaClara, 
        stock: 25, 
        description:'Descripcion de Taza'
    },
    { 
        id: '4', 
        name: 'Taza Oscura', 
        price: 9000, 
        category: 'taza', 
        img:tazaOscura, 
        stock: 25, 
        description:'Descripcion de Taza'
    },
    { 
        id: '5', 
        name: 'Llavero Corto', 
        price: 5000, 
        category: 'llavero', 
        img:llaveroCorto, 
        stock: 25, 
        description:'Descripcion de Llavero'
    },
    { 
        id: '6', 
        name: 'Llavero Largo', 
        price: 5000, 
        category: 'llavero', 
        img:llaveroLargo, 
        stock: 25, 
        description:'Descripcion de Llavero'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 500)
    })
}