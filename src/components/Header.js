import React from 'react';
import Img_logo from '../jopwell.png';

//Header with the Jopwell logo
const Header = () => {
  return (
    <header>
      <img src={Img_logo} className='img' />
    </header>
  )
}

export default Header;
