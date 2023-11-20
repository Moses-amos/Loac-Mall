import React from 'react'

function BranchImages(props) {

  return (
  <>
  {props.images && props.images.map(item => (
        <div style={{ position: 'relative'}}>
        <img style={{ width: '100%', height: '200px', borderRadius: '7px' }} src={`http://localhost:5000/${item}`}
          alt="productImage" />
      </div>
  ))}
  </>
  )
}

export default BranchImages