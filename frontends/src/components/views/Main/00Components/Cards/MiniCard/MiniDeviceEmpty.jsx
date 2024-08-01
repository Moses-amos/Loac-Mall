import React from 'react'
import './minicardstyle.css'

function MiniDeviceEmpty() {
  return (
    <div className='Mini_listed_Box'>
    <div className='Mini_listed_Details'>
        <a> <div className='Mini_listed_image'>
        <img className='Mini_listed_image_size'src='https://i.imgur.com/To1RkjX.jpg' loading='lazy' alt="" />
      </div>
      <div className='Mini_listed_title_box'>
          <p className='Mini_listed_title_text'>Apple Device </p>
      </div>
      </a>

      <div className='Mini_value_box'>
        <div className='Mini_value_saved_box'><span className='Mini_value_saved'>Save 0%</span></div>
        <div className='Mini_value_price_box'><span className='Mini_value_price'>N$ 0.00</span></div>
      </div>
    
    </div>
    <div className='Mini_Overlay_logo'>
         <img className='Mini_logo_image_size'src='https://i.imgur.com/H03y3gg.jpg' loading='lazy' alt="" />
      </div>
    </div>
  )
}

export default MiniDeviceEmpty