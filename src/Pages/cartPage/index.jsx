import { Logo } from "../../components/Logo"
import { NavBar } from "../../components/NavBar"
import { Redes } from "../../components/Redes"

const PaginaCart = () => {
    return (
        <>
            <header>
                <Logo />
                <NavBar />
            </header>
            <body>
                <h2 className="h2Categorias">Cart</h2>
            </body>
            <footer>
                <Logo />
                <Redes />
            </footer>
        </>    
        )
    
}

export { PaginaCart }