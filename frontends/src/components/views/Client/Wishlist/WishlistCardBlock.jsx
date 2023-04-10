import React from 'react'
import NoImage from '../TrackOrder/Images/No_Image.jpg'

function WishlistCardBlock(props) {

const renderCartImage = (images) => {
if(images.length > 0) {
let image = images[0]
return `http://localhost:5000/${image}`
}
}

console.log(props.product);


const renderItems = () => (
props.products && props.products.map(product => (
    <div key={product._id} className='Wishlist-item_box'>
    <div className='Wishlist-item_title'>
      <a href={`/product/${product._id}`}>
          <span className='Wishlist-item_title_span'>{product.title}</span>
      </a>
    </div>
    <div className='Wishlist-item-bottom_section'>
    <div className='Wishlist-item_image'>
    <img key={product._id} style={{ width: '228px', height: '100%' }} alt='' src={renderCartImage(product.images)} />
      </div>
      <div className='Wishlist-item_options'>
      <div className='Wishlistlisting_buttons'>
            <button className='Wishlist-addtocart_button'
            onClick={()=> props.addToCart(product._id)}
            >To Cart </button>
            </div>  
      <div className='Wishlistlisting_buttons'>
            <button className='Wishlist-remove_button'
            onClick={()=> props.removeWishlistItem(product._id)}
            >Remove </button>
            </div>
            <div className='Wishlist_price_bottom'>
              <span className='Wishlist_price_bottom_span'>N$ {product.price}</span>
            </div>
      </div>
    </div>

  </div>
    ))
)

return (
    <>
    {
    props.products === undefined ?
    <div className='Wishlist-item_box'>
    <div className='Wishlist-item_title'>
      <a>
          <span className='Wishlist-item_title_span'>This is where the Title of the product is shown.</span>
      </a>
    </div>
    <div className='Wishlist-item-bottom_section'>
    <div className='Wishlist-item_image'>
    <img style={{ width: '226px', height: '100%' }} alt='' src={NoImage} />
      </div>
      <div className='Wishlist-item_options'>
      <div className='Wishlistlisting_buttons'>
            <button className='Wishlist-addtocart_button'
            >To Cart </button>
            </div>  
      <div className='Wishlistlisting_buttons'>
            <button className='Wishlist-remove_button'
            >Remove </button>
            </div>
            <div className='Wishlist_price_bottom'>
              <span className='Wishlist_price_bottom_span'>N$ XXXX.XX</span>
            </div>
      </div>
    </div>

  </div>
    :
    <>
    {renderItems()}
    </>
    }
    </>
)
}    


export default WishlistCardBlock