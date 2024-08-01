import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import AvailableLocation from '../Cards/AvailableLocation'
import TextareaAutosize from 'react-textarea-autosize';

import '../../../../00Components/pages.css'
import '../../../../../Fulfillment/MainOperations/EditProduct/EditStyle.css'
import '../../clickedpc.css'

function ProductInfo(props) {
const [Product, setProduct] = useState({})
const [Images, setImages] = useState([])
const [addedWishlist, setaddedWishlist] = useState(false)
const [addCartItem, setaddCartItem] = useState(false)
const [UserData, setUserData] = useState([])

const addedItem = () => setaddedWishlist(true)
const CartItem = () => setaddCartItem(true)

useEffect(() => {

setProduct(props.detail)

    if (props.detail.retailerImage && props.detail.retailerImage.length > 0) {
        setImages(props.detail.retailerImage)
        }

Axios.get('/api/users/getUser')
.then(response => {
    if (response.data.success) {
      setUserData(response.data.doc)
    }
})
}, [props.detail])


const addToCarthandler = () => {
    props.addToCartOnce(props.detail._id)
    }
    
    const addToWishlistOncehandler = () => {
    props.addToWishlistOnce(props.detail._id)
    }
    

return (
    <>
    {Product.product === undefined ?
    <></>
    :
   <div className='Clicked_page_Info_detail_box'>
    <div className='Clicked_page_Info_Title_box'>
        <span className='Clicked_page_Title_span_detail'>{Product.title}</span>
    </div>
    <div className='Clicked_page_Info_mid_box'>
        <div className='Clicked_page_Info_prices_box'>
            <div className='Info-prices_padding'>
                {(Product && Product.special === undefined) || Product.specialAttribute === undefined ?
                <></>
                :
                (Product.special !== "" && Product.special !== "0") && (Product.specialAttribute === "" || Product.specialAttribute === "0" ) ?
                <div 
                style={{ width: '80px', padding: '10px 0px 20px 0px'}}
                >
                <div className='SavePercent'>
                    <span className='Percent-Deal_span_detail'>Save {Product.special}</span>
                </div>
            </div> 
                :
                (Product.specialAttribute !== "" && Product.specialAttribute !== "0") && (Product.special === "" || Product.special === "0") ?
                <div style={{ width: '120px', padding: '10px 0px 20px 0px'}}>
                <div className='SavePercent'>
                    <span className='Percent-Deal_span_detail'>Save N$ {Product.specialAttribute}</span>
                </div>
            </div>
              :
              Product.special !== "0" && Product.specialAttribute !== "0" ?
              <></>
            :
            <></>
                }
                <div className='Clicked_page_Info_item_prices'>
                    <div className='Item-price_span'>
                        <span className='Info-price_span'>N$ {Product.price}</span>
                    </div>
                    {Product && Product.wasPrice === undefined ?
                    <></>
                    :
                    Product && Product.wasPrice !== 0 ?
                    <div className='Clicked_page_Item_wasprice_span'>
                        <span>was {Product.wasPrice}</span>
                        {/* <div className='Wasprice_crossout'></div> */}
                    </div>
                    :
                    <></>
                    }
                </div>
                <div className='Clicked_page_Item-delivery-info-detail'>
                    <span>{Product.deliveryStatus}</span>
                </div>
                <div className='Clicked_page_Item-warrenty-info-detail'>
                    <span>{Product.warrenty}</span>
                </div>

            </div>
        </div>
        
    {UserData.operateLocation === "Admin" || UserData._id === undefined ?
    <div className='Clicked_page_Info_cart_wishlist_box'>

    <div className='Info-addtocart'>
        <span className='Info-wishlist_span'>Save Item</span>
    </div>

    <div className='Info-addtowishlist' >
        <span className='Info-wishlist_span'>Wishlist</span>
       
    </div>
    <div className='Verified_seller_logo'>
            <div className='Detailed_retailer_logo'>
        <img style={{ width: '92px', borderRadius: '3px', height: '42px'}} alt="" 
        src={`http://localhost:5000/${Images[0]}`} 
        /> 
        </div>
            </div>
   </div>
        :
        <div className='Clicked_page_Info_cart_wishlist_box'>

    <div className='Info-addtocart' onClick={()=> {CartItem(); addToCarthandler()}}>
    {addCartItem === false ?
        <span className='Info-wishlist_span'>Save Item</span>
        :
        addCartItem && addCartItem === true ?
        <span className='Info-wishlist_span'>Saved</span>
        :
        <span className='Info-wishlist_span'>Save Item</span>
        }
    </div>

    <div className='Info-addtowishlist' onClick={()=> { addedItem(); addToWishlistOncehandler() }} >

        {addedWishlist === false ?
        <span className='Info-wishlist_span'>Wishlist</span>
        :
        addedWishlist && addedWishlist === true ?
        <span className='Info-wishlist_span'>Added</span>
        :
        <span className='Info-wishlist_span'>Wishlist</span>
        }

    </div>

    {Images.lenght > 0 ? 
    <div className='Verified_seller_logo'>
    <div className='Detailed_retailer_logo'>
<img style={{ width: '92px', borderRadius: '3px', height: '42px'}} alt="" 
src={`http://localhost:5000/${Images[0]}`} 
/> 
</div>
    </div>
     :
     <></>
     }
    
   </div>
    }

   </div>

    {Product.accountTier === "Free" ?
        <div className='Available_In_title'>
           <span style={{ fontSize: '15px', fontWeight: '700', color: '#333'}}>Available From</span>
        </div>
        :
        <div className='Available_In_title'>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#333'}}>Available In</span>
        </div>
    }

    <div className='Info_page_Available_locations'>
    <AvailableLocation UserData={UserData} Product={Product} />
    </div>

    {Product.product === "Item Category" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li> 
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Battery" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Battery Type:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Reachargeable?:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Units Count:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Tool Accessory" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Power Tool" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
        
            {Product && Product.voltage === undefined ?
            <></>
            :
            Product && Product.voltage !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Voltage:</div>
                <div className='Info-productdetail_li-right'>{Product.voltage}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li> 
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Nail Gun" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Fasteners:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Jig Saw" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Blade Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Electric Sander" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Rotational Speed:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            {Product && Product.voltage === undefined ?
            <></>
            :
            Product && Product.voltage !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Voltage:</div>
                <div className='Info-productdetail_li-right'>{Product.voltage}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.voltage}</div>
            </li>
            :
            <></>
            }
            
        </ul>
    </div>
    :
    Product.product === "Electric Planer" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.voltage}</div>
            </li>
            :
            <></>
            }

        </ul>
    </div>
    :
    Product.product === "Electric Chainsaw" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Horsepower:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.cableLenght === undefined ?
            <></>
            :
            Product && Product.cableLenght !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Chain Length:</div>
                <div className='Info-productdetail_li-right'>{Product.cableLenght}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weigh:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.voltage}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Power Drill" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>

            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Rotational Speed:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            {Product && Product.voltage === undefined ?
            <></>
            :
            Product && Product.voltage !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Voltage:</div>
                <div className='Info-productdetail_li-right'>{Product.voltage}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Outdoor Tool" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Medal Detector" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Lawn Mower" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Cutting Width:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Positions:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }

        </ul>
    </div>
    :
    Product.product === "Pressure Washer" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Maximum Pressure:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Maximum Flow Rate:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            
        </ul>
    </div>
    :
    Product.product === "Trimmer Tool" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Cutting Width:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }

        </ul>
    </div>
    :
    Product.product === "Leaf Blower" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Maximum Speed:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Outdoor Grill" || Product.product === "Outdoor Smoker" 
    || Product.product === "Grill Accessory" || Product.product === "Outdoor Kitchen"
    || Product.product === "Log Splitter" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Fire Place" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Installation Type:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Control Method:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Heater" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Control Method:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Electric Fan" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Electric Fan Design:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Control Method:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Evaporative Cooler" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Air Flow Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Floor Area:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Reservoir Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Control Method:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Dehumidifier" || Product.product === "Humidifier" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Floor Area:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Kitchen Thermometer" || Product.product === "Kitchen Torch" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Air Purifier" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Air Conditioner" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Cooling Power:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Floor Area:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Control Method:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product=== "Steam Cleaner" ||
    Product.product=== "Carpet Cleaner" || Product.product=== "Thermostat" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Feature:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Robot Vacuum" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Controller Type:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Feature:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Vacuum Cleaner" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Form Factor:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Wash Machine" || Product.product === "Dryer" || Product.product === "Washer Dryer Combo" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Access Location:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Clothing Iron" || Product.product === "Steamer"  ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Air Fryer Oven" || Product.product === "Air Fryer" || Product.product === "Deep Fryer"
    || Product.product === "Kettle"|| Product.product === "Mixer Attachment" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>

            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Oil Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Indoor Grill" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Juicer" || Product.product === "Food Processor" ||
     Product.product === "Food Chopper" || Product.product === "Toaster" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Griddle" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Settings:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Bread Maker" || Product.product === "Waffle Maker" || Product.product === "Hand Blender"
    || Product.product === "Blender" || Product.product === "Pancake Maker" || Product.product === "Ice Cream Shaver" 
    || Product.product === "Popcorn Machine" || Product.product === "Ice Cream Machine" || Product.product === "Cotton Candy Machine" ||
    Product.product === "Ice Shaver" || Product.product === "Fondue Maker" || Product.product === "Dehydrator" || Product.product === "Dry Ager" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Hand Mixer" || Product.product === "Mixer Machine" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Speeds:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Kitchen Appliance Package" || Product.product === "Appliance Bundle" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Bundle Includes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Wall Oven" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Coffee Maker" || Product.product === "Tea Maker" || Product.product === "Expresso Machine" ||
    Product.product === "Soda Maker" || Product.product === "Ice Maker" || Product.product === "Water Cooler Dispenser" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>

            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Beverage:</div>
                <div className='Info-productdetail_li-right'>{Product.product}</div>
            </li>

            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attribute:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Instant Pot" || Product.product === "Multi Cooker" || Product.product === "Slow Cooker" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Cooker Type:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attribute:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Cooking Appliance" || Product.product === "Cooktop" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Burner Type:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Dishwasher" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Installation Type:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Microwave" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Freezer" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Door Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Refrigerator" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" && Product.powerSource !== "Other" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Installation Type:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Doors:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Configuration:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Auto Remote Start" || Product.product === "Auto Navigation" || Product.product === "Auto Accessory" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Auto Phone Accessory" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Auto Speaker" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Auto Audio" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Auto Electronic" || Product.product === "Auto Amplifier" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Channels:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Batteries:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Auto Cam" || Product.product === "Auto Backup Cam" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Mounting Type:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Video Capture Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Media Type:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Hair Straightner" || Product.product === "Straightner Comb" || Product.product === "Curling Iron" || Product.product === "Health Item"
    || Product.product === "Hair Dryer" || Product.product === "Hair Steamer" || Product.product === "Hair Trimmer" || Product.product === "Hair Clipper"
    || Product.product === "Electric Shaver" || Product.product === "Epilator" || Product.product === "Nose Hair Trimmer" || Product.product === "Body Hair Trimmer"
    || Product.product === "Steam Vaporizer" || Product.product === "Vape" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Blood Monitor" || Product.product === "Heart Monitor" || Product.product === "Hearing Aid" || Product.product === "Mobility Aid"
    || Product.product === "Massage Device" || Product.product === "Thermometer Device" || Product.product === "Weight Device"
    || Product.product === "Inhaler" || Product.product === "Vaporizer" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Treadmill Machine" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.processorFrequency === undefined ?
            <></>
            :
            Product && Product.processorFrequency !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Maximum Speed:</div>
                <div className='Info-productdetail_li-right'>{Product.processorFrequency}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Stationery Bike" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.processorFrequency === undefined ?
            <></>
            :
            Product && Product.processorFrequency !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Maximum Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.processorFrequency}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Elliptical Machine" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Rowing Machine" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.processorFrequency === undefined ?
            <></>
            :
            Product && Product.processorFrequency !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Maximum Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.processorFrequency}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Exercise Machine" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Console Accessory" || Product.product === "Console Controller" || Product.product === "Console Remote"
    || Product.product === "Console Camera" || Product.product === "Controller Accessory" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Console:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Console:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            
        </ul>
    </div>
    :
    Product.product === "Game Disc" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Media Type:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Console:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Wearable Tech" || Product.product === "Smart Assistant" || Product.product === "Smart Security System"
    || Product.product === "Cool Tech" || Product.product === "Smart Door System"
    || Product.product === "Baby Monitor" || Product.product === "Motion Sensor" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            
        </ul>
    </div>
    :
    Product.product === "Fitness Tracker" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.displaySize === undefined ?
            <></>
            :
            Product && Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Band Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }

            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Battery Life:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            
        </ul>
    </div>
    :
    Product.product === "Stop Watch" || Product.product === "Muscle Trainer" || Product.product === "Muscle Massager" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }

            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            
        </ul>
    </div>
    :
    Product.product === "Watch"?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
                <></>
                :
                Product && Product.bodyCover !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Band Material:</div>
                    <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
                </li>
                :
                <></>
                }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>

            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            
        </ul>
    </div>
    :
    Product.product === "Audio Recorder" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Microphone Form Factor:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Storage:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Guitar Amp" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Audio Device" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Device:</div>
                <div className='Info-productdetail_li-right'>{Product.seriesName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "PlayStation Console" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>PlayStation</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName} {Product.seriesName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Storage:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "XBOX Console" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>XBOX</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName} {Product.seriesName}</div>
            </li>
            {Product && Product.processorName === undefined ?
            <></>
            :
            Product && Product.processorName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Processor Name:</div>
                <div className='Info-productdetail_li-right'>{Product.processorName}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Memory:</div>
                <div className='Info-productdetail_li-right'>{Product.ramSpeed}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Storage:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Controller Batteries:</div>
                <div className='Info-productdetail_li-right'>AA Batteries</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Nintendo" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>Nintendo</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Play Modes:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Storage:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Steam Deck" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>Valve Corporation</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model:</div>
                <div className='Info-productdetail_li-right'>Steam Deck</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Play Modes:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Storage:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Handheld Console" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            {Product && Product.displaySize === undefined ?
            <></>
            :
            Product && Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Play Modes:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.processorName === undefined ?
            <></>
            :
            Product && Product.processorName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Processor:</div>
                <div className='Info-productdetail_li-right'>{Product.processorName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.graphicsCardName === undefined ?
            <></>
            :
            Product && Product.graphicsCardName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Graphics Card:</div>
                <div className='Info-productdetail_li-right'>{Product.graphicsCardName}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Storage:
                </div>
                <div className='Info-productdetail_li-right'>{Product.hardDisk === "none" || Product.hardDisk === "" ? <div
                        className='Info-productDetails_condition'></div>: <>{Product.hardDisk} HDD</>} {Product.ssd === "none" || Product.ssd === "" ? <div
                        className='Info-productDetails_condition'></div>: <>{Product.ssd} SSD</>} {Product.nvme ===
                    "none" || Product.nvme === "" ? <div className='Info-productDetails_condition'></div>: <>{Product.nvme} NVMe SSD</>}
                </div>
            </li>
            {Product && Product.ram === undefined ?
            <></>
            :
            Product && Product.ram !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Memory:</div>
                <div className='Info-productdetail_li-right'>{Product.ram} {Product.ramGeneration}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.operatingSystem === undefined ?
            <></>
            :
            Product && Product.operatingSystem !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Operating System:</div>
                <div className='Info-productdetail_li-right'>{Product.operatingSystem}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Game Console" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Digital Clock" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Vinyl Record" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Artist:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Audio Mixer" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Channels:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Turntable" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Audio Player" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Media Type:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Storage:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Vlogger Kit" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Photo Background" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>

            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Camera Film" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.displaySize === undefined ?
            <></>
            :
            Product && Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Film Format Type:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Exposures per Roll:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Photo Frame" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Camera Flash , Lighting" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Mountings:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Gimbal" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Mountings:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Camera Lense" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.cableLenght === undefined ?
            <></>
            :
            Product && Product.cableLenght !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Focal Length Description:</div>
                <div className='Info-productdetail_li-right'>{Product.cableLenght}</div>
            </li>
            :
            <></>
            }
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Lens Type:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Mountings:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Tripod, Stabilizer" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Weight Limit:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Max and Min Height:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Binocular" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.displaySize === undefined ?
            <></>
            :
            Product && Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Objective Lens Diameter:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Drone" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Video Capture Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Memory Type:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.voltage === undefined ?
            <></>
            :
            Product && Product.voltage !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Battery Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.voltage}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Camcorder" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Camcorder Type:</div>
                <div className='Info-productdetail_li-right'>Video Camera</div>
            </li>
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Video Capture Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            {Product && Product.displaySize === undefined ?
            <></>
            :
            Product && Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
            {Product && Product.fps === undefined ?
            <></>
            :
            Product && Product.fps !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Optical Zoom:</div>
                <div className='Info-productdetail_li-right'>{Product.fps}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Memory Type:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Control Type:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
        :
        Product.product === "Action Camera" ?
        <div className='Clicked_page_Info_product_details'>
            <ul className='Info-left-product_details'>
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                        Brand:</div>
                    <div className='Info-productdetail_li-right'>{Product.brand}</div>
                </li>
                {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                        Color:</div>
                    <div className='Info-productdetail_li-right'>{Product.color}</div>
                </li>
                {Product && Product.resolution === undefined ?
                <></>
                :
                Product && Product.resolution !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Video Capture Resolution:</div>
                    <div className='Info-productdetail_li-right'>{Product.resolution}</div>
                </li>
                :
                <></>
                }
                {Product && Product.product === undefined ?
                <></>
                :
                Product && Product.product !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Camcorder Type:</div>
                    <div className='Info-productdetail_li-right'>{Product.product}</div>
                </li>
                :
                <></>
                }
                {Product && Product.displaySize === undefined ?
                <></>
                :
                Product && Product.displaySize !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Screen Size:</div>
                    <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
                </li>
                :
                <></>
                }
                {Product && Product.fps === undefined ?
                <></>
                :
                Product && Product.fps !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Optical Zoom:</div>
                    <div className='Info-productdetail_li-right'>{Product.fps}</div>
                </li>
                :
                <></>
                }
                {Product && Product.compatibleModel === undefined ?
                <></>
                :
                Product && Product.compatibleModel !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Memory Type:</div>
                    <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
                </li>
                :
                <></>
                }
                {Product && Product.interface === undefined ?
                <></>
                :
                Product && Product.interface !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Connectivity:</div>
                    <div className='Info-productdetail_li-right'>{Product.interface}</div>
                </li>
                :
                <></>
                }
                {Product && Product.inclusions === undefined ?
                <></>
                :
                Product && Product.inclusions !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Special Features:</div>
                    <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
                </li>
                :
                <></>
                }
            </ul>
        </div>
    :
    Product.product === "Camera" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Form Factor:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            {Product && Product.displaySize === undefined ?
            <></>
            :
            Product && Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Effective Still Resolution:</div> 
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            {Product && Product.fps === undefined ?
            <></>
            :
            Product && Product.fps !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Optical Zoom:</div> 
                <div className='Info-productdetail_li-right'>{Product.fps}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Memory Type:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Photo Sensor Size:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Feature:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Dish Antenna" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Max Range:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Projector Mount" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Mounting Type:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }

            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Device:</div>
                <div className='Info-productdetail_li-right'>Projector</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            
        </ul>
    </div>
    :
    Product.product === "Sound Bar Mount" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Sell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Tv Mount" || Product.product === "Tv Frame" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Sell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.displaySize === undefined ?
            <></>
            :
            Product && Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                TV Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Minimum Compatible Size:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }

            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Device:</div>
                <div className='Info-productdetail_li-right'>Flatscreen Tv, Monitor</div>
            </li>

            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Maximum Tilt Angle:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Blue-Ray Player" || Product.product === "CD/DVD Player" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Media Type:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Bluetooth Speaker" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Sound Bar" || Product.product === "Decoder" || Product.product === "Streaming Device" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
        :
        Product.product === "Stereo System" ?
        <div className='Clicked_page_Info_product_details'>
            <ul className='Info-left-product_details'>
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                        Brand:</div>
                    <div className='Info-productdetail_li-right'>{Product.brand}</div>
                </li>
                {Product && Product.interface === undefined ?
                <></>
                :
                Product && Product.interface !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Connectivity:</div>
                    <div className='Info-productdetail_li-right'>{Product.interface}</div>
                </li>
                :
                <></>
                }
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Color:</div>
                    <div className='Info-productdetail_li-right'>{Product.color}</div>
                </li>
            </ul>
        </div>
            :
        Product.product === "Projector" ?
        <div className='Clicked_page_Info_product_details'>
            <ul className='Info-left-product_details'>
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                        Brand:</div>
                    <div className='Info-productdetail_li-right'>{Product.brand}</div>
                </li>
                {Product && Product.resolution === undefined ?
                <></>
                :
                Product && Product.resolution !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Resolution:</div>
                    <div className='Info-productdetail_li-right'>{Product.resolution}</div>
                </li>
                :
                <></>
                }
                {Product && Product.interface === undefined ?
                <></>
                :
                Product && Product.interface !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Connectivity:</div>
                    <div className='Info-productdetail_li-right'>{Product.interface}</div>
                </li>
                :
                <></>
                }
                {Product && Product.color === undefined ?
                <></>
                :
                Product && Product.color !== "" ?
                <li className='Info-productdetail_li'>
                    <div className='Info-productdetail_li-left'>
                    Color:</div>
                    <div className='Info-productdetail_li-right'>{Product.color}</div>
                </li>
                :
                <></>
                }
            </ul>
        </div>
    :
    Product.product === "Flatscreen Tv" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen Size:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.fps === undefined ?
            <></>
            :
            Product && Product.fps !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Refresh Rate:</div>
                <div className='Info-productdetail_li-right'>{Product.fps}</div>
            </li>
            :
            <></>
            }
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            {Product && Product.aspectRatio === undefined ?
            <></>
            :
            Product && Product.aspectRatio !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Display Type:</div>
                <div className='Info-productdetail_li-right'>{Product.aspectRatio}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
            Storage:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
             Internet Support:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '14px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flexnorm'>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>HDMI Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>Ethernet Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.ethernetPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>VGA Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.vgaPort}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Small Keyboard" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Stylus" || Product.product === "Selfie Stick" || Product.product === "Mobile Tracker" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "WiFi Hotspot" || Product.product === "Surge Protector" || Product.product === "Remote Control" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Tablet Stand Mount" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Mounting Type:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Compatible Device:</div>
                <div className='Info-productdetail_li-right'>Tablets</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Phone Mount" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Mounting Type:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Compatible Device:</div>
                <div className='Info-productdetail_li-right'>Phones</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Phone Case" || Product.product === "Phone Grip" || Product.product === "Popsocket" || Product.product === "Tablet Case Sleeve" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Screen Protector" || Product.product === "Tablet Screen Protector"
    || Product.product === "Nintendo Screen Protector" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Size:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Models:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
            
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Powerbank" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Battery Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Phone Charger" || Product.product === "Charge Cable" ||
     Product.product === "Charging Dock" || Product.product === "Controller Charger" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connector Type:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "iPhone" || Product.product === "Smartphone"  || Product.product === "E Reader" 
    || Product.product === "Tablet" || Product.product === "iPad" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.displaySize === undefined ?
            <></>
            :
            Product && Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Storage:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.ramSpeed === undefined ?
            <></>
            :
            Product && Product.ramSpeed !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Memory:</div>
                <div className='Info-productdetail_li-right'>{Product.ramSpeed}</div>
            </li>
            :
            <></>
            }
            {Product && Product.operatingSystem === undefined ?
            <></>
            :
            Product && Product.operatingSystem !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Operating System:</div>
                <div className='Info-productdetail_li-right'>{Product.operatingSystem}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Cellular Technology:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                SIM Card Slot:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            {Product && Product.fps === undefined ?
            <></>
            :
            Product && Product.fps !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                SDCard Slot:</div>
                <div className='Info-productdetail_li-right'>{Product.fps}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Calculator"
    || Product.product === "SIM Card" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Projector" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Photo Edit Software" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Software Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Computer Software" || Product.product === "Anti-Virus Software"
    || Product.product === "System Software" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Software Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>Personal Computers</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Monitor" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen Size:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            {Product && Product.fps === undefined ?
            <></>
            :
            Product && Product.fps !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Refresh Rate:</div>
                <div className='Info-productdetail_li-right'>{Product.fps}</div>
            </li>
            :
            <></>
            }
            {Product && Product.aspectRatio === undefined ?
            <></>
            :
            Product && Product.aspectRatio !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Aspect Ratio:</div>
                <div className='Info-productdetail_li-right'>{Product.aspectRatio}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '14px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>HDMI Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>VGA Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.vgaPort}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexrow'>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>3D:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.threeD}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB-C Port:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.cType}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Desktop Pc" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Processor:
                </div>
                <div className='Info-productdetail_li-right'>
                    {Product.processorName}
                </div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Graphics Card:
                </div>
                <div className='Info-productdetail_li-right'>{Product.graphicsCardName} {Product.vRam}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Memory:
                </div>
                <div className='Info-productdetail_li-right'>
                    {Product.ram} {Product.ramGeneration} {Product.ramArrangement} 
                </div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Video Memory:
                </div>
                <div className='Info-productdetail_li-right'>{Product.vRam} {Product.graphicsCardGeneration}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Storage:
                </div>
                <div className='Info-productdetail_li-right'>{Product.hardDisk === "" || Product.hardDisk === "none" ? <div
                        className='Info-productDetails_condition'></div>: <>{Product.hardDisk} HDD</>}  {Product.ssd === "" || Product.ssd === "none" ? <div
                        className='Info-productDetails_condition'></div>: <>{Product.ssd} SSD</>} {Product.nvme ===
                    "" || Product.nvme === "none" ? <div className='Info-productDetails_condition'></div>: <>{Product.nvme} NVMe SSD</>} 
                </div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Total Storage:
                </div>
                <div className='Info-productdetail_li-right'>{Product.busStandard}</div>
            </li>
            {Product && Product.motherboard === undefined ?
            <></>
            :
            Product && Product.motherboard !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                MotherBoard:</div>
                <div className='Info-productdetail_li-right'>{Product.motherboard}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSupply === undefined ?
            <></>
            :
            Product && Product.powerSupply !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Supply:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSupply}</div>
            </li>
            :
            <></>
            }
            {Product && Product.wifiModule === undefined ?
            <></>
            :
            Product && Product.wifiModule !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Wifi Module:</div>
                <div className='Info-productdetail_li-right'>{Product.wifiModule}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Operating System:</div>
                <div className='Info-productdetail_li-right'>{Product.operatingSystem}</div>
            </li>
            {Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
            {Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>
                Monitor Name:</div>
            <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>
            Display Size:</div>
            <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
            {Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>
            Resolution:</div>
            <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '14px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
                <div  className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>Disc Drive:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.dvdDrive}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB-C Port:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.cType}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexmid'>
                <div className='More_info_box'>
                <div className='Info-productdetail_flex-span'>USB Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>HDMI Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>VGA Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.vgaPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>Ethernet Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.ethernetPort}</span>
                    </div>
                </div>
            </li>

            <li className='Info-productdetail_li-flexend_two'>
                {Product.ramSlot === "" || Product.ramSlot === "unset" ?
                <></>
                :
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>Ram Slots:</div>
                    <div style={{ padding: '2px 5px',minWidth: '105px', height: '25px', borderRadius: '5px', border: '1px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.ramSlot}</span>
                    </div>
                </div>
                }
                {Product.nvmeSlot === "" || Product.nvmeSlot === "unset" ?
                <></>
                :
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>NVMe Slots:</div>
                    <div style={{ padding: '2px 5px',minWidth: '105px', height: '25px', borderRadius: '5px', border: '1px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.nvmeSlot}</span>
                    </div>
                </div>
                }
            </li>
        </ul>
    </div>
    :
    
    Product.product === "Laptop" ? 
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Display Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Processor:
                </div>
                <div className='Info-productdetail_li-right'>
                    {Product.processorName}
                </div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Graphics Card:
                </div>
                <div className='Info-productdetail_li-right'>{Product.graphicsCardName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Memory:
                </div>
                <div className='Info-productdetail_li-right'>{Product.ram} {Product.ramGeneration} {Product.ramArrangement}
                    </div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Storage:
                </div>
                <div className='Info-productdetail_li-right'>{Product.hardDisk === "none" || Product.hardDisk === "" ? <div
                        className='Info-productDetails_condition'></div>: <>{Product.hardDisk} HDD</>} {Product.ssd === "none" || Product.ssd === "" ? <div
                        className='Info-productDetails_condition'></div>: <>{Product.ssd} SSD</>} {Product.nvme ===
                    "none" || Product.nvme === "" ? <div className='Info-productDetails_condition'></div>: <>{Product.nvme} NVMe SSD</>}
                </div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Total Storage:
                </div>
                <div className='Info-productdetail_li-right'>{Product.busStandard}</div>
            </li>
            {Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>
            Camera:</div>
            <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Operating System:</div>
                <div className='Info-productdetail_li-right'>{Product.operatingSystem}</div>
            </li>
            {Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }

            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '14px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>Disc Drive:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.dvdDrive}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB-C Port:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.cType}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>SDCard Reader:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.sdCardSlot}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexmid'>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>HDMI Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>VGA Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.vgaPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>Ethernet Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.ethernetPort}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "MacBook" ? 
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>Apple</div>
    
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Model Name:</div>
                    <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Display Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Processor:
                </div>
                <div className='Info-productdetail_li-right'>
                    {Product.processorName}
                </div>
            </li>
            
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Memory:
                </div>
                <div className='Info-productdetail_li-right'>{Product.ram} {Product.ramGeneration} {Product.ramArrangement}
                    </div>
            </li>
            
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Storage:
                </div>
                <div className='Info-productdetail_li-right'>{Product.ssd} SSD</div>
            </li>
            {Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>
            Camera:</div>
            <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Operating System:</div>
                <div className='Info-productdetail_li-right'>{Product.operatingSystem}</div>
            </li>
            {Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }

            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '14px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>Lightning Port:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.dvdDrive}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB-C Port:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.cType}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>SDCard Reader:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.sdCardSlot}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexmid'>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>HDMI Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>VGA Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.vgaPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>Ethernet Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.ethernetPort}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Ethernet Range Extender" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Range:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Cable Modem" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Ethernet Switch" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Ports:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Wifi Adapter" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.transferRate === undefined ?
            <></>
            :
            Product && Product.transferRate !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Data Transfer Rate:</div>
                <div className='Info-productdetail_li-right'>{Product.transferRate}</div>
            </li>
            :
            <></>
            }
            {Product && Product.operatingSystem === undefined ?
            <></>
            :
            Product && Product.operatingSystem !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Supported Operating System:</div>
                <div className='Info-productdetail_li-right'>{Product.operatingSystem}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Device:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Router" || Product.product === "Mesh WiFi System" || Product.product === "WiFi Range Extender" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Frequency Band Class:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.wifiModule === undefined ?
            <></>
            :
            Product && Product.wifiModule !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Frequency:</div>
                <div className='Info-productdetail_li-right'>{Product.wifiModule}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.operatingSystem === undefined ?
            <></>
            :
            Product && Product.operatingSystem !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Supported Operating System:</div>
                <div className='Info-productdetail_li-right'>{Product.operatingSystem}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Ethernet Cable" || Product.product === "HDMI Related" || Product.product === "VGA Related"
    || Product.product === "DVI Related" || Product.product === "DisplayPort Related"|| Product.product === "USB Related"
    || Product.product === "Unlisted Cable" || Product.product === "Auxilary Cable"
    || Product.product === "Sata Cable" || Product.product === "Molex Related" || Product.product === "Audio Splitter" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.cableType === undefined ?
            <></>
            :
            Product && Product.cableType !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Cable Type:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            :
            <></>
            }
            {Product && Product.cableLenght === undefined ?
            <></>
            :
            Product && Product.cableLenght !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Cable Lenght:</div>
                <div className='Info-productdetail_li-right'>{Product.cableLenght}</div>
            </li>
            :
            <></>
            }
            {Product && Product.Color === undefined ?
            <></>
            :
            Product && Product.Color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.Color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Ink" || Product.product === "Toner" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }
            {Product && Product.pageYield === undefined ?
            <></>
            :
            Product && Product.pageYield !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Page Yield:</div>
                <div className='Info-productdetail_li-right'>{Product.pageYield}</div>
            </li>
            :
            <></>
            }
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Pigment:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Label Printer" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Printing Technology:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.Color}</div>
            </li>
            {Product && Product.monoPrint === undefined ?
            <></>
            :
            Product && Product.monoPrint !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Printer Output:</div>
                <div className='Info-productdetail_li-right'>{Product.monoPrint}</div>
            </li>
            :
            <></>
            }
            {Product && Product.operatingSystem === undefined ?
            <></>
            :
            Product && Product.operatingSystem !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Supported Operating System:</div>
                <div className='Info-productdetail_li-right'>{Product.operatingSystem}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Photo Printer" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Printing Technology:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.Color}</div>
            </li>
            {Product && Product.colorPrint === undefined ?
            <></>
            :
            Product && Product.colorPrint !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Maximum Print Speed:</div>
                <div className='Info-productdetail_li-right'>{Product.colorPrint}</div>
            </li>
            :
            <></>
            }
            {Product && Product.monoPrint === undefined ?
            <></>
            :
            Product && Product.monoPrint !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Print Speed Monochrome:</div>
                <div className='Info-productdetail_li-right'>{Product.monoPrint}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Scanner" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Scanner Type:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.Color}</div>
            </li>
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Printer" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Type:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Function:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inputTray === undefined ?
            <></>
            :
            Product && Product.inputTray !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Input Tray Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.inputTray}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.Color}</div>
            </li>
            {Product && Product.outputTray === undefined ?
            <></>
            :
            Product && Product.outputTray !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Output Tray Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.outputTray}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleBlackInks === undefined ?
            <></>
            :
            Product && Product.compatibleBlackInks !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Black Cartridge:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleBlackInks}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleColorInks === undefined ?
            <></>
            :
            Product && Product.compatibleColorInks !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Color Cartirage:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleColorInks}</div>
            </li>
            :
            <></>
            }
            {Product && Product.monoPrint === undefined ?
            <></>
            :
            Product && Product.monoPrint !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Mono Print Speed:</div>
                <div className='Info-productdetail_li-right'>{Product.monoPrint}</div>
            </li>
            :
            <></>
            }
            {Product && Product.colorPrint === undefined ?
            <></>
            :
            Product && Product.colorPrint !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color Print Speed:</div>
                <div className='Info-productdetail_li-right'>{Product.colorPrint}</div>
            </li>
            :
            <></>
            }
            {Product && Product.stockedInk === undefined ?
            <></>
            :
            Product && Product.stockedInk !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Stocked Ink Cartridges:</div>
                <div className='Info-productdetail_li-right'>{Product.stockedInk}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Playstation Storage Drive" || Product.product === "Memory Card Holder" || Product.product === "Xbox Storage Drive"
    || Product.product === "USB Drive" || Product.product === "Memory Card" ||
    Product.product === "Recordable CD Disc" || Product.product === "Console Memory Card" || Product.product === "Recordable DVD Disc"  ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.storageCapacity === undefined ?
            <></>
            :
            Product && Product.storageCapacity !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Storage:</div>
                <div className='Info-productdetail_li-right'>{Product.storageCapacity === "Not Listed" ? <>{Product.featureCount}</> : <>{Product.storageCapacity}</>}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Console:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Disc Units:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Laptop HDD Drive" || Product.product === "SSD Drive"
    || Product.product === "External SSD" || Product.product === "External HDD Drive"
    || Product.product === "Desktop HDD Drive" || Product.product === "NVMe SSD"  ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.storageCapacity === undefined ?
            <></>
            :
            Product && Product.storageCapacity !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Storage:</div>
                <div className='Info-productdetail_li-right'>{Product.storageCapacity === "Not Listed" ? <>{Product.featureCount}</> : <>{Product.storageCapacity}</>}</div>
            </li>
            :
            <></>
            }
            {Product && Product.hardwareInterface === undefined ?
            <></>
            :
            Product && Product.hardwareInterface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Interface:</div>
                <div className='Info-productdetail_li-right'>{Product.hardwareInterface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Case Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.busStandard === undefined ?
            <></>
            :
            Product && Product.busStandard !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Speed:</div>
                <div className='Info-productdetail_li-right'>{Product.busStandard}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Device:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Virtual Reality"  ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.displaySize === undefined ?
            <></>
            :
            Product && Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Field of View:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.operatingSystem === undefined ?
            <></>
            :
            Product && Product.operatingSystem !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Operating System:</div>
                <div className='Info-productdetail_li-right'>{Product.operatingSystem}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Webcam"  ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Camcorder Type:</div>
                <div className='Info-productdetail_li-right'>Video Camera</div>
            </li>
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Memory Type:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.displaySize === undefined ?
            <></>
            :
            Product && Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen SIze:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Video Capture Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Camcorder type:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Headset" || Product.product === "Headphone" || Product.product === "Earphones" 
    || Product.product === "Earbuds" || Product.product === "AirPods" || Product.product === "AirPod Max"
    || Product.product === "EarPods"  ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Ear Placement:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "USB Speaker" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.busStandard === undefined ?
            <></>
            :
            Product && Product.busStandard !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Speaker Maximum Output Power:</div>
                <div className='Info-productdetail_li-right'>{Product.busStandard}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Audio Output Mode:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectable Devices:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Power Supply" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Connector Type:</div>
                <div className='Info-productdetail_li-right'>{Product.connectorType}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Wattage:</div>
                <div className='Info-productdetail_li-right'>{Product.wattage}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Cooling:</div>
                <div className='Info-productdetail_li-right'>{Product.fan}</div>
            </li>
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '14px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex_two'>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>ATX Power Connectors 20+4-pin:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.twentyPlusCount}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>ATX 12v Connectors 4-Pin:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.fourPinCount}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexmid_two'>
                <div className='More_info_box'>
                <div className='Info-productdetail_flex-span'>Floppy Drive Connectors 4-Pin:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.floppyCount}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>Molex Connectors 4-Pin:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.molexCount}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexrow_two'>
            <div className='More_info_box'>
                <div className='Info-productdetail_flex-span'>SATA Connectors:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.sataCount}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                <div className='Info-productdetail_flex-span'>PCI Express Connectors 6-Pin:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.sixPinCount}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Desktop Casing" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Tower Type:</div>
                <div className='Info-productdetail_li-right'>{Product.cableType}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Motherboard Size:</div>
                <div className='Info-productdetail_li-right'>{Product.seriesName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Shell Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Cooling:</div>
                <div className='Info-productdetail_li-right'>{Product.fan}</div>
            </li>
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '14px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>Disc Drive:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.dvdDrive}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB-C Port:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.cType}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.usbPort}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexrow'>
            <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>HDD Slots:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.hddCount}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>SSD Slots:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.ssdCount}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "WiFi Card" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Hardware Interface:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.transferRate === undefined ?
            <></>
            :
            Product && Product.transferRate !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Data Transfer Rate:</div>
                <div className='Info-productdetail_li-right'>{Product.transferRate}</div>
            </li>
            :
            <></>
            }
            {Product && Product.supportedOS === undefined ?
            <></>
            :
            Product && Product.supportedOS !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Supported Windows:</div>
                <div className='Info-productdetail_li-right'>{Product.supportedOS}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Compatible Device:</div>
                <div className='Info-productdetail_li-right'>{Product.powerConnector}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Motherboard" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.seriesName === undefined ?
            <></>
            :
            Product && Product.seriesName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                MotherBoard Series:</div>
                <div className='Info-productdetail_li-right'>{Product.seriesName}</div>
            </li>
            :
            <></>
            }
            {Product && Product.cpuSocket === undefined ?
            <></>
            :
            Product && Product.cpuSocket !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                CPU Socket:</div>
                <div className='Info-productdetail_li-right'>{Product.cpuSocket}</div>
            </li>
            :
            <></>
            }
            {Product && Product.ramGeneration === undefined ?
            <></>
            :
            Product && Product.ramGeneration !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Memory Type:</div>
                <div className='Info-productdetail_li-right'>{Product.ramGeneration}</div>
            </li>
            :
            <></>
            }
            {Product && Product.maxRam === undefined ?
            <></>
            :
            Product && Product.maxRam !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Max Memory Supported:</div>
                <div className='Info-productdetail_li-right'>{Product.maxRam}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Compatible Device:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '14px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>HDMI Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                <div className='Info-productdetail_flex-span'>VGA Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.vgaPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>Ethernet Port:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.ethernetPort}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexrow'>
                <div style={{ paddingRight: '20px', display: 'flex'}}>
                    <div className='Info-productdetail_flex-span'>DVI Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.dviPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '20px',display: 'flex'}}>
                    <div className='Info-productdetail_flex-span'>PCI Express Slots:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.pciPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '20px', display: 'flex'}}>
                <div className='Info-productdetail_flex-span'>Ram Slots:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.ramSlot}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                <div className='Info-productdetail_flex-span'>NVMe SSD Slots:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.nvmeBus}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Graphics Card" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Model Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Video Memory:</div>
                <div className='Info-productdetail_li-right'>{Product.vRam} {Product.graphicsCardGeneration}</div>
            </li>
            {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
            {Product && Product.graphicsCardSpeed === undefined ?
            <></>
            :
            Product && Product.graphicsCardSpeed !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Clock Speed:</div>
                <div className='Info-productdetail_li-right'>{Product.graphicsCardSpeed} {Product.wattage ? <span>~ {Product.wattage} Wattage</span>: <></>}
                </div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Cooling:</div>
                <div className='Info-productdetail_li-right'>{Product.fan}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Display Connector:</div>
                <div className='Info-productdetail_li-right'>{Product.displayVia} </div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Additional Power:</div>
                <div className='Info-productdetail_li-right'>{Product.powerConnector} from Power Supply</div>
            </li>
            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '14px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
            <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB-C Port:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.cType}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>USB Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>DisplayPort:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.displayPort}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexrow'>
            <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>HDMI Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div className='More_info_box'>
                    <div className='Info-productdetail_flex-span'>DVI Ports:</div>
                    <div className='Info-productdetail_circled_info'>
                        <span style={{ color: '#3e4e5b', fontSize: '14px', fontWeight: '500'}}>{Product.dviPort}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Processor" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Cores & Threads:
                </div>
                <div className='Info-productdetail_li-right'>{Product.coreCount} Cores - {Product.threads} Threads
                </div>
            </li>
            {Product && Product.maxRam === undefined ?
            <></>
            :
            Product && Product.maxRam !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Maximum Memory Supported:</div>
                <div className='Info-productdetail_li-right'>{Product.maxRam}</div>
            </li>
            :
            <></>
            }
            {Product && Product.cpuSocket === undefined ?
            <></>
            :
            Product && Product.cpuSocket !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Socket Type:</div>
                <div className='Info-productdetail_li-right'>{Product.cpuSocket}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Unlocked (Overclockable) ?:</div>
                <div className='Info-productdetail_li-right'>{Product.cpuUnlock}</div>
            </li>
            {Product && Product.wattage === undefined ?
            <></>
            :
            Product && Product.wattage !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Wattage:</div>
                <div className='Info-productdetail_li-right'>{Product.wattage}</div>
            </li>
            :
            <></>
            }
            {Product && Product.integratedGraphics === undefined ?
            <></>
            :
            Product && Product.integratedGraphics !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Integrated Graphics:</div>
                <div className='Info-productdetail_li-right'>{Product.integratedGraphics}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Suitable Motherboards:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleMotherboards}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Supported Operating System:</div>
                <div className='Info-productdetail_li-right'>{Product.supportedOS}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Laptop Battery" || Product.product === "Laptop Charger"
     || Product.product === "Laptop Disc Drive" || Product.product === "Optical Disc Drive" 
    || Product.product ==="External Disc Drive" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }

        </ul>
    </div>
    :
    Product.product === "Phone Battery" || Product.product === "Tablet Battery" 
    || Product.product === "Camera Battery" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.compatibleModel === undefined ?
            <></>
            :
            Product && Product.compatibleModel !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Compatible Models:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleModel}</div>
            </li>
            :
            <></>
            }

        </ul>
    </div>
    :
    Product.product ==="Laptop Stand" || Product.product ==="Webcam Cover" || Product.product ==="Speaker Stand" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Laptop Fan" || Product.product ==="Laptop Screen" || Product.product ==="Desktop Heatsink" 
    || Product.product ==="Portable Power Station" || Product.product ==="Cooling Pad" || Product.product ==="Desktop Cooling Fan" 
    || Product.product ==="Desk Pad" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Clover Power Cable" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Cable Name:</div>
                <div className='Info-productdetail_li-right'>Clover Power Cable</div>
            </li>
            {Product && Product.cableLenght === undefined ?
            <></>
            :
            Product && Product.cableLenght !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Cable Lenght:</div>
                <div className='Info-productdetail_li-right'>{Product.cableLenght}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "3 Pin Round Power Cable"   ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Cable Name:</div>
                <div className='Info-productdetail_li-right'>3 Pin Round Power Cable</div>
            </li>
            {Product && Product.cableLenght === undefined ?
            <></>
            :
            Product && Product.cableLenght !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Cable Lenght:</div>
                <div className='Info-productdetail_li-right'>{Product.cableLenght}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Keyboard" || Product.product === "Mouse" || Product.product === "Mouse Keyboard Combo" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Interface:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Compatible Device:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "USB Hub" || Product.product === "Docking Station"  ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Compatible Device:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    
    Product.product === "Laptop Sleeve" || Product.product ==="Laptop Backpack" 
    || Product.product ==="Console Bag" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Designed For:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product ==="USB Microphone" || Product.product ==="Camera Microphone" || Product.product ==="Memory Card Reader" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Connectivity:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Laptop Cleaner" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Volume:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            {Product && Product.compatibleDevice === undefined ?
            <></>
            :
            Product && Product.compatibleDevice !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Compatible Device:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Laptop DDR3 Ram" || Product.product === "Laptop DDR4 Ram" || Product.product === "Laptop DDR5 Ram" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Memory:</div>
                <div className='Info-productdetail_li-right'>{Product.ram} {Product.product}</div>
            </li>
            {Product && Product.ramSpeed === undefined ?
            <></>
            :
            Product && Product.ramSpeed !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Clock Speed:</div>
                <div className='Info-productdetail_li-right'>{Product.ramSpeed}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Quantity:</div>
                <div className='Info-productdetail_li-right'>{Product.ramArrangement}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>Laptops</div>
            </li>
        </ul>
        </div>
    :
    Product.product === "Desktop DDR3 Ram" || Product.product === "Desktop DDR4 Ram" || Product.product === "Desktop DDR5 Ram" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Memory:</div>
                <div className='Info-productdetail_li-right'>{Product.ram} {Product.product}</div>
            </li>
            {Product && Product.ramSpeed === undefined ?
            <></>
            :
            Product && Product.ramSpeed !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Clock Speed:</div>
                <div className='Info-productdetail_li-right'>{Product.ramSpeed}</div>
            </li>
            :
            <></>
            }
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Quantity:</div>
                <div className='Info-productdetail_li-right'>{Product.ramArrangement}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Compatible Devices:</div>
                <div className='Info-productdetail_li-right'>Desktops</div>
            </li>
        </ul>
        </div>
    :
    Product.product === "Kids Quilt Set" || Product.product === "Quilt Set" || Product.product === "Duvet Cover Set" ||
     Product.product === "Kids Duvet Set" || Product.product === "Throw Blanket" || Product.product === "Bed Skirt"
    || Product.product === "Kids Comforter Set" || Product.product === "Comforter Set" || Product.product === "Bed Sheet Set"
    || Product.product === "Kids Sheet Set" || Product.product === "Throw Pillow Cases" || Product.product === "Pillow Case Set"
    || Product.product === "Bath Towel Set" || Product.product === "Face Towel Set" || Product.product === "Bathroom Rug" ||
    Product.product === "Shower Curtain" || Product.product === "Seat Cover" || Product.product === "Bedspread Set"
    || Product.product === "Tablecloth Set" || Product.product === "Table Runner Set" || Product.product === "Table Skirt Set" || Product.product === "Kitchen Apron Set" 
    || Product.product === "Potholder Mittens Set" || Product.product === "Dishcloth Set" || Product.product === "Placemat Set"  ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Size:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li> 
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
}
</ul>
</div>
:
            Product.product === "Throw Pillow Set" || Product.product === "Bed Pillow" || Product.product === "Backrest Pillow Set" ?
            <div className='Clicked_page_Info_product_details'>
                <ul className='Info-left-product_details'>
                    {Product && Product.brand === undefined ?
                    <></>
                    :
                    Product && Product.brand !== "" ?
                    <li className='Info-productdetail_li'>
                        <div className='Info-productdetail_li-left'>Brand:</div>
                        <div className='Info-productdetail_li-right'>{Product.brand}</div>
                    </li>
                    :
                    <></>
                    }
                    {Product && Product.bodyCover === undefined ?
                    <></>
                    :
                    Product && Product.bodyCover !== "" ?
                    <li className='Info-productdetail_li'>
                        <div className='Info-productdetail_li-left'>Fill Material:</div>
                        <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
                    </li>
                    :
                    <></>
                    }
                    {Product && Product.dimensions === undefined ?
                    <></>
                    :
                    Product && Product.dimensions !== "" ?
                    <li className='Info-productdetail_li'>
                        <div className='Info-productdetail_li-left'>
                        Size:</div>
                        <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
                    </li> 
                    :
                    <></>
                    }
                    {Product && Product.color === undefined ?
                    <></>
                    :
                    Product && Product.color !== "" ?
                    <li className='Info-productdetail_li'>
                        <div className='Info-productdetail_li-left'>Color:</div>
                        <div className='Info-productdetail_li-right'>{Product.color}</div>
                    </li>
                    :
                    <></>
                    }
                    {Product && Product.inclusions === undefined ?
                    <></>
                    :
                    Product && Product.inclusions !== "" ?
                    <li className='Info-productdetail_li'>
                        <div className='Info-productdetail_li-left'>
                        Included Items:</div>
                        <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
                    </li>
                    :
            <></>
            }
        </ul>
        </div>
    :
    Product.product === "Floor Pillow" || Product.product === "Pouf" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Fill Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li> 
            :
            <></>
            }

</ul>
</div>
:
    Product.product === "Floor Ornament" || Product.product === "Table Top Ornament" || Product.product === "Wall Ornament" ?
    <div className='Clicked_page_Info_product_details'>
        <ul className='Info-left-product_details'>
            {Product && Product.brand === undefined ?
            <></>
            :
            Product && Product.brand !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
            </li>
            :
            <></>
            }
            {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Curtains" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
        <></>
        :
        Product && Product.bodyCover !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Material:</div>
            <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
        </li>
        :
        <></>
        }
        {Product && Product.functions === undefined ?
        <></>
        :
        Product && Product.functions !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Opacity:</div>
            <div className='Info-productdetail_li-right'>{Product.functions}</div>
        </li>
        :
        <></>
        }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Fabric Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }

</ul>
</div>
:
Product.product === "Wall Unit" || Product.product === "Tv Stand Cabinet" || Product.product === "Storage Cabinet"
|| Product.product === "Dining Table" || Product.product === "Dining Chair Set" || Product.product === "Counter Stool Set"
|| Product.product === "Dining Bench" || Product.product === "Buffet Table" || Product.product === "Sideboard Table"
|| Product.product === "Wall Cabinet" || Product.product === "Toilet Cabinet" || Product.product === "Shower Bench"
|| Product.product === "Bathroom Stool" || Product.product === "Filing Cabinet" || Product.product === "Storage Drawer"
|| Product.product === "Storage Trunk" || Product.product === "Storage Ottoman" || Product.product === "Standing Podium" 
|| Product.product === "Office Chair" || Product.product === "Breakroom Set" || Product.product === "Breakroom Table"
|| Product.product === "Entryway Bench" || Product.product === "Bar Cabinet" || Product.product === "Corner Bar"
|| Product.product === "Patio Chair Set" || Product.product === "Patio Bench" || Product.product === "Folding Chair Set"
|| Product.product === "Tray Table Set" || Product.product === "Folding Bed" || Product.product === "Gaming Chair"
|| Product.product === "Kids Furniture Set" || Product.product === "Coffee Table" || Product.product === "End, Side Table" 
|| Product.product === "Console Table" || Product.product === "Ottoman Table" || Product.product === "Pantry Cabinet"
 ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
        <></>
        :
        Product && Product.bodyCover !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Material:</div>
            <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
        </li>
        :
        <></>
        }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }

