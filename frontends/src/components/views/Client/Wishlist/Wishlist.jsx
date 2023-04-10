import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import {
    getWishlistItems,
    removeWishlistItem,
    addToCartOnce
} from '../../../../_actions/user_actions';

import './wishlist.css'
import WishlistCardBlock from './WishlistCardBlock';

function Wishlist(props) {

  const dispatch = useDispatch();
  const [buyerInfo, setbuyerInfo] = useState([])

  // const productId = props.match.params.productId

  useEffect(() => {

    let wishlistItems = [];
    if (props.user.userData && props.user.userData.wishlist) {
        if (props.user.userData.wishlist.length > 0) {
            props.user.userData.wishlist.forEach(item => {
              wishlistItems.push(item.id)
            });
            dispatch(getWishlistItems(wishlistItems, props.user.userData.wishlist))
        }
    }

}, [props.user.userData])

useEffect(() => {

  Axios.get('/api/users/getUser')
  .then(response => {
      if (response.data.success) {
        setbuyerInfo(response.data.doc);
      }
  })
  
  }, [])

function refreshPage() {
  window.location.reload(false);
}

if (buyerInfo.operateLocation === "Branch"){
  props.history.push("/royal-branch")
  refreshPage()
  } else if (buyerInfo.operateLocation === "Admin") {
    props.history.push(`/0/${buyerInfo._id}`)
    refreshPage()
  }


const removeFromWishlist = (productId) => {
  dispatch(removeWishlistItem(productId))
}


const addToCartHandler = (productId) => {
dispatch(addToCartOnce(productId))
}

  return (
    <div style={{ width: '1129px'}}>
      <div style={{ padding: '0px 30px'}}>
      <div style={{ width: '100%', borderRadius: '5px', marginTop: '10px',border: '2px solid #00BFFF', padding: '0px 0px 3px 0px',
  display: 'flex', justifyContent: 'center', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)'}}>
    <span style={{ fontWeight: '700', fontSize: '35px', color: '#1380e7'}}>Your Wishlist</span>
  </div>
      </div>
    <div className='Wishlist-container'>
          <WishlistCardBlock products={props.user.wishlistDetail} addToCart={addToCartHandler} removeWishlistItem={removeFromWishlist} />
    </div>
    </div>
  )
}
export default Wishlist