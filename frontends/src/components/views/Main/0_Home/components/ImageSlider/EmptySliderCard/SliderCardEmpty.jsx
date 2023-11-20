import React from 'react'
import '../../../../00Components/pages.css'
import NoImage from '../Images/No_Image.jpg'
import '../imgslider.css'

function SliderCardEmpty() {
  return (
    <div className='listing-Home-Slider'>
    <div className='listing-Details'>
        <a> <div className='Item-image_non'>
        <img style={{ width: '100%', height: '214px' }} src={NoImage}
        alt="" />
      </div>
  
      <div className='Save_Deals_main'>
                    <div className='Save_Percent'>
                      <span className='Percent-Deal_span'>Save XX.XX</span>
                    </div>
                    <div className='Special_Deal_list_main'>
                    <span>Best Price</span>
                  </div> 
      </div>
  
      <div className='Item-value_main'>
        <div className='Item-price'>
          <span className='Price-span'>N$ XX.XX</span>
        </div>
        <div className='Item-wasPrice_main'>
          <span className='PriceWas-p_main'>was XX.XX</span>
        </div>  
      </div>

      <div className='Item-title_Home'>
          <p className='Item-title_p'>This is where title of the product will be shown</p>
      </div>
      </a>
    
    </div>
    <div className='Company-listing_HomeLogo'>
      </div>
    </div>
  )
}

export default SliderCardEmpty