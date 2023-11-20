import React from 'react'
import './flowerstyle.css'
import BirthDayNav from './Assets/memoBirthday.jpg'

function FlowerNavbar() {
  return (
    <header className='Birthday_Navbar'>
         <img 
     style={{ width: '100%', height: '100%'}}
      src={BirthDayNav} 
      alt=""/>
    </header>
  )
}

export default FlowerNavbar