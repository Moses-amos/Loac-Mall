import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import { Empty } from 'antd';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

function KitchenAppliancesPage(props) {

  const [UserData, setUserData] = useState([])
  const [Refrigerators, setRefrigerators] = useState([])
  const [RangesStoves, setRangesStoves] = useState([])
  const [Cooktops, setCooktops] = useState([])
  const [WallOvens, setWallOvens] = useState([])
  const [Dishwashers, setDishwashers] = useState([])
  const [ChestFreezers, setChestFreezers] = useState([])
  const [Freezers, setFreezers] = useState([])
  const [Microwaves, setMicrowaves] = useState([])
  const [BundleAppliances, setBundleAppliances] = useState([])

  const [SelectTabs, setSelectTabs] = useState(1)
  const [Products, setProducts] = useState([])
  const [ToggleLocation, setToggleLocation] = useState(false)
  const [IsLoading, setIsLoading] = useState(true)
  const [toggleFeatures, settoggleFeatures] = useState(0)

  const SetLocation = () => setToggleLocation(!ToggleLocation)

  const ToggleSelectTabs = (index) => {
    setSelectTabs(index);
  }  

  const FeaturesCategory = (index) => {
    settoggleFeatures(index);
  }

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
      slidesToSlide: 3,
      partialVisibilityGutter: 30
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3,
      partialVisibilityGutter: 20
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 4,
      slidesToSlide: 3,
      partialVisibilityGutter: 15
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 3,
      slidesToSlide: 2,

    }
  };


  useEffect(() => {

    const variable = {
      product: "Refrigerator"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setRefrigerators(response.data.products)
  } else {
  }
  })

      Axios.get('/api/users/getUser')
      .then(response => {
          if (response.data.success) {
            setUserData(response.data.doc)
          }
      })

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
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


const GetRangeStoves = () => {
    const variable = {
        product: "Cooking Appliance"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setRangesStoves(response.data.products)
    } else {
    }
    })
}

const GetCooktops = () => {
    const variable = {
        product: "Cooktop"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setCooktops(response.data.products)
    } else {
    }
    })
}

const GetWallOvens = () => {
    const variable = {
        product: "Wall Oven"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setWallOvens(response.data.products)
    } else {
    }
    })
}

const GetDishwashers = () => {
    const variable = {
        product: "Dishwasher"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setDishwashers(response.data.products)
    } else {
    }
    })
}

const GetChestFreezers = () => {
    const variable = {
        product: "Chest Freezer"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setChestFreezers(response.data.products)
    } else {
    }
    })
}

const GetFreezers = () => {
  const variable = {
      product: "Freezer"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setFreezers(response.data.products)
  } else {
  }
  })
}

const GetMicrowaves = () => {
    const variable = {
        product: "Microwave"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setMicrowaves(response.data.products)
    } else {
    }
    })
}

