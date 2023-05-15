import React from "react";
import CreandoLogo from "../assets/img/CreandoLogo.png"
import { NavLink } from "react-router-dom";


export const Logo = () => {
    return (
        <>
        <div>
            <NavLink to="/"><img src={CreandoLogo} alt="" className="logoCreando" /></NavLink>
        </div>
        </>
    )
};