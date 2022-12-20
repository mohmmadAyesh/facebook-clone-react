import React from 'react'
import './card.css';
export const Card = ({img,icon,text}) => {
  return (
    <div className='card'>
        <div className='img-container'>
            <img src={img}></img>
        </div>
        {icon && <img src={icon} className='icon'></img>}
        <p className='name'>{text}</p>
    </div>
  )
}
export default Card;