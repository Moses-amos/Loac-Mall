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

function WatchesPage(props) {

    const [UserData, setUserData] = useState([])
    const [FourHundredFiftyUp, setFourHundredFiftyUp] = useState([])
    const [NineHundredUp, setNineHundredUp] = useState([])
    const [ThousandFiveHundred, setThousandFiveHundred] = useState([])
    const [ThreeThousandTwoHundred, setThreeThousandTwoHundred] = useState([])

    const [CheapWatchesDigital, setCheapWatchesDigital] = useState([])
    const [HundredFiftyUpDigital, setHundredFiftyUpDigital] = useState([])
    const [FourHundredUpDigital, setFourHundredUpDigital] = useState([])
    const [ThousandUpDigital, setThousandUpDigital] = useState([])

    const [toggleWatchType, settoggleWatchType] = useState(1)
    const [toggleModelOption, settoggleModelOption] = useState(1)
    const [SelectTabs, setSelectTabs] = useState(1)
    const [Products, setProducts] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)
    const [IsLoading, setIsLoading] = useState(true)
  
    const SetLocation = () => setToggleLocation(!ToggleLocation)
  
    const ToggleSelectTabs = (index) => {
      setSelectTabs(index);
    }  
  
    const ModelOptionCategory = (index) => {
      settoggleModelOption(index);
      }

      const WatchTypeCategory = (index) => {
        settoggleWatchType(index);
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
        priceRange: "N$ 450 +"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
      setFourHundredFiftyUp(response.data.products)
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

  
    const GetNineHundredUp = () => {
      const variable = {
          priceRange: "N$ 900 +"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
        setNineHundredUp(response.data.products)
      } else {
      }
      })
  }

  const GetThousandFiveHundred = () => {
    const variable = {
        priceRange: "N$ 1500 +"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
        setThousandFiveHundred(response.data.products)
    } else {
    }
    })
}

const GetThreeThousandTwoHundred = () => {
    const variable = {
        priceRange: "N$ 3200 +"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
        setThreeThousandTwoHundred(response.data.products)
    } else {
    }
    })
}


const GetCheapWatchesDigital = () => {
  const variable = {
      priceRange: "Digital"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setCheapWatchesDigital(response.data.products)
  } else {
  }
  })
}


const GetHundredFiftyUpDigital = () => {
  const variable = {
      priceRange: "N$ 150 +"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setHundredFiftyUpDigital(response.data.products)
  } else {
  }
  })
}

const GetFourHundredUpDigital = () => {
  const variable = {
      priceRange: "N$ 400 +"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setFourHundredUpDigital(response.data.products)
  } else {
  }
  })
}

