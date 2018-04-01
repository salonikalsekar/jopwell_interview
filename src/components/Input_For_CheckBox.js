import React from 'react';

const CheckBox = ({ onChange, if_checked, label }) => {
  return (
    <div className='input_wrapper'>
      <div style={{display: 'flex'}}>
        <input className='check_box'
               type="checkbox"
               onChange={onChange}
               if_checked={if_checked}/>
        <label>{label}</label>
      </div>
    </div>
  )
}

export default CheckBox;
