import React, { useState } from 'react'
import img from '../../../../asset/img/momo-img.jpg';
import './Home.scss';
import ListDonationPrograms from '../DonationPrograms/component/ListDonationPrograms';
const Home = () => {
  const [isHeartMoMoActive, setIsHeartMoMoActive] = useState(true);
  const [isPiggyMoMoActive, setIsPiggyMoMoActive] = useState(false);
  const [hideShowHeartMoMo, setHideShowHeartMoMo] = useState(false);
  const [hideShowPiggyMoMo, setHideShowPiggyMoMo] = useState(false);

  const handleHeartMoMo = () => {
    setHideShowHeartMoMo(true);
    setIsHeartMoMoActive(true);
    setHideShowPiggyMoMo(false);
    setIsPiggyMoMoActive(false);
  };

  const handlePiggyMoMo = () => {
    setIsHeartMoMoActive(false);
    setHideShowHeartMoMo(false);
    setIsPiggyMoMoActive(true);
    setHideShowPiggyMoMo(true);
  };

  return (
    <div>
      <div>
        <img
          src={img}
          height='100%'
          width='100%'
        />
      </div>
      <div className='main-home'>
        <b className='title'>Các Hoàn Cảnh Quyên Góp</b>
        <p className='title-2'>Chung tay quyên góp giúp đỡ các hoàn cảnh khó khăn trên khắp cả nước.</p>
        <div className='button-config'>
        <button 
        className={`button-1 ${isHeartMoMoActive ? 'active' : ''}`} 
        onClick={handleHeartMoMo}>
            Trái Tim MoMo
          </button>
          <button 
          className={`button-2 ${isPiggyMoMoActive ? 'active' : ''}`} 
          onClick={handlePiggyMoMo}
          >Heo Đất MoMo</button>
        </div>
      </div>
      {hideShowHeartMoMo && (
        <ListDonationPrograms
        />
      )}
    </div>

    


  )
}

export default Home
