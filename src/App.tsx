import CarouselHome from "./components/CarouselHome/CarouselHome";
import CategoriasSelector from "./components/CategoriasSelector/CategoriasSelector";
import CategoriasTareas from "./components/CategoriasTareas/CategoriasTareas";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <>
    <NavBar/>
    <CarouselHome/>
    <CategoriasSelector/>
    <CategoriasTareas/>
    <Footer/>
  
    </>
    
  )
}

export default App
