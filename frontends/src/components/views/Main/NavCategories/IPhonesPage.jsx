import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import { Empty } from 'antd';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import NoImage from './Images/No_Image.jpg'

import '../00Components/pages.css'
import '../0_Home/homepage.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

function IPhonesPage(props) {

    const [UserData, setUserData] = useState([])
    const [IphonesListed, setIphonesListed] = useState([])
    const [IPhoneFifteens, setIPhoneFifteens] = useState([])
    const [IPhoneFourteens, setIPhoneFourteens] = useState([])
    const [IPhoneThirteens, setIPhoneThirteens] = useState([])
    const [IPhoneTwelves, setIPhoneTwelves] = useState([])
    const [IPhoneElevens, setIPhoneElevens] = useState([])
    const [IPhoneSE, setIPhoneSE] = useState([])
    const [IPhoneXR, setIPhoneXR] = useState([])
    const [IPhoneEight, setIPhoneEight] = useState([])
    const [IPhoneSeven, setIPhoneSeven] = useState([])
    const [IPhoneSix, setIPhoneSix] = useState([])
    const [IPhonesOther, setIPhonesOther] = useState([])

    const [togglePhoneModel, settogglePhoneModel] = useState(0)
    const [toggleStorageSize, settoggleStorageSize] = useState(0)
    const [SelectTabs, setSelectTabs] = useState(1)
    const [Products, setProducts] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)
    const [IsLoading, setIsLoading] = useState(true)
  
    const SetLocation = () => setToggleLocation(!ToggleLocation)
  
    const ToggleSelectTabs = (index) => {
      setSelectTabs(index);
    }  

    const StorageCategory = (index) => {
      settoggleStorageSize(index);
    }

    const PhoneModelCategory = (index) => {
      settogglePhoneModel(index);
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
          product: "iPhone"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
        setIphonesListed(response.data.products)
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


      const GetiPhoneFifteens = () => {
        const variable = {
            seriesName: "iPhone 15"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
          setIPhoneFifteens(response.data.products)
        } else {
        }
        })
    }

      const GetiPhoneFourteens = () => {
        const variable = {
            seriesName: "iPhone 14"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
          setIPhoneFourteens(response.data.products)
        } else {
        }
        })
    }

    const GetiPhoneThirteens = () => {
      const variable = {
          seriesName: "iPhone 13"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
        setIPhoneThirteens(response.data.products)
      } else {
      }
      })
  }

  const GetiPhoneTwelves = () => {
    const variable = {
        seriesName: "iPhone 12"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setIPhoneTwelves(response.data.products)
    } else {
    }
    })
}

const GetiPhoneEleven = () => {
  const variable = {
      seriesName: "iPhone 11"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setIPhoneElevens(response.data.products)
  } else {
  }
  })
}

const GetiPhoneSE = () => {
  const variable = {
      seriesName: "iPhone SE"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setIPhoneSE(response.data.products)
  } else {
  }
  })
}

const GetiPhoneXR = () => {
  const variable = {
      seriesName: "iPhone XR"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setIPhoneXR(response.data.products)
  } else {
  }
  })
}

const GetiPhoneEight = () => {
  const variable = {
      seriesName: "iPhone 8"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setIPhoneEight(response.data.products)
  } else {
  }
  })
}

const GetiPhoneSeven = () => {
  const variable = {
      seriesName: "iPhone 7"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setIPhoneSeven(response.data.products)
  } else {
  }
  })
}

const GetiPhoneSix = () => {
  const variable = {
      seriesName: "iPhone 6"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setIPhoneSix(response.data.products)
  } else {
  }
  })
}

