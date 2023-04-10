/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
import '../navstyle.css'

function RightMenu(props) {

  const [toggleProfile, setToggleProfile] = useState(false);
  const [cartColor, setcartColor] = useState(false)
  // const [notificationColor, setnotificationColor] = useState(false)
  const [dropdownColor, setdropdownColor] = useState(0)

  const cartHover = () => setcartColor(!cartColor);


  const dropdownHover = (index) => {
    setdropdownColor(index)
  }

  // const notificationHover = () => setnotificationColor(!notificationColor);


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
      <div className='Navbar-login_Signup_user' mode={props.mode}>
        <div className='Navbar-login_Signup_box'>
        <a style={{ width: '100%', height: '100%', display: 'flex',
             justifyContent: 'center', alignItems: 'center'}} className='Navbar-login_Signup_span'  href="/login">
          <span style={{ color: '#fff'}}>Login</span>
        </a>
        </div>

        <div className='Navbar-login_Signup_box'>
            <a style={{ width: '100%', height: '100%', display: 'flex',
             justifyContent: 'center', alignItems: 'center'}} className='Navbar-login_Signup_span' href="/register">
              <span style={{ color: '#fff'}}>Signup</span>
            </a>
        </div>

    </div>
    )
  } else if ((user.userData && user.userData.isAuth)) {
    return (
        <div className='Navbar-selects-nav' mode={props.mode}>
          <div className='Cart-user'>
            <a href="/user/cart" className='Cart-link'>
            <div className={cartColor? "Cart-Box_Hover": "Cart-Box"} onMouseLeave={cartHover} onMouseEnter={cartHover}>
            <Badge count={user.userData && user.userData.cart.length}>
           {/* <Icon type="shopping-cart" className='Cart-Icon' /> */}
           <svg aria-label="Cart Icon" role="img" width="26px" height="26px"
            xmlns="http://www.w3.org/2000/svg" fill="#fff" viewBox="0 0 32 32"
            xmlSpace="preserve"><path d="M9.829 19.824h17.575c.452 0 .845-.31.951-.75l2.9-12.137a.978.978 0 0 0-.952-1.205H9.876a.978.978 0 0 0 0 1.955h19.188L26.632 17.87H9.829c-.064 0-.124.015-.188.019L6.107 1.818a.978.978 0 0 0-.955-.769H1.697a.978.978 0 0 0 0 1.956h2.669l3.418 15.543a3.465 3.465 0 0 0-1.432 2.797c0 1.304.73 2.428 1.793 3.023a3.994 3.994 0 0 0-.932 2.548 4.04 4.04 0 0 0 4.034 4.035 4.04 4.04 0 0 0 4.035-4.035c0-.77-.228-1.482-.603-2.094h7.59a3.999 3.999 0 0 0-.597 2.094c0 2.225 1.809 4.035 4.034 4.035s4.034-1.81 4.034-4.035c0-1.926-.914-2.916-1.682-3.407-.936-.6-1.956-.647-2.247-.647-.024 0-.042.004-.065.005H9.83a1.523 1.523 0 0 1-1.521-1.522c0-.838.682-1.521 1.521-1.521zm1.418 9.172a2.082 2.082 0 0 1-2.079-2.08c0-1.146.933-2.08 2.08-2.08s2.078.934 2.078 2.08-.932 2.08-2.079 2.08zm16.539-2.08c0 1.147-.934 2.08-2.08 2.08a2.082 2.082 0 0 1-2.08-2.08c0-1.146.934-2.08 2.08-2.08H25.719c.06 0 .119-.006.175-.017.29.013.91.113 1.34.515.366.341.552.874.552 1.582z"></path></svg>
          </Badge>
            </div>
          </a>
          </div>
          <div className='Cart-user'>
            <a href="/wishlist" className='Cart-link'>
            <div className={cartColor? "Cart-Box_Hover": "Cart-Box"} onMouseLeave={cartHover} onMouseEnter={cartHover}>
            <Badge count={user.userData && user.userData.wishlist.length}>
           {/* <Icon type="shopping-cart" className='Cart-Icon' /> */}
           <svg width="26px" height="26px" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 9.00021H17.0017" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.99609 8.72507L7.91548 9.55341L9.76625 7.88672" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.99901 20.0036H7.99818C5.2356 20.0036 2.99609 17.7641 2.99609 15.0015V6.99818C2.99609 4.2356 5.2356 1.99609 7.99818 1.99609H16.0015C17.3281 1.99609 18.6004 2.5231 19.5385 3.46117C20.4766 4.39924 21.0036 5.67154 21.0036 6.99818V9.99943" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.99609 13.729L7.91548 14.5573L9.76625 12.8906" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 13.9023V19.6051C14.001 20.3783 15.5674 21.0055 17.501 21.0055C19.4345 21.0055 21.0009 20.3783 21.0019 19.6051V13.9023" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 16.7539C14 17.5271 15.5674 18.1543 17.501 18.1543C19.4345 18.1543 21.0019 17.5271 21.0019 16.7539" 
           stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
           <path d="M14.001 13.9004C14.001 14.6736 15.5684 15.3008 17.502 15.3008C19.4355 15.3008 21.0019 14.6736 21.0019 13.9004C21.0019 13.1262 19.4335 12.5 17.501 12.5C15.5684 12.5 14.001 13.1272 14 13.9004" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </Badge>
            </div>
          </a>
          </div>
          <div className='User-account-nav'> 
          <div onClick={dropdownProfile} className='Account-User-user'>
            <div className='Account-span-user'>
              <div>
              <span className='Account-span_title'>Account</span>
            </div>
            <div className='Account-svg-user'>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" 
            xmlns="http://www.w3.org/2000/svg"><path d="M8 10L12 14L16 10" 
            stroke="white" strokeWidth="1.5" strokeLinecap="round" 
            strokeLinejoin="round"
            ></path></svg>
            </div> 
            </div>
          </div>
          <div className={toggleProfile? "Dropdown-account-Nav" : "Dropdown-account-hide"}>
              {/* <div onMouseOver={dropdownProfile} className='Dropdown-close'></div> */}
              <div className='Dropdown-content'>
                <ul className='Dropdown-ul'>
                  <li onMouseEnter={()=> dropdownHover(1)} onMouseLeave={()=> dropdownHover(0)} className={dropdownColor ===1 ? "Dropdown-li-user myAccount Dropdown-li_hover" : " myAccount Dropdown-li-user"}>
                  <a className='Dropdown-a' href='/overview'>
                    <div className='Route-myAccount-user'>
                      <span className='Route-span-account-user'>Overview</span>
                    </div>
                    </a>
                  </li>
                  <li onMouseEnter={()=> dropdownHover(2)} onMouseLeave={()=> dropdownHover(0)} className={dropdownColor ===2 ? "Dropdown-li-user Dropdown-li_hover" : "Dropdown-li-user"}>
                  <a className='Dropdown-a-user' href='/wishlist'>
                    <div className='Route-span-user'>
                      <span className='Route-span-style'>Wishlist</span>
                    </div>
                    <div className='Route-icon-user'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 9.00021H17.0017" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.99609 8.72507L7.91548 9.55341L9.76625 7.88672" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.99901 20.0036H7.99818C5.2356 20.0036 2.99609 17.7641 2.99609 15.0015V6.99818C2.99609 4.2356 5.2356 1.99609 7.99818 1.99609H16.0015C17.3281 1.99609 18.6004 2.5231 19.5385 3.46117C20.4766 4.39924 21.0036 5.67154 21.0036 6.99818V9.99943" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M6.99609 13.729L7.91548 14.5573L9.76625 12.8906" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 13.9023V19.6051C14.001 20.3783 15.5674 21.0055 17.501 21.0055C19.4345 21.0055 21.0009 20.3783 21.0019 19.6051V13.9023" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14 16.7539C14 17.5271 15.5674 18.1543 17.501 18.1543C19.4345 18.1543 21.0019 17.5271 21.0019 16.7539" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M14.001 13.9004C14.001 14.6736 15.5684 15.3008 17.502 15.3008C19.4355 15.3008 21.0019 14.6736 21.0019 13.9004C21.0019 13.1262 19.4335 12.5 17.501 12.5C15.5684 12.5 14.001 13.1272 14 13.9004" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    </a>
                  </li>
                  <li onMouseEnter={()=> dropdownHover(3)} onMouseLeave={()=> dropdownHover(0)} className={dropdownColor ===3 ? "Dropdown-li-user Dropdown-li_hover" : "Dropdown-li-user"}>
                  <a className='Dropdown-a-user' href='/track-order'>
                    <div className='Route-span-user'>
                      <span className='Route-span-style'>Orders</span>
                    </div>
                    <div className='Route-icon-user'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M17.2545 3.92271L16.0762 2.74437C15.7504 2.41854 15.2229 2.41854 14.8979 2.74437L6.0762 11.566C5.91953 11.7219 5.83203 11.9344 5.83203 12.1552V14.1669H7.8437C8.06453 14.1669 8.27703 14.0794 8.43286 13.9227L17.2545 5.10104C17.5804 4.77604 17.5804 4.24854 17.2545 3.92271V3.92271Z" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15.7602 6.59219L13.4102 4.24219" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M17.5 9.16667V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H10.8333" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    </a>
                  </li>
                  <li onMouseEnter={()=> dropdownHover(4)} onMouseLeave={()=> dropdownHover(0)} className={dropdownColor ===4 ? "Dropdown-li-user Dropdown-li_hover" : "Dropdown-li-user"}>
                  <a className='Dropdown-a-user' href='/0settings'>
                    <div className='Route-span-user'>
                      <span className='Route-span-style'>Settings</span>
                    </div>
                    <div className='Route-icon-user'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M4.9506 16.9818L4.69135 15.0265L3.49409 13.46C2.8353 12.5973 2.8353 11.4004 3.49409 10.5377L4.69135 8.97311L4.9524 7.01774C5.09629 5.94143 5.94295 5.0947 7.01924 4.95074L8.97266 4.69147L10.539 3.49412C11.4016 2.83529 12.5984 2.83529 13.461 3.49412L15.0273 4.69147L16.9826 4.95255C18.0586 5.09709 18.9049 5.94353 19.0494 7.01955L19.3086 8.97312L20.5059 10.5378C21.1647 11.4005 21.1647 12.5973 20.5059 13.46L19.3086 15.0265L19.0476 16.9818C18.9039 18.0586 18.0573 18.9059 16.9808 19.0506L15.0273 19.3081L13.461 20.5072C12.5978 21.1642 11.4022 21.1642 10.539 20.5072L8.97266 19.3081L7.01744 19.047C5.94116 18.9044 5.09408 18.058 4.9506 16.9818Z" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path fillRule="evenodd" clipRule="evenodd" d="M11.1036 8.08487C11.272 7.74348 11.6197 7.52734 12.0004 7.52734C12.3811 7.52734 12.7287 7.74348 12.8972 8.08487L13.406 9.11628C13.5516 9.41148 13.8332 9.61611 14.1589 9.66346L15.297 9.82888C15.6736 9.88366 15.9865 10.1474 16.1041 10.5093C16.2217 10.8712 16.1238 11.2685 15.8514 11.5343L15.0275 12.3379C14.792 12.5676 14.6845 12.8985 14.7401 13.2228L14.9345 14.3561C14.9988 14.7312 14.8446 15.1103 14.5368 15.334C14.2289 15.5577 13.8207 15.5873 13.4838 15.4103L12.4656 14.8751C12.1743 14.7221 11.8264 14.7221 11.5351 14.8751L10.5169 15.4103C10.18 15.5873 9.77183 15.5577 9.46395 15.334C9.15606 15.1103 9.00186 14.7312 9.06617 14.3561L9.26057 13.2228C9.31619 12.8985 9.20874 12.5676 8.97322 12.3379L8.14938 11.5343C7.87699 11.2685 7.77903 10.8712 7.89667 10.5093C8.01432 10.1474 8.32718 9.88365 8.70376 9.82888L9.84189 9.66346C10.1676 9.61611 10.4492 9.41148 10.5948 9.11628L11.1036 8.08487Z" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                    </div>
                    </a>
                  </li>
                  <li onMouseEnter={()=> dropdownHover(6)} onMouseLeave={()=> dropdownHover(0)}  className={dropdownColor ===6 ? "Dropdown-li-user Dropdown-li_hover" : "Dropdown-li-user"}>
                  <a className='Dropdown-a-user' onClick={() => { refreshPage(); logoutHandler() }}>
                    <div className='Route-span-user'>
                      <span className='Route-span-style'>Logout</span>
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