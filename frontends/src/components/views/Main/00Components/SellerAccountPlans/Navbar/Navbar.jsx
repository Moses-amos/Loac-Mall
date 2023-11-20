import React from 'react';
// import './navstyle.css'
import '../../Navbar/navstyle.css'
import CroppedLogoImage from '../../../../../CroppedLogo/croppedlogo.png'
import '../../Navbar/logostyle.css'

function Navbar() {

return (
<header className='Navbar-home_main'>
  <div className='Navbar-logo-user_main'>
    {/* <div className='Navbar-image_main'> */}
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
    {/* </div> */}
  </div>

  <div className='Navbar_left-menu_items'>
  <div className='Navbar_left_menu_box'>
      <a href='/'>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>Home</span>
        </div>
      </a>
    </div>
    <div className='Navbar_left_menu_box'>
      <a href='/portable-speakers'>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>Speakers</span>
        </div>
      </a>
    </div>

    <div className='Navbar_left_menu_box'>
      <a href='/iPhones'>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>iPhones</span>
        </div>
      </a>
    </div>

    <div className='Navbar_left_menu_box'>
      <a href='/watches'>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>Watches</span>
        </div>
      </a>
    </div>

    <div className='Navbar_left_menu_box'>
      <a href='/living-room'>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>Furniture</span>
        </div>
      </a>
    </div>

    <div className='Navbar_left_menu_box'>
      <a href='/kitchen-appliances'>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>Appliances</span>
        </div>
      </a>
    </div>

    <div className='Navbar_left_menu_box'>
      <a href='/home-decore'>
        <div className='Navbar_inline_text_box'>
          <span className='Navbar_inline_text'>Decore</span>
        </div>
      </a>
    </div>

  </div>
  <div className='Nav_right_side_box'> 

  </div>
</header>
)
}

export default Navbar