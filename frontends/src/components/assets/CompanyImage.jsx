import React from 'react'

function CompanyImage(props) {
  return (
    <>
  <img style={{ width: '100%', height: '100%', borderRadius: '7px'}} src={`http://localhost:5000/${props.retailerImage[0]}`}
    alt="" />
</>
  )
}

export default CompanyImage