import React from 'react'
import './itemList.css'
import { Item } from '../index'

const ItemList = ({ data = [] }) => {
    return (
        <div className="itemListContainer">
        {data.map(itemsServicios => (
            <div key={itemsServicios.id} className="itemCard">
            <Item info={itemsServicios} />
            </div>
        ))}
        </div>
    )
}

export { ItemList }