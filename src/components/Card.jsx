import React, { useState } from 'react';

const Card = ({ item }) => {
const [cantidad, setCantidad] = useState(0);

const agregarUnidad = () => {
    setCantidad(cantidad + 1);
};

const sacarUnidad = () => {
    if (cantidad > 0) {
    setCantidad(cantidad - 1);
    }
};

const agregarAlCarrito = () => {
    console.log('Item agregado al carrito:', item, 'Cantidad:', cantidad);
};

return (
        <div className="card">
            <h3>{item.name}</h3>
            <p>{item.content}</p>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {cantidad}</p>
            <div>
                <button onClick={agregarUnidad}>+</button>
                <button onClick={sacarUnidad}>-</button>
            </div>
            <div>
                <button onClick={agregarAlCarrito} className='buttonAgregar'>Agregar al carrito</button>
            </div>
        </div>
    );
};

export { Card };