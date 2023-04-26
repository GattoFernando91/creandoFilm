import { CartWidget } from "./CartWidget";

export const NavBar = () => {
    return (
        <>
            <nav>
                <ul className="navBar">
                    <li><a href="./pages/servicios.html">Servicios</a></li>
                    <li><a href="./pages/projects.html">Proyectos</a></li>
                    <li><a href="./pages/about-me.html">Sobre Nosotros</a></li>
                    <li><a href="./pages/contact.html">Contacto</a></li>
                    <li><CartWidget /></li>
                </ul>
            </nav>
        </>
    )
};