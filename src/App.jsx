import { useState } from 'react'
import Navbar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos de Bootstrap

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
    </div>
  )
}

export default App
