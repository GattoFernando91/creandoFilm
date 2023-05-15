import React from 'react';
import { NavLink } from 'react-router-dom';
import FotoModelo from '../assets/img/Servicios/FotoModelo.png'
import FotoProducto from '../assets/img/Servicios/FotoProducto.png'
import Reel from '../assets/img/Servicios/Reel.png'

export const ItemListContainer = () => {
    return (
        <>
        <section className="mainServiciosMenu">
            <h2 className="h2Servicios">Servicios</h2>
            <div className="contenedorServicios">
                <div className="contenedorDivServicios1">
                    <NavLink to="/Servicios-CampañaConModelos" className="navlinkServicios">
                        <img className='color' src={FotoModelo} alt="" />
                        <div className='textImgServicios'>
                            <p className='pServicios'>Campaña con Modelos</p>
                        </div>
                    </NavLink>
                </div>
                <div className="contenedorDivServicios2">
                    <NavLink to="/Servicios-Reels" className="navlinkServicios">
                        <img className='color' src={Reel} alt="" />
                        <div className='textImgServicios'>
                            <p className='pServicios'>Reels</p>
                        </div>
                    </NavLink>
                </div>
                <div className="contenedorDivServicios3">
                    <NavLink to="/Servicios-FotoProducto" className="navlinkServicios">
                        <img className='color' src={FotoProducto} alt="" />
                        <div className='textImgServicios'>
                            <p className='pServicios'>Foto Producto</p>
                        </div> 
                    </NavLink>
                </div>
            </div>
        </section>
        </>
    )
};