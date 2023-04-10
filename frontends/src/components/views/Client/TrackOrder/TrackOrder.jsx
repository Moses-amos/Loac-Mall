import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import './trackorder.css'
import TrackImages from './TrackImages'
import { useDispatch } from 'react-redux';
import CompanyImage from '../../../assets/CompanyImage';
import NoImage from './Images/No_Image.jpg'

import {
  removeOrderItem,
} from '../../../../_actions/user_actions';

function TrackOrder(props) {

      function refreshPage() {
        window.location.reload(false);
      }

  const dispatch = useDispatch();

  const [userHistory, setUserHistory] = useState([])
  const [buyerInfo, setbuyerInfo] = useState([])
// const [clientIssue, setclientIssue] = useState(false)

// const showIssue = () => setclientIssue(!clientIssue)

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
    if (user.orderDelivered === false) {
      return (
        <div key={index} className='TrackOrder-item_box'>
        <div className='TrackOrder-item_top_section'>
          <div className='TrackOrder-item_image_box'>
            <TrackImages images={user.images} />
          </div>

          <div className='TrackOrder-item_title_box'>
            <div className='TrackOrder-item_title_client'>
              <span className='TrackOrder-item_title_span_client'>{user.name}</span>
            </div>
            <div className='TrackOrder-item_price-quantity_client'>
              <div className='Track_Order-item_price_box'>
                            <div>
                              <span className='TrackOrder-item_price-quantity_title_branch'>Price: </span>
                            </div>
                            <div className='TrackOrder-item_price-quantity_right'>
                              <span className='TrackOrder-item_price-quantity_right_span_branch'>N$ {user.price}</span>
                            </div>
                          </div>
                          <div className='Track_Order-item_quantity_box'>
                            <div>
                              <span className='TrackOrder-item_price-quantity_title_branch'>Quantity: </span>
                            </div>
                            <div className='TrackOrder-item_price-quantity_right'>
                              <span className='TrackOrder-item_price-quantity_right_span_branch'>{user.quantity}</span>
                            </div>
                          </div>
            </div>
            <div style={{ display: 'flex',
             justifyContent: 'center', marginTop: '25px'}}>
                <div className='SavePercent'>
                  <span className='Percent-Deal_span_overview'>{user.warrenty}</span>
                </div>
             </div>
          </div>

        <div style={{ paddingLeft: '20px', width: '310px'}}>
        <div>
        <div style={{ display: 'flex', justifyContent: 'right'}}>
        <button 
        onClick={() => {removeFromOrders(user.id); refreshPage()}}
        style={{ fontSize: '11px', padding: '0px 10px', cursor: 'pointer',
         borderRadius: '5px', fontWeight: '700', background: '#c25be9', color: '#fff',
          border: '2px solid #1380e7',
         outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>CANCEL ORDER</button>
      </div>
      {/* <button style={{ fontSize: '10px', padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', fontWeight: 'bolder', background: '#c25be9', color: '#fff', border: '2px solid #1380e7',
         outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}} 
         onClick={() => {removeFromOrders(user.id); refreshPage()}}>CANCEL</button> */}
          <div className='Track_order_delivery_box'>
          <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
          <div className='Track-Order-item_delivery_address_p_branch'>
          <span >Store Location Address:</span>
          <div style={{ display: 'flex', marginTop: '2px'}}>
          {user.storeAddress === undefined ?
          <></>
          :
          user && user.storeAddress === "" ?
          <div style={{ lineHeight: '1.3'}}>
            Pending Confirmation
          </div>
          :
          <div>{user.storeAddress}</div>
          }
            </div>
              </div>
        </div> 
        {user.retailerImage === undefined ?
                  <></>
              :
        <div className='Track_Item_Retailer'>
        <CompanyImage retailerImage={user.retailerImage} />
        </div>
}
        </div>

      </div>
        </div>
        <div className='TrackOrder-item_status_box'>
          <div className='TrackOrder-item_status_types'>
            <div>
              <span className='TrackOrder-item_status_span'>Status:</span>
            </div>
            <div className='TrackOrder-item_status_types_right'>
              <div>
                {user.orderConfirm === false && user.orderShip === false ?
                <span className='TrackOrder-item_delivery_stages_types-span'>waiting confirmation ....</span>
                :
                user.orderConfirm === true && user.orderShip === false  ?
                <span className='TrackOrder-item_delivery_stages_types-span_shipped'>Item is Ready for Pickup. Thank You for Shopping.</span>
                :
                user.orderShip === true ?
                <span className='TrackOrder-item_delivery_stages_types-span_confirmed'>This order has been Cancelled by the Retailer.</span>
                :
                <></>
                }
              </div>
            </div>
          </div>
          <div className='TrackOrder-item_delivery_stages_box_User'>
            {user.orderConfirm ?
            <div className='TrackOrder-item_delivery_confirmed_User'>
              <span className='TrackOrder-item_delivery_stages-active_User'>
                Order Confirmed
              </span>
            </div>
            :
            <div className='TrackOrder-item_delivery_stages_User'>
              <span className='TrackOrder-item_delivery_stages_span_User'>
                Order Confirmed
              </span>
            </div>
            }
            {user.orderConfirm ?
            <div className='TrackOrder-item_delivery_delivered_User'>
              <span className='TrackOrder-item_delivery_stages-active'>
                Ready For Pickup
              </span>
            </div>
            :
            <div className='TrackOrder-item_delivery_stages_User'>
              <span className='TrackOrder-item_delivery_stages_span_User'>
                Ready For Pickup
              </span>
            </div>
            }
            {user.orderShip === true ?
            <div className='TrackOrder-item_delivery_shipped_User'>
              <span className='TrackOrder-item_delivery_stages-active'>
                Order Cancelled</span>
            </div>
            :
            <div className='TrackOrder-item_delivery_stages_User'>
              <span className='TrackOrder-item_delivery_stages_span_User'>
                Order Cancelled</span>
            </div>
            }
  
          </div>
        </div>
      </div>
      )
    } else {
      if (user.orderConfirm === undefined || (((user.orderConfirm === undefined || user.orderConfirm === true) && user.orderDelivered === true) && index === 0)) {
        return (
          <div key={index} className='TrackOrder-item_box'>
          <div className='TrackOrder-item_top_section'>
            <div className='TrackOrder-item_image_box'>
            <img style={{ width: '100%', height: '200px' }} src={NoImage} alt="" />
            </div>
  
            <div className='TrackOrder-item_title_box'>
              <div className='TrackOrder-item_title_client'>
                <span className='TrackOrder-item_title_span_client'>
                This is where the Title of the product is shown.
                </span>
              </div>
              <div className='TrackOrder-item_price-quantity_client'>
                <div className='Track_Order-item_price_box'>
                              <div>
                                <span className='TrackOrder-item_price-quantity_title_branch'>Price: </span>
                              </div>
                              <div className='TrackOrder-item_price-quantity_right'>
                                <span className='TrackOrder-item_price-quantity_right_span_branch'>N$ XXXX.XX</span>
                              </div>
                            </div>
                            <div className='Track_Order-item_quantity_box'>
                              <div>
                                <span className='TrackOrder-item_price-quantity_title_branch'>Quantity: </span>
                              </div>
                              <div className='TrackOrder-item_price-quantity_right'>
                                <span className='TrackOrder-item_price-quantity_right_span_branch'>X</span>
                              </div>
                            </div>
              </div>
              <div style={{ display: 'flex',
               justifyContent: 'center', marginTop: '25px'}}>
                  <div className='SavePercent'>
                    <span className='Percent-Deal_span_overview'>This part shows the Warrenty offered</span>
                  </div>
               </div>
            </div>
  
          <div style={{ paddingLeft: '20px', width: '310px'}}>
          <div>
          <div style={{ display: 'flex', justifyContent: 'right'}}>
          <button 
          style={{ fontSize: '11px', padding: '0px 10px', cursor: 'pointer',
           borderRadius: '5px', fontWeight: '700', background: '#c25be9', color: '#fff',
            border: '2px solid #1380e7',
           outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>CANCEL ORDER</button>
        </div>
        {/* <button style={{ fontSize: '10px', padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', fontWeight: 'bolder', background: '#c25be9', color: '#fff', border: '2px solid #1380e7',
           outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}} 
           onClick={() => {removeFromOrders(user.id); refreshPage()}}>CANCEL</button> */}
            <div className='Track_order_delivery_box'>
            <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
            <div className='Track-Order-item_delivery_address_p_branch'>
            <span >Store Location Address:</span>
                </div>
          </div> 
          <div className='Track_Item_Retailer'>
          <img style={{ width: '92px', height: '42px' }} src={NoImage} alt="" />
          </div>

          </div>
  
        </div>
          </div>
          <div className='TrackOrder-item_status_box'>
            <div className='TrackOrder-item_status_types'>
              <div>
                <span className='TrackOrder-item_status_span'>Status:</span>
              </div>
              <div className='TrackOrder-item_status_types_right'>
                <div>
                  <span className='TrackOrder-item_Empty_stages_types-span'>Transaction Stages will be shown here ....</span>
                </div>
              </div>
            </div>
            <div className='TrackOrder-item_delivery_stages_box_User'>
              <div className='TrackOrder-item_delivery_stages_User'>
                <span className='TrackOrder-item_delivery_stages_span_User'>
                  Order Confirmed
                </span>
              </div>

              <div className='TrackOrder-item_delivery_stages_User'>
                <span className='TrackOrder-item_delivery_stages_span_User'>
                  Ready For Pickup
                </span>
              </div>

              <div className='TrackOrder-item_delivery_stages_User'>
                <span className='TrackOrder-item_delivery_stages_span_User'>
                  Order Cancelled</span>
              </div>    
            </div>
          </div>
        </div>
        )
      }
    }
  })

return (
<div className='TrackOrder-container'>
<div style={{ width: '100%', borderRadius: '5px', marginTop: '10px',border: '2px solid #00BFFF', padding: '0px 0px 3px 0px',
  display: 'flex', justifyContent: 'center', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)'}}>
    <span style={{ fontWeight: '700', fontSize: '35px', color: '#1380e7'}}>Track Your Orders</span>
  </div>

  {userHistory.length === undefined ?
    <></>
    :
    userHistory.length === 0 ?
    <div className='TrackOrder-item_box'>
    <div className='TrackOrder-item_top_section'>
      <div className='TrackOrder-item_image_box'>
      <img style={{ width: '100%', height: '200px' }} src={NoImage} alt="" />
      </div>

      <div className='TrackOrder-item_title_box'>
        <div className='TrackOrder-item_title_client'>
          <span className='TrackOrder-item_title_span_client'>
          This is where the Title of the product is shown.
          </span>
        </div>
        <div className='TrackOrder-item_price-quantity_client'>
          <div className='Track_Order-item_price_box'>
                        <div>
                          <span className='TrackOrder-item_price-quantity_title_branch'>Price: </span>
                        </div>
                        <div className='TrackOrder-item_price-quantity_right'>
                          <span className='TrackOrder-item_price-quantity_right_span_branch'>N$ XXXX.XX</span>
                        </div>
                      </div>
                      <div className='Track_Order-item_quantity_box'>
                        <div>
                          <span className='TrackOrder-item_price-quantity_title_branch'>Quantity: </span>
                        </div>
                        <div className='TrackOrder-item_price-quantity_right'>
                          <span className='TrackOrder-item_price-quantity_right_span_branch'>X</span>
                        </div>
                      </div>
        </div>
        <div style={{ display: 'flex',
         justifyContent: 'center', marginTop: '25px'}}>
            <div className='SavePercent'>
              <span className='Percent-Deal_span_overview'>This part shows the Warrenty offered</span>
            </div>
         </div>
      </div>

    <div style={{ paddingLeft: '20px', width: '310px'}}>
    <div>
    <div style={{ display: 'flex', justifyContent: 'right'}}>
    <button 
    style={{ fontSize: '11px', padding: '0px 10px', cursor: 'pointer',
     borderRadius: '5px', fontWeight: '700', background: '#c25be9', color: '#fff',
      border: '2px solid #1380e7',
     outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>CANCEL ORDER</button>
  </div>
  {/* <button style={{ fontSize: '10px', padding: '2px 10px', cursor: 'pointer', borderRadius: '5px', fontWeight: 'bolder', background: '#c25be9', color: '#fff', border: '2px solid #1380e7',
     outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}} 
     onClick={() => {removeFromOrders(user.id); refreshPage()}}>CANCEL</button> */}
      <div className='Track_order_delivery_box'>
      <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
      <div className='Track-Order-item_delivery_address_p_branch'>
      <span >Store Location Address:</span>
          </div>
    </div> 
    <div className='Track_Item_Retailer'>
    <img style={{ width: '92px', height: '42px' }} src={NoImage} alt="" />
    </div>

    </div>

  </div>
    </div>
    <div className='TrackOrder-item_status_box'>
      <div className='TrackOrder-item_status_types'>
        <div>
          <span className='TrackOrder-item_status_span'>Status:</span>
        </div>
        <div className='TrackOrder-item_status_types_right'>
          <div>
            <span className='TrackOrder-item_Empty_stages_types-span'>Transaction Stages will be shown here ....</span>
          </div>
        </div>
      </div>
      <div className='TrackOrder-item_delivery_stages_box_User'>
        <div className='TrackOrder-item_delivery_stages_User'>
          <span className='TrackOrder-item_delivery_stages_span_User'>
            Order Confirmed
          </span>
        </div>

        <div className='TrackOrder-item_delivery_stages_User'>
          <span className='TrackOrder-item_delivery_stages_span_User'>
            Ready For Pickup
          </span>
        </div>

        <div className='TrackOrder-item_delivery_stages_User'>
          <span className='TrackOrder-item_delivery_stages_span_User'>
            Order Cancelled</span>
        </div>    
      </div>
    </div>
  </div>
  :
  userHistory.length !== undefined && userHistory.length !== 0 ?
  <>
  {TrackedProducts}
  </>

  :
  <></>
    }
</div>
)
}

export default TrackOrder