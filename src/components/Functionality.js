import React from 'react';
import Functionality1 from './Functionality1';

//Main UI for results

const Functionality = ({ item }) => {
  const {
    full_name,
    description,
    stargazers_count,
    license,
    url 
  } = item;

  return (
    <div className='search'>
      <Functionality1>
        <a style={{textDecoration: 'none'}} href={url}>
          <h4 style={{color: '#527dbf'}}>{full_name}</h4>
        </a>
        <h4>{description || 'No description'}</h4>
      </Functionality1>
      <Functionality1>
        <h4>STARS</h4>
        <h4>{stargazers_count}</h4>
      </Functionality1>
      <Functionality1>
        <h4>LICENSE</h4>
        <h4>{license ? license.name : 'none'}</h4>
      </Functionality1>
    </div>
  )
}

export default Functionality;