const GetOtheriPhones = () => {
  const variable = {
      seriesName: "iPhone Other"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setIPhonesOther(response.data.products)
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



          const AllIphonesPage = IphonesListed.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
              )
            })

              const AllIphonesSixtyGigPage = IphonesListed.map((product, index) => {
                if (product.storageCapacity === "64 GB") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })

                const AllIphonesHundredTwentyGigPage = IphonesListed.map((product, index) => {
                  if (product.storageCapacity === "128 GB") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
    
                  )
                  }
                  
                  })

                  const AllIphonesTwoHundredFiftyGigPage = IphonesListed.map((product, index) => {
                    if (product.storageCapacity === "256 GB") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
      
                    )
                    }
                    
                    })

                    const AllIphonesFiveHundredGigPage = IphonesListed.map((product, index) => {
                      if (product.storageCapacity === "512 GB") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
        
                      )
                      }
                      
                      })

    
            const AllIphonesPageLocation = IphonesListed.map((product, index) => {
              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
              }
              })

              const AllIphonesSixtyGigPageLocation = IphonesListed.map((product, index) => {
                if (product.storageCapacity === "64 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })

                const AllIphonesHundredTwentyGigPageLocation = IphonesListed.map((product, index) => {
                  if (product.storageCapacity === "128 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
    
                  )
                  }
                  
                  })

                const AllIphonesTwoHundredFiftyGigPageLocation = IphonesListed.map((product, index) => {
                  if (product.storageCapacity === "256 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
    
                  )
                  }
                  
                  })

                  const AllIphonesFiveHundredGigPageLocation = IphonesListed.map((product, index) => {
                    if (product.storageCapacity === "512 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
      
                    )
                    }
                    
                    })


                    const IPhoneFifteensHundredTwentyGigPage = IPhoneFifteens.map((product, index) => {
                      if (product.modelName === "iPhone 15" && product.storageCapacity === "128 GB") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                    
                      )
                      }
                      
                      })
                    
                      const IPhoneFifteensHundredTwentyGigPlusPage = IPhoneFifteens.map((product, index) => {
                        if (product.modelName === "iPhone 15 Plus" && product.storageCapacity === "128 GB") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                    
                        )
                        }
                        
                        })
                    
                        const IPhoneFifteensHundredTwentyGigProPage = IPhoneFifteens.map((product, index) => {
                          if (product.modelName === "iPhone 15 Pro" && product.storageCapacity === "128 GB") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                    
                          )
                          }
                          
                          })
                    
                          const IPhoneFifteensHundredTwentyGigProMaxPage = IPhoneFifteens.map((product, index) => {
                            if (product.modelName === "iPhone 15 Pro Max" && product.storageCapacity === "128 GB") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                    
                            )
                            }
                            
                            })
                    
                    
                      const IPhoneFifteensHundredTwentyGigPageLocation = IPhoneFifteens.map((product, index) => {
                        if ((product.modelName === "iPhone 15" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                    
                        )
                        }
                        
                        })
                    
                        const IPhoneFifteensHundredTwentyGigPlusPageLocation = IPhoneFifteens.map((product, index) => {
                          if ((product.modelName === "iPhone 15 Plus" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                      
                          )
                          }
                          
                          })
                    
                          const IPhoneFifteensHundredTwentyGigProPageLocation = IPhoneFifteens.map((product, index) => {
                            if ((product.modelName === "iPhone 15 Pro" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                        
                            )
                            }
                            
                            })
                    
                            const IPhoneFifteensHundredTwentyGigProMaxPageLocation = IPhoneFifteens.map((product, index) => {
                              if ((product.modelName === "iPhone 15 Pro Max" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                          
                              )
                              }
                              
                              })
                    

                    const IPhoneFifteensTwoHundredFiftyGigPage = IPhoneFifteens.map((product, index) => {
                      if (product.modelName === "iPhone 15" && product.storageCapacity === "256 GB") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
              
                      )
                      }
                      
                      })
      
                      const IPhoneFifteensTwoHundredFiftyGigPlusPage = IPhoneFifteens.map((product, index) => {
                        if (product.modelName === "iPhone 15 Plus" && product.storageCapacity === "256 GB") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                
                        )
                        }
                        
                        })
      
                        const IPhoneFifteensTwoHundredFiftyGigProPage = IPhoneFifteens.map((product, index) => {
                          if (product.modelName === "iPhone 15 Pro" && product.storageCapacity === "256 GB") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                  
                          )
                          }
                          
                          })
      
                          const IPhoneFifteensTwoHundredFiftyGigProMaxPage = IPhoneFifteens.map((product, index) => {
                            if (product.modelName === "iPhone 15 Pro Max" && product.storageCapacity === "256 GB") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                    
                            )
                            }
                            
                            })


                    const IPhoneFifteensTwoHundredFiftyGigPageLocation = IPhoneFifteens.map((product, index) => {
                      if ((product.modelName === "iPhone 15" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                  
                      )
                      }
                      
                      })
    
                      const IPhoneFifteensTwoHundredFiftyGigPlusPageLocation = IPhoneFifteens.map((product, index) => {
                        if ((product.modelName === "iPhone 15 Plus" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                    
                        )
                        }
                        
                        })
    
                        const IPhoneFifteensTwoHundredFiftyGigProPageLocation = IPhoneFifteens.map((product, index) => {
                          if ((product.modelName === "iPhone 15 Pro" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                      
                          )
                          }
                          
                          })
    
                          const IPhoneFifteensTwoHundredFiftyGigProMaxPageLocation = IPhoneFifteens.map((product, index) => {
                            if ((product.modelName === "iPhone 15 Pro Max" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                        
                            )
                            }
                            
                            })


                            const IPhoneFifteensFiveHundredGigPage = IPhoneFifteens.map((product, index) => {
                              if (product.modelName === "iPhone 15" && product.storageCapacity === "512 GB") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                      
                              )
                              }
                              
                              })
              
                              const IPhoneFifteensFiveHundredGigPlusPage = IPhoneFifteens.map((product, index) => {
                                if (product.modelName === "iPhone 15 Plus" && product.storageCapacity === "512 GB") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                        
                                )
                                }
                                
                                })
              
                                const IPhoneFifteensFiveHundredGigProPage = IPhoneFifteens.map((product, index) => {
                                  if (product.modelName === "iPhone 15 Pro" && product.storageCapacity === "512 GB") {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                          
                                  )
                                  }
                                  
                                  })
              
                                  const IPhoneFifteensFiveHundredGigProMaxPage = IPhoneFifteens.map((product, index) => {
                                    if (product.modelName === "iPhone 15 Pro Max" && product.storageCapacity === "512 GB") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                            
                                    )
                                    }
                                    
                                    })


                                    const IPhoneFifteensFiveHundredGigPageLocation = IPhoneFifteens.map((product, index) => {
                                      if ((product.modelName === "iPhone 15" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                                  
                                      )
                                      }
                                      
                                      })
                    
                                      const IPhoneFifteensFiveHundredGigPlusPageLocation = IPhoneFifteens.map((product, index) => {
                                        if ((product.modelName === "iPhone 15 Plus" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                         && product.Gobabis === true))) {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                    
                                        )
                                        }
                                        
                                        })
                    
                                        const IPhoneFifteensFiveHundredGigProPageLocation = IPhoneFifteens.map((product, index) => {
                                          if ((product.modelName === "iPhone 15 Pro" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                          )
                                          }
                                          
                                          })
                    
                                          const IPhoneFifteensFiveHundredGigProMaxPageLocation = IPhoneFifteens.map((product, index) => {
                                            if ((product.modelName === "iPhone 15 Pro Max" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                             && product.Gobabis === true))) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
                                        
                                            )
                                            }
                                            
                                            })


                                            const IPhoneFifteensTerabyteGigProPage = IPhoneFifteens.map((product, index) => {
                                              if (product.modelName === "iPhone 15 Pro" && product.storageCapacity === "1 TB") {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />
                                              )
                                              }
                                              })
                      
                                              const IPhoneFifteensTerabyteGigProMaxPage = IPhoneFifteens.map((product, index) => {
                                                if (product.modelName === "iPhone 15 Pro Max" && product.storageCapacity === "1 TB") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                )
                                                }
                                                })

                                                const IPhoneFifteensTerabyteGigProPageLocation = IPhoneFifteens.map((product, index) => {
                                                  if ((product.modelName === "iPhone 15 Pro" && product.storageCapacity === "1 TB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                   && product.Gobabis === true))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                              
                                                  )
                                                  }
                                                  
                                                  })
                        
                                                  const IPhoneFifteensTerabyteGigProMaxPageLocation = IPhoneFifteens.map((product, index) => {
                                                    if ((product.modelName === "iPhone 15 Pro Max" && product.storageCapacity === "1 TB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                     && product.Gobabis === true))) {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                
                                                    )
                                                    }
                                                    
                                                    })



              const IPhoneFourteensHundredTwentyGigPage = IPhoneFourteens.map((product, index) => {
                if (product.modelName === "iPhone 14" && product.storageCapacity === "128 GB") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
        
                )
                }
                
                })

                const IPhoneFourteensHundredTwentyGigPlusPage = IPhoneFourteens.map((product, index) => {
                  if (product.modelName === "iPhone 14 Plus" && product.storageCapacity === "128 GB") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
          
                  )
                  }
                  
                  })

                  const IPhoneFourteensHundredTwentyGigProPage = IPhoneFourteens.map((product, index) => {
                    if (product.modelName === "iPhone 14 Pro" && product.storageCapacity === "128 GB") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
            
                    )
                    }
                    
                    })

                    const IPhoneFourteensHundredTwentyGigProMaxPage = IPhoneFourteens.map((product, index) => {
                      if (product.modelName === "iPhone 14 Pro Max" && product.storageCapacity === "128 GB") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
              
                      )
                      }
                      
                      })

      
                const IPhoneFourteensHundredTwentyGigPageLocation = IPhoneFourteens.map((product, index) => {
                  if ((product.modelName === "iPhone 14" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
              
                  )
                  }
                  
                  })

                  const IPhoneFourteensHundredTwentyGigPlusPageLocation = IPhoneFourteens.map((product, index) => {
                    if ((product.modelName === "iPhone 14 Plus" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                
                    )
                    }
                    
                    })

                    const IPhoneFourteensHundredTwentyGigProPageLocation = IPhoneFourteens.map((product, index) => {
                      if ((product.modelName === "iPhone 14 Pro" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                  
                      )
                      }
                      
                      })

                      const IPhoneFourteensHundredTwentyGigProMaxPageLocation = IPhoneFourteens.map((product, index) => {
                        if ((product.modelName === "iPhone 14 Pro Max" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                    
                        )
                        }
                        
                        })


                        const IPhoneFourteensTwoHundredFiftyGigPage = IPhoneFourteens.map((product, index) => {
                          if (product.modelName === "iPhone 14" && product.storageCapacity === "256 GB") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                  
                          )
                          }
                          
                          })
          
                          const IPhoneFourteensTwoHundredFiftyGigPlusPage = IPhoneFourteens.map((product, index) => {
                            if (product.modelName === "iPhone 14 Plus" && product.storageCapacity === "256 GB") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                    
                            )
                            }
                            
                            })
          
                            const IPhoneFourteensTwoHundredFiftyGigProPage = IPhoneFourteens.map((product, index) => {
                              if (product.modelName === "iPhone 14 Pro" && product.storageCapacity === "256 GB") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                      
                              )
                              }
                              
                              })
          
                              const IPhoneFourteensTwoHundredFiftyGigProMaxPage = IPhoneFourteens.map((product, index) => {
                                if (product.modelName === "iPhone 14 Pro Max" && product.storageCapacity === "256 GB") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                        
                                )
                                }
                                
                                })


                        const IPhoneFourteensTwoHundredFiftyGigPageLocation = IPhoneFourteens.map((product, index) => {
                          if ((product.modelName === "iPhone 14" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                      
                          )
                          }
                          
                          })
        
                          const IPhoneFourteensTwoHundredFiftyGigPlusPageLocation = IPhoneFourteens.map((product, index) => {
                            if ((product.modelName === "iPhone 14 Plus" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                        
                            )
                            }
                            
                            })
        
                            const IPhoneFourteensTwoHundredFiftyGigProPageLocation = IPhoneFourteens.map((product, index) => {
                              if ((product.modelName === "iPhone 14 Pro" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                          
                              )
                              }
                              
                              })
        
                              const IPhoneFourteensTwoHundredFiftyGigProMaxPageLocation = IPhoneFourteens.map((product, index) => {
                                if ((product.modelName === "iPhone 14 Pro Max" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true))) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                            
                                )
                                }
                                
                                })


                                const IPhoneFourteensFiveHundredGigPage = IPhoneFourteens.map((product, index) => {
                                  if (product.modelName === "iPhone 14" && product.storageCapacity === "512 GB") {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                          
                                  )
                                  }
                                  
                                  })
                  
                                  const IPhoneFourteensFiveHundredGigPlusPage = IPhoneFourteens.map((product, index) => {
                                    if (product.modelName === "iPhone 14 Plus" && product.storageCapacity === "512 GB") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                            
                                    )
                                    }
                                    
                                    })
                  
                                    const IPhoneFourteensFiveHundredGigProPage = IPhoneFourteens.map((product, index) => {
                                      if (product.modelName === "iPhone 14 Pro" && product.storageCapacity === "512 GB") {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                              
                                      )
                                      }
                                      
                                      })
                  
                                      const IPhoneFourteensFiveHundredGigProMaxPage = IPhoneFourteens.map((product, index) => {
                                        if (product.modelName === "iPhone 14 Pro Max" && product.storageCapacity === "512 GB") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                
                                        )
                                        }
                                        
                                        })


                                        const IPhoneFourteensFiveHundredGigPageLocation = IPhoneFourteens.map((product, index) => {
                                          if ((product.modelName === "iPhone 14" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                          )
                                          }
                                          
                                          })
                        
                                          const IPhoneFourteensFiveHundredGigPlusPageLocation = IPhoneFourteens.map((product, index) => {
                                            if ((product.modelName === "iPhone 14 Plus" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                             && product.Gobabis === true))) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
                                        
                                            )
                                            }
                                            
                                            })
                        
                                            const IPhoneFourteensFiveHundredGigProPageLocation = IPhoneFourteens.map((product, index) => {
                                              if ((product.modelName === "iPhone 14 Pro" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                               && product.Gobabis === true))) {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />
                                          
                                              )
                                              }
                                              
                                              })
                        
                                              const IPhoneFourteensFiveHundredGigProMaxPageLocation = IPhoneFourteens.map((product, index) => {
                                                if ((product.modelName === "iPhone 14 Pro Max" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                 && product.Gobabis === true))) {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                            
                                                )
                                                }
                                                
                                                })


                                                const IPhoneFourteensTerabyteGigProPage = IPhoneFourteens.map((product, index) => {
                                                  if (product.modelName === "iPhone 14 Pro" && product.storageCapacity === "1 TB") {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                  )
                                                  }
                                                  })
                          
                                                  const IPhoneFourteensTerabyteGigProMaxPage = IPhoneFourteens.map((product, index) => {
                                                    if (product.modelName === "iPhone 14 Pro Max" && product.storageCapacity === "1 TB") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                    )
                                                    }
                                                    })

                                                    const IPhoneFourteensTerabyteGigProPageLocation = IPhoneFourteens.map((product, index) => {
                                                      if ((product.modelName === "iPhone 14 Pro" && product.storageCapacity === "1 TB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
                                                  
                                                      )
                                                      }
                                                      
                                                      })
                            
                                                      const IPhoneFourteensTerabyteGigProMaxPageLocation = IPhoneFourteens.map((product, index) => {
                                                        if ((product.modelName === "iPhone 14 Pro Max" && product.storageCapacity === "1 TB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
                                                    
                                                        )
                                                        }
                                                        
                                                        })



                  const IPhoneThirteensHundredTwentyGigPage = IPhoneThirteens.map((product, index) => {
                    if (product.modelName === "iPhone 13" && product.storageCapacity === "128 GB") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                    )
                    }
                    })

                    const IPhoneThirteensHundredTwentyGigMiniPage = IPhoneThirteens.map((product, index) => {
                      if (product.modelName === "iPhone 13 Mini" && product.storageCapacity === "128 GB") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                      )
                      }
                      })

                      const IPhoneThirteensHundredTwentyGigProPage = IPhoneThirteens.map((product, index) => {
                        if (product.modelName === "iPhone 13 Pro" && product.storageCapacity === "128 GB") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                        )
                        }
                        })

                        const IPhoneThirteensHundredTwentyGigProMaxPage = IPhoneThirteens.map((product, index) => {
                          if (product.modelName === "iPhone 13 Pro Max" && product.storageCapacity === "128 GB") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                          )
                          }
                          })


          
                    const IPhoneThirteensHundredTwentyGigPageLocation = IPhoneThirteens.map((product, index) => {
                      if ((product.modelName === "iPhone 13" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                  
                      )
                      }
                      
                      })

                      const IPhoneThirteensHundredTwentyGigMiniPageLocation = IPhoneThirteens.map((product, index) => {
                        if ((product.modelName === "iPhone 13 Mini" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                    
                        )
                        }
                        
                        })

                        const IPhoneThirteensHundredTwentyGigProPageLocation = IPhoneThirteens.map((product, index) => {
                          if ((product.modelName === "iPhone 13 Pro" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                      
                          )
                          }
                          
                          })

                          const IPhoneThirteensHundredTwentyGigProMaxPageLocation = IPhoneThirteens.map((product, index) => {
                            if ((product.modelName === "iPhone 13 Pro Max" && product.storageCapacity === "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                        
                            )
                            }
                            
                            })


                            const IPhoneThirteensTwoHundredFiftyGigPage = IPhoneThirteens.map((product, index) => {
                              if (product.modelName === "iPhone 13" && product.storageCapacity === "256 GB") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                              )
                              }
                              })
          
                              const IPhoneThirteensTwoHundredFiftyGigMiniPage = IPhoneThirteens.map((product, index) => {
                                if (product.modelName === "iPhone 13 Mini" && product.storageCapacity === "256 GB") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                                )
                                }
                                })
          
                                const IPhoneThirteensTwoHundredFiftyGigProPage = IPhoneThirteens.map((product, index) => {
                                  if (product.modelName === "iPhone 13 Pro" && product.storageCapacity === "256 GB") {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                                  )
                                  }
                                  })
          
                                  const IPhoneThirteensTwoHundredFiftyGigProMaxPage = IPhoneThirteens.map((product, index) => {
                                    if (product.modelName === "iPhone 13 Pro Max" && product.storageCapacity === "256 GB") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                                    )
                                    }
                                    })


                                    const IPhoneThirteensTwoHundredFiftyGigPageLocation = IPhoneThirteens.map((product, index) => {
                                      if ((product.modelName === "iPhone 13" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                                  
                                      )
                                      }
                                      
                                      })
                
                                      const IPhoneThirteensTwoHundredFiftyGigMiniPageLocation = IPhoneThirteens.map((product, index) => {
                                        if ((product.modelName === "iPhone 13 Mini" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                         && product.Gobabis === true))) {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                    
                                        )
                                        }
                                        
                                        })
                
                                        const IPhoneThirteensTwoHundredFiftyGigProPageLocation = IPhoneThirteens.map((product, index) => {
                                          if ((product.modelName === "iPhone 13 Pro" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                          )
                                          }
                                          
                                          })
                
                                          const IPhoneThirteensTwoHundredFiftyGigProMaxPageLocation = IPhoneThirteens.map((product, index) => {
                                            if ((product.modelName === "iPhone 13 Pro Max" && product.storageCapacity === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                             && product.Gobabis === true))) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
                                        
                                            )
                                            }
                                            
                                            })


                                            const IPhoneThirteensFiveHundredGigPage = IPhoneThirteens.map((product, index) => {
                                              if (product.modelName === "iPhone 13" && product.storageCapacity === "512 GB") {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />
                                              )
                                              }
                                              })
                          
                                              const IPhoneThirteensFiveHundredGigMiniPage = IPhoneThirteens.map((product, index) => {
                                                if (product.modelName === "iPhone 13 Mini" && product.storageCapacity === "512 GB") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                )
                                                }
                                                })
                          
                                                const IPhoneThirteensFiveHundredGigProPage = IPhoneThirteens.map((product, index) => {
                                                  if (product.modelName === "iPhone 13 Pro" && product.storageCapacity === "512 GB") {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                  )
                                                  }
                                                  })
                          
                                                  const IPhoneThirteensFiveHundredGigProMaxPage = IPhoneThirteens.map((product, index) => {
                                                    if (product.modelName === "iPhone 13 Pro Max" && product.storageCapacity === "512 GB") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                    )
                                                    }
                                                    })


                                                    const IPhoneThirteensFiveHundredGigPageLocation = IPhoneThirteens.map((product, index) => {
                                                      if ((product.modelName === "iPhone 13" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
                                                  
                                                      )
                                                      }
                                                      
                                                      })
                                
                                                      const IPhoneThirteensFiveHundredGigMiniPageLocation = IPhoneThirteens.map((product, index) => {
                                                        if ((product.modelName === "iPhone 13 Mini" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
                                                    
                                                        )
                                                        }
                                                        
                                                        })
                                
                                                        const IPhoneThirteensFiveHundredGigProPageLocation = IPhoneThirteens.map((product, index) => {
                                                          if ((product.modelName === "iPhone 13 Pro" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                           && product.Gobabis === true))) {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
                                                      
                                                          )
                                                          }
                                                          
                                                          })
                                
                                                          const IPhoneThirteensFiveHundredGigProMaxPageLocation = IPhoneThirteens.map((product, index) => {
                                                            if ((product.modelName === "iPhone 13 Pro Max" && product.storageCapacity === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                             && product.Gobabis === true))) {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />
                                                        
                                                            )
                                                            }
                                                            
                                                            })


                                                            const IPhoneThirteensTerabyteGigProPage = IPhoneThirteens.map((product, index) => {
                                                              if (product.modelName === "iPhone 13 Pro" && product.storageCapacity === "1 TB") {
                                                              return (
                                                                <ProductCart key={index} UserData={UserData} product={product} />
                                                              )
                                                              }
                                                              })
                                      
                                                              const IPhoneThirteensTerabyteGigProMaxPage = IPhoneThirteens.map((product, index) => {
                                                                if (product.modelName === "iPhone 13 Pro Max" && product.storageCapacity === "1 TB") {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                                )
                                                                }
                                                                })


                                                                const IPhoneThirteensTerabyteGigProPageLocation = IPhoneThirteens.map((product, index) => {
                                                                  if ((product.modelName === "iPhone 13 Pro" && product.storageCapacity === "1 TB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                   && product.Gobabis === true))) {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                  )
                                                                  }
                                                                  
                                                                  })
                                        
                                                                  const IPhoneThirteensTerabyteGigProMaxPageLocation = IPhoneThirteens.map((product, index) => {
                                                                    if ((product.modelName === "iPhone 13 Pro Max" && product.storageCapacity === "1 TB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                     && product.Gobabis === true))) {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                                
                                                                    )
                                                                    }
                                                                    
                                                                    })

                                                    

                      const IPhoneTwelvesPage = IPhoneTwelves.map((product, index) => {
                        if (product.modelName === "iPhone 12") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                        )
                        }
                        })
              
                        const IPhoneTwelvesPageLocation = IPhoneTwelves.map((product, index) => {
                          if (product.modelName === "iPhone 12" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                      
                          )
                          }
                          
                          })

                          const IPhoneElevensPage = IPhoneElevens.map((product, index) => {
                            if (product.modelName === "iPhone 11") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                            )
                            }
                            })
                  
                            const IPhoneElevensPageLocation = IPhoneElevens.map((product, index) => {
                              if (product.modelName === "iPhone 11" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                          
                              )
                              }
                              
                              })

                              const IPhoneSEPage = IPhoneSE.map((product, index) => {
                                if (product.modelName === "iPhone SE") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                                )
                                }
                                })
                      
                                const IPhoneSEPageLocation = IPhoneSE.map((product, index) => {
                                  if (product.modelName === "iPhone SE" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                   && product.Gobabis === true))) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                              
                                  )
                                  }
                                  
                                  })

                                  const IPhoneXRPage = IPhoneXR.map((product, index) => {
                                    if (product.modelName === "iPhone XR") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                                    )
                                    }
                                    })
                          
                                    const IPhoneXRPageLocation = IPhoneXR.map((product, index) => {
                                      if (product.modelName === "iPhone XR" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                                  
                                      )
                                      }
                                      
                                      })

                                      const IPhoneEightPage = IPhoneEight.map((product, index) => {
                                        if (product.modelName === "iPhone 8") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                        )
                                        }
                                        })
                              
                                        const IPhoneEightPageLocation = IPhoneEight.map((product, index) => {
                                          if (product.modelName === "iPhone 8" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                          )
                                          }
                                          
                                          })

                                          const IPhoneSevenPage = IPhoneSeven.map((product, index) => {
                                            if (product.modelName === "iPhone 7") {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
                                            )
                                            }
                                            })
                                  
                                            const IPhoneSevenPageLocation = IPhoneSeven.map((product, index) => {
                                              if (product.modelName === "iPhone 7" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                               && product.Gobabis === true))) {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />
                                          
                                              )
                                              }
                                              
                                              })

                                              const IPhoneSixPage = IPhoneSix.map((product, index) => {
                                                if (product.modelName === "iPhone 6") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                )
                                                }
                                                })
                                      
                                                const IPhoneSixPageLocation = IPhoneSix.map((product, index) => {
                                                  if (product.modelName === "iPhone 6" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                   && product.Gobabis === true))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                              
                                                  )
                                                  }
                                                  
                                                  })

                                                  const IPhoneOtherPage = IPhonesOther.map((product, index) => {
                                                    if (product.seriesName === "iPhone Other") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                    )
                                                    }
                                                    })
                                          
                                                    const IPhoneOtherPageLocation = IPhonesOther.map((product, index) => {
                                                      if (product.seriesName === "iPhone Other" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
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
      <span className='Category_selectTabs_span'>IPHONES</span>
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
  onClick={()=> {ToggleSelectTabs(1); StorageCategory(0); PhoneModelCategory(0)}}
  ><div>
    <img src="https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png"
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>All</span>
  </div>
    
   </div>

   <div className={SelectTabs ===0 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(0); StorageCategory(1); PhoneModelCategory(1); GetiPhoneFifteens()}}
  ><div>
    <img 
    src='https://i.imgur.com/XTLq7bj.jpg'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>iPhone 15</span>
  </div>
    
   </div>

   <div className={SelectTabs ===2 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(2); StorageCategory(1); PhoneModelCategory(1); GetiPhoneFourteens()}}
  ><div>
    <img 
    src='https://res-3.cloudinary.com/grover/image/upload/v1668183806/if5nfatiq3vzalgizmwe.png'
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>iPhone 14</span>
  </div>
    
   </div>

   <div className={SelectTabs ===3 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(3); StorageCategory(1); PhoneModelCategory(1); GetiPhoneThirteens()}}
  ><div>
    <img 
       src="https://i.imgur.com/Q0ODEcL.jpg"
    // src='https://images-na.ssl-images-amazon.com/images/I/61AwGDDZd3L._AC_UL600_SR600,600_.jpg'
    // src="https://www.elkjop.no/image/dv_web_D180001002838548/361939/iphone-13-pro-5g-smartphone-128gb-gull--pdp_zoom-3000--pdp_main-540.jpg"
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>iPhone 13</span>
  </div>
   </div>

   <div className={SelectTabs ===4 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(4); StorageCategory(0); PhoneModelCategory(); GetiPhoneTwelves()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/71hIfcIPyxS._AC_UF1000,1000_QL80_.jpg'
    // src="https://www.mega.pk/items_images/APPLE+IPHONE+12+PRO+MAX+6GB+RAM+256GB+STORAGE+DUAL+SIM+GOLD+Price+in+Pakistan%2C+Specifications%2C+Features_-_20986.webp"
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>iPhone 12</span>
  </div>
   </div>

   <div className={SelectTabs ===5 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(5); StorageCategory(0); PhoneModelCategory(); GetiPhoneEleven()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/51XA-n2E0PL._AC_UF894,1000_QL80_.jpg'
    // src='https://istore.co.na/cdn/shop/products/190199220898iPhone1164GBBlack.jp_942d1385-f9b7-42fb-ab05-99500ff4b2c8_2048x.jpg?v=1611573872'
    // src="https://d1eh9yux7w8iql.cloudfront.net/product_images/290035_52f0d766-fbef-4625-959e-38ace3517201.jpg"
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>iPhone 11</span>
  </div>
   </div>

   <div className={SelectTabs ===6 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(6); StorageCategory(0); PhoneModelCategory(); GetiPhoneSE()}}
  ><div>
    <img 
    src='https://s7d1.scene7.com/is/image/tracfone/apple-latest-iphonese-black-back?scl=1&fmt=webp-alpha&qlt=80,0&resMode=sharp2&op_usm=1.75,0.3,2,0'
    // src='https://m.media-amazon.com/images/I/81wmQz6ukzL.jpg'
    // src="https://i5.walmartimages.com/seo/Straight-Talk-Apple-iPhone-SE-2022-3rd-Gen-5G-64GB-Red-Prepaid-Smartphone-Locked-to-Straight-Talk_92121213-6d06-4ed2-9601-94a6cfe40971.4a13950cfefb5fa532bae8692808a9d7.jpeg"
   style={{ width: '100%', height: '230px', padding: '0p 0px 7px 0px', borderRadius: '15px', overflow: 'hide'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>iPhone SE</span>
  </div>
   </div>

   <div className={SelectTabs ===7 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(7); StorageCategory(0); PhoneModelCategory(); GetiPhoneXR()}}
  ><div>
    <img src="https://static.digitecgalaxus.ch/Files/3/9/2/4/5/1/8/2/iphone_xr_product-red_digitec-galaxus.jpg"
   style={{ width: '100%', height: '230px', padding: '0p 0px 7px 0px', borderRadius: '15px', overflow: 'hide'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>iPhone XR</span>
  </div>
   </div>

   <div className={SelectTabs ===8 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(8); StorageCategory(0); PhoneModelCategory(); GetiPhoneEight()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/61ob-gsAAmL._AC_UF350,350_QL80_.jpg"
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>iPhone 8</span>
  </div>
   </div>

   <div className={SelectTabs ===9 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(9); ; StorageCategory(0); PhoneModelCategory(); GetiPhoneSeven()}}
  ><div>
    <img src="https://files.refurbed.com/ii/iphone-7-1688027195.jpg?t=fitdesign&h=600&w=800"
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>iPhone 7</span>
  </div>
   </div>

   <div className={SelectTabs ===10 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(10); StorageCategory(0); PhoneModelCategory(); GetiPhoneSix()}}
  ><div>
    <img 
    src='https://i5.walmartimages.com/asr/97a46620-f585-4565-b1f9-2cb6aa09247d_1.12fd6907a0b8e7d7c559b683dee69e0e.jpeg'
    // src='https://pricehub.ng/wp-content/uploads/thumbs_dir/refurbished-class-a-apple-iphone-6-plus-1gb-ram16gb-rom-gold-pzpavvxckaqowmy1ph2w4cvihjqxhawoph2q217mvc.jpg'
    // src="https://ultimoelectronics.co.uk/wp-content/uploads/2020/09/Refurbished-Sim-Free-Apple-iPhone-6-Space-Grey.jpg"
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>iPhone 6</span>
  </div>
   </div>

   <div className={SelectTabs ===11 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(11); StorageCategory(0); PhoneModelCategory(); GetOtheriPhones()}}
  ><div>
    <img src="https://www.bdprice.com.bd/wp-content/uploads/2020/11/Apple-iPhone-5.jpg"
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Other iPhones</span>
  </div>
   </div>


</Carousel>

    </div>

    <div className={SelectTabs ===2 || SelectTabs ===0 || SelectTabs ===3  ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={togglePhoneModel ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {PhoneModelCategory(1)}} >
            <span>Base</span>
          </div>
          <div className={togglePhoneModel ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {PhoneModelCategory(2)}} >
            <span>Plus</span>
          </div>
    <div className={togglePhoneModel ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {PhoneModelCategory(3)}} >
            <span>Pro</span>
          </div>
          <div className={togglePhoneModel ===4 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {PhoneModelCategory(4); StorageCategory(4)}} >
            <span>Pro Max</span>
          </div>
          
    </div>

    {/* <div className={SelectTabs ===3 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={togglePhoneModel ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {PhoneModelCategory(1)}} >
            <span>Base</span>
          </div>
          <div className={togglePhoneModel ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {PhoneModelCategory(2)}} >
            <span>Mini</span>
          </div>
    <div className={togglePhoneModel ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {PhoneModelCategory(3)}} >
            <span>Pro</span>
          </div>
          <div className={togglePhoneModel ===4 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {PhoneModelCategory(4)}} >
            <span>Pro Max</span>
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

    <div className={SelectTabs === 1 ? 'My_location_items_choose_box_second' : 'Listed_fetched_products-hide'}>
    <div 
    className={toggleStorageSize === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(1)}}>
      <span>64 GB</span>
    </div>
    <div 
    className={toggleStorageSize === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(2)}}>
      <span>128 GB</span>
    </div>
    <div 
    className={toggleStorageSize === 3 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(3)}}>
      <span>256 GB</span>
    </div>
    <div 
    className={toggleStorageSize === 4 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(4)}}>
      <span>512 GB</span>
    </div>
    </div>

    <div className={SelectTabs === 2 || SelectTabs ===3 || SelectTabs ===0 ? 'My_location_items_choose_box_second' : 'Listed_fetched_products-hide'}>
    <div 
    className={toggleStorageSize === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(1)}}>
      <span>128 GB</span>
    </div>
    <div 
    className={toggleStorageSize === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(2)}}>
      <span>256 GB</span>
    </div>
    <div 
    className={toggleStorageSize === 3 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(3)}}>
      <span>512 GB</span>
    </div>
    <div 
    className={toggleStorageSize === 4 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(4)}}>
      <span>1 TB</span>
    </div>
    
    </div>

    {/* <div className={SelectTabs === 3 ? 'My_location_items_choose_box_second' : 'Listed_fetched_products-hide'}>
    <div 
    className={toggleStorageSize === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(1)}}>
      <span>128 GB</span>
    </div>
    <div 
    className={toggleStorageSize === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(2)}}>
      <span>256 GB</span>
    </div>
    <div 
    className={toggleStorageSize === 3 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(3)}}>
      <span>512 GB</span>
    </div>
    <div 
    className={toggleStorageSize === 4 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(4)}}>
      <span>1 TB</span>
    </div>
    </div> */}

    {/* <div className={SelectTabs === 4 || SelectTabs === 5 || SelectTabs === 6
       || SelectTabs === 7 ? 'My_location_items_choose_box_second' : 'Listed_fetched_products-hide'}>
    <div 
    className={toggleStorageSize === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(1)}}>
      <span>64 GB</span>
    </div>
    <div 
    className={toggleStorageSize === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(2)}}>
      <span>128 GB</span>
    </div>
    <div 
    className={toggleStorageSize === 3 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {StorageCategory(3)}}>
      <span>256 GB</span>
    </div>
    </div> */}

  </div>


{/* iPhones All */}
{IphonesListed && IphonesListed.length === undefined ?
  <></>
  :
  IphonesListed && IphonesListed.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleStorageSize === 0 ) && togglePhoneModel === 0 && ToggleLocation === false ?
 <div className='ListedItems_container'>
 <div className="Listed_fetched_products_wrapper">
 <div className='Item_listed_Box'>
 <div className='Item_listed_Details'>
     <a> <div className='Item_listed_image'>
     <img className='Item_listed_image_size' src={NoImage} alt="" />
   </div>
   <div className='Item_listed_title_box'>
       <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
   </div>
   </a>

   <div className='Item_value_box'>
     <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
     <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
   </div>

   <div className='Marketer_listing_logo'>
   <img style={{ width: '100%', height: '100%', borderRadius: '7px'}} src="https://i.imgur.com/dpJ1ekD.jpg" alt="" />
   </div>

 </div>
 
 </div>
 
 <div className='Item_listed_Box'>
 <div className='Item_listed_Details'>
     <a> <div className='Item_listed_image'>
     <img className='Item_listed_image_size'src={NoImage} alt="" />
   </div>
   <div className='Item_listed_title_box'>
       <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
   </div>
   </a>

   <div className='Item_value_box'>
     <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
     <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
   </div>

   <div className='Marketer_listing_logo'>
   <img style={{ width: '100%', height: '100%', borderRadius: '7px'}} src="https://i.imgur.com/dpJ1ekD.jpg" alt="" />
   </div>

 </div>
 
 </div>
 <div className='Item_listed_Box'>
 <div className='Item_listed_Details'>
     <a> <div className='Item_listed_image'>
     <img className='Item_listed_image_size'src={NoImage} alt="" />
   </div>
   <div className='Item_listed_title_box'>
       <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
   </div>
   </a>

   <div className='Item_value_box'>
     <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
     <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
   </div>

   <div className='Marketer_listing_logo'>
   <img style={{ width: '100%', height: '100%', borderRadius: '7px'}} src="https://i.imgur.com/dpJ1ekD.jpg" alt="" />
   </div>

 </div>
 
 </div>
 <div className='Item_listed_Box'>
 <div className='Item_listed_Details'>
     <a> <div className='Item_listed_image'>
     <img className='Item_listed_image_size'src={NoImage} alt="" />
   </div>
   <div className='Item_listed_title_box'>
       <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
   </div>
   </a>

   <div className='Item_value_box'>
     <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
     <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
   </div>

   <div className='Marketer_listing_logo'>
   <img style={{ width: '100%', height: '100%', borderRadius: '7px'}} src="https://i.imgur.com/dpJ1ekD.jpg" alt="" />
   </div>

 </div>
 
 </div>
 <div className='Item_listed_Box'>
 <div className='Item_listed_Details'>
     <a> <div className='Item_listed_image'>
     <img className='Item_listed_image_size'src={NoImage} alt="" />
   </div>
   <div className='Item_listed_title_box'>
       <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
   </div>
   </a>

   <div className='Item_value_box'>
     <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
     <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
   </div>

   <div className='Marketer_listing_logo'>
   <img style={{ width: '100%', height: '100%', borderRadius: '7px'}} src="https://i.imgur.com/dpJ1ekD.jpg" alt="" />
   </div>

 </div>
 
 </div>
 <div className='Item_listed_Box'>
 <div className='Item_listed_Details'>
     <a> <div className='Item_listed_image'>
     <img className='Item_listed_image_size'src={NoImage} alt="" />
   </div>
   <div className='Item_listed_title_box'>
       <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
   </div>
   </a>

   <div className='Item_value_box'>
     <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
     <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
   </div>

   <div className='Marketer_listing_logo'>
   <img style={{ width: '100%', height: '100%', borderRadius: '7px'}} src="https://i.imgur.com/dpJ1ekD.jpg" alt="" />
   </div>

 </div>
 
 </div>
 <div className='Item_listed_Box'>
 <div className='Item_listed_Details'>
     <a> <div className='Item_listed_image'>
     <img className='Item_listed_image_size'src={NoImage} alt="" />
   </div>
   <div className='Item_listed_title_box'>
       <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
   </div>
   </a>

   <div className='Item_value_box'>
     <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
     <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
   </div>

   <div className='Marketer_listing_logo'>
   <img style={{ width: '100%', height: '100%', borderRadius: '7px'}} src="https://i.imgur.com/dpJ1ekD.jpg" alt="" />
   </div>

 </div>
 
 </div>
 <div className='Item_listed_Box'>
 <div className='Item_listed_Details'>
     <a> <div className='Item_listed_image'>
     <img className='Item_listed_image_size'src={NoImage} alt="" />
   </div>
   <div className='Item_listed_title_box'>
       <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
   </div>
   </a>

   <div className='Item_value_box'>
     <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
     <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
   </div>

   <div className='Marketer_listing_logo'>
   <img style={{ width: '100%', height: '100%', borderRadius: '7px'}} src="https://i.imgur.com/dpJ1ekD.jpg" alt="" />
   </div>

 </div>
 
 </div>
 </div>
</div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={(SelectTabs === 1 && toggleStorageSize === 0 ) && togglePhoneModel === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AllIphonesPage}
</div>
}

{IphonesListed && IphonesListed.length === undefined ?
  <></>
  :
  IphonesListed && IphonesListed.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleStorageSize === 1 ) && togglePhoneModel === 0 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 1 && toggleStorageSize === 1 ) && togglePhoneModel === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AllIphonesSixtyGigPage}
