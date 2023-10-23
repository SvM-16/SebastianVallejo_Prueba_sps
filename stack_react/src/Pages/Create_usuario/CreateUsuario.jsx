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
        <div>
          <form action="">

          </form>
        </div>
      </div>
    );
  }
  
  export default CrearUsuario;