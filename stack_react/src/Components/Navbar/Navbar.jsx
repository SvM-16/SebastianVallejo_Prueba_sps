import '../../Components/Navbar/Navbar.css'
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
      <div className='Container'>
        <div className='Navbar flex'>
          <h1 className='Titulo'><NavLink to='/'className={({isActive})=> isActive ? "" : "" }>NotasApp</NavLink></h1>
          <nav>
            <ul className='NavLink flex'>
              <li><NavLink to='/'className={({isActive})=> isActive ? "border-b-2 border-black hover:border-b-2 hover:border-black transition duration-700" : "" }>Notas</NavLink></li>
              <li><NavLink to='/CrearNota'className={({isActive})=> isActive ? "border-b-2 border-black hover:border-b-2 hover:border-black transition duration-700" : "" }>Crear Nota</NavLink></li>
              <li><NavLink to='/CrearUsuario'className={({isActive})=> isActive ? "border-b-2 border-black hover:border-b-2 hover:border-black transition duration-700" : "" }>Crear Usuario</NavLink></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
  
  export default Navbar;
