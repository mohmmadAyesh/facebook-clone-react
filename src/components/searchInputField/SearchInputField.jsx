import React from 'react';
import './searchinputfield.css';
const SearchInputField = ({text,svg,width}) => {
  return (
    <div className='searchContainer' style={{width:`${width}px`}}>
        {svg && <div className='searchIcon'>{svg}</div>}
        <input type='text' placeholder={text}/>
    </div>
  )
}
export default SearchInputField;
