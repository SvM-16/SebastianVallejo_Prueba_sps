import axios from "./axios.js"

export const getUsersRequest = () => axios.get(`/users`);
export const addUsersRequest = (user) => axios.post(`/users`, user);