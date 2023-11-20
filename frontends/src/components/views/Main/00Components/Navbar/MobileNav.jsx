import React from 'react'
import './mobilenav.css'
import RightMenu from './Sections/RightMenu';
import CroppedLogoImage from '../../../../CroppedLogo/croppedlogo.png'
import './logostyle.css'

function MobileNav() {
  return (
    <div className='Mobile_Nav_container'>
        <div className='Mobile_Nav_flex'>
        <div className='Mobile_Nav_left'>

        </div>

<div className='Mobile_Nav_center'>
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

<div className='Mobile_Nav_right'>
    <RightMenu mode="inline" />
</div>
        </div>
        
    </div>
  )
}

export default MobileNav