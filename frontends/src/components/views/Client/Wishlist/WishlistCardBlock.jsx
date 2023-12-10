import React, { useState, useEffect } from 'react'
import NoImage from '../TrackOrder/Images/No_Image.jpg'

function WishlistCardBlock(props) {
  const [IsLoading, setIsLoading] = useState(true)
  const [ShowPreview, setShowPreview] = useState(false)

  const TogglePreview = () => setShowPreview(!ShowPreview)

  useEffect(() => {
  
    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    
  })

const renderCartImage = (images) => {
if(images.length > 0) {
let image = images[0]
return `http://localhost:5000/${image}`
}
}

const renderItems = () => (
props.products && props.products.map(product => (
    <div key={product._id} className='Wishlist_item_box'>
    <div className='Wishlist_item_title'>
      <a href={`/product/${product._id}`}>
          <span className='Wishlist-item_title_span'>{product.title}</span>
      </a>
    </div>
    <div className='Wishlist-item-bottom_section'>
    <div className='Wishlist_item_image'>
    <img key={product._id} style={{ width: '188px', height: '100%', borderRadius: '7px' }} alt='' src={renderCartImage(product.imageOne)} />
      </div>
      <div className='Wishlist_item_options'>
        <div className='Wishlist_options_wrapper'> 
        <div style={{ width: '100%', display: 'block'}}>
        <div className='Wishlistlisting_buttons'>
            <button className='Wishlist_addtocart_button'
            onClick={()=> props.addToCart(product._id)}
            >To Saves</button>
            </div>  
      <div className='Wishlistlisting_buttons'>
            <button className='Wishlist_remove_button'
            onClick={()=> props.removeWishlistItem(product._id)}
            >Remove </button>
            </div>
        </div>
        </div>

            <div className='Wishlist_price_bottom_box'>
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
    <>
    {IsLoading === undefined ?
    <></>
    :
    IsLoading === true ?
    <></>
    :
    <>
      <div className={ShowPreview === false ? "Client_preview_toggle" : "Client_preview_toggle_hide"}>
      <div style={{ display: 'block', marginTop: '40px'}}>
        <div style={{ width: '100%', height: '270px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '7px'}}>
                      <a>
                        <img style={{ width: '300px', height: '250px'}} src="https://i.imgur.com/qsLRMMX.jpg" alt="" />
                      </a>
                    </div>
                    
                    <div style={{ marginTop: '30px'}}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <span style={{ fontWeight: '600', fontSize: '14px', color: '#3E3D53'}}>Empty Wishlist</span>
                        </div>
                     </div>
        </div>

        <div className='Client_preview_box'>
          <button className='Client_preview_button' onClick={TogglePreview}>Preview</button>
        </div>
      </div>

      <div className={ShowPreview === true ? "Client_preview_toggle" : "Client_preview_toggle_hide"}>
      <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around'}}>

      <div className='Wishlist_item_box'>
    <div className='Wishlist_item_title'>
      <a>
          <span className='Wishlist-item_title_span'>This is where the title of the item is shown.</span>
      </a>
    </div>
    <div className='Wishlist-item-bottom_section'>
    <div className='Wishlist_item_image'>
    <img style={{ width: '188px', height: '100%', borderRadius: '7px' }} alt='' src={NoImage} />
      </div>
      <div className='Wishlist_item_options'>
        <div className='Wishlist_options_wrapper'>
          <div style={{ width: '100%', display: 'block'}}>
          <div className='Wishlistlisting_buttons'>
            <button className='Wishlist_addtocart_button'
            >To Saves</button>
            </div>  
      <div className='Wishlistlisting_buttons'>
            <button className='Wishlist_remove_button'
            >Remove </button>
            </div>
          </div>
        </div>
            <div className='Wishlist_price_bottom_box'>
              <span className='Wishlist_price_bottom_span'>N$ 0.00</span>
            </div>
      </div>
    </div>

  </div>

  <div className='Wishlist_item_box'>
    <div className='Wishlist_item_title'>
      <a>
          <span className='Wishlist-item_title_span'>This is where the title of the item is shown.</span>
      </a>
    </div>
    <div className='Wishlist-item-bottom_section'>
    <div className='Wishlist_item_image'>
    <img style={{ width: '188px', height: '100%', borderRadius: '7px' }} alt='' src={NoImage} />
      </div>
      <div className='Wishlist_item_options'>
        <div className='Wishlist_options_wrapper'>
          <div style={{ width: '100%', display: 'block'}}>
          <div className='Wishlistlisting_buttons'>
            <button className='Wishlist_addtocart_button'
            >To Saves</button>
            </div>  
      <div className='Wishlistlisting_buttons'>
            <button className='Wishlist_remove_button'
            >Remove </button>
            </div>
          </div>
        </div>
            <div className='Wishlist_price_bottom_box'>
              <span className='Wishlist_price_bottom_span'>N$ 0.00</span>
            </div>
      </div>
    </div>

  </div>

  </div>

  <div className='Client_preview_box'>
          <button className='Client_preview_button' onClick={TogglePreview}>Back</button>
        </div>
      </div>

  
  </>
    }
    </>
    :
    <>
    {renderItems()}
    </>
    }
    </>
)
}    


export default WishlistCardBlock