import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Inicio from './Views/Inicio'
import Sitios from "./Views/Sitios"
import  Contacto  from "./Views/Contacto";
import Clientes from "./Views/Clientes";
import Comencemos from "./Views/Comencemos";
import Gracias from './Views/Gracias';

function App() {

  return (

    <>
      <Navbar/>
    <Routes> 
      <Route path='/' element={<Inicio/>}/>
      <Route path="/interes" element={<Contacto/>}/>
      <Route path="/clientes" element={<Clientes/>}/>
      <Route path="/comencemos" element={<Comencemos/>}/>
      <Route path='/sitios' element={<Sitios/>}/>
      <Route path='/gracias'element={<Gracias/>} />
      <Route></Route>
      <Route></Route>

    </Routes>
    <Footer/>
    </>
    
  )
}

export default App
