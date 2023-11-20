import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import BackgroundImage from '../Images/babyblue background.jpg'
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

import KeyboardImage from './Images/keyboard.png'
import MouseImage from './Images/mouse.png'
import MicImage from './Images/usbmic.png'


import './desktopaccessory.css'

function DesktopAccessories() {

  const [togglePageCategory, settogglePageCategory] = useState(1)
  const [Products, setProducts] = useState([])
  const [toggleBrands, settoggleBrands] = useState(1)
  const [Keyboards, setKeyboards] = useState([])
  const [Mouses, setMouses] = useState([])
  const [Speakers, setSpeakers] = useState([])
  const [Microphones, setMicrophones] = useState([])
  const [MouseKeyboard, setMouseKeyboard] = useState([])
  const [MousesValue, setMousesValue] = useState("Mouse")
  const [KeyboardValue, setKeyboardValue] = useState("Keyboard")
  const [SpeakerValue, setSpeakerValue] = useState("USB Speaker")
  const [MicrophoneValue, setMicrophoneValue] = useState("USB Microphone")
  const [ComboValue, setComboValue] = useState("Mouse Keyboard Combo")
  const [ToggleLocation, setToggleLocation] = useState(false)
  const [HoverLocation, setHoverLocation] = useState(0)
  const [SelectLocation, setSelectLocation] = useState(false)
  const [UserData, setUserData] = useState([])

  const PopupSelectLocation = () => setSelectLocation(!SelectLocation)

  const PopupHover = (index) => {
    setHoverLocation(index);
  }

  const SetLocation = () => setToggleLocation(!ToggleLocation)
  

  useEffect(() => {
    const variable = {
      product: KeyboardValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setKeyboards(response.data.products)
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
      product: MousesValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setMouses(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: SpeakerValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setSpeakers(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: MicrophoneValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setMicrophones(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: ComboValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setMouseKeyboard(response.data.products)
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

    const WirelessKeyboardPage = Keyboards.map((product, index) => {
      if (product.inteface === "Wireless") {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      }
      
      })

      const WirelessKeyboardPageLocation = Keyboards.map((product, index) => {
        if (product.inteface === "Wireless" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && 
        product.Gobabis === true))) {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
  
        )
        }
        
        })

      const WiredKeyboardPage = Keyboards.map((product, index) => {
        if (product.inteface === "Wired") {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        }
        
        })

        const WiredKeyboardPageLocation = Keyboards.map((product, index) => {
          if (product.inteface === "Wired" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true))) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })

      const WirelessMousePage = Mouses.map((product, index) => {
        if (product.inteface === "Wireless") {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        }
        
        })

        const WirelessMousePageLocation = Mouses.map((product, index) => {
          if (product.inteface === "Wireless" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true))) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })

        const WiredMousePage = Mouses.map((product, index) => {
            if (product.inteface === "Wired") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const WiredMousePageLocation = Mouses.map((product, index) => {
              if (product.inteface === "Wired" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })

            const MouseKeyboardage = MouseKeyboard.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                })

                const MouseKeyboardageLocation = MouseKeyboard.map((product, index) => {
                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true))
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
  
                  )
                  })

        const SpeakerPage = Speakers.map((product, index) => {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          })

          const SpeakerPageLocation = Speakers.map((product, index) => {
            if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true))
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            })

        const MicrophonePage = Microphones.map((product, index) => {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          })

          const MicrophonePageLocation = Microphones.map((product, index) => {
            if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true))
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

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
      <div className='Page_select-option_some'>
      <div onClick={()=> {PageCategory(1); BrandCategory(1)}}
       className={togglePageCategory ===1 ? "Page-option_selects_toggle active-image_page_selected" : "Page-option_selects_toggle"}>
        <img className="image_page_selected" 
        src={KeyboardImage}
        />
        <div className='Image_Description_hover_box'>
        <div className='Image_Description_hover'>
          Keyboards
        </div>
        </div>
      </div>

      <div onClick={()=> {PageCategory(2); BrandCategory(1)}}
       className={togglePageCategory ===2 ? "Page-option_selects_toggle active-image_page_selected" : "Page-option_selects_toggle"}>
        <img className="image_page_selected" 
        src={MouseImage}
        />
        <div className='Image_Description_hover_box'>
        <div className='Image_Description_hover'>
          Mouses
        </div>
        </div>
      </div>

      <div onClick={()=> {PageCategory(3); BrandCategory(1)}}
       className={togglePageCategory ===3 ? "Page-option_selects_toggle active-image_page_selected" : "Page-option_selects_toggle"}>
        <img className="image_page_selected" 
        src={MicImage}
        />
        <div className='Image_Description_hover_box'>
        <div className='Image_Description_hover'>
          Speakers & Microphones
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
      <img src={BackgroundImage} className='Background_Image_style' alt="" />
    </div>
    <div className='RamPage_brand-options_box'>
        <div className={togglePageCategory ===1 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>Wired Keyboards</span>
          </div>
          <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>Wireless Keyboards</span>
          </div>
          <div className={toggleBrands ===3 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
            <span>Mouse & Keyboards</span>
          </div>
        </div>
        <div className={togglePageCategory ===2 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>Wired Mouse</span>
          </div>
          <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>Wireless Mouse</span>
          </div>
          <div className={toggleBrands ===3 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>Mouse & Keyboards</span>
          </div>
        </div>
        <div className={togglePageCategory ===3 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>Speakers</span>
          </div>
          <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>Microphones</span>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* All Keyboard*/}
<div className={togglePageCategory === 1 && toggleBrands === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {WiredKeyboardPage}
</div>

<div className={togglePageCategory === 1 && toggleBrands === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {WirelessKeyboardPage}
</div>

<div className={togglePageCategory === 1 && toggleBrands === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MouseKeyboardage}
</div>

<div className={togglePageCategory === 1 && toggleBrands === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {WiredKeyboardPageLocation}
</div>

<div className={togglePageCategory === 1 && toggleBrands === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {WirelessKeyboardPageLocation}
</div>

<div className={togglePageCategory === 1 && toggleBrands === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MouseKeyboardageLocation}
</div>

  {/* All Mouses*/}
  <div className={togglePageCategory === 2 && toggleBrands === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {WiredMousePage}
</div>

<div className={togglePageCategory === 2 && toggleBrands === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {WirelessMousePage}
</div>

<div className={togglePageCategory === 2 && toggleBrands === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MouseKeyboardage}
</div>

<div className={togglePageCategory === 2 && toggleBrands === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {WiredMousePageLocation}
</div>

<div className={togglePageCategory === 2 && toggleBrands === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {WirelessMousePageLocation}
</div>

<div className={togglePageCategory === 2 && toggleBrands === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MouseKeyboardageLocation}
</div>

  {/* All Speakers*/}
  <div className={togglePageCategory === 3 && toggleBrands === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {SpeakerPage}
</div>

<div className={togglePageCategory === 3 && toggleBrands === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {SpeakerPageLocation}
</div>

  {/* All Microphones*/}
  <div className={togglePageCategory === 3 && toggleBrands === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MicrophonePage}
</div>

<div className={togglePageCategory === 3 && toggleBrands === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MicrophonePageLocation}
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

export default DesktopAccessories