import React, { useEffect, useState } from 'react'
import TableDonation from '../table/TableDonation'
import DonationCard from '../cart/DonationCart'
import './MainDonation.scss'
import { countDonation, totalPriceDonation } from '../../service/DonationService'
import { useDispatch } from 'react-redux'
import { totalCountAction, totalPriceAction } from '../redux/DonationAction'

const MainDonation = () => {
 
    const dispatch = useDispatch();

      
    const handleData = (value) => {
        console.log(value);
    }

    useEffect(() => {
      dispatch(totalCountAction());
      dispatch(totalPriceAction());

    },[])
    return (
        <div className='donation-config'>
            <div className='main-table'>
                <div className='title-config'><h2>Nhà Hảo Tâm</h2></div>
                <div className='table-donation'>
                    <TableDonation
                    data = {(value) => handleData(value)}
                /></div>
            </div>

            <div className='card-donation'>
                <DonationCard
             /></div>
        </div>
    )
}

export default MainDonation
