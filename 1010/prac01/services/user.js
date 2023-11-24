import axios from 'axios';

export const register = async (email, password) => {
  try {
    const response = await axios.post(
      'http://192.168.0.134:8080/user/signup',
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to register:', error);
    throw error;
  }
};
export const login = async (email, password) => {
  try {
    const response = await axios.post(
      'http://192.168.0.134:8080/user/login',
      {
        email,
        password,
      }
    );
    return response.data;
  } catch (error) {
    console.error('Failed to register:', error);
    throw error;
  }
};