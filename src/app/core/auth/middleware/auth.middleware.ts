// import axios from 'axios';
// import { refreshToken } from './authService';

// axios.interceptors.request.use((config) => {
//   const token = localStorage.getItem('accessToken');
//   if (token) {
//     config.headers['Authorization'] = `Bearer ${token}`;
//   }
//   return config;
// });

// axios.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     if (error.response.status === 401) {
//       try {
//         const newToken = await refreshToken();
//         error.config.headers['Authorization'] = `Bearer ${newToken}`;
//         return axios(error.config); // Retry the original request
//       } catch (err) {
//         window.location.href = '/login';
//       }
//     }
//     return Promise.reject(error);
//   }
// );