const GetBundleAppliances = () => {
    const variable = {
        product: "Kitchen Appliance Package"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setBundleAppliances(response.data.products)
    } else {
    }
    })
}

  const SearchedProducts = Products.map((product, index) => {
    if (product.activeSeller === true) {
      return (
      <SearchedCart key={index} UserData={UserData} product={product} />
      )
    }
  
    })
  
    const SearchedLocationProducts = Products.map((product, index) => {
      if (((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)
      || (UserData.userLocation === "Rundu" && product.Rundu === true)) && product.activeSeller === true) {
        return (
        <SearchedCart key={index} UserData={UserData} product={product} />
    )
      }
      })

      const RefrigeratorsPage = Refrigerators.map((product, index) => {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
          )
        })

        const RefrigeratorsPageLocation = Refrigerators.map((product, index) => {
          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
      
            )
          }
          })

          const RefrigeratorsTopFreezerPage = Refrigerators.map((product, index) => {
            if (product.interface === "Freezer-on-Top") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const RefrigeratorsTopFreezerPageLocation = Refrigerators.map((product, index) => {
              if (product.interface === "Freezer-on-Top" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const RefrigeratorsLeftFreezerPage = Refrigerators.map((product, index) => {
                if (product.interface === "Freezer-on-Left") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
    
                )
                }
                
                })
    
                const RefrigeratorsLeftFreezerPageLocation = Refrigerators.map((product, index) => {
                  if (product.interface === "Freezer-on-Left" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
    
                  )
                  }
                  
                  })

                  const RefrigeratorsBottomFreezerPage = Refrigerators.map((product, index) => {
                    if (product.interface === "Freezer-on-Bottom") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
        
                    )
                    }
                    
                    })
        
                    const RefrigeratorsBottomFreezerPageLocation = Refrigerators.map((product, index) => {
                      if (product.interface === "Freezer-on-Bottom" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
        
                      )
                      }
                      
                      })

                      const RefrigeratorsFreezerlessFreezerPage = Refrigerators.map((product, index) => {
                        if (product.interface === "Freezerless") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
            
                        )
                        }
                        
                        })
            
                        const RefrigeratorsFreezerlessFreezerPageLocation = Refrigerators.map((product, index) => {
                          if (product.interface === "Freezerless" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
            
                          )
                          }
                          
                          })

              const RangesStovesElectricPage = RangesStoves.map((product, index) => {
                if (product.powerSource === "Electric Burner") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
    
                )
                }
                
                })
    
                const RangesStovesElectricPageLocation = RangesStoves.map((product, index) => {
                  if (product.powerSource === "Electric Burner" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
    
                  )
                  }
                  
                  })

                  const RangesStovesGasPage = RangesStoves.map((product, index) => {
                    if (product.powerSource === "Gas Burner") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
        
                    )
                    }
                    
                    })
        
                    const RangesStovesGasPageLocation = RangesStoves.map((product, index) => {
                      if (product.powerSource === "Gas Burner" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
        
                      )
                      }
                      
                      })

                  const CooktopsElectricPage = Cooktops.map((product, index) => {
                    if (product.powerSource === "Electric Burner") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
        
                    )
                    }
                    
                    })
        
                    const CooktopsElectricPageLocation = Cooktops.map((product, index) => {
                      if (product.powerSource === "Electric Burner" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
        
                      )
                      }
                      
                      })

                      const CooktopsGasPage = Cooktops.map((product, index) => {
                        if (product.powerSource === "Gas Burner") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
            
                        )
                        }
                        
                        })
            
                        const CooktopsGasPageLocation = Cooktops.map((product, index) => {
                          if (product.powerSource === "Gas Burner" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
            
                          )
                          }
                          
                          })


                  const WallOvensPage = WallOvens.map((product, index) => {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                      )
                    })
            
                    const WallOvensPageLocation = WallOvens.map((product, index) => {
                      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                  
                        )
                      }
                      })

                      const DishwashersPage = Dishwashers.map((product, index) => {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                          )
                        })
                
                        const DishwashersPageLocation = Dishwashers.map((product, index) => {
                          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                      
                            )
                          }
                          })

                          const ChestFreezersPage = ChestFreezers.map((product, index) => {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                              )
                            })
                    
                            const ChestFreezersPageLocation = ChestFreezers.map((product, index) => {
                              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                          
                                )
                              }
                              })

                              const FreezersOneDoorPage = Freezers.map((product, index) => {
                                if (product.interface === "1 Door") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                    
                                )
                                }
                                
                                })
                    
                                const FreezersOneDoorPageLocation = Freezers.map((product, index) => {
                                  if (product.interface === "1 Door" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                   && product.Gobabis === true))) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                    
                                  )
                                  }
                                  
                                  })

                                  const FreezersTwoDoorPage = Freezers.map((product, index) => {
                                    if (product.interface === "2 Door") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                        
                                    )
                                    }
                                    
                                    })
                        
                                    const FreezersTwoDoorPageLocation = Freezers.map((product, index) => {
                                      if (product.interface === "2 Door" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                        
                                      )
                                      }
                                      
                                      })

                              const MicrowavesPage = Microwaves.map((product, index) => {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                                  )
                                })
                        
                                const MicrowavesPageLocation = Microwaves.map((product, index) => {
                                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                              
                                    )
                                  }
                                  })

                                  const BundleAppliancesPage = BundleAppliances.map((product, index) => {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                                      )
                                    })
                            
                                    const BundleAppliancesPageLocation = BundleAppliances.map((product, index) => {
                                      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                  
                                        )
                                      }
                                      })

  return (
    <div style={{ display: 'block', background: "#f7f3f6"}}>
    {SearchTerms === "" ?
  <div className='Visited_container-wrapper'>
  <div className='Visited_page-banner'>
    <div className='Category_selectTabs_box'>
    <div>
      <span className='Category_selectTabs_span'>Kitchen Appliances</span>
    </div>

    <div className='Select_tabs_slider'>
    {/* <Carousel className='Carosal_style_images' 
    responsive={responsive}
    partialVisible={true}
    swipeable={true}
    draggable={true}
    minimumTouchDrag={50}
    deviceType={props.deviceType}
    >

  <div className={SelectTabs ===1 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(1); FeaturesCategory(0)}}
  ><div>
    <img 
    src='https://www.familyhandyman.com/wp-content/uploads/2018/08/kenmore.jpg'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Refrigerators</span>
  </div>
    
   </div>

   <div className={SelectTabs ===2 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(2); GetRangeStoves(); FeaturesCategory(1)}}
  ><div>
    <img 
    src='https://i5.walmartimages.com/asr/25ffba08-8d97-47b2-8e23-3bcb10562761.8ddb97f44061664aa6a6d20441ffcbf2.png'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Stoves</span>
  </div>
    
   </div>

   <div className={SelectTabs ===3 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(3); GetCooktops(); FeaturesCategory(1)}}
  ><div>
    <img 
    src='https://image.made-in-china.com/202f0j00UkRruFwAbfgb/4-Burners-Stainless-Steel-Easy-Cleaning-Knob-Control-Built-in-Gas-Hob-Gas-Stove.webp'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Cooktops</span>
  </div>
   </div>

   <div className={SelectTabs ===4 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(4); GetWallOvens(); FeaturesCategory()}}
  ><div>
    <img src="https://mobileimages.lowes.com/productimages/873d79f5-8871-4243-824d-2b5f4a4c439d/50147730.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Wall Ovens</span>
  </div>
   </div>

   <div className={SelectTabs ===5 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(5); GetDishwashers(); FeaturesCategory()}}
  ><div>
    <img 
    src='https://pimcdn.sharafdg.com/cdn-cgi/image/width=600,height=600,fit=pad/images/000000000001005084_1?1692352536'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Dishwashers</span>
  </div>
   </div>

   <div className={SelectTabs ===6 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(6); GetChestFreezers(); FeaturesCategory(1)}}
  ><div>
    <img 
    src='https://images-eu.ssl-images-amazon.com/images/I/61D3bekyAAL._AC_UL600_SR600,600_.jpg'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Freezers</span>
  </div>
   </div>

   <div className={SelectTabs ===7 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(7); GetMicrowaves(); FeaturesCategory()}}
  ><div>
    <img 
    src='https://i.ebayimg.com/images/g/0rIAAOSw1KJkmADr/s-l1200.webp'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Microwaves</span>
  </div>
   </div>

   <div className={SelectTabs ===8 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(8); GetBundleAppliances(); FeaturesCategory()}}
  ><div>
    <img 
    src='https://i.pinimg.com/736x/81/18/52/8118522f9824ccd4b8e8b5bfea6f0aed--house-appliances-appliance-repair.jpg'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Sale Bundles</span>
  </div>
   </div>


</Carousel> */}
<Carousel className='Carosal_style_images' 
    responsive={responsive}
    partialVisible={true}
    swipeable={true}
    draggable={true}
    minimumTouchDrag={50}
    deviceType={props.deviceType}
    >

<div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(1); FeaturesCategory(0)}}
  ><div>
    <img  
    src='https://i.imgur.com/InOcrhQ.png'
    className={SelectTabs ===1 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Refrigerators</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(2); GetRangeStoves(); FeaturesCategory(1)}}
  ><div>
    <img  
    src='https://i.imgur.com/qfoynDA.png'
    className={SelectTabs ===2 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Stoves</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(3); GetCooktops(); FeaturesCategory(1)}}
  ><div>
    <img  
    src='https://i.imgur.com/lL3czY4.png'
    className={SelectTabs ===3 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Cooktops</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(4); GetWallOvens(); FeaturesCategory()}}
  ><div>
    <img  src="https://i.imgur.com/29DU60L.png"
    className={SelectTabs ===4 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Wall Ovens</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(5); GetDishwashers(); FeaturesCategory()}}
  ><div>
    <img  
    src='https://i.imgur.com/pxO5s04.png'
    className={SelectTabs ===5 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Dishwashers</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(6); GetChestFreezers(); FeaturesCategory(1)}}
  ><div>
    <img  
    src='https://i.imgur.com/59qpJ66.png'
    className={SelectTabs ===6 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Freezers</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(7); GetMicrowaves(); FeaturesCategory()}}
  ><div>
    <img  
    src='https://i.imgur.com/lGjsKSH.png'
    className={SelectTabs ===7 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Microwaves</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(8); GetBundleAppliances(); FeaturesCategory()}}
  ><div>
    <img  
    src='https://i.imgur.com/PLW3WrK.png'
    className={SelectTabs ===8 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Sale Bundle</span>
  </div>
   </div>


</Carousel>

    </div>

    <div className={SelectTabs ===1 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Refrigerators</span>
    </div>
    </div>

    <div className={SelectTabs ===2 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Stoves & Ranges</span>
    </div>
    </div>

    <div className={SelectTabs ===3 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Cooktops</span>
    </div>
    </div>

    <div className={SelectTabs ===4 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Oven Appliances</span>
    </div>
    </div>

    <div className={SelectTabs ===5 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Dishwashers</span>
    </div>
    </div>

    <div className={SelectTabs ===6 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Fridges & Freezers</span>
    </div>
    </div>

    <div className={SelectTabs ===7 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Countertop Microwaves</span>
    </div>
    </div>

    <div className={SelectTabs ===8 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Appliance Bundles</span>
    </div>
    </div>

    <div className={SelectTabs ===1 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={toggleFeatures ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {FeaturesCategory(1)}} >
            <span>Top Freezer</span>
          </div>
          <div className={toggleFeatures ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {FeaturesCategory(2)}} >
            <span>Left Freezer</span>
          </div>
    <div className={toggleFeatures ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {FeaturesCategory(3)}} >
            <span>Bottom Freezer</span>
          </div>
          <div className={toggleFeatures ===4 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {FeaturesCategory(4)}} >
            <span>Freezerless</span>
          </div>
          
    </div>

    <div className={SelectTabs ===2 || SelectTabs ===3 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={toggleFeatures ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {FeaturesCategory(1)}} >
            <span>Electric</span>
          </div>
          <div className={toggleFeatures ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {FeaturesCategory(2)}} >
            <span>Gas</span>
          </div>
    
          
    </div>

    <div className={SelectTabs ===6 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={toggleFeatures ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {FeaturesCategory(1)}} >
            <span>Chest Freezer</span>
          </div>
          <div className={toggleFeatures ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {FeaturesCategory(2); GetFreezers()}} >
            <span>1 Door</span>
          </div>
    <div className={toggleFeatures ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {FeaturesCategory(3); GetFreezers()}} >
            <span>2 Door</span>
          </div>
          
          
    </div>

    </div>
  </div>

  <div className='My_location_items_options_box'>
    <div className='My_location_items_choose_box'>
    <div className='My_location_choose_box'>
      <span>Location</span>
    </div>

    {UserData.length === 0 ?
        <div className='My_location_items_box'>
        <a href='/login' style={{ width: '100%', height: '100%', display: 'flex', 
          justifyContent: 'center', alignItems: 'center' }}>
        <span>Near Me</span>
        </a>
      </div>
    :
    (UserData.length !== 0 & UserData.userLocation === "") && UserData.operateLocation === "User" ?
      <div className='My_location_items_box'>
        <a href='/0settings' style={{ width: '100%', height: '100%', display: 'flex', 
          justifyContent: 'center', alignItems: 'center' }}>
        <span>Near Me</span>
        </a>
      </div>
      :
      <div onClick={SetLocation}  className={ToggleLocation === true ? 'My_location_items_box_active' : 'My_location_items_box'}>
      <span>Near Me</span>
    </div>
    }
    </div>


    </div>


<div className='ListedItems_container'>

{Refrigerators && Refrigerators.length === undefined ?
  <></>
  :
  Refrigerators && Refrigerators.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleFeatures ===0 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === false && toggleFeatures ===0 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RefrigeratorsPage}
</div>
}

{Refrigerators && Refrigerators.length === undefined ?
  <></>
  :
  Refrigerators && Refrigerators.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleFeatures ===1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === false && toggleFeatures ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RefrigeratorsTopFreezerPage}
</div>
}

{Refrigerators && Refrigerators.length === undefined ?
  <></>
  :
  Refrigerators && Refrigerators.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleFeatures ===2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === false && toggleFeatures ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RefrigeratorsLeftFreezerPage}
</div>
}

{Refrigerators && Refrigerators.length === undefined ?
  <></>
  :
  Refrigerators && Refrigerators.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleFeatures ===3 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === false && toggleFeatures ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RefrigeratorsBottomFreezerPage}
</div>
}

{Refrigerators && Refrigerators.length === undefined ?
  <></>
  :
  Refrigerators && Refrigerators.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleFeatures ===4 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === false && toggleFeatures ===4 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RefrigeratorsFreezerlessFreezerPage}
</div>
}

{RangesStoves && RangesStoves.length === undefined ?
  <></>
  :
  RangesStoves && RangesStoves.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false && toggleFeatures ===1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 2 && ToggleLocation === false && toggleFeatures ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RangesStovesElectricPage}
</div>
}

{RangesStoves && RangesStoves.length === undefined ?
  <></>
  :
  RangesStoves && RangesStoves.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false && toggleFeatures ===2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 2 && ToggleLocation === false && toggleFeatures ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RangesStovesGasPage}
</div>
}

{Cooktops && Cooktops.length === undefined ?
  <></>
  :
  Cooktops && Cooktops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === false && toggleFeatures ===1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 3 && ToggleLocation === false && toggleFeatures ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {CooktopsElectricPage}
</div>
}

{Cooktops && Cooktops.length === undefined ?
  <></>
  :
  Cooktops && Cooktops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === false && toggleFeatures ===2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 3 && ToggleLocation === false && toggleFeatures ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {CooktopsGasPage}
</div>
}

{WallOvens && WallOvens.length === undefined ?
  <></>
  :
  WallOvens && WallOvens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {WallOvensPage}
</div>
}

{Dishwashers && Dishwashers.length === undefined ?
  <></>
  :
  Dishwashers && Dishwashers.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 5 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {DishwashersPage}
</div>
}

{ChestFreezers && ChestFreezers.length === undefined ?
  <></>
  :
  ChestFreezers && ChestFreezers.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === false && toggleFeatures ===1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === false && toggleFeatures ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ChestFreezersPage}
</div>
}

{Freezers && Freezers.length === undefined ?
  <></>
  :
  Freezers && Freezers.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === false && toggleFeatures ===2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === false && toggleFeatures ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {FreezersOneDoorPage}
</div>
}

{Freezers && Freezers.length === undefined ?
  <></>
  :
  Freezers && Freezers.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === false && toggleFeatures ===3 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === false && toggleFeatures ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {FreezersTwoDoorPage}
</div>
}

{Microwaves && Microwaves.length === undefined ?
  <></>
  :
  Microwaves && Microwaves.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 7 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 7 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {MicrowavesPage}
</div>
}

{BundleAppliances && BundleAppliances.length === undefined ?
  <></>
  :
  BundleAppliances && BundleAppliances.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 8 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 8 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {BundleAppliancesPage}
</div>
}



{Refrigerators && Refrigerators.length === undefined ?
  <></>
  :
  Refrigerators && Refrigerators.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleFeatures ===1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === true && toggleFeatures ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RefrigeratorsPageLocation}
</div>
}

{Refrigerators && Refrigerators.length === undefined ?
  <></>
  :
  Refrigerators && Refrigerators.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleFeatures ===1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === true && toggleFeatures ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RefrigeratorsTopFreezerPageLocation}
</div>
}

{Refrigerators && Refrigerators.length === undefined ?
  <></>
  :
  Refrigerators && Refrigerators.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleFeatures ===2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === true && toggleFeatures ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RefrigeratorsLeftFreezerPageLocation}
</div>
}

{Refrigerators && Refrigerators.length === undefined ?
  <></>
  :
  Refrigerators && Refrigerators.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleFeatures ===3 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === true && toggleFeatures ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RefrigeratorsBottomFreezerPageLocation}
</div>
}

