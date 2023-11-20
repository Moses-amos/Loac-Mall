import React, { useState } from 'react';
import axios from 'axios';
import { USER_SERVER } from '../../../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import { Badge } from 'antd';

import '../retailernav.css'

function RightMenu(props) {

  const [toggleProfile, setToggleProfile] = useState(false);
  const [cartColor, setcartColor] = useState(false)

  const cartHover = () => setcartColor(!cartColor);
  const dropdownProfile = () => setToggleProfile(!toggleProfile);

  function refreshPage() {
    window.location.reload(false);
  }
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    return (
      <div className='Navbar_selects_nav_retailer' mode={props.mode}>
      <div className='User-account-nav_main Retailer_nav_margin'> 
      <div className='Account-User-user'>
        <a href='/login'>
        <div className='Account-span-box'>
          <div>
          <span className='Account-span_title'>Sign In</span>
        </div>
        </div>
        </a>
      </div>
      </div>
  </div>
    )
  } else if ((user.userData && user.userData.isAuth)) {
    return (
        <div className='Navbar_selects_nav_retailer' mode={props.mode}>

          <div className='User-account-nav_retailer_main'> 
            <div onClick={dropdownProfile} className='Account-User-Retailer'>
            <div className='Account-span-user'>
              <div>
              <span className='Account-span_title_in'>Account</span>
            </div>
            <div className='Account-svg-user'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#333" 
            xmlns="http://www.w3.org/2000/svg"><path d="M8 10L12 14L16 10" 
            stroke="white" strokeWidth="1.5" strokeLinecap="round" 
            strokeLinejoin="round"
            ></path></svg>
            </div> 
            </div>

          </div>
          <div className={toggleProfile? "Dropdown-account" : "Dropdown-account-hide"}>
              <div className='Dropdown-content'>
                <ul className='Dropdown-ul'>
                  
                  <li className="Dropdown-li-user">
                  <a className='Dropdown-a-user' href={`/0/${user.userData._id}`}>
                    <div className='Route-span-user'>
                      <span className='Route-span-style'>Overview</span>
                    </div>
                    <div className='Route-icon-user'>
                    </div>
                    </a>
                  </li>
                  
                  <li className="Dropdown-li-user">
                  <a className='Dropdown-a-user' href={`/request/${user.userData._id}`}>
                    <div className='Route-span-user'>
                      <span className='Route-span-style'>Request</span>
                    </div>
                    <div className='Route-icon-user'>
                    </div>
                    </a>
                  </li>
                  <li className="Dropdown-li-user">
                  <a className='Dropdown-a-user' href={`/home/${user.userData._id}`}>
                    <div className='Route-span-user'>
                      <span className='Route-span-style'>Page</span>
                    </div>
                    <div className='Route-icon-user'>
                    </div>
                    </a>
                  </li>
                  <li className="Dropdown-li-user">
                  <a className='Dropdown-a-user' href='/'>
                    <div className='Route-span-user'>
                      <span className='Route-span-style'>Home</span>
                    </div>
                    <div className='Route-icon-user'>
                    </div>
                    </a>
                  </li>
                  <li className="Dropdown-li-user">
                  <a className='Dropdown-a-user' href='/re-settings'>
                    <div className='Route-span-user'>
                      <span className='Route-span-style'>Account</span>
                    </div>
                    <div className='Route-icon-user'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.9506 16.9818L4.69135 15.0265L3.49409 13.46C2.8353 12.5973 2.8353 11.4004 3.49409 10.5377L4.69135 8.97311L4.9524 7.01774C5.09629 5.94143 5.94295 5.0947 7.01924 4.95074L8.97266 4.69147L10.539 3.49412C11.4016 2.83529 12.5984 2.83529 13.461 3.49412L15.0273 4.69147L16.9826 4.95255C18.0586 5.09709 18.9049 5.94353 19.0494 7.01955L19.3086 8.97312L20.5059 10.5378C21.1647 11.4005 21.1647 12.5973 20.5059 13.46L19.3086 15.0265L19.0476 16.9818C18.9039 18.0586 18.0573 18.9059 16.9808 19.0506L15.0273 19.3081L13.461 20.5072C12.5978 21.1642 11.4022 21.1642 10.539 20.5072L8.97266 19.3081L7.01744 19.047C5.94116 18.9044 5.09408 18.058 4.9506 16.9818Z" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.1036 8.08487C11.272 7.74348 11.6197 7.52734 12.0004 7.52734C12.3811 7.52734 12.7287 7.74348 12.8972 8.08487L13.406 9.11628C13.5516 9.41148 13.8332 9.61611 14.1589 9.66346L15.297 9.82888C15.6736 9.88366 15.9865 10.1474 16.1041 10.5093C16.2217 10.8712 16.1238 11.2685 15.8514 11.5343L15.0275 12.3379C14.792 12.5676 14.6845 12.8985 14.7401 13.2228L14.9345 14.3561C14.9988 14.7312 14.8446 15.1103 14.5368 15.334C14.2289 15.5577 13.8207 15.5873 13.4838 15.4103L12.4656 14.8751C12.1743 14.7221 11.8264 14.7221 11.5351 14.8751L10.5169 15.4103C10.18 15.5873 9.77183 15.5577 9.46395 15.334C9.15606 15.1103 9.00186 14.7312 9.06617 14.3561L9.26057 13.2228C9.31619 12.8985 9.20874 12.5676 8.97322 12.3379L8.14938 11.5343C7.87699 11.2685 7.77903 10.8712 7.89667 10.5093C8.01432 10.1474 8.32718 9.88365 8.70376 9.82888L9.84189 9.66346C10.1676 9.61611 10.4492 9.41148 10.5948 9.11628L11.1036 8.08487Z" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    </a>
                  </li>
                  <li className="Dropdown-li-user">
                  <a className='Dropdown-a-user' target='blank' >
                    <div className='Route-span-user'>
                      <span className='Route-span-style' onClick={() => { refreshPage(); logoutHandler() }}>logout</span>
                    </div>
                    <div className='Route-icon-user'>
                    {/* <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon"><path d="M20,3v18H8v-1h11V4H8V3H20z M11.1,15.1l0.7,0.7l4.4-4.4l-4.4-4.4l-0.7,0.7l3.1,3.1H3v1h11.3L11.1,15.1z" class="style-scope yt-icon"></path></g></svg> */}
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.5043 10.0004L13.3359 5.83203" stroke="#FF493F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M13.3359 14.1684L17.5043 10" stroke="#FF493F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.5025 9.99887H8.33203" stroke="#FF493F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M8.33186 17.5018H6.38661C4.23794 17.5018 2.49609 15.76 2.49609 13.6113V6.66395C2.49609 4.51528 4.23794 2.77344 6.38661 2.77344H8.33186" stroke="#FF493F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    </a>
                  </li>
                </ul>
              </div>
          </div>
          </div>
      </div>
    )
  } else {
    return (
      <div></div>
    )
  }
}

export default withRouter(RightMenu);