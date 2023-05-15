import React from 'react';
import { NavLink } from 'react-router-dom';
import { CartWidget } from './CartWidget'

export const NavBar = () => {
    return (
        <>
            <nav>
                <ul className="navBar">
                    <li><NavLink to="/Servicios">Servicios</NavLink></li>
                    <li><NavLink to="/Proyectos">Proyectos</NavLink></li>
                    <li><NavLink to="/Nosotros">Sobre Nosotros</NavLink></li>
                    <li><NavLink to="/Contacto">Contacto</NavLink></li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </>
    )
};