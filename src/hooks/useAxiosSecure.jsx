import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://a12-building-management-server.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;