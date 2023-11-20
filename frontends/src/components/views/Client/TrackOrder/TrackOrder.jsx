import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import './trackorder.css'
import '../../Main/00Components/pages.css'
import '../../Fulfillment/MainOperations/Pages/MainPages/retailerstyle.css'
import '../../Fulfillment/RegionalPages/style.css'
import TrackImages from './TrackImages'
import { useDispatch } from 'react-redux';
import NoImage from './Images/No_Image.jpg'
import Sidemenu from '../Sidemenu'

import {
  removeOrderItem,
} from '../../../../_actions/user_actions';
import '../sidemenu.css'

function TrackOrder(props) {

      function refreshPage() {
        window.location.reload(false);
      }

  const dispatch = useDispatch();

  const [userHistory, setUserHistory] = useState([])
  const [buyerInfo, setbuyerInfo] = useState([])

  const [IsLoading, setIsLoading] = useState(true)

  const [ShowPreview, setShowPreview] = useState(false)

  const TogglePreview = () => setShowPreview(!ShowPreview)


useEffect(() => {

  setTimeout(() => {
    setIsLoading(false)
  }, 1000);
  
})


useEffect(() => {

  Axios.get('/api/users/getHistory')
  .then(response => {
  if (response.data.success) {
  setUserHistory(response.data.history)
  }
  })

  }, [])

  useEffect(() => {

    Axios.get('/api/users/getUser')
    .then(response => {
        if (response.data.success) {
          setbuyerInfo(response.data.doc);
        }
    })
    
    }, [])

    if (buyerInfo.operateLocation === "Branch"){
      props.history.push("/royal-branch")
      refreshPage()
      } else if (buyerInfo.operateLocation === "Admin") {
        props.history.push(`/0/${buyerInfo._id}`)
        refreshPage()
      }

    const removeFromOrders = (productId) => {
      dispatch(removeOrderItem(productId))
          .then((response) => {
              if (response.payload.history.length <= 0) {
              }
          })
    }

    const TrackedProducts = userHistory.map((user, index) => {
      // let writerHistory = user.writer;
      if (user && (user.orderConfirm === false || user.orderConfirm === true))  {
        return (
          <div key={index} className='TrackOrder_item_box_main'>
              <div className='TrackOrder-item_title_client_main'>
                <span className='TrackOrder_item_title_span_client'>{user.name}</span>
              </div>
          <div className='TrackOrder_item_top_section_box'>
            <div className='TrackOrder_item_image_box_wrap'>
              <TrackImages images={user.imageOne} />
            </div>
  
            <div className='TrackOrder-item_title_box_main'>
              <div className='TrackOrder-item_price-quantity_client_main'>
              <div style={{ display: 'block'}}>
                <div className='Track_Order-item_price_quantity_box_main'>
                              <div>
                                <span className='TrackOrder_item_price_quantity_title_branch_main'>Price:</span>
                              </div>
                              <div className='TrackOrder-item_price-quantity_right_main'>
                                <span className='TrackOrder-item_price-quantity_right_span_branch_main'>N$ {user.price}</span>
                              </div>
                            </div>
  
                            <div className='Track_Order-item_price_quantity_box_main'>
                              <div>
                                <span className='TrackOrder_item_price_quantity_title_branch_main'>Quantity:</span>
                              </div>
                              <div className='TrackOrder-item_price-quantity_right_main'>
                                <span className='TrackOrder-item_price-quantity_right_span_branch_main'>{user.quantity}</span>
                              </div>
                            </div>
              </div>
              </div>
            </div>
          </div>
  
          <div className='TrackOrder_item_status_box_top'>
            <div className='TrackOrder-item_status_types'>
              <div>
                <span className='TrackOrder_item_status_text'>Status:</span>
              </div>
              <div className='TrackOrder-item_status_types_right'>
                <div>
                  {user.orderConfirm === false && user.orderShip === false ?
                  <span className='Tracking_item_delivery_stages_types-span'>waiting confirmation ....</span>
                  :
                  user.orderConfirm === true && user.orderShip === false  ?
                  <span className='Tracking_item_delivery_stages_types-span_shipped'>Item is Available to Pickup.</span>
                  :
                  user.orderShip === true ?
                  <span className='Tracking_item_delivery_stages_types-span_confirmed'>Cancelled by the Retailer.</span>
                  :
                  <></>
                  }
                </div>
              </div>
            </div>
            <div className='TrackOrder-item_delivery_stages_box_User_main'>
              {user.orderConfirm ?
              <div className='TrackOrder-item_delivery_confirmed_User_main'>
                <span className='TrackOrder-item_delivery_stages-active_User_main'>
                Confirmed
                </span>
              </div>
              :
              <div className='TrackOrder_item_delivery_stages_User_main'>
                <span className='TrackOrder-item_delivery_stages_span_User_main'>
                Confirmed
                </span>
              </div>
              }
              {user.orderConfirm ?
              <div className='TrackOrder-item_delivery_delivered_User_main'>
                <span className='TrackOrder-item_delivery_stages-active_User_main'>
                  Pickup Ready
                </span>
              </div>
              :
              <div className='TrackOrder_item_delivery_stages_User_main'>
                <span className='TrackOrder-item_delivery_stages_span_User_main'>
                  Pickup Ready
                </span>
              </div>
              }
              {user.orderShip === true ?
              <div className='TrackOrder-item_delivery_shipped_User_main'>
                <span className='TrackOrder-item_delivery_stages-active_User_main'>
                Cancelled</span>
              </div>
              :
              <div className='TrackOrder_item_delivery_stages_User_main'>
                <span className='TrackOrder-item_delivery_stages_span_User_main'>
                Cancelled</span>
              </div>
              }
    
            </div>
          </div>

          {/* <div className='Track_order_Address_box'>
          <div>
            <div className='Track_order_Address_text_box'>
            <span className='TrackOrder-item_delivery_address_span'>Brand Information</span>
            <div className='Track-Order-item_delivery_address_p_branch'>
            <span>Contact information.</span>
            </div>
          </div> 
          </div>
      
        </div> */}
  
          {/* <div className='Track_order_Address_box'>
            <div>
              <div className='Track_order_Address_text_box'>
              <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
              <div className='Track-Order-item_delivery_address_p_branch'>
              <span>
              {user.storeAddress === undefined ?
            <></>
            :
            user && user.storeAddress === "" ?
            <div style={{ lineHeight: '1.3'}}>
              Update your Address information in Settings.
            </div>
            :
            <div>{user.storeAddress}</div>
            }
              </span>
                  </div>
            </div> 
            </div>
        
          </div> */}
          <div className='Track_order_bottom_box'>
            <div className='Track_order_cancel_buttom_box'>
              <button onClick={() => {removeFromOrders(user.id); refreshPage()}} className='Track_order_cancel_buttom'>End Request</button>
            </div>
          </div>
        </div>
        )
      } 
      else {
         if (user && user.orderConfirm === undefined) {
        // if (user.orderConfirm === undefined || (((user.orderConfirm === undefined || user.orderConfirm === true) && user.orderDelivered === true) && index === 0)) {
          return (
            <div key={index} className='TrackOrder_item_box_main'>
            <div className='TrackOrder-item_title_client_main'>
                  <span className='TrackOrder_item_title_span_client'>
                  This is where the title of the product is shown.
                  </span>
                </div>
            <div className='TrackOrder_item_top_section_box'>
              <div className='TrackOrder_item_image_box_wrap'>
              <img style={{ width: '100%', height: '180px', borderRadius: '7px' }} src={NoImage} alt="" />
              </div>
        
              <div className='TrackOrder-item_title_box_main'>
                      <div className='TrackOrder-item_price-quantity_client_main'>
                        <div style={{ display: 'block'}}>
                        <div className='Track_Order-item_price_quantity_box_main'>
                                      <div>
                                        <span className='TrackOrder_item_price_quantity_title_branch_main'>Price:</span>
                                      </div>
                                      <div className='TrackOrder-item_price-quantity_right_main'>
                                        <span className='TrackOrder-item_price-quantity_right_span_branch_main'>N$ 0.00</span>
                                      </div>
                                    </div>
                                    <div className='Track_Order-item_price_quantity_box_main'>
                                      <div>
                                        <span className='TrackOrder_item_price_quantity_title_branch_main'>Quantity:</span>
                                      </div>
                                      <div className='TrackOrder-item_price-quantity_right_main'>
                                        <span className='TrackOrder-item_price-quantity_right_span_branch_main'>0 units</span>
                                      </div>
                                    </div>
                        </div>
              
                      </div>
                    </div>
            </div>
            <div className='TrackOrder_item_status_box_top'>
              <div className='TrackOrder-item_status_types'>
                <div>
                  <span className='TrackOrder_item_status_text'>Status:</span>
                </div>
                <div className='TrackOrder-item_status_types_right'>
                  <div>
                    <span className='Tracking_item_Empty_stages_types-span'>Enquiry Stages ....</span>
                  </div>
                </div>
              </div>
              <div className='TrackOrder-item_delivery_stages_box_User_main'>
                <div className='TrackOrder_item_delivery_stages_User_main'>
                  <span className='TrackOrder-item_delivery_stages_span_User_main'>
                  Confirmed
                  </span>
                </div>
        
                <div className='TrackOrder_item_delivery_stages_User_main'>
                  <span className='TrackOrder-item_delivery_stages_span_User_main'>
                    Pickup Ready
                  </span>
                </div>
        
                <div className='TrackOrder_item_delivery_stages_User_main'>
                  <span className='TrackOrder-item_delivery_stages_span_User_main'>
                  Cancelled</span>
                </div>    
              </div>
            </div>
            {/* <div className='Track_order_Address_text_box'>
                    <span className='TrackOrder-item_delivery_address_span'>Brand Information</span>
                    <div className='Track-Order-item_delivery_address_p_branch'>
                    <span>Contact information will be shown here.</span>
                    </div>
                  </div>  */}
          <div className='Track_order_bottom_box'>
            <div className='Track_order_cancel_buttom_box'>
              <button className='Track_order_cancel_buttom'>End Request</button>
            </div>
            
          </div>
          </div> 
          )
        }
      }
    })

return (
<div className='TrackOrder-container_main'>
<div className='Trackorder_page_header'>
    <span style={{ fontWeight: '700', fontSize: '30px', color: '#fff'}}>Requests Made</span>
  </div>

  <div className='Trackorder_page_layout'>
  <div className='Client_page_sidebar_box'>
      <div className='Cliet_sidebar_left_box_'>
      <Sidemenu />
      </div>
    </div>
  {userHistory.length === undefined ?
    <></>
    :
    userHistory.length === 0 ?
    <>
   {IsLoading === undefined ?
    <></>
    :
    IsLoading === true ?
    <></>
    :
    <div className='Track_order_listings_container'>
      <div className={ShowPreview === false ? "Client_preview_toggle" : "Client_preview_toggle_hide"}>
      <div style={{ display: 'block', marginTop: '40px'}}>
        <div style={{ width: '100%', height: '270px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '7px'}}>
                      <a>
                        <img style={{ width: '300px', height: '250px'}} src="https://i.imgur.com/Mil490M.jpg" alt="" />
                      </a>
                    </div>
                    
                    <div style={{ marginTop: '30px'}}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <span style={{ fontWeight: '600', fontSize: '14px', color: '#3E3D53'}}>No Request Made</span>
                        </div>
                     </div>
        </div>

        <div className='Client_preview_box'>
          <button className='Client_preview_button' onClick={TogglePreview}>Preview</button>
        </div>
    </div>

    <div className={ShowPreview === true ? "Client_preview_toggle" : "Client_preview_toggle_hide"}>
    <div className='TrackOrder_item_box_main'>
    <div className='TrackOrder-item_title_client_main'>
          <span className='TrackOrder_item_title_span_client'>
          This is where the title of the product is shown.
          </span>
        </div>
    <div className='TrackOrder_item_top_section_box'>
      <div className='TrackOrder_item_image_box_wrap'>
      <img style={{ width: '100%', height: '180px', borderRadius: '7px' }} src={NoImage} alt="" />
      </div>

      <div className='TrackOrder-item_title_box_main'>
              <div className='TrackOrder-item_price-quantity_client_main'>
                <div style={{ display: 'block'}}>
                <div className='Track_Order-item_price_quantity_box_main'>
                              <div>
                                <span className='TrackOrder_item_price_quantity_title_branch_main'>Price:</span>
                              </div>
                              <div className='TrackOrder-item_price-quantity_right_main'>
                                <span className='TrackOrder-item_price-quantity_right_span_branch_main'>N$ 0.00</span>
                              </div>
                            </div>
                            <div className='Track_Order-item_price_quantity_box_main'>
                              <div>
                                <span className='TrackOrder_item_price_quantity_title_branch_main'>Quantity:</span>
                              </div>
                              <div className='TrackOrder-item_price-quantity_right_main'>
                                <span className='TrackOrder-item_price-quantity_right_span_branch_main'>0 units</span>
                              </div>
                            </div>
                </div>
      
              </div>
            </div>
    </div>
    <div className='TrackOrder_item_status_box_top'>
      <div className='TrackOrder-item_status_types'>
        <div>
          <span className='TrackOrder_item_status_text'>Status:</span>
        </div>
        <div className='TrackOrder-item_status_types_right'>
          <div>
            <span className='Tracking_item_Empty_stages_types-span'>Enquiry Stages ....</span>
          </div>
        </div>
      </div>
      <div className='TrackOrder-item_delivery_stages_box_User_main'>
        <div className='TrackOrder_item_delivery_stages_User_main'>
          <span className='TrackOrder-item_delivery_stages_span_User_main'>
          Confirmed
          </span>
        </div>

        <div className='TrackOrder_item_delivery_stages_User_main'>
          <span className='TrackOrder-item_delivery_stages_span_User_main'>
            Pickup Ready
          </span>
        </div>

        <div className='TrackOrder_item_delivery_stages_User_main'>
          <span className='TrackOrder-item_delivery_stages_span_User_main'>
          Cancelled</span>
        </div>    
      </div>
    </div>
    {/* <div className='Track_order_Address_text_box'>
            <span className='TrackOrder-item_delivery_address_span'>Brand Information</span>
            <div className='Track-Order-item_delivery_address_p_branch'>
            <span>Contact information will be shown here.</span>
            </div>
          </div>  */}
  <div className='Track_order_bottom_box'>
    <div className='Track_order_cancel_buttom_box'>
      <button className='Track_order_cancel_buttom'>End Request</button>
    </div>
    
  </div>
  </div> 

  <div className='Client_preview_box'>
          <button className='Client_preview_button' onClick={TogglePreview}>Back</button>
        </div>

    </div>

</div>
}
</>
  :
  userHistory.length !== undefined && userHistory.length !== 0 ?
  <>
  {IsLoading === undefined ?
    <></>
    :
    IsLoading === true ?
    <></>
    :
    <div className='Track_order_listings_container'>
    {TrackedProducts}
    </div>
  }
  </>

  :
  <></>
    }
  </div>


</div>
)
}

export default TrackOrder