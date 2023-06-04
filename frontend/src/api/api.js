import axios from "axios";

const baseUrl = 'http://localhost:5000';
export const serverUrl = 'http://localhost:5000/nodeassets';

export const showSTD = () => axios.get(`${baseUrl}/students`);
export const createSTD = (std) => axios.post(`${baseUrl}/students/insert`, std);
export const updateStD = (id, updateStD) => axios.put(`${baseUrl}/students/${id}`, updateStD);
export const deletSTD = (id) => axios.delete(`${baseUrl}/students/${id}`);