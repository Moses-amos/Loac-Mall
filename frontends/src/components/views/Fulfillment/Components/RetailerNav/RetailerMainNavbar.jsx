import React, { useEffect, useState } from 'react'
import './mainretailernav.css'
import Axios from 'axios';
import RightMenu from './Sections/RightMenu';
import LogoImage from '../../../../LogoImage/logo.png'
import { SearchData } from '../../../../../_actions/user_actions';
import { useDispatch } from "react-redux";
import { SearchOutlined } from '@ant-design/icons';

function RetailerMainNavbar() {

    const dispatch = useDispatch();

    const [UserData, setUserData] = useState([])
    const [SearchTerms, setSearchTerms] = useState("")

    const onChangeSearch = (event) => {
        setSearchTerms(event.currentTarget.value)
      
      }

      useEffect(() => {
    
        Axios.get('/api/users/getUser')
        .then(response => {
        if (response.data.success) {
          setUserData(response.data.doc)
        }
        })
        
        }, [])
      
      useEffect(() => {
          dispatch(SearchData(SearchTerms))
      }, [SearchTerms])

  return (
    <header className='Main_nav_box'>
        <div className='Main_nav_box_configure'>
            <div className='Main_nav_logo_box'>
            {UserData.length === 0 ?
     <div style={{ width: '180px', height: '30px' }} >
      <a href="/">     

     <img 
     style={{ width: '180px', height: '30px'}}
      src={LogoImage} 

      alt=""/>

      </a> 
    </div>

:
<div style={{ width: '180px', height: '30px' }} >
<a href={`/0/${UserData._id}`}>     

<img 
style={{ width: '180px', height: '30px'}}
src={LogoImage} 

alt=""/>

</a> 
</div>

     }

            </div>
            <div className='Main_nav_search_retailer'>
                <div className='Main_nav_search_bar'>
                <input className='Main_Nav_search_bar_input_main' 
                    value={SearchTerms} 
                    placeholder='Search Catalog'
                    maxLength={100}
                    onChange={onChangeSearch}
                    type='text'
                />
                </div>
                <div className='Main_nav_search_bar_button'>
                    <button className='Main_Nav_search_bar_button'>
                        <span style={{width: '100%', height: '100%', 
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'center'}}><SearchOutlined /></span>
                    </button>
                </div>
            </div>
            <div className='Main_nav_right_retailer_box'>
                <RightMenu mode="inline" />
            </div>
        </div>
    
    </header>
  )
}

export default RetailerMainNavbar