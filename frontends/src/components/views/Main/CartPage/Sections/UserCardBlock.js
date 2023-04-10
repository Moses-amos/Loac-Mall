import React from 'react'
import '../cartpage.css'

function UserCardBlock(props) {

    // const [wishlistClicked, setwishlistClicked] = useState(false)

    // const ClickedWishlist = () => setwishlistClicked(!wishlistClicked)

    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderCartBrand = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (
        props.products && props.products.map(product => (
   
            <div key={product._id} className='Cart-listing_titles_box'>
            <div className='Cart-description_listing'>
                <div>
                    <img style={{ width: '250px', height: '180px'}} alt="" 
                    src={renderCartImage(product.images)} />
                </div>
                <div className='Cart-listing_Other_title'>
                    <div className='Cart-listing_title'>
                    <a href={`/product/${product._id}`} 
                    className="listing_title"><span>{product.title}</span></a>
                    </div>
                    <div style={{ width: '100%', position: 'relative', height: '40px', borderTop: '2px solid #e3e4e5', padding: '10px 10px 0px 50px', display: 'flex'}}>
                        <div className='Cart-price-quantity_listing'>
                        <div>Price: 
                        </div>
                        <div className='Cart-price-quantity_listing_right'>N$ {product.price}</div>
                        </div>
                        <div className='Cart-price-quantity_listing'>
                        <div>Quantity: 
                        </div>
                        <div className='Cart-price-quantity_listing_right'>
                        {product.quantity === 1?
                        <>{product.quantity} unit</> 
                        :
                        <>{product.quantity} units</> 
                        }
                        </div>
                        </div>
                    </div>
                    {product.retailerImage === undefined ?
                    <></>
                :
                <div className='Cart_Item_Retailer'>
                        <img style={{ width: '92px', borderRadius: '3px', height: '42px'}} alt="" 
                    src={renderCartBrand(product.retailerImage)} 
                    /></div>
                }
                    <div style={{ display: 'flex',
               justifyContent: 'center', marginTop: '7px'}}>
                  <div className='SavePercent'>
                    <span className='Percent-Deal_span_overview'>{product.warrenty}</span>
                  </div>
               </div>
                </div>
            </div>
            <div className='Cart-listing_right_box'>
            <div className='Cart-options_listing'>
            <div className='Cartlisting_buttons'>
                <button className='Cart-addquantity_button'
                onClick={()=> props.addToCart(product._id)}
                // onClick={()=> props.addToCart(product._id)}
                >Add Quantity </button>
                </div>                
                <div className='Cartlisting_buttons'>
                <button className='Cart-wishlist_button'
                onClick={()=> props.addToWishlist(product._id)}
                >Wishlist
                </button>
                </div>
                
                <div className='Cartlisting_buttons'>
                <button className='Cart-remove_button'
                onClick={()=> props.removeItem(product._id)}
                >Remove </button>
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
                    <span>DESCRIPTION</span>
                </div>
                {/* <div className='Cart-title_center Cart-price-quantity_box'>
                    <span>QUANTITY</span>
                </div>
                <div className='Cart-title_center Cart-price-quantity_box'>
                    <span>PRICE</span>
                </div> */}
                <div className='Cart-title_center Cart-options_box'>
                    <span>CONFIGURE</span>
                </div>
            </div>
            <div className='Card-renderItems'>
                {renderItems()}
            </div>
        </div>
    )
}

export default UserCardBlock