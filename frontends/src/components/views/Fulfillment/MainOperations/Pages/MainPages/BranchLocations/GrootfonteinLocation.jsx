import React, { useState, useEffect } from 'react'
import './style.css'
import Axios from 'axios'
import TextareaAutosize from 'react-textarea-autosize';
import NoImage from './Images/No_Image.jpg'
import BranchImages from './BranchImages';

function refreshPage() {
  window.location.reload(false);
}

function GrootfonteinLocation() {

  const [toggleBranch, setToggleBranch] = useState(1);
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

  const changetoggle = (index) => {
    settoddleEdit(index);
    }
  
    const onTransaction = () => {
      setRemoveTransaction(false)
      refreshPage()
      }
  
  const SaveAddress = () => {
  
    const variables = {
        grootfonteinAddress: Address,
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
  
  // const onDeliver = () => {
  // setdeliverOrder(true)
  // refreshPage()
  // }
  
  const onDoneOrder = () => {
    setdoneOrder(true)
    refreshPage()
  
    }
  
  
  const toggleBranchTab = (index) => {
  setToggleBranch(index);
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
      storeAddress: UserData.grootfonteinAddress,
      
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
        storeAddress: UserData.grootfonteinAddress,
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
  
      if(user && user.userLocation === "Grootfontein" ) {
        return (
          <>
            {userInfo.map(info => (
            <>
              {info.orderConfirm === false && info.orderShip === false ?
                  <div key={index} className='TrackOrder-item_box_branch'>
                  <div className='TrackOrder-item_top_section'>
                  <div className='TrackOrder_Branch-item_image_box'>
                                <BranchImages images={info.images} />
                              </div>
                              <div className='TrackOrder_Branch-item_title_box'>
                                <div className='TrackOrder-item_title'>
                                  <span className='TrackOrder-item_title_span_branch'>{info.name}</span>
                                </div>
                                <div className='Track_Order-item_price-quantity'>
                                    <div className='Track_Order-item_price_box'>
                                      <div>
                                        <span className='TrackOrder-item_price-quantity_title_branch'>Price: </span>
                                      </div>
                                      <div className='TrackOrder-item_price-quantity_right'>
                                        <span className='TrackOrder-item_price-quantity_right_span_branch'>N$ {info.price}</span>
                                      </div>
                                    </div>
                                    <div className='Track_Order-item_quantity_box'>
                                      <div>
                                        <span className='TrackOrder-item_price-quantity_title_branch'>Quantity: </span>
                                      </div>
                                      <div className='TrackOrder-item_price-quantity_right'>
                                        <span className='TrackOrder-item_price-quantity_right_span_branch'>{info.quantity}</span>
                                      </div>
                                    </div>
                                  </div>
                              </div>
                    <div style={{ paddingLeft: '20px', width: '350px'}}>
                      <div>
                      <div style={{ display: 'flex', position: 'absolute', zIndex: '1', marginLeft: '240px'}}>
                      <button 
                      onClick={()=> { updateCancelled(info.id, user._id); onCancel()}}
                      style={{ fontSize: '11px', padding: '0px 10px', cursor: 'pointer',
                       borderRadius: '5px', fontWeight: '700', background: '#c25be9', color: '#fff',
                        border: '2px solid #1380e7',
                       outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>CANCEL ORDER</button>
                    </div>
                        <div style={{ position: 'relative'}}>
                        <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
                        <div className='Track-Order-item_delivery_address_p_branch'>
                                  <div style={{ display: 'flex', marginTop: '10px'}}>
                                  {UserData.walvisAddress === undefined ?
                                  <></>
                                  :
                                  UserData && UserData.walvisAddress === "" ?
                                  <>
                                  <div>
                                  <TextareaAutosize minRows={2} maxLength={110} placeholder='Tell buyer where to pickup the Item' style={{ width: '260px', outline: '2px solid orange', fontSize: '13px',
                                      fontWeight: '700', border: 'none', borderRadius: '2px', padding: '3px 2px', color: '#656481', position: 'relative', height: '30px'}}
                                      onChange={onAddressChange} value={Address}
                                  />
                                  </div>
                                  <div style={{ padding: '10px 0px 0px 0px', marginLeft: '15px'}}>
                                      <button 
                                      onClick={() => {SaveAddress(); refreshPage()}}  
                                      style={{ cursor: 'pointer',width: '50px', height: '25px', display: 'flex',
                                       alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                                        color: '#fff', fontSize: '13px', fontWeight: 'bold', background: 'orange',
                                        borderRadius: '3px'}}>Save</button>
                                  </div>
                                  </>
                                  :
                                  <div>
                                  {toddleEdit === undefined ?
                                  <div className="show_editAddress">
                                        <div>{UserData.walvisAddress}</div>
                                  <div style={{ padding: '5px 0px 0px 0px', display: 'flex'}}>
                                      <button 
                                      onClick={()=>
                                        changetoggle(info.id)}
                                      style={{ cursor: 'pointer',width: '50px', height: '23px', display: 'flex',
                                       alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                                        color: '#fff', fontSize: '13px', fontWeight: '800', background: '#00BFFF',
                                        borderRadius: '3px'}}>Edit</button>
                                  </div>
                                    </div>
                                    :
                                    toddleEdit === info.id ?
                                    <>
                                    <div className="show_editAddressSave" >
                                  <div>
                                  <TextareaAutosize minRows={2} maxLength={110} placeholder='Tell buyer where to pickup the Item' style={{ width: '260px', outline: '2px solid orange', fontSize: '13px',
                                      fontWeight: '700', border: 'none', borderRadius: '2px', padding: '3px 2px', color: '#656481', position: 'relative', height: '30px'}}
                                      onChange={onAddressChange} value={Address}
                                      />
                                  </div>
                                  <div style={{ padding: '10px 0px 0px 0px', marginLeft: '15px'}}>
                                      <button 
                                      onClick={() => {SaveAddress(); refreshPage()}} 
                                      style={{ cursor: 'pointer',width: '50px', height: '25px', display: 'flex',
                                       alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                                        color: '#fff', fontSize: '13px', fontWeight: '800', background: 'orange',
                                        borderRadius: '3px'}}>Save</button>
                                  </div>
                                    </div>
                                                <div style={{ padding: '1px 0px 0px 0px'}}>
                                                <button 
                                                onClick={()=>
                                                  changetoggle(undefined)}
                                                style={{ cursor: 'pointer',width: '50px', height: '20px', display: 'flex',
                                                 alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                                                  color: '#fff', fontSize: '13px', fontWeight: '800', background: '#00BFFF',
                                                  borderRadius: '3px'}}>Back</button>
                                            </div>
                                            </>
                                  :
                                  <></>
                                  }
                                  </div>
                                  }
                        
                                    </div>
                                      </div>
                      </div> 
                      <div style={{ marginTop: '5px'}}>
                        <span className='TrackOrder-item_delivery_address_span'>User Information</span>
                        <div style={{ marginTop: '5px'}}>
                          <div style={{ display: 'flex'}}>
                          <div style={{ width: '205px', overflow: 'hidden'}}>
                                <span className='Track-Order-item_delivery_address_p_branch'>{user.name} {user.lastname}</span>
                            </div>
                            <div style={{ width: '125px', overflow: 'hidden'}}>
                                <span className='Track-Order-item_delivery_address_p_branch'>Nr: {user.contact}</span>
                            </div>
                          </div>
                          <div style={{ marginTop: '5px'}}>
                          <div style={{ display: 'flex', width: '100%'}}>
                            <div style={{ width: '330px', overflow: 'hidden'}}>
                                <span className='Track-Order-item_delivery_address_p_branch'>Email: {user.email}</span>
                            </div>
                          </div>
                          </div>
                        </div>
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
                          {info.orderConfirm === false ?
                          <span className='TrackOrder-item_delivery_stages_types-span'>waiting confirmation ....</span>
                          :
                          <></>
                          }
                        </div>
                      </div>
                    </div>
                    <div className='TrackOrder-item_delivery_stages_box'>
                      <div 
                        onClick={()=> { updateDeliveryConfirm(info.id, user._id); onConfirm()}}
                        className='TrackOrder-item_delivery_confirmed'>
                        <span className='TrackOrder-item_delivery_stages-active'>
                        Click To Confirm Order
                        </span>
                      </div>
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
          }
      })
      
      const RenderCancelledOrders = Branch.map((user, index) => {
      let userInfo = user.history;
      if(user && user.userLocation === "Grootfontein") {
        return (
          <>
            {userInfo.map(info => (
            <>
              {info.orderShip === true ?
          <div key={index} className='TrackOrder-item_box_branch'>
          <div className='TrackOrder-item_top_section'>
          <div className='TrackOrder_Branch-item_image_box'>
              <BranchImages images={info.images} />
            </div>
            <div className='TrackOrder_Branch-item_title_box'>
              <div className='TrackOrder-item_title'>
                <span className='TrackOrder-item_title_span_branch'>{info.name}</span>
              </div>
              <div className='Track_Order-item_price-quantity'>
                  <div className='Track_Order-item_price_box'>
                    <div>
                      <span className='TrackOrder-item_price-quantity_title_branch'>Price: </span>
                    </div>
                    <div className='TrackOrder-item_price-quantity_right'>
                      <span className='TrackOrder-item_price-quantity_right_span_branch'>N$ {info.price}</span>
                    </div>
                  </div>
                  <div className='Track_Order-item_quantity_box'>
                    <div>
                      <span className='TrackOrder-item_price-quantity_title_branch'>Quantity: </span>
                    </div>
                    <div className='TrackOrder-item_price-quantity_right'>
                      <span className='TrackOrder-item_price-quantity_right_span_branch'>{info.quantity}</span>
                    </div>
                  </div>
                </div>
            </div>
            <div style={{ paddingLeft: '20px', width: '350px'}}>
              <div>
              <div style={{ display: 'flex', position: 'absolute',zIndex: '1', marginLeft: '235px'}}>
              <button 
              onClick={()=> { updateUnCancel(info.id, user._id); onRestore()}}
              style={{ fontSize: '11px', padding: '0px 10px', cursor: 'pointer',
               borderRadius: '5px', fontWeight: '700', background: '#c25be9', color: '#fff', border: '2px solid #1380e7',
               outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>RESTORE ORDER</button>
            </div>
                <div style={{ position: 'relative'}}>
                <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
                <div className='Track-Order-item_delivery_address_p_branch'>
                            <span >Store Location Address:</span>
                            <div style={{ display: 'flex', marginTop: '5px'}}>
                            {info.storeAddress}
                              </div>
                                </div>
              </div> 
              <div style={{ marginTop: '5px'}}>
                <span className='TrackOrder-item_delivery_address_span'>User Information</span>
                <div style={{ marginTop: '5px'}}>
                  <div style={{ display: 'flex'}}>
                  <div style={{ width: '205px', overflow: 'hidden'}}>
                        <span className='Track-Order-item_delivery_address_p_branch'>{user.name} {user.lastname}</span>
                    </div>
                    <div style={{ width: '125px', overflow: 'hidden'}}>
                        <span className='Track-Order-item_delivery_address_p_branch'>Nr: {user.contact}</span>
                    </div>
                  </div>
                  <div style={{ marginTop: '5px'}}>
                  <div style={{ display: 'flex', width: '100%'}}>
                    <div style={{ width: '330px', overflow: 'hidden'}}>
                        <span className='Track-Order-item_delivery_address_p_branch'>Email: {user.email}</span>
                    </div>
                  </div>
                  </div>
                </div>
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
                  {info.orderShip === true ?
                  <span className='TrackOrder-item_delivery_stages_types-span_confirmed'>Transaction Cancelled ....</span>
                  :
                  <></>
                  }
                </div>
              </div>
            </div>
            <div className='TrackOrder-item_delivery_stages_box'>
              <div className='TrackOrder-item_delivery_shipped'>
                <span className='TrackOrder-item_delivery_stages-active'>
                  Cancelled</span>
              </div>
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
          }
      })
      
      const RenderReady = Branch.map((user, index) => {
      let userInfo = user.history;
      if(user && user.userLocation === "Grootfontein") {
        return (
          <>
            {userInfo.map(info => (
            <>
              {info.orderConfirm === true && info.orderDelivered === false && info.orderShip === false  ?
                    <div key={index} className='TrackOrder-item_box_branch'>
                    <div className='TrackOrder-item_top_section'>
                    <div className='TrackOrder_Branch-item_image_box'>
                        <BranchImages images={info.images} />
                      </div>
                      <div className='TrackOrder_Branch-item_title_box'>
                        <div className='TrackOrder-item_title'>
                          <span className='TrackOrder-item_title_span_branch'>{info.name}</span>
                        </div>
                        <div className='Track_Order-item_price-quantity'>
                            <div className='Track_Order-item_price_box'>
                              <div>
                                <span className='TrackOrder-item_price-quantity_title_branch'>Price: </span>
                              </div>
                              <div className='TrackOrder-item_price-quantity_right'>
                                <span className='TrackOrder-item_price-quantity_right_span_branch'>N$ {info.price}</span>
                              </div>
                            </div>
                            <div className='Track_Order-item_quantity_box'>
                              <div>
                                <span className='TrackOrder-item_price-quantity_title_branch'>Quantity: </span>
                              </div>
                              <div className='TrackOrder-item_price-quantity_right'>
                                <span className='TrackOrder-item_price-quantity_right_span_branch'>{info.quantity}</span>
                              </div>
                            </div>
                          </div>
                      </div>
                      <div style={{ paddingLeft: '20px', width: '350px'}}>
                      <div>
                        <div style={{ display: 'flex', position: 'absolute', zIndex: '1', marginLeft: '240px'}}>
                        <button 
                        onClick={()=> { updateCancelled(info.id, user._id); onCancel()}}
                        style={{ fontSize: '11px', padding: '0px 10px', cursor: 'pointer',
                         borderRadius: '5px', fontWeight: '700', background: '#c25be9', color: '#fff',
                          border: '2px solid #1380e7',
                         outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>CANCEL ORDER</button>
                      </div>
                          <div style={{ position: 'relative'}}>
                          <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
                          <div className='Track-Order-item_delivery_address_p_branch'>
                          <div style={{ display: 'flex', marginTop: '10px'}}>
                          {UserData.windhoekAddress === undefined ?
                          <></>
                          :
                          UserData && UserData.windhoekAddress === "" ?
                          <>
                          <div>
                          <TextareaAutosize minRows={2} maxLength={110} placeholder='Tell buyer where to pickup the Item' style={{ width: '260px', outline: '2px solid orange', fontSize: '13px',
                              fontWeight: '700', border: 'none', borderRadius: '2px', padding: '3px 2px', color: '#656481', position: 'relative', height: '30px'}}
                              onChange={onAddressChange} value={Address}
                          />
                          </div>
                          <div style={{ padding: '10px 0px 0px 0px', marginLeft: '15px'}}>
                              <button 
                              onClick={SaveAddress} 
                              style={{ cursor: 'pointer',width: '50px', height: '25px', display: 'flex',
                               alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                                color: '#fff', fontSize: '13px', fontWeight: 'bold', background: 'orange',
                                borderRadius: '3px'}}>Save</button>
                          </div>
                          </>
                          :
                          <div>
                          {toddleEdit === undefined ?
                          <div className="show_editAddress">
                                <div>{UserData.windhoekAddress}</div>
                          <div style={{ padding: '5px 0px 0px 0px', display: 'flex'}}>
                              <button 
                              onClick={()=>
                                changetoggle(info.id)}
                              style={{ cursor: 'pointer',width: '50px', height: '23px', display: 'flex',
                               alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                                color: '#fff', fontSize: '13px', fontWeight: '800', background: '#00BFFF',
                                borderRadius: '3px'}}>Edit</button>
                          </div>
                            </div>
                            :
                            toddleEdit === info.id ?
                            <>
                            <div className="show_editAddressSave" >
                          <div>
                          <TextareaAutosize minRows={2} maxLength={110} placeholder='Tell buyer where to pickup the Item' style={{ width: '260px', outline: '2px solid orange', fontSize: '13px',
                              fontWeight: '700', border: 'none', borderRadius: '2px', padding: '3px 2px', color: '#656481', position: 'relative', height: '30px'}}
                              onChange={onAddressChange} value={Address}
                          />
                          </div>
                          <div style={{ padding: '10px 0px 0px 0px', marginLeft: '15px'}}>
                              <button 
                              onClick={() => {SaveAddress(); refreshPage()}} 
                              style={{ cursor: 'pointer',width: '50px', height: '25px', display: 'flex',
                               alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                                color: '#fff', fontSize: '13px', fontWeight: '800', background: 'orange',
                                borderRadius: '3px'}}>Save</button>
                          </div>
                            </div>
                                        <div style={{ padding: '1px 0px 0px 0px'}}>
                                        <button 
                                        onClick={()=>
                                          changetoggle(undefined)}
                                        style={{ cursor: 'pointer',width: '50px', height: '20px', display: 'flex',
                                         alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                                          color: '#fff', fontSize: '13px', fontWeight: '800', background: '#00BFFF',
                                          borderRadius: '3px'}}>Back</button>
                                    </div>
                                    </>
                          :
                          <></>
                          }
                          </div>
                          }
                
                            </div>
                              </div>
                        </div> 
                        <div style={{ marginTop: '5px'}}>
                        <span className='TrackOrder-item_delivery_address_span'>User Information</span>
                        <div style={{ marginTop: '5px'}}>
                          <div style={{ display: 'flex'}}>
                          <div style={{ width: '205px', overflow: 'hidden'}}>
                                <span className='Track-Order-item_delivery_address_p_branch'>{user.name} {user.lastname}</span>
                            </div>
                            <div style={{ width: '125px', overflow: 'hidden'}}>
                                <span className='Track-Order-item_delivery_address_p_branch'>Nr: {user.contact}</span>
                            </div>
                          </div>
                          <div style={{ marginTop: '5px'}}>
                          <div style={{ display: 'flex', width: '100%'}}>
                            <div style={{ width: '330px', background: 'red', overflow: 'hidden'}}>
                                <span className='Track-Order-item_delivery_address_p_branch'>Email: {user.email}</span>
                            </div>
                          </div>
                          </div>
                        </div>
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
                          <div style={{ position: 'relative'}}>
                            {
                            info.orderConfirm === true ?
                            <span className='TrackOrder-item_delivery_stages_types-span_shipped'>Item is Ready for Pickup ....</span>
                            :
                            <></>
                            }
                          </div>
                        </div>
                      </div>
                      <div className='TrackOrder-item_delivery_stages_box'>
                        <div 
                        onClick={()=> { updateDeliveryDone(info.id, user._id); onDoneOrder()}}
                        className='TrackOrder-item_delivery_delivered'>
                          <span className='TrackOrder-item_delivery_stages-active'>
                            Click When Buyer Buys Item
                          </span>
                        </div>
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
          }
      })
      
      const RenderDeliveredOrders = Branch.map((user, index) => {
        let userInfo = user.history;
      
        if(user && user.userLocation === "Grootfontein" ) {
          return (
            <>
              {userInfo.map(info => (
              <>
                {info.orderDelivered === true && info.orderShip === false  ?
                      <div key={index} className='TrackOrder-item_box_branch'>
                      <div className='TrackOrder-item_top_section'>
                      <div className='TrackOrder_Branch-item_image_box'>
                        <BranchImages images={info.images} />
                      </div>
                      <div className='TrackOrder_Branch-item_title_box'>
                        <div className='TrackOrder-item_title'>
                          <span className='TrackOrder-item_title_span_branch'>{info.name}</span>
                        </div>
                        <div className='Track_Order-item_price-quantity'>
                            <div className='Track_Order-item_price_box'>
                              <div>
                                <span className='TrackOrder-item_price-quantity_title_branch'>Price: </span>
                              </div>
                              <div className='TrackOrder-item_price-quantity_right'>
                                <span className='TrackOrder-item_price-quantity_right_span_branch'>N$ {info.price}</span>
                              </div>
                            </div>
                            <div className='Track_Order-item_quantity_box'>
                              <div>
                                <span className='TrackOrder-item_price-quantity_title_branch'>Quantity: </span>
                              </div>
                              <div className='TrackOrder-item_price-quantity_right'>
                                <span className='TrackOrder-item_price-quantity_right_span_branch'>{info.quantity}</span>
                              </div>
                            </div>
                          </div>
                      </div>
                        <div style={{ paddingLeft: '20px', width: '350px'}}>
                          <div>
                          <div style={{ display: 'flex', position: 'absolute',zIndex: '1', marginLeft: '175px'}}>
                          <button 
                          onClick={()=> { updateRemoveTransaction(info.id, user._id); onTransaction()}}
                          style={{ fontSize: '11px', padding: '0px 10px', cursor: 'pointer',
                           borderRadius: '5px', fontWeight: '700', background: '#c25be9', color: '#fff', border: '2px solid #1380e7',
                           outline: 'none', display: 'flex', justifyContent: 'center', 
                           alignItems: 'center'}}>REMOVE FROM COMPLETED</button>
                        </div>
                            <div style={{ position: 'relative'}}>
                            <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
                            <div className='Track-Order-item_delivery_address_p_branch'>
                            <span >Store Location Address:</span>
                            <div style={{ display: 'flex', marginTop: '5px'}}>
                            {info.storeAddress}
                              </div>
                                </div>
                          </div> 
                          <div style={{ marginTop: '10px'}}>
                          <span className='TrackOrder-item_delivery_address_span'>User Information</span>
                          <div style={{ marginTop: '5px'}}>
                            <div style={{ display: 'flex'}}>
                            <div style={{ width: '205px', overflow: 'hidden'}}>
                                  <span className='Track-Order-item_delivery_address_p_branch'>{user.name} {user.lastname}</span>
                              </div>
                              <div style={{ width: '125px', overflow: 'hidden'}}>
                                  <span className='Track-Order-item_delivery_address_p_branch'>Nr: {user.contact}</span>
                              </div>
                            </div>
                            <div style={{ marginTop: '5px'}}>
                            <div style={{ display: 'flex', width: '100%'}}>
                              <div style={{ width: '330px', overflow: 'hidden'}}>
                                  <span className='Track-Order-item_delivery_address_p_branch'>Email: {user.email}</span>
                              </div>
                            </div>
                            </div>
                          </div>
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
                            <div style={{ position: 'relative'}}>
                              {
                              info.orderDelivered === true ?
                              <span className='TrackOrder-item_delivery_stages_types-span_Done'>Transaction has been Completed</span>
                              :
                              <></>
                              }
                            </div>
                          </div>
                        </div>
                        <div className='TrackOrder-item_delivery_stages_box'>
                          <div 
                          className='TrackOrder-item_delivery_complete'>
                            <span className='TrackOrder-item_delivery_stages-active'>
                              Transaction Done
                            </span>
                          </div>
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
            }
        })

  return (
    <div className='Branches_Location_container'>
    <div className='Branch_title_box'>
    <span className='Branch_title_box_span'>Grootfontein Branch</span>
      </div>
      <div className='Branches-container_box'>
        <div className='Branch_delivery_Location_toggle'>
          <div className='Branches_delivery_toggle_top'>
            <div style={{ width: '250px' }}>
              <button className={toggleBranch===1 ? "Branch-deliveryTabs ConfirmTab active-Branch-deliveryTabs"
                : "ConfirmTab Branch-deliveryTabs" } onClick={()=>
                toggleBranchTab(1)}>STANDING ORDERS</button>
            </div>
            <div style={{ width: '250px'}}>
              <button className={toggleBranch===3 ? "Branch-deliveryTabs DeliverTab active-Branch-deliveryTabs"
                : "DeliverTab Branch-deliveryTabs" } onClick={()=>
                toggleBranchTab(3)}>READY FOR PICKUP</button>
            </div>
            <div style={{ width: '250px'}}>
              <button className={toggleBranch===4 ? "Branch-deliveryTabs DeliveredOrders active-Branch-deliveryTabs"
                : "DeliveredOrders Branch-deliveryTabs" } onClick={()=>
                toggleBranchTab(4)}>DELIVERED ORDERS</button>
            </div>
            <div style={{ width: '250px'}}>
              <button className={toggleBranch===2 ? "Branch-deliveryTabs ShipTab active-Branch-deliveryTabs"
                : "ShipTab Branch-deliveryTabs" } onClick={()=>
                toggleBranchTab(2)}>CANCELLED ORDERS </button>
            </div>
    
          </div>
          <div className={toggleBranch===1 ? "active-Deliveries_location" :"Deliveries-hidden"}>
      {Branch.length === undefined ?
    <></>
    :
    Branch.length === 0 ?
    <div className='TrackOrder-item_box_branch'>
    <div className='TrackOrder-item_top_section'>
      <div className='TrackOrder_Branch-item_image_box'>
      <img style={{ width: '100%', height: '200px' }} src={NoImage} alt="" />
      </div>
      <div className='TrackOrder_Branch-item_title_box'>
        <div className='TrackOrder-item_title'>
          <span className='TrackOrder-item_title_span_branch'>This is where the Title of the product is shown.</span>
        </div>
        <div className='Track_Order-item_price-quantity'>
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
                <span className='TrackOrder-item_price-quantity_right_span_branch'>X </span>
              </div>
            </div>
          </div>
      </div>
      <div style={{ paddingLeft: '20px', width: '350px'}}>
        <div>
        <div style={{ display: 'flex', position: 'absolute', zIndex: '1', marginLeft: '240px'}}>
        <button 
        style={{ fontSize: '11px', padding: '0px 10px', cursor: 'pointer',
         borderRadius: '5px', fontWeight: '700', background: '#c25be9', color: '#fff',
          border: '2px solid #1380e7',
         outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>CANCEL ORDER</button>
      </div>
          <div style={{ position: 'relative'}}>
          <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
          <div className='Track-Order-item_delivery_address_p_branch'>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <div>
          <TextareaAutosize minRows={2} maxLength={110} value='Tell buyer where to pickup the Item' style={{ width: '260px', outline: '2px solid orange', fontSize: '13px',
              fontWeight: '700', border: 'none', borderRadius: '2px', padding: '3px 2px', color: '#656481', position: 'relative', height: '30px'}}
          />
          </div>
          <div style={{ padding: '10px 0px 0px 0px', marginLeft: '15px'}}>
              <button 
              style={{ cursor: 'pointer',width: '50px', height: '25px', display: 'flex',
               alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                color: '#fff', fontSize: '13px', fontWeight: 'bold', background: 'orange',
                borderRadius: '3px'}}>Save</button>
          </div>

            </div>
              </div>
        </div> 
        <div style={{ marginTop: '5px'}}>
          <span className='TrackOrder-item_delivery_address_span'>User Information</span>
          <div style={{ marginTop: '5px'}}>
            <div style={{ display: 'flex'}}>
            <div style={{ width: '205px', overflow: 'hidden'}}>
                  <span className='Track-Order-item_delivery_address_p_branch'>Name: Buyer Name</span>
              </div>
              <div style={{ width: '125px', overflow: 'hidden'}}>
                  <span className='Track-Order-item_delivery_address_p_branch'>Nr: Number</span>
              </div>
            </div>
            <div style={{ marginTop: '5px'}}>
            <div style={{ display: 'flex', width: '100%'}}>
              <div style={{ width: '330px', overflow: 'hidden'}}>
                  <span className='Track-Order-item_delivery_address_p_branch'>Email: Buyer Email</span>
              </div>
            </div>
            </div>
          </div>
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
            <span className='TrackOrder-item_delivery_stages_types-span'>waiting confirmation ....</span>

          </div>
        </div>
      </div>
      <div className='TrackOrder-item_delivery_stages_box'>
        <div 
          className='TrackOrder-item_delivery_confirmed'>
          <span className='TrackOrder-item_delivery_stages-active'>
          Click To Confirm Order
          </span>
        </div>
      </div>
    </div>
  </div>
    :
    Branch.length !== undefined && Branch.length !== 0 ?
    <>
    {RenderStandingOrders}
    </>
  
    :
    <></>
      }

      </div>
      <div className={toggleBranch===2 ? "active-Deliveries_location" :"Deliveries-hidden"}>
      {Branch.length === undefined ?
    <></>
    :
    Branch.length === 0 ?
    <div className='TrackOrder-item_box_branch'>
    <div className='TrackOrder-item_top_section'>
    <div className='TrackOrder_Branch-item_image_box'>
    <img style={{ width: '100%', height: '200px' }} src={NoImage} alt="" />
      </div>
      <div className='TrackOrder_Branch-item_title_box'>
        <div className='TrackOrder-item_title'>
          <span className='TrackOrder-item_title_span_branch'>This is where the Title of the product is shown.</span>
        </div>
        <div className='Track_Order-item_price-quantity'>
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
                <span className='TrackOrder-item_price-quantity_right_span_branch'>X </span>
              </div>
            </div>
          </div>
      </div>
      <div style={{ paddingLeft: '20px', width: '350px'}}>
        <div>
        <div style={{ display: 'flex', position: 'absolute',zIndex: '1', marginLeft: '235px'}}>
        <button 
        style={{ fontSize: '11px', padding: '0px 10px', cursor: 'pointer',
         borderRadius: '5px', fontWeight: '700', background: '#c25be9', color: '#fff', border: '2px solid #1380e7',
         outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>RESTORE ORDER</button>
      </div>
          <div style={{ position: 'relative'}}>
          <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
          <div className='Track-Order-item_delivery_address_p_branch'>
            <span >Store Location Address:</span>
            <div style={{ display: 'flex', marginTop: '5px'}}>
            <div className="show_editAddress">
            <div>{UserData.windhoekAddress}</div>
            </div>
            </div>
          </div>

        </div> 
        <div style={{ marginTop: '10px'}}>
          <span className='TrackOrder-item_delivery_address_span'>User Information</span>
          <div style={{ marginTop: '5px'}}>
          <div style={{ display: 'flex'}}>
            <div style={{ width: '205px', overflow: 'hidden'}}>
                  <span className='Track-Order-item_delivery_address_p_branch'>Name: Buyer Name</span>
              </div>
              <div style={{ width: '125px', overflow: 'hidden'}}>
                  <span className='Track-Order-item_delivery_address_p_branch'>Nr: Number</span>
              </div>
            </div>
            <div style={{ marginTop: '5px'}}>
            <div style={{ display: 'flex', width: '100%'}}>
              <div style={{ width: '330px', overflow: 'hidden'}}>
                  <span className='Track-Order-item_delivery_address_p_branch'>Email: Buyer Email</span>
              </div>
            </div>
            </div>
          </div>
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
            <span className='TrackOrder-item_delivery_stages_types-span_confirmed'>Transaction Cancelled ....</span>
          </div>
        </div>
      </div>
      <div className='TrackOrder-item_delivery_stages_box'>
        <div className='TrackOrder-item_delivery_shipped'>
          <span className='TrackOrder-item_delivery_stages-active'>
            Cancelled</span>
        </div>
      </div>
      </div>
      </div>
      :
    Branch.length !== undefined && Branch.length !== 0 ?
    <>
    {RenderCancelledOrders}
    </>
  
    :
    <></>
      }
      </div>
      <div className={toggleBranch===3 ? "active-Deliveries_location" :"Deliveries-hidden"}>
      {Branch.length === undefined ?
    <></>
    :
    Branch.length === 0 ?
    <div className='TrackOrder-item_box_branch'>
    <div className='TrackOrder-item_top_section'>
    <div className='TrackOrder_Branch-item_image_box'>
      <img style={{ width: '100%', height: '200px' }} src={NoImage} alt="" />
      </div>
      <div className='TrackOrder_Branch-item_title_box'>
        <div className='TrackOrder-item_title'>
          <span className='TrackOrder-item_title_span_branch'>This is where the Title of the product is shown.</span>
        </div>
        <div className='Track_Order-item_price-quantity'>
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
                <span className='TrackOrder-item_price-quantity_right_span_branch'>X </span>
              </div>
            </div>
          </div>
      </div>
      <div style={{ paddingLeft: '20px', width: '350px'}}>
      <div>
        <div style={{ display: 'flex', position: 'absolute', zIndex: '1', marginLeft: '240px'}}>
        <button 
        style={{ fontSize: '11px', padding: '0px 10px', cursor: 'pointer',
         borderRadius: '5px', fontWeight: '700', background: '#c25be9', color: '#fff',
          border: '2px solid #1380e7',
         outline: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>CANCEL ORDER</button>
      </div>
          <div style={{ position: 'relative'}}>
          <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
          <div className='Track-Order-item_delivery_address_p_branch'>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <div>
          <TextareaAutosize minRows={2} maxLength={110} value='Tell buyer where to pickup the Item' style={{ width: '260px', outline: '2px solid orange', fontSize: '13px',
              fontWeight: '700', border: 'none', borderRadius: '2px', padding: '3px 2px', color: '#656481', position: 'relative', height: '30px'}}
          />
          </div>
          <div style={{ padding: '10px 0px 0px 0px', marginLeft: '15px'}}>
              <button 
              style={{ cursor: 'pointer',width: '50px', height: '25px', display: 'flex',
               alignItems: 'center', justifyContent: 'center', border: 'none', outline: 'none',
                color: '#fff', fontSize: '13px', fontWeight: 'bold', background: 'orange',
                borderRadius: '3px'}}>Save</button>
          </div>

            </div>
              </div>
        </div> 
        <div style={{ marginTop: '5px'}}>
          <span className='TrackOrder-item_delivery_address_span'>User Information</span>
          <div style={{ marginTop: '5px'}}>
            <div style={{ display: 'flex'}}>
            <div style={{ width: '205px', overflow: 'hidden'}}>
                  <span className='Track-Order-item_delivery_address_p_branch'>Name: Buyer Name</span>
              </div>
              <div style={{ width: '125px', overflow: 'hidden'}}>
                  <span className='Track-Order-item_delivery_address_p_branch'>Nr: Number</span>
              </div>
            </div>
            <div style={{ marginTop: '5px'}}>
            <div style={{ display: 'flex', width: '100%'}}>
              <div style={{ width: '330px', overflow: 'hidden'}}>
                  <span className='Track-Order-item_delivery_address_p_branch'>Email: Buyer Email</span>
              </div>
            </div>
            </div>
          </div>
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
          <div style={{ position: 'relative'}}>
            <span className='TrackOrder-item_delivery_stages_types-span_shipped'>Item is Ready for Pickup ....</span>
          </div>
        </div>
      </div>
      <div className='TrackOrder-item_delivery_stages_box'>
        <div 
        className='TrackOrder-item_delivery_delivered'>
          <span className='TrackOrder-item_delivery_stages-active'>
            Click When Buyer Buys Item
          </span>
        </div>
      </div>
    </div>
  </div>
      :
    Branch.length !== undefined && Branch.length !== 0 ?
    <>
    {RenderReady}
    </>
  
    :
    <></>
      }
      </div>
      <div className={toggleBranch===4 ? "active-Deliveries_location" :"Deliveries-hidden"}>
      {Branch.length === undefined ?
    <></>
    :
    Branch.length === 0 ?
    <div className='TrackOrder-item_box_branch'>
    <div className='TrackOrder-item_top_section'>
    <div className='TrackOrder_Branch-item_image_box'>
                  <img style={{ width: '100%', height: '200px' }} src={NoImage} alt="" />
                  </div>
                  <div className='TrackOrder_Branch-item_title_box'>
                    <div className='TrackOrder-item_title'>
                      <span className='TrackOrder-item_title_span_branch'>This is where the Title of the product is shown.</span>
                    </div>
                    <div className='Track_Order-item_price-quantity'>
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
                            <span className='TrackOrder-item_price-quantity_right_span_branch'>X </span>
                          </div>
                        </div>
                      </div>
                  </div>
      <div style={{ paddingLeft: '20px', width: '350px'}}>
        <div>
        <div style={{ display: 'flex', position: 'absolute',zIndex: '1', marginLeft: '175px'}}>
        <button 
        style={{ fontSize: '11px', padding: '0px 10px', cursor: 'pointer',
         borderRadius: '5px', fontWeight: '700', background: '#c25be9', color: '#fff', border: '2px solid #1380e7',
         outline: 'none', display: 'flex', justifyContent: 'center', 
         alignItems: 'center'}}>REMOVE FROM COMPLETED</button>
      </div>
          <div style={{ position: 'relative'}}>
          <span className='TrackOrder-item_delivery_address_span'>Delivery Address</span>
          <div className='Track-Order-item_delivery_address_p_branch'>
          <span >Store Location Address:</span>
          <div style={{ display: 'flex', marginTop: '5px'}}>
                        <div className="show_editAddress">
                        <div>{UserData.windhoekAddress}</div>
                        </div>
                        </div>
              </div>
        </div> 
        <div style={{ marginTop: '10px'}}>
                      <span className='TrackOrder-item_delivery_address_span'>User Information</span>
                      <div style={{ marginTop: '5px'}}>
                        <div style={{ display: 'flex'}}>
                        <div style={{ width: '205px', overflow: 'hidden'}}>
                              <span className='Track-Order-item_delivery_address_p_branch'>Name: Buyer Name</span>
                          </div>
                          <div style={{ width: '125px', overflow: 'hidden'}}>
                              <span className='Track-Order-item_delivery_address_p_branch'>Nr: Number</span>
                          </div>
                        </div>
                        <div style={{ marginTop: '5px'}}>
                        <div style={{ display: 'flex', width: '100%'}}>
                          <div style={{ width: '330px', overflow: 'hidden'}}>
                              <span className='Track-Order-item_delivery_address_p_branch'>Email: Buyer Email</span>
                          </div>
                        </div>
                        </div>
                      </div>
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
          <div style={{ position: 'relative'}}>

            <span className='TrackOrder-item_delivery_stages_types-span_Done'>Transaction has been Completed</span>

          </div>
        </div>
      </div>
      <div className='TrackOrder-item_delivery_stages_box'>
        <div 
        className='TrackOrder-item_delivery_complete'>
          <span className='TrackOrder-item_delivery_stages-active'>
            Transaction Done
          </span>
        </div>
      </div>
    </div>
  </div>
      :
    Branch.length !== undefined && Branch.length !== 0 ?
    <>
    {RenderDeliveredOrders}
    </>
  
    :
    <></>
      }
      </div>
        </div>
      </div>
    </div>
  )
}

export default GrootfonteinLocation