import React from 'react'
import './NotificationCard.css';
import hazoom from '../../assests/hazoom.jpg';
const NotificationCard = ({img,title,desc}) => {
  return (
    <div className='li'>
        <div className='img-container'>
           <img className='logo' src={img} alt="sorru"></img>
        </div>
        <span></span>
        <div className='three-dots'>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <div className='text-container'>
            <span><strong>{title}</strong>{desc}</span>
        </div>
    </div>
  )
}
export default NotificationCard;
