import { ItemListContainer } from "../../Components"
import { NavLink } from "react-router-dom"
import './servicios.css'

const PaginaServicios = () => {
        return (
                <>
                <h2 className="h2Servicios">Servicios</h2>
                <nav className="navServicios">   
                        <ul className="navBarServicios">
                                <li><NavLink to='/Servicios/CampañaConModelos'>Campaña con Modelos</NavLink></li>
                                <li><NavLink to='/Servicios/Reels'>Reels</NavLink></li>
                                <li><NavLink to='/Servicios/FotoProducto'>Foto Producto</NavLink></li>
                        </ul>
                </nav>
                        <ItemListContainer />
                </>    
        )
}

export { PaginaServicios }