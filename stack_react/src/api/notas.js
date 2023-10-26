import axios from "./axios"

export const getNotaRequest = () => axios.get(`/notas`);
export const addNotaRequest = (notas) => axios.post(`/notas`,notas);
export const updateNotaRequest = (nota) => axios.put(`/notas/${nota._id}`, nota);
export const deleteNotaRequest = (id) => axios.delete(`/notas/${id}`)