</ul>
</div>
:
Product.product === "Accent Chair" || Product.product === "Recliner Chair" || Product.product === "Chaise Lounge"
|| Product.product === "Rocking Chair" || Product.product === "Glider Chair" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }

</ul>
</div>
:
Product.product === "Sofa Bed" || Product.product === "Love Seat" || Product.product === "Futon" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.functions === undefined ?
        <></>
        :
        Product && Product.functions !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Design:</div>
            <div className='Info-productdetail_li-right'>{Product.functions}</div>
        </li>
        :
        <></>
        }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }

</ul>
</div>
:
Product.product === "Dinette Set" || Product.product === "Table Set" || Product.product === "Patio Bistro Set" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Table Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.functions === undefined ?
        <></>
        :
        Product && Product.functions !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Size:</div>
            <div className='Info-productdetail_li-right'>{Product.functions}</div>
        </li>
        :
        <></>
        }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Chairs:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
                    {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Table Size:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Kitchen Island" || Product.product === "Bakers Rack" || Product.product === "Wine Rack"
|| Product.product === "Kitchen Cart" || Product.product === "Bar Cart" || Product.product === "Storage Rack"
|| Product.product === "Towel Rack" || Product.product === "Coat Rack" || Product.product === "Play Tent"
|| Product.product === "Toy Chest" || Product.product === "Toy Box" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.functions === undefined ?
        <></>
        :
        Product && Product.functions !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Design:</div>
            <div className='Info-productdetail_li-right'>{Product.functions}</div>
        </li>
        :
        <></>
        }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Assembly:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Bedroom Suite" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Size:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Assembly:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Headboard" || Product.product === "Kids Headboard" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Size:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Wardrobe" || Product.product === "Storage Bench" || Product.product === "Printer Stand" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Assembly:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Drawar Dresser" || Product.product === "Nightstand" || Product.product === "Jewellery Armoire" ||
 Product.product === "Vanity Set" || Product.product === "Shoe Storage" || Product.product === "Bathroom Vanity"
 || Product.product === "Office Desk" || Product.product === "Adjustable Desk" || Product.product === "Hall Tree"
 || Product.product === "Wall Shelve Set" || Product.product === "Desk" || Product.product === "Gaming Desk"
 || Product.product === "Baby Dresser" || Product.product === "Kids Vanity"  ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.function === undefined ?
            <></>
            :
            Product && Product.function !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Drawars:</div>
                <div className='Info-productdetail_li-right'>{Product.function}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Assembly:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Bookshelf" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.function === undefined ?
            <></>
            :
            Product && Product.function !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Shelves:</div>
                <div className='Info-productdetail_li-right'>{Product.function}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Assembly:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Cube Storage Organizer" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.function === undefined ?
            <></>
            :
            Product && Product.function !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Cubes:</div>
                <div className='Info-productdetail_li-right'>{Product.function}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Assembly:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Desk Organizer" || Product.product === "Storage Basket" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Outdoor Loveseat" || Product.product === "Outdoor Couch Set"  || Product.product === "2 Piece Set"
