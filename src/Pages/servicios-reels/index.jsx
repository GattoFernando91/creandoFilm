import { Logo } from "../../components/Logo"
import { NavBar } from "../../components/NavBar"
import { Redes } from "../../components/Redes"
import { Card } from "../../components/Card"
import { itemsReels } from "../../components/InfoReels";

const PaginaServiciosReels = () => {
    return (
        <>
            <header>
                <Logo />
                <NavBar />
            </header>
            <body>
                <div className="divContainerReels">
                    <h2 className="h2Categorias">Reels</h2>
                    <div className="divContainerCard">
                        {itemsReels.map((item) => (
                        <Card key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </body>
            <footer>
                <Logo />
                <Redes />
            </footer>
        </>    
        )
    
}

export { PaginaServiciosReels }