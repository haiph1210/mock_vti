import React, { useEffect, useState } from 'react'
import { findAllPageDP } from '../service/DonationProgramService';
import DonationPrograms from '../entity/DonationPrograms';
import './ListDonationPrograms.scss'
import { useDispatch, useSelector } from 'react-redux';
import { DonationProgramSlice } from '../redux/DonationProgramReducer';
import { findAllDPAction } from '../redux/DonationProgramsAction';
import { selectDP, selectTotalPage } from '../redux/DonationProgramSelect';

const ListDonationPrograms = () => {
  const dispatch = useDispatch();
  const selectListDP = useSelector(selectDP);
  const selectTotalPages = useSelector(selectTotalPage);
  console.log(selectListDP);
    const [listDP,setListDP] = useState([]);
    const [totalPages,setTotalPage] = useState(1);
    const findAllDP = (page) => {
        dispatch(findAllDPAction(page));
        }

    useEffect(() => {
        findAllDP();
    },[]);

    useEffect(() => {
      setListDP(selectListDP);
  },[selectListDP]);

    useEffect(() => {
      setTotalPage(selectTotalPages);
  },[selectTotalPages])


  return (
    <div className='list-dp'>
      {selectListDP && selectListDP.length && selectListDP.map((item,index) => (
        <DonationPrograms
        key={index}
        id={item.id}
        name={item.name}
        total={item.totalNumberOfDonation}
        createdDate={item.createdDate}
        unitName={item.units.length > 0 ? item.units[0].unitName : ''}
        />
      ))}
    </div>
  )
}

export default ListDonationPrograms
