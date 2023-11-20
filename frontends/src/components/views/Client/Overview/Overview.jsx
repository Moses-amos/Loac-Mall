import React, { useState, useEffect} from 'react'
import Axios from 'axios'
import './overview.css'
import OverviewImages from './OverviewImages'
import NoImage from '../TrackOrder/Images/No_Image.jpg'
import '../Components/Sidebar/sidebar.css'
import '../sidemenu.css'
import Sidemenu from '../Sidemenu'

function Overview(props) {

const [userHistory, setUserHistory] = useState([])
const [clientIssue, setclientIssue] = useState()
const [buyerInfo, setbuyerInfo] = useState([])
const [IsLoading, setIsLoading] = useState(true)

const [ShowPreview, setShowPreview] = useState(false)

const TogglePreview = () => setShowPreview(!ShowPreview)

useEffect(() => {

  setTimeout(() => {
    setIsLoading(false)
  }, 1000);
  
})

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
  props.history.push("/branch")
  refreshPage()
  } else if (buyerInfo.operateLocation === "Admin") {
    props.history.push(`/0/${buyerInfo._id}`)
    refreshPage()
  }


 const UserHistoryRender = userHistory.map((user, index) => {

  if (user.orderDelivered === true ) {
    return (
      <div key={index} className='Overview_product_Details'>
      <div className='Listed-product_top_section'>
        <div className='Overview_product_image_left'>
          <div style={{ width: '100%', height: '100%', borderRadius: '7px'}}>
            <OverviewImages images={user.imageOne} />
          </div>
        </div>
        <div className='Overview_product_image_right'>
          <div>
            <ul style={{ display: 'block', width: '100%'}}>
            {/* <li className='Listed-product-li'>
              <div className='Overview_product_li_left'>Date of Purchase:</div>
              <div className='Overview_product_li_right'>{user.date}</div>
            </li> */}
            <li className='Listed-product-li'>
                <div className='Overview_product_li_left'>Status:</div>
                <div className='Overview_product_li_right'>Purchased</div>
              </li>
            <li className='Listed-product-li_delivery'>
              <div className='Overview_product_li_left'>Delivery:</div>
              <div className='Overview_product_li_right'>
              {buyerInfo === undefined ?
                  <></>
                  :
                  buyerInfo.storePickup === true ? 
                  <>Store-Pickup</> 
                  :
                  buyerInfo.storePickup === false ? 
                  <>To Address</>
                  :
                  <></>
              }
              </div>
            </li>
            
            <li className='Listed-product-li_price'>
              <div className='Overview_product_li_left'>Price:</div>
              <div className='Overview_product_li_right'>N$ {user.price}</div>
            </li>
            <li className='Listed-product-li_price'>
              <div className='Overview_product_li_left'>Quantity:</div>
              <div className='Overview_product_li_right'>
                {user.quantity === undefined ?
                <></>
                :
                user.quantity === 1 ?
                <>{user.quantity} unit</>
                :
                user.quantity !== 1 ?
                <>{user.quantity} units</>
                :
                <></>
              }
                </div>
            </li>
            <li className='Listed-product-li_price'>
                <div className='Overview_product_li_left'>Date:</div>
                <div className='Overview_product_li_right'>00/00/00</div>
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
      <div style={{ width: '100%', height: '15%', padding: '8px 0px 0px 0px', overflow: 'hidden'}}>
        <div style={{ width: '100%', height: '100%'}}>
          <p className='item_delivery_title'>{user.name}</p>
        </div>
      </div>
    </div>
    )
  }
   else {
    if (index === 0 && user.orderDelivered === false) {
      return (
        <div key={index} className='Overview_product_Details'>
        <div className='Listed-product_top_section'>
          <div className='Overview_product_image_left'>
            <div style={{ width: '100%', height: '100%'}}>
              <img style={{ width: '100%', height: '100%', borderRadius: '7px' }} src={NoImage} alt="" />
            </div>
          </div>
          <div className='Overview_product_image_right'>
            <div>
              <ul style={{ display: 'block', width: '100%'}}>
              
              <li className='Listed-product-li'>
                <div className='Overview_product_li_left'>Status:</div>
                <div className='Overview_product_li_right'>Purchased</div>
              </li>
              <li className='Listed-product-li_delivery'>
                <div className='Overview_product_li_left'>Delivery:</div>
                <div className='Overview_product_li_right'>Store-Pickup
                </div>
              </li>
              
              <li className='Listed-product-li_price'>
                <div className='Overview_product_li_left'>Price:</div>
                <div className='Overview_product_li_right'>N$ 0.00</div>
              </li>
              <li className='Listed-product-li_price'>
                <div className='Overview_product_li_left'>Quantity:</div>
                <div className='Overview_product_li_right'>X</div>
              </li>
              
              <li className='Listed-product-li_price'>
                <div className='Overview_product_li_left'>Date:</div>
                <div className='Overview_product_li_right'>00/00/00</div>
              </li>
          
            </ul>
            </div>
          </div>
        </div>
        <div style={{ width: '100%', height: '24%', padding: '8px 0px 0px 0px', overflow: 'hidden', marginTop: '10px'}}>
          <div style={{ width: '100%', height: '100%'}}>
            <p className='item_delivery_title'>This is where the title of the product is shown.</p>
          </div>
        </div>
      </div>
      )
    }
  }

 })


