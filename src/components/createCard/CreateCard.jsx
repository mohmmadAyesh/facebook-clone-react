import React from 'react'
import './CreateCard.css';
const CreateCard = (props) => {
  return (
    <div className='liCreate'>
        <div className='icon'>

        </div>
        <span>{props.title}</span>
    </div>
  )
}
export default CreateCard;
