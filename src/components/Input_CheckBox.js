import React from 'react';

//For the Checkbox input
const Input_CheckBox = ({ onChange, ifChecked, label }) => {
  return (
    <div className='input_wrapper'>
      <div style={{display: 'flex'}}>
        <input className='check_box'
               type="checkbox"
               onChange={onChange}
               ifChecked={ifChecked}/>
        <label>{label}</label>
      </div>
    </div>
  )
}

export default Input_CheckBox;
