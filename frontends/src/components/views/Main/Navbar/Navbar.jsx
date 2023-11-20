import React from 'react';
import './navstyle.css'
import LogoImage from '../../../LogoImage/logo.png'

function Navbar() {

return (
<header className='Navbar-home_main'>
  <div className='Navbar-logo-user_main'>
    <div className='Navbar-image_main'>
    <div style={{ width: '200px', height: '30px' }} >
      <a href="/">     
     <img 
     style={{ width: '200px', height: '30px'}}
      src={LogoImage} 
      alt=""/>
      </a> 
    </div>
    </div>
  </div>
</header>
)
}

export default Navbar