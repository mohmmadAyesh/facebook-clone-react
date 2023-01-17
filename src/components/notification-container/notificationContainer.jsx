import React from 'react'
import './notificationContainer.css';
import NotificationCard from '../NotificationCard/NotificationCard';
import { notPicture } from '../../svgs';
import hazoom from '../../assests/hazoom.jpg';
import { notificationInfo } from '../../svgs';
const NotificationContainer = () => {
  return (
    <div className='notification-container'>
        <div className='title-container'>
            <span className='title'>Notification</span>
            <div className='three-dots'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        <div className='tags-container'>
            <span className='active'>All</span>
            <span>Unread</span>
        </div>
        <div className='second-title-container'>
            <span className='title'>Earlier</span>
            <span className='seeAll'>see all</span>
        </div>
        <div className='notification-guys'>
            <ul>
            {notificationInfo.map((el,index)=>(
                <NotificationCard key={index} img={el.img} title={el.title} desc={el.desc}/>
            ))}
            </ul>
        </div>
    </div>
  )
}
export default NotificationContainer;