|| Product.product === "3 Piece Set" || Product.product === "4 Piece Set" || Product.product === "5 Piece Set"
|| Product.product === "6 Piece Set" || Product.product === "Sectional Sofa" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.interface === undefined ?
        <></>
        :
        Product && Product.interface !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Shape:</div>
            <div className='Info-productdetail_li-right'>{Product.interface}</div>
        </li>
        :
        <></>
        }
        {Product && Product.functions === undefined ?
        <></>
        :
        Product && Product.functions !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Number of Pieces:</div>
            <div className='Info-productdetail_li-right'>{Product.functions}</div>
        </li>
        :
        <></>
        }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Gazebo" || Product.product === "Pergola" || Product.product === "Outdoor Umbrella"
|| Product.product === "Portable Shed" || Product.product === "Patio Awning" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Assembly:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Size:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Baby Crib" || Product.product === "Toddler Bed" || Product.product === "Changing Table" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.genderCategory === undefined ?
        <></>
        :
        Product && Product.genderCategory !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Target Gender:</div>
            <div className='Info-productdetail_li-right'>{Product.genderCategory}</div>
        </li>
        :
        <></>
        }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Crib Mattress" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Fill Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Bassinet Bedside-Sleeper" || Product.product === "Travel Bed" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Max Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Table Lamp" || Product.product === "Floor Lamp" || Product.product === "Smart Lamp"
