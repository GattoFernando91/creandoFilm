import { Logo } from "../../components/Logo"
import { NavBar } from "../../components/NavBar"
import { Redes } from "../../components/Redes"
import '../../style.css';

const PaginaProyectos = () => {
    return (
        <>
            <header>
                <Logo />
                <NavBar />
            </header>
            <body>
                <h2 className="h2Servicios">Proyectos</h2>
            </body>
            <footer>
                <Logo />
                <Redes />
            </footer>
        </>    
        )
    
}

export { PaginaProyectos }