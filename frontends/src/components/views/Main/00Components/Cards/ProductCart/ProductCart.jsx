import React from 'react'
import ProductImage from '../../../../../assets/ProductImage'
// import CompanyImage from '../../../../../assets/CompanyImage'

function ProductCart(props) {

  return (
    <div className='Item_listed_Box'>
    <div className='Item_listed_Details'>
        <a href={`/product/${props.product._id}`}> <div className='Item_listed_image'>
          <ProductImage images={props.product.imageOne} />
      </div>
      <div className='Item_listed_title_box'>
          <p className='Item_listed_title_text'>{props.product.title}</p>
      </div>
      </a>

      <div className='Item_value_box'>
        <div className='Item_value_saved_box'><span className='Item_value_saved'>Save {props.product.special ? <>{props.product.special}%</> : <>{props.product.specialAttribute}</>}</span></div>
        <div className='Item_value_price_box'><span className='Item_value_price'>N$ {props.product.price}</span></div>
      </div>

      {/* {props.product.retailerImage.length === 1 ? 
        <div className='Marketer_listing_logo'>
          <CompanyImage retailerImage={props.product.retailerImage} />
        </div>
      :
      <></>
      } */}
    
    </div>
    </div>
  )
}

export default ProductCart