|| Product.product === "Decorative Lighting" || Product.product === "Lamp Shade" || Product.product === "Reading Lamp"
|| Product.product === "Ceiling Light" || Product.product === "Track Lighting" || Product.product === "Chandelier"
|| Product.product === "Outdoor Light" || Product.product === "Wall Hanging" || Product.product === "Wallpaper" || Product.product === "Tapestry"
|| Product.product === "Wall Decore" || Product.product === "Canvas Art" || Product.product === "Framed Art"
|| Product.product === "Inspirational Decore" || Product.product === "Painting Art" || Product.product === "Photographic Art"
|| Product.product === "Metal Wall Art"  ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Ceiling Fan" || Product.product === "Fandelier"    ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Speeds:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Controller Type:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Table Mirror" || Product.product === "Wall Mirror" || Product.product === "Floor Mirror"
|| Product.product === "LED Mirror" || Product.product === "Wall Clock" || Product.product === "Table Clock" || Product.product === "Cuckoo Clock"
|| Product.product === "Digital Clock" || Product.product === "Accent Clock" || Product.product === "Table Top Frame"
|| Product.product === "Wall Frame" || Product.product === "Gallary Frame" || Product.product === "Digital Frame"    ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Frame Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.displaySize === undefined ?
            <></>
            :
            Product && Product.displaySize !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Screen Size:</div>
                <div className='Info-productdetail_li-right'>{Product.displaySize}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.resolution === undefined ?
            <></>
            :
            Product && Product.resolution !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Resolution:</div>
                <div className='Info-productdetail_li-right'>{Product.resolution}</div>
            </li>
            :
            <></>
            }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Scented Candles" || Product.product === "Flameless Candles" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Frame Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Scent:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Burning Duration:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Features:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Candle Holder Set" || Product.product === "Pillar Candle Stand" || Product.product === "Candelabra Candle Stand"
