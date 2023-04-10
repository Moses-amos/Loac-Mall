import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import './overview.css'
import OverviewImages from './OverviewImages'
import NoImage from '../TrackOrder/Images/No_Image.jpg'

function Overview(props) {

const [userHistory, setUserHistory] = useState([])
const [clientIssue, setclientIssue] = useState()
const [buyerInfo, setbuyerInfo] = useState([])

function refreshPage() {
  window.location.reload(false);
}

const showIssue = () => setclientIssue(!clientIssue)

useEffect(() => {

Axios.get('/api/users/getHistory')
.then(response => {
if (response.data.success) {
setUserHistory(response.data.history)
}
})

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


 const UserHistoryRender = userHistory.map((user, index) => {
  if (user.orderDelivered === true ) {
    return (
      <div key={index} className='Listed-product-Details'>
      <div className='Listed-product_top_section'>
        <div className='Listed-product_top_section-left'>
          <div style={{ width: '100%', height: '100%'}}>
            <OverviewImages images={user.images} />
          </div>
        </div>
        <div className='Listed-product_top_section-right'>
          <div>
            <ul style={{ display: 'block', width: '100%'}}>
            {/* <li className='Listed-product-li'>
              <div className='Listed-product-li_left'>Date of Purchase:</div>
              <div className='Listed-product-li_right'>{user.date}</div>
            </li> */}
            <li className='Listed-product-li'>
              <div className='Listed-product-li_left'>Delivery:</div>
              <div className='Listed-product-li_right'>
              {buyerInfo === undefined ?
                  <></>
                  :
                  buyerInfo.storePickup === true ? 
                  <p>Pickup</p> 
                  :
                  buyerInfo.storePickup === false ? 
                  <p>To Address</p>
                  :
                  <></>
              }
              </div>
            </li>
            <li className='Listed-product-li'>
              <div className='Listed-product-li_left'>Order Status:</div>
              <div className='Listed-product-li_right'>Purchased</div>
            </li>
            <li className='Listed-product-li_price'>
              <div className='Listed-product-li_left'>Price:</div>
              <div className='Listed-product-li_right'>N$ {user.price}</div>
            </li>
            <li className='Listed-product-li_price'>
              <div className='Listed-product-li_left'>Quantity:</div>
              <div className='Listed-product-li_right'>
                {user.quantity === undefined ?
                <></>
                :
                user.quantity === 1 ?
                <p>{user.quantity} unit</p>
                :
                user.quantity !== 1 ?
                <p>{user.quantity} units</p>
                :
                <></>
              }
                </div>
            </li>
          </ul>
          {/* <div className='Listed-product_price_quantity-box'>
            <div className='Listed-product_price_quantity-box'>
              <div className='product_price_quantity-left_span'>Quantity: </div>
              <div className='Listed-product_price_quantity-right product_price_quantity-right_span'>{user.quantity}</div>
            </div>
            <div className='Listed-product_price_quantity-box'>
              <div className='Listed-product_price_quantity-left product_price_quantity-left_span'></div>
              <div className='Listed-product_price_quantity-right product_price_quantity-right_span'></div>
            </div>
          </div> */}
          </div>

          {/* <div style={{ display: 'flex', marginTop: '20px', position: 'relative'}}>
            <div className='product_price_quantity-left_span'>Payment ID:</div>
            <div style={{ paddingLeft: '10px', display: 'block'}}>
              <div style={{ position: 'relative'}}>
                <button onClick={showId} style={{ width: '30px', height: '20px', marginTop: '0px', display: 'flex', alignItems: 'center', border: 'none', justifyContent: 'center', borderRadius: '25px', background: 'royalblue'}}>
                  <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#fff'}}>click</span>
                </button>
              </div>
              <div className={paymenetId? "Paymentid_hover" : "Paymentid_hover-hidden"}>
                <span style={{fontSize: '14px', fontWeigh: 'bolder', color: 'royalblue'}}>ID: {user.paymentId}</span>
              </div>

            </div>
            <div style={{ display: 'block'}}>
            <div style={{ position: 'relative'}}>
                <button 
                      onMouseEnter={showIssue} onMouseLeave={showIssue}
                  className='item_delivery_client-question-mark '><span
                    style={{fontSize: '12px', fontWeigh: 'bolder', color: '#fff'}}>?</span> </button>
              </div>
              <div className={clientIssue? "item_delivery_client-question_hover"
                : "item_delivery_client-question_hover-hidden" }>
                <span className='item_delivery_client-question_hover_span'>If there are any Issues, Contact Us by
                  Call or Email, or better yet visit a Royal Computers Branch close to you. </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <div style={{ width: '100%', height: '30%', padding: '8px 0px 0px 0px', overflow: 'hidden'}}>
        <div style={{ width: '100%', height: '100%'}}>
          <p className='item_delivery_title'>{user.name}</p>
        </div>
      </div>
    </div>
    )
  } else {
    if (index === 0 && user.orderDelivered === false) {
      return (
        <div key={index} className='Listed-product-Details'>
        <div className='Listed-product_top_section'>
          <div className='Listed-product_top_section-left'>
            <div style={{ width: '100%', height: '100%'}}>
              <img style={{ width: '100%', height: '100%' }} src={NoImage} alt="" />
            </div>
          </div>
          <div className='Listed-product_top_section-right'>
            <div>
              <ul style={{ display: 'block', width: '100%'}}>
              {/* <li className='Listed-product-li'>
                <div className='Listed-product-li_left'>Date of Purchase:</div>
                <div className='Listed-product-li_right'>{user.date}</div>
              </li> */}
              <li className='Listed-product-li'>
                <div className='Listed-product-li_left'>Delivery:</div>
                <div className='Listed-product-li_right'>
                  <p>Store Pickup</p>
                </div>
              </li>
              <li className='Listed-product-li'>
                <div className='Listed-product-li_left'>Order Status:</div>
                <div className='Listed-product-li_right'>Purchased</div>
              </li>
              <li className='Listed-product-li_price'>
                <div className='Listed-product-li_left'>Price:</div>
                <div className='Listed-product-li_right'>N$ XXXX.XX</div>
              </li>
              <li className='Listed-product-li_price'>
                <div className='Listed-product-li_left'>Quantity:</div>
                <div className='Listed-product-li_right'>X</div>
              </li>
            </ul>
            {/* <div className='Listed-product_price_quantity-box'>
              <div className='Listed-product_price_quantity-box'>
                <div className='product_price_quantity-left_span'>Quantity: </div>
                <div className='Listed-product_price_quantity-right product_price_quantity-right_span'>{user.quantity}</div>
              </div>
              <div className='Listed-product_price_quantity-box'>
                <div className='Listed-product_price_quantity-left product_price_quantity-left_span'></div>
                <div className='Listed-product_price_quantity-right product_price_quantity-right_span'></div>
              </div>
            </div> */}
            </div>
  
            {/* <div style={{ display: 'flex', marginTop: '20px', position: 'relative'}}>
              <div className='product_price_quantity-left_span'>Payment ID:</div>
              <div style={{ paddingLeft: '10px', display: 'block'}}>
                <div style={{ position: 'relative'}}>
                  <button onClick={showId} style={{ width: '30px', height: '20px', marginTop: '0px', display: 'flex', alignItems: 'center', border: 'none', justifyContent: 'center', borderRadius: '25px', background: 'royalblue'}}>
                    <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#fff'}}>click</span>
                  </button>
                </div>
                <div className={paymenetId? "Paymentid_hover" : "Paymentid_hover-hidden"}>
                  <span style={{fontSize: '14px', fontWeigh: 'bolder', color: 'royalblue'}}>ID: {user.paymentId}</span>
                </div>
  
              </div>
              <div style={{ display: 'block'}}>
              <div style={{ position: 'relative'}}>
                  <button 
                        onMouseEnter={showIssue} onMouseLeave={showIssue}
                    className='item_delivery_client-question-mark '><span
                      style={{fontSize: '12px', fontWeigh: 'bolder', color: '#fff'}}>?</span> </button>
                </div>
                <div className={clientIssue? "item_delivery_client-question_hover"
                  : "item_delivery_client-question_hover-hidden" }>
                  <span className='item_delivery_client-question_hover_span'>If there are any Issues, Contact Us by
                    Call or Email, or better yet visit a Royal Computers Branch close to you. </span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div style={{ width: '100%', height: '30%', padding: '8px 0px 0px 0px', overflow: 'hidden'}}>
          <div style={{ width: '100%', height: '100%'}}>
            <p className='item_delivery_title'>This is where the Title of the product is shown.</p>
          </div>
        </div>
      </div>
      )
    }
  }

 })

return (
<div className='Oveview-container'>
  <div style={{ width: '100%', borderRadius: '5px', marginTop: '10px',border: '2px solid #00BFFF', padding: '0px 0px 3px 0px',
  display: 'flex', justifyContent: 'center', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.16)'}}>
    <span style={{ fontWeight: '700', fontSize: '35px', color: '#1380e7'}}>Your Purchases</span>
  </div>
  <div className='Oveview-container_box'>
    {userHistory.length === undefined ?
    <></>
    :
    userHistory.length === 0 ?
    <div className='Listed-product-Details'>
    <div className='Listed-product_top_section'>
      <div className='Listed-product_top_section-left'>
        <div style={{ width: '100%', height: '100%'}}>
          <img style={{ width: '100%', height: '100%' }} src={NoImage} alt="" />
        </div>
      </div>
      <div className='Listed-product_top_section-right'>
        <div>
          <ul style={{ display: 'block', width: '100%'}}>
          {/* <li className='Listed-product-li'>
            <div className='Listed-product-li_left'>Date of Purchase:</div>
            <div className='Listed-product-li_right'>{user.date}</div>
          </li> */}
          <li className='Listed-product-li'>
            <div className='Listed-product-li_left'>Delivery:</div>
            <div className='Listed-product-li_right'>
              <p>Store Pickup</p>
            </div>
          </li>
          <li className='Listed-product-li'>
            <div className='Listed-product-li_left'>Order Status:</div>
            <div className='Listed-product-li_right'>Purchased</div>
          </li>

          <li className='Listed-product-li_price'>
            <div className='Listed-product-li_left'>Price:</div>
            <div className='Listed-product-li_right'>N$ XXXX.XX</div>
          </li>
          <li className='Listed-product-li_price'>
            <div className='Listed-product-li_left'>Quantity:</div>
            <div className='Listed-product-li_right'>X</div>
          </li>
        </ul>
        {/* <div className='Listed-product_price_quantity-box'>
          <div className='Listed-product_price_quantity-box'>
            <div className='product_price_quantity-left_span'>Quantity: </div>
            <div className='Listed-product_price_quantity-right product_price_quantity-right_span'>{user.quantity}</div>
          </div>
          <div className='Listed-product_price_quantity-box'>
            <div className='Listed-product_price_quantity-left product_price_quantity-left_span'></div>
            <div className='Listed-product_price_quantity-right product_price_quantity-right_span'></div>
          </div>
        </div> */}
        </div>

        {/* <div style={{ display: 'flex', marginTop: '20px', position: 'relative'}}>
          <div className='product_price_quantity-left_span'>Payment ID:</div>
          <div style={{ paddingLeft: '10px', display: 'block'}}>
            <div style={{ position: 'relative'}}>
              <button onClick={showId} style={{ width: '30px', height: '20px', marginTop: '0px', display: 'flex', alignItems: 'center', border: 'none', justifyContent: 'center', borderRadius: '25px', background: 'royalblue'}}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#fff'}}>click</span>
              </button>
            </div>
            <div className={paymenetId? "Paymentid_hover" : "Paymentid_hover-hidden"}>
              <span style={{fontSize: '14px', fontWeigh: 'bolder', color: 'royalblue'}}>ID: {user.paymentId}</span>
            </div>

          </div>
          <div style={{ display: 'block'}}>
          <div style={{ position: 'relative'}}>
              <button 
                    onMouseEnter={showIssue} onMouseLeave={showIssue}
                className='item_delivery_client-question-mark '><span
                  style={{fontSize: '12px', fontWeigh: 'bolder', color: '#fff'}}>?</span> </button>
            </div>
            <div className={clientIssue? "item_delivery_client-question_hover"
              : "item_delivery_client-question_hover-hidden" }>
              <span className='item_delivery_client-question_hover_span'>If there are any Issues, Contact Us by
                Call or Email, or better yet visit a Royal Computers Branch close to you. </span>
            </div>
          </div>
        </div> */}
      </div>
    </div>
    <div style={{ width: '100%', height: '30%', padding: '8px 0px 0px 0px', overflow: 'hidden'}}>
      <div style={{ width: '100%', height: '100%'}}>
        <p className='item_delivery_title'>This is where the Title of the product is shown.</p>
      </div>
    </div>
  </div>
  :
  userHistory.length !== undefined && userHistory.length !== 0 ?
  <>
  {UserHistoryRender}
  </>

  :
  <></>
    }
    
  </div>
</div>
)
}

export default Overview