const GetThousandUpDigital = () => {
  const variable = {
      priceRange: "N$ 1000 +"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setThousandUpDigital(response.data.products)
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

          const FourHundredFiftyUpPage = FourHundredFiftyUp.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
              )
            })
    
            const FourHundredFiftyUpPageLocation = FourHundredFiftyUp.map((product, index) => {
              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
              }
              })


          const NineHundredUpPage = NineHundredUp.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
              )
            })
    
            const NineHundredUpPageLocation = NineHundredUp.map((product, index) => {
              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
              }
              })


              const ThousandFiveHundredPage = ThousandFiveHundred.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                  )
                })
        
                const ThousandFiveHundredPageLocation = ThousandFiveHundred.map((product, index) => {
                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
              
                    )
                  }
                  })


                  const ThreeThousandTwoHundredPage = ThreeThousandTwoHundred.map((product, index) => {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                      )
                    })
            
                    const ThreeThousandTwoHundredPageLocation = ThreeThousandTwoHundred.map((product, index) => {
                      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                  
                        )
                      }
                      })
                      
                      
                          const FourHundredFiftyUpWomenPage = FourHundredFiftyUp.map((product, index) => {
                            if (product.genderCategory === "Women") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                          
                            )
                            }
                            
                            })
                          
                            const FourHundredFiftyUpWomenPageLocation = FourHundredFiftyUp.map((product, index) => {
                              if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                          
                              )
                              }
                              })
                      
                      
                              const NineHundredUpWomenPage = NineHundredUp.map((product, index) => {
                                if (product.genderCategory === "Women") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                              
                                )
                                }
                                
                                })
                              
                                const NineHundredUpWomenPageLocation = NineHundredUp.map((product, index) => {
                                  if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                   && product.Gobabis === true))) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                              
                                  )
                                  }
                                  })
                      
                      
                                  const ThousandFiveHundredWomenPage = ThousandFiveHundred.map((product, index) => {
                                    if (product.genderCategory === "Women") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                                  
                                    )
                                    }
                                    
                                    })
                                  
                                    const ThousandFiveHundredWomenPageLocation = ThousandFiveHundred.map((product, index) => {
                                      if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                                  
                                      )
                                      }
                                      })
                      
                      
                                      const ThreeThousandTwoHundredWomenPage = ThreeThousandTwoHundred.map((product, index) => {
                                        if (product.genderCategory === "Women") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                        )
                                        }
                                        
                                        })
                                      
                                        const ThreeThousandTwoHundredWomenPageLocation = ThreeThousandTwoHundred.map((product, index) => {
                                          if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                          )
                                          }
                                          })


                                                                                                  const CheapWatchesDigitalPage = CheapWatchesDigital.map((product, index) => {
                                                                                                    return (
                                                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                                                                      )
                                                                                                    })
                                                                                            
                                                                                                    const CheapWatchesDigitalPageLocation = CheapWatchesDigital.map((product, index) => {
                                                                                                      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                                                                                        return (
                                                                                                          <ProductCart key={index} UserData={UserData} product={product} />
                                                                                                  
                                                                                                        )
                                                                                                      }
                                                                                                      })

                                                                                                      const HundredFiftyUpDigitalPage = HundredFiftyUpDigital.map((product, index) => {
                                                                                                        return (
                                                                                                          <ProductCart key={index} UserData={UserData} product={product} />
                                                                                                          )
                                                                                                        })
                                                                                                
                                                                                                        const HundredFiftyUpDigitalPageLocation = HundredFiftyUpDigital.map((product, index) => {
                                                                                                          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                                                                                            return (
                                                                                                              <ProductCart key={index} UserData={UserData} product={product} />
                                                                                                      
                                                                                                            )
                                                                                                          }
                                                                                                          })

                                                                                                          const FourHundredUpDigitalPage = FourHundredUpDigital.map((product, index) => {
                                                                                                            return (
                                                                                                              <ProductCart key={index} UserData={UserData} product={product} />
                                                                                                              )
                                                                                                            })
                                                                                                    
                                                                                                            const FourHundredUpDigitalPageLocation = FourHundredUpDigital.map((product, index) => {
                                                                                                              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                                                                                                return (
                                                                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                                                                          
                                                                                                                )
                                                                                                              }
                                                                                                              })

                                                                                                              const ThousandUpDigitalPage = ThousandUpDigital.map((product, index) => {
                                                                                                                return (
                                                                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                                                                                  )
                                                                                                                })
                                                                                                        
                                                                                                                const ThousandUpDigitalPageLocation = ThousandUpDigital.map((product, index) => {
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
    <div className='Category_selectTabs_box'>
    <div>
      <span className='Category_selectTabs_span'>Watches</span>
    </div>

    <div className='Select_tabs_slider'>
    <Carousel className='Carosal_style_images' 
    responsive={responsive}
    partialVisible={true}
    swipeable={true}
    draggable={true}
    minimumTouchDrag={50}
    deviceType={props.deviceType}
    >

  <div className={SelectTabs ===1 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(1); ModelOptionCategory(1); WatchTypeCategory(1)}}
  ><div>
    <img 
    src='https://pbs.twimg.com/media/F56Aj2EWIAAuhQs?format=png&name=small'
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Watches</span>
  </div>
    
   </div>

   <div className={SelectTabs ===2 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(2); GetCheapWatchesDigital(); ModelOptionCategory(0); WatchTypeCategory()}}
  ><div>
    <img 
    src='https://d1rkccsb0jf1bk.cloudfront.net/products/100006164/main/a1167-2658-view1-1476100604-408.jpg'
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Digital Watches</span>
  </div>
   </div>

   <div className="Select_image_product"
  >
    <a href='/popular-watches'>
      <div>
    <img 
    src='https://pbs.twimg.com/media/F7XBBdRXoAA-fcj?format=jpg&name=small'
    // src="https://staticimg.titan.co.in/Helios/Catalog/PL15712JSBL03MW_1.jpg"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Popular Watches</span>
  </div>
    </a>
  
   </div>

