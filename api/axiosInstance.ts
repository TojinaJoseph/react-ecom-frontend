import axios from 'axios';
import { jwtDecode } from 'jwt-decode';


const api = axios.create({
  baseURL: 'https://nestjs-ecom.onrender.com/',
  withCredentials: true // Send cookies (for refresh token)
});

// Decode JWT to get expiry
const isTokenExpired = (token: string): boolean => {
  try {
    const decoded: any = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime;
  } catch (e) {
    return true;
  }
};

// Get new access token using refresh token
const refreshAccessToken = async (): Promise<string | null> => {
  const refreshToken=localStorage.getItem('refreshToken')
  try {
    const response = await axios.post('https://nestjs-ecom.onrender.com/auth/refresh-tokens', {refreshToken}, {
      withCredentials: true
    });
    const newToken = response.data.data.accessToken;
    localStorage.setItem('accessToken', newToken);
    return newToken;
  } catch (error) {
    console.error("Refresh token failed", error);
    // Redirect to login page or show session expired
    return null;
  }
};

// Axios Request Interceptor
api.interceptors.request.use(
  async (config) => {
    let token = localStorage.getItem('accessToken');

    if (!token) {
      return Promise.reject(new Error('No access token found'));
    }
    if (token && isTokenExpired(token)) {
      token = await refreshAccessToken();
    }

    if (token && config.headers) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);

export default api;
