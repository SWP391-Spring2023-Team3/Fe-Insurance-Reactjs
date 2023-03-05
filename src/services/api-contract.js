import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();
const API_URL = process.env.API_URL;

export const getContracts = () => {
    return axios.get(`${API_URL}/contract`);
  };
  
export const getContractById = (id) => {
    return axios.get(`${API_URL}/contract/${id}`);
};
  
export const createContract = (data) => {
    return axios.post(`${API_URL}/contract`, data);
};
  

export {getContracts,getContractById,createContract}