</div>
}

{IphonesListed && IphonesListed.length === undefined ?
  <></>
  :
  IphonesListed && IphonesListed.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleStorageSize === 2 ) && togglePhoneModel === 0 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 1 && toggleStorageSize === 2 ) && togglePhoneModel === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AllIphonesHundredTwentyGigPage}
</div>
}

{IphonesListed && IphonesListed.length === undefined ?
  <></>
  :
  IphonesListed && IphonesListed.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleStorageSize === 3 ) && togglePhoneModel === 0 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 1 && toggleStorageSize === 3 ) && togglePhoneModel === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AllIphonesTwoHundredFiftyGigPage}
</div>
}

{IphonesListed && IphonesListed.length === undefined ?
  <></>
  :
  IphonesListed && IphonesListed.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleStorageSize === 4 ) && togglePhoneModel === 0 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 1 && toggleStorageSize === 4 ) && togglePhoneModel === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AllIphonesFiveHundredGigPage}
</div>
}

{/* All iPhones Location */}
{IphonesListed && IphonesListed.length === undefined ?
  <></>
  :
  IphonesListed && IphonesListed.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleStorageSize === 0 ) && togglePhoneModel === 0 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 1 && toggleStorageSize === 0 ) && togglePhoneModel === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AllIphonesPageLocation}
