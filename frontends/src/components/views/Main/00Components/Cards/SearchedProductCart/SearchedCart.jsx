import React from 'react'
import SearchingImages from '../../../../../assets/SearchingImages'
// import CompanyImage from '../../../../../assets/CompanyImage'
import '../../../ClickedDetails/ClickedPc/clickedpc.css'
import '../../pages.css'

function SearchedCart(props) {

  return (
    <div className='Searching_box_listing'>
    <div className='Searching_box_listing_container_main'>
      <a href={`/product/${props.product._id}`}>
        <div className='Searched_image_box_size'>
          <SearchingImages images={props.product.imageOne} />
        </div>
      </a>
        <div className='Searched_box_listing_container_right'>
            <div className='Searched_box_listing_container_title'>
            <a href={`/product/${props.product._id}`} className="Searched_Item_title"><span>{props.product.title}</span></a>
            </div>
            <div style={{ width: '100%', height: '50px', padding: '5px 10px 0px 0px', display: 'block'}}>
              <div style={{ display: 'flex'}}>
                <div className='Searched_Price_style'><span>N$ {props.product.price}</span> </div>
                {props.product.wasPrice === 0 || props.product.wasPrice === undefined ?
                <></>
                :
                <div className='Searched_wasPrice_style'>was {props.product.wasPrice}</div>
                }
                
              </div>
              <div style={{ display: 'flex', marginTop: '7px'}}>
                <div className='SavePercent'>
                  <span className='Percent-Deal_span_overview'>
                  {(props.product.special !== "" && props.product.special !== "0") && (props.product.specialAttribute === "" || props.product.specialAttribute === "0" ) ?
                <>
                    Save {props.product.special}
                </>
                :
                (props.product.specialAttribute !== "" && props.product.specialAttribute !== "0") && (props.product.special === "" || props.product.special === "0")  ?
                <>
                  Save N$ {props.product.specialAttribute}
                </>
                :
                props.product.special !== "0" && props.product.specialAttribute !== "0"
                 && props.product.special !== undefined && props.product.specialAttribute === undefined  ?
                 <></>
                :
                <></>
                }
                  </span>
                </div>
             </div>
            </div>
            <div>
            <div style={{ padding: '25px 0px 2px 0px', display: 'flex'}}>

            {props.product.accountTier === "Free" ?
              <div style={{ position: 'relative'}}>
              <span style={{ fontSize: '15px', fontWeight: '500', color: '#333'}}>Available From</span>
            </div>
              :
              <div style={{ position: 'relative'}}>
                <span style={{ fontSize: '15px', fontWeight: '500', color: '#333'}}>Available In</span>
              </div>
              }
              
              </div>
              <div className='Searching_Available_towns_box'>

{props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Windhoek" && props.product.Windhoek === true ?
        <button className='Town_location-present'>Windhoek</button>
        :
        props.product && props.product.Windhoek === true ?
        <button className='Town_location-show'>Windhoek</button>
        :
        <></>
        }
        {props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Walvis" && props.product.Walvis === true ?
        <button className='Town_location-present'>Walvis Bay</button>
        :
        props.product && props.product.Walvis === true ?
        <button className='Town_location-show'>Walvis Bay</button>
        :
        <></>
        }
        {props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Swakop" && props.product.Swakop === true ?
        <button className='Town_location-present'>Swakopmund</button>
        :
        props.product && props.product.Swakop === true ?
        <button className='Town_location-show'>Swakopmund</button>
        :
        <></>
        }
        {props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Okahandja" && props.product.Okahandja === true ?
        <button className='Town_location-present'>Okahandja</button>
        :
        props.product && props.product.Okahandja === true ?
        <button className='Town_location-show'>Okahandja</button>
        :
        <></>
        }
        {props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Oshakati" && props.product.Oshakati === true ?
        <button className='Town_location-present'>Oshakati</button>
        :
        props.product && props.product.Oshakati === true ?
        <button className='Town_location-show'>Oshakati</button>
        :
        <></>
        }
        {props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Grootfontein" && props.product.Grootfontein === true ?
        <button className='Town_location-present'>Grootfontein</button>
        :
        props.product && props.product.Grootfontein === true ?
        <button className='Town_location-show'>Grootfontein</button>
        :
        <></>
        }
        {props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Rehoboth" && props.product.Rehoboth === true ?
        <button className='Town_location-present'>Rehoboth</button>
        :
        props.product && props.product.Rehoboth === true ?
        <button className='Town_location-show'>Rehoboth</button>
        :
        <></>
        }
        {props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "KatimaMulilo" && props.product.KatimaMulilo === true ?
        <button className='Town_location-present'>Katima Mulilo</button>
        :
        props.product && props.product.KatimaMulilo === true ?
        <button className='Town_location-show'>Katima Mulilo</button>
        :
        <></>
        }
        {props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Ongwediva" && props.product.Ongwediva === true ?
        <button className='Town_location-present'>Ongwediva</button>
        :
        props.product && props.product.Ongwediva === true ?
        <button className='Town_location-show'>Ongwediva</button>
        :
        <></>
        }
        {props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Otjiwarongo" && props.product.Otjiwarongo === true ?
        <button className='Town_location-present'>Otjiwarongo</button>
        :
        props.product && props.product.Otjiwarongo === true ?
        <button className='Town_location-show'>Otjiwarongo</button>
        :
        <></>
        }
        {props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Tsumeb" && props.product.Tsumeb === true ?
        <button className='Town_location-present'>Tsumeb</button>
        :
        props.product && props.product.Tsumeb === true ?
        <button className='Town_location-show'>Tsumeb</button>
        :
        <></>
        }
        {props.UserData && props.product && props.product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Gobabis" && props.product.Gobabis === true ?
        <button className='Town_location-present'>Gobabis</button>
        :
        props.product && props.product.Gobabis === true ?
        <button className='Town_location-show'>Gobabis</button>
        :
        <></>
        }
              </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default SearchedCart