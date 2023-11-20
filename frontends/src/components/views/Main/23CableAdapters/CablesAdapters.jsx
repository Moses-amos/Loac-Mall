import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import BackgroundImage from '../Images/babyblue background.jpg'
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

function CablesAdapters() {

  const [togglePageCategory, settogglePageCategory] = useState(1)
  const [Products, setProducts] = useState([])
  const [toggleBrands, settoggleBrands] = useState(0)
  const [UserData, setUserData] = useState([])
  const [HDMIs, setHDMIs] = useState([])
  const [Ethernets, setEthernets] = useState([])
  const [VGAs, setVGAs] = useState([])
  const [Displayports, setDisplayports] = useState([])
  const [DVIs, setDVIs] = useState([])
  const [USBs, setUSBs] = useState([])
  const [SataCables, setSataCables] = useState([])
  const [Molexs, setMolexs] = useState([])
  const [Unknowns, setUnknowns] = useState([])

  const [HdmiValue, setHdmiValue] = useState("HDMI Related")
  const [EthernetValue, setEthernetValue] = useState("Ethernet Cable")
  const [VGAValue, setVGAValue] = useState("VGA Related")
  const [DisplayportsValue, setDisplayportsValue] = useState("DisplayPort Related")
  const [DVIValue, setDVIValue] = useState("DVI Related")
  const [USBValue, setUSBValue] = useState("USB Related")
  const [SataValue, setSataValue] = useState("Sata Cable")
  const [MolexValue, setMolexValue] = useState("Molex Related")
  const [UnknownValue, setUnknownValue] = useState("Unlisted Cable")
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
      product: HdmiValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setHDMIs(response.data.products)
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
      product: EthernetValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setEthernets(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: VGAValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setVGAs(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: DisplayportsValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setDisplayports(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: DVIValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setDVIs(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: USBValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setUSBs(response.data.products)
  } else {
  }
  })
  
  }, [])


  useEffect(() => {
    const variable = {
      product: SataValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setSataCables(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: MolexValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setMolexs(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: UnknownValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setUnknowns(response.data.products)
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

    const HdmiPage = HDMIs.map((product, index) => {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      })

      const HdmiPageLocation = HDMIs.map((product, index) => {
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

      const EthernetsPage = Ethernets.map((product, index) => {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        })

        const EthernetsPageLocation = Ethernets.map((product, index) => {
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

        const VGAsPage = VGAs.map((product, index) => {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          })

          const VGAsPageLocation = VGAs.map((product, index) => {
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

          const DisplayportsPage = Displayports.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            })

            const DisplayportsPageLocation = Displayports.map((product, index) => {
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

            const DVIsPage = DVIs.map((product, index) => {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              })

              const DVIsPageLocation = DVIs.map((product, index) => {
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

              const USBsPage = USBs.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                })

                const USBsPageLocation = USBs.map((product, index) => {
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

                      const SataCablesPage = SataCables.map((product, index) => {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />

                        )
                        })

                        const SataCablesPageLocation = SataCables.map((product, index) => {
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

                        const MolexsPage = Molexs.map((product, index) => {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />

                          )
                          })

                          const MolexsPageLocation = Molexs.map((product, index) => {
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

                          const UnknownsPage = Unknowns.map((product, index) => {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />

                            )
                            })

                            const UnknownsPageLocation = Unknowns.map((product, index) => {
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
        <div className={toggleBrands ===0 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(0)}} >
            <span>USB Cables</span>
          </div>
        <div className={toggleBrands ===1 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>HDMI Cables</span>
          </div>
          <div className={toggleBrands ===2 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>LAN Cables</span>
          </div>
          <div className={toggleBrands ===3 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>VGA Cables</span>
          </div>
          <div className={toggleBrands ===4 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(4)}} >
          <span>Displayport</span>
          </div>
          <div className={toggleBrands ===5 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(5)}} >
          <span>DVI Cables</span>
          </div>
          <div className={toggleBrands ===6 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(6)}} >
          <span>SATA Cables</span>
          </div>
          <div className={toggleBrands ===7 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(7)}} >
          <span>Molex Cables</span>
          </div>
          <div className={toggleBrands ===8 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(8)}} >
          <span>Others</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={toggleBrands === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {USBsPage}
      </div>

      <div className={toggleBrands === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {HdmiPage}
      </div>

      <div className={toggleBrands === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {EthernetsPage}
      </div>

      <div className={toggleBrands === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {VGAsPage}
      </div>

      <div className={toggleBrands === 4 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {DisplayportsPage}
      </div>

      <div className={toggleBrands === 5 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {DVIsPage}
      </div>

      <div className={toggleBrands === 6 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {SataCablesPage}
      </div>

      <div className={toggleBrands === 7 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MolexsPage}
      </div>

      <div className={toggleBrands === 8 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {UnknownsPage}
      </div>

      {/* location */}

      <div className={toggleBrands === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {USBsPageLocation}
      </div>

      <div className={toggleBrands === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {HdmiPageLocation}
      </div>

      <div className={toggleBrands === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {EthernetsPageLocation}
      </div>

      <div className={toggleBrands === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {VGAsPageLocation}
      </div>

      <div className={toggleBrands === 4 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {DisplayportsPageLocation}
      </div>

      <div className={toggleBrands === 5 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {DVIsPageLocation}
      </div>

      <div className={toggleBrands === 6 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {SataCablesPageLocation}
      </div>

      <div className={toggleBrands === 7 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {MolexsPageLocation}
      </div>

      <div className={toggleBrands === 8 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
        {UnknownsPageLocation}
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

export default CablesAdapters