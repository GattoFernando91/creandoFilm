import React from "react";
import { useCartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";
import { ItemCart } from "../ItemCart";
import { addDoc, collection, getFirestore} from 'firebase/firestore'
import './cart.css'

const Cart = () => {
    const { cart, totalPrice } = useCartContext();

    const order = {
        buyer: {
            name: 'Fernando',
            email: 'gatto91@gmail.com',
            phone: '1565869384',
            address: 'Ravignani 1872'
        },
        items: cart.map(product => ({ id: product.id , title: product.id, price: product.price, quantity: product.quantity })),
        total: totalPrice,
    }

    const handleClick = () => {
        const db = getFirestore()
        const ordersCollection = collection(db, 'orders')
        addDoc(ordersCollection, order)
            .then(({ id }) => console.log(id))
    }

    if (cart.length === 0) {
        return (
            <>
            <p>No hay servicios en el carrito.</p>
            <Link to='/Servicios'>Comprar Servicios</Link>
            </>
        )
    }

    return (
        <>
        {
            cart.map(product => <ItemCart key={product.id} product={product} />)
        }
        <p>Total: ${totalPrice}</p>
        <button onClick={handleClick}>Finalizar Compra</button>
        </>
    )
}

export { Cart }