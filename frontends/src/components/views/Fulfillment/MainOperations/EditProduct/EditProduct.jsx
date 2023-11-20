import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import UpdateImage from './Sections/UpdateImage';
import UpdateInfo from './Sections/UpdateInfo';

function EditProduct(props) {

const productId = props.match.params.productId
let [Product, setProduct] = useState([])

useEffect(() => {
  Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
      .then(response => {
          setProduct(response.data[0])
      })
}, [Product])


return (
<div style={{ padding: '30px 20px 30px 20px', position: 'relative', minHeight: '600px', display: 'block'}}>
  <div style={{ width: '100%',  display: 'flex'}}>
    <UpdateImage detail={Product} productId={productId} />
    <UpdateInfo productId={productId} detail={Product} />
  </div>
</div>
)
}
// style={{ padding: '30px 20px', display: 'block'}}
export default EditProduct