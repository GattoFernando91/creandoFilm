import React from 'react'
import { useCartContext } from '../../context/cartContext'

const CartWidget = () => {
    const {totalProducts} = useCartContext();
    return (
        <>
            <i className="bi bi-cart"></i>
            <span>{totalProducts() || ''}</span>
        </>
    )
}

export { CartWidget }