</div>
}

{IphonesListed && IphonesListed.length === undefined ?
  <></>
  :
  IphonesListed && IphonesListed.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleStorageSize === 1 ) && togglePhoneModel === 0 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 1 && toggleStorageSize === 1 ) && togglePhoneModel === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AllIphonesSixtyGigPageLocation}
</div>
}

{IphonesListed && IphonesListed.length === undefined ?
  <></>
  :
  IphonesListed && IphonesListed.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleStorageSize === 2 ) && togglePhoneModel === 0 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 1 && toggleStorageSize === 2 ) && togglePhoneModel === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AllIphonesHundredTwentyGigPageLocation}
</div>
}

{IphonesListed && IphonesListed.length === undefined ?
  <></>
  :
  IphonesListed && IphonesListed.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleStorageSize === 3 ) && togglePhoneModel === 0 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 1 && toggleStorageSize === 3 ) && togglePhoneModel === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AllIphonesTwoHundredFiftyGigPageLocation}
</div>
}

{IphonesListed && IphonesListed.length === undefined ?
  <></>
  :
  IphonesListed && IphonesListed.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleStorageSize === 4 ) && togglePhoneModel === 0 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 1 && toggleStorageSize === 4 ) && togglePhoneModel === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AllIphonesFiveHundredGigPageLocation}
