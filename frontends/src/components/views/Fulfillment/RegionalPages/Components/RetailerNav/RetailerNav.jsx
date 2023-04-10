import React from 'react'
import RightMenu from './Sections/RightMenu'
import './retailernav.css'
import LogoImage from '../../../../../LogoImage/logo.png'

function RetailerNav() {
return (
<header className='Navbar'>
  <div className='Navbar-logo'>
    <div className='Navbar-image'>
    <div style={{ width: '240px', height: '35px' }} >
      <a href="/">     

     <img 
     style={{ width: '240px', height: '35px'}}
      src={LogoImage} 

      alt=""/>

      </a> 
    </div>
    </div>
  </div>
  <div className='Navbar-search'>
    <div style={{ width: '700px'}}>

    </div>
  </div>
  <div className='Navbar-right'> 
    <RightMenu mode="inline" />
  </div>
</header>
)
}

export default RetailerNav