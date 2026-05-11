import axios from 'axios';


const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
});

// Response interceptor and to check refresh token
api.interceptors.response.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config;

        if(
            error.response?.status === 401 && 
            !originalRequest._retry && 
            originalRequest.url !== "/refresh"
        ){
            originalRequest._retry = true;

            try {
                await axios.post(
                    "http://localhost:8082/api/refresh",
                    {},
                    {withCredentials: true}
                );

                return api(originalRequest); // retry original request
            } catch (error) {
                return Promise.reject(error);
            }
        }

        return Promise.reject(error);
    }
);

export default api