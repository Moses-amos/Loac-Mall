import React, { useEffect, useState } from 'react'
import Axios from 'axios';import './settingstyle.css'
import { DashboardOutlined, EditLocationOutlined, VerifiedUserOutlined } from '@material-ui/icons';
import { NavLink } from 'react-router-dom'

function SettingSidebar() {

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
<div className='Retailer_manage_container'>
    <ul className='CLient-sidebar'>
    <li style={{ width: '100%', padding: '75px 0px 30px 0px', display: 'flex'}}>

<div className='Retailer_settings_back'>
  <a href={`/0/${UserData._id}`} style={{ width: '100%', height: '100%', display: 'flex', 
justifyContent: 'center', alignItems: 'center' }}><span style={{color: '#fff', fontWeight: '500'}}>Back</span></a>
</div>

</li>
        <li className='CLient-sidebar-header-User'>
            <div style={{ height: '100px',
                             display: 'flex', alignItems: 'center'}}>
                <VerifiedUserOutlined />
            </div>
            <div style={{ paddingLeft: '11px'}}>
                <NavLink className='CLient-sidebar-titles-User' to={'/re-settings'}> 
                <div style={{ width: '135px', height: '100px', display: 'flex', alignItems: 'center'}}>
                Account
                        </div>
                </NavLink>
                </div> </li> 
                <li
                    className='CLient-sidebar-header-User'>
                    <div style={{ height: '100px',
                             display: 'flex', alignItems: 'center'}}>
                      <EditLocationOutlined />
                    </div>
                    <div style={{ paddingLeft: '11px'}}>

                    {UserData.accountTier === "Free" ?
                      <NavLink className='CLient-sidebar-titles-User' to={'/set-location'}> 
                      <div style={{ width: '135px', height: '100px', display: 'flex', alignItems: 'center'}}>
                      Location
                      </div>
                      </NavLink>
                      :
                      <NavLink className='CLient-sidebar-titles-User' to={'/store-locations'}> 
                        <div style={{ width: '135px', height: '100px', display: 'flex', alignItems: 'center'}}>
                        Locations
                        </div>
                        </NavLink>
                      }

                         </div> 
                        </li> 
                       {/* <li
                            className='CLient-sidebar-header-User'>
                            <div style={{ height: '100px',
                             display: 'flex', alignItems: 'center'}}>
                               <DashboardOutlined />
                            </div>
                            <div style={{ paddingLeft: '15px'}}>
                                <NavLink className='CLient-sidebar-titles-User' to={'/manage-account'}>
                                    <div style={{ width: '135px', height: '100px', display: 'flex', alignItems: 'center'}}>
                                    Subscriptions
                                    </div>
                                </NavLink>
                                    </div> </li>  */}
                                    
                                           
    </ul> 
</div> 
            :
            <></>
        } 
    </>
  )
}

export default SettingSidebar