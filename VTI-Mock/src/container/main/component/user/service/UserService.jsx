import axios from "../../../../../enviroment/enviroment.jsx"

const findAllUser = () => {
    return axios.get(`users/findAll`);
}

const login = (username, password) => {
    const params = {
      username: username,
      password: password
    };
    return axios.post('http://localhost:8080/api/v1/login', null, { params: params });
  }

const register = (userName,email,password,firstName,lastName) => {
    return axios.post(`users`,{userName,email,password,firstName,lastName});
}




export {findAllUser,login,register}