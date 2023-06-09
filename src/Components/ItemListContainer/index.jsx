import React, { useEffect, useState} from 'react'
import {ItemList} from '../index'
import { NavLink, useParams } from 'react-router-dom'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const [data, setData] = useState([]);
    
    const {ServiciosId} = useParams();

    useEffect (() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'itemServicios');
        if (ServiciosId) {
            const queryFilter = query(queryCollection, where('category', '==', ServiciosId)) 
            getDocs(queryFilter)
                .then(res => setData(res.docs.map(itemServicios => ({ id: itemServicios.id, ...itemServicios.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setData(res.docs.map(itemServicios => ({ id: itemServicios.id, ...itemServicios.data() }))))
        }
        
    }, [ServiciosId])

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
        
        <ItemList data={data} />
        </>
    )
}

export { ItemListContainer }