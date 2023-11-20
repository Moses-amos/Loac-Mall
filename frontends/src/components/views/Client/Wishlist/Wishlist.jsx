import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import {
    getWishlistItems,
    removeWishlistItem,
    addToCartOnce
} from '../../../../_actions/user_actions';
import Sidemenu from '../Sidemenu'

import './wishlist.css'
import WishlistCardBlock from './WishlistCardBlock';
import '../sidemenu.css'

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
    <div className='Wishlist_Main_container'>
      <div className='Wishlist_Title_box'>
      <div className='Wishlist_page_header'>
    <span style={{ fontWeight: '700', fontSize: '30px', color: '#fff'}}>Wishlist</span>
  </div>
      </div>

      <div className='Wishlist_page_layout'>
      <div className='Client_page_sidebar_box'>
      <div className='Cliet_sidebar_left_box_'>
      <Sidemenu />
      </div>
    </div>
    <div className='Wishlist_page_container'>
          <WishlistCardBlock products={props.user.wishlistDetail} addToCart={addToCartHandler} removeWishlistItem={removeFromWishlist} />
    </div>
      </div>

    </div>
  )
}
export default Wishlist