{Refrigerators && Refrigerators.length === undefined ?
  <></>
  :
  Refrigerators && Refrigerators.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleFeatures ===4 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === true && toggleFeatures ===4 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RefrigeratorsFreezerlessFreezerPageLocation}
</div>
}

{RangesStoves && RangesStoves.length === undefined ?
  <></>
  :
  RangesStoves && RangesStoves.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true && toggleFeatures ===1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 2 && ToggleLocation === true && toggleFeatures ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RangesStovesElectricPageLocation}
</div>
}

{RangesStoves && RangesStoves.length === undefined ?
  <></>
  :
  RangesStoves && RangesStoves.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true && toggleFeatures ===2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 2 && ToggleLocation === true && toggleFeatures ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {RangesStovesGasPageLocation}
</div>
}

{Cooktops && Cooktops.length === undefined ?
  <></>
  :
  Cooktops && Cooktops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === true && toggleFeatures ===1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 3 && ToggleLocation === true && toggleFeatures ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {CooktopsElectricPageLocation}
</div>
}

{Cooktops && Cooktops.length === undefined ?
  <></>
  :
  Cooktops && Cooktops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === true && toggleFeatures ===2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 3 && ToggleLocation === true && toggleFeatures ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {CooktopsGasPageLocation}
</div>
}

