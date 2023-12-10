import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import { Empty } from 'antd';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import '../../00Components/pages.css'
import SearchBar from '../../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../../00Components/Cards/ProductCart/ProductCart'

function PopularWatches(props) {

    const [UserData, setUserData] = useState([])
    const [PoliceWatches, setPoliceWatches] = useState([])
    const [CasioWatches, setCasioWatches] = useState([])
    const [SteveMaddenWatches, setSteveMaddenWatches] = useState([])
    const [NixonWatches, setNixonWatches] = useState([])
    const [DieselWatches, setDieselWatches] = useState([])
    const [GuessWatches, setGuessWatches] = useState([])
    const [FerroWatches, setFerroWatches] = useState([])
    const [EmporiorArmaniWatches, setEmporiorArmaniWatches] = useState([])
    const [ArmaniExchangeWatches, setArmaniExchangeWatches] = useState([])
    const [TimberlandWatches, setTimberlandWatches] = useState([])
    const [MichaelKhorsWatches, setMichaelKhorsWatches] = useState([])
    const [SuperdryWatches, setSuperdryWatches] = useState([])
    const [PumaWatches, setPumaWatches] = useState([])
    const [FabianiWatches, setFabianiWatches] = useState([])

    const [SelectTabs, setSelectTabs] = useState(1)
    const [Products, setProducts] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)
    const [IsLoading, setIsLoading] = useState(true)
  
    const SetLocation = () => setToggleLocation(!ToggleLocation)
  
    const ToggleSelectTabs = (index) => {
      setSelectTabs(index);
    }  

    useEffect(() => {
  
        setTimeout(() => {
          setIsLoading(false)
        }, 1000);
      })
  
      const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          slidesToSlide: 3,
          partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5,
          slidesToSlide: 3,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 3,
          slidesToSlide: 3,
          partialVisibilityGutter: 20
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 2,
          slidesToSlide: 1,
          partialVisibilityGutter: 10
        }
      };
    
      useEffect(() => {
        const variable = {
          brand: "Police Watch"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
        setPoliceWatches(response.data.products)
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

      const GetCasio = () => {
        const variable = {
            brand: "Casio Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setCasioWatches(response.data.products)
        } else {
        }
        })
    }

    const GetSteveMadden = () => {
        const variable = {
            brand: "Steve Madden Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setSteveMaddenWatches(response.data.products)
        } else {
        }
        })
    }

    const GetNixon = () => {
        const variable = {
            brand: "Nixon Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setNixonWatches(response.data.products)
        } else {
        }
        })
    }

    const GetDiesel = () => {
        const variable = {
            brand: "Diesel Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setDieselWatches(response.data.products)
        } else {
        }
        })
    }

    const GetGuess = () => {
        const variable = {
            brand: "Guess Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setGuessWatches(response.data.products)
        } else {
        }
        })
    }

    const GetFerro = () => {
        const variable = {
            brand: "Ferro Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setFerroWatches(response.data.products)
        } else {
        }
        })
    }

    const GetEmporiorArmani = () => {
        const variable = {
            brand: "Emporior Armani Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setEmporiorArmaniWatches(response.data.products)
        } else {
        }
        })
    }

    const GetArmaniExchange = () => {
        const variable = {
            brand: "Armani Exchange Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setArmaniExchangeWatches(response.data.products)
        } else {
        }
        })
    }

    const GetTimberland = () => {
        const variable = {
            brand: "Timberland Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setTimberlandWatches(response.data.products)
        } else {
        }
        })
    }

    const GetMichaelKhors = () => {
        const variable = {
            brand: "Michael Khors Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setMichaelKhorsWatches(response.data.products)
        } else {
        }
        })
    }

    const GetSuperdry = () => {
        const variable = {
            brand: "Superdry Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setSuperdryWatches(response.data.products)
        } else {
        }
        })
    }

    const GetPuma = () => {
        const variable = {
            brand: "Puma Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setPumaWatches(response.data.products)
        } else {
        }
        })
    }

    const GetFabiani = () => {
        const variable = {
            brand: "Fabiani Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setFabianiWatches(response.data.products)
        } else {
        }
        })
    }


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

          const PoliceWatchesPage = PoliceWatches.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
              )
            })
    
            const PoliceWatchesPageLocation = PoliceWatches.map((product, index) => {
              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
              }
              })


              const CasioWatchesPage = CasioWatches.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                  )
                })
        
                const CasioWatchesPageLocation = CasioWatches.map((product, index) => {
                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
              
                    )
                  }
                  })


                  const SteveMaddenWatchesPage = SteveMaddenWatches.map((product, index) => {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                      )
                    })
            
                    const SteveMaddenWatchesPageLocation = SteveMaddenWatches.map((product, index) => {
                      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                  
                        )
                      }
                      })


                      const NixonWatchesPage = NixonWatches.map((product, index) => {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                          )
                        })
                
                        const NixonWatchesPageLocation = NixonWatches.map((product, index) => {
                          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                      
                            )
                          }
                          })


                          const DieselWatchesPage = DieselWatches.map((product, index) => {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                              )
                            })
                    
                            const DieselWatchesPageLocation = DieselWatches.map((product, index) => {
                              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                          
                                )
                              }
                              })


                              const GuessWatchesPage = GuessWatches.map((product, index) => {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                                  )
                                })
                        
                                const GuessWatchesPageLocation = GuessWatches.map((product, index) => {
                                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                              
                                    )
                                  }
                                  })


                                  const FerroWatchesPage = FerroWatches.map((product, index) => {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                                      )
                                    })
                            
                                    const FerroWatchesPageLocation = FerroWatches.map((product, index) => {
                                      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                  
                                        )
                                      }
                                      })


                                      const EmporiorArmaniWatchesPage = EmporiorArmaniWatches.map((product, index) => {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                          )
                                        })
                                
                                        const EmporiorArmaniWatchesPageLocation = EmporiorArmaniWatches.map((product, index) => {
                                          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                            )
                                          }
                                          })


                                          const ArmaniExchangeWatchesPage = ArmaniExchangeWatches.map((product, index) => {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
                                              )
                                            })
                                    
                                            const ArmaniExchangeWatchesPageLocation = ArmaniExchangeWatches.map((product, index) => {
                                              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                          
                                                )
                                              }
                                              })


                                              const TimberlandWatchesPage = TimberlandWatches.map((product, index) => {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                  )
                                                })
                                        
                                                const TimberlandWatchesPageLocation = TimberlandWatches.map((product, index) => {
                                                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                              
                                                    )
                                                  }
                                                  })


                                                  const MichaelKhorsWatchesPage = MichaelKhorsWatches.map((product, index) => {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                      )
                                                    })
                                            
                                                    const MichaelKhorsWatchesPageLocation = MichaelKhorsWatches.map((product, index) => {
                                                      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
                                                  
                                                        )
                                                      }
                                                      })


                                                          const PumaWatchesPage = PumaWatches.map((product, index) => {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />
                                                              )
                                                            })
                                                    
                                                            const PumaWatchesPageLocation = PumaWatches.map((product, index) => {
                                                              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                          
                                                                )
                                                              }
                                                              })


                                                              const FabianiWatchesPage = FabianiWatches.map((product, index) => {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                                  )
                                                                })
                                                        
                                                                const FabianiWatchesPageLocation = FabianiWatches.map((product, index) => {
                                                                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                    )
                                                                  }
                                                                  })


                                                                  const SuperdryWatchesPage = SuperdryWatches.map((product, index) => {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                                      )
                                                                    })
                                                            
                                                                    const SuperdryWatchesPageLocation = SuperdryWatches.map((product, index) => {
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
    <SearchBar showResults={clickSearch} refreshFunction={updateSearchTerms} />
    {SearchTerms === "" ?
  <div className='Visited_container-wrapper'>
  <div className='Visited_page-banner'>
    <div className='Back_to_main_box'>
      <a href='/watches'>
      <div className='Back_to_main_content_box'>
        <span>Watches</span>
      </div>
      </a>
      
    </div>
    <div className='Category_selectTabs_box_back_to_main'>
    <div>
      <span className='Category_selectTabs_span'>Popular Watches</span>
    </div>

    <div className='Select_tabs_slider_longer'>
    <Carousel className='Carosal_style_images' 
    responsive={responsive}
    partialVisible={true}
    swipeable={true}
    draggable={true}
    minimumTouchDrag={50}
    deviceType={props.deviceType}
    >

  <div className={SelectTabs ===1 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(1)}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/61Mm2rrwjEL._AC_UY1000_.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Police</span>
  </div>
    
   </div>

   <div className={SelectTabs ===2 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(2); GetCasio()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/51YF7uhhwTL._AC_UY1000_.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Casio</span>
  </div>
   </div>

   <div className={SelectTabs ===4 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(4); GetNixon()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/91mhdjSePYL._AC_UY1000_.jpg"
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Nixon</span>
  </div>
   </div>

   <div className={SelectTabs ===3 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(3); GetSteveMadden()}}
  ><div>
    <img 
    src='https://i.pinimg.com/1200x/1d/53/2a/1d532aebb85126d464e67af2a8402180.jpg'
    // src='https://www.swisswatchexpo.com/images/custom-catalog-content/header/tag-heuer.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Steve Madden</span>
  </div>
    
   </div>

   <div className={SelectTabs ===5 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(5); GetDiesel()}}
  ><div>
    <img 
    src='https://images-na.ssl-images-amazon.com/images/I/51mNklc86PL.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Diesel</span>
  </div>
   </div>

   <div className={SelectTabs ===7 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(7); GetFerro()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/61m59hG9MIL._AC_UY1000_.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Ferro</span>
  </div>
   </div>

   <div className={SelectTabs ===6 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(6); GetGuess()}}
  ><div>
    <img 
    src='https://pbs.twimg.com/media/F6eNpKAWYAAR3De?format=jpg&name=4096x4096'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Guess</span>
  </div>
   </div>

   <div className={SelectTabs ===8 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(8); GetEmporiorArmani()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/81ZFpqDYIoL._AC_UY1000_.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Emporior Armani</span>
  </div>
   </div>

   <div className={SelectTabs ===9 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(9); GetArmaniExchange()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/81ZAodzxfsL._AC_UY1000_.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Armani Exchange</span>
  </div>
   </div>

   <div className={SelectTabs ===10 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(10); GetTimberland()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/81lMHfLmFZL._AC_UY1000_.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Timberland</span>
  </div>
   </div>

   <div className={SelectTabs ===12 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(12); GetPuma()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/81Jye4lkUJL._AC_UY1000_.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Puma</span>
  </div>
   </div>

   <div className={SelectTabs ===11 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(11); GetMichaelKhors()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/91j9POmdxCL._AC_UY1000_.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Michael Khors</span>
  </div>
   </div>


   {/* <div className={SelectTabs ===13 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(13); GetFabiani()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/51apVw+FxLL._AC_UY780_.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Fabiani</span>
  </div>
   </div> */}

   <div className={SelectTabs ===14 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(14); GetSuperdry()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/71uiLbE+q-L._AC_UY1000_.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>SuperDry</span>
  </div>
   </div>



</Carousel>

    </div>


    </div>
  </div>

  <div className='My_location_items_only'>
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


<div className='ListedItems_container'>

{/* All Watches */}
{PoliceWatches && PoliceWatches.length === undefined ?
  <></>
  :
  PoliceWatches && PoliceWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false ?
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
<div className={SelectTabs === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PoliceWatchesPage}
</div>
}

{CasioWatches && CasioWatches.length === undefined ?
  <></>
  :
  CasioWatches && CasioWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false ?
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
<div className={SelectTabs === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {CasioWatchesPage}
</div>
}

{SteveMaddenWatches && SteveMaddenWatches.length === undefined ?
  <></>
  :
  SteveMaddenWatches && SteveMaddenWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === false ?
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
<div className={SelectTabs === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {SteveMaddenWatchesPage}
</div>
}

{NixonWatches && NixonWatches.length === undefined ?
  <></>
  :
  NixonWatches && NixonWatches.length === 0 ?
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
    {NixonWatchesPage}
</div>
}

{DieselWatches && DieselWatches.length === undefined ?
  <></>
  :
  DieselWatches && DieselWatches.length === 0 ?
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
    {DieselWatchesPage}
</div>
}

{GuessWatches && GuessWatches.length === undefined ?
  <></>
  :
  GuessWatches && GuessWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === false ?
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
<div className={SelectTabs === 6 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {GuessWatchesPage}
</div>
}

{FerroWatches && FerroWatches.length === undefined ?
  <></>
  :
  FerroWatches && FerroWatches.length === 0 ?
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
    {FerroWatchesPage}
</div>
}

{EmporiorArmaniWatches && EmporiorArmaniWatches.length === undefined ?
  <></>
  :
  EmporiorArmaniWatches && EmporiorArmaniWatches.length === 0 ?
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
    {EmporiorArmaniWatchesPage}
</div>
}

{ArmaniExchangeWatches && ArmaniExchangeWatches.length === undefined ?
  <></>
  :
  ArmaniExchangeWatches && ArmaniExchangeWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 9 && ToggleLocation === false ?
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
<div className={SelectTabs === 9 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ArmaniExchangeWatchesPage}
</div>
}

{TimberlandWatches && TimberlandWatches.length === undefined ?
  <></>
  :
  TimberlandWatches && TimberlandWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 10 && ToggleLocation === false ?
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
<div className={SelectTabs === 10 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {TimberlandWatchesPage}
</div>
}

{MichaelKhorsWatches && MichaelKhorsWatches.length === undefined ?
  <></>
  :
  MichaelKhorsWatches && MichaelKhorsWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 11 && ToggleLocation === false ?
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
<div className={SelectTabs === 11 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MichaelKhorsWatchesPage}
</div>
}

{PumaWatches && PumaWatches.length === undefined ?
  <></>
  :
  PumaWatches && PumaWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 12 && ToggleLocation === false ?
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
<div className={SelectTabs === 12 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PumaWatchesPage}
</div>
}

{FabianiWatches && FabianiWatches.length === undefined ?
  <></>
  :
  FabianiWatches && FabianiWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 13 && ToggleLocation === false ?
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
<div className={SelectTabs === 13 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FabianiWatchesPage}
</div>
}

{SuperdryWatches && SuperdryWatches.length === undefined ?
  <></>
  :
  SuperdryWatches && SuperdryWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 14 && ToggleLocation === false ?
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
<div className={SelectTabs === 14 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {SuperdryWatchesPage}
</div>
}



{/* Location */}
{PoliceWatches && PoliceWatches.length === undefined ?
  <></>
  :
  PoliceWatches && PoliceWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true ?
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
<div className={SelectTabs === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PoliceWatchesPageLocation}
</div>
}

{CasioWatches && CasioWatches.length === undefined ?
  <></>
  :
  CasioWatches && CasioWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true ?
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
<div className={SelectTabs === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {CasioWatchesPageLocation}
</div>
}

{SteveMaddenWatches && SteveMaddenWatches.length === undefined ?
  <></>
  :
  SteveMaddenWatches && SteveMaddenWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === true ?
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
<div className={SelectTabs === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {SteveMaddenWatchesPageLocation}
</div>
}

{NixonWatches && NixonWatches.length === undefined ?
  <></>
  :
  NixonWatches && NixonWatches.length === 0 ?
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
    {NixonWatchesPageLocation}
</div>
}

{DieselWatches && DieselWatches.length === undefined ?
  <></>
  :
  DieselWatches && DieselWatches.length === 0 ?
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
    {DieselWatchesPageLocation}
</div>
}

{GuessWatches && GuessWatches.length === undefined ?
  <></>
  :
  GuessWatches && GuessWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === true ?
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
<div className={SelectTabs === 6 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {GuessWatchesPageLocation}
</div>
}

{FerroWatches && FerroWatches.length === undefined ?
  <></>
  :
  FerroWatches && FerroWatches.length === 0 ?
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
    {FerroWatchesPageLocation}
</div>
}

{EmporiorArmaniWatches && EmporiorArmaniWatches.length === undefined ?
  <></>
  :
  EmporiorArmaniWatches && EmporiorArmaniWatches.length === 0 ?
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
    {EmporiorArmaniWatchesPageLocation}
</div>
}

{ArmaniExchangeWatches && ArmaniExchangeWatches.length === undefined ?
  <></>
  :
  ArmaniExchangeWatches && ArmaniExchangeWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 9 && ToggleLocation === true ?
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
<div className={SelectTabs === 9 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ArmaniExchangeWatchesPageLocation}
</div>
}

{TimberlandWatches && TimberlandWatches.length === undefined ?
  <></>
  :
  TimberlandWatches && TimberlandWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 10 && ToggleLocation === true ?
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
<div className={SelectTabs === 10 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {TimberlandWatchesPageLocation}
</div>
}

{MichaelKhorsWatches && MichaelKhorsWatches.length === undefined ?
  <></>
  :
  MichaelKhorsWatches && MichaelKhorsWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 11 && ToggleLocation === true ?
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
<div className={SelectTabs === 11 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MichaelKhorsWatchesPageLocation}
</div>
}

{PumaWatches && PumaWatches.length === undefined ?
  <></>
  :
  PumaWatches && PumaWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 12 && ToggleLocation === true ?
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
<div className={SelectTabs === 12 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PumaWatchesPageLocation}
</div>
}

{FabianiWatches && FabianiWatches.length === undefined ?
  <></>
  :
  FabianiWatches && FabianiWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 13 && ToggleLocation === true ?
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
<div className={SelectTabs === 13 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FabianiWatchesPageLocation}
</div>
}

{SuperdryWatches && SuperdryWatches.length === undefined ?
  <></>
  :
  SuperdryWatches && SuperdryWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 14 && ToggleLocation === true ?
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
<div className={SelectTabs === 14 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {SuperdryWatchesPageLocation}
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

export default PopularWatches