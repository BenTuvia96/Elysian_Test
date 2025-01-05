import axios, { AxiosError } from 'axios';

const API_URL = 'http://localhost:5000/api/login'; // Update this URL to match your Flask server

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(API_URL, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    throw axiosError.response ? axiosError.response.data : new Error('Login failed');
  }
};