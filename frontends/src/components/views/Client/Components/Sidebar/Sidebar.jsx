import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import './sidebar.css'

import { NavLink } from 'react-router-dom'


function Sidebar() {
    const [UserData, setUserData] = useState([])

      useEffect(() => {

    Axios.get('/api/users/getUser')
    .then(response => {
        if (response.data.success) {
          setUserData(response.data.doc);
        }
    })
    
    }, [])

return (
    <>
        {UserData._id === undefined ?
            <></>
            :
            UserData._id ?
<div className='CLient-sidebar_container'>
    <ul className='CLient-sidebar'>
        <li className='CLient-sidebar-header-User'>
            <div style={{ height: '100px',
                             display: 'flex', alignItems: 'center'}}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13 10.0002H17.0017" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                    <path d="M6.99609 9.72507L7.91548 10.5534L9.76625 8.88672" stroke="#FFCE73" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M6.99609 14.729L7.91548 15.5573L9.76625 13.8906" stroke="#FFCE73" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M20.0019 20.0058L18.1211 18.125" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round"
                        strokeLinejoin="round"></path>
                    <circle cx="16.0012" cy="16.0012" r="3.00125" stroke="#FFCE73" strokeWidth="1.5"
                        strokeLinecap="round" strokeLinejoin="round"></circle>
                    <path
                        d="M21.0036 11.1658V7.49797C21.0036 5.01165 18.988 2.99609 16.5017 2.99609H7.49797C5.01165 2.99609 2.99609 5.01165 2.99609 7.49797V16.5017C2.99609 18.988 5.01165 21.0036 7.49797 21.0036H10.9994"
                        stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
            </div>
            <div style={{ paddingLeft: '15px'}}>
                <NavLink className='CLient-sidebar-titles-User' to={'/overview'}> 
                <div style={{ width: '135px', height: '100px', display: 'flex', alignItems: 'center'}}>
                Overview
                        </div>
                </NavLink>
                </div> </li> 
                <li
                    className='CLient-sidebar-header-User'>
                    <div style={{ height: '100px',
                             display: 'flex', alignItems: 'center'}}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 9.00021H17.0017" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round"></path>
                            <path d="M6.99609 8.72507L7.91548 9.55341L9.76625 7.88672" stroke="#FFCE73"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                                d="M9.99901 20.0036H7.99818C5.2356 20.0036 2.99609 17.7641 2.99609 15.0015V6.99818C2.99609 4.2356 5.2356 1.99609 7.99818 1.99609H16.0015C17.3281 1.99609 18.6004 2.5231 19.5385 3.46117C20.4766 4.39924 21.0036 5.67154 21.0036 6.99818V9.99943"
                                stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                            <path d="M6.99609 13.729L7.91548 14.5573L9.76625 12.8906" stroke="#FFCE73"
                                strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path
                                d="M14 13.9023V19.6051C14.001 20.3783 15.5674 21.0055 17.501 21.0055C19.4345 21.0055 21.0009 20.3783 21.0019 19.6051V13.9023"
                                stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                            <path
                                d="M14 16.7539C14 17.5271 15.5674 18.1543 17.501 18.1543C19.4345 18.1543 21.0019 17.5271 21.0019 16.7539"
                                stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                            <path
                                d="M14.001 13.9004C14.001 14.6736 15.5684 15.3008 17.502 15.3008C19.4355 15.3008 21.0019 14.6736 21.0019 13.9004C21.0019 13.1262 19.4335 12.5 17.501 12.5C15.5684 12.5 14.001 13.1272 14 13.9004"
                                stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            </path>
                        </svg>
                    </div>
                    <div style={{ paddingLeft: '11px'}}>
                        <NavLink className='CLient-sidebar-titles-User' to={'/wishlist'}> 
                        <div style={{ width: '135px', height: '100px', display: 'flex', alignItems: 'center'}}>
                        Wishlist
                        </div>
                        </NavLink> </div> 
                        </li> 
                       <li
                            className='CLient-sidebar-header-User'>
                            <div style={{ height: '100px',
                             display: 'flex', alignItems: 'center'}}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                        d="M17.2545 3.92271L16.0762 2.74437C15.7504 2.41854 15.2229 2.41854 14.8979 2.74437L6.0762 11.566C5.91953 11.7219 5.83203 11.9344 5.83203 12.1552V14.1669H7.8437C8.06453 14.1669 8.27703 14.0794 8.43286 13.9227L17.2545 5.10104C17.5804 4.77604 17.5804 4.24854 17.2545 3.92271V3.92271Z"
                                        stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                    <path d="M15.7602 6.59219L13.4102 4.24219" stroke="#FFCE73" strokeWidth="1.5"
                                        strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path
                                        d="M17.5 9.16667V15.8333C17.5 16.7542 16.7542 17.5 15.8333 17.5H4.16667C3.24583 17.5 2.5 16.7542 2.5 15.8333V4.16667C2.5 3.24583 3.24583 2.5 4.16667 2.5H10.8333"
                                        stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div style={{ paddingLeft: '15px'}}>
                                <NavLink className='CLient-sidebar-titles-User' to={'/track-order'}>
                                    <div style={{ width: '135px', height: '100px', display: 'flex', alignItems: 'center'}}>
                                    Track Order
                                    </div>
                                </NavLink>
                                    </div> </li> 
                                    <li
                            className='CLient-sidebar-header-User'>
                            <div style={{ height: '100px',
                             display: 'flex', alignItems: 'center'}}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M4.9506 16.9818L4.69135 15.0265L3.49409 13.46C2.8353 12.5973 2.8353 11.4004 3.49409 10.5377L4.69135 8.97311L4.9524 7.01774C5.09629 5.94143 5.94295 5.0947 7.01924 4.95074L8.97266 4.69147L10.539 3.49412C11.4016 2.83529 12.5984 2.83529 13.461 3.49412L15.0273 4.69147L16.9826 4.95255C18.0586 5.09709 18.9049 5.94353 19.0494 7.01955L19.3086 8.97312L20.5059 10.5378C21.1647 11.4005 21.1647 12.5973 20.5059 13.46L19.3086 15.0265L19.0476 16.9818C18.9039 18.0586 18.0573 18.9059 16.9808 19.0506L15.0273 19.3081L13.461 20.5072C12.5978 21.1642 11.4022 21.1642 10.539 20.5072L8.97266 19.3081L7.01744 19.047C5.94116 18.9044 5.09408 18.058 4.9506 16.9818Z" stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                    <path fillRule="evenodd" clipRule="evenodd" d="M11.1036 8.08487C11.272 7.74348 11.6197 7.52734 12.0004 7.52734C12.3811 7.52734 12.7287 7.74348 12.8972 8.08487L13.406 9.11628C13.5516 9.41148 13.8332 9.61611 14.1589 9.66346L15.297 9.82888C15.6736 9.88366 15.9865 10.1474 16.1041 10.5093C16.2217 10.8712 16.1238 11.2685 15.8514 11.5343L15.0275 12.3379C14.792 12.5676 14.6845 12.8985 14.7401 13.2228L14.9345 14.3561C14.9988 14.7312 14.8446 15.1103 14.5368 15.334C14.2289 15.5577 13.8207 15.5873 13.4838 15.4103L12.4656 14.8751C12.1743 14.7221 11.8264 14.7221 11.5351 14.8751L10.5169 15.4103C10.18 15.5873 9.77183 15.5577 9.46395 15.334C9.15606 15.1103 9.00186 14.7312 9.06617 14.3561L9.26057 13.2228C9.31619 12.8985 9.20874 12.5676 8.97322 12.3379L8.14938 11.5343C7.87699 11.2685 7.77903 10.8712 7.89667 10.5093C8.01432 10.1474 8.32718 9.88365 8.70376 9.82888L9.84189 9.66346C10.1676 9.61611 10.4492 9.41148 10.5948 9.11628L11.1036 8.08487Z"
                                    stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                </svg>
                            </div>
                            <div style={{ paddingLeft: '15px'}}>
                                <NavLink className='CLient-sidebar-titles-User' to={'/0settings'}>
                                    <div style={{ width: '135px', height: '100px', display: 'flex', alignItems: 'center'}}>
                                    Settings
                                    </div>
                                </NavLink>
                                    </div> </li> 
                                    {/* <li className='CLient-sidebar-header-User'>
                                    <div>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" clipRule="evenodd"
                                                d="M5.99398 13V9C5.99398 5.686 8.68298 3 12 3C15.317 3 18.006 5.686 18.006 9V13C18.006 13.986 18.454 14.919 19.223 15.537L19.532 15.785C20.449 16.521 19.928 18 18.752 18H5.24798C4.07198 18 3.55098 16.521 4.46798 15.785L4.77698 15.537C5.54698 14.919 5.99398 13.986 5.99398 13Z"
                                                stroke="#FFCE73" strokeWidth="1.5" strokeLinecap="round"
                                                strokeLinejoin="round"></path>
                                            <path d="M10.5 21H13.5" stroke="#FFCE73" strokeWidth="1.5"
                                                strokeLinecap="round" strokeLinejoin="round"></path>
                                        </svg>
                                    </div>
                                    <div style={{ paddingLeft: '15px'}}>
                                        <NavLink className='CLient-sidebar-titles-User' to={'/notifications'}>Notifications
                                            </NavLink> </div> 
                                            </li>  */}
                                            {/* <li className='CLient-sidebar-header-User'>

                                            <div>
                                                <NavLink className='CLient-sidebar-titles-User'
                                                    to={'/performance-tips'}>Performance Tips</NavLink> </div> </li> */}
    </ul> 
</div> 
            :
            <></>
        } 
    
    </>
) } export default Sidebar