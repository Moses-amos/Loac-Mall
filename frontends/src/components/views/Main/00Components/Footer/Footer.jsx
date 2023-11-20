import React, { useState, useEffect } from 'react'
import './footer.css'
import Axios from 'axios'

function Footer() {
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
<div className='Royal-footer'>
  <div className='Footer_Box'>
    <div className='Footer_text_conatiner'>
    <div className='Footer_text_box'>
        <span className="In_store">We bring local Retailers onto a single online mall for shop-goers to browse, products in or across towns of <a href='https://www.linkedin.com/in/moses-gamaseb-357970265/' style={{ color: '#fff', textDecoration: 'none'}}>Namibia </a>
        </span>
      </div>
    </div>
    <div className='Rights'>
      <div className='Rights_container'>

      <div className='mobile_top_padding'>
      <span><a href='/account-plans' className='Rights-span_about'>Marketing Account</a> </span>
        </div>
    
      <div className='mobile_top_padding_about'>
      <span><a className='Rights-span_about' href='/about-us'>About Us</a> </span>
        </div>
    <div className='Social_links_rights'>
      <div className='Social_links_box'>
    <div>
      <a href="https://twitter.com/loac_mall" target='_blank' style={{ marginRight: '20px'}}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#1DA1F2"></path><path d="M24 11C23.4 11.3 22.8 11.4 22.1 11.5C22.8 11.1 23.3 10.5 23.5 9.7C22.9 10.1 22.2 10.3 21.4 10.5C20.8 9.9 19.9 9.5 19 9.5C16.9 9.5 15.3 11.5 15.8 13.5C13.1 13.4 10.7 12.1 9 10.1C8.1 11.6 8.6 13.5 10 14.5C9.5 14.5 9 14.3 8.5 14.1C8.5 15.6 9.6 17 11.1 17.4C10.6 17.5 10.1 17.6 9.6 17.5C10 18.8 11.2 19.8 12.7 19.8C11.5 20.7 9.7 21.2 8 21C9.5 21.9 11.2 22.5 13 22.5C19.1 22.5 22.5 17.4 22.3 12.7C23 12.3 23.6 11.7 24 11Z" 
      fill="white"></path></svg>
       </a>
      </div>

      <div >
      <a href="https://www.facebook.com/profile.php?id=100090410604506" target='_blank' style={{ marginRight: '20px'}}>
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#1877F2"></path><path d="M24 16C24 11.6 20.4 8 16 8C11.6 8 8 11.6 8 16C8 20 10.9 23.3 14.7 23.9V18.3H12.7V16H14.7V14.2C14.7 12.2 15.9 11.1 17.7 11.1C18.6 11.1 19.5 11.3 19.5 11.3V13.3H18.5C17.5 13.3 17.2 13.9 17.2 14.5V16H19.4L19 18.3H17.1V24C21.1 23.4 24 20 24 16Z"
       fill="white"></path></svg>
       </a>
      </div>
      <div >
      <a href="https://www.instagram.com/loac_mall/" target='_blank' style={{ marginRight: '20px'}}>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 16C0 24.8366 7.16344 32 16 32C24.8366 32 32 24.8366 32 16C32 7.16344 24.8366 0 16 0C7.16344 0 0 7.16344 0 16Z" fill="#F00073"></path><path d="M16 9.19995C18.2 9.19995 18.5 9.19995 19.4 9.19995C20.2 9.19995 20.6 9.39995 20.9 9.49995C21.3 9.69995 21.6 9.79995 21.9 10.1C22.2 10.4 22.4 10.7 22.5 11.1C22.6 11.4 22.7 11.8 22.8 12.6C22.8 13.5 22.8 13.7 22.8 16C22.8 18.3 22.8 18.5 22.8 19.4C22.8 20.2 22.6 20.6 22.5 20.9C22.3 21.3 22.2 21.6 21.9 21.9C21.6 22.2 21.3 22.4 20.9 22.5C20.6 22.6 20.2 22.7 19.4 22.8C18.5 22.8 18.3 22.8 16 22.8C13.7 22.8 13.5 22.8 12.6 22.8C11.8 22.8 11.4 22.6 11.1 22.5C10.7 22.3 10.4 22.2 10.1 21.9C9.79995 21.6 9.59995 21.3 9.49995 20.9C9.39995 20.6 9.29995 20.2 9.19995 19.4C9.19995 18.5 9.19995 18.3 9.19995 16C9.19995 13.7 9.19995 13.5 9.19995 12.6C9.19995 11.8 9.39995 11.4 9.49995 11.1C9.69995 10.7 9.79995 10.4 10.1 10.1C10.4 9.79995 10.7 9.59995 11.1 9.49995C11.4 9.39995 11.8 9.29995 12.6 9.19995C13.5 9.19995 13.8 9.19995 16 9.19995ZM16 7.69995C13.7 7.69995 13.5 7.69995 12.6 7.69995C11.7 7.69995 11.1 7.89995 10.6 8.09995C10.1 8.29995 9.59995 8.59995 9.09995 9.09995C8.59995 9.59995 8.39995 9.99995 8.09995 10.6C7.89995 11.1 7.79995 11.7 7.69995 12.6C7.69995 13.5 7.69995 13.8 7.69995 16C7.69995 18.3 7.69995 18.5 7.69995 19.4C7.69995 20.3 7.89995 20.9 8.09995 21.4C8.29995 21.9 8.59995 22.4 9.09995 22.9C9.59995 23.4 9.99995 23.6 10.6 23.9C11.1 24.1 11.7 24.1999 12.6 24.2999C13.5 24.2999 13.8 24.2999 16 24.2999C18.2 24.2999 18.5 24.2999 19.4 24.2999C20.3 24.2999 20.9 24.1 21.4 23.9C21.9 23.7 22.4 23.4 22.9 22.9C23.4 22.4 23.6 22 23.9 21.4C24.1 20.9 24.1999 20.3 24.2999 19.4C24.2999 18.5 24.2999 18.2 24.2999 16C24.2999 13.8 24.2999 13.5 24.2999 12.6C24.2999 11.7 24.1 11.1 23.9 10.6C23.7 10.1 23.4 9.59995 22.9 9.09995C22.4 8.59995 22 8.39995 21.4 8.09995C20.9 7.89995 20.3 7.79995 19.4 7.69995C18.5 7.69995 18.3 7.69995 16 7.69995Z" fill="white"></path><path d="M16 11.7C13.6 11.7 11.7 13.6 11.7 16C11.7 18.4 13.6 20.3 16 20.3C18.4 20.3 20.3 18.4 20.3 16C20.3 13.6 18.4 11.7 16 11.7ZM16 18.8C14.5 18.8 13.2 17.6 13.2 16C13.2 14.5 14.4 13.2 16 13.2C17.5 13.2 18.8 14.4 18.8 16C18.8 17.5 17.5 18.8 16 18.8Z" fill="white"></path><path d="M20.4 12.6C20.9522 12.6 21.4 12.1522 21.4 11.6C21.4 11.0477 20.9522 10.6 20.4 10.6C19.8477 10.6 19.4 11.0477 19.4 11.6C19.4 12.1522 19.8477 12.6 20.4 12.6Z" 
fill="white"></path></svg>
       </a>
      </div>

      </div>

      <div className='Rights_text_right'>
      <div style={{paddingTop: '20px'}}>
      <span className='Rights-span'>© 2023 Loac Mall.</span>
    </div>
      </div>

      </div>


      <div className='bottom_top_padding_top'>
      <span><a href='/account-plans' className='Rights-span_about'>Marketing Account</a> </span>
        </div>
      
      <div className='bottom_top_padding'>
      <span><a className='Rights-span_about' href='/about-us'>About Us</a> </span>
        </div>
    <div className='Footer_bottom_display'>
    <div className='bottom_top_padding'>
      <span className='Rights-span'>© 2023 Loac Mall.</span>
    </div>
    </div>
      </div>

    </div>

  </div>
</div>
)
}

export default Footer