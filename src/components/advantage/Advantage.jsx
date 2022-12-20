import React from 'react'
import './advantage.css';
import '../../assests/profile.jpg'
const Advantage = ({title,img,svg,borderRadius,height,centering}) => {
  return (
    <div style={{borderRadius,height,justifyContent:centering}} className='advantage'>
        {img && <img src={img}></img>}
        {svg}
        <span>{title}</span>
    </div>
  )
}
export default Advantage;
