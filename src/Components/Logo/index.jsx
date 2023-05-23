import React from 'react'
import CreandoLogo from '../../assets/img/CreandoLogo.png'
import './logo.css'
import { NavLink } from 'react-router-dom'

const Logo = () => {
    return (
        <div>
            <NavLink to="/"><img src={CreandoLogo} alt="" className='logoCreando' /></NavLink>
        </div>
    )
}

export { Logo }