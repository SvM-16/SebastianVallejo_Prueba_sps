import {createContext, useContext, useState } from 'react'
import {getNotaRequest, addNotaRequest, updateNotaRequest, deleteNotaRequest} from '../api/notas.js'

const notaContext = createContext();

export const useNotas = () => {
    const context = useContext(notaContext);
    if(!context) {
        throw new Error('useNotes must be used within a ProductoProvider')
    }
    return context
}

export function notaProvier({ children }) {
    const [notas, setNotas] = useState([]);

    const getNotas = async () =>{
        try {
            const res = await getNotaRequest();
            setNotas(res.data);
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    const addNotas = async (notas) => {
        try {
            const res = await addNotaRequest(notas);
            setNotas([...notas,res.data]),
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    const updateNotas = async (notasId, updateData) => {
        try {
            const res = await updateNotaRequest (notasId, updateData);
            setNotas(notas.map(nota => (nota._id === notasId ? res.data : nota)));
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    
    const deleteNotas = async (notasId) => {
        try {
            const res = await deleteNotaRequest (notasId);
            setNotas(notas.filter(nota => nota.id !== notasId));
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <notaContext.Provider value={{
            notas,
            getNotas,
            addNotas,
            updateNotas,
            deleteNotas
        }}>
            {children}
        </notaContext.Provider>
    )    
}

