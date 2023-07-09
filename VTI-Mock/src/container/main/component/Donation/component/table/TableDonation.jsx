import React, { useEffect, useState } from 'react'
import { findAllDonate } from '../../service/DonationService';
import Donation from '../../entity/Donation';
import './TableDonation.scss'
import { NumberFormat } from 'intl';
import 'intl/locale-data/jsonp/en';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { selectDonation } from '../redux/DonationSelect';
import { findAllDonationAction } from '../redux/DonationAction';
import { selectAuth } from '../../../user/redux/auth/AuthSelector';
const TableDonation = ({data}) => {
    const dispatch = useDispatch();
    const tokenRes = useSelector(selectAuth);
    console.log(tokenRes);
    const selectDonates = useSelector(selectDonation);
    console.log(selectDonates);
    const [donations,setDonations] = useState([]);
    const formatPrice = (price) => {
        const formatter = new NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        return formatter.format(price);
    };
    const formatCreatedDate = (createdDate) =>{   
     return format(new Date(createdDate), 'dd/MM/yyyy');
    }

    const findAll = () => {
      dispatch(findAllDonationAction());
    }

    useEffect(() =>{
        findAll();
    },[])

    useEffect(() =>{
      setDonations(selectDonates);
  },[selectDonates])
  return (
    <div className='table-config'>
      <table>
        <thead>
        <tr>
            <th>STT</th>
            <th>Tên Nhà Hảo Tâm</th>
            <th>Số Tiền</th>
            <th>Ngày Quyên Góp</th>

            {tokenRes.role === "Manager"
            ?
            <th>Action</th>
            :
            null
          }
           
        </tr>
        </thead>
        <tbody>
            {donations &&
            donations.length >0 &&
            donations.map((item,index) => (
                <Donation
                id = {item.id}
                index={index+1}
                lastName={item.lastName}
                phone={'0979015430'}
                price={formatPrice(item.donatePrice)}
                createdDate = {formatCreatedDate(item.createDate)}
                />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableDonation
