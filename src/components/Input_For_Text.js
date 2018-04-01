import React from 'react';

const Text_Input = ({ label, onChange, data, starError }) => {
  return (  
    <div className='input_wrapper'>
      <label>{label}</label>
      <input type="text"
             onChange={onChange}
             starError={starError}
             data={data || ''} />
    </div>
  )
}

export default Text_Input;
