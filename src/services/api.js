import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_URL}/usuarios`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuários', error);
    throw error;
  }
};

export const createUser = async (user) => {
  try {
    const response = await axios.post(`${API_URL}/usuarios`, user);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar usuário', error);
    throw error;
  }
};
