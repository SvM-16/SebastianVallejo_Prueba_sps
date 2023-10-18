import {BrowserRouter, useRoutes} from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Notas from './Pages/Notas/Notas'
import CrearNota from './Pages/Crear_nota/CrearNota'
import CrearUsuario from './Pages/Create_usuario/CreateUsuario'

function Router() {
  let router = useRoutes([
    {path:'/', element:<Notas />},
    {path:'/CrearNota', element:<CrearNota/>},
    {path:'/CrearUsuario', element:<CrearUsuario/>}
  ])
  return router
}

function App() {
  return(
    <BrowserRouter>
      <Navbar/>
        <Router>
        </Router>
    </BrowserRouter>
  )
}


export default App
