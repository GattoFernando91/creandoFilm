import { NavBar } from "./components/NavBar";
import { Logo } from "./components/Logo"
import { ItemListContainer } from "./components/ItemListContainer";
import { Redes } from "./components/Redes";
import './style.css';


function App() {
  return (
    <>
    <header>
      <Logo />
      <NavBar />
    </header>
    <body>
    <ItemListContainer greeting="¡Bienvenido, estos son nuestros servicios!" />
    </body>
    <footer>
      <Logo />
      <Redes />
    </footer>
    </>
  );
}

export default App;
