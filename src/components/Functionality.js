import React from 'react';
import Functionality1 from './Functionality1';

const Functionality = ({ item }) => {
  const {
    name,
    description,
    star_count,
    license,
    url } = item;

  return (
    <div className='card'>
      <Functionality1>
        <a style={{textDecoration: 'none'}} href={url}>
          <h4 style={{color: '#527dbf'}}>{name}</h4>
        </a>
        <h4>{description || 'No description'}</h4>
      </Functionality1>
      <Functionality1>
        <h4>STARS</h4>
        <h4>{star_count}</h4>
      </Functionality1>
      <Functionality1>
        <h4>LICENSE</h4>
        <h4>{license ? license.name : 'none'}</h4>
      </Functionality1>
    </div>
  )
}

export default Functionality;
