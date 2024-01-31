import { useState, useEffect } from "react"
import './ItemCount.css'



const ItemCount = ({stock, initial = 1, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    useEffect(() => {
        setQuantity(initial);
    }, [initial]);

    const increment = () => {
        if(quantity < stock){
            setQuantity(quantity+1)
        }else{
            console.warn('Limite de stock');
        }
    }

    const decrement = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div className="Counter">  
            <div className="Controls">
                <button  className="Option" onClick={decrement}> - </button>
                <h4 className="Number">{quantity}</h4>
                <button className="Option" onClick={increment}> + </button>
            </div>
            <div>
                <button className="Option" onClick={() => onAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    )
}


export default ItemCount