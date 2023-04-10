import React, { useState } from 'react'
import ProductImage from '../../../../../assets/ProductImage'
import CompanyImage from '../../../../../assets/CompanyImage'

function ProductCart(props) {

const [showLogin, setshowLogin] = useState(1)
const [showLocal, setshowLocal] = useState(1)
const [showUnavailable, setshowUnavailable] = useState(1)

const popUpLogin = (index) => {
  setshowLogin(index);
}

const popUpUnAvailable = (index) => {
  setshowUnavailable(index);
}

const popUpLocal = (index) => {
  setshowLocal(index);
}

  return (
    <div className='listing-Item'>
    <div className='listing-Details'>
        <a href={`/product/${props.product._id}`}> <div className='Item-image'>
          <ProductImage images={props.product.images} />
      </div>
      <div className='Item-title'>
          <p className='Item-title_p'>{props.product.title}</p>
      </div>
      </a>
      <div className='Item-value'>
        <div className='Item-price'>
          <span className='Price-span'>N$ {props.product.price}</span>
          {(props.product.special !== "" && props.product.special !== "0") && (props.product.specialAttribute === "" || props.product.specialAttribute === "0" ) ?
          <>
            <div className='Save-Deals'>
              <div className='SavePercent'>
                <span className='Percent-Deal_span'>Save {props.product.special}</span>
              </div>
              <div className='Special_Deal_list'>
              <span>Special Sale</span>
            </div> 
            </div>
          </>
          :
          (props.product.specialAttribute !== "" && props.product.specialAttribute !== "0") && (props.product.special === "" || props.product.special === "0") ?
          <>
          <div className='Save-Deals'>
            <div className='SavePercent'>
              <span className='Percent-Deal_span'>Save N$ {props.product.specialAttribute}</span>
            </div>
            <div className='Special_Deal_list'>
              <span>Special Sale</span>
            </div> 
          </div>
        </>
        :
        props.product.special !== "0" && props.product.specialAttribute !== "0" ?
        <></>
      :
      <></>
          }
        </div>
        {props.product.wasPrice === 0 || props.product.wasPrice === undefined ?
        <></>
        :
        <div style={{ display: 'flex'}}>
        <div className='Item-wasPrice'>
          <span className='PriceWas-p'>N$ {props.product.wasPrice}</span>
        </div>
        <div className='PriceWas-line_over'>
        </div>
        </div>
        }
    
      </div>
      {props.product.warrenty ?
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <div className='Warrenty_span-detail_box'>
        <span className='Warrenty_span-detail'>{props.product.warrenty}</span>
      </div>
      <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
          {props.UserData && props.product === undefined ?
                        <></>
                        :
                        props.product.Windhoek === true && props.UserData.userLocation === "Windhoek" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.product.Walvis === true && props.UserData.userLocation === "Walvis" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.product.Swakop === true && props.UserData.userLocation === "Swakop" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.product.Okahandja === true && props.UserData.userLocation === "Okahandja" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.product.Oshakati === true && props.UserData.userLocation === "Oshakati" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.product.Grootfontein && props.UserData.userLocation === "Grootfontein" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.product.Rehoboth && props.UserData.userLocation === "Rehoboth" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.product.KatimaMulilo && props.UserData.userLocation === "KatimaMulilo" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.product.Ongwediva && props.UserData.userLocation === "Ongwediva" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.product.Otjiwarongo && props.UserData.userLocation === "Otjiwarongo" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.product.Tsumeb && props.UserData.userLocation === "Tsumeb" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.product.Gobabis && props.UserData.userLocation === "Gobabis" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLocal(props.product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                        </div>
                        <div className={showLocal === props.product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                        <span className='Available_Show_text'>Available</span>
                      </div>
                      </div>
                        :
                        props.UserData && props.UserData.length === 0 ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpLogin(props.product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                        </div>
                        <div className={showLogin === props.product.id ? "Available_Show" : "Available_hide"}>
                        <span className='Available_Show_text'>Login</span>
                      </div>
                      </div>
                        :
                        props.UserData.length !== 0 && props.UserData.userLocation === "" ?
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpUnAvailable(props.product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-blue'>
                        </div>
                        <div className={showUnavailable === props.product.id ? "ChooseLocation_Show" : "Unavailable_hide"}>
                        <span className='Available_Show_text'>Choose Town</span>
                      </div>
                      </div>
                        :
                        <div style={{ display: 'block'}}>
                        <div onMouseEnter={()=> popUpUnAvailable(props.product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                        </div>
                        <div className={showUnavailable === props.product.id ? "Unavailable_Show" : "Unavailable_hide"}>
                        <span className='Available_Show_text'>Unavailable</span>
                      </div>
                      </div>
                        }
          </div>
      </div>
      :
      <></>
      }
    
    </div>
    <div className='Company-listing_logo'>
        <CompanyImage retailerImage={props.product.retailerImage} />
      </div>
    </div>
  )
}

export default ProductCart