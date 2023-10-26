import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'
import {useNotas} from '../../context/notasContext'
import { useLocation, useNavigate } from "react-router-dom"
import '../../Pages/Crear_nota/CrearNota.css'

function CrearNota() {
  const { register, handleSubmit } = useForm();
  const { addNotas, updateNotes } = useNotas();
  const [isEditing, setIsEditing] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const note = location.state?.noteToEdit;
    if (note) {
      setIsEditing(true);
      setNoteToEdit(note);
    }
  }, [location.state]);

  const onSubmit = handleSubmit((data) => {
    if (isEditing) {
      updateNotes(noteToEdit._id, data);
    } else {
      addNotas(data);
    }
    setIsEditing(false);
    setNoteToEdit(null);
    navigate("/");
  });

  return (
    <div className="general__crear">
      <div className="crear">
        <form className="items" onSubmit={onSubmit}>
          <h2 className="crear__h1">
            {isEditing ? "Editar Nota" : "Crear una Nota"}
          </h2>
          <input
            className="crear__input"
            type="text"
            placeholder="Nombre"
            {...register("nombre")}
            defaultValue={noteToEdit?.name || ""}
          />
          <input
            className="crear__input"
            type="text"
            placeholder="Título"
            {...register("titulo")}
            defaultValue={noteToEdit?.title || ""}
          />
          <textarea
            className="crear__input--textarea"
            rows="4"
            cols="50"
            placeholder="Contenido"
            {...register("informacion")}
            defaultValue={noteToEdit?.info || ""}
          />
          <input
            className="crear__input crear__input-date"
            type="date"
            {...register("date")}
            defaultValue={noteToEdit?.date || ""}
          />
          <button className="crear__button">
            {isEditing ? "Actualizar" : "Guardar"}
          </button>
        </form>
      </div>
    </div>
  );
  }
  
  export default CrearNota;