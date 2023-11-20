import React from 'react'
import '../../../../../../Main/00Components/pages.css'

function CatalogNon() {
  return (
    <div className='Search-bar_box_royal'>
    <div className='Search-bar_input_box'>
      <input placeholder='This has no use here ...' className='Search-bar_input_retailer' 
      maxLength={50}
       type='text' />
    </div>
    {/* <div className='Search-bar_button_box'>
      <button className='Search-bar_button'>
        <span style={{width: '100%', height: '100%'}}>Search</span> 
      </button>
    </div> */}
  </div>
  )
}

export default CatalogNon