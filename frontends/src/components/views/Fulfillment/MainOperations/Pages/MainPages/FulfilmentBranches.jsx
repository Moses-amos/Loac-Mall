import React, { useState, useEffect } from 'react'
import './retailerstyle.css'
import './retailerpages.css'
import NoImage from './Images/No_Image.jpg'
import Axios from 'axios';

function FulfilmentBranches(props) {

  const [UserData, setUserData] = useState([])
  const [Products, setProducts] = useState([])

const [toggleBranch, setToggleBranch] = useState(0);

const toggleBranchTab = (index) => {
setToggleBranch(index);
}


useEffect(() => {

Axios.post('/api/users/getHistoryProducts')
.then(response => {
    if (response.data.success) {
      setProducts(response.data.doc)
    }
})

Axios.get('/api/users/getUser')
.then(response => {
if (response.data.success) {
  setUserData(response.data.doc)
}
})

}, [])

const WindhoekProducts = Products.map((product, index) => {
  let history = product.history;

  if(product && product.userLocation === "Windhoek") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  } 

})

const KatimaMuliloProducts = Products.map((product, index) => {
  let history = product.history;

  if(product.userLocation === "KatimaMulilo" ) {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  } 

  })

const WalvisProducts = Products.map((product, index) => {
  let history = product.history;
  if(product && product.userLocation === "Walvis") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  } 
})

const SwakopProducts = Products.map((product, index) => {
  let history = product.history;

  if(product.userLocation === "Swakop") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  }

})

const OshakatiProducts = Products.map((product, index) => {
  let history = product.history;
  if(product.userLocation === "Oshakati") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  }

})

const GrootfonteinProducts = Products.map((product, index) => {
  let history = product.history;
  if(product.userLocation === "Grootfontein") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  }

})

const RunduProducts = Products.map((product, index) => {
  let history = product.history;
  if(product.userLocation === "Rundu") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  }

})

const OtjiwarongoProducts = Products.map((product, index) => {
  let history = product.history;
  if(product.userLocation === "Otjiwarongo") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  }

})

const OngwedivaProducts = Products.map((product, index) => {
  let history = product.history;
  if(product.userLocation === "Ongwediva") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  }

})

const OkahandjaProducts = Products.map((product, index) => {
  let history = product.history;
  if(product.userLocation === "Okahandja") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  }

})

const GobabisProducts = Products.map((product, index) => {
  let history = product.history;
  if(product.userLocation === "Gobabis") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  }

})

const RehobothProducts = Products.map((product, index) => {
  let history = product.history;
  if(product.userLocation === "Rehoboth") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  }

})

const TsumebProducts = Products.map((product, index) => {
  let history = product.history;
  if(product.userLocation === "Tsumeb") {
    return (
      <>
      {history.map(his => (
          <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                  <img style={{ width: '100%', height: '100%' }} src={`http://localhost:5000/${his.images[0]}`}
                    alt="productImage" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left'>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                      {his.orderDelivered === true ?
                      <span>Purchased</span>
                      :
                      <span>Pending</span>
                      }
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Delivery:</div>
                    <div className='branch-Item-delivery_options_right'>{product.storePickup === true ? <p>Pick Up</p> :
                      <p>To Address</p>}</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '10px'}}>
                    <div className='branch-Item-delivery_options_left'>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <div className='branch_detail_price_absolute'>
                      N$
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative'}}>
                      {his.price}
                    </div>
                     
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left'>Quantity:</div>
                    <div className='branch-Item-delivery_options_right'>
                    {his.quantity === undefined ?
                <></>
                :
                his.quantity === 1 ?
                <p>{his.quantity} unit</p>
                :
                his.quantity !== 1 ?
                <p>{his.quantity} units</p>
                :
                <></>
              }
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p'>{his.name}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </>
    )
  }

})

