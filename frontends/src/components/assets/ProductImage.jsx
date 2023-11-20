import React from 'react'

function ProductImage(props) {
return (
<>
  <img style={{ width: '100%', height: '100%', borderRadius: '7px'}} src={`http://localhost:5000/${props.images[0]}`}
    alt="productImage" />
</>
)
}

export default ProductImage