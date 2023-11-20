import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import BackgroundImage from '../Images/babyblue background.jpg'
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

import InternalCDDVD from './Images/InternalCDDVD.png'
import ExternalCDDVD from './Images/external.png'
import OpticDisc from './Images/OpticDrive.png'

import './cddvd.css'

function CDDVD() {

  const [togglePageCategory, settogglePageCategory] = useState(1)
  const [Products, setProducts] = useState([])
  const [toggleBrands, settoggleBrands] = useState(1)
  const [UserData, setUserData] = useState([])
  const [LaptopDvdDrive, setLaptopDvdDrive] = useState([])
  const [ExternalDVDDrive, setExternalDVDDrive] = useState([])
  const [OpticalDrive, setOpticalDrive] = useState([])
  const [LaptopDVDValue, setLaptopDVDValue] = useState("Laptop CD-DVD Drive")
  const [ExternalDVDValue, setExternalDVDValue] = useState("External CD-DVD Drive")
  const [OpticalDriveValue, setOpticalDriveValue] = useState("Optical Disc-Drive")
  const [ToggleLocation, setToggleLocation] = useState(false)
  const [HoverLocation, setHoverLocation] = useState(0)
  const [SelectLocation, setSelectLocation] = useState(false)

  const PopupSelectLocation = () => setSelectLocation(!SelectLocation)

  const PopupHover = (index) => {
    setHoverLocation(index);
  }

  const SetLocation = () => setToggleLocation(!ToggleLocation)
  
  
  useEffect(() => {
    const variable = {
      product: LaptopDVDValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setLaptopDvdDrive(response.data.products)
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
      product: ExternalDVDValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setExternalDVDDrive(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: OpticalDriveValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setOpticalDrive(response.data.products)
  } else {
  }
  })
  
  }, [])

  const SearchedProducts = Products.map((product, index) => {
    return (
      <SearchedCart key={index} UserData={UserData} product={product} />
  )
    })
  
    const SearchedLocationProducts = Products.map((product, index) => {
      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
        return (
        <SearchedCart key={index} UserData={UserData} product={product} />
    )
      }
      })

    const LaptopDVDDrivePage = LaptopDvdDrive.map((product, index) => {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )      
      })

      const LaptopDVDDrivePageLocation = LaptopDvdDrive.map((product, index) => {
        if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && 
        product.Gobabis === true)) {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
  
        )
        }
        
        })

    const ExternalDVDDrivePage = ExternalDVDDrive.map((product, index) => {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      
      })

      const ExternalDVDDrivePageLocation = ExternalDVDDrive.map((product, index) => {
        if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && 
        product.Gobabis === true)) {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
  
        )
        }
        
        })

      const OpticalDrivePage = OpticalDrive.map((product, index) => {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        
        })

        const OpticalDrivePageLocation = OpticalDrive.map((product, index) => {
          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && 
          product.Gobabis === true)) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
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
        
        const PageCategory = (index) => {
          settogglePageCategory(index);
        }

  return (
    <div style={{ display: 'block'}}>
    <SearchBar showResults={clickSearch} refreshFunction={updateSearchTerms} />
    {SearchTerms === "" ?
  <div className='Visited_container-wrapper'>
  <div className='Visited_page-banner'>
    <div className='Page_banner-style'>
    <div className='Page_select-option_some_main'>
    <div onClick={()=> {PageCategory(1)}}
       className={togglePageCategory ===1 ? "Page-option_selects_toggle active-image_page_selected" : "Page-option_selects_toggle"}>
        <img className="image_page_selected" 
        src={InternalCDDVD}
        />
        <div className='Image_Description_hover_box'>
        <div className='Image_Description_hover'>
          Internal CD/DVD Drive
        </div>
        </div>
      </div>

      <div onClick={()=> {PageCategory(2)}}
       className={togglePageCategory ===2 ? "Page-option_selects_toggle active-image_page_selected" : "Page-option_selects_toggle"}>
        <img className="image_page_selected" 
        src={ExternalCDDVD}
        />
        <div className='Image_Description_hover_box'>
        <div className='Image_Description_hover'>
          External CD/DVD Drive
        </div>
        </div>
      </div>
  
      <div onClick={()=> {PageCategory(3)}}
       className={togglePageCategory ===3 ? "Page-option_selects_toggle active-image_page_selected" : "Page-option_selects_toggle"}>
        <img className="image_page_selected" 
        src={OpticDisc}
        />
        <div className='Image_Description_hover_box'>
        <div className='Image_Description_hover'>
          Optical Disc Drive
        </div>
        </div>
      </div>

      {UserData.length === 0 ?
      <div className='Page_My_Location_Three'>
        <div onMouseEnter={()=> PopupHover(1)} onMouseLeave={()=> PopupHover(0)} className='MyLocationHover'>
        <div className='Page_My_Location_box'>
          M
        </div>
        <div className='Page_My_Location_box'>
          Y
        </div>
        <div className='Page_My_Location_box-space'>
          T
        </div>
        <div className='Page_My_Location_box'>
          O
        </div>
        <div className='Page_My_Location_box'>
          W
        </div>
        <div className='Page_My_Location_box'>
          N
        </div>
        </div>
        <div className={HoverLocation === 1 ? "Hover_Message" : "Hover_Message-hide"}>
          <span>LogIn to access this feature</span>
        </div>
      </div>
      :
      UserData.length !== 0 && UserData.userLocation === "" ?
      <button className='Page_Choose_Location_Three'>
      <a href='/user/cart' className='ChooseLocationHover'>
      <div className='Page_My_Location_box'>
        S
      </div>
      <div className='Page_My_Location_box'>
        E
      </div>
      <div className='Page_My_Location_box'>
        T
      </div>
      <div className='Page_My_Location_box-space'>
        T
      </div>
      <div className='Page_My_Location_box'>
        O
      </div>
      <div className='Page_My_Location_box'>
        W
      </div>
      <div className='Page_My_Location_box'>
        N
      </div>
      </a>
    </button>
    :
    UserData.userLocation === "Windhoek" ?
    <button onClick={PopupSelectLocation} className={SelectLocation === true ? "Page_Choose_Button_Location-active_Three" : "Page_Choose_Button_Location_Three"}>
    <div onMouseEnter={()=> PopupHover(1)} onMouseLeave={()=> PopupHover(0)} className='MyLocationHover'>
    <div className='Page_My_Location_box'>
      M
    </div>
    <div className='Page_My_Location_box'>
      Y
    </div>
    <div className='Page_My_Location_box-space'>
      T
    </div>
    <div className='Page_My_Location_box'>
      O
    </div>
    <div className='Page_My_Location_box'>
      W
    </div>
    <div className='Page_My_Location_box'>
      N
    </div>
    </div>
    <div className={HoverLocation === 1 ? "Hover_Message_location" : "Hover_Message-hide"}>
      <span>Click to show Items in your City</span>
    </div>
  </button>
  :
  <button onClick={PopupSelectLocation} className={SelectLocation === true ? "Page_Choose_Button_Location-active_Three" : "Page_Choose_Button_Location_Three"}>
  <div className='MyLocationHover'>
  <div className='Page_My_Location_box'>
          M
        </div>
        <div className='Page_My_Location_box'>
          Y
        </div>
        <div className='Page_My_Location_box-space'>
          T
        </div>
        <div className='Page_My_Location_box'>
          O
        </div>
        <div className='Page_My_Location_box'>
          W
        </div>
        <div className='Page_My_Location_box'>
          N
        </div>
  </div>
</button>
      }
        
      </div>
      <div className='Background_Image'>
      <img src={BackgroundImage} className='Background_Image_style_main' alt="" />
    </div>

    </div>
  </div>

  {/* All LaptopDVDDrive*/}
<div className={togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopDVDDrivePage}
</div>

<div className={togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopDVDDrivePageLocation}
</div>

  {/* All ExternalDVDDrive*/}
  <div className={togglePageCategory === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ExternalDVDDrivePage}
</div>

<div className={togglePageCategory === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ExternalDVDDrivePageLocation}
</div>

  {/* All OpticalDrive*/}
  <div className={togglePageCategory === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {OpticalDrivePage}
</div>

<div className={togglePageCategory === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {OpticalDrivePageLocation}
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
<div style={{ minWidth: '280px', height: '450px',marginLeft: '15px', borderRadius: '5px', padding: '10px 15px', border: '2px solid #c5cbd5'}}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', borderBottom: '1px solid #5a596a'}}>
            <span style={{ fontSize: '22px', fontWeight: '700', color: '#070606'}}>Filter Search</span>
            </div>
            <div style={{ width: '100%', paddingTop: '30px', display: 'block'}}>
              <div style={{ display: 'flex'}}>
                <div>
                <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My Town/City:</span>
                </div>
                {UserData.length === 0 ?
                <div className='Filter_location'>
                <div className="Filter_location_button"><a href='/login' style={{ width: '100%', height: '100%', display: 'flex', 
                 justifyContent: 'center', alignItems: 'center' }}><span style={{color: '#fff', fontSize: '13px', fontWeight: '700'}}>LOGIN</span></a></div>
                </div>
                :
                UserData.length !== 0 & UserData.userLocation === "" ?
                <div className='Filter_location'>
                <div className="Filter_location_button"><a href='/user/cart' style={{ width: '100%', height: '100%', display: 'flex', 
                 justifyContent: 'center', alignItems: 'center' }}><span style={{color: '#fff', fontSize: '13px', fontWeight: '700'}}>Select</span></a></div>
                </div>
                :
                <div className='Filter_location'>
                  <button onClick={SetLocation} className={ToggleLocation ? "active-Filter_location_button": "Filter_location_button"}></button>
                  </div>
                }

              </div>
            </div>
          </div>
  <div style={{ marginLeft: '20px'}}>
      {ToggleLocation === false ?
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {SearchedProducts}
      </div>
      :
      <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {SearchedLocationProducts}
      </div>
      }
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

export default CDDVD