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
     <div style={{ width: '240px', height: '35px' }} >
      <a href="/">     

     <img 
     style={{ width: '240px', height: '35px'}}
      src={LogoImage} 

      alt=""/>

      </a> 
    </div>

:
<div style={{ width: '240px', height: '35px' }} >
<a href={`/0/${UserData._id}`}>     

<img 
style={{ width: '240px', height: '35px'}}
src={LogoImage} 

alt=""/>

</a> 
</div>

     }
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