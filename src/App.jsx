import { NavBar } from "./components/NavBar";
import { Logo } from "./components/Logo"
import { Redes } from "./components/Redes";
import './style.css';
import { PaginaContacto, PaginaNosotros, PaginaProyectos, PaginaServicios } from './Pages'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <>
      <header>
        <Logo />
        <NavBar />
      </header>
      <body>
        <h1>Bienvenidos a Creando Film</h1>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
