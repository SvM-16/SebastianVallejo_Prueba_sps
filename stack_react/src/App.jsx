import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'

import Navbar from './Components/Navbar/Navbar'
import Notas from '../src/Pages/Notas/Notas.jsx'
import CrearNota from '../src/Pages/Crear_nota/CrearNota.jsx'
import CrearUsuario from '../src/Pages/Create_usuario/CreateUsuario.jsx'
import { NotaProvier } from './context/notasContext'
import { UserProvider } from './context/userContext.jsx'


function Router() {
  let router = useRoutes([
    { path: '/', element: <Notas /> },
    { path: '/CrearNota', element: <CrearNota /> },
    { path: '/CrearUsuario', element: <CrearUsuario /> }
  ])
  return router
}

function App() {
  return (
    <NotaProvier>
      <UserProvider>
          <BrowserRouter>
          <Navbar />
            <Router>
            </Router>
          </BrowserRouter>
      </UserProvider>
    </NotaProvier>
  )
}


export default App
