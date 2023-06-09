import React, { useState } from 'react'
import './item.css'
import { ItemCount } from '../ItemCount'
import { Link, NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/cartContext'

const Item = ({info}) => {

    const [goToCart, setgoToCart] = useState(false)
    const {addProduct} = useCartContext();


    const onAdd = (quantity) => {
        setgoToCart(true) 
        addProduct(info,quantity);
    }

    return (
        
        <NavLink to="" className='item'>
            <div className='divContainerCard'>
                <div className='card'> 
                    <h3>{info.name}</h3>
                    <p>{info.content}</p>
                    <p>Precio: ${info.price}</p>
                    <p className='linkP'>{
                    goToCart
                    ? <Link to='/Cart'>
                        <div className='divItem'>
                            <button className='buttonItem'>Ir al carrito</button>
                        </div>
                    </Link>
                    : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                    }</p>
                </div>
            </div>
        </NavLink>
    )
}

export { Item }