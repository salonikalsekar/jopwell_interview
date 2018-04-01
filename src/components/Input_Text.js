import React from 'react';


//Text Input 
const Input_Text = ({ label, onChange, data, starD }) => {
  return (
    <div className='input_wrapper'>
      <label>{label}</label>
      <input
             type="text"
             onChange={onChange}
             starD={starD}
             data={data || ''} />
    </div>
  )
}

export default Input_Text;
