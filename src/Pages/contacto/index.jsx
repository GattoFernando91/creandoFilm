import { Logo } from "../../components/Logo"
import { NavBar } from "../../components/NavBar"
import { Redes } from "../../components/Redes"
import '../../style.css';


const PaginaContacto = () => {
    return (
        <>
            <header>
                <Logo />
                <NavBar />
            </header>
            <body>
                <h1>Contacto</h1>
            </body>
            <footer>
                <Logo />
                <Redes />
            </footer>
        </>
    )
    
}

export { PaginaContacto }