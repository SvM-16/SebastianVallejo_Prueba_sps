import { useEffect } from 'react';
import { useUsers } from '../../context/userContext.jsx'
import { useForm } from 'react-hook-form';
import '../../Pages/Create_usuario/CrearUsuario.css'


function CrearUsuario() {
    const { getUsers, addUsers, users } = useUsers();
    const { register, handleSubmit } = useForm();

    useEffect(()=>{
      getUsers()
    }, [])

    const onSubmit = handleSubmit((data) => {
      addUsers(data);
    })

    return (
      <div className='general'> 
        <div className='formulario_users'>
          <form className='formulario' onSubmit={onSubmit}>
                <h1 className='crear'>Crear Usuario</h1>
                <input className="input" type="text" name="" id="" placeholder="User" {...register("username")}/>
                <button className='btn'>save</button>
          </form>
        </div>

        <div className='lista_users'>
          {users.map((user)=>(
            <div className='users' key={user._id}>
              <span>{user.username}</span>
            </div>
          ))
          }
        </div>

      </div>
    );
  }
  
  export default CrearUsuario;