</div>
}


{/* iPhones 15 128 GB */}
{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensHundredTwentyGigPage}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensHundredTwentyGigPlusPage}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensHundredTwentyGigProPage}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensHundredTwentyGigProMaxPage}
</div>
}



{/* All iPhone 15 Location */}
{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensHundredTwentyGigPageLocation}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensHundredTwentyGigPlusPageLocation}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensHundredTwentyGigProPageLocation}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensHundredTwentyGigProMaxPageLocation}
</div>
}


{/* iPhone 15's 256 Gb */}
{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTwoHundredFiftyGigPage}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTwoHundredFiftyGigPlusPage}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTwoHundredFiftyGigProPage}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTwoHundredFiftyGigProMaxPage}
</div>
}



{/* All iPhone 15 Location */}
{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTwoHundredFiftyGigPageLocation}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTwoHundredFiftyGigPlusPageLocation}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTwoHundredFiftyGigProPageLocation}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTwoHundredFiftyGigProMaxPageLocation}
</div>
}


{/* iPhone 15's 512 Gb */}
{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigPage}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigPlusPage}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigProPage}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigProMaxPage}
</div>
}



{/* All iPhone 15 Location */}
{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigPageLocation}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigPlusPageLocation}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigProPageLocation}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigProMaxPageLocation}
</div>
}