<div className="Select_image_product"
  >
    <a href='/luxury-watches'>
      <div>
    <img 

    src='https://i.ebayimg.com/images/g/xDgAAOSwrCpiaCIU/s-l1200.jpg'
    // src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLg7D20KjQgifCprSkWO6xaprGk_Ijz8WZuamS8XXbfpplBLYoEFI6C-XttQc9q21C4VY&usqp=CAU'
    // src='https://chronexttime.imgix.net/V/4/V46510/V46510_1_det.png?w=570&ar=1:1&auto=format&fm=png&q=55&usm=50&usmrad=1.5&dpr=1&trim=color&fit=fill&auto=compress&bg=FFFFFF&bg-remove=true'
    // src='https://www.tagheuer.com/on/demandware.static/-/Sites-tagheuer-master/default/dw3dd4cfe1/TAG_Heuer_Formula_1/CAZ101AL.FT8052/CAZ101AL.FT8052_0913.png?impolicy=resize&width=1920'
    // src='https://www.swisswatchexpo.com/images/custom-catalog-content/header/tag-heuer.jpg'
   
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Luxury Watches</span>
  </div>
    </a>
  
   </div>

   <div className="Select_image_product"
  >
    <a href='/smart-watches'>
      <div>
    <img 
    src='https://m.media-amazon.com/images/I/71TIOhVWQ5L.jpg'
    // src='https://m.media-amazon.com/images/I/51XmJudl4xL._AC_UF894,1000_QL80_.jpg'
    // src="https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Smart Watches</span>
  </div>
    </a>
   </div>

   <div className="Select_image_product"
  >
    <a href='/womens-watches'>
      <div>
    <img 
      src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj4ZB_vTTtQ8ZWYoiuuV363Yg06fLaneCLcz8BfWrzNmwpyGYYwkFfMIr9x9wU0eOOs3U&usqp=CAU'
    // src="https://www.krishnawatch.com/cdn/shop/products/DW00100163_66_83348290-4899-43b3-beea-4d76b513e65f.png?v=1668667083"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Women's Watches</span>
  </div>
    </a>
   </div>

   <div className="Select_image_product"
  >
    <a >
      <div>
    <img 
    src="https://www.bennettwinch.com/cdn/shop/products/Bennett_Winch_Watch-Roll_Brown_FrontOpen.jpg?v=1632491197"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Watch Accessories</span>
  </div>
    </a>
  
   </div>

</Carousel>

    </div>

    <div className={SelectTabs ===1 || SelectTabs ===4 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Price Range</span>
    </div>
    </div>
    <div className={SelectTabs ===1 || SelectTabs ===4 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={toggleModelOption ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(1)}} >
            <span>Cheap</span>
          </div>
          <div className={toggleModelOption ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(2); GetNineHundredUp()}} >
            <span>N$ 900 +</span>
          </div>
    <div className={toggleModelOption ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(3); GetThousandFiveHundred()}} >
            <span>N$ 1500 +</span>
          </div>
    <div className={toggleModelOption ===4 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(4); GetThreeThousandTwoHundred()}} >
            <span>N$ 3200 +</span>
          </div>
          
          {/* <div className={toggleModelOption ===5 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {PriceRangeCategory(5); GetFourThousandUp()}} >
          <span>N$ 6000 +</span>
          </div> */}
          {/* <div className={togglePriceRange ===6 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {PriceRangeCategory(6); GetSevenThousandUp()}} >
          <span>N$ 7000 +</span>
          </div>
          <div className={togglePriceRange ===7 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {PriceRangeCategory(7); GetElvenThousandUp()}} >
          <span>N$ 11000 +</span>
          </div> */}

    </div>

    <div className={SelectTabs ===2 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Price Range</span>
    </div>
    </div>
    <div className={SelectTabs ===2 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={toggleModelOption ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(0)}} >
            <span>Cheap</span>
          </div>
          <div className={toggleModelOption ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(1); GetHundredFiftyUpDigital()}} >
            <span>N$ 150 +</span>
          </div>
    <div className={toggleModelOption ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(2); GetFourHundredUpDigital()}} >
            <span>N$ 400 +</span>
          </div>
    <div className={toggleModelOption ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(3); GetThousandUpDigital()}} >
            <span>N$ 1000 +</span>
          </div>

    </div>


    {/* <div className={SelectTabs ===3 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Brands</span>
    </div>
    </div>
    <div className={SelectTabs ===3 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={toggleModelOption ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(0)}} >
            <span>All</span>
          </div>
          <div className={toggleModelOption ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(1); GetAppleWatches()}} >
            <span>Apple Watches</span>
          </div>
    <div className={toggleModelOption ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(2); GetSamsungWatches()}} >
            <span>Galaxy Watches</span>
          </div>
          <div className={toggleModelOption ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(3); GetHuaweiWatches()}} >
          <span>Huawei Watches</span>
          </div>
          <div className={toggleModelOption ===4 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(4); GetGarminWatches()}} >
            <span>Garmin Watches</span>
          </div>
          <div className={toggleModelOption ===5 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(5); GetFitbitWatches()}} >
          <span>Reflex Active</span>
          </div>
          <div className={toggleModelOption ===6 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(6); GetFitbitWatches()}} >
          <span>Fitbit Trackers</span>
          </div>
          

    </div> */}

    {/* <div className={SelectTabs ===4 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Price Range</span>
    </div>
    </div>
    <div className={SelectTabs ==4 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={toggleModelOption ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(0)}} >
            <span>Cheap</span>
          </div>
          <div className={toggleModelOption ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(1); GetFiveHundredUpGirls()}} >
            <span>N$ 500 +</span>
          </div>
    <div className={toggleModelOption ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(2); GetNineHundredFiftyUpGirls()}} >
            <span>N$ 950 +</span>
          </div>
    <div className={toggleModelOption ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(3); GetThousandSixHundredUpGirls()}} >
            <span>N$ 1600 +</span>
          </div>
          <div className={toggleModelOption ===4 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ModelOptionCategory(4); GetThreeThousandThreeHundredGirls()}} >
          <span>N$ 3300 +</span>
          </div>
          
    </div> */}


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

  <div className={SelectTabs ===1? 'My_location_items_choose_box' : 'Listed_fetched_products-hide'}>
    <div 
    className={toggleWatchType === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {WatchTypeCategory(1)}}>
      <span>All</span>
    </div>
    <div 
    className={toggleWatchType === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {WatchTypeCategory(2)}}>
      <span>Ladies</span>
    </div>
    </div>

    </div>


