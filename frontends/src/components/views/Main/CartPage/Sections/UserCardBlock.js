import React from 'react'
import '../cartpage.css'
import '../../00Components/pages.css'
import '../../../Client/TrackOrder/trackorder.css'
import '../../../Fulfillment/MainOperations/Pages/MainPages/retailerstyle.css'
import '../../../Fulfillment/RegionalPages/style.css'

function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }


    const renderItems = () => (
        props.products && props.products.map(product => (

<div key={product._id} className='Cart-item_box_main'>
<div className='Cart_Details_info_box'>
  <div className='Cart_item_image_listing'>
  <img style={{ width: '100%', height: '180px', borderRadius: '10px'}} alt="" 
      src={renderCartImage(product.imageOne)} />
  </div>

  <div className='Cart_title_other_info_box'>
  <div className='Cart_item_title_info_box'>
      <a href={`/product/${product._id}`} className='Cart_item_title_info_span'>
      {product.title}
      </a>
    </div> 

    <div className='Cart_item_specific_info_box'>
    <div className='Cart_item_select_Wishlist'>
      <button
      onClick={()=> props.addToWishlistOnce(product._id)}
       className='Cart_item_save_wishlist'>
        <span>To wishlist</span>
      </button>
      
    </div>

      <div className='Cart_item_price_quantity'>
      <div className='Cart_item_quantity_flex'>
              <button 
                onClick={()=> props.addToCart(product._id)}
              className='Cart_item_increase_units'>
                <span>Add</span>
              </button>

          <div className='Cart_item_specific_title_box'>Quantity:</div>
          <div className='Cart_item_figure_unit'>{product.quantity}</div>
        </div>

        <div className='Cart_item_price_flex'>
          <div className='Cart_item_specific_title_box'>Price:</div>
          <div className='Cart_item_figure_unit'>N$ {product.price}</div>
        </div>
      </div>
      
      <div className='Cart_item_select_remove'>
      <div className='Cart_item_shipping_box'>
        <div className='Cart_item_shipping_text'>
          Marketed By
        </div>
        <div className='Cart_item_shipping_seller'>{product.retailerName}</div>
      </div>

      <button 
      onClick={()=> props.removeItem(product._id)}
      className='Cart_item_remove_item'>
        <span>Remove</span>
      </button>
      
    </div>

    </div>
  </div>

</div>
</div>
        ))
    )

    return (
        <div className='Cart-top_titles_box'>
            <div className='Cart-top_left'>
                <div className='Cart-title_center Cart-description_box'>
                    <span>Description</span>
                </div>
                <div className='Cart-title_center_total Cart-total_box'>
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', paddingRight: '10px'}}>
                      <div>Total:</div>
                      <div style={{ marginLeft: '15px'}}>N$ {props.total}</div>
                    </div>

                </div>
            </div>
            <div className='Mobile_size_checkout_box'>
                <div className='Checkout_Order_mobile_box'>
                
                <div className='Mobile_size_place_checkout_box'>
                  <button onClick={() => {props.infoPopup()}} className='Mobile_size_place_checkout_button'>Request</button>
                </div>
                </div>
              </div>
            <div className='Card-renderItems'>
                {renderItems()}
            </div>
        </div>
    )
}

export default UserCardBlock