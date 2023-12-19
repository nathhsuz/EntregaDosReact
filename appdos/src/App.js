import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Productos from './components/Productos';
import Quienessomos from './components/Quienessomos'
import Contacto from './components/Contacto'
import ItemDetailContainer from './components/ItemListContainer'
import ItemListContainer from './components/ItemDetailContainer'

function App() {
  return (

    <div>

      <BrowserRouter>

        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />}/>
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/productos" element={<Productos />}/>
          <Route path="/quienessomos" element={<Quienessomos />}/>
          <Route path="/contacto" element={<Contacto />}/>
          
        </Routes>
        
      </BrowserRouter>

  </div>

)
}

export default App;

