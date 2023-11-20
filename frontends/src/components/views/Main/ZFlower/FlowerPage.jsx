import React from 'react'
import './flowerstyle.css'
import ReactPlayer from 'react-player'
import BirthDayBackground from './Assets/Bakc.jpg'
import BirthDayNav from './Assets/memoBirthday.jpg'

function FlowerPage() {
  return (
    <>
    <div className='FlowerPage_container'>
    <div className='Birthday_Navbar'>
         <img 
     style={{ width: '100%', height: '100%'}}
      src={BirthDayNav} 
      alt=""/>
    </div>
            <div className='FlowerPage_Name_box'>
            <div className='FlowerPage_Name'>
            <span className='FlowerPage_Name_style'>Memory Hoeses</span>
            </div>
            </div>
            <div className='FlowerPage_Video'>
            <ReactPlayer controls={true} url='https://www.facebook.com/100090410604506/videos/1055822042247596/'
            
             height="360px" width="640px" />
            </div>
            <div className='FlowerPage_Message'>
            <span className='FlowerPage_Message_style'>You are a Blessing, live with Joy</span>
            </div>

    </div>

    <div className='FlowerPage_image_background'>
    <img 
     style={{ width: '100%', height: '100%'}}
      src={BirthDayBackground} 
      alt=""/>
    </div>
    </>
    
  )
}

export default FlowerPage