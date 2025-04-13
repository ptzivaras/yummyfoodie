import axios from 'axios';

const API_BASE_URL = 'http://localhost:5195';

export const getDishes = () => axios.get(`${API_BASE_URL}/api/dishes`);
export const getDishById = (id) => axios.get(`${API_BASE_URL}/api/dishes/${id}`);
