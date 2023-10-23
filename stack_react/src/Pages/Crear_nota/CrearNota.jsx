import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import { useNotas } from '../../context/notasContext.jsx'
import { useLocation, useNavigate } from "react-router-dom"
import '../../Pages/Crear_nota/CrearNota.css'

function CrearNota() {
  const {register, handleSubmit} = useForm();
  const {addNotas, updateNotas} = useNotas();
  const [isEditing, setIsEditing] = useState(false);
  const [notaToEdit, setNotaToEdit] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const notas = location.state?.notaToEdit;
    if(notas) {
      setIsEditing(true);
      setNotaToEdit(note);
    }
  }, [location.state]);

  const onSubmit = handleSubmit((data) => {
    if(isEditing){
      updateNotas(notaToEdit._id, data);
    }else{
      addNotas(data)
    }
    setIsEditing(false);
    setNotaToEdit(null);
    navigate("/");
  })

    return (
      <div className='crearNota'>
        <div className='crear'>
          <form className='formularioNotas' onSubmit={onSubmit}>
            <h1 className='crear'>
              {isEditing ? "Crear Nota" : "Editar Nota"}
            </h1>
            <input className="input" type="text" name="" id="" placeholder="User" {...register("nombre")} defaultValue={notaToEdit?.nombre || ""}/>
            <input className="input" type="text" name="" id="" placeholder="Titulo" {...register("titulo")} defaultValue={notaToEdit?.titulo || ""}/>
            <textarea className="input" rows="4" cols="90" name="" id="" placeholder="Contenido" {...register("informacion")} defaultValue={notaToEdit?.informacion || ""}/>
            <input className="input" type="date" name="" id="" placeholder="Fecha" {...register("date")} defaultValue={notaToEdit?.date || ""}/>
            <button className='btn'>save</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default CrearNota;