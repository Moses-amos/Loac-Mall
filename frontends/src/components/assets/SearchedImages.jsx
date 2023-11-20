import React from 'react'

function SearchedImages(props) {
  return (
    <div style={{ position: 'relative'}}>
    <img style={{ width: '330px', height: '210px'}} src={`http://localhost:5000/${props.images[0]}`}
      alt="productImage" />
  </div>
  )
}

export default SearchedImages