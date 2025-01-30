import axios from 'axios';

const API_URL = 'http://localhost:8080';

export const loginUser = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials, {
      withCredentials: true, // Permite o envio de cookies/tokens
    });
    return response.data; // Retorna os dados do usuário ou token
  } catch (error) {
    console.error('Erro no login', error);
    throw error;
  }
};