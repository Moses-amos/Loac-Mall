import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';

import {
    getCartItems,
    removeCartItem,
    addToCart,
    addToWishlist,
    onSuccessBuy
} from '../../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';
// import { Result } from 'antd';
import Axios from 'axios';
// import PurchaseBrands from './Sections/PurchaseBrands';
// import TextareaAutosize from 'react-textarea-autosize';
// import Paypal from '../../../utils/Paypal';
import './cartpage.css'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
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
          
          const [Skip, setSkip] = useState(0)
          const [Limit, setLimit] = useState(8)
          const [PostSize, setPostSize] = useState()
          const [SearchTerms, setSearchTerms] = useState("")
          const [searchResults, setSearchResults] = useState(false)
        //   const [confirmMethod, setconfirmMethod] = useState(false)
          
          const clickSearch = () => setSearchResults(!searchResults)
        //   const confirmButtonColor = () => setconfirmMethod(!confirmMethod)
          
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
          
          const updateSearchTerms = (newSearchTerm) => {
          
          const variables = {
          skip: 0,
          limit: Limit,
          filters: Filters,
          searchTerm: newSearchTerm
          }
          
          setSkip(0)
          setSearchTerms(newSearchTerm)
          
          getProducts(variables)
          }

    // useEffect(() => {

    //     const DeliveryFunction = async () => {

    //     const DeliveryMethod = {
    //         storePickup: showPickup
    //     }
    //     const response = await Axios.post("/api/users/setRole", DeliveryMethod);
    //         if(response.data.success) {
    //             setSavedAddress(response.data.doc.address)
    //         }
    //     }

    //     DeliveryFunction()
    // }, [showPickup])


    const ClickOption = () => {

        const variables = {
            storePickup: showPickup,
            // address: AddressValue,
            contact: ContactValue,
            name: NameValue,
            lastname: LastNameValue
            }

            if (ContactValue === "" || NameValue === "" || LastNameValue === "") {

                } else if (ContactValue !== "" && NameValue !== "" && LastNameValue !== "") {
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
        
        const addToWishlistHandler = (productId) => {
        dispatch(addToWishlist(productId))
        }

    // const transactionSuccess = () => {
    //     dispatch(onSuccessBuy({
    //         cartDetail: props.user.cartDetail,
    //         // paymentData: data
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
  <SearchBar showResults={clickSearch} refreshFunction={updateSearchTerms} />
  {SearchTerms === "" ?
<div className='CartPage_details'>
  {UserData && UserData.userLocation === undefined  ?
  <></>
  :
  UserData && UserData.userLocation === "" ?
  <div className='CartPage_details-checkout_branch'>
  <span className='CartPage_checkout_span'>Select Location</span>  
</div>
:
UserData && UserData.userLocation === "Windhoek" || UserData && UserData.userLocation === "KatimaMulilo" ||
    UserData && UserData.userLocation === "Swakop" || UserData && UserData.userLocation === "Walvis" 
     || UserData && UserData.userLocation === "Oshakati" || UserData && UserData.userLocation === "Grootfontein" ||
     UserData && UserData.userLocation === "Rundu" || UserData && UserData.userLocation === "Otjiwarongo" ||
     UserData && UserData.userLocation === "Ongwediva" || UserData && UserData.userLocation === "Okahandja" 
     || UserData && UserData.userLocation === "Gobabis" || UserData && UserData.userLocation === "Rehoboth"
     || UserData && UserData.userLocation === "Tsumeb"  ?
<div className='CartPage_details-checkout_branch'>
      <span className='CartPage_checkout_span'>CHECKOUT ORDER</span>  
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
    <div className='Cartpage_location_select'>
    <div className='UserLocations_box'>
    <div className='UserLocations_title'>
        <span>Which Town/City are you in or which is close to you?</span>
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
     <div style={{ position: 'relative'}}>
     <UserCardBlock
         products={props.user.cartDetail}
         removeItem={removeFromCart}
         addToCart={addToCartHandler}
         addToWishlist={addToWishlistHandler}
     />
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
                <span className='Delivery-title_span'>Delivery Options</span>
            </div>
            <div className='Delivery-options_box'>
                {/* <div className='Deliver-address-store_box'>
                    <div className='Deliver-address-store_select'>
                         <span className='Deliver-address-store_span_left'>Deliver to Address</span>
                         <span className='Deliver-address-store_span_right'>
                            <button className={showPickup? "Deliver-address-store_right_button" : "active-Deliver-address-store_right_button"}
                            onClick={()=>setShowPickup(false)}
                            />
                         </span>
                    </div>
        <div className={showPickup ? 'DeliverAddress' : 'DeliverAddress-show'}>
            {SavedAddress ?
            <>
        <div className={showAddress ? 'DeliverAddress-given' : 'DeliverAddress-given-show'}>
        <div className='DeliverAddress-edit_box'>
        <div className='DeliverAddress-edit_titles'>
            <span className='Deliver-address-contact_span'>Address:</span>
        </div>
        <div className='DeliverAddress-edit_input'>
            <div className='Deliver-address-contact_inputs-filled'>
                {UserData.address}
            </div>
        </div>
    </div>
    <div className='DeliverAddress-edit_box'>
        <div className='DeliverAddress-edit_titles'>
            <span className='Deliver-address-contact_span'>Contact nr:</span>
        </div>
        <div className='DeliverAddress-edit_input'>
            <div className='Deliver-address-contact_inputs-filled'>
            {UserData.contact}
            </div>
        </div>
        <div className='Deliver-address-contact_edit_button_box'>
    <button className='Deliver-address-contact_edit_button' onClick={()=>setshowAddress(true)}>Edit</button>
    </div>
    </div>
       </div>
    <div className={showAddress ? 'DeliverAddress-edit-show' : 'DeliverAddress-edit'}>
    <div className='DeliverAddress-edit_box'>
        <div className='DeliverAddress-edit_titles'>
            <span className='Deliver-address-contact_span'>Address:</span>
        </div>
        <div className='DeliverAddress-edit_input'>
            <div className='Deliver-address-contact_inputs'>
                <TextareaAutosize onChange={onAddressChange} value={AddressValue} minRows={4} border={0} maxLength={100} style={{ width: '180px', fontSize: '13px', border: 'none', fontWeight: '400', outline: 'none', paddingLeft: '5px'}} />
            </div>
        </div>
    </div>
    <div className='DeliverAddress-edit_box'>
        <div className='DeliverAddress-edit_titles'>
            <span className='Deliver-address-contact_span'>Contact nr:</span>
        </div>
        <div className='DeliverAddress-edit_input'>
            <div className='Deliver-address-contact_inputs'>
            <input onChange={onContactsChange} value={ContactValue} maxLength={15} style={{ width: '130px', border: 'none', outline: 'none', paddingLeft: '10px', fontWeight: '400'}}  type='text' />
            </div>
        </div>
        <div className='Deliver-address-contact_edit_button_box'>
    <button className='Deliver-address-contact_edit_button' onClick={()=>setshowAddress(false)}>Back</button>
    </div>
    </div>
    </div>
    </>
            :
            <div className='DeliverAddress-edit-show'>
    <div className='DeliverAddress-edit_box'>
        <div className='DeliverAddress-edit_titles'>
            <span className='Deliver-address-contact_span'>Address:</span>
        </div>
        <div className='DeliverAddress-edit_input'>
            <div className='Deliver-address-contact_inputs'>
                <TextareaAutosize onChange={onAddressChange} value={AddressValue} minRows={4} border={0} maxLength={100} style={{ width: '180px', fontSize: '13px', border: 'none', fontWeight: '400', outline: 'none', paddingLeft: '5px'}} />
            </div>
        </div>
    </div>
    <div className='DeliverAddress-edit_box'>
        <div className='DeliverAddress-edit_titles'>
            <span className='Deliver-address-contact_span'>Contact nr:</span>
        </div>
        <div className='DeliverAddress-edit_input'>
            <div className='Deliver-address-contact_inputs'>
            <input onChange={onContactsChange} maxLength={15} style={{ width: '130px', border: 'none', outline: 'none', paddingLeft: '10px', fontWeight: '400'}} value={ContactValue} type='text' />
            </div>
        </div>
    </div>
            </div>
            }

        </div>
                </div> */}
                <div className='Deliver-address-store-store_box'>
                    <div className='Deliver-address-store_select_client'>
                      <div style={{ paddingTop: '4px'}}>
                        <span className='Deliver-address-store_span_left'>Pick up in Store</span>
                      </div>
                      <div style={{ display: 'flex'}}>
                        <div className='Deliver-address-store_span_right_client'>
                        <button className={showPickup? "active-Deliver-address-store_right_button" : "Deliver-address-store_right_button"}
                        onClick={()=>setShowPickup(true)}></button>
                        </div>
                      </div>

                    </div>
                    <div className='Deliver-address-store_select_client'>
                      <div style={{ paddingTop: '4px'}}>
                        <span className='Deliver-address-store_span_left'>To Address (not available)</span>
                      </div>
                      <div style={{ display: 'flex'}}>
                        <div className='Deliver-address-store_span_right_client'>
                        <button className="Deliver-address-store_right_button">
                        </button>
                        </div>
                      </div>

                    </div>
                    {/* <div className='Deliver-address-store_select'>
                        <span className='Deliver-address-store_span_left'>To Address (not available)</span>
                        <span className='Deliver-address-store_span_right'>
                        <button className="Deliver-address-store_right_button">
                        </button>
                        </span>
                    </div> */}
                    {/* <div className={showPickup ? 'PickupLocation-show' : 'PickupLocation'}>
                        {UserData.userLocation === "Windhoek" ?
                        <>
                         <span className='PickupLocation_span_p'>Pick up at:</span>
                         <p className='PickupLocation_span_p'>Royal Computers Windhoek, Shop 22 Windhoek Park City Center</p>
                        </>
                        :
                        UserData.userLocation === "KatimaMulilo" ? 
                        <>
                         <span className='PickupLocation_span_p'>Pick up at:</span>
                         <p className='PickupLocation_span_p'>Royal Computers Windhoek, Shop 256 Ground Floor, The KatimaMulilo Mall</p>
                        </>
                        :
                        UserData.userLocation === "Swakop" ? 
                        <>
                         <span className='PickupLocation_span_p'>Pick up at:</span>
                         <p className='PickupLocation_span_p'>Royal Computers Swakopmund, Shop 3 Minette Court, Sam Nujoma Street</p>
                        </>
                        :
                        UserData.userLocation === "Walvis" ? 
                        <>
                         <span className='PickupLocation_span_p'>Pick up at:</span>
                         <p className='PickupLocation_span_p'>Royal Computers Walvis Bay, Shop C Blueline Building, 111 Hage Geingob</p>
                        </>
                        :
                        UserData.userLocation === "Oshakati" ? 
                        <>
                         <span className='PickupLocation_span_p'>Pick up at:</span>
                         <p className='PickupLocation_span_p'>Royal Computers Oshakati, Shop 42 Etango Complex, Okatana Main Road</p>
                        </>
                        :
                        <>
                        <span className='PickupLocation_span_p'>Select Royal Computers Branch close to you </span>
                        </>
                        }
                    </div> */}
                </div>
            </div>
            {/* <PurchaseBrands products={props.user.cartDetail} /> */}
            <div className='Payment-info_box'>
            {/* <div style={{ marginTop: '10px', display: 'flex'}}>
                <div>
                    <button className={confirmMethod ? "saveDeliveryOtionButton_confirm": "saveDeliveryOtionButton"} onClick={() => {confirmButtonColor(); ClickOption()}}>
                        {confirmMethod === false ?
                        <span>Confirm</span>
                        :
                        <span>Confirmed</span>
                        }
                    </button>
                </div>
                <div>
                    {showPickup === true?
                    <div style={{ paddingTop: '4px'}}>
                    <span className='saveDeliveryOtionButton_confirm_span'>Store Pickup</span>
                    </div>

                    :
                    showPickup === false ?
                    <div style={{ paddingTop: '5px'}}>
                    <span className='saveDeliveryOtionButton_confirm_span'>Deliver To Address</span>
                    </div>
                    :
                    <></>
                    }
                </div>
                </div> */}

            <div className='Payment-total'>
                <h2 className='Payment-total_h3'>Total Cost : N$ {Total} </h2>
            </div>
            
            {ShowSuccess ?
                <div className='Show-success_popup'>
                    <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <span style={{ fontSize: '32px',fontWeight: '700', paddingTop: '80px', color: '#02e85a'}}>ORDER SUCCESSFULLY MADE</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '15px'}}>
                        <div style={{ width: '130px', height: '35px', background: '#9897A9',borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                              <a href='/track-order' 
                              style={{ width: '100%', height: '100%', display: 'flex', 
                              justifyContent: 'center', alignItems: 'center' }}>
                                <span style={{color: '#fff', fontWeight: '700', fontSize: '15px'}}>Track Order</span>
                              </a>
                        </div>
                    </div>
                    </div>
                </div>
                :
                <></>
        }

        <div className="Paypal_button">
    {/* Paypal Button */}

    {ShowTotal &&
        <div>
            <div style={{ position: 'relative',
             display: 'flex', justifyContent: 'center',
              marginRight: '20px'}}>
        <button 
        onClick={infoPopup}
style={{ width: '280px' , cursor: 'pointer', height: '40px', display: 'flex', fontWeight: '700', 
outline: 'none',border: 'none', borderRadius: '7px', fontSize: '18px',
color: '#fff', justifyContent: 'center', alignItems: 'center',
 background: 'orange'}}>
    Pay In Store On Pickup</button>
            </div>
            <div className={showPopup? "Show-info_details" : "Show-info_details-hide"}>
            <div style={{ width: '100%', padding: '0px 5px 0px 0px', display: 'flex', alignItems: 'center', justifyContent: 'right'}}>
                    <div >
                    <span onClick={infoPopup} style={{ cursor: 'pointer',fontSize: '20px', color: '#74767c'}}>X</span>
                    </div>
                </div>
            <div style={{ width: '100%', padding: '0px 10px 5px 10px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <div>
                    <span style={{ fontSize: '25px', fontWeight: 'bolder', color: '#74767c'}}>Order Placement Information</span>
                    </div>
                </div>
                <div style={{ marginTop: '20px'}}>
                    <div>
                    <span style={{ fontSize: '18px', fontWeight: 'bolder', color: '#9897A9'}}>Email:</span>
                    </div>
                    <div style={{ width: '300px', height: '35px', fontSize: '14px', display: 'flex', alignItems: 'center', color: '#656481', outline: '2px solid orange', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}}>
                    {UserData.email}
                    </div>
                </div>
                <div style={{ marginTop: '20px'}}>
                    <div >
                    <span style={{ fontSize: '18px', fontWeight: 'bolder', color: '#9897A9'}}>Name:</span>
                    </div>
                    <div>
                        <input onChange={onNameChange} value={NameValue} type='text' style={{ width: '300px', height: '35px', fontSize: '13px', color: '#656481', outline: '2px solid orange', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} />
                    </div>
                </div>
                <div style={{ marginTop: '20px'}}>
                    <div >
                    <span style={{ fontSize: '18px', fontWeight: 'bolder', color: '#9897A9'}}>Last Name:</span>
                    </div>
                    <div>
                        <input onChange={onLastNameChange} value={LastNameValue} type='text' style={{ width: '300px', height: '35px', fontSize: '13px', color: '#656481', outline: '2px solid orange', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} />
                    </div>
                </div>
                <div style={{ marginTop: '20px'}}>
                    <div >
                    <span style={{ fontSize: '18px', fontWeight: 'bolder', color: '#9897A9'}}>Contact nr:</span>
                    </div>
                    <div>
                        <input onChange={onContactsChange} value={ContactValue} type='text' style={{ width: '300px', height: '35px', fontSize: '13px', color: '#656481', outline: '2px solid orange', fontWeight: 'bolder', border: 'none', borderRadius: '2px', paddingLeft: '5px'}} />
                    </div>
                </div>
                <div style={{ width: '100%', padding: '10px 30px 5px 10px', display: 'flex', alignItems: 'center', justifyContent: 'right'}}>
                    <button style={{ cursor: 'pointer',width: '170px', height: '40px', boxShadow: '3px 3px 3px #03C04A', background: 'cyan', borderRadius: '10px', outline: 'none', border: 'none'}}>
                    <div onClick={() => {ClickOption(); infoPopup()}} style={{ fontSize: '18px', fontWeight: 'bolder', color: '#fff', width: '100%', height: '100%', paddingTop: '7px'}}>CONFIRM ORDER</div>
                    </button>
                </div>
                
            </div>

    </div>
    }
            </div>
                </div>
        </div>
        :
        <></>
        }


    </div>
</div>
:
SearchTerms !== "" ?
<div className='listings-container'>
{
(SearchTerms !== "" && searchResults === true) || (SearchTerms !== "" && searchResults === false) ?
<>
{Products.length === 0 ?
      <div className='Searching-product_box'>
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
<div style={{ display: 'flex', padding: '20px 0px 60px 0px'}}>
<div style={{ minWidth: '280px', height: '450px',marginLeft: '15px', borderRadius: '5px', padding: '10px 15px', border: '2px solid #c5cbd5'}}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', borderBottom: '1px solid #5a596a'}}>
            <span style={{ fontSize: '22px', fontWeight: '700', color: '#070606'}}>Filter Search</span>
            </div>
            <div style={{ width: '100%', paddingTop: '30px', display: 'block'}}>
              <div style={{ display: 'flex'}}>
                <div>
                <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My Town/City:</span>
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
  <div style={{ marginLeft: '20px'}}>
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
<div className='Searching-product_box'>
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
