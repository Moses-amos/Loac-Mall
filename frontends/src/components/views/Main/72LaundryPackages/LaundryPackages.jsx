import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import ProductImage from '../../../assets/ProductImage'
import CompanyImage from '../../../assets/CompanyImage'
import {Bars} from "react-loader-spinner";
import BackgroundImage from '../Images/babyblue background.jpg'
import SearchedImages from '../../../assets/SearchedImages'

import './laundrypackages.css'

function LaundryPackages() {

  const [toggleBrands, settoggleBrands] = useState(1)
  const [Products, setProducts] = useState([])
  const [UserData, setUserData] = useState([])
  const [Bundles, setBundles] = useState([])
  const [BundlesValue, setBundlesValue] = useState("Appliance Bundle")
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

    useEffect(() => {
      const variable = {
        product: BundlesValue
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setBundles(response.data.products)
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
  
      const BundlesPage = Bundles.map((product, index) => {
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
    <div className='Page_select-option_some'>

      </div>
      <div className='Background_Image'>
      <img src={BackgroundImage} className='Background_Image_style_main' alt="" />
    </div>

    </div>
  </div>

  <div className="Listed_fetched_products">
  {BundlesPage}
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

export default LaundryPackages