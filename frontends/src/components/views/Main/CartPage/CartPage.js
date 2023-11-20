import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

import {
    getCartItems,
    removeCartItem,
    addToCart,
    addToWishlistOnce,
    onSuccessBuy
} from '../../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';
// import { Result } from 'antd';
import NoImage from '../../Client/TrackOrder/Images/No_Image.jpg'
import Axios from 'axios';
// import PurchaseBrands from './Sections/PurchaseBrands';
// import TextareaAutosize from 'react-textarea-autosize';
import Paypal from '../../../utils/Paypal';
import './cartpage.css'
import '../00Components/pages.css'
import '../../Client/TrackOrder/trackorder.css'
import '../../Fulfillment/MainOperations/Pages/MainPages/retailerstyle.css'
import '../../Fulfillment/RegionalPages/style.css'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart';

function CartPage(props) {

    const dispatch = useDispatch();
    const [Total, setTotal] = useState(0)
    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)
    const [showPickup, setShowPickup] = useState(true)
    // const [showAddress, setshowAddress] = useState(false)
    // const [SavedAddress, setSavedAddress] = useState()
    const [showPopup, setshowPopup] = useState(false)

    const infoPopup = () => setshowPopup(!showPopup)
    // const [SelectOption, setSelectOption] = useState([])

    const [UserData, setUserData] = useState([])
    const [Windhoek, setWindhoek] = useState("Windhoek")
    const [KatimaMulilo, setKatimaMulilo] = useState("KatimaMulilo")
    const [Swakop, setSwakop] = useState("Swakop")
    const [Walvis, setWalvis] = useState("Walvis")
    const [Oshakati, setOshakati] = useState("Oshakati")
    const [Grootfontein, setGrootfontein] = useState("Grootfontein")
    const [Rundu, setRundu] = useState("Rundu")
    const [Otjiwarongo, setOtjiwarongo] = useState("Otjiwarongo")
    const [Ongwediva, setOngwediva] = useState("Ongwediva")
    const [Okahandja, setOkahandja] = useState("Okahandja")
    const [Gobabis, setGobabis] = useState("Gobabis")
    const [Rehoboth, setRehoboth] = useState("Rehoboth")
    const [Tsumeb, setTsumeb] = useState("Tsumeb")
    // const [AddressValue, setAddressValue] = useState()
    const [ContactValue, setContactValue] = useState("")
    const [NameValue, setNameValue] = useState("")
    const [LastNameValue, setLastNameValue] = useState("")
    const [ToggleLocation, setToggleLocation] = useState(false)

    const [SearchTerms, setSearchTerms] = useState("")
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [searchResults, setSearchResults] = useState(false)
    const [ShowPreview, setShowPreview] = useState(false)

    const TogglePreview = () => setShowPreview(!ShowPreview)

    
    const clickSearch = () => setSearchResults(!searchResults)
    
    const SetLocation = () => setToggleLocation(!ToggleLocation)
    
    function refreshPage() {
        window.location.reload(false);
      }

      const [Products, setProducts] = useState([])

      useEffect(() => {
      Axios.post('./api/product/getProducts')
      .then(response => {
      if (response.data.success) {
      
      setProducts(response.data.products)
      } else {
      }
      })
      
      
      }, [])

      if (UserData.operateLocation === "Branch"){
        props.history.push("/royal-branch")
        refreshPage()
        } else if (UserData.operateLocation === "Admin") {
          props.history.push(`/0/${UserData._id}`)
          refreshPage()
        }

    useEffect(() => {

        let cartItems = [];
        if (props.user.userData && props.user.userData.cart) {
            if (props.user.userData.cart.length > 0) {
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                });
                dispatch(getCartItems(cartItems, props.user.userData.cart))
                    .then((response) => {
                        if (response.payload.length > 0) {
                            calculateTotal(response.payload)
                        }
                    })
            }
        }

    }, [props.user.userData])

      useEffect(() => {

        Axios.get('/api/users/getUser')
        .then(response => {
            if (response.data.success) {
                setUserData(response.data.doc);
            }
        })
      
        }, [])

        const SearchedProducts = Products.map((product, index) => {
          if (product.activeSeller === true) {
            return (
            <SearchedCart key={index} UserData={UserData} product={product} />
            )
          }
  
          })
        
  const SearchedLocationProducts = Products.map((product, index) => {
    if (((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)
    || (UserData.userLocation === "Rundu" && product.Rundu === true)) && product.activeSeller === true) {
      return (
      <SearchedCart key={index} UserData={UserData} product={product} />
  )
    }
    })
          
          const [Filters, setFilters] = useState({
          location: []
          })
          
          const getProducts = (variables) => {
          
          Axios.post('/api/product/getProducts', variables)
          .then(response => {
          if (response.data.success) {
          if (variables.loadMore) {
          setProducts([...Products, ...response.data.products])
          } else {
          setProducts(response.data.products)
          }
          setPostSize(response.data.postSize)
          } else {
          alert('Failed to fectch product datas')
          }
          })
          }

          useEffect(() => {

            if (props.user.search === undefined || props.user.search === "") {
              setSearchTerms("")
            } else if(props.user.search !== "" || props.user.search !== undefined) {
              const variables = {
                skip: 0,
                limit: Limit,
                filters: Filters,
                searchTerm: props.user.search
                }
        
              setSearchTerms(props.user.search)
              getProducts(variables)
            }
        
        }, [props.user.search])
          
          
    const ClickOption = () => {

        const variables = {
            storePickup: showPickup,
            contact: ContactValue === "" ? UserData.contact : ContactValue,
            name: NameValue === "" ? UserData.name : NameValue,
            lastname: LastNameValue === "" ? UserData.lastname : LastNameValue,
            }

                Axios.post("/api/users/setRole", variables)
                .then(response => {
                if(response.data.success) {
                    dispatch(onSuccessBuy({
                        cartDetail: props.user.cartDetail,
                        // paymentData: data
                    }))
                        .then(response => {
                            if (response.payload.success) {
                                setShowSuccess(true)
                                setShowTotal(false)
                            }
                        })
            }
        })
    }
    
    const calculateTotal = (cartDetail) => {
        let total = 0;

        cartDetail.map(item => {
            total += parseInt(item.price, 10) * item.quantity
        });

        setTotal(total)
        setShowTotal(true)
    }

    const removeFromCart = (productId) => {

        dispatch(removeCartItem(productId))
            .then((response) => {
                if (response.payload.cartDetail.length <= 0) {
                    setShowTotal(false)
                } else {
                    calculateTotal(response.payload.cartDetail)
                }
            })
    }

    const addToCartHandler = (productId) => {
        dispatch(addToCart(productId))
        }
        
        const addToWishlistOnceHandler = (productId) => {
        dispatch(addToWishlistOnce(productId))
        }

    // const transactionSuccess = (data) => {
    //     dispatch(onSuccessBuy({
    //         cartDetail: props.user.cartDetail,
    //         paymentData: data
    //     }))
    //         .then(response => {
    //             if (response.payload.success) {
    //                 setShowSuccess(true)
    //                 setShowTotal(false)
    //             }
    //         })
    // }

    // const transactionError = () => {
    //     console.log('Paypal error')
    // }

    // const transactionCanceled = () => {
    //     console.log('Transaction canceled')
    // }


    // const onAddressChange = (event) => {
    //     setAddressValue(event.currentTarget.value)
    //   }
    
      const onContactsChange = (event) => {
        setContactValue(event.currentTarget.value)
      }
 
      const onNameChange = (event) => {
        setNameValue(event.currentTarget.value)
      }
          
      const onLastNameChange = (event) => {
        setLastNameValue(event.currentTarget.value)
      }


      const WindhoekSubmit = () => {
        const variables = {
          userLocation: Windhoek
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }
      
      const KatimaMuliloSubmit = () => {
        const variables = {
          userLocation: KatimaMulilo
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }
      
      const SwakopSubmit = () => {
        const variables = {
          userLocation: Swakop
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }
      
      const WalvisSubmit = () => {
        const variables = {
          userLocation: Walvis
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }
      
      const OshakatiSubmit = () => {
        const variables = {
          userLocation: Oshakati
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }

      const RunduSubmit = () => {
        const variables = {
          userLocation: Rundu
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }

      const GrootfonteinSubmit = () => {
        const variables = {
          userLocation: Grootfontein
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }

      const OtjiwarongoSubmit = () => {
        const variables = {
          userLocation: Otjiwarongo
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }

      const OngwedivaSubmit = () => {
        const variables = {
          userLocation: Ongwediva
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }

      const OkahandjaSubmit = () => {
        const variables = {
          userLocation: Okahandja
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }

      const GobabisSubmit = () => {
        const variables = {
          userLocation: Gobabis
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }

      const RehobothSubmit = () => {
        const variables = {
          userLocation: Rehoboth
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }

      const TsumebSubmit = () => {
        const variables = {
          userLocation: Tsumeb
        }
      
        Axios.post("/api/users/setRole", variables)
      .then(response => {
      if(response.data.success) {

      }
      })
      }
      
      const onWindhoekValue = (event) => {
        setWindhoek(event.currentTarget.value)
        }
      
        const onKatimaMuliloValue = (event) => {
          setKatimaMulilo(event.currentTarget.value)
          }
      
          const onSwakopValue = (event) => {
            setSwakop(event.currentTarget.value)
            }
      
          const onWalvisValue = (event) => {
            setWalvis(event.currentTarget.value)
            }
      
              const onGrootfonteinValue = (event) => {
                setGrootfontein(event.currentTarget.value)
                }
                      
              const onOshakatiValue = (event) => {
                setOshakati(event.currentTarget.value)
                }
                                      
              const onRunduValue = (event) => {
                setRundu(event.currentTarget.value)
                }
                                                      
              const onOtjiwarongoValue = (event) => {
                setOtjiwarongo(event.currentTarget.value)
                }
                                                                      
              const onOngwedivaValue = (event) => {
                setOngwediva(event.currentTarget.value)
                }
                                                                                      
              const onOkahandjaValue = (event) => {
                setOkahandja(event.currentTarget.value)
                }
                                                                                                      
              const onGobabisValue = (event) => {
                setGobabis(event.currentTarget.value)
                }
                                                                                                                      
              const onRehobothValue = (event) => {
                setRehoboth(event.currentTarget.value)
                }
                                                                                                                                      
              const onTsumebValue = (event) => {
                setTsumeb(event.currentTarget.value)
                }

    return (
        <div style={{ display: 'block'}}>
  {SearchTerms === "" ?
  <>
  {ShowSuccess ?
  <></>
  :
<div className={showPopup === false ? 'CartPage_details' : 'Show-info_details-hide' }>
  {UserData && UserData.userLocation === undefined  ?
  <></>
  :
  UserData && UserData.userLocation === "" ?
  <div className='CartPage_details-Select_location'>
  <span className='CartPage_checkout_span'>Select Location</span>  
</div>
:
UserData && UserData.userLocation === "Windhoek" || UserData && UserData.userLocation === "KatimaMulilo" ||
    UserData && UserData.userLocation === "Swakop" || UserData && UserData.userLocation === "Walvis" 
     || UserData && UserData.userLocation === "Oshakati" || UserData && UserData.userLocation === "Grootfontein" ||
     UserData && UserData.userLocation === "Rundu" || UserData && UserData.userLocation === "Otjiwarongo" ||
     UserData && UserData.userLocation === "Ongwediva" || UserData && UserData.userLocation === "Okahandja" 
     || UserData && UserData.userLocation === "Gobabis" || UserData && UserData.userLocation === "Rehoboth"
     || UserData && UserData.userLocation === "Tsumeb" ?
     <div className='CartPage_details-checkout_branch'>
      <span className='CartPage_checkout_span'>Saved Items</span>  
    </div>
    :
    <></>
  }

    <div className='CartPage_details_mid_section'>
          <div className='CartPage_mid_Cart'>
          {UserData && UserData.userLocation === undefined ?
    <></>
    :
    UserData && UserData.userLocation === "" ?
    <div className='Cartpage_location_select_main'>
    <div className='UserLocations_box'>
    <div className='UserLocations_title'>
        <span>Which town/city are you in or which is close to you?</span>
        </div>
    <ul className='UserLocations-select_boxes'>
            <li onChange={onWindhoekValue} value={Windhoek} onClick={() => { refreshPage(); WindhoekSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Windhoek</span> </div>
            </li>
            <li onChange={onWalvisValue} value={Walvis} onClick={() => { refreshPage(); WalvisSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Walvis Bay</span> </div>
            </li>
            <li onChange={onSwakopValue} value={Swakop} onClick={() => { refreshPage(); SwakopSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Swakopmund</span> </div>
            </li>
            <li onChange={onOkahandjaValue} value={Okahandja} onClick={() => { refreshPage(); OkahandjaSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Okahandja</span> </div>
            </li>
            <li onChange={onOshakatiValue} value={Oshakati} onClick={() => { refreshPage(); OshakatiSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Oshakati</span> </div>
            </li>
            <li onChange={onGrootfonteinValue} value={Grootfontein} onClick={() => { refreshPage(); GrootfonteinSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Grootfontein</span> </div>
            </li>
            <li onChange={onRehobothValue} value={Rehoboth} onClick={() => { refreshPage(); RehobothSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Rehoboth</span> </div>
            </li>
            <li onChange={onKatimaMuliloValue} value={KatimaMulilo} onClick={() => { refreshPage(); KatimaMuliloSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Katima Mulilo</span> </div>
            </li>
            <li onChange={onOtjiwarongoValue} value={Otjiwarongo} onClick={() => { refreshPage(); OtjiwarongoSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Otjiwarongo</span> </div>
            </li>
            <li onChange={onOngwedivaValue} value={Ongwediva} onClick={() => { refreshPage(); OngwedivaSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Ongwediva</span> </div>
            </li>
            <li onChange={onTsumebValue} value={Tsumeb} onClick={() => { refreshPage(); TsumebSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Tsumeb</span> </div>
            </li>
            <li onChange={onRunduValue} value={Rundu} onClick={() => { refreshPage(); RunduSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Rundu</span> </div>
            </li>
            <li onChange={onGobabisValue} value={Gobabis} onClick={() => { refreshPage(); GobabisSubmit() }} className='UserLocations-select_li'>
            <div className='UserLocations-select_Tabs'><span>Gobabis</span> </div>
            </li>
    </ul>
</div>
    </div>
    :
    UserData && UserData.userLocation === "Windhoek" || UserData && UserData.userLocation === "KatimaMulilo" ||
    UserData && UserData.userLocation === "Swakop" || UserData && UserData.userLocation === "Walvis" 
     || UserData && UserData.userLocation === "Oshakati" || UserData && UserData.userLocation === "Grootfontein" ||
     UserData && UserData.userLocation === "Rundu" || UserData && UserData.userLocation === "Otjiwarongo" ||
     UserData && UserData.userLocation === "Ongwediva" || UserData && UserData.userLocation === "Okahandja" 
     || UserData && UserData.userLocation === "Gobabis" || UserData && UserData.userLocation === "Rehoboth"
     || UserData && UserData.userLocation === "Tsumeb"  ?
     <div style={{ position: 'relative', width: '100%'}}>
      {props.user.cartDetail === undefined ?
              <div className='Cart-top_titles_box'>
              <div className='Cart-top_left'>
                  <div className='Cart-title_center Cart-description_box'>
                      <span>Description</span>
                  </div>
                  <div className='Cart-title_center_total Cart-total_box'>
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', paddingRight: '10px'}}>
                      <div>Total:</div>
                      <div style={{ marginLeft: '15px'}}>N$ 0.00</div>
                    </div>

                </div>
              </div>
              <div className='Mobile_size_checkout_box'>
                
                <div className='Checkout_Order_mobile_box'>

                <div className='Mobile_size_place_order_box'>
                  <button onClick={TogglePreview} className='Mobile_size_place_order_button' >Preview</button>
                </div>

                <div className='Mobile_size_place_checkout_box'>
                  <button onClick={infoPopup} className='Mobile_size_place_checkout_button'>Request</button>
                </div>
                </div>
              </div>

               

              <div className={ShowPreview === false ? "Cart_Preview_toggle" : "Cart_Preview_toggle_hide"}>
              <div style={{ display: 'block', marginTop: '20px'}}>
               <div style={{ width: '100%', height: '280px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #c5cbd5', borderRadius: '7px'}}>
                      <a>
                        <img style={{ width: '300px', height: '250px'}} src="https://i.imgur.com/NMOu6Qt.jpg" alt="" />
                      </a>
                    </div>
                    
                    <div style={{ marginTop: '20px'}}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <span style={{ fontWeight: '600', fontSize: '14px', color: '#3E3D53'}}>Empty Saves</span>
                        </div>
                     </div>
               </div>
              </div>

              <div className={ShowPreview === true ? "Cart_Preview_toggle" : "Cart_Preview_toggle_hide"}>
              <div className='Card-renderItems'>

  <div className='Cart-item_box_main'>
<div className='Cart_Details_info_box'>
  <div className='Cart_item_image_listing'>
  <img style={{ width: '100%', height: '180px', borderRadius: '10px'}} src={NoImage} alt=""  />
  </div>

  <div className='Cart_title_other_info_box'>
  <div className='Cart_item_title_info_box'>
      <span className='Cart_item_title_info_span'>
      This is where the title of the item is shown.
      </span>
    </div> 

    <div className='Cart_item_specific_info_box'>
    <div className='Cart_item_select_Wishlist'>
      <button
       className='Cart_item_save_wishlist'>
        <span>To wishlist</span>
      </button>
      
    </div>

      <div className='Cart_item_price_quantity'>
      <div className='Cart_item_quantity_flex'>
     
      <button 
      className='Cart_item_increase_units'>
        <span>Add</span>
      </button>

          <div className='Cart_item_specific_title_box'>Quantity:</div>
          <div className='Cart_item_figure_unit'>0 units</div>
        </div>

        <div className='Cart_item_price_flex'>
          <div className='Cart_item_specific_title_box'>Price:</div>
          <div className='Cart_item_figure_unit'>N$ 0.00</div>
        </div>

      </div>
      
      <div className='Cart_item_select_remove'>
      <div className='Cart_item_shipping_box'>
        <div className='Cart_item_shipping_text'>
          Marketed By
        </div>
        <div className='Cart_item_shipping_seller'>Brand</div>
      </div>

      <button 
      className='Cart_item_remove_item'>
        <span>Remove</span>
      </button>
      
    </div>

    </div>
  </div>

</div>
</div>
              </div> 
              </div>

              

          </div>
      :
     <UserCardBlock
         products={props.user.cartDetail}
         total={Total}
         infoPopup={infoPopup}
         removeItem={removeFromCart}
         addToCart={addToCartHandler}
         addToWishlistOnce={addToWishlistOnceHandler}
     />
      }
         </div>
    :
    <></>
      } 
        </div>
        {UserData && UserData.userLocation === undefined ?
        <></>
        :
        UserData && UserData.userLocation === "" ?
        <></>
        :
        UserData && UserData.userLocation === "Windhoek" || UserData && UserData.userLocation === "KatimaMulilo" ||
        UserData && UserData.userLocation === "Swakop" || UserData && UserData.userLocation === "Walvis" 
        || UserData && UserData.userLocation === "Oshakati" || UserData && UserData.userLocation === "Grootfontein" ||
        UserData && UserData.userLocation === "Rundu" || UserData && UserData.userLocation === "Otjiwarongo" ||
        UserData && UserData.userLocation === "Ongwediva" || UserData && UserData.userLocation === "Okahandja" 
        || UserData && UserData.userLocation === "Gobabis" || UserData && UserData.userLocation === "Rehoboth"
        || UserData && UserData.userLocation === "Tsumeb"  ?
        <div className='Delivery-payment_box'>
            <div className='Delivery-title'>
                <span className='Delivery-title_span'>Summary</span>
            </div>
           <div className='Delivery-options_box'>
           <div className='Online_payments_text_box'>
                        <span className='Deliver-address-store_span_left'>No Online Payments</span>
                      </div>
            </div> 
            {/* <PurchaseBrands products={props.user.cartDetail} /> */}
            <div className='Payment-info_box'>

            <div className='Payment-total'>
                <h2 className='Payment-total_box'>Balance : N$ {Total} </h2>
            </div>

        <div className="Paypal_button">
    {/* Paypal Button */}

    {/* {ShowTotal && */}
        <div>
        <div className='Place_order_button_box'>
        <button 
        onClick={infoPopup}
        className='Place_order_button'>
    Make Request</button>
            </div>
            
            <div className='Confirm_make_order'>
              <div className='Make_request_text'>
                MAKE REQUEST means:
              </div>
              <div className='Make_request_text_below'>
                To confirm with the Marketing Brand - if they still have the item available.
              </div>
            </div>

    </div>
{/* //     <Paypal
//     toPay={Total}
//     onSuccess={transactionSuccess}
//     transactionError={transactionError}
//     transactionCanceled={transactionCanceled}
// />
    // } */}
            </div>
                </div>
        </div>
        :
        <></>
        }
    </div>
</div>
  }

<div className={showPopup ? "Show-info_details" : "Show-info_details-hide"}>
            <div style={{ width: '100%', padding: '0px 5px 0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'right'}}>
                    <div className="Request_cancel_box">
                    <button className="Request_cancel_button" onClick={infoPopup}>Back</button>
                    </div>
                </div>
            <div style={{ width: '100%', padding: '0px 10px 5px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                    <span style={{ fontSize: '35px', fontWeight: '700', color: '#070606'}}>Contact Information</span>
                    </div>
                </div>
                <div style={{ marginTop: '20px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    
                    <div style={{ display: 'block'}}>
                    <div className='Place_order_title_box'>
                    <span className='Place_order_title_span'>Email:</span>
                    </div>
                    <div style={{ width: '280px', height: '35px', fontSize: '15px', display: 'flex', alignItems: 'center', color: '#656481', outline: '2px solid lightgray', fontWeight: '500', border: 'none', borderRadius: '2px', paddingLeft: '5px'}}>
                    {UserData.email}
                    </div>
                    </div>
                </div>
                <div style={{ marginTop: '20px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{ display: 'block'}}>
                <div className='Place_order_title_box'>
                    <span className='Place_order_title_span'>Name:</span>
                    </div>
                    <div>
                    {UserData.name === "" || UserData.name === undefined ?
                      <input onChange={onNameChange} value={NameValue} type='text' style={{ width: '280px', height: '35px', fontSize: '14px', color: '#656481', outline: '2px solid lightgray', fontWeight: '700', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} />
                    :
                    <div style={{ width: '280px', height: '35px', fontSize: '15px', display: 'flex', alignItems: 'center', color: '#656481', outline: '2px solid lightgray', fontWeight: '500', border: 'none', borderRadius: '2px', paddingLeft: '5px'}}>
                    {UserData.name}
                    </div>
                    }
                    </div>
                </div> 
                    
                </div>
                <div style={{ marginTop: '20px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <div style={{ display: 'block'}}>
                  <div className='Place_order_title_box'>
                    <span className='Place_order_title_span'>Last Name:</span>
                    </div>
                    <div>
                    {UserData.lastname === "" || UserData.lastname === undefined ?
                        <input onChange={onLastNameChange} value={LastNameValue} type='text' style={{ width: '280px', height: '35px', fontSize: '14px', color: '#656481', outline: '2px solid lightgray', fontWeight: '700', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} />
                        :
                    <div style={{ width: '280px', height: '35px', fontSize: '15px', display: 'flex', alignItems: 'center', color: '#656481', outline: '2px solid lightgray', fontWeight: '500', border: 'none', borderRadius: '2px', paddingLeft: '5px'}}>
                    {UserData.lastname}
                    </div>
                    }
                    </div>
                  </div> 
                    
                </div>
                <div style={{ marginTop: '20px', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    
                    <div style={{ display: 'block'}}>
                  <div className='Place_order_title_box'>
                    <span className='Place_order_title_span'>Contact nr:</span>
                    </div>
                    <div>
                    {UserData.contact === "" || UserData.contact === undefined ?
                        <input onChange={onContactsChange} value={ContactValue} type='text' style={{ width: '280px', height: '35px', fontSize: '14px', color: '#656481', outline: '2px solid lightgray', fontWeight: '700', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} />
                        :
                    <div style={{ width: '280px', height: '35px', fontSize: '15px', display: 'flex', alignItems: 'center', color: '#656481', outline: '2px solid lightgray', fontWeight: '500', border: 'none', borderRadius: '2px', paddingLeft: '5px'}}>
                    {UserData.contact}
                    </div>
                    }
                    </div>
                  </div> 
                </div>

                <div className='Make_request_mobile_box'>
              <div className='Make_request_text'>
                # MAKE REQUEST means:
              </div>
              <div className='Make_request_text_below'>
                To confirm with the Marketing Band - if they still have the item available.
              </div>
            </div>

                <div className='Order_confirm_button_box'>
                    <button className='Edit_info_button'>
                      <a href='/0settings' style={{width: '100%', height: '100%'}}>
                        <div className='Order_confirm_button_text'>Update Info</div>
                      </a>
                    </button>

                    <button className='Order_confirm_button'>
                      {ShowTotal ? 
                      <div 
                      onClick={() => {ClickOption(); infoPopup()}}
                       className='Order_confirm_button_text'>Confirm Request</div>
                       :
                       <div 
                     className='Order_confirm_button_text'>Confirm Request</div>
                       }
                    
                    </button>
                </div>
                
            </div>

            {ShowSuccess ?
                <div className='Show-success_popup'>
                    <div className='success_popup_box'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ fontSize: '32px',fontWeight: '700', paddingTop: '80px', color: '#02e85a'}}>REQUESTS SUCCESSFUL</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px'}}>
                        <div style={{ width: '130px', height: '35px', background: '#9897A9',borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                              <a href='/request-made' 
                              style={{ width: '100%', height: '100%', display: 'flex', 
                              justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{color: '#fff', fontWeight: '700', fontSize: '15px'}}>View Request</span>
                              </a>
                        </div>
                    </div>
                    </div>
                </div>
                :
                <></>
        }
</>
:
SearchTerms !== "" ?
<div className='Searched_container'>
{
(SearchTerms !== "" && searchResults === true) || (SearchTerms !== "" && searchResults === false) ?
<>
{Products.length === 0 ?
      <div className='Searching-product_box_main'>
        {SearchTerms === "" ? 
        <></>
        :
        <div>
        <span className='Searching-product_title'>Searching for ...</span>
      </div>
        }

      <div style={{ marginTop: '10px'}}>
        <input className='Searching-product_input' type="text" value={SearchTerms} />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '50px'}}>
      <Bars color="#00BFFF" height={200} width={300} />
      </div>
    </div>
:
Products.length !== 0 ?
<div className='Search_result_container'>
<div className='Search_filter_box'>
            <div className='Search_filter_box_title'>
            <span className='Search_filter_box_title_span'>Location</span>
            </div>
            <div className='Filter_location_box'>
              <div className='Searched_filter_loaction_space'>
              <div>
                  {UserData.userLocation === undefined ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>Near Me:</span>
                  :
                  UserData.userLocation === "Windhoek" ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My City:</span>
                  :
                  UserData.userLocation === "" ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>Near Me:</span>
                  :
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My Town:</span>
                  }

                </div>
                {UserData.length === 0 ?
                <div className='Filter_location'>
                <div className="Filter_location_button"><a href='/login' style={{ width: '100%', height: '100%', display: 'flex', 
                 justifyContent: 'center', alignItems: 'center' }}><span style={{color: '#fff', fontSize: '13px', fontWeight: '700'}}>LOGIN</span></a></div>
                </div>
                :
                UserData.length !== 0 & UserData.userLocation === "" ?
                <div className='Filter_location'>
                <div className="Filter_location_button"><a href='/0settings' style={{ width: '100%', height: '100%', display: 'flex', 
                 justifyContent: 'center', alignItems: 'center' }}><span style={{color: '#fff', fontSize: '13px', fontWeight: '700'}}>Select</span></a></div>
                </div>
                :
                <div className='Filter_location'>
                  <button onClick={SetLocation} className={ToggleLocation ? "active-Filter_location_button": "Filter_location_button"}>
                    
                    {ToggleLocation ?
                    <></>
                    :
                    <>select</>
                    }
                  </button>
                  </div>
                }

              </div>
            </div>
          </div>
  <div className='Search_result_right_box'>
      {ToggleLocation === false ?
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {SearchedProducts}
      </div>
      :
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {SearchedLocationProducts}
      </div>
      }
  </div>
</div>
:
<></>
}
</>
:
(SearchTerms !== "" && searchResults === false) || SearchTerms === "" ?
<>
{Products.length === 0 ?
<div className='Searching-product_box_main'>
    {SearchTerms === "" ? 
    <></>
    :
    <div>
    <span className='Searching-product_title'>Searching for ...</span>
  </div>
    }
<div style={{ marginTop: '10px'}}>
<input className='Searching-product_input' type="text" value={SearchTerms} />
</div>
<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '50px'}}>
<Bars color="#00BFFF" height={200} width={300} />
</div>
</div>
:
<></>
}
</>
:
<>

</>
}
</div>
        :
        <></>
  }
    </div>
    )
}

export default CartPage