|| Product.product === "Bookend Set" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Pieces:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Oil Diffuser" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Artificial Plant" || Product.product === "Artificial Tree" || Product.product === "Fake Succulent"
|| Product.product === "Plant Stand" || Product.product === "Plant Basket" || Product.product === "Plant Vase"
|| Product.product === "Planter Set" || Product.product === "Globe" || Product.product === "Sculpture" || Product.product === "Decorative Tray"
|| Product.product === "Decorative Bowl Sets" || Product.product === "Room Divider" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Marble Tiles" || Product.product === "Ceramic Tiles" || Product.product === "Porcelain Tiles"
|| Product.product === "Stone Tiles" || Product.product === "Cement Tiles" || Product.product === "Granite Tiles" || Product.product === "Brick Mold"
|| Product.product === "Travertine Tiles" || Product.product === "Quarry Tiles" || Product.product === "Marble Tiles"
|| Product.product === "Terracotta Tiles" || Product.product === "Resin Tiles" || Product.product === "Metal Tiles"
|| Product.product === "Glass Tiles" || Product.product === "Mosaic Tiles" || Product.product === "Cork Tiles"
|| Product.product === "Carpet Tiles" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Pack Size:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shape:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Linoleum Flooring" || Product.product === "Vinyl Flooring" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Pack Size:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
            {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Shape:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>Peel and Stick</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Cookware Set" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Set Pieces:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
</ul>
</div>
:
Product.product === "Instant Pot" || Product.product === "Dutch Oven" || Product.product === "Frying Pan"
|| Product.product === "Skillet" || Product.product === "Roaster Pan" || Product.product === "Steel Pressure Cooker" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Dinner Set" || Product.product === "Plate Set" || Product.product === "Dessert Plate Set"
|| Product.product === "Bowl Set" || Product.product === "Baking Pan" || Product.product === "Baking Dish"
|| Product.product === "Baking Sheet Set" || Product.product === "Mixing Bowl" || Product.product === "Baking Cups"
|| Product.product === "Baking Utensil Set" || Product.product === "Tea Cup Set" || Product.product === "Mug Set" || Product.product === "Drinking Glass Set"
|| Product.product === "Bowl Set" || Product.product === "Baking Pan" || Product.product === "Champagne Glass Set"
|| Product.product === "Wine Glass Set" || Product.product === "Cocktail Glass Set" || Product.product === "Beer Glass Set"
|| Product.product === "Beverage Dispenser" || Product.product === "Serveware Set" || Product.product === "Cake Stand" ||
Product.product === "Serving Tray" || Product.product === "Serving Platter" || Product.product === "Silverware Set" ||
Product.product === "Silverware Chest" || Product.product === "Kitchen Utensils Set" || Product.product === "Tiered Server" ||
Product.product === "Storage Canister Set" || Product.product === "Storage Container Set" || Product.product === "Canning Jar Set"
|| Product.product === "Refrigerator Organizer Bin" || Product.product === "Storage Bin" || Product.product === "Dish Rack" 
|| Product.product === "Pot Rack" || Product.product === "Cake Pan" || Product.product === "Cupcake Pan" || Product.product === "Travel Mug"
|| Product.product === "Pie Plate" || Product.product === "Pizza Pan" || Product.product === "Loaf Pan" || Product.product === "Blender Bottle"
|| Product.product === "Eletric Blender Bottle" || Product.product === "Kettle Bottle" || Product.product === "Glass & Pitcher Set"
|| Product.product === "Casserole Dish Set" || Product.product === "Butter Dish Set" || Product.product === "Gravy Boat Set" 
|| Product.product === "Serving Bowl Set" || Product.product === "Butter Dish Set" || Product.product === "Gravy Boat Set"
|| Product.product === "Sugar & Creamer Set" || Product.product === "Salt & Pepper Shakers" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Collection Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Pieces:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Capacity:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Silverware Set" || Product.product === "Silverware Chest" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Pieces:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
        {Product && Product.interface === undefined ?
            <></>
            :
            Product && Product.interface !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Feature:</div>
                <div className='Info-productdetail_li-right'>{Product.interface}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Food Scale" || Product.product === "Cooking Timer" || Product.product === "Water Filter Dispenser"
|| Product.product === "Fruit Slicer" || Product.product === "Measuring Spoon Set" || Product.product === "Measuring Cup Set" || Product.product === "Slice Tool"
|| Product.product === "Mandoline" || Product.product === "Knife Sharpener" || Product.product === "Cutting Board"
|| Product.product === "Shower Drain" || Product.product === "Shower Bars" || Product.product === "Shower Doors"
|| Product.product === "Freestanding Tub" || Product.product === "Aclover Tub" || Product.product === "Whirlpool Tub"
|| Product.product === "Combination Tub" || Product.product === "Drop In Tub" || Product.product === "Air Tub"
|| Product.product === "Clawfoot Tub" || Product.product === "Walk In Tub" || Product.product === "Corner Tub"
|| Product.product === "Freestanding Tub" || Product.product === "Aclover Tub" || Product.product === "Whirlpool Tub"
|| Product.product === "Pedestal Sink" || Product.product === "Drop In Sink" || Product.product === "Undermount Sink"
|| Product.product === "Vessel Sink" || Product.product === "Wall Mount Sink" || Product.product === "Utility Sink"
|| Product.product === "One Piece Round" || Product.product === "One Piece Elongated" || Product.product === "Wall Mount Round One Piece"
|| Product.product === "Wall Mount Elongated One Piece" || Product.product === "Volumne Handle Valve" || Product.product === "Wall Mount Faucet"
|| Product.product === "Single Hole Faucet" || Product.product === "Centerset Faucet" || Product.product === "Widespread Faucet"
|| Product.product === "Single Handle Faucet" || Product.product === "Pre-Rince Faucet" || Product.product === "Bridge Faucet"
|| Product.product === "Pull Down Faucet" || Product.product === "Side Spray Faucet" || Product.product === "Touch Faucet"
|| Product.product === "Undermount Sink" || Product.product === "Two Basin Undermount" || Product.product === "Two Basin Drop In"
|| Product.product === "Farmhouse Sink" || Product.product === "Two Basin Farmhouse" || Product.product === "Touchless Faucet"
|| Product.product === "Wall Mount Hood" || Product.product === "Range Hood Insert" || Product.product === "Island Range Hood"
|| Product.product === "Under Cabinet Hood" || Product.product === "Copper Sink" || Product.product === "Utensil Caddy Set"
|| Product.product === "Stainless Steel Undermount" || Product.product === "Stainless Steal Drop In" || Product.product === "Stainless Steal Double Basin"
|| Product.product === "Roman Tub Faucets" || Product.product === "Freestanding Tub Filler" || Product.product === "Wall Mount Filler"
|| Product.product === "Mount Clawfoot Filler" || Product.product === "Floor Clawfoot Filler"
|| Product.product === "Kids Blanket" || Product.product === "Weighted Blanket" || Product.product === "Electric Blanket" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.color === undefined ?
        <></>
        :
        Product && Product.color !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Color:</div>
            <div className='Info-productdetail_li-right'>{Product.color}</div>
        </li>
        :
        <></>
        }
        {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
        {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Knife Set" || Product.product === "Cleaver Set" || Product.product === "Electric Knife" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Blade Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.interface === undefined ?
        <></>
        :
        Product && Product.interface !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Blade Edge:</div>
            <div className='Info-productdetail_li-right'>{Product.interface}</div>
        </li>
        :
        <></>
        }
        {Product && Product.functions === undefined ?
            <></>
            :
            Product && Product.functions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Number of Pieces:</div>
                <div className='Info-productdetail_li-right'>{Product.functions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.powerSource === undefined ?
            <></>
            :
            Product && Product.powerSource !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Power Source:</div>
                <div className='Info-productdetail_li-right'>{Product.powerSource}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Base Set" || Product.product === "Bed Frame" || Product.product === "Bedroom Suite" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.modelName === undefined ?
            <></>
            :
            Product && Product.modelName !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Collection Name:</div>
                <div className='Info-productdetail_li-right'>{Product.modelName}</div>
            </li>
            :
            <></>
            }
        {Product && Product.functions === undefined ?
        <></>
        :
        Product && Product.functions !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Size:</div>
            <div className='Info-productdetail_li-right'>{Product.functions}</div>
        </li>
        :
        <></>
        }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Mattress" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Fill Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
        {Product && Product.functions === undefined ?
        <></>
        :
        Product && Product.functions !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Size:</div>
            <div className='Info-productdetail_li-right'>{Product.functions}</div>
        </li>
        :
        <></>
        }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Special Attributes:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
Product.product === "Bunk Bed" || Product.product === "Loft Bed" || Product.product === "Kids Bed"
|| Product.product === "Toddler Bed" || Product.product === "Folding Bed" || Product.product === "Adjustable Bed" ?
<div className='Clicked_page_Info_product_details'>
    <ul className='Info-left-product_details'>
        {Product && Product.brand === undefined ?
        <></>
        :
        Product && Product.brand !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Brand:</div>
            <div className='Info-productdetail_li-right'>{Product.brand}</div>
        </li>
        :
        <></>
        }
        {Product && Product.bodyCover === undefined ?
            <></>
            :
            Product && Product.bodyCover !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Material:</div>
                <div className='Info-productdetail_li-right'>{Product.bodyCover}</div>
            </li>
            :
            <></>
            }
            {Product && Product.featureCount === undefined ?
            <></>
            :
            Product && Product.featureCount !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Assembly:</div>
                <div className='Info-productdetail_li-right'>{Product.featureCount}</div>
            </li>
            :
            <></>
            }
            {Product && Product.color === undefined ?
            <></>
            :
            Product && Product.color !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Color:</div>
                <div className='Info-productdetail_li-right'>{Product.color}</div>
            </li>
            :
            <></>
            }
            {Product && Product.functions === undefined ?
        <></>
        :
        Product && Product.functions !== "" ?
        <li className='Info-productdetail_li'>
            <div className='Info-productdetail_li-left'>Design:</div>
            <div className='Info-productdetail_li-right'>{Product.functions}</div>
        </li>
        :
        <></>
        }
            {Product && Product.weight === undefined ?
            <></>
            :
            Product && Product.weight !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Item Weight:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            {Product && Product.inclusions === undefined ?
            <></>
            :
            Product && Product.inclusions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Included Items:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }
</ul>
</div>
:
    <></>
    }

<div className='Clicked_page_description_below'>
    <div style={{ width: '100%'}}>
        <div className='Clicked_Item_description_title'>
            <span>Product Description</span>
        </div>
    </div>
    <div className='Info-productdetail_description'>
                    <TextareaAutosize minRows={3} readOnly className='Info-productdetail_des-attr_right-font'
                        style={{ width: '100%', outline: 'none', resize: 'none',
                         border: 'none', borderRadius: '2px', padding: '5px'}}
                        value={Product.description}
                         />

    </div>
</div>

    {Product.accountTier === "Free" ?
    <div style={{ paddingBottom: '40px'}}>
    <li className='Info_seller_title'>
        <span style={{ color: '#333', fontSize: '18.8px', fontWeight: '600'}}>Contact Information</span>
    </li>
    <li className='Info_seller_info_below'>
                <div className='Seller_info_box'>
                <div className='Seller_info_left'>
                        <div>{Product.sellerName} Take a Lokke</div>
                    </div>
                </div>
                <div className='Seller_info_box'>
                    <div className='Seller_info_left'>
                        <div>{Product.sellerContact} 081 495 4899</div>
                    </div>
                </div>
            </li>
    </div>
    :
    <></>
    } 
    
</div> 
    }
    </>
)
}

export default ProductInfo