import React from 'react'
import '../retailerpages.css'

function BrandProductImages(props) {
  return (
    <div style={{ position: 'relative'}}>
  <img className='Overview_item_image_box' src={`http://localhost:5000/${props.images[0]}`}
    alt="productImage" />
</div>
  )
}

export default BrandProductImages