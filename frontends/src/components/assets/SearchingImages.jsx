import React from 'react'
import './searchingimage.css'

function SearchingImages(props) {
  return (
    <div style={{ position: 'relative'}}>
    <img className='Searching_image_resize' src={`http://localhost:5000/${props.images[0]}`}
      alt="productImage" />
  </div>
  )
}

export default SearchingImages