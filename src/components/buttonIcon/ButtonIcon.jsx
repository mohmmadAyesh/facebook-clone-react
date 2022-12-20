import React, { useState } from 'react'
import './buttonIcon.css';
const ButtonIcon = ({title,isActive,svg,text,width,height}) => {
    const [active,setActive]=useState(isActive);
  return (
    <div className={`li ${active}`} title={title} style={{width:width,height:height}}>
        <a>{svg}{text}</a>
    </div>
  )
}
export default ButtonIcon;
