import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import BackgroundImage from '../Images/babyblue background.jpg'
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

function LaptopMemory() {

  const [Products, setProducts] = useState([])
  const [toggleBrands, settoggleBrands] = useState(0)
  const [toggleMemorySize, settoggleMemorySize] = useState(1)
  const [UserData, setUserData] = useState([])
  const [DDRThreeMemory, setDDRThreeMemory] = useState([])
  const [DDRFourMemory, setDDRFourMemory] = useState([])
  const [DDRFiveMemory, setDDRFiveMemory] = useState([])
  const [MemoryDDRThreeValue, setMemoryDDRThreeValue] = useState("Laptop DDR3 Ram")
  const [MemoryDDRFourValue, setMemoryDDRFourValue] = useState("Laptop DDR4 Ram")
  const [MemoryDDRFiveValue, setMemoryDDRFiveValue] = useState("Laptop DDR5 Ram")
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
      product: MemoryDDRThreeValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setDDRThreeMemory(response.data.products)
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
      product: MemoryDDRFourValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setDDRFourMemory(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: MemoryDDRFiveValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setDDRFiveMemory(response.data.products)
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

  const MemoryDDRThreeFourGigPage = DDRThreeMemory.map((product, index) => {
    if (product.ramGeneration === "DDR3" && product.ram === "4 GB") {
    return (
      <ProductCart key={index} UserData={UserData} product={product} />

    )
    }
    
    })

    const MemoryDDRThreeFourGigPageLocation = DDRThreeMemory.map((product, index) => {
      if ((product.ramGeneration === "DDR3" && product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
       && product.Gobabis === true))) {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />
  
      )
      }
      
      })

    const MemoryDDRThreeEightGigPage = DDRThreeMemory.map((product, index) => {
      if (product.ramGeneration === "DDR3" && product.ram === "8 GB") {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      }
      
      })

      const MemoryDDRThreeEightGigPageLocation = DDRThreeMemory.map((product, index) => {
        if ((product.ramGeneration === "DDR3" && product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
         && product.Gobabis === true))) {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
  
        )
        }
        
        })

      const MemoryDDRThreeSixteenGigPage = DDRThreeMemory.map((product, index) => {
        if (product.ramGeneration === "DDR3" &&
        (product.ram !== "4 GB" && product.ram !== "8 GB")) {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        }
        
        })

        const MemoryDDRThreeSixteenGigPageLocation = DDRThreeMemory.map((product, index) => {
          if ((product.ramGeneration === "DDR3" &&
          (product.ram !== "4 GB" && product.ram !== "8 GB")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true))) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })

        const MemoryDDRFourFourGigPage = DDRFourMemory.map((product, index) => {
          if (product.ramGeneration === "DDR4" && product.ram === "4 GB") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })

          const MemoryDDRFourFourGigPageLocation = DDRFourMemory.map((product, index) => {
            if ((product.ramGeneration === "DDR4" && product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
             && product.Gobabis === true))) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
            )
            }
            
            })
      
          const MemoryDDRFourEightGigPage = DDRFourMemory.map((product, index) => {
            if (product.ramGeneration === "DDR4" && product.ram === "8 GB") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const MemoryDDRFourEightGigPageLocation = DDRFourMemory.map((product, index) => {
              if ((product.ramGeneration === "DDR4" && product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })
      
            const MemoryDDRFourSixteenGigPage = DDRFourMemory.map((product, index) => {
              if (product.ramGeneration === "DDR4" &&
              (product.ram !== "4 GB" && product.ram !== "8 GB")) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const MemoryDDRFourSixteenGigPageLocation = DDRFourMemory.map((product, index) => {
                if ((product.ramGeneration === "DDR4" &&
                (product.ram !== "4 GB" && product.ram !== "8 GB")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })

              const MemoryDDRFiveFourGigPage = DDRFiveMemory.map((product, index) => {
                if (product.ramGeneration === "DDR5" && product.ram === "4 GB") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const MemoryDDRFiveFourGigPageLocation = DDRFiveMemory.map((product, index) => {
                  if ((product.ramGeneration === "DDR5" && product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
  
                  )
                  }
                  
                  })
            
                const MemoryDDRFiveEightGigPage = DDRFiveMemory.map((product, index) => {
                  if (product.ramGeneration === "DDR5" && product.ram === "8 GB") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />

                  )
                  }
                  
                  })

                  const MemoryDDRFiveEightGigPageLocation = DDRFiveMemory.map((product, index) => {
                    if ((product.ramGeneration === "DDR5" && product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
  
                    )
                    }
                    
                    })
            
                  const MemoryDDRFiveSixteenGigPage = DDRFiveMemory.map((product, index) => {
                    if (product.ramGeneration === "DDR5" &&
                    (product.ram !== "4 GB" && product.ram !== "8 GB")) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />

                    )
                    }
                    
                    })

                    const MemoryDDRFiveSixteenGigPageLocation = DDRFiveMemory.map((product, index) => {
                      if ((product.ramGeneration === "DDR5" &&
                      (product.ram !== "4 GB" && product.ram !== "8 GB")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
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
                  
                  const BrandCategory = (index) => {
                    settoggleBrands(index);
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
                  
                  
                  const MemorySizeCategory = (index) => {
                    settoggleMemorySize(index);
                  }

  return (
    <div style={{ display: 'block'}}>
    <SearchBar showResults={clickSearch} refreshFunction={updateSearchTerms} />
    {SearchTerms === "" ?
  <div className='Visited_container-wrapper'>
  <div className='Visited_page-banner'>
    <div className='Page_banner-style'>
    <div className='Page_select-option_many'>
      {UserData.length === 0 ?
      <div className='Page_My_Location'>
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
      <button className='Page_Choose_Location'>
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
    <button onClick={PopupSelectLocation} className={SelectLocation === true ? "Page_Choose_Button_Location-active" : "Page_Choose_Button_Location"}>
    <div onMouseEnter={()=> PopupHover(1)} onMouseLeave={()=> PopupHover(0)} className='MyLocationHover'>
    <div className='Page_My_Location_box'>
      M
    </div>
    <div className='Page_My_Location_box'>
      Y
    </div>
    <div className='Page_My_Location_box-space'>
      C
    </div>
    <div className='Page_My_Location_box'>
      I
    </div>
    <div className='Page_My_Location_box'>
      T
    </div>
    <div className='Page_My_Location_box'>
      Y
    </div>
    </div>
    <div className={HoverLocation === 1 ? "Hover_Message_location" : "Hover_Message-hide"}>
      <span>Click to show Items in your City</span>
    </div>
  </button>
  :
  <button onClick={PopupSelectLocation} className={SelectLocation === true ? "Page_Choose_Button_Location-active" : "Page_Choose_Button_Location"}>
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
        <div className="Brand_options_listed">
        <div className={toggleBrands ===0 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(0)}} >
            <span>DDR3 Memory</span>
          </div>
        <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>DDR4 Memory</span>
          </div>
          <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>DDR5 Memory</span>
          </div>
        </div>

        <div className="Memory_size_options_listed">
        <div className='Memomry_size_option'><button className='Memory_option-style'>Memory:</button></div>
        <div className='Memomry_size_option-list'>
          <button onClick={()=> {MemorySizeCategory(1)}}
          className={toggleMemorySize ===1 ? "Memory_size_option_selected_style active-Memory_size_option_selected_style Memory_size_option_selected_style-left" : "Memory_size_option_selected_style Memory_size_option_selected_style-left"}
          >4 GB</button>
          <button onClick={()=> {MemorySizeCategory(2)}}
          className={toggleMemorySize ===2 ? "Memory_size_option_selected_style active-Memory_size_option_selected_style Memory_size_option_selected_style-left" : "Memory_size_option_selected_style Memory_size_option_selected_style-left"}>8 GB</button>

          <button onClick={()=> {MemorySizeCategory(3)}}
          className={toggleMemorySize ===3 ? "Memory_size_option_selected_style active-Memory_size_option_selected_style" : "Memory_size_option_selected_style"}>16 GB+</button>
          </div>
      </div>
      </div>
    </div>
  </div>

  <div className={toggleBrands === 1 && toggleMemorySize === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRThreeFourGigPage}
      </div>

      <div className={toggleBrands === 1 && toggleMemorySize === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRThreeEightGigPage}
      </div>

      <div className={toggleBrands === 1 && toggleMemorySize === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRThreeSixteenGigPage}
      </div>

      <div className={toggleBrands === 2 && toggleMemorySize === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFourFourGigPage}
      </div>

      <div className={toggleBrands === 2 && toggleMemorySize === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFourEightGigPage}
      </div>

      <div className={toggleBrands === 2 && toggleMemorySize === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFourSixteenGigPage}
      </div>

      <div className={toggleBrands === 3 && toggleMemorySize === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFiveFourGigPage}
      </div>

      <div className={toggleBrands === 3 && toggleMemorySize === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFiveEightGigPage}
      </div>

      <div className={toggleBrands === 3 && toggleMemorySize === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFiveSixteenGigPage}
      </div>


      <div className={toggleBrands === 1 && toggleMemorySize === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRThreeFourGigPageLocation}
      </div>

      <div className={toggleBrands === 1 && toggleMemorySize === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRThreeEightGigPageLocation}
      </div>

      <div className={toggleBrands === 1 && toggleMemorySize === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRThreeSixteenGigPageLocation}
      </div>

      <div className={toggleBrands === 2 && toggleMemorySize === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFourFourGigPageLocation}
      </div>

      <div className={toggleBrands === 2 && toggleMemorySize === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFourEightGigPageLocation}
      </div>

      <div className={toggleBrands === 2 && toggleMemorySize === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFourSixteenGigPageLocation}
      </div>

      <div className={toggleBrands === 3 && toggleMemorySize === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFiveFourGigPageLocation}
      </div>

      <div className={toggleBrands === 3 && toggleMemorySize === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFiveEightGigPageLocation}
      </div>

      <div className={toggleBrands === 3 && toggleMemorySize === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MemoryDDRFiveSixteenGigPageLocation}
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

export default LaptopMemory