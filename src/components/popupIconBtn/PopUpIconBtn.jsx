import { useState } from "react";
import './PopUpIconBtn.css'
const PopUpIconBtn = ({activee,svg}) => {
    const [active,setActive]=useState(false);
    const handleClick=()=>{
        setActive(!active);
    }
  return (
    <button onClick={handleClick} className={active? 'active': ''}>{svg}</button>
  )
}
export default PopUpIconBtn;

