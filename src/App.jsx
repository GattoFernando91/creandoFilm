import './style.css';
import { NavBar, Logo, Redes, ItemListContainer} from './Components';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import { PaginaContacto, PaginaNosotros, PaginaProyectos, PaginaCart} from './Pages'


function Home() {
  return (
    <>
        <div className="backgroundHome">
        <div className="divH1">
            <h1>Creando Film</h1>
        </div>
        </div>
    </>
  );
}

function App() {
  return (
    <>
    <BrowserRouter>
      <header>
        < Logo />
        < NavBar />
      </header>
      <main>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contacto" element={<PaginaContacto/>} />
            <Route path="/Nosotros" element={<PaginaNosotros/>} />
            <Route path="/Proyectos" element={<PaginaProyectos/>} />
            <Route path="/Cart" element={<PaginaCart/>} />
            <Route path="/Servicios/" element={<ItemListContainer/>} />
            <Route path="/Servicios/:ServiciosId" element={<ItemListContainer/>} />
        </Routes>
      </main>
      <footer>
        <Logo />
        <Redes />
      </footer>
    </BrowserRouter>
    </>
  );
}

export default App;
