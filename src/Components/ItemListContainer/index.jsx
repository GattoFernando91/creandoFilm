import React, { useEffect, useState} from 'react'
import {itemsServicios, ItemCount, ItemList} from '../index'
import { NavLink, useParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [data, setData] = useState([])
    
    const {ServiciosId} = useParams()

    useEffect (() => {
        const getData  = new Promise(resolve => {
            setTimeout(() => {
                resolve(itemsServicios)
            }, 1000)
        })
        if (ServiciosId) {
            getData.then(res => setData (res.filter(itemsServicios => itemsServicios.category === ServiciosId)))
        } else {
            getData.then(res => setData(res))
        }

    }, [ServiciosId])

    const onAdd = (quantity) => {
        console.log(`compraste ${quantity} unidades`)
    }

    return (
        <>
                        <h2 className="h2Servicios">Servicios</h2>
                <nav className="navServicios">   
                        <ul className="navBarServicios">
                            <li><NavLink to='/Servicios'>Todos</NavLink></li>
                            <li><NavLink to='/Servicios/CampañaConModelos'>Campaña con Modelos</NavLink></li>
                            <li><NavLink to='/Servicios/Reels'>Reels</NavLink></li>
                            <li><NavLink to='/Servicios/FotoProducto'>Foto Producto</NavLink></li>
                        </ul>
                </nav>
        {/* <ItemCount initial={1} stock={5} onAdd={onAdd}/> */}
        <ItemList data={data} />
        </>
    )
}

export { ItemListContainer }