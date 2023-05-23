import React from "react";
import { CartWidget } from '../index';
import './navBar.css'
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <>
            <nav>   
                <ul className="navBar">
                    <li><NavLink to='/Servicios'>Servicios</NavLink></li>
                    <li><NavLink to='/Proyectos'>Proyectos</NavLink></li>
                    <li><NavLink to='/Nosotros'>Nosotros</NavLink></li>
                    <li><NavLink to='/Contacto'>Contacto</NavLink></li>
                    <li><NavLink to='/Cart'><CartWidget /></NavLink></li>
                </ul>
            </nav>
        </>    )
}

export { NavBar }