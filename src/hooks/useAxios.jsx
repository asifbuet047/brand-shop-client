import axios from "axios"


const axiosInstance = axios.create({
    baseURL: 'https://brand-shop-server-gamma.vercel.app/',
    timeout: 5000,
    withCredentials: true,
})
function useAxios() {
    return axiosInstance;
}

export default useAxios