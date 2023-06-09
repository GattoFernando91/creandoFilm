// import React, { useState } from 'react'
// import { ItemCount } from '../ItemCount'
// import './itemDetail.css'
// import { Link } from 'react-router-dom'

// const ItemDetail = () => {

//     const [goToCart, setgoToCart] = useState(false)

//     const onAdd = (quantity) => {
//         setgoToCart(true) 
//     }

//     return (
//         <div>
//             <h1>Detail</h1>
//             {
//                 goToCart
//                 ? <Link to='/Cart'>Terminar Compra</Link>
//                 : <ItemCount initial={1} stock={5} onAdd={onAdd}/>
//             }
//         </div>
//     )
// }

// export { ItemDetail }