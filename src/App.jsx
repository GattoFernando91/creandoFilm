import { NavBar } from "./components/NavBar";
import { Logo } from "./components/Logo"
import { Redes } from "./components/Redes";
import './style.css';
import { PaginaContacto, PaginaNosotros, PaginaProyectos, PaginaServicios, PaginaServiciosReels, PaginaServiciosModelos, PaginaServiciosFotoProducto} from './Pages'
import { PaginaCart } from "./Pages/cartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <>
      <header>
        <Logo />
        <NavBar />
      </header>
      <body>
        <div className="backgroundHome">
        <div className="divH1">
            <h1>Creando Film</h1>
        </div>
        </div>
      </body>
      <footer>
        <Logo />
        <Redes />
      </footer>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contacto" element={<PaginaContacto/>} />
        <Route path="/Nosotros" element={<PaginaNosotros/>} />
        <Route path="/Proyectos" element={<PaginaProyectos/>} />
        <Route path="/Servicios" element={<PaginaServicios/>} />
        <Route path="/Servicios/CampañaConModelos" element={<PaginaServiciosModelos/>} />
        <Route path="/Servicios/Reels" element={<PaginaServiciosReels/>} />
        <Route path="/Servicios/FotoProducto" element={<PaginaServiciosFotoProducto/>} />
        <Route path="/Cart" element={<PaginaCart/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