{/* iPhone 15 not terabyte */}
{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigPage}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigPlusPage}
</div>
}

{/* iPhone 15 not terabyte Location */}
{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigPageLocation}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensFiveHundredGigPlusPageLocation}
</div>
}

{/* iPhone 14 not terabyte */}
{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigPage}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigPlusPage}
</div>
}

{/* iPhone 14 not terabyte Location */}
{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigPageLocation}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigPlusPageLocation}
</div>
}


{/* iPhone 15 1 TB */}
{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTerabyteGigProPage}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTerabyteGigProMaxPage}
</div>
}



{/* Location */}
{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTerabyteGigProPageLocation}
</div>
}

{IPhoneFifteens && IPhoneFifteens.length === undefined ?
  <></>
  :
  IPhoneFifteens && IPhoneFifteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 0 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFifteensTerabyteGigProMaxPageLocation}
</div>
}

{/* iPhones 14 128 GB */}
{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensHundredTwentyGigPage}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensHundredTwentyGigPlusPage}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensHundredTwentyGigProPage}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensHundredTwentyGigProMaxPage}
</div>
}



{/* All iPhones Location */}
{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensHundredTwentyGigPageLocation}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensHundredTwentyGigPlusPageLocation}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensHundredTwentyGigProPageLocation}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensHundredTwentyGigProMaxPageLocation}
</div>
}


