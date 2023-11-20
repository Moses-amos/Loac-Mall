import React from 'react'

function TrackImages(props) {
  return (
    <div style={{ position: 'relative'}}>
    <img style={{ width: '100%', height: '180px' }} src={`http://localhost:5000/${props.images[0]}`}
      alt="productImage" />
  </div>
  )
}

export default TrackImages