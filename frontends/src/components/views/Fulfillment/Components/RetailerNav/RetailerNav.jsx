import React, { useState, useEffect } from 'react'
import RightMenu from './Sections/RightMenu'
import Axios from 'axios';
import './retailernav.css'
import LogoImage from '../../../../LogoImage/logo.png'

function RetailerNav() {

  const [UserData, setUserData] = useState([])

  useEffect(() => {
    
    Axios.get('/api/users/getUser')
    .then(response => {
    if (response.data.success) {
      setUserData(response.data.doc)
    }
    })
    
    }, [])

return (
<header className='Navbar'>
  <div className='Navbar-logo'>
    <div className='Navbar-image'>
      {/* <span className='Navbar-img'><a href="/royalmain0">Royal Computers</a> </span> */}
     {UserData.length === 0 ?
     <div style={{ width: '160px', height: '30px' }} >
      <a href="/">     

     <img 
     style={{ width: '160px', height: '30px'}}
      src={LogoImage} 

      alt=""/>

      </a> 
    </div>

:
<div style={{ width: '160px', height: '30px' }} >
<a href={`/0/${UserData._id}`}>     

<img 
style={{ width: '160px', height: '30px'}}
src={LogoImage} 

alt=""/>

</a> 
</div>

     }
       
    </div>
  </div>

  <div className='Brand_Navbar_left-menu_items'>
  <div className='Navbar_left_menu_box'>
      <a href={`/0/${UserData._id}`}>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>Overview</span>
        </div>
      </a>
    </div>
    

    <div className='Navbar_left_menu_box'>
      <a href={`/request/${UserData._id}`}>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>Request</span>
        </div>
      </a>
    </div>

    <div className='Navbar_left_menu_box'>
      <a href={`/home/${UserData._id}`}>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>Page</span>
        </div>
      </a>
    </div>
    {/* <div className='Navbar_left_menu_box'>
      <a href='/activity'>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>History</span>
        </div>
      </a>
    </div> */}

    <div className='Navbar_left_menu_box'>
      <a href='/re-settings'>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>Account</span>
        </div>
      </a>
    </div>

    <div className='Navbar_left_menu_box'>
      <a href='/' target='_blank'>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>Home</span>
        </div>
      </a>
    </div>

  </div>

  <div className='Main_nav_right_retailer_box'> 
    <RightMenu mode="inline" />
  </div>
</header>
)
}

export default RetailerNav