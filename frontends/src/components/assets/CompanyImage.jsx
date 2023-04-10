import React from 'react'

function CompanyImage(props) {
  return (
    <div style={{ position: 'relative'}}>
  <img style={{ width: '92px', height: '42px', borderRadius: '3px'}} src={`http://localhost:5000/${props.retailerImage[0]}`}
    alt="" />
</div>
  )
}

export default CompanyImage