return (
<div className='Oveview-container'>
  <div className='Overview_page_header'>
    <span style={{ fontWeight: '700', fontSize: '30px', color: '#fff'}}>Overview</span>
  </div>

  <div className='Overview_page_layout'>
    <div className='Client_page_sidebar_box'>
      <div className='Cliet_sidebar_left_box_'>
      <Sidemenu />
      </div>
    </div>
<div className='Oveview-container_box'>
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
    <>
    <div className={ShowPreview === false ? "Client_preview_toggle" : "Client_preview_toggle_hide"}>
    <div style={{ display: 'block', marginTop: '40px'}}>
        <div style={{ width: '100%', height: '270px', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '7px'}}>
                      <a>
                        <img style={{ width: '300px', height: '250px'}} src="https://i.imgur.com/pfl8MtT.jpg" alt="" />
                      </a>
                    </div>
                    
                    <div style={{ marginTop: '30px'}}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <span style={{ fontWeight: '600', fontSize: '14px', color: '#3E3D53'}}>No History</span>
                        </div>
                     </div>
        </div>

        <div className='Client_preview_box'>
          <button className='Client_preview_button' onClick={TogglePreview}>Preview</button>
        </div>
    </div>

    <div className={ShowPreview === true ? "Client_preview_toggle" : "Client_preview_toggle_hide"}>
    <div className='Overview_product_Details'>
        <div className='Listed-product_top_section'>
          <div className='Overview_product_image_left'>
            <div style={{ width: '100%', height: '100%'}}>
              <img style={{ width: '100%', height: '100%', borderRadius: '7px' }} src={NoImage} alt="" />
            </div>
          </div>
          <div className='Overview_product_image_right'>
            <div>
              <ul style={{ display: 'block', width: '100%'}}>
              
              <li className='Listed-product-li'>
                <div className='Overview_product_li_left'>Status:</div>
                <div className='Overview_product_li_right'>Delivered</div>
              </li>
              <li className='Listed-product-li_delivery'>
                <div className='Overview_product_li_left'>Delivery:</div>
                <div className='Overview_product_li_right'>To Address
                </div>
              </li>
              
              <li className='Listed-product-li_price'>
                <div className='Overview_product_li_left'>Price:</div>
                <div className='Overview_product_li_right'>N$ 0.00</div>
              </li>
              <li className='Listed-product-li_price'>
                <div className='Overview_product_li_left'>Quantity:</div>
                <div className='Overview_product_li_right'>X</div>
              </li>
              
            
              <li className='Listed-product-li_price'>
                <div className='Overview_product_li_left'>Date:</div>
                <div className='Overview_product_li_right'>00/00/00</div>
              </li>
            
              
            </ul>
            </div>
          </div>
        </div>
        <div style={{ width: '100%', height: '15%', padding: '8px 0px 0px 0px', overflow: 'hidden', marginTop: '15px'}}>
          <div style={{ width: '100%', height: '100%'}}>
            <p className='item_delivery_title'>This is where the title of the item is shown.</p>
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
  userHistory.length !== undefined && userHistory.length !== 0 ?
  <>
  {IsLoading === undefined ?
    <></>
    :
    IsLoading === true ?
    <></>
    : 
    <>
    {UserHistoryRender}
   </>
   }
  </>
  :
  <></>
    }
    
  </div>
  </div>

  
</div>
)
}

export default Overview