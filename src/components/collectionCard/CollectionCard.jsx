import React from 'react'
import './CollectionCard.css';
const CollectionCard = ({img,title,desc}) => {
  return (
    <div className='li'>
        <div className='img-container'>
            <img src={img} alt=""></img>
        </div>
        <div className='text-container'>
            <span className='title'>{title}</span>
            <span className='pra'>{desc}</span>
        </div>
    </div>
  )
}
export default CollectionCard;