{WallOvens && WallOvens.length === undefined ?
  <></>
  :
  WallOvens && WallOvens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {WallOvensPageLocation}
</div>
}

{Dishwashers && Dishwashers.length === undefined ?
  <></>
  :
  Dishwashers && Dishwashers.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 5 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {DishwashersPageLocation}
</div>
}

{ChestFreezers && ChestFreezers.length === undefined ?
  <></>
  :
  ChestFreezers && ChestFreezers.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === true && toggleFeatures ===1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === true && toggleFeatures ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ChestFreezersPageLocation}
</div>
}

{Freezers && Freezers.length === undefined ?
  <></>
  :
  Freezers && Freezers.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === true && toggleFeatures ===2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === true && toggleFeatures ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {FreezersOneDoorPageLocation}
</div>
}

{Freezers && Freezers.length === undefined ?
  <></>
  :
  Freezers && Freezers.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === true && toggleFeatures ===3 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === true && toggleFeatures ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {FreezersTwoDoorPageLocation}
</div>
}

{Microwaves && Microwaves.length === undefined ?
  <></>
  :
  Microwaves && Microwaves.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 7 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 7 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {MicrowavesPageLocation}
</div>
}

{BundleAppliances && BundleAppliances.length === undefined ?
  <></>
  :
  BundleAppliances && BundleAppliances.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 8 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 8 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {BundleAppliancesPageLocation}
</div>
}



