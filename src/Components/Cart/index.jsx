import React, { useState, useEffect, useCallback } from "react";
import { useCartContext } from "../../context/cartContext";
import { Link, useNavigate } from "react-router-dom";
import { ItemCart } from "../ItemCart";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import './cart.css';


const Cart = () => {
    const navigate = useNavigate();
    const { cart, totalPrice, clearCart } = useCartContext();
    const [showModal, setShowModal] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [purchaseSuccess, setPurchaseSuccess] = useState(false);
    const [countdown, setCountdown] = useState(5);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const validateForm = useCallback(() => {
        if (name.trim() !== "" && email.trim() !== "" && phone.trim() !== "" && address.trim() !== "") {
            setFormValid(true);
        } else {
            setFormValid(false);
        }
    }, [name, email, phone, address]);

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const order = {
        buyer: {
            name,
            email,
            phone,
            address
        },
        items: cart.map(product => ({ id: product.id, title: product.id, price: product.price, quantity: product.quantity })),
        total: totalPrice,
    };

    const handleClick = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
            .then(({ id }) => {
                console.log(id);
                setPurchaseSuccess(true);
                const countdownInterval = setInterval(() => {
                    setCountdown((prevCountdown) => prevCountdown - 1);
                }, 1000);

                setTimeout(() => {
                    clearInterval(countdownInterval);
                    clearCart();
                    navigate('/');
                }, 5000);
            });
    };

    useEffect(() => {
        validateForm();
    }, [name, email, phone, address, validateForm]);

    if (cart.length === 0) {
        return (
            <>
                <div className="divCarrito">
                    <p>No hay servicios en el carrito.</p>
                    <Link to='/Servicios'>Comprar Servicios</Link>
                </div>
            </>
        );
    }


    return (
        <>
            {cart.map(product => <ItemCart key={product.id} product={product} />)}
            {!showModal && !purchaseSuccess && (
                <>
                    <div className="divCarrito">
                        <p className="pPrecio">Total: ${totalPrice}</p>
                        <button className="buttonDatos" onClick={openModal}>Completar Datos de Compra</button>
                    </div>
                </>
            )}
    
            {showModal && !purchaseSuccess && (
                <div className="modal divCarrito">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <form>
                            <input type="text" placeholder="Nombre" value={name} onChange={handleNameChange} onBlur={validateForm} required />
                            <input type="email" placeholder="Email" value={email} onChange={handleEmailChange} onBlur={validateForm} required />
                            <input type="tel" placeholder="Teléfono" value={phone} onChange={handlePhoneChange} onBlur={validateForm} required />
                            <input type="text" placeholder="Dirección" value={address} onChange={handleAddressChange} onBlur={validateForm} required />
                        </form>
                        <button onClick={handleClick} disabled={!formValid}>Finalizar Compra</button>
                    </div>
                </div>
            )}
    
            {purchaseSuccess && (
                <>
                    <div className="divCarrito">
                        <div className="finalCompra">
                            <h2>Compra Realizada con Éxito!</h2>
                            <p>En breve recibira un mail con la informacion.</p>
                            <p>Será redirigido al Inicio en {countdown} segundos.</p>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export { Cart };