<div className='ListedItems_container'>

{/* All Watches */}

{FourHundredFiftyUp && FourHundredFiftyUp.length === undefined ?
  <></>
  :
  FourHundredFiftyUp && FourHundredFiftyUp.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleModelOption === 1 ) && toggleWatchType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleModelOption === 1 ) && toggleWatchType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FourHundredFiftyUpPage}
</div>
}

{NineHundredUp && NineHundredUp.length === undefined ?
  <></>
  :
  NineHundredUp && NineHundredUp.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleModelOption === 2 ) && toggleWatchType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleModelOption === 2 ) && toggleWatchType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {NineHundredUpPage}
</div>
}

{ThousandFiveHundred && ThousandFiveHundred.length === undefined ?
  <></>
  :
  ThousandFiveHundred && ThousandFiveHundred.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleModelOption === 3 ) && toggleWatchType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleModelOption === 3 ) && toggleWatchType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ThousandFiveHundredPage}
</div>
}

{ThreeThousandTwoHundred && ThreeThousandTwoHundred.length === undefined ?
  <></>
  :
  ThreeThousandTwoHundred && ThreeThousandTwoHundred.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleModelOption === 4 ) && toggleWatchType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleModelOption === 4 ) && toggleWatchType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ThreeThousandTwoHundredPage}
</div>
}

{/* Location */}

{FourHundredFiftyUp && FourHundredFiftyUp.length === undefined ?
  <></>
  :
  FourHundredFiftyUp && FourHundredFiftyUp.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleModelOption === 1 ) && toggleWatchType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleModelOption === 1 ) && toggleWatchType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FourHundredFiftyUpPageLocation}
</div>
}

{NineHundredUp && NineHundredUp.length === undefined ?
  <></>
  :
  NineHundredUp && NineHundredUp.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleModelOption === 2 ) && toggleWatchType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleModelOption === 2 ) && toggleWatchType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {NineHundredUpPageLocation}
</div>
}

{ThousandFiveHundred && ThousandFiveHundred.length === undefined ?
  <></>
  :
  ThousandFiveHundred && ThousandFiveHundred.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleModelOption === 3 ) && toggleWatchType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleModelOption === 3 ) && toggleWatchType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ThousandFiveHundredPageLocation}
</div>
}

{ThreeThousandTwoHundred && ThreeThousandTwoHundred.length === undefined ?
  <></>
  :
  ThreeThousandTwoHundred && ThreeThousandTwoHundred.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleModelOption === 4 ) && toggleWatchType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleModelOption === 4 ) && toggleWatchType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ThreeThousandTwoHundredPageLocation}
</div>
}

{/* Women Watches */}


{FourHundredFiftyUp && FourHundredFiftyUp.length === undefined ?
  <></>
  :
  FourHundredFiftyUp && FourHundredFiftyUp.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 1 ) && toggleWatchType === 2 && ToggleLocation === false ?
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
<div className={((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 1 ) && toggleWatchType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FourHundredFiftyUpWomenPage}
</div>
}

