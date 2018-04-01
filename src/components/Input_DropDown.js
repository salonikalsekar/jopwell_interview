import React from 'react';


//For the drop down input that is the license details
const Input_DropDown = ({ licenses, label, data, onChange }) => {
  const items = licenses.map(lic =>
    <option key={lic.key} value={lic.key}>
      {lic.name}
    </option>
  )
  
  return (
    <div className='input_wrapper'>
      <label>{label}</label>
      <select className="dropdown"
              data={data}
              onChange={onChange}>
        <option value=''>Select</option>
        {items}
      </select>
    </div>
  )
}

export default Input_DropDown;
