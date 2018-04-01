import React from 'react';

const DropDownInput = ({ licenses, label, data, onChange }) => {
  const items = licenses.map(l =>
    <option key={l.key} value={l.key}>
      {l.name}
    </option>
  )
  return (
    <div className='input_wrapper'>
      <label>{label}</label>
      <select className="dropdown_input"
              data={data}
              onChange={onChange}>
        <option value=''>Select</option>
        {items}
      </select>
    </div>
  )
}

export default DropDownInput;