return (
<div className='Retailer_fulfilment_main_container'>
  {/* <RetailerSidebar /> */}
  <div style={{ width: '210px'}}>

</div>
  <div className='Retailer_fullfilment_box'>
    <div className='Fulfilment_page_title'>
    <span style={{ fontWeight: '700', fontSize: '23px', color: '#fff'}}>Activity</span>
  </div>
    <div style={{ width: '100%', minHeight: '120px', display: 'flex', alignItems: 'center', flexWrap: 'wrap', paddingTop: '15px' }}>
    {UserData && UserData.Walvis === undefined?
      <></>
      :
      UserData && ( UserData.Windhoek === false && UserData.Walvis === false && UserData.Swakop === false && UserData.Oshakati === false && UserData.Okahandja === false
        && UserData.Grootfontein === false && UserData.Rehoboth === false && UserData.Ongwediva === false && UserData.Gobabis === false && UserData.KatimaMulilo === false
         && UserData.Rundu === false && UserData.Otjiwarongo === false && UserData.Tsumeb === false )?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===1 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(2)}>Active Location</button>
      </div>
      :
      <></>
      }
      {UserData && UserData.Windhoek === undefined?
      <></>
      :
      UserData && UserData.Windhoek === false?
      <></>
      :
      UserData && UserData.Windhoek === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===1 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(1)}>Windhoek History</button>
      </div>
      :
      <></>
      }
      
      {UserData && UserData.Walvis === undefined?
      <></>
      :
      UserData && UserData.Walvis === false?
      <></>
      :
      UserData && UserData.Walvis === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===2 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(2  )}>WalvisBay History</button>
      </div>
      :
      <></>
      }

      {UserData && UserData.Swakop === undefined?
      <></>
      :
      UserData && UserData.Swakop === false?
      <></>
      :
      UserData && UserData.Swakop === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===3 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(3)}>Swakopmund History</button>
      </div>
      :
      <></>
      }

      {UserData && UserData.Oshakati === undefined?
      <></>
      :
      UserData && UserData.Oshakati === false?
      <></>
      :
      UserData && UserData.Oshakati === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===4 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(4)}>Oshakati History</button>
      </div>
      :
      <></>
      }

      {UserData && UserData.Okahandja === undefined?
      <></>
      :
      UserData && UserData.Okahandja === false?
      <></>
      :
      UserData && UserData.Okahandja === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===5 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(5)}>Okahandja History</button>
      </div>
      :
      <></>
      }

      {UserData && UserData.Grootfontein === undefined?
      <></>
      :
      UserData && UserData.Grootfontein === false?
      <></>
      :
      UserData && UserData.Grootfontein === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===6 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(6)}>Grootfontein History</button>
      </div>
      :
      <></>
      }

      {UserData && UserData.Rehoboth === undefined?
      <></>
      :
      UserData && UserData.Rehoboth === false?
      <></>
      :
      UserData && UserData.Rehoboth === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===7 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(7)}>Rehoboth History</button>
      </div>
      :
      <></>
      }

      {UserData && UserData.Ongwediva === undefined?
      <></>
      :
      UserData && UserData.Ongwediva === false?
      <></>
      :
      UserData && UserData.Ongwediva === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===8 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(8)}>Ongwediva History</button>
      </div>
      :
      <></>
      }

      {UserData && UserData.Gobabis === undefined?
      <></>
      :
      UserData && UserData.Gobabis === false?
      <></>
      :
      UserData && UserData.Gobabis === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===9 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(9)}>Gobabis History</button>
      </div>
      :
      <></>
      }

      {UserData && UserData.KatimaMulilo === undefined?
      <></>
      :
      UserData && UserData.KatimaMulilo === false?
      <></>
      :
      UserData && UserData.KatimaMulilo === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===10 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(10)}>KatimaMulilo  History</button>
      </div>
      :
      <></>
      }

      {UserData && UserData.Rundu === undefined?
      <></>
      :
      UserData && UserData.Rundu === false?
      <></>
      :
      UserData && UserData.Rundu === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===11 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(11)}>Rundu History</button>
      </div>
      :
      <></>
      }  

      {UserData && UserData.Otjiwarongo === undefined?
      <></>
      :
      UserData && UserData.Otjiwarongo === false?
      <></>
      :
      UserData && UserData.Otjiwarongo === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===12 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(12)}>Otjiwarongo History</button>
      </div>
      :
      <></>
      }  

      {UserData && UserData.Tsumeb === undefined?
      <></>
      :
      UserData && UserData.Tsumeb === false?
      <></>
      :
      UserData && UserData.Tsumeb === true?
      <div style={{ width: '160px', margin: '0px 10px 10px 0px'}}>
        <button className={toggleBranch===13 ? "BranchTabs active-BranchTabs" : "BranchTabs" } onClick={()=>
          toggleBranchTab(13)}>Tsumeb History</button>
      </div>
      :
      <></>
      }  
      {UserData && UserData._id === undefined ?
      <></>
      :
      <div style={{ width: '160px', margin: '0px 5px 10px 0px'}}>
        <a href='/store-locations' className="BranchTabsLocation">Add Location</a>
      </div>
      }
      
    </div>
    <div className={toggleBranch===0 ? "active-BranchAll" :"Branches"}>
      <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <div style={{ height: '400px', paddingTop: '130px'}}>
          <span style={{ fontSize: '27px', color: '#74767c', fontWeight: '700'}}>Click on Locations above to view their Activity</span>
        </div>
      </div>
    </div>
    {Products.length === undefined ?
    <></>
    :
    Products.length === 0 && (toggleBranch===1 || toggleBranch===2 || toggleBranch===3 || toggleBranch===4 || toggleBranch===5 
      || toggleBranch===6 || toggleBranch===7 || toggleBranch===8 || toggleBranch===9 || toggleBranch===10 || toggleBranch===11 
      || toggleBranch===12 || toggleBranch===13 ) ?
      <div style={{ paddingTop: '0px'}}>
      <div className='Overview_Demonstration'>
    <span className='Overview_Demonstration_Title'>Activity By Town</span>
  </div>
  <div style={{ marginBottom: '20px'}}>
      <div>
          <span style={{ fontWeight: '600', fontSize: '13px', color: '#333'}}>Requests History is separated and shown at the branch where they were handled.</span>
      </div>
   </div>
   <div style={{ display: 'flex', paddingBottom: '30px'}}>
   <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                {/* <img style={{ width: '330px', height: '170px'}} src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" /> */}
                  <img style={{ width: '100%', height: '100%' }} src={NoImage} alt="" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left' style={{cursor: 'default'}}>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <span style={{cursor: 'default'}}>Unknown</span>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left' style={{cursor: 'default'}}>Delivery:</div>
                    <div className='branch-Item-delivery_options_right' style={{cursor: 'default'}}>Unknown</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left' style={{cursor: 'default'}}>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <span style={{cursor: 'default'}}>0.00</span>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left' style={{cursor: 'default'}}>Quantity:</div>
                    <div className='branch-Item-delivery_options_right' style={{cursor: 'default'}}>1 Unit</div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p' style={{cursor: 'default'}}>This is where the title of the product is shown.</p>
              </div>
            </div>
          </div>
        </div>
        <div className='branch-Item'>
          <div className='branch-Details'>
            <div style={{ width: '100%', height: '70%',display: 'flex'}}>
              <div style={{ width: '55%', height: '100%'}}>
                <div style={{ width: '100%', height: '100%'}}>
                {/* <img style={{ width: '330px', height: '170px'}} src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg" alt="" /> */}
                  <img style={{ width: '100%', height: '100%' }} src={NoImage} alt="" />
                </div>
              </div>
              <div style={{ width: '45%', height: '100%', padding: '10px 0px 0px 10px'}}>
                <ul style={{ display: 'block', width: '100%', height: '100%'}}>
                <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex'}}>
                    <div className='branch-Item-delivery_options_left' style={{cursor: 'default'}}>Status:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <span style={{cursor: 'default'}}>Unknown</span>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left' style={{cursor: 'default'}}>Delivery:</div>
                    <div className='branch-Item-delivery_options_right' style={{cursor: 'default'}}>Unknown</div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left' style={{cursor: 'default'}}>Price:</div>
                    <div className='branch-Item-delivery_options_right'>
                    <span style={{cursor: 'default'}}>0.00</span>
                    </div>
                  </li>
                  <li style={{ listStyle: 'none', width: '100%', padding: '3px 0px', display: 'flex', marginTop: '17px'}}>
                    <div className='branch-Item-delivery_options_left' style={{cursor: 'default'}}>Quantity:</div>
                    <div className='branch-Item-delivery_options_right' style={{cursor: 'default'}}>1 Unit</div>
                  </li>
                </ul>
              </div>
            </div>
            <div style={{ width: '100%', height: '30%', padding: '10px 0px', overflow: 'hidden'}}>
              <div style={{ width: '100%', height: '100%'}}>
                <p className='branch-Item_title_p' style={{cursor: 'default'}}>This is where the title of the product is shown.</p>
              </div>
            </div>
          </div>
        </div>
   </div>

</div>
:
<></>

    }
    <div className={toggleBranch===1 ? "active-BranchAll" :"Branches"}>
      {WindhoekProducts}
    </div>
    <div className={toggleBranch===2 ? "active-BranchAll" :"Branches"}>
      {WalvisProducts}
    </div>
    <div className={toggleBranch===3 ? "active-BranchAll" :"Branches"}>
    {SwakopProducts}
    </div>
    <div className={toggleBranch===4 ? "active-BranchAll" :"Branches"}>
      {OshakatiProducts}
    </div>
    <div className={toggleBranch===5 ? "active-BranchAll" :"Branches"}>
      {OkahandjaProducts}
    </div>
    <div className={toggleBranch===6 ? "active-BranchAll" :"Branches"}>
      {GrootfonteinProducts}
    </div>
    <div className={toggleBranch===7 ? "active-BranchAll" :"Branches"}>
      {RehobothProducts}
    </div>
    <div className={toggleBranch===8 ? "active-BranchAll" :"Branches"}>
      {OngwedivaProducts}
    </div>
    <div className={toggleBranch===9 ? "active-BranchAll" :"Branches"}>
    {GobabisProducts}
    </div>
    <div className={toggleBranch===10 ? "active-BranchAll" :"Branches"}>
      {KatimaMuliloProducts}
    </div>
    <div className={toggleBranch===11 ? "active-BranchAll" :"Branches"}>
      {RunduProducts}
    </div>
    <div className={toggleBranch===12 ? "active-BranchAll" :"Branches"}>
      {OtjiwarongoProducts}
    </div>
    <div className={toggleBranch===13 ? "active-BranchAll" :"Branches"}>
      {TsumebProducts}
    </div>
  </div>
</div>
)
}

export default FulfilmentBranches