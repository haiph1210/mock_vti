import axios from "../../../../../enviroment/enviroment.jsx"

const findAllDonate = () => {
    return axios.get(`/donations/findAll`);
}

const createDonate = (userId,donatePrice) => {
    return axios.post(`/donations`,{userId,donatePrice});
}

const updateDonate = (id,userId,donatePrice) => {
    return axios.put(`/donations/${id}`,{donatePrice});
}

const deleteDonate = (id) => {
    return axios.delete(`/donations/${id}`);
}
const countDonation = () => {
    return axios.get(`/donations/count`)
}

const totalPriceDonation = () => {
    return axios.get(`/donations/totalPrices`)
}

export {findAllDonate,createDonate,updateDonate,deleteDonate,countDonation,totalPriceDonation}

