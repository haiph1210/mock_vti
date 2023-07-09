import React from 'react'
import {combineReducers} from 'redux'
import DonationProgramsReducer from '../component/DonationPrograms/redux/DonationProgramReducer'
import DonationReducer from '../component/Donation/component/redux/DonationReducer'
import UserReducer from '../component/user/redux/user/UserReducer'
import AuthReducer from '../component/user/redux/auth/AuthReducer'
const RootReducer = combineReducers({
    donationProgram : DonationProgramsReducer,
    donate : DonationReducer,
    user: UserReducer,
    auth: AuthReducer,
})


export default RootReducer
