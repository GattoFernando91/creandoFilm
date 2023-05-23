import React from 'react'
import Instagram from "../../assets/img/Instagram.png"
import './redes.css'

const Redes = () => {
    return (
        <>
            <div className="redes">
                <p>Social Network:</p>
                <a href="https://www.instagram.com/creandofilm/" target="_blank" rel="noreferrer"><img src={Instagram} alt="" className="logoInsta" /></a>
            </div>
        </>
    )
}

export { Redes }