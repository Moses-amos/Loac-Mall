import React, { useState, useEffect } from 'react'
import './style.css'
import '../retailerstyle.css'
import '../retailerpages.css'
import '../../../../RegionalPages/style.css'
import '../../../../../Client/TrackOrder/trackorder.css'
import NoImage from './Images/No_Image.jpg'

import Axios from 'axios'
import BranchImages from './BranchImages';


function RequestMade() {

  function refreshPage() {
    window.location.reload(false);
  }

const [ToggleTab, setToggleTab] = useState(1);
const [Users, setUsers] = useState([])
const [UserData, setUserData] = useState([])
const [Branch, setBranch] = useState([])
const [Address, setAddress] = useState("")
const [confirmOrder, setconfirmOrder] = useState(true)
const [shipOrder, setshipOrder] = useState(true)
const [RestoreOrder, setRestoreOrder] = useState(false)
const [toddleEdit, settoddleEdit] = useState()
// const [deliverOrder, setdeliverOrder] = useState(true)
const [doneOrder, setdoneOrder] = useState(true)
const [RemoveTransaction, setRemoveTransaction] = useState(false)
const [IsLoading, setIsLoading] = useState(true)
const [showCancel, setshowCancel] = useState()

const popUpCancel = (index) => {
  setshowCancel(index);
}

const [ShowPreview, setShowPreview] = useState(false)

const TogglePreview = () => setShowPreview(!ShowPreview)

useEffect(() => {

  setTimeout(() => {
    setIsLoading(false)
  }, 1000);
  
})

const changetoggle = (index) => {
  settoddleEdit(index);
  }

  const onTransaction = () => {
    setRemoveTransaction(false)
    refreshPage()
    }

const SaveAddress = () => {

  const variables = {
      windhoekAddress: Address,
  }

  Axios.post('/api/users/setRole', variables)
      .then(response => {
      if (response.data.success) {
      }
      })
}

const onAddressChange = (event) => {
  setAddress(event.currentTarget.value)
  }

const onConfirm = () => {
setconfirmOrder(true)
refreshPage()

}

const onCancel = () => {
setshipOrder(true)
refreshPage()
}

const onRestore = () => {
  setRestoreOrder(false)
  refreshPage()
  }


const onDoneOrder = () => {
  setdoneOrder(true)
  refreshPage()

  }


const ToggleActiveTab = (index) => {
setToggleTab(index);
}


useEffect(() => {

  Axios.post('/api/users/getUsers')
  .then(response => {
  if (response.data.success) {
  setUsers(response.data.users)
  }
  })
  
  Axios.post('/api/users/getHistoryProducts')
  .then(response => {
  if (response.data.success) {
    setBranch(response.data.doc)
  }
  })
  
  Axios.get('/api/users/getUser')
  .then(response => {
      if (response.data.success) {
        setUserData(response.data.doc)
      }
  })
  
  }, [])

  const updateDeliveryConfirm = (productId, userId) => {

    const variable = {
    userId: userId,
    productId: productId,
    orderConfirm: confirmOrder,
    storeAddress: UserData.windhoekAddress,
    
    }
    
    Axios.post('/api/users/updateHistoryConfirm', variable)
    .then(response => {
    if (response.data.success) {
    }
    })
    
    }
    
    const updateCancelled = (productId, userId) => {
    
    const variable = {
    userId: userId,
    productId: productId,
    orderShip: shipOrder,
    }
    
    Axios.post('/api/users/updateHistoryShip', variable)
    .then(response => {
    if (response.data.success) {
    
    }
    
    })
    }
    
    const updateUnCancel = (productId, userId) => {
    
      const variable = {
      userId: userId,
      productId: productId,
      orderShip: RestoreOrder,
      }
      
      Axios.post('/api/users/updateHistoryShip', variable)
      .then(response => {
      if (response.data.success) {
      
      }
      
      })
    }
    
    const updateDeliveryDone = (productId, userId) => {
    
      const variable = {
      userId: userId,
      productId: productId,
      orderDelivered: doneOrder,
      storeAddress: UserData.windhoekAddress,
      }
      
      Axios.post('/api/users/updateHistoryDeliveryDone', variable)
      .then(response => {
      if (response.data.success) {
      }
      })
      
      }
    
      const updateRemoveTransaction = (productId, userId) => {
    
        const variable = {
        userId: userId,
        productId: productId,
        orderDelivered: RemoveTransaction,
        }
        
        Axios.post('/api/users/updateHistoryDeliveryDone', variable)
        .then(response => {
        if (response.data.success) {
        }
        })
        
        }

  const RenderStandingOrders = Branch.map((user, index) => {
    let userInfo = user.history;
    return (
    <>
      {userInfo.map(info => (
      <>
        {info.orderConfirm === false &&  (info.orderShip === false && info.orderDelivered === false) ?
            <div key={index} className='Requested_item_listed'>
            <div className='Requested_item_top_section'>
            <div className='Requested_item_image_box'>
                          <BranchImages images={info.images} />
                        </div>

                        <div className='Requested_item_details_box'>
                          <div className='Requested_item_title_box'>
                            <span className='Requested_item_title_text_box'>{info.name}</span>
                          </div>

                          <div className='Requested_item_details_layout'>
                              <div className='Requested_item_price_box'>
                                <div className='Requested_item_listed_titles_box'>
                                  <span className='Requested_item_listed_detail_title'>Price: </span>
                                </div>
                                <div className='Requested_item_listed_units_box'>
                                  <span className='Requested_item_listed_detail_unit'>N$ {info.price}</span>
                                </div>
                              </div>

                              <div className='Requested_item_details_pad_box'>
                                <div className='Requested_item_listed_titles_box'>
                                  <span className='Requested_item_listed_detail_title'>Quantity: </span>
                                </div>
                                <div className='Requested_item_listed_units_box'>
                                  <span className='Requested_item_listed_detail_unit'>{info.quantity}</span>
                                </div>
                              </div>

                              <div className='Requested_item_details_pad_box'>
                                <div className='Requested_item_listed_titles_box'>
                                  <span className='Requested_item_listed_detail_title'>Location: </span>
                                </div>
                                <div className='Requested_item_listed_units_box'>
                                  <span className='Requested_item_listed_detail_unit'>{user.userLocation}</span>
                                </div>
                              </div>

                            </div>
                        </div>
            </div>

            {/* Requestee Information */}
            <div className='Requested_item_details_layout'>
            <div className='Requested_item_price_box'>
              <div className='Requested_item_listed_titles_box'>
                <span className='Requested_item_listed_detail_title'>Requestee: </span>
              </div>
              <div className='Requested_item_listed_units_box'>
                <span className='Requested_item_listed_detail_unit'>{user.name} {user.lastName}</span>
              </div>
            </div>

            <div className='Requested_item_details_pad_box'>
              <div className='Requested_item_listed_titles_box'>
                <span className='Requested_item_listed_detail_title'>Email: </span>
              </div>
              <div className='Requested_item_listed_units_box'>
                <span className='Requested_item_listed_detail_unit'>{user.email}</span>
              </div>
            </div>

            <div className='Requested_item_details_pad_box'>
              <div className='Requested_item_listed_titles_box'>
                <span className='Requested_item_listed_detail_title'>Contact: </span>
              </div>
              <div className='Requested_item_listed_units_box'>
                <span className='Requested_item_listed_detail_unit'>{user.contact} </span>
              </div>
            </div>

          </div>

            <div className='Requested_item_status_box'>
              <div className='TrackOrder-item_status_types'>
                <div>
                  <span className='TrackOrder-item_status_span'>Status:</span>
        
                </div>
                <div className='TrackOrder-item_status_types_right'>
                  <div>

                    {info.orderConfirm === false && info.orderShip === false ?
                    <span className='Requested_item_delivery_stages_types-span'>waiting confirmation ....</span>
                    :
                    (info.orderConfirm === true && info.orderDelivered === false) && info.orderShip === false ?
                    <span className='Requested_item_delivery_stages_types-span_shipped'>Item is Ready for Pickup ....</span>
                    :
                    <></>
                    }

                  </div>
                </div>
              </div>

              <div className='Requested_item_delivery_stages_box'>
                    {info.orderConfirm === false && info.orderShip === false ?
                    <div 
                    onClick={()=> { updateDeliveryConfirm(info.id, user._id); onConfirm()}}
                      className='TrackOrder-item_delivery_confirmed'>
                        <span className='TrackOrder-item_delivery_stages-active'>
                          Click To Confirm Request
                        </span>
                  </div>
                    :
                    (info.orderConfirm === true && info.orderDelivered === false) && info.orderShip === false ?
                    <div 
                        onClick={()=> { updateDeliveryDone(info.id, user._id); onDoneOrder()}}
                        className='TrackOrder-item_delivery_delivered'>
                          <span className='TrackOrder-item_delivery_stages-active'>
                            Click when item is bought
                          </span>
                        </div>
                    :
                    <></>
                    }

              </div>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div className={showCancel === user._id ? "Show_deleteBox": "Hide_deleteBox"}>
          <div className='Delete_box_message'>
            <span className='Are_you_sure_message'>
              Do you want to cancel this Request?.
            </span>
          </div>
          <div className='Delete_box_options'>
            <button           
            onClick={()=> { updateCancelled(info.id, user._id); onCancel()}}
            className='Delete_Item_button'>Yes</button>
            <button onClick={()=> popUpCancel()} className='Cancel_Item_delete_button'>No</button>
          </div>
        </div>
        </div>

              <div className='Requested_item_Cancel'>
                <button 
                     onClick={()=> popUpCancel(user._id)}
                  // onClick={()=> { updateCancelled(info.id, user._id); onCancel()}}
                  className='Requested_item_Cancel_button'>Cancel Request</button>
              </div>


            </div>
          </div>
        :
        <></>
        }
      </>
      ))
      }
    </>
    )
    })


    const RenderOptionedOrders = Branch.map((user, index) => {
      let userInfo = user.history;
      return (
      <>
        {userInfo.map(info => (
        <>
          {info.orderShip === true || info.orderDelivered === true ?
              <div key={index} className='Requested_item_listed'>
              <div className='Requested_item_top_section'>
              <div className='Requested_item_image_box'>
                            <BranchImages images={info.images} />
                          </div>
  
                          <div className='Requested_item_details_box'>
                            <div className='Requested_item_title_box'>
                              <span className='Requested_item_title_text_box'>{info.name}</span>
                            </div>
  
                            <div className='Requested_item_details_layout'>
                                <div className='Requested_item_price_box'>
                                  <div className='Requested_item_listed_titles_box'>
                                    <span className='Requested_item_listed_detail_title'>Price: </span>
                                  </div>
                                  <div className='Requested_item_listed_units_box'>
                                    <span className='Requested_item_listed_detail_unit'>N$ {info.price}</span>
                                  </div>
                                </div>
  
                                <div className='Requested_item_details_pad_box'>
                                  <div className='Requested_item_listed_titles_box'>
                                    <span className='Requested_item_listed_detail_title'>Quantity: </span>
                                  </div>
                                  <div className='Requested_item_listed_units_box'>
                                    <span className='Requested_item_listed_detail_unit'>{info.quantity}</span>
                                  </div>
                                </div>
  
                                <div className='Requested_item_details_pad_box'>
                                  <div className='Requested_item_listed_titles_box'>
                                    <span className='Requested_item_listed_detail_title'>Location: </span>
                                  </div>
                                  <div className='Requested_item_listed_units_box'>
                                    <span className='Requested_item_listed_detail_unit'>{user.userLocation}</span>
                                  </div>
                                </div>
  
                              </div>
                          </div>
              </div>
  
              {/* Requestee Information */}
              <div className='Requested_item_details_layout'>
              <div className='Requested_item_price_box'>
                <div className='Requested_item_listed_titles_box'>
                  <span className='Requested_item_listed_detail_title'>Requestee: </span>
                </div>
                <div className='Requested_item_listed_units_box'>
                  <span className='Requested_item_listed_detail_unit'>{user.name} {user.lastName}</span>
                </div>
              </div>
  
              <div className='Requested_item_details_pad_box'>
                <div className='Requested_item_listed_titles_box'>
                  <span className='Requested_item_listed_detail_title'>Email: </span>
                </div>
                <div className='Requested_item_listed_units_box'>
                  <span className='Requested_item_listed_detail_unit'>{user.email}</span>
                </div>
              </div>
  
              <div className='Requested_item_details_pad_box'>
                <div className='Requested_item_listed_titles_box'>
                  <span className='Requested_item_listed_detail_title'>Contact: </span>
                </div>
                <div className='Requested_item_listed_units_box'>
                  <span className='Requested_item_listed_detail_unit'>{user.contact} </span>
                </div>
              </div>
  
            </div>
  
              <div className='Requested_item_status_box'>
                <div className='TrackOrder-item_status_types'>
                  <div>
                    <span className='TrackOrder-item_status_span'>Status:</span>
          
                  </div>
                  <div className='TrackOrder-item_status_types_right'>
                    <div>
  
                      {
                      info.orderDelivered === true ?
                      <span className='Requested_item_delivery_stages_types-span_Done'>Request Completed ....</span>
                      :
                      info.orderShip === true ?
                      <span className='Requested_item_delivery_stages_types-span_confirmed'>Request Cancelled ....</span>
                      :
                      <></>
                      }
  
                    </div>
                  </div>
                </div>
  
                <div className='Requested_item_delivery_stages_box'>
                      {
                      info.orderDelivered === true  ?
                      <div 
                      className='TrackOrder-item_delivery_complete'>
                        <span className='TrackOrder-item_delivery_stages-active'>
                          Request Complete
                        </span>
                      </div>
                      :
                      info.orderShip === true ?
                      <div className='TrackOrder-item_delivery_shipped'>
                        <span className='TrackOrder-item_delivery_stages-active'>
                          Cancelled</span>
                       </div>
                      :
                      <></>
                      }
  
                </div>

                <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>

                  {info.orderDelivered === true ?
                  <div className={showCancel === user._id ? "Show_deleteBox": "Hide_deleteBox"}>
                  <div className='Delete_box_message'>
                    <span className='Are_you_sure_message'>
                      Do you want to revert this Request?.
                    </span>
                  </div>
                  <div className='Delete_box_options'>
                    <button           
                    onClick={()=> { updateRemoveTransaction(info.id, user._id); onTransaction()}}
                    className='Delete_Item_button'>Yes</button>
                    <button onClick={()=> popUpCancel()} className='Cancel_Item_delete_button'>No</button>
                  </div>
                </div>
                  :
                  info.orderShip === true ?
                  <div className={showCancel === user._id ? "Show_deleteBox": "Hide_deleteBox"}>
                  <div className='Delete_box_message'>
                    <span className='Are_you_sure_message'>
                      Do you want to restore this Request?.
                    </span>
                  </div>
                  <div className='Delete_box_options'>
                    <button           
                    onClick={()=> { updateUnCancel(info.id, user._id); onRestore()}}
                    className='Delete_Item_button'>Yes</button>
                    <button onClick={()=> popUpCancel()} className='Cancel_Item_delete_button'>No</button>
                  </div>
                </div>
                  :
                  <></>
                  }

        </div>
  
                <div className='Requested_item_Cancel'>

                  {info.orderDelivered === true ?
                  <button 
                     onClick={()=> popUpCancel(user._id)}
                  // onClick={()=> { updateRemoveTransaction(info.id, user._id); onTransaction()}}
                  className='Requested_item_Cancel_button'>Revert</button>
                  :
                  info.orderShip === true ?
                  <button 
                     onClick={()=> popUpCancel(user._id)}
                  // onClick={()=> { updateUnCancel(info.id, user._id); onRestore()}}
                  className='Requested_item_Cancel_button'>Revert</button>
                  :
                  <></>
                  }

                </div>
  
  
              </div>
            </div>
          :
          <></>
          }
        </>
        ))
        }
      </>
      )
      })

    
    // const RenderDeliveredOrders = Branch.map((user, index) => {
    //   let userInfo = user.history;
    
    //   if(user && user.userLocation === "Windhoek" ) {
    //   return (
    //   <>
    //     </>
    //     ))
    //     }
    //   </>
    //   )
    //   }
    //   })

  return (
    
    <div style={{ width: '100%', display: 'flex'}}>
      <div className='Branch_Locations_Page_box'>
    <div className='Branches_Location_container'>
<div className='Branch_title_box'>
<span className='Branch_title_box_span'>Request Made</span>
  </div>

  <div className='Branches-container_box'>
    <div className='Branch_delivery_Location_toggle'>
    <div className='Branches_delivery_toggle_resize'>
        <div style={{ display: 'flex'}}>
          <div style={{ width: '100px'}}>
          <button className={ToggleTab===1 ? "Branch-deliveryTabs ConfirmTab active-Branch-deliveryTabs"
            : "ConfirmTab Branch-deliveryTabs" } onClick={()=>
            ToggleActiveTab(1)}>Activity</button>
        </div>
        <div style={{ width: '100px', marginLeft: '25px'}}>
          <button className={ToggleTab===2 ? "Branch-deliveryTabs DeliverTab active-Branch-deliveryTabs"
            : "DeliverTab Branch-deliveryTabs" } onClick={()=>
            ToggleActiveTab(2)}>History</button>
        </div>
        </div>

      </div>

      <div className='Activity_location_box'>
        <div className='Activity_selected_top'>
          <div className={ToggleTab===1 ? 'Activity_selected_activity_button' : 'Activity_selected_button_hide'}>
            Activity
          </div>
          <div className={ToggleTab===2 ? 'Activity_selected_history_button' : 'Activity_selected_button_hide'}>
            History
          </div>
        </div>

        <div className={ToggleTab === 1? "Requested_preview_box" : "Requested_preview_box_hide"}>
        {Branch.length === undefined ?
    <></>
    :
    Branch.length === 0 ?
    <>
    {IsLoading === true ?
    <></>
    :
    <>
    <div className={ShowPreview === false? "Requested_preview_box" : "Requested_preview_box_hide"}>
        <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #c5cbd5', borderRadius: '7px'}}>
                      <a>
                        <img style={{ width: '300px', height: '227px'}} src="https://i.imgur.com/NMOu6Qt.jpg" alt="" />
                      </a>
                    </div>
                    
                    <div style={{ marginTop: '30px'}}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <span style={{ fontWeight: '500', fontSize: '14px', color: '#3E3D53'}}>Request Made will be shown here</span>
                        </div>
                     </div>
            <div className='Retailer_preview_box'>
              <button className='Retailer_preview_button' onClick={TogglePreview}>Preview</button>
            </div>
        </div>

        <div className={ShowPreview === true? "Requested_preview_box" : "Requested_preview_box_hide"}>
       
        <div className='Requested_item_listed'>
    <div className='Requested_item_top_section'>
      <div className='Requested_item_image_box'>
      <img style={{ width: '100%', height: '200px', borderRadius: '7px'}} src={NoImage} alt="" />
      </div>

      <div className='Requested_item_details_box'>
        <div className='Requested_item_title_box'>
          <span className='Requested_item_title_text_box'>This is where the title of the item is shown.</span>
        </div>

        <div className='Requested_item_details_layout'>
            <div className='Requested_item_price_box'>
              <div className='Requested_item_listed_titles_box'>
                <span className='Requested_item_listed_detail_title'>Price: </span>
              </div>
              <div className='Requested_item_listed_units_box'>
                <span className='Requested_item_listed_detail_unit'>N$ 0.00</span>
              </div>
            </div>

            <div className='Requested_item_details_pad_box'>
              <div className='Requested_item_listed_titles_box'>
                <span className='Requested_item_listed_detail_title'>Quantity: </span>
              </div>
              <div className='Requested_item_listed_units_box'>
                <span className='Requested_item_listed_detail_unit'>0 </span>
              </div>
            </div>

            <div className='Requested_item_details_pad_box'>
              <div className='Requested_item_listed_titles_box'>
                <span className='Requested_item_listed_detail_title'>Location: </span>
              </div>
              <div className='Requested_item_listed_units_box'>
                <span className='Requested_item_listed_detail_unit'>Walvis Bay </span>
              </div>
            </div>

          </div>
      </div>
    </div>

{/* Requestee Information */}

    <div className='Requested_item_details_layout'>
            <div className='Requested_item_price_box'>
              <div className='Requested_item_listed_titles_box'>
                <span className='Requested_item_listed_detail_title'>Requestee: </span>
              </div>
              <div className='Requested_item_listed_units_box'>
                <span className='Requested_item_listed_detail_unit'>Moses Gamaseb</span>
              </div>
            </div>

            <div className='Requested_item_details_pad_box'>
              <div className='Requested_item_listed_titles_box'>
                <span className='Requested_item_listed_detail_title'>Email: </span>
              </div>
              <div className='Requested_item_listed_units_box'>
                <span className='Requested_item_listed_detail_unit'>gamasebmoses2@gmail.com</span>
              </div>
            </div>

            <div className='Requested_item_details_pad_box'>
              <div className='Requested_item_listed_titles_box'>
                <span className='Requested_item_listed_detail_title'>Contact: </span>
              </div>
              <div className='Requested_item_listed_units_box'>
                <span className='Requested_item_listed_detail_unit'>0817060833 </span>
              </div>
            </div>

      

          </div>

    <div className='Requested_item_status_box'>
      <div className='TrackOrder-item_status_types'>
        <div>
          <span className='TrackOrder-item_status_span'>Status:</span>
        </div>

        <div className='TrackOrder-item_status_types_right'>
          <div>
            <span className='Requested_item_delivery_stages_types-span'>waiting confirmation ....</span>

          </div>
        </div>
      </div>

      <div className='Requested_item_delivery_stages_box'>
        <div 
          className='TrackOrder-item_delivery_confirmed'>
          <span className='TrackOrder-item_delivery_stages-active'>
          Click To Confirm Order
          </span>
        </div>
      </div>

      <div className='Requested_item_Cancel'>
      <button 
        className='Requested_item_Cancel_button'>Cancel Request</button>
      </div>

    </div>
  </div>

            <div className='Retailer_preview_box'>
              <button className='Retailer_preview_button' onClick={TogglePreview}>Back</button>
            </div>
        </div>
    </>
    }
    </>
    :
    Branch.length !== undefined && Branch.length !== 0 ?
    <>
    {IsLoading === true ?
    <></>
    :
    <>
    {RenderStandingOrders}
    </>
    }
    </>
  
    :
    <></>
      }

        </div>

        <div className={ToggleTab === 2? "Requested_preview_box" : "Requested_preview_box_hide"}>
        {Branch.length === undefined ?
    <></>
    :
    Branch.length === 0 ?
    <>
    <div className={ShowPreview === false? "Requested_preview_box" : "Requested_preview_box_hide"}>
    <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #c5cbd5', borderRadius: '7px'}}>
                  <a>
                    <img style={{ width: '300px', height: '227px'}} src="https://i.imgur.com/NMOu6Qt.jpg" alt="" />
                  </a>
                </div>
                
                <div style={{ marginTop: '30px'}}>
                    <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                        <span style={{ fontWeight: '500', fontSize: '14px', color: '#3E3D53'}}>Request Made will be shown here</span>
                    </div>
                 </div>
        <div className='Retailer_preview_box'>
          <button className='Retailer_preview_button' onClick={TogglePreview}>Preview</button>
        </div>
    </div>

    <div className={ShowPreview === true? "Requested_preview_box" : "Requested_preview_box_hide"}>
   
    <div className='Requested_item_listed'>
<div className='Requested_item_top_section'>
  <div className='Requested_item_image_box'>
  <img style={{ width: '100%', height: '200px', borderRadius: '7px'}} src={NoImage} alt="" />
  </div>

  <div className='Requested_item_details_box'>
    <div className='Requested_item_title_box'>
      <span className='Requested_item_title_text_box'>This is where the title of the item is shown.</span>
    </div>

    <div className='Requested_item_details_layout'>
        <div className='Requested_item_price_box'>
          <div className='Requested_item_listed_titles_box'>
            <span className='Requested_item_listed_detail_title'>Price: </span>
          </div>
          <div className='Requested_item_listed_units_box'>
            <span className='Requested_item_listed_detail_unit'>N$ 0.00</span>
          </div>
        </div>

        <div className='Requested_item_details_pad_box'>
          <div className='Requested_item_listed_titles_box'>
            <span className='Requested_item_listed_detail_title'>Quantity: </span>
          </div>
          <div className='Requested_item_listed_units_box'>
            <span className='Requested_item_listed_detail_unit'>0 </span>
          </div>
        </div>

        <div className='Requested_item_details_pad_box'>
          <div className='Requested_item_listed_titles_box'>
            <span className='Requested_item_listed_detail_title'>Location: </span>
          </div>
          <div className='Requested_item_listed_units_box'>
            <span className='Requested_item_listed_detail_unit'>Walvis Bay </span>
          </div>
        </div>

      </div>
  </div>
</div>

{/* Requestee Information */}

<div className='Requested_item_details_layout'>
        <div className='Requested_item_price_box'>
          <div className='Requested_item_listed_titles_box'>
            <span className='Requested_item_listed_detail_title'>Requestee: </span>
          </div>
          <div className='Requested_item_listed_units_box'>
            <span className='Requested_item_listed_detail_unit'>Moses Gamaseb</span>
          </div>
        </div>

        <div className='Requested_item_details_pad_box'>
          <div className='Requested_item_listed_titles_box'>
            <span className='Requested_item_listed_detail_title'>Email: </span>
          </div>
          <div className='Requested_item_listed_units_box'>
            <span className='Requested_item_listed_detail_unit'>gamasebmoses2@gmail.com</span>
          </div>
        </div>

        <div className='Requested_item_details_pad_box'>
          <div className='Requested_item_listed_titles_box'>
            <span className='Requested_item_listed_detail_title'>Contact: </span>
          </div>
          <div className='Requested_item_listed_units_box'>
            <span className='Requested_item_listed_detail_unit'>0817060833 </span>
          </div>
        </div>

  

      </div>

<div className='Requested_item_status_box'>
  <div className='TrackOrder-item_status_types'>
    <div>
      <span className='TrackOrder-item_status_span'>Status:</span>
    </div>

    <div className='TrackOrder-item_status_types_right'>
      <div>
      <span className='Requested_item_delivery_stages_types-span_Done'>Request Completed ....</span>

      </div>
    </div>
  </div>

  <div className='Requested_item_delivery_stages_box'>
  <div 
      className='TrackOrder-item_delivery_complete'>
        <span className='TrackOrder-item_delivery_stages-active'>
          Request Complete
        </span>
  </div>
  </div>

  <div className='Requested_item_Cancel'>
  <button 
    className='Requested_item_Cancel_button'>Revert</button>
  </div>

</div>
</div>

        <div className='Retailer_preview_box'>
          <button className='Retailer_preview_button' onClick={TogglePreview}>Back</button>
        </div>
    </div>
    </>
    :
    Branch.length !== undefined && Branch.length !== 0 ?
    <>
    {RenderOptionedOrders}
    </>
    :
    <></>
      }

        </div>

      </div>
      

      <div className='Branches_delivery_toggle_top'>
        <div style={{ display: 'block'}}>
          <div style={{ width: '130px'}}>
          <button className={ToggleTab===1 ? "Branch-deliveryTabs ConfirmTab active-Branch-deliveryTabs"
            : "ConfirmTab Branch-deliveryTabs" } onClick={()=>
            ToggleActiveTab(1)}>ACTIVITY</button>
        </div>
        <div style={{ width: '130px', marginTop: '25px'}}>
          <button className={ToggleTab===2 ? "Branch-deliveryTabs DeliverTab active-Branch-deliveryTabs"
            : "DeliverTab Branch-deliveryTabs" } onClick={()=>
            ToggleActiveTab(2)}>HISTORY</button>
        </div>
        </div>

      </div>
    </div>
  </div>
</div>
      </div>
    </div>
    
  )
}

export default RequestMade