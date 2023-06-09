import React from "react";
import './itemCart.css'
import { useCartContext } from "../../context/cartContext";

const ItemCart = ({ product }) => {

    const { removeProduct } = useCartContext();

    return (
        <div className="itemCart">
            <div>
                <p>Titulo: {product.name}</p>
                <p>Precio: ${product.price}</p>
                <p>Cantidad: {product.quantity}</p>
                <p>Subtotal: ${product.quantity * product.price}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export { ItemCart }