{NineHundredUp && NineHundredUp.length === undefined ?
  <></>
  :
  NineHundredUp && NineHundredUp.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 2 ) && toggleWatchType === 2 && ToggleLocation === false ?
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
<div className={((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 2 ) && toggleWatchType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {NineHundredUpWomenPage}
</div>
}

{ThousandFiveHundred && ThousandFiveHundred.length === undefined ?
  <></>
  :
  ThousandFiveHundred && ThousandFiveHundred.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 3 ) && toggleWatchType === 2 && ToggleLocation === false ?
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
<div className={((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 3 ) && toggleWatchType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ThousandFiveHundredWomenPage}
</div>
}

{ThreeThousandTwoHundred && ThreeThousandTwoHundred.length === undefined ?
  <></>
  :
  ThreeThousandTwoHundred && ThreeThousandTwoHundred.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 4 ) && toggleWatchType === 2 && ToggleLocation === false ?
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
<div className={((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 4 ) && toggleWatchType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ThreeThousandTwoHundredWomenPage}
</div>
}

{/* Location */}

{FourHundredFiftyUp && FourHundredFiftyUp.length === undefined ?
  <></>
  :
  FourHundredFiftyUp && FourHundredFiftyUp.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 1 ) && toggleWatchType === 2 && ToggleLocation === true ?
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
<div className={((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 1 ) && toggleWatchType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FourHundredFiftyUpWomenPageLocation}
</div>
}

{NineHundredUp && NineHundredUp.length === undefined ?
  <></>
  :
  NineHundredUp && NineHundredUp.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 2 ) && toggleWatchType === 2 && ToggleLocation === true ?
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
<div className={((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 2 ) && toggleWatchType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {NineHundredUpWomenPageLocation}
</div>
}

{ThousandFiveHundred && ThousandFiveHundred.length === undefined ?
  <></>
  :
  ThousandFiveHundred && ThousandFiveHundred.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 3 ) && toggleWatchType === 2 && ToggleLocation === true ?
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
<div className={((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 3 ) && toggleWatchType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ThousandFiveHundredWomenPageLocation}
</div>
}

{ThreeThousandTwoHundred && ThreeThousandTwoHundred.length === undefined ?
  <></>
  :
  ThreeThousandTwoHundred && ThreeThousandTwoHundred.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 4 ) && toggleWatchType === 2 && ToggleLocation === true ?
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
<div className={((SelectTabs ===1 || SelectTabs ===4) && toggleModelOption === 4 ) && toggleWatchType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ThreeThousandTwoHundredWomenPageLocation}
</div>
}



{/* Digital Watches */}
{CheapWatchesDigital && CheapWatchesDigital.length === undefined ?
  <></>
  :
  CheapWatchesDigital && CheapWatchesDigital.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleModelOption === 0 ) && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleModelOption === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {CheapWatchesDigitalPage}
</div>
}

{HundredFiftyUpDigital && HundredFiftyUpDigital.length === undefined ?
  <></>
  :
  HundredFiftyUpDigital && HundredFiftyUpDigital.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleModelOption === 1 ) && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleModelOption === 1 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {HundredFiftyUpDigitalPage}
</div>
}

{FourHundredUpDigital && FourHundredUpDigital.length === undefined ?
  <></>
  :
  FourHundredUpDigital && FourHundredUpDigital.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleModelOption === 2 ) && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleModelOption === 2 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FourHundredUpDigitalPage}
</div>
}

{ThousandUpDigital && ThousandUpDigital.length === undefined ?
  <></>
  :
  ThousandUpDigital && ThousandUpDigital.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleModelOption === 3 ) && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleModelOption === 3 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ThousandUpDigitalPage}
</div>
}


{/* Location */}
{CheapWatchesDigital && CheapWatchesDigital.length === undefined ?
  <></>
  :
  CheapWatchesDigital && CheapWatchesDigital.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleModelOption === 0 ) && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleModelOption === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {CheapWatchesDigitalPageLocation}
</div>
}

{HundredFiftyUpDigital && HundredFiftyUpDigital.length === undefined ?
  <></>
  :
  HundredFiftyUpDigital && HundredFiftyUpDigital.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleModelOption === 1 ) && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleModelOption === 1 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {HundredFiftyUpDigitalPageLocation}
</div>
}

{FourHundredUpDigital && FourHundredUpDigital.length === undefined ?
  <></>
  :
  FourHundredUpDigital && FourHundredUpDigital.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleModelOption === 2 ) && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleModelOption === 2 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FourHundredUpDigitalPageLocation}
</div>
}

{ThousandUpDigital && ThousandUpDigital.length === undefined ?
  <></>
  :
  ThousandUpDigital && ThousandUpDigital.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleModelOption === 3 ) && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleModelOption === 3 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {ThousandUpDigitalPageLocation}
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

export default WatchesPage