{/* iPhone 14's 256 Gb */}
{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTwoHundredFiftyGigPage}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTwoHundredFiftyGigPlusPage}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTwoHundredFiftyGigProPage}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTwoHundredFiftyGigProMaxPage}
</div>
}



{/* All iPhones Location */}
{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTwoHundredFiftyGigPageLocation}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTwoHundredFiftyGigPlusPageLocation}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTwoHundredFiftyGigProPageLocation}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTwoHundredFiftyGigProMaxPageLocation}
</div>
}


{/* iPhone 14's 512 Gb */}
{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigPage}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigPlusPage}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigProPage}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigProMaxPage}
</div>
}



{/* All iPhones Location */}
{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigPageLocation}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigPlusPageLocation}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigProPageLocation}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensFiveHundredGigProMaxPageLocation}
</div>
}


{/* iPhone 14 1 TB */}
{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTerabyteGigProPage}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTerabyteGigProMaxPage}
</div>
}



{/* Location */}
{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTerabyteGigProPageLocation}
</div>
}

{IPhoneFourteens && IPhoneFourteens.length === undefined ?
  <></>
  :
  IPhoneFourteens && IPhoneFourteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 2 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneFourteensTerabyteGigProMaxPageLocation}
</div>
}


{/* iPhone 13's 128 GB */}
{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensHundredTwentyGigPage}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensHundredTwentyGigMiniPage}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensHundredTwentyGigProPage}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensHundredTwentyGigProMaxPage}
</div>
}



