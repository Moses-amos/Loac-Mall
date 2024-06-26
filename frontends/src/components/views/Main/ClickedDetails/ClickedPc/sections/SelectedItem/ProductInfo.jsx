import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import AvailableLocation from '../Cards/AvailableLocation'
import NotAvailableLocation from '../Cards/NotAvailableLocation'
import NotAvailableCity from '../Cards/NotAvailableCity'


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

const addToWishlisthandler = () => {
props.addToWishlist(props.detail._id)
}


return (
<div className='Info-detail_box'>
    <div className='Info-item_name'>
        <span className='Info-name_span_detail'>{Product.title}</span>
    </div>
    <div className='Info-mid_box'>
        <div className='Info-prices_box'>
            <div className='Info-prices_padding'>
                {(Product && Product.special === undefined) || Product.specialAttribute === undefined ?
                <></>
                :
                (Product.special !== "" && Product.special !== "0") && (Product.specialAttribute === "" || Product.specialAttribute === "0" ) ?
                <div 
                style={{ width: '90px', padding: '10px 0px 15px 0px'}}
                >
                <div className='SavePercent'>
                    <span className='Percent-Deal_span_detail'>Save {Product.special}</span>
                </div>
            </div> 
                :
                (Product.specialAttribute !== "" && Product.specialAttribute !== "0") && (Product.special === "" || Product.special === "0") ?
                <div style={{ width: '120px', padding: '10px 0px 15px 0px'}}>
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
                <div className='Info-item_prices'>
                    <div className='Item-price_span'>
                        <span className='Info-price_span'>N$ {Product.price}</span>
                    </div>
                    {Product && Product.wasPrice === undefined ?
                    <></>
                    :
                    Product && Product.wasPrice !== 0 ?
                    <div className='Item-wasprice_span'>
                        <span>was N$ {Product.wasPrice}</span>
                        {/* <div className='Wasprice_crossout'></div> */}
                    </div>
                    :
                    <></>
                    }
                </div>
                {/* <div className='Item-warrenty-info-detail'>
                    <span>{Product.warrenty}</span>
                </div> */}

                {UserData && UserData === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Windhoek" && Product.Windhoek === true ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Walvis" && Product.Walvis === true ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Swakop" && props.Product.Swakop === true ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Okahandja" && Product.Okahandja === true ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Oshakati" && Product.Oshakati === true ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Grootfontein" && Product.Grootfontein === true ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Rehoboth" && Product.Rehoboth === true ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "KatimaMulilo" && Product.KatimaMulilo === true ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Ongwediva" && Product.Ongwediva === true  ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Otjiwarongo" && Product.Otjiwarongo === true ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Tsumeb" && Product.Tsumeb === true ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Gobabis" && Product.Gobabis === true ?
                    <AvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Windhoek" && Product.Windhoek === false ?
                    <NotAvailableCity UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Walvis" && Product.Walvis === false ?
                    <NotAvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Swakop" && props.Product.Swakop === false ?
                    <NotAvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Okahandja" && Product.Okahandja === false ?
                    <NotAvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Oshakati" && Product.Oshakati === false ?
                    <NotAvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Grootfontein" && Product.Grootfontein === false ?
                    <NotAvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Rehoboth" && Product.Rehoboth === false ?
                    <NotAvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "KatimaMulilo" && Product.KatimaMulilo === false ?
                    <NotAvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Ongwediva" && Product.Ongwediva === false  ?
                    <NotAvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Otjiwarongo" && Product.Otjiwarongo === false ?
                    <NotAvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Tsumeb" && Product.Tsumeb === false ?
                    <NotAvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    UserData && UserData.userLocation === "Gobabis" && Product.Gobabis === false ?
                    <NotAvailableLocation UserData={UserData} Product={Product} Images={Images} />
                    :
                    <></>
                    }

            </div>
        </div>
        {(UserData && UserData.operateLocation === "Branch") || UserData.operateLocation === "Admin" ?
        <div className='Info-cart-wishlist_box'>
            <div className='Info-addtocart'>
                <span className='Info-cart_span'>Add To Cart</span>
            </div>
            <div className='Info-addtowishlist' >
            <span className='Info-wishlist_span'>Add To Wishlist</span>
            </div>
        </div>
        : UserData.length === 0?
        <div className='Info-cart-wishlist_box'>
        <div className='Info-addtocart' onClick={()=> {CartItem(); addToCarthandler()}}>
        <span className='Info-wishlist_span'>Add To Cart</span>
        </div>
        <div className='Info-addtowishlist' onClick={()=> { addedItem(); addToWishlisthandler() }} >
        <span className='Info-wishlist_span'>Add To Wishlist</span>
        </div>
    </div>
    :
    <div className='Info-cart-wishlist_box'>
    <div className='Info-addtocart' onClick={()=> {CartItem(); addToCarthandler()}}>
    {addCartItem === false ?
        <span className='Info-wishlist_span'>Add To Cart</span>
        :
        addCartItem && addCartItem === true ?
        <span className='Info-wishlist_span'>Added</span>
        :
        <span className='Info-wishlist_span'>Add To Cart</span>
        }
    </div>
    <div className='Info-addtowishlist' onClick={()=> { addedItem(); addToWishlisthandler() }} >

        {addedWishlist === false ?
        <span className='Info-wishlist_span'>Add To Wishlist</span>
        :
        addedWishlist && addedWishlist === true ?
        <span className='Info-wishlist_span'>Saved</span>
        :
        <span className='Info-wishlist_span'>Add To Wishlist</span>
        }
    </div>
</div>

        }
    </div>
    {Product.product === "Battery" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li> 
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Nail Gun" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.voltage}</div>
            </li>
            :
            <></>
            }
            
        </ul>
    </div>
    :
    Product.product === "Electric Planer" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.voltage}</div>
            </li>
            :
            <></>
            }

        </ul>
    </div>
    :
    Product.product === "Electric Chainsaw" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.voltage}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Power Drill" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }

        </ul>
    </div>
    :
    Product.product === "Pressure Washer" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
            
        </ul>
    </div>
    :
    Product.product === "Trimmer Tool" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Fire Place" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Heater" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
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
    <div className='Info-product_details'>
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
                Reservoir Capacity :</div>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Dehumidifier" || Product.product === "Humidifier" ?
    <div className='Info-product_details'>
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
    Product.product === "Air Purifier" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Vacuum Cleaner" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Clothing Iron" || Product.product === "Steamer"  ?
    <div className='Info-product_details'>
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
    Product.product === "Fryer" ?
    <div className='Info-product_details'>
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
                Fryer Type:</div>
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
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Indoor Grill" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Juicer" || Product.product === "Food Processor" ||
    Product.product === "Toaster" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Griddle" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Bread Maker" || Product.product === "Waffle Maker"
    || Product.product === "Blender" ?
    <div className='Info-product_details'>
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
                Inclusions:</div>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Mixer" ?
    <div className='Info-product_details'>
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
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
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
    Product.product === "Kitchen Appliance Package" || Product.product === "Appliance Bundle" ?
    <div className='Info-product_details'>
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
    Product.product === "Wall Oven" || Product.product === "Beverage Maker" ?
    <div className='Info-product_details'>
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
                Beverage:</div>
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
                Product Dimensions:</div>
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
    
    Product.product === "Cooker" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Dishwasher" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Freezer" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Refrigerator" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Auto Remote Start" || Product.product === "Auto Navigation" || Product.product === "Auto Accessory" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Auto Audio" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    Product.product === "Hair Straightner" || Product.product === "Straightening Brush" || Product.product === "Hair Iron" || Product.product === "Health Item"
    || Product.product === "Hair Dryer" || Product.product === "Hair Steamer" || Product.product === "Hair Trimmer" || Product.product === "Hair Clipper"
    || Product.product === "Electric Shaver" || Product.product === "Epilator" || Product.product === "Nose Hair Trimmer" || Product.product === "Body Hair Trimmer"
    || Product.product === "Steam Vaporizer" || Product.product === "Vape" ?
    <div className='Info-product_details'>
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
    || Product.product === "Hair Dryer" || Product.product === "Massage Device" || Product.product === "Thermometer Device" || Product.product === "Weight Device"
    || Product.product === "Inhaler" || Product.product === "Vaporizer" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Stationery Bike" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Elliptical Machine" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Rowing Machine" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Exercise Machine" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Console Controller" || Product.product === "Console Remote"
    || Product.product === "Console Camera" || Product.product === "Controller Accessory" ?
    <div className='Info-product_details'>
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
    Product.product === "Console Game" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Storage Capacity:</div>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Storage Capacity:</div>
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
                Inclusions:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "XBOX Console" ?
    <div className='Info-product_details'>
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
                Memory (RAM):</div>
                <div className='Info-productdetail_li-right'>{Product.ramSpeed}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Storage Capacity:</div>
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
                Inclusions:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Nintendo" ?
    <div className='Info-product_details'>
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
                Storage Capacity:</div>
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
                Inclusions:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Steam Deck" ?
    <div className='Info-product_details'>
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
                Storage Capacity:</div>
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
                Inclusions:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "OneXPlayer" ?
    <div className='Info-product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Brand:</div>
                <div className='Info-productdetail_li-right'>One-Netbook</div>
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
                Processor (CPU):</div>
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
                Graphics Card (GPU):</div>
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
                Memory (RAM):</div>
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
                Inclusions:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Handheld Console" ?
    <div className='Info-product_details'>
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
                Processor (CPU):</div>
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
                Graphics Card (GPU):</div>
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
                Memory (RAM):</div>
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
                Inclusions:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Game Console" ?
    <div className='Info-product_details'>
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
                Inclusions:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Digital Clock" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Turntable" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Storage Capacity:</div>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    Product.product === "Camera Film" ?
    <div className='Info-product_details'>
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
            {Product && Product.dimensions === undefined ?
            <></>
            :
            Product && Product.dimensions !== "" ?
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Camera Lense" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
        <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    Product.product === "Antenna" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    Product.product === "Sound Bar" || Product.product === "Decoder" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
        :
        Product.product === "Projector" ?
        <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
            <span style={{ color: '#070606', fontSize: '13px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flexnorm'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>HDMI Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>Ethernet Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.ethernetPort}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>VGA Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.vgaPort}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Small Keyboard" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    Product.product === "Phone Grip" || Product.product === "Popsocket" || Product.product === "Tablet Case Sleeve" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
                Storage Capacity:</div>
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
                Memory (RAM):</div>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
            <span style={{ color: '#070606', fontSize: '13px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>HDMI Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>VGA Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.vgaPort}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexrow'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>3D:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.threeD}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB-C Port:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.cType}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Desktop Pc" ?
    <div className='Info-product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Processor (CPU):
                </div>
                <div className='Info-productdetail_li-right'>
                    {Product.processorName}
                </div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Graphics Card (GPU):
                </div>
                <div className='Info-productdetail_li-right'>{Product.graphicsCardName} {Product.vRam}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Memory (RAM):
                </div>
                <div className='Info-productdetail_li-right'>
                    {Product.ram} {Product.ramGeneration} {Product.ramArrangement} 
                </div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Video Memory (VRAM):
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
                    Inclusions:</div>
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
            <span style={{ color: '#070606', fontSize: '13px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
                <div style={{ paddingRight: '230px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>Disc Drive:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.dvdDrive}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB-C Port:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.cType}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexmid'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                <span className='Info-productdetail_flex-span'>USB Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>HDMI Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>VGA Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.vgaPort}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>Ethernet Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.ethernetPort}</span>
                    </div>
                </div>
            </li>

            <li className='Info-productdetail_li-flexend_two'>
                {Product.ramSlot === "" || Product.ramSlot === "unset" ?
                <></>
                :
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>Ram Slots:</span>
                    <div style={{ padding: '2px 10px',minWidth: '145px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.ramSlot}</span>
                    </div>
                </div>
                }
                {Product.nvmeSlot === "" || Product.nvmeSlot === "unset" ?
                <></>
                :
                <div style={{  display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>NVMe Slots:</span>
                    <div style={{ padding: '2px 10px',minWidth: '145px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.nvmeSlot}</span>
                    </div>
                </div>
                }
            </li>
        </ul>
    </div>
    :
    Product.product === "Laptop" ? 
    <div className='Info-product_details'>
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
                    Processor (CPU):
                </div>
                <div className='Info-productdetail_li-right'>
                    {Product.processorName}
                </div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Graphics Card (GPU):
                </div>
                <div className='Info-productdetail_li-right'>{Product.graphicsCardName}</div>
            </li>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>
                    Memory (RAM):
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
                    Inclusions:</div>
                <div className='Info-productdetail_li-right'>{Product.inclusions}</div>
            </li>
            :
            <></>
            }

            <li className='Info-productdetail_li-specs'>
            <span style={{ color: '#070606', fontSize: '13px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>Disc Drive:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.dvdDrive}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB-C Port:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.cType}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>SDCard Reader:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.sdCardSlot}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexmid'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>HDMI Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>VGA Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.vgaPort}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>Ethernet Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.ethernetPort}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Ethernet Range Extender" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    || Product.product === "Unlisted Cable" || Product.product === "OTG Cable" || Product.product === "RCA Cable" || Product.product === "Auxilary Cable"
    || Product.product === "Sata Cable" || Product.product === "Molex Related" || Product.product === "Audio Splitter" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    Product.product === "Recordable Disc" || Product.product === "Console Memory Card"  ?
    <div className='Info-product_details'>
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
                Storage Capacity:</div>
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
    || Product.product === "Desktop HDD Drive"  ?
    <div className='Info-product_details'>
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
                Storage Capacity:</div>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Virtual Reality"  ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.dimensions}</div>
            </li>
            :
            <></>
            }
        </ul>
    </div>
    :
    Product.product === "Webcam"  ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    Product.product === "PowerSupply" ?
    <div className='Info-product_details'>
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
            <span style={{ color: '#070606', fontSize: '13px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex_two'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>ATX Power Connectors 20+4-pin:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.twentyPlusCount}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>ATX 12v Connectors 4-Pin:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.fourPinCount}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexmid_two'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                <span className='Info-productdetail_flex-span'>Floppy Drive Connectors 4-Pin:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.floppyCount}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>Molex Connectors 4-Pin:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.molexCount}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexrow_two'>
            <div style={{ paddingRight: '30px', display: 'flex'}}>
                <span className='Info-productdetail_flex-span'>SATA Connectors:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.sataCount}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                <span className='Info-productdetail_flex-span'>PCI Express Connectors 6-Pin:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.sixPinCount}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Desktop Pc Case" ?
    <div className='Info-product_details'>
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
                Product Dimensions:</div>
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
            <span style={{ color: '#070606', fontSize: '13px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>Disc Drive:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.dvdDrive}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB-C Port:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.cType}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.usbPort}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexrow'>
            <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>HDD Slots:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.hddCount}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>SSD Slots:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.ssdCount}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "WiFi Card" ?
    <div className='Info-product_details'>
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
    Product.product === "MotherBoard" ?
    <div className='Info-product_details'>
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
            <span style={{ color: '#070606', fontSize: '13px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>HDMI Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                <span className='Info-productdetail_flex-span'>VGA Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.vgaPort}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>Ethernet Port:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.ethernetPort}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexrow'>
                <div style={{ paddingRight: '20px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>DVI Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.dviPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '20px',display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>PCI Express Slots:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.pciPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '20px', display: 'flex'}}>
                <span className='Info-productdetail_flex-span'>Ram Slots:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.ramSlot}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                <span className='Info-productdetail_flex-span'>NVMe SSD Slots:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.nvmeBus}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "GraphicsCard" ?
    <div className='Info-product_details'>
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
                    Video Memory (VRAM):</div>
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
            <span style={{ color: '#070606', fontSize: '13px', fontWeight: '700'}}>more specs</span>
            </li>
            <li className='Info-productdetail_li-flex'>
            <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB-C Port:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.cType}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>USB Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.usbPort}</span>
                    </div>
                </div>
                <div style={{ display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>DisplayPort:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.displayPort}</span>
                    </div>
                </div>
            </li>
            <li className='Info-productdetail_li-flexrow'>
            <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>HDMI Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.hdmiPort}</span>
                    </div>
                </div>
                <div style={{ paddingRight: '30px', display: 'flex'}}>
                    <span className='Info-productdetail_flex-span'>DVI Ports:</span>
                    <div style={{ width: '45px', marginLeft: '10px', height: '20px', borderRadius: '5px', border: '2px solid #74767c', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ color: '#3e4e5b', fontSize: '13px', fontWeight: '700'}}>{Product.dviPort}</span>
                    </div>
                </div>
            </li>
        </ul>
    </div>
    :
    Product.product === "Processor" ?
    <div className='Info-product_details'>
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
     || Product.product === "Laptop CD-DVD Drive" || Product.product === "Optical Disc-Drive" 
    || Product.product ==="External CD-DVD Drive" ?
    <div className='Info-product_details'>
        <ul className='Info-left-product_details'>
            <li className='Info-productdetail_li'>
                <div className='Info-productdetail_li-left'>Brand:</div>
                <div className='Info-productdetail_li-right'>{Product.brand}</div>
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
    Product.product === "Phone Battery" || Product.product === "Tablet Battery" || Product.product === "Camera Battery"
     || Product.product === "Laptop CD-DVD Drive" || Product.product === "Optical Disc-Drive" 
    || Product.product ==="External CD-DVD Drive" ?
    <div className='Info-product_details'>
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
    Product.product === "Laptop Fan" || Product.product ==="Laptop Screen" || Product.product ==="Desktop Heatsink" 
    || Product.product ==="Portable Power Station" || Product.product ==="Cooling Pad" || Product.product ==="Desktop Cooling Fan" 
    || Product.product ==="Desk Pad"   ?
    <div className='Info-product_details'>
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
                <div className='Info-productdetail_li-left'>Product Dimensions:</div>
                <div className='Info-productdetail_li-right'>{Product.weight}</div>
            </li>
            :
            <></>
            }

        </ul>
    </div>
    :
    Product.product === "Clover Power Cable" ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    Product.product ==="Cooling Pad" || Product.product === "USB Hub"  ?
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    <div className='Info-product_details'>
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
    Product.product === "Laptop DDR3 Ram" || Product.product === "Laptop DDR4 Ram" || Product.product === "Laptop DDR5 Ram"
    || Product.product === "Desktop DDR3 Ram" || Product.product === "Desktop DDR4 Ram" || Product.product === "Desktop DDR5 Ram" ?
    <div className='Info-product_details'>
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
                <div className='Info-productdetail_li-left'>Memory (RAM):</div>
                <div className='Info-productdetail_li-right'>{Product.ram} {Product.ramGeneration}</div>
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
                <div className='Info-productdetail_li-left'>Compatible Device:</div>
                <div className='Info-productdetail_li-right'>{Product.compatibleDevice}</div>
            </li>
        </ul>
        </div>
    :
    <></>
    }

</div>
)
}

export default ProductInfo