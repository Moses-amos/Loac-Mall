import React, { useEffect, useState } from 'react'
import './mainnav.css'
import RightMenu from './Sections/RightMenu';
import CroppedLogoImage from '../../../../CroppedLogo/croppedlogo.png'
import { SearchOutlined } from '@ant-design/icons';
import { SearchData, NavMenuState } from '../../../../../_actions/user_actions';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './logostyle.css'

function MainNavbar() {

const userMenu = useSelector(state => state.user)

const [SearchTerms, setSearchTerms] = useState("")
const [PhoneModal, setPhoneModal] = useState();

const dispatch = useDispatch();

const onChangeSearch = (event) => {
  setSearchTerms(event.currentTarget.value)

}

useEffect(() => {
    dispatch(SearchData(SearchTerms))
}, [SearchTerms])


useEffect(() => {
    dispatch(NavMenuState(PhoneModal))
    if (userMenu && userMenu.menuBox) {
        setPhoneModal(userMenu.menuBox)
      }

}, [PhoneModal])


  return (
    <header className='Main_nav_user_box'>
        <div className='Main_nav_user_box_configure'>
            <div className='Main_nav_logo_box'>
            <div style={{ width: '25px', height: '25px' }} >
            <a href="/">     
                <img 
                style={{ width: '25px', height: '25px'}}
                src={CroppedLogoImage} 
                alt=""/>
            </a> 
            </div>
            <div className='Logo_name_box' >
            <a href="/">     
                <h1 className='Company_name_h1'>loac mall</h1>
            </a> 
            </div>
           
            </div>
            
            <div className='Main_nav_search_first'>
                
                <div className='Main_nav_search_bar'>
                <input className='Main_Nav_search_bar_input_main' 
                    value={SearchTerms} 
                    maxLength={100}
                    placeholder='Search with us'
                    onChange={onChangeSearch}
                    type='text'
                />
                <div className='Main_nav_search_bar_button'>
                    <button className='Main_Nav_search_bar_button'>
                        <span style={{width: '100%', height: '100%', 
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'center'}}><SearchOutlined /></span>
                    </button>
                </div>
                </div>
                
                
            </div>
            <div className='Main_nav_right_box'>
                <RightMenu mode="inline" />
            </div>
        </div>
    
    </header>
  )
}

export default MainNavbar