import axios from '../../../../../enviroment/enviroment'

const findAllPageDP = (page) => {
    return axios.get(`donationPrograms?page=${page}`);
}

const createDP = (name,totalNumberOfDonation,unit) => {
    return axios.post(`donationPrograms`,{name,totalNumberOfDonation,unit});
}

const updateDP = (id,name,totalNumberOfDonation,unit) => {
    return axios.put(`donationPrograms/${id}`,{name,totalNumberOfDonation});
}

const deleteDp = (id) => {
    return axios.delete(`donationPrograms/${id}`);
}



export {findAllPageDP,createDP,updateDP,deleteDp}