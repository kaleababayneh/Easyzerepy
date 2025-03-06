import axios from 'axios';

const API_URL = 'http://localhost:8000/tries';

export const getTries = async () => {
  const response = await axios.get(`${API_URL}/tries`);
  return response.data;
};

export const getTry = async (tryId) => {
  const response = await axios.get(`${API_URL}/${tryId}`);
  return response.data;
};

export const createTry = async (tryData) => {
  const response = await axios.post(API_URL, tryData);
  return response.data;
};

export const deleteTry = async (tryId) => {
  const response = await axios.delete(`${API_URL}/${tryId}`);
  return response.data;
};