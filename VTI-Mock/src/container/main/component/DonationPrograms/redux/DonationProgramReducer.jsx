import React from 'react';

const INITSTATE = {
    donationPrograms: [],
    totalPage: 1,
}


const DonationProgramsReducer = (state = INITSTATE, action) => {
    switch (action.type) {
        case 'DP/findAll':
            return {
                ...state,
                donationPrograms: action.payload.content,
                totalPage : action.payload.totalPages,
            }
        default:
            return state;
    }
}

export default DonationProgramsReducer;
