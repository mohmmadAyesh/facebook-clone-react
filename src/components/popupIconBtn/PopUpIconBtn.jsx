import { useState,useContext } from "react";
import './PopUpIconBtn.css';
import { AppContext } from "../../ContextProvider";
import App from "../../App";
const PopUpIconBtn = ({activee,svg,id}) => {
    const {isOpenedColl,setIsOpenedColl}=useContext(AppContext);
    const {isOpenedMess,setIsOpenedMess}=useContext(AppContext);
    const {isOpenedNot,setIsOpenedNot}=useContext(AppContext);
    const [active,setActive]=useState(false);

    const handleClick=()=>{
        setActive(!active);
        if(id===1){
          setIsOpenedColl(!isOpenedColl);
          setIsOpenedMess(false);
          setIsOpenedNot(false);
          setActive(!isOpenedColl);
        }
        else if(id===2){
          setIsOpenedMess(!isOpenedMess);
          setIsOpenedColl(false);
          setIsOpenedNot(false);
          setActive(!isOpenedMess);
        }
        else{
          setIsOpenedNot(!isOpenedNot);
          setIsOpenedMess(false);
          setIsOpenedColl(false);
          setActive(!isOpenedNot);
        }
    }
  return (
    <button onClick={handleClick} className={active? 'active': ''}>{svg}</button>
  )
}
export default PopUpIconBtn;

