import axios from 'axios';

export const api = axios.create({
    baseURL: "", // can be adjusted to get from config
});

api.interceptors.request.use(
    async (config) => {
    // get bearer token in store after login
    const token = '';
      if (token && config?.headers) {
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error),
  );

  // sample api 
export const getUserProfile = async (): Promise<User> => {
    const response = await api.get('user-profile');
    return response.data;
};