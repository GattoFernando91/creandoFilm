import React from 'react'
import './itemList.css'
import { Item } from '../index'

const ItemList = ({data = []}) => {
    return (
        data.map(itemsServicios => <Item key={itemsServicios.id} info={itemsServicios}/>)
    )
}

export { ItemList }