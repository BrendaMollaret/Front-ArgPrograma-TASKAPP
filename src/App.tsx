
import AppRoutes from "./Routes/AppRoutes";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router } from "react-router-dom";


const App = () => {
  return (
    <>
    <Router>
      <NavBar/>
        <AppRoutes/>
      <Footer/>

    </Router>
    
    </>
    
  )
}

export default App