</div>
  



  </div>
  :
  SearchTerms !== "" ?
<div className='Searched_container'>
{
(SearchTerms !== "" && searchResults === true) || (SearchTerms !== "" && searchResults === false) ?
<>
{Products.length === 0 ?
      <div className='Searching-product_box_main'>
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
<div className='Search_result_container'>
<div className='Search_filter_box'>
            <div className='Search_filter_box_title'>
            <span className='Search_filter_box_title_span'>Location</span>
            </div>
            <div className='Filter_location_box'>
              <div className='Searched_filter_loaction_space'>
              <div>
                  {UserData.userLocation === undefined ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>Near Me:</span>
                  :
                  UserData.userLocation === "Windhoek" ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My City:</span>
                  :
                  UserData.userLocation === "" ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>Near Me:</span>
                  :
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My Town:</span>
                  }

                </div>
                {UserData.length === 0 ?
                <div className='Filter_location'>
                <div className="Filter_location_button"><a href='/login' style={{ width: '100%', height: '100%', display: 'flex', 
                 justifyContent: 'center', alignItems: 'center' }}><span style={{color: '#fff', fontSize: '13px', fontWeight: '700'}}>LOGIN</span></a></div>
                </div>
                :
                UserData.length !== 0 & UserData.userLocation === "" ?
                <div className='Filter_location'>
                <div className="Filter_location_button"><a href='/0settings' style={{ width: '100%', height: '100%', display: 'flex', 
                 justifyContent: 'center', alignItems: 'center' }}><span style={{color: '#fff', fontSize: '13px', fontWeight: '700'}}>Select</span></a></div>
                </div>
                :
                <div className='Filter_location'>
                  <button onClick={SetLocation} className={ToggleLocation ? "active-Filter_location_button": "Filter_location_button"}>
                    
                    {ToggleLocation ?
                    <></>
                    :
                    <>select</>
                    }
                  </button>
                  </div>
                }

              </div>
            </div>
          </div>
  <div className='Search_result_right_box'>
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
<div className='Searching-product_box_main'>
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

export default KitchenAppliancesPage