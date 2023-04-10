import React, { useState, useEffect } from 'react';
import RightMenu from './Sections/RightMenu';
import LogoImage from '../../../../LogoImage/logo.png'

import './navstyle.css'
import Axios from 'axios';

function Navbar() {
  const [User, setUser] = useState([])

  useEffect(() => {
    Axios.get('./api/users/getUser')
    .then(response => {
    if (response.data.success) {
    
      setUser(response.data.doc)
    } 
  })
    
    }, [])

return (
<header className='Navbar-home'>
  <div className='Navbar-logo-user'>
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
    {User.operateLocation === "Admin" ?
    <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', 
    justifyContent: 'center', marginTop: '-50px', borderRadius: '5px'
    ,marginLeft: '280px', width: '100px', height: '27px', color: '#fff', 
    fontWeight: 'bolder',  background: 'red'}}>
      <span><a style={{ color: '#fff'}} href={`/0/${User._id}`}>Back To Main</a></span>
    </div>
    :
    User.operateLocation === "Branch" ?
    <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', 
    justifyContent: 'center', marginTop: '-50px', borderRadius: '5px'
    ,marginLeft: '290px', width: '60px', height: '30px', color: '#fff', 
    fontWeight: 'bolder',  background: 'red'}}>
      <span><a style={{ color: '#fff'}} href="/branch">Back</a></span>
    </div>
    :
    <></>
    }


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

export default Navbar