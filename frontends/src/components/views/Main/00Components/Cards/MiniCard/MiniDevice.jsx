import React from 'react'
import ProductImage from '../../../../../assets/ProductImage'
import './minicardstyle.css'

function AppleDevice(props) {
  return (
    <div className='Mini_listed_Box'>
    <div className='Mini_listed_Details'>
        <a href={`/product/${props.product._id}`}> <div className='Mini_listed_image'>
          <ProductImage images={props.product.imageOne} />
      </div>
      <div className='Mini_listed_title_box'>
          <p className='Mini_listed_title_text'>{props.product.title}</p>
      </div>
      </a>

      <div className='Mini_value_box'>
        <div className='Mini_value_saved_box'><span className='Mini_value_saved'>Save {props.product.special ? <>{props.product.special}%</> : <>{props.product.specialAttribute}</>}</span></div>
        <div className='Mini_value_price_box'><span className='Mini_value_price'>N$ {props.product.price}</span></div>
      </div>
    
    </div>
    </div>
  )
}

export default AppleDevice