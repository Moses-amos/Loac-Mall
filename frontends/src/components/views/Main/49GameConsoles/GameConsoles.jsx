import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import ProductImage from '../../../assets/ProductImage'
import CompanyImage from '../../../assets/CompanyImage'
import {Bars} from "react-loader-spinner";
import BackgroundImage from '../Images/babyblue background.jpg'
import SearchedImages from '../../../assets/SearchedImages'
import XBox from './Images/XBOX.jpg'
import Playstation from './Images/PlayStation.jpg'
import NintendoImage from './Images/Nintendo.svg.png'
import OtherConsoles from './Images/games logo.png'
import './gameconsole.css'

function GameConsoles() {

  const [togglePageCategory, settogglePageCategory] = useState(1)
  const [Products, setProducts] = useState([])
  const [toggleBrands, settoggleBrands] = useState(0)
  const [UserData, setUserData] = useState([])
  const [showLogin, setshowLogin] = useState(1)
  const [showLocal, setshowLocal] = useState(1)
  const [showUnavailable, setshowUnavailable] = useState(1)
  const [PlayStationConsoles, setPlayStationConsoles] = useState([])
  const [XboxConsoles, setXboxConsoles] = useState([])
  const [NintendoConsole, setNintendoConsole] = useState([])
  const [SteamConsole, setSteamConsole] = useState([])
  const [OneXPlayerConsole, setOneXPlayerConsole] = useState([])
  const [HandheldConsole, setHandheldConsole] = useState([])
  const [OtherConsole, setOtherConsole] = useState([])
  const [StationValue, setStationValue] = useState("PlayStation Console")
  const [XboxValue, setXboxValue] = useState("XBOX Console")
  const [NintendoValue, setNintendoValue] = useState("Nintendo")
  const [SteamValue, setSteamValue] = useState("Steam Deck")
  const [OneXPlayerValue, setOneXPlayerValue] = useState("OneXPlayer")
  const [HandheldValue, setHandheldValue] = useState("Handheld Console")
  const [ConsolesValue, setConsolesValue] = useState("Game Console")

  const popUpLogin = (index) => {
    setshowLogin(index);
  }

  const popUpUnAvailable = (index) => {
    setshowUnavailable(index);
  }

  const popUpLocal = (index) => {
    setshowLocal(index);
  }

  useEffect(() => {
    const variable = {
      product: StationValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setPlayStationConsoles(response.data.products)
  } else {
  }
  })

  Axios.get('/api/users/getUser')
.then(response => {
    if (response.data.success) {
      setUserData(response.data.doc)
    }
})
  
  }, [])

  useEffect(() => {
    const variable = {
      product: XboxValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setXboxConsoles(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: NintendoValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setNintendoConsole(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: SteamValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setSteamConsole(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: OneXPlayerValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setOneXPlayerConsole(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: HandheldValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setHandheldConsole(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: ConsolesValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setOtherConsole(response.data.products)
  } else {
  }
  })
  
  }, [])

  const SearchedProducts = Products.map((product, index) => {
    return (
      <div key={index} className='Searched_box_listing'>
      <div className='Searched_box_listing_container'>
        <a href={`/product/${product._id}`}>
          <div style={{ width: '330px', height: '210px'}}>
            <SearchedImages images={product.images} />
          </div>
        </a>
          <div className='Searched_box_listing_container_right'>
              <div className='Searched_box_listing_container_right_title'>
              <a href={`/product/${product._id}`} className="Searched_Item_title"><span>{product.title}</span></a>
              </div>
              <div style={{ width: '100%', height: '50px', padding: '5px 10px 0px 0px', display: 'block'}}>
                <div style={{ display: 'flex'}}>
                  <div className='Searched_Price_style'><span>N$ {product.price}</span> </div>
                  {product.wasPrice === 0 || product.wasPrice === undefined ?
                  <></>
                  :
                  <div className='Searched_wasPrice_style'>was N$ {product.wasPrice}</div>
                  }
                  {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                  <div style={{ paddingTop: '10px', paddingRight: '10px'}}>
                      <button className='Searched_SavePercent_style'><span>Save {product.special}</span> </button>
                  </div>
                  :
                  (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0")  ?
                  <div style={{ paddingTop: '10px', paddingRight: '10px'}}>
                    <button className='Searched_SavePercent_style'><span>Save N$ {product.specialAttribute}</span> </button>
                  </div>
                  :
                  product.special !== "0" && product.specialAttribute !== "0"
                   && product.special !== undefined && product.specialAttribute === undefined  ?
                   <></>
                  :
                  <></>
                  }
                </div>
                <div style={{ display: 'flex', marginTop: '7px'}}>
                  <div className='SavePercent'>
                    <span className='Percent-Deal_span_overview'>{product.warrenty}</span>
                  </div>
               </div>
              </div>
              <div>
              <div style={{ padding: '25px 0px 2px 0px', display: 'flex'}}>
                <div style={{ position: 'relative'}}>
                  <span style={{ fontSize: '14px', fontWeight: '700', color: '#74767c'}}>Available In</span>
                </div>
                <div className='Company-listing_logo_Searched'>
      <CompanyImage retailerImage={product.retailerImage} />
      </div>
                </div>
                <div style={{ padding: '0px 0px 0px 0px', display:'flex', overflow: 'hidden'
                 ,width: '640px' }}>
                    {UserData && UserData === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Windhoek" ?
                    <button className='Town_location-present'>Windhoek</button>
                    :
                    UserData && UserData.userLocation === "Walvis" ?
                    <button className='Town_location-present'>Walvis Bay</button>
                    :
                    UserData && UserData.userLocation === "Swakop" ?
                    <button className='Town_location-present'>Swakopmund</button>
                    :
                    UserData && UserData.userLocation === "Okahandja" ?
                    <button className='Town_location-present'>Okahandja</button>
                    :
                    UserData && UserData.userLocation === "Oshakati" ?
                    <button className='Town_location-present'>Oshakati</button>
                    :
                    UserData && UserData.userLocation === "Grootfontein" ?
                    <button className='Town_location-present'>Grootfontein</button>
                    :
                    UserData && UserData.userLocation === "Rehoboth" ?
                    <button className='Town_location-present'>Rehoboth</button>
                    :
                    UserData && UserData.userLocation === "KatimaMulilo" ?
                    <button className='Town_location-present'>Katima Mulilo</button>
                    :
                    UserData && UserData.userLocation === "Ongwediva" ?
                    <button className='Town_location-present'>Ongwediva</button>
                    :
                    UserData && UserData.userLocation === "Otjiwarongo" ?
                    <button className='Town_location-present'>Otjiwarongo</button>
                    :
                    UserData && UserData.userLocation === "Tsumeb" ?
                    <button className='Town_location-present'>Tsumeb</button>
                    :
                    UserData && UserData.userLocation === "Gobabis" ?
                    <button className='Town_location-present'>Gobabis</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Windhoek" && product.Windhoek === true ?
                    <></>
                    :
                    product && product.Windhoek === true ?
                    <button className='Town_location-show'>Windhoek</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Walvis" && product.Walvis === true ?
                    <></>
                    :
                    product && product.Walvis === true ?
                    <button className='Town_location-show'>Walvis Bay</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Swakop" && product.Swakop === true ?
                    <></>
                    :
                    product && product.Swakop === true ?
                    <button className='Town_location-show'>Swakopmund</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Okahandja" && product.Okahandja === true ?
                    <></>
                    :
                    product && product.Okahandja === true ?
                    <button className='Town_location-show'>Okahandja</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Oshakati" && product.Oshakati === true ?
                    <></>
                    :
                    product && product.Oshakati === true ?
                    <button className='Town_location-show'>Oshakati</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Grootfontein" && product.Grootfontein === true ?
                    <></>
                    :
                    product && product.Grootfontein === true ?
                    <button className='Town_location-show'>Grootfontein</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Rehoboth" && product.Rehoboth === true ?
  
                    <></>
                    :
                    product && product.Rehoboth === true ?
                    <button className='Town_location-show'>Rehoboth</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true ?
                    <></>
                    :
                    product && product.KatimaMulilo === true ?
                    <button className='Town_location-show'>Katima Mulilo</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Ongwediva" && product.Ongwediva === true ?
                    <></>
                    :
                    product && product.Ongwediva === true ?
                    <button className='Town_location-show'>Ongwediva</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true ?
                    <></>
                    :
                    product && product.Otjiwarongo === true ?
                    <button className='Town_location-show'>Otjiwarongo</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Tsumeb" && product.Tsumeb === true ?
                    <></>
                    :
                    product && product.Tsumeb === true ?
                    <button className='Town_location-show'>Tsumeb</button>
                    :
                    <></>
                    }
                    {UserData && product && product === undefined ?
                    <></>
                    :
                    UserData && UserData.userLocation === "Gobabis" && product.Gobabis === true ?
                    <></>
                    :
                    product && product.Gobabis === true ?
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
    })

    const PlayStationThreePage = PlayStationConsoles.map((product, index) => {
      if (product.modelName === "PlayStation 3") {
          return (
            <div key={index} className='listing-Item'>
            <div className='listing-Details'>
                <a href={`/product/${product._id}`}> <div className='Item-image'>
                  <ProductImage images={product.images} />
              </div>
              <div className='Item-title'>
                  <p className='Item-title_p'>{product.title}</p>
              </div>
              </a>
              <div className='Item-value'>
                <div className='Item-price'>
                  <span className='Price-span'>N$ {product.price}</span>
                  {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                  <>
                    <div className='Save-Deals'>
                      <div className='SavePercent'>
                        <span className='Percent-Deal_span'>Save {product.special}</span>
                      </div>
                      <div className='Special_Deal_list'>
                      <span>Special Sale</span>
                    </div> 
                    </div>
                  </>
                  :
                  (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                  <>
                  <div className='Save-Deals'>
                    <div className='SavePercent'>
                      <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                    </div>
                    <div className='Special_Deal_list'>
                      <span>Special Sale</span>
                    </div> 
                  </div>
                </>
                :
                product.special !== "0" && product.specialAttribute !== "0" ?
                <></>
              :
              <></>
                  }
                </div>
                {product.wasPrice === 0 || product.wasPrice === undefined ?
                <></>
                :
                <div style={{ display: 'flex'}}>
                <div className='Item-wasPrice'>
                  <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                </div>
                <div className='PriceWas-line_over'>
                </div>
                </div>
                }
            
              </div>
              {product.warrenty ?
              <div style={{ display: 'flex', justifyContent: 'space-between'}}>
              <div className='Warrenty_span-detail_box'>
                <span className='Warrenty_span-detail'>{product.warrenty}</span>
              </div>
              <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                {UserData && product === undefined ?
                              <></>
                              :
                              product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              product.Walvis === true && UserData.userLocation === "Walvis" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              product.Swakop === true && UserData.userLocation === "Swakop" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              product.Gobabis && UserData.userLocation === "Gobabis" ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                              </div>
                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                              <span className='Available_Show_text'>Available</span>
                            </div>
                            </div>
                              :
                              UserData && UserData.length === 0 ?
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                              </div>
                              <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                              <span className='Available_Show_text'>Login</span>
                            </div>
                            </div>
                              :
                              <div style={{ display: 'block'}}>
                              <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                              </div>
                              <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                <CompanyImage retailerImage={product.retailerImage} />
              </div>
            </div>
            )
      }
      
      })

      const PlayStationFourPage = PlayStationConsoles.map((product, index) => {
        if (product.modelName === "PlayStation 4") {
            return (
              <div key={index} className='listing-Item'>
              <div className='listing-Details'>
                  <a href={`/product/${product._id}`}> <div className='Item-image'>
                    <ProductImage images={product.images} />
                </div>
                <div className='Item-title'>
                    <p className='Item-title_p'>{product.title}</p>
                </div>
                </a>
                <div className='Item-value'>
                  <div className='Item-price'>
                    <span className='Price-span'>N$ {product.price}</span>
                    {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                    <>
                      <div className='Save-Deals'>
                        <div className='SavePercent'>
                          <span className='Percent-Deal_span'>Save {product.special}</span>
                        </div>
                        <div className='Special_Deal_list'>
                        <span>Special Sale</span>
                      </div> 
                      </div>
                    </>
                    :
                    (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                    <>
                    <div className='Save-Deals'>
                      <div className='SavePercent'>
                        <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                      </div>
                      <div className='Special_Deal_list'>
                        <span>Special Sale</span>
                      </div> 
                    </div>
                  </>
                  :
                  product.special !== "0" && product.specialAttribute !== "0" ?
                  <></>
                :
                <></>
                    }
                  </div>
                  {product.wasPrice === 0 || product.wasPrice === undefined ?
                  <></>
                  :
                  <div style={{ display: 'flex'}}>
                  <div className='Item-wasPrice'>
                    <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                  </div>
                  <div className='PriceWas-line_over'>
                  </div>
                  </div>
                  }
              
                </div>
                {product.warrenty ?
                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <div className='Warrenty_span-detail_box'>
                  <span className='Warrenty_span-detail'>{product.warrenty}</span>
                </div>
                <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                  {UserData && product === undefined ?
                                <></>
                                :
                                product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                product.Walvis === true && UserData.userLocation === "Walvis" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                product.Swakop === true && UserData.userLocation === "Swakop" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                product.Gobabis && UserData.userLocation === "Gobabis" ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                </div>
                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                <span className='Available_Show_text'>Available</span>
                              </div>
                              </div>
                                :
                                UserData && UserData.length === 0 ?
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                </div>
                                <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                <span className='Available_Show_text'>Login</span>
                              </div>
                              </div>
                                :
                                <div style={{ display: 'block'}}>
                                <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                </div>
                                <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                  <CompanyImage retailerImage={product.retailerImage} />
                </div>
              </div>
              )
        }
        
        })

        const PlayStationFivePage = PlayStationConsoles.map((product, index) => {
          if (product.modelName === "PlayStation 5") {
              return (
                <div key={index} className='listing-Item'>
                <div className='listing-Details'>
                    <a href={`/product/${product._id}`}> <div className='Item-image'>
                      <ProductImage images={product.images} />
                  </div>
                  <div className='Item-title'>
                      <p className='Item-title_p'>{product.title}</p>
                  </div>
                  </a>
                  <div className='Item-value'>
                    <div className='Item-price'>
                      <span className='Price-span'>N$ {product.price}</span>
                      {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                      <>
                        <div className='Save-Deals'>
                          <div className='SavePercent'>
                            <span className='Percent-Deal_span'>Save {product.special}</span>
                          </div>
                          <div className='Special_Deal_list'>
                          <span>Special Sale</span>
                        </div> 
                        </div>
                      </>
                      :
                      (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                      <>
                      <div className='Save-Deals'>
                        <div className='SavePercent'>
                          <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                        </div>
                        <div className='Special_Deal_list'>
                          <span>Special Sale</span>
                        </div> 
                      </div>
                    </>
                    :
                    product.special !== "0" && product.specialAttribute !== "0" ?
                    <></>
                  :
                  <></>
                      }
                    </div>
                    {product.wasPrice === 0 || product.wasPrice === undefined ?
                    <></>
                    :
                    <div style={{ display: 'flex'}}>
                    <div className='Item-wasPrice'>
                      <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                    </div>
                    <div className='PriceWas-line_over'>
                    </div>
                    </div>
                    }
                
                  </div>
                  {product.warrenty ?
                  <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                  <div className='Warrenty_span-detail_box'>
                    <span className='Warrenty_span-detail'>{product.warrenty}</span>
                  </div>
                  <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                    {UserData && product === undefined ?
                                  <></>
                                  :
                                  product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  product.Walvis === true && UserData.userLocation === "Walvis" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  product.Swakop === true && UserData.userLocation === "Swakop" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  product.Gobabis && UserData.userLocation === "Gobabis" ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                  </div>
                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                  <span className='Available_Show_text'>Available</span>
                                </div>
                                </div>
                                  :
                                  UserData && UserData.length === 0 ?
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                  </div>
                                  <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                  <span className='Available_Show_text'>Login</span>
                                </div>
                                </div>
                                  :
                                  <div style={{ display: 'block'}}>
                                  <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                  </div>
                                  <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                    <CompanyImage retailerImage={product.retailerImage} />
                  </div>
                </div>
                )
          }
          
          })

          const XboxThreeSixtyPage = XboxConsoles.map((product, index) => {
            if (product.modelName === "XBOX 360") {
                return (
                  <div key={index} className='listing-Item'>
                  <div className='listing-Details'>
                      <a href={`/product/${product._id}`}> <div className='Item-image'>
                        <ProductImage images={product.images} />
                    </div>
                    <div className='Item-title'>
                        <p className='Item-title_p'>{product.title}</p>
                    </div>
                    </a>
                    <div className='Item-value'>
                      <div className='Item-price'>
                        <span className='Price-span'>N$ {product.price}</span>
                        {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                        <>
                          <div className='Save-Deals'>
                            <div className='SavePercent'>
                              <span className='Percent-Deal_span'>Save {product.special}</span>
                            </div>
                            <div className='Special_Deal_list'>
                            <span>Special Sale</span>
                          </div> 
                          </div>
                        </>
                        :
                        (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                        <>
                        <div className='Save-Deals'>
                          <div className='SavePercent'>
                            <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                          </div>
                          <div className='Special_Deal_list'>
                            <span>Special Sale</span>
                          </div> 
                        </div>
                      </>
                      :
                      product.special !== "0" && product.specialAttribute !== "0" ?
                      <></>
                    :
                    <></>
                        }
                      </div>
                      {product.wasPrice === 0 || product.wasPrice === undefined ?
                      <></>
                      :
                      <div style={{ display: 'flex'}}>
                      <div className='Item-wasPrice'>
                        <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                      </div>
                      <div className='PriceWas-line_over'>
                      </div>
                      </div>
                      }
                  
                    </div>
                    {product.warrenty ?
                    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                    <div className='Warrenty_span-detail_box'>
                      <span className='Warrenty_span-detail'>{product.warrenty}</span>
                    </div>
                    <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                      {UserData && product === undefined ?
                                    <></>
                                    :
                                    product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    product.Walvis === true && UserData.userLocation === "Walvis" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    product.Swakop === true && UserData.userLocation === "Swakop" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    product.Gobabis && UserData.userLocation === "Gobabis" ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                    </div>
                                    <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                    <span className='Available_Show_text'>Available</span>
                                  </div>
                                  </div>
                                    :
                                    UserData && UserData.length === 0 ?
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                    </div>
                                    <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                    <span className='Available_Show_text'>Login</span>
                                  </div>
                                  </div>
                                    :
                                    <div style={{ display: 'block'}}>
                                    <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                    </div>
                                    <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                      <CompanyImage retailerImage={product.retailerImage} />
                    </div>
                  </div>
                  )
            }
            
            })

            const XboxOnePage = XboxConsoles.map((product, index) => {
              if (product.modelName === "XBOX One") {
                  return (
                    <div key={index} className='listing-Item'>
                    <div className='listing-Details'>
                        <a href={`/product/${product._id}`}> <div className='Item-image'>
                          <ProductImage images={product.images} />
                      </div>
                      <div className='Item-title'>
                          <p className='Item-title_p'>{product.title}</p>
                      </div>
                      </a>
                      <div className='Item-value'>
                        <div className='Item-price'>
                          <span className='Price-span'>N$ {product.price}</span>
                          {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                          <>
                            <div className='Save-Deals'>
                              <div className='SavePercent'>
                                <span className='Percent-Deal_span'>Save {product.special}</span>
                              </div>
                              <div className='Special_Deal_list'>
                              <span>Special Sale</span>
                            </div> 
                            </div>
                          </>
                          :
                          (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                          <>
                          <div className='Save-Deals'>
                            <div className='SavePercent'>
                              <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                            </div>
                            <div className='Special_Deal_list'>
                              <span>Special Sale</span>
                            </div> 
                          </div>
                        </>
                        :
                        product.special !== "0" && product.specialAttribute !== "0" ?
                        <></>
                      :
                      <></>
                          }
                        </div>
                        {product.wasPrice === 0 || product.wasPrice === undefined ?
                        <></>
                        :
                        <div style={{ display: 'flex'}}>
                        <div className='Item-wasPrice'>
                          <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                        </div>
                        <div className='PriceWas-line_over'>
                        </div>
                        </div>
                        }
                    
                      </div>
                      {product.warrenty ?
                      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                      <div className='Warrenty_span-detail_box'>
                        <span className='Warrenty_span-detail'>{product.warrenty}</span>
                      </div>
                      <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                        {UserData && product === undefined ?
                                      <></>
                                      :
                                      product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      product.Walvis === true && UserData.userLocation === "Walvis" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      product.Swakop === true && UserData.userLocation === "Swakop" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      product.Gobabis && UserData.userLocation === "Gobabis" ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                      </div>
                                      <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                      <span className='Available_Show_text'>Available</span>
                                    </div>
                                    </div>
                                      :
                                      UserData && UserData.length === 0 ?
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                      </div>
                                      <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                      <span className='Available_Show_text'>Login</span>
                                    </div>
                                    </div>
                                      :
                                      <div style={{ display: 'block'}}>
                                      <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                      </div>
                                      <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                        <CompanyImage retailerImage={product.retailerImage} />
                      </div>
                    </div>
                    )
              }
              
              })

              const XboxSeriesPage = XboxConsoles.map((product, index) => {
                if (product.modelName === "XBOX Series") {
                    return (
                      <div key={index} className='listing-Item'>
                      <div className='listing-Details'>
                          <a href={`/product/${product._id}`}> <div className='Item-image'>
                            <ProductImage images={product.images} />
                        </div>
                        <div className='Item-title'>
                            <p className='Item-title_p'>{product.title}</p>
                        </div>
                        </a>
                        <div className='Item-value'>
                          <div className='Item-price'>
                            <span className='Price-span'>N$ {product.price}</span>
                            {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                            <>
                              <div className='Save-Deals'>
                                <div className='SavePercent'>
                                  <span className='Percent-Deal_span'>Save {product.special}</span>
                                </div>
                                <div className='Special_Deal_list'>
                                <span>Special Sale</span>
                              </div> 
                              </div>
                            </>
                            :
                            (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                            <>
                            <div className='Save-Deals'>
                              <div className='SavePercent'>
                                <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                              </div>
                              <div className='Special_Deal_list'>
                                <span>Special Sale</span>
                              </div> 
                            </div>
                          </>
                          :
                          product.special !== "0" && product.specialAttribute !== "0" ?
                          <></>
                        :
                        <></>
                            }
                          </div>
                          {product.wasPrice === 0 || product.wasPrice === undefined ?
                          <></>
                          :
                          <div style={{ display: 'flex'}}>
                          <div className='Item-wasPrice'>
                            <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                          </div>
                          <div className='PriceWas-line_over'>
                          </div>
                          </div>
                          }
                      
                        </div>
                        {product.warrenty ?
                        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                        <div className='Warrenty_span-detail_box'>
                          <span className='Warrenty_span-detail'>{product.warrenty}</span>
                        </div>
                        <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                          {UserData && product === undefined ?
                                        <></>
                                        :
                                        product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        product.Walvis === true && UserData.userLocation === "Walvis" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        product.Swakop === true && UserData.userLocation === "Swakop" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        product.Gobabis && UserData.userLocation === "Gobabis" ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                        </div>
                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                        <span className='Available_Show_text'>Available</span>
                                      </div>
                                      </div>
                                        :
                                        UserData && UserData.length === 0 ?
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                        </div>
                                        <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                        <span className='Available_Show_text'>Login</span>
                                      </div>
                                      </div>
                                        :
                                        <div style={{ display: 'block'}}>
                                        <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                        </div>
                                        <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                          <CompanyImage retailerImage={product.retailerImage} />
                        </div>
                      </div>
                      )
                }
                
                })

                const NintendoSeventeenPage = NintendoConsole.map((product, index) => {
                  if (product.modelName === "Nintendo Switch 2017") {
                      return (
                        <div key={index} className='listing-Item'>
                        <div className='listing-Details'>
                            <a href={`/product/${product._id}`}> <div className='Item-image'>
                              <ProductImage images={product.images} />
                          </div>
                          <div className='Item-title'>
                              <p className='Item-title_p'>{product.title}</p>
                          </div>
                          </a>
                          <div className='Item-value'>
                            <div className='Item-price'>
                              <span className='Price-span'>N$ {product.price}</span>
                              {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                              <>
                                <div className='Save-Deals'>
                                  <div className='SavePercent'>
                                    <span className='Percent-Deal_span'>Save {product.special}</span>
                                  </div>
                                  <div className='Special_Deal_list'>
                                  <span>Special Sale</span>
                                </div> 
                                </div>
                              </>
                              :
                              (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                              <>
                              <div className='Save-Deals'>
                                <div className='SavePercent'>
                                  <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                                </div>
                                <div className='Special_Deal_list'>
                                  <span>Special Sale</span>
                                </div> 
                              </div>
                            </>
                            :
                            product.special !== "0" && product.specialAttribute !== "0" ?
                            <></>
                          :
                          <></>
                              }
                            </div>
                            {product.wasPrice === 0 || product.wasPrice === undefined ?
                            <></>
                            :
                            <div style={{ display: 'flex'}}>
                            <div className='Item-wasPrice'>
                              <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                            </div>
                            <div className='PriceWas-line_over'>
                            </div>
                            </div>
                            }
                        
                          </div>
                          {product.warrenty ?
                          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                          <div className='Warrenty_span-detail_box'>
                            <span className='Warrenty_span-detail'>{product.warrenty}</span>
                          </div>
                          <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                            {UserData && product === undefined ?
                                          <></>
                                          :
                                          product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          product.Walvis === true && UserData.userLocation === "Walvis" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          product.Swakop === true && UserData.userLocation === "Swakop" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          product.Gobabis && UserData.userLocation === "Gobabis" ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                          </div>
                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                          <span className='Available_Show_text'>Available</span>
                                        </div>
                                        </div>
                                          :
                                          UserData && UserData.length === 0 ?
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                          </div>
                                          <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                          <span className='Available_Show_text'>Login</span>
                                        </div>
                                        </div>
                                          :
                                          <div style={{ display: 'block'}}>
                                          <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                          </div>
                                          <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                            <CompanyImage retailerImage={product.retailerImage} />
                          </div>
                        </div>
                        )
                  }
                  
                  })

                  const NintendoLitePage = NintendoConsole.map((product, index) => {
                    if (product.modelName === "Nintendo Switch Lite 2019") {
                        return (
                          <div key={index} className='listing-Item'>
                          <div className='listing-Details'>
                              <a href={`/product/${product._id}`}> <div className='Item-image'>
                                <ProductImage images={product.images} />
                            </div>
                            <div className='Item-title'>
                                <p className='Item-title_p'>{product.title}</p>
                            </div>
                            </a>
                            <div className='Item-value'>
                              <div className='Item-price'>
                                <span className='Price-span'>N$ {product.price}</span>
                                {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                                <>
                                  <div className='Save-Deals'>
                                    <div className='SavePercent'>
                                      <span className='Percent-Deal_span'>Save {product.special}</span>
                                    </div>
                                    <div className='Special_Deal_list'>
                                    <span>Special Sale</span>
                                  </div> 
                                  </div>
                                </>
                                :
                                (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                                <>
                                <div className='Save-Deals'>
                                  <div className='SavePercent'>
                                    <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                                  </div>
                                  <div className='Special_Deal_list'>
                                    <span>Special Sale</span>
                                  </div> 
                                </div>
                              </>
                              :
                              product.special !== "0" && product.specialAttribute !== "0" ?
                              <></>
                            :
                            <></>
                                }
                              </div>
                              {product.wasPrice === 0 || product.wasPrice === undefined ?
                              <></>
                              :
                              <div style={{ display: 'flex'}}>
                              <div className='Item-wasPrice'>
                                <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                              </div>
                              <div className='PriceWas-line_over'>
                              </div>
                              </div>
                              }
                          
                            </div>
                            {product.warrenty ?
                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                            <div className='Warrenty_span-detail_box'>
                              <span className='Warrenty_span-detail'>{product.warrenty}</span>
                            </div>
                            <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                              {UserData && product === undefined ?
                                            <></>
                                            :
                                            product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            product.Walvis === true && UserData.userLocation === "Walvis" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            product.Swakop === true && UserData.userLocation === "Swakop" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            product.Gobabis && UserData.userLocation === "Gobabis" ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                            </div>
                                            <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                            <span className='Available_Show_text'>Available</span>
                                          </div>
                                          </div>
                                            :
                                            UserData && UserData.length === 0 ?
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                            </div>
                                            <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                            <span className='Available_Show_text'>Login</span>
                                          </div>
                                          </div>
                                            :
                                            <div style={{ display: 'block'}}>
                                            <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                            </div>
                                            <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                              <CompanyImage retailerImage={product.retailerImage} />
                            </div>
                          </div>
                          )
                    }
                    
                    })

                    const NintendoOledPage = NintendoConsole.map((product, index) => {
                      if (product.modelName === "Nintendo Switch OLED 2021") {
                          return (
                            <div key={index} className='listing-Item'>
                            <div className='listing-Details'>
                                <a href={`/product/${product._id}`}> <div className='Item-image'>
                                  <ProductImage images={product.images} />
                              </div>
                              <div className='Item-title'>
                                  <p className='Item-title_p'>{product.title}</p>
                              </div>
                              </a>
                              <div className='Item-value'>
                                <div className='Item-price'>
                                  <span className='Price-span'>N$ {product.price}</span>
                                  {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                                  <>
                                    <div className='Save-Deals'>
                                      <div className='SavePercent'>
                                        <span className='Percent-Deal_span'>Save {product.special}</span>
                                      </div>
                                      <div className='Special_Deal_list'>
                                      <span>Special Sale</span>
                                    </div> 
                                    </div>
                                  </>
                                  :
                                  (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                                  <>
                                  <div className='Save-Deals'>
                                    <div className='SavePercent'>
                                      <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                                    </div>
                                    <div className='Special_Deal_list'>
                                      <span>Special Sale</span>
                                    </div> 
                                  </div>
                                </>
                                :
                                product.special !== "0" && product.specialAttribute !== "0" ?
                                <></>
                              :
                              <></>
                                  }
                                </div>
                                {product.wasPrice === 0 || product.wasPrice === undefined ?
                                <></>
                                :
                                <div style={{ display: 'flex'}}>
                                <div className='Item-wasPrice'>
                                  <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                                </div>
                                <div className='PriceWas-line_over'>
                                </div>
                                </div>
                                }
                            
                              </div>
                              {product.warrenty ?
                              <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                              <div className='Warrenty_span-detail_box'>
                                <span className='Warrenty_span-detail'>{product.warrenty}</span>
                              </div>
                              <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                                {UserData && product === undefined ?
                                              <></>
                                              :
                                              product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Walvis === true && UserData.userLocation === "Walvis" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Swakop === true && UserData.userLocation === "Swakop" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Gobabis && UserData.userLocation === "Gobabis" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              UserData && UserData.length === 0 ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                              </div>
                                              <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                              <span className='Available_Show_text'>Login</span>
                                            </div>
                                            </div>
                                              :
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                              </div>
                                              <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                                <CompanyImage retailerImage={product.retailerImage} />
                              </div>
                            </div>
                            )
                      }
                      
                      })

                      const NintendoWiiPage = NintendoConsole.map((product, index) => {
                        if (product.modelName === "Nintendo Wii") {
                            return (
                              <div key={index} className='listing-Item'>
                              <div className='listing-Details'>
                                  <a href={`/product/${product._id}`}> <div className='Item-image'>
                                    <ProductImage images={product.images} />
                                </div>
                                <div className='Item-title'>
                                    <p className='Item-title_p'>{product.title}</p>
                                </div>
                                </a>
                                <div className='Item-value'>
                                  <div className='Item-price'>
                                    <span className='Price-span'>N$ {product.price}</span>
                                    {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                                    <>
                                      <div className='Save-Deals'>
                                        <div className='SavePercent'>
                                          <span className='Percent-Deal_span'>Save {product.special}</span>
                                        </div>
                                        <div className='Special_Deal_list'>
                                        <span>Special Sale</span>
                                      </div> 
                                      </div>
                                    </>
                                    :
                                    (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                                    <>
                                    <div className='Save-Deals'>
                                      <div className='SavePercent'>
                                        <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                                      </div>
                                      <div className='Special_Deal_list'>
                                        <span>Special Sale</span>
                                      </div> 
                                    </div>
                                  </>
                                  :
                                  product.special !== "0" && product.specialAttribute !== "0" ?
                                  <></>
                                :
                                <></>
                                    }
                                  </div>
                                  {product.wasPrice === 0 || product.wasPrice === undefined ?
                                  <></>
                                  :
                                  <div style={{ display: 'flex'}}>
                                  <div className='Item-wasPrice'>
                                    <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                                  </div>
                                  <div className='PriceWas-line_over'>
                                  </div>
                                  </div>
                                  }
                              
                                </div>
                                {product.warrenty ?
                                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <div className='Warrenty_span-detail_box'>
                                  <span className='Warrenty_span-detail'>{product.warrenty}</span>
                                </div>
                                <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                                  {UserData && product === undefined ?
                                                <></>
                                                :
                                                product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Walvis === true && UserData.userLocation === "Walvis" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Swakop === true && UserData.userLocation === "Swakop" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Gobabis && UserData.userLocation === "Gobabis" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                UserData && UserData.length === 0 ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                                </div>
                                                <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                                <span className='Available_Show_text'>Login</span>
                                              </div>
                                              </div>
                                                :
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                                </div>
                                                <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                                  <CompanyImage retailerImage={product.retailerImage} />
                                </div>
                              </div>
                              )
                        }
                        
                        })

                        const SteamDeckPage = SteamConsole.map((product, index) => {
                          return (
                            <div key={index} className='listing-Item'>
                            <div className='listing-Details'>
                                <a href={`/product/${product._id}`}> <div className='Item-image'>
                                  <ProductImage images={product.images} />
                              </div>
                              <div className='Item-title'>
                                  <p className='Item-title_p'>{product.title}</p>
                              </div>
                              </a>
                              <div className='Item-value'>
                                <div className='Item-price'>
                                  <span className='Price-span'>N$ {product.price}</span>
                                  {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                                  <>
                                    <div className='Save-Deals'>
                                      <div className='SavePercent'>
                                        <span className='Percent-Deal_span'>Save {product.special}</span>
                                      </div>
                                      <div className='Special_Deal_list'>
                                      <span>Special Sale</span>
                                    </div> 
                                    </div>
                                  </>
                                  :
                                  (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                                  <>
                                  <div className='Save-Deals'>
                                    <div className='SavePercent'>
                                      <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                                    </div>
                                    <div className='Special_Deal_list'>
                                      <span>Special Sale</span>
                                    </div> 
                                  </div>
                                </>
                                :
                                product.special !== "0" && product.specialAttribute !== "0" ?
                                <></>
                              :
                              <></>
                                  }
                                </div>
                                {product.wasPrice === 0 || product.wasPrice === undefined ?
                                <></>
                                :
                                <div style={{ display: 'flex'}}>
                                <div className='Item-wasPrice'>
                                  <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                                </div>
                                <div className='PriceWas-line_over'>
                                </div>
                                </div>
                                }
                            
                              </div>
                              {product.warrenty ?
                              <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                              <div className='Warrenty_span-detail_box'>
                                <span className='Warrenty_span-detail'>{product.warrenty}</span>
                              </div>
                              <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                                {UserData && product === undefined ?
                                              <></>
                                              :
                                              product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Walvis === true && UserData.userLocation === "Walvis" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Swakop === true && UserData.userLocation === "Swakop" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              product.Gobabis && UserData.userLocation === "Gobabis" ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                              </div>
                                              <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                              <span className='Available_Show_text'>Available</span>
                                            </div>
                                            </div>
                                              :
                                              UserData && UserData.length === 0 ?
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                              </div>
                                              <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                              <span className='Available_Show_text'>Login</span>
                                            </div>
                                            </div>
                                              :
                                              <div style={{ display: 'block'}}>
                                              <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                              </div>
                                              <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                                <CompanyImage retailerImage={product.retailerImage} />
                              </div>
                            </div>
                          )
                          })

                          const OneXPlayerPage = OneXPlayerConsole.map((product, index) => {
                            return (
                              <div key={index} className='listing-Item'>
                              <div className='listing-Details'>
                                  <a href={`/product/${product._id}`}> <div className='Item-image'>
                                    <ProductImage images={product.images} />
                                </div>
                                <div className='Item-title'>
                                    <p className='Item-title_p'>{product.title}</p>
                                </div>
                                </a>
                                <div className='Item-value'>
                                  <div className='Item-price'>
                                    <span className='Price-span'>N$ {product.price}</span>
                                    {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                                    <>
                                      <div className='Save-Deals'>
                                        <div className='SavePercent'>
                                          <span className='Percent-Deal_span'>Save {product.special}</span>
                                        </div>
                                        <div className='Special_Deal_list'>
                                        <span>Special Sale</span>
                                      </div> 
                                      </div>
                                    </>
                                    :
                                    (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                                    <>
                                    <div className='Save-Deals'>
                                      <div className='SavePercent'>
                                        <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                                      </div>
                                      <div className='Special_Deal_list'>
                                        <span>Special Sale</span>
                                      </div> 
                                    </div>
                                  </>
                                  :
                                  product.special !== "0" && product.specialAttribute !== "0" ?
                                  <></>
                                :
                                <></>
                                    }
                                  </div>
                                  {product.wasPrice === 0 || product.wasPrice === undefined ?
                                  <></>
                                  :
                                  <div style={{ display: 'flex'}}>
                                  <div className='Item-wasPrice'>
                                    <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                                  </div>
                                  <div className='PriceWas-line_over'>
                                  </div>
                                  </div>
                                  }
                              
                                </div>
                                {product.warrenty ?
                                <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <div className='Warrenty_span-detail_box'>
                                  <span className='Warrenty_span-detail'>{product.warrenty}</span>
                                </div>
                                <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                                  {UserData && product === undefined ?
                                                <></>
                                                :
                                                product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Walvis === true && UserData.userLocation === "Walvis" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Swakop === true && UserData.userLocation === "Swakop" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                product.Gobabis && UserData.userLocation === "Gobabis" ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                </div>
                                                <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                <span className='Available_Show_text'>Available</span>
                                              </div>
                                              </div>
                                                :
                                                UserData && UserData.length === 0 ?
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                                </div>
                                                <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                                <span className='Available_Show_text'>Login</span>
                                              </div>
                                              </div>
                                                :
                                                <div style={{ display: 'block'}}>
                                                <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                                </div>
                                                <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                                  <CompanyImage retailerImage={product.retailerImage} />
                                </div>
                              </div>
                            )
                            })

                            const HandheldConsolePage = HandheldConsole.map((product, index) => {
                              return (
                                <div key={index} className='listing-Item'>
                                <div className='listing-Details'>
                                    <a href={`/product/${product._id}`}> <div className='Item-image'>
                                      <ProductImage images={product.images} />
                                  </div>
                                  <div className='Item-title'>
                                      <p className='Item-title_p'>{product.title}</p>
                                  </div>
                                  </a>
                                  <div className='Item-value'>
                                    <div className='Item-price'>
                                      <span className='Price-span'>N$ {product.price}</span>
                                      {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                                      <>
                                        <div className='Save-Deals'>
                                          <div className='SavePercent'>
                                            <span className='Percent-Deal_span'>Save {product.special}</span>
                                          </div>
                                          <div className='Special_Deal_list'>
                                          <span>Special Sale</span>
                                        </div> 
                                        </div>
                                      </>
                                      :
                                      (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                                      <>
                                      <div className='Save-Deals'>
                                        <div className='SavePercent'>
                                          <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                                        </div>
                                        <div className='Special_Deal_list'>
                                          <span>Special Sale</span>
                                        </div> 
                                      </div>
                                    </>
                                    :
                                    product.special !== "0" && product.specialAttribute !== "0" ?
                                    <></>
                                  :
                                  <></>
                                      }
                                    </div>
                                    {product.wasPrice === 0 || product.wasPrice === undefined ?
                                    <></>
                                    :
                                    <div style={{ display: 'flex'}}>
                                    <div className='Item-wasPrice'>
                                      <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                                    </div>
                                    <div className='PriceWas-line_over'>
                                    </div>
                                    </div>
                                    }
                                
                                  </div>
                                  {product.warrenty ?
                                  <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                  <div className='Warrenty_span-detail_box'>
                                    <span className='Warrenty_span-detail'>{product.warrenty}</span>
                                  </div>
                                  <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                                    {UserData && product === undefined ?
                                                  <></>
                                                  :
                                                  product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  product.Walvis === true && UserData.userLocation === "Walvis" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  product.Swakop === true && UserData.userLocation === "Swakop" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  product.Gobabis && UserData.userLocation === "Gobabis" ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                  </div>
                                                  <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                  <span className='Available_Show_text'>Available</span>
                                                </div>
                                                </div>
                                                  :
                                                  UserData && UserData.length === 0 ?
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                                  </div>
                                                  <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                                  <span className='Available_Show_text'>Login</span>
                                                </div>
                                                </div>
                                                  :
                                                  <div style={{ display: 'block'}}>
                                                  <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                                  </div>
                                                  <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                                    <CompanyImage retailerImage={product.retailerImage} />
                                  </div>
                                </div>
                              )
                              })

                                const NintendoGameConsolePage = OtherConsole.map((product, index) => {
                                  if (product.seriesName === "Nintendo") {
                                    return (
                                      <div key={index} className='listing-Item'>
                                      <div className='listing-Details'>
                                          <a href={`/product/${product._id}`}> <div className='Item-image'>
                                            <ProductImage images={product.images} />
                                        </div>
                                        <div className='Item-title'>
                                            <p className='Item-title_p'>{product.title}</p>
                                        </div>
                                        </a>
                                        <div className='Item-value'>
                                          <div className='Item-price'>
                                            <span className='Price-span'>N$ {product.price}</span>
                                            {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                                            <>
                                              <div className='Save-Deals'>
                                                <div className='SavePercent'>
                                                  <span className='Percent-Deal_span'>Save {product.special}</span>
                                                </div>
                                                <div className='Special_Deal_list'>
                                                <span>Special Sale</span>
                                              </div> 
                                              </div>
                                            </>
                                            :
                                            (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                                            <>
                                            <div className='Save-Deals'>
                                              <div className='SavePercent'>
                                                <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                                              </div>
                                              <div className='Special_Deal_list'>
                                                <span>Special Sale</span>
                                              </div> 
                                            </div>
                                          </>
                                          :
                                          product.special !== "0" && product.specialAttribute !== "0" ?
                                          <></>
                                        :
                                        <></>
                                            }
                                          </div>
                                          {product.wasPrice === 0 || product.wasPrice === undefined ?
                                          <></>
                                          :
                                          <div style={{ display: 'flex'}}>
                                          <div className='Item-wasPrice'>
                                            <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                                          </div>
                                          <div className='PriceWas-line_over'>
                                          </div>
                                          </div>
                                          }
                                      
                                        </div>
                                        {product.warrenty ?
                                        <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                        <div className='Warrenty_span-detail_box'>
                                          <span className='Warrenty_span-detail'>{product.warrenty}</span>
                                        </div>
                                        <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                                          {UserData && product === undefined ?
                                                        <></>
                                                        :
                                                        product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        product.Walvis === true && UserData.userLocation === "Walvis" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        product.Swakop === true && UserData.userLocation === "Swakop" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        product.Gobabis && UserData.userLocation === "Gobabis" ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                        </div>
                                                        <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                        <span className='Available_Show_text'>Available</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        UserData && UserData.length === 0 ?
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                                        </div>
                                                        <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                                        <span className='Available_Show_text'>Login</span>
                                                      </div>
                                                      </div>
                                                        :
                                                        <div style={{ display: 'block'}}>
                                                        <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                                        </div>
                                                        <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                                          <CompanyImage retailerImage={product.retailerImage} />
                                        </div>
                                      </div>
                                      )
                                }
                                  })

                                  const OtherGameConsolePage = OtherConsole.map((product, index) => {
                                    if (product.seriesName === "Other") {
                                      return (
                                        <div key={index} className='listing-Item'>
                                        <div className='listing-Details'>
                                            <a href={`/product/${product._id}`}> <div className='Item-image'>
                                              <ProductImage images={product.images} />
                                          </div>
                                          <div className='Item-title'>
                                              <p className='Item-title_p'>{product.title}</p>
                                          </div>
                                          </a>
                                          <div className='Item-value'>
                                            <div className='Item-price'>
                                              <span className='Price-span'>N$ {product.price}</span>
                                              {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                                              <>
                                                <div className='Save-Deals'>
                                                  <div className='SavePercent'>
                                                    <span className='Percent-Deal_span'>Save {product.special}</span>
                                                  </div>
                                                  <div className='Special_Deal_list'>
                                                  <span>Special Sale</span>
                                                </div> 
                                                </div>
                                              </>
                                              :
                                              (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                                              <>
                                              <div className='Save-Deals'>
                                                <div className='SavePercent'>
                                                  <span className='Percent-Deal_span'>Save N$ {product.specialAttribute}</span>
                                                </div>
                                                <div className='Special_Deal_list'>
                                                  <span>Special Sale</span>
                                                </div> 
                                              </div>
                                            </>
                                            :
                                            product.special !== "0" && product.specialAttribute !== "0" ?
                                            <></>
                                          :
                                          <></>
                                              }
                                            </div>
                                            {product.wasPrice === 0 || product.wasPrice === undefined ?
                                            <></>
                                            :
                                            <div style={{ display: 'flex'}}>
                                            <div className='Item-wasPrice'>
                                              <span className='PriceWas-p'>N$ {product.wasPrice}</span>
                                            </div>
                                            <div className='PriceWas-line_over'>
                                            </div>
                                            </div>
                                            }
                                        
                                          </div>
                                          {product.warrenty ?
                                          <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                          <div className='Warrenty_span-detail_box'>
                                            <span className='Warrenty_span-detail'>{product.warrenty}</span>
                                          </div>
                                          <div style={{ paddingTop: '13px', paddingRight: '10px'}}>
                                            {UserData && product === undefined ?
                                                          <></>
                                                          :
                                                          product.Windhoek === true && UserData.userLocation === "Windhoek" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          product.Walvis === true && UserData.userLocation === "Walvis" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          product.Swakop === true && UserData.userLocation === "Swakop" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          product.Okahandja === true && UserData.userLocation === "Okahandja" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          product.Oshakati === true && UserData.userLocation === "Oshakati" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          product.Grootfontein && UserData.userLocation === "Grootfontein" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          product.Rehoboth && UserData.userLocation === "Rehoboth" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          product.KatimaMulilo && UserData.userLocation === "KatimaMulilo" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          product.Ongwediva && UserData.userLocation === "Ongwediva" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          product.Otjiwarongo && UserData.userLocation === "Otjiwarongo" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          product.Tsumeb && UserData.userLocation === "Tsumeb" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          product.Gobabis && UserData.userLocation === "Gobabis" ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLocal(product.id)} onMouseLeave={()=> popUpLocal(1)}  className='Available_In_location-green'>
                                                          </div>
                                                          <div className={showLocal === product.id ? "Locally_Available_Show" : "LocallyAvailable_hide"}>
                                                          <span className='Available_Show_text'>Available</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          UserData && UserData.length === 0 ?
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpLogin(product.id)} onMouseLeave={()=> popUpLogin(1)} className='Available_In_location-blue'>
                                                          </div>
                                                          <div className={showLogin === product.id ? "Available_Show" : "Available_hide"}>
                                                          <span className='Available_Show_text'>Login</span>
                                                        </div>
                                                        </div>
                                                          :
                                                          <div style={{ display: 'block'}}>
                                                          <div onMouseEnter={()=> popUpUnAvailable(product.id)} onMouseLeave={()=> popUpUnAvailable(1)} className='Available_In_location-orange'>
                                                          </div>
                                                          <div className={showUnavailable === product.id ? "Unavailable_Show" : "Unavailable_hide"}>
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
                                            <CompanyImage retailerImage={product.retailerImage} />
                                          </div>
                                        </div>
                                        )
                                  }
                                })

                                const PageCategory = (index) => {
                                  settogglePageCategory(index);
                                }

                                const [Skip, setSkip] = useState(0)
                                const [Limit, setLimit] = useState(8)
                                const [PostSize, setPostSize] = useState()
                                const [SearchTerms, setSearchTerms] = useState("")
                                const [searchResults, setSearchResults] = useState(false)
                              
                                const clickSearch = () => setSearchResults(!searchResults)
                              
                              const [Filters, setFilters] = useState({
                              location: []
                              })
                              
                              const BrandCategory = (index) => {
                                settoggleBrands(index);
                              }
                              
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
                          

  return (
    <div style={{ display: 'block'}}>
    <SearchBar showResults={clickSearch} refreshFunction={updateSearchTerms} />
    {SearchTerms === "" ?
  <div className='Visited_container-wrapper'>
  <div className='Visited_page-banner'>
    <div className='Page_banner-style'>
    <div className='Page_select-option_many'> 
    <div onClick={()=> {PageCategory(1); BrandCategory(0)}}
       className={togglePageCategory ===1 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_some_full" 
        src={Playstation} alt=''
        />
        <div className='Image_Description_hover_box_some_full'>
        <div className='Image_Description_hover'>
          PlayStation Consoles
        </div>
        </div>
      </div>

      <div onClick={()=> {PageCategory(2); BrandCategory(0)}}
       className={togglePageCategory ===2 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_some_full" 
        src={XBox} alt=''
        />
        <div className='Image_Description_hover_box_some_full'>
        <div className='Image_Description_hover'>
          XBOX Consoles
        </div>
        </div>
      </div>

      <div onClick={()=> {PageCategory(3); BrandCategory(0)}}
       className={togglePageCategory ===3 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_some_full" 
        src={NintendoImage} alt=''
        />
        <div className='Image_Description_hover_box_some_full'>
        <div className='Image_Description_hover'>
          Nintendo Consoles
        </div>
        </div>
      </div>

      <div onClick={()=> {PageCategory(4); BrandCategory(0)}}
       className={togglePageCategory ===4 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_some_full" 
        src={OtherConsoles} alt=''
        />
        <div className='Image_Description_hover_box_some_full'>
        <div className='Image_Description_hover'>
          Handheld PCs & Other Consoles
        </div>
        </div>
      </div>
        
      </div>
      <div className='Background_Image'>
      <img src={BackgroundImage} className='Background_Image_style' alt="" />
    </div>
    <div className='RamPage_brand-options_box'>
        <div className={togglePageCategory ===1 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        <div className={toggleBrands ===0 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(0)}} >
            <span>PlayStation 3</span>
          </div>
          <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
          <span>PlayStation 4</span>
          </div>
          <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>PlayStation 5</span>
          </div>
        </div>
        <div className={togglePageCategory ===2 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        <div className={toggleBrands ===0 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(0)}} >
            <span>XBOX 360</span>
          </div>
          <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
          <span>XBOX One</span>
          </div>
          <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>XBOX Series</span>
          </div>
        </div>
        <div className={togglePageCategory ===3 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        <div className={toggleBrands ===0 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(0)}} >
            <span>Switch 2017</span>
          </div>
          <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
          <span>Switch Lite</span>
          </div>
          <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>Switch OLED</span>
          </div>
          <div className={toggleBrands ===3 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>Nintendo Wii</span>
          </div>
        </div>
        <div className={togglePageCategory ===4 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        <div className={toggleBrands ===0 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(0)}} >
            <span>Game Consoles</span>
          </div>
          <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
          <span>Nintendo</span>
          </div>
          <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>Handheld PCs</span>
          </div>
          <div className={toggleBrands ===3 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>OneXPlayer</span>
          </div>
          <div className={toggleBrands ===4 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(4)}} >
          <span>Steam Deck</span>
          </div>
        </div>
        <div className={togglePageCategory ===1 ? "Memory_size_options_listed" : "Memory_size_options_listed-hide"}>
          <div className='View_all_option'><a href="/playstations" className='Memory_option-style_view'>View All</a></div>
        </div>

        <div className={togglePageCategory ===2 ? "Memory_size_options_listed" : "Memory_size_options_listed-hide"}>
          <div className='View_all_option'><a href="/xbox" className='Memory_option-style_view'>View All</a></div>
        </div>
        <div className={togglePageCategory ===3 ? "Memory_size_options_listed" : "Memory_size_options_listed-hide"}>
          <div className='View_all_option'><a href="/nintendo" className='Memory_option-style_view'>View All</a></div>
        </div>
        <div className={togglePageCategory ===4 ? "Memory_size_options_listed" : "Memory_size_options_listed-hide"}>
          <div className='View_all_option'><a href="/other-consoles" className='Memory_option-style_view'>View All</a></div>
        </div>
      </div>
    </div>
  </div>

{/* PlayStations  */}
<div className={togglePageCategory === 1 && toggleBrands === 0 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {PlayStationThreePage}
</div>

<div className={togglePageCategory === 1 && toggleBrands === 1 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {PlayStationFourPage}
</div>

<div className={togglePageCategory === 1 && toggleBrands === 2 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {PlayStationFivePage}
</div>

{/* XBOX  */}
<div className={togglePageCategory === 2 && toggleBrands === 0 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {XboxThreeSixtyPage}
</div>

<div className={togglePageCategory === 2 && toggleBrands === 1 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {XboxOnePage}
</div>

<div className={togglePageCategory === 2 && toggleBrands === 2 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {XboxSeriesPage}
</div>

{/* Nintendo */}
<div className={togglePageCategory === 3 && toggleBrands === 0 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {NintendoSeventeenPage}
</div>

<div className={togglePageCategory === 3 && toggleBrands === 1 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {NintendoLitePage}
</div>

<div className={togglePageCategory === 3 && toggleBrands === 2 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {NintendoOledPage}
</div>

<div className={togglePageCategory === 3 && toggleBrands === 3 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {NintendoWiiPage}
</div>

{/* Other Consoles */}
<div className={togglePageCategory === 4 && toggleBrands === 0 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {OtherGameConsolePage}
</div>

<div className={togglePageCategory === 4 && toggleBrands === 1 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {NintendoGameConsolePage}
</div>

<div className={togglePageCategory === 4 && toggleBrands === 2 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {HandheldConsolePage}
</div>

<div className={togglePageCategory === 3 && toggleBrands === 3 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {OneXPlayerPage}
</div>

<div className={togglePageCategory === 3 && toggleBrands === 4 ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {SteamDeckPage}
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
<div style={{ minWidth: '270px', height: '450px',marginLeft: '15px', borderRadius: '5px', padding: '10px 15px', border: '2px solid #c5cbd5'}}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <span style={{ fontSize: '22px', fontWeight: '700', color: '#070606'}}>Search By Category</span>
            </div>
            <div style={{ width: '100%', paddingTop: '20px'}}>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#5a596a'}}>* This feature is not yet Available *</span>
            </div>
          </div>
  <div style={{ marginLeft: '20px'}}>
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {SearchedProducts}
      </div>
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

export default GameConsoles