{/* All iPhones 13 Location */}
{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensHundredTwentyGigPageLocation}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensHundredTwentyGigMiniPageLocation}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensHundredTwentyGigProPageLocation}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 1 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensHundredTwentyGigProMaxPageLocation}
</div>
}


{/* iPhone 13's 256 Gb */}
{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTwoHundredFiftyGigPage}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTwoHundredFiftyGigMiniPage}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTwoHundredFiftyGigProPage}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTwoHundredFiftyGigProMaxPage}
</div>
}



{/* All iPhones 13 Location */}
{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTwoHundredFiftyGigPageLocation}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTwoHundredFiftyGigMiniPageLocation}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTwoHundredFiftyGigProPageLocation}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 2 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTwoHundredFiftyGigProMaxPageLocation}
</div>
}


{/* iPhone 13's 512 Gb */}
{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigPage}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigMiniPage}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigProPage}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigProMaxPage}
</div>
}



{/* All iPhones 13 Location */}
{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigPageLocation}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigMiniPageLocation}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigProPageLocation}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 3 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigProMaxPageLocation}
</div>
}


{/* iPhone 13 not terabyte */}
{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigPage}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigMiniPage}
</div>
}


{/* iPhone 13 not terabyte Location */}
{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigPageLocation}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensFiveHundredGigMiniPageLocation}
</div>
}


{/* iPhone 13 1 TB */}
{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTerabyteGigProPage}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTerabyteGigProMaxPage}
</div>
}



{/* Location */}
{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTerabyteGigProPageLocation}
</div>
}

{IPhoneThirteens && IPhoneThirteens.length === undefined ?
  <></>
  :
  IPhoneThirteens && IPhoneThirteens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 3 && toggleStorageSize === 4 ) && togglePhoneModel === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneThirteensTerabyteGigProMaxPageLocation}
</div>
}



{/* Other iPhones */}
{IPhoneTwelves && IPhoneTwelves.length === undefined ?
  <></>
  :
  IPhoneTwelves && IPhoneTwelves.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleStorageSize === 0 ) && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 4 && toggleStorageSize === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneTwelvesPage}
</div>
}

{IPhoneElevens && IPhoneElevens.length === undefined ?
  <></>
  :
  IPhoneElevens && IPhoneElevens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleStorageSize === 0 ) && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 5 && toggleStorageSize === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneElevensPage}
</div>
}

{IPhoneSE && IPhoneSE.length === undefined ?
  <></>
  :
  IPhoneSE && IPhoneSE.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 6 && toggleStorageSize === 0 ) && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 6 && toggleStorageSize === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneSEPage}
</div>
}

{IPhoneXR && IPhoneXR.length === undefined ?
  <></>
  :
  IPhoneXR && IPhoneXR.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleStorageSize === 0 ) && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 7 && toggleStorageSize === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneXRPage}
</div>
}

{IPhoneEight && IPhoneEight.length === undefined ?
  <></>
  :
  IPhoneEight && IPhoneEight.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleStorageSize === 0 ) && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 8 && toggleStorageSize === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneEightPage}
</div>
}

{IPhoneSeven && IPhoneSeven.length === undefined ?
  <></>
  :
  IPhoneSeven && IPhoneSeven.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleStorageSize === 0 ) && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 9 && toggleStorageSize === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneSevenPage}
</div>
}

{IPhoneSix && IPhoneSix.length === undefined ?
  <></>
  :
  IPhoneSix && IPhoneSix.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 10 && toggleStorageSize === 0 ) && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 10 && toggleStorageSize === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneSixPage}
</div>
}

{IPhonesOther && IPhonesOther.length === undefined ?
  <></>
  :
  IPhonesOther && IPhonesOther.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 11 && toggleStorageSize === 0 ) && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 11 && toggleStorageSize === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneOtherPage}
</div>
}


{/* Location */}
{IPhoneTwelves && IPhoneTwelves.length === undefined ?
  <></>
  :
  IPhoneTwelves && IPhoneTwelves.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleStorageSize === 0 ) && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 4 && toggleStorageSize === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneTwelvesPageLocation}
</div>
}

{IPhoneElevens && IPhoneElevens.length === undefined ?
  <></>
  :
  IPhoneElevens && IPhoneElevens.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleStorageSize === 0 ) && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 5 && toggleStorageSize === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneElevensPageLocation}
</div>
}

{IPhoneSE && IPhoneSE.length === undefined ?
  <></>
  :
  IPhoneSE && IPhoneSE.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 6 && toggleStorageSize === 0 ) && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 6 && toggleStorageSize === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneSEPageLocation}
</div>
}

{IPhoneXR && IPhoneXR.length === undefined ?
  <></>
  :
  IPhoneXR && IPhoneXR.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleStorageSize === 0 ) && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 7 && toggleStorageSize === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneXRPageLocation}
</div>
}

{IPhoneEight && IPhoneEight.length === undefined ?
  <></>
  :
  IPhoneEight && IPhoneEight.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleStorageSize === 0 ) && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 8 && toggleStorageSize === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneEightPageLocation}
</div>
}

{IPhoneSeven && IPhoneSeven.length === undefined ?
  <></>
  :
  IPhoneSeven && IPhoneSeven.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleStorageSize === 0 ) && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 9 && toggleStorageSize === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneSevenPageLocation}
</div>
}

{IPhoneSix && IPhoneSix.length === undefined ?
  <></>
  :
  IPhoneSix && IPhoneSix.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 10 && toggleStorageSize === 0 ) && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 10 && toggleStorageSize === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneSixPageLocation}
</div>
}

{IPhonesOther && IPhonesOther.length === undefined ?
  <></>
  :
  IPhonesOther && IPhonesOther.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 11 && toggleStorageSize === 0 ) && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center', fontWeight: '500'
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
<div className={(SelectTabs === 11 && toggleStorageSize === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IPhoneOtherPageLocation}
</div>
}

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

export default IPhonesPage