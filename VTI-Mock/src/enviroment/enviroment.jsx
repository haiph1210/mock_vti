import axios from "axios"

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
    responseType: 'json',
})

instance.interceptors.request.use((request) => {
    const token = localStorage.getItem("token");
    if (token) {
        request.headers['Authorization'] = 'Bearer ' + token;
    }
    return request;
})


instance.interceptors.response.use(
    (response) => {
        return response.data ? response.data : response.status;
    },
    (error) => {
        let res = {};
        if (error.response) {
            res.data = error.response.data;
            res.status = error.response.status
            res.headers = error.response.headers
        } else if (error.request) {
            console.log(error.request);
        } else {
            console.log('Error', error.message);
        }
        return Promise.reject(res);
    }
);

export default instance;
