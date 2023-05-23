import React from 'react'
import './item.css'
import { ItemCount } from '../ItemCount'

const onAdd = (quantity) => {
    console.log(`compraste ${quantity} unidades`)
}

const Item = ({info}) => {
    return (
        
        <a href="a" className='item'>
            <div className='divContainerCard'>
                <div className='card'> 
                    <h3>{info.name}</h3>
                    <p>{info.content}</p>
                    <p>Precio: ${info.price}</p>
                    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
                </div>
            </div>
        </a>
    )
}

export { Item }