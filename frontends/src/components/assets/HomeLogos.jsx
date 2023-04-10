import React from 'react'

function HomeLogos(props) {
  return (
    <div style={{ position: 'relative'}}>
    <img style={{ width: '92px', height: '40px', borderRadius: '3px'}} src={`http://localhost:5000/${props.retailerImage[0]}`}
      alt="" />
  </div>
  )
}

export default HomeLogos