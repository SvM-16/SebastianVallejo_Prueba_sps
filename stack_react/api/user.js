import axios from "./axios.js"

export const getUSersRequest = () => axios.get(`/user`);
export const addUsersRequest = (user) => axios.post(`/user`, user);