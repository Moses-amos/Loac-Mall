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

function Flatscreens(props) {

    const [UserData, setUserData] = useState([])
    const [FlatscreenTvs, setFlatscreenTvs] = useState([])
    const [SamsungTvs, setSamsungTvs] = useState([])
    const [HisenseTvs, setHisenseTvs] = useState([])
    const [SonyTvs, setSonyTvs] = useState([])
    const [TCLTvs, setTCLTvs] = useState([])
    const [OtherTvs, setOtherTvs] = useState([])

    const [toggleBrands, settoggleBrands] = useState(0)
    const [toggleScreenFormDesktop, settoggleScreenFormDesktop] = useState(1)
    const [SelectTabs, setSelectTabs] = useState(1)
    const [Products, setProducts] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)
    const [IsLoading, setIsLoading] = useState(true)
  
    const SetLocation = () => setToggleLocation(!ToggleLocation)
  
    const ToggleSelectTabs = (index) => {
      setSelectTabs(index);
    }  

    const BrandCategory = (index) => {
        settoggleBrands(index);
      }

    const ScreenFormDCategory = (index) => {
        settoggleScreenFormDesktop(index);
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
        product: "Flatscreen Tv"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
        setFlatscreenTvs(response.data.products)
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

    const GetSamsung = () => {
      const variable = {
        brand: "Samsung Tv"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
        setSamsungTvs(response.data.products)
      } else {
      }
      })
    }

    const GetHisense = () => {
      const variable = {
        brand: "Hisense Tv"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
        setHisenseTvs(response.data.products)
      } else {
      }
      })
    }

    const GetSony = () => {
      const variable = {
        brand: "Sony Tv"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
        setSonyTvs(response.data.products)
      } else {
      }
      })
    }

    const GetTCL = () => {
      const variable = {
        brand: "TCL Tv"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
        setTCLTvs(response.data.products)
      } else {
      }
      })
    }

    const GetOther = () => {
      const variable = {
        seriesName: "Other Tv"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
        setOtherTvs(response.data.products)
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
      

      const FlatscreensThirtyTwoPage = FlatscreenTvs.map((product, index) => {
        if (product.displaySize === "32 inches & Under" && product.functions === "Flat") {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
        )
        }
        
        })
  
        const FlatscreensThirtyTwoPageLocation = FlatscreenTvs.map((product, index) => {
          if ((product.displaySize === "32 inches & Under" && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true))) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
          )
          }
          
          })
  
        const FlatscreensThirtyTwoCurvedPage = FlatscreenTvs.map((product, index) => {
          if (product.displaySize === "32 inches & Under" && product.functions === "Curved") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
          )
          }
          
          })
  
          const FlatscreensThirtyTwoCurvedPageLocation = FlatscreenTvs.map((product, index) => {
            if ((product.displaySize === "32 inches & Under" && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
             && product.Gobabis === true))) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
            )
            }
            
            })

            const FlatscreensThirtyTwoSmartTvPage = FlatscreenTvs.map((product, index) => {
              if (product.displaySize === "32 inches & Under" && product.compatibleModel === "Smart Tv") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
              )
              }
              
              })
      
              const FlatscreensThirtyTwoSmartTvPageLocation = FlatscreenTvs.map((product, index) => {
                if ((product.displaySize === "32 inches & Under" && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                )
                }
                
                })

  
        const FlatscreensThirtyToFortyNinePage = FlatscreenTvs.map((product, index) => {
          if (product.displaySize === "33 inches to 49 inches" && product.functions === "Flat") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })
  
          const FlatscreensThirtyToFortyNinePageLocation = FlatscreenTvs.map((product, index) => {
            if ((product.displaySize === "33 inches to 49 inches" && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
             && product.Gobabis === true))) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
    
            )
            }
            
            })
  
          const FlatscreensThirtyToFortyNineCurvedPage = FlatscreenTvs.map((product, index) => {
            if (product.displaySize === "33 inches to 49 inches" && product.functions === "Curved") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
            )
            }
            
            })
  
            const FlatscreensThirtyToFortyNineCurvedPageLocation = FlatscreenTvs.map((product, index) => {
              if ((product.displaySize === "33 inches to 49 inches" && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
    
              )
              }
              
              })

              const FlatscreensThirtyToFortyNineSmartTvPage = FlatscreenTvs.map((product, index) => {
                if (product.displaySize === "33 inches to 49 inches" && product.compatibleModel === "Smart Tv") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
      
                )
                }
                
                })
      
                const FlatscreensThirtyToFortyNineSmartTvPageLocation = FlatscreenTvs.map((product, index) => {
                  if ((product.displaySize === "33 inches to 49 inches" && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
        
                  )
                  }
                  
                  })

  
            const FlatscreensFiftyToSixtyPage = FlatscreenTvs.map((product, index) => {
              if (product.displaySize === "50 inches to 69 inches" && product.functions === "Flat") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })
  
            const FlatscreensFiftyToSixtyPageLocation = FlatscreenTvs.map((product, index) => {
              if ((product.displaySize === "50 inches to 69 inches" && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                 || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                 || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                 || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                  && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })
  
            const FlatscreensFiftyToSixtyCurvedPage = FlatscreenTvs.map((product, index) => {
              if (product.displaySize === "50 inches to 69 inches" && product.functions === "Curved") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
              )
              }
              
              })
  
              const FlatscreensFiftyToSixtyCurvedPageLocation = FlatscreenTvs.map((product, index) => {
                if ((product.displaySize === "50 inches to 69 inches" && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                )
                }
                
                })

                const FlatscreensFiftyToSixtySmartTvPage = FlatscreenTvs.map((product, index) => {
                  if (product.displaySize === "50 inches to 69 inches" && product.compatibleModel === "Smart Tv") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
                  )
                  }
                  
                  })
      
                  const FlatscreensFiftyToSixtySmartTvPageLocation = FlatscreenTvs.map((product, index) => {
                    if ((product.displaySize === "50 inches to 69 inches" && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                    )
                    }
                    
                    })

  
            const FlatscreensSeventyUpPage = FlatscreenTvs.map((product, index) => {
              if (product.displaySize === "70 inches & Up" && product.functions === "Flat") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })
  
              const FlatscreensSeventyUpPageLocation = FlatscreenTvs.map((product, index) => {
                if ((product.displaySize === "70 inches & Up" && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
    
                )
                }
                
                })
  
              const FlatscreensSeventyUpCurvedPage = FlatscreenTvs.map((product, index) => {
                if (product.displaySize === "70 inches & Up" && product.functions === "Curved") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })
  
                const FlatscreensSeventyUpCurvedPageLocation = FlatscreenTvs.map((product, index) => {
                  if ((product.displaySize === "70 inches & Up" && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
    
                  )
                  }
                  
                  })

                  const FlatscreensSeventyUpSmartTvPage = FlatscreenTvs.map((product, index) => {
                    if (product.displaySize === "70 inches & Up" && product.compatibleModel === "Smart Tv") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
      
                    )
                    }
                    
                    })
      
                    const FlatscreensSeventyUpSmartTvPageLocation = FlatscreenTvs.map((product, index) => {
                      if ((product.displaySize === "70 inches & Up" && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
        
                      )
                      }
                      
                      })


              const FlatscreensSamsungThirtyTwoPage = SamsungTvs.map((product, index) => {
                    if ((product.displaySize === "32 inches & Under" && product.brand === "Samsung") && product.functions === "Flat") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
      
                    )
                    }
                    
                    })
                  
              const FlatscreensSamsungThirtyTwoPageLocation = SamsungTvs.map((product, index) => {
                if (((product.displaySize === "32 inches & Under" && product.brand === "Samsung") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })

              const FlatscreensSamsungThirtyTwoCurvedPage = SamsungTvs.map((product, index) => {
                if ((product.displaySize === "32 inches & Under" && product.brand === "Samsung") && product.functions === "Curved") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const FlatscreensSamsungThirtyTwoCurvedPageLocation = SamsungTvs.map((product, index) => {
                  if (((product.displaySize === "32 inches & Under" && product.brand === "Samsung") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
  
                  )
                  }
                  
                  })

                  const FlatscreensSamsungThirtyTwoSmartTvPage = SamsungTvs.map((product, index) => {
                    if ((product.displaySize === "32 inches & Under" && product.brand === "Samsung") && product.compatibleModel === "Smart Tv") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
    
                    )
                    }
                    
                    })
    
                    const FlatscreensSamsungThirtyTwoSmartTvPageLocation = SamsungTvs.map((product, index) => {
                      if (((product.displaySize === "32 inches & Under" && product.brand === "Samsung") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
      
                      )
                      }
                      
                      })

        
              const FlatscreensSamsungThirtyToFortyNinePage = SamsungTvs.map((product, index) => {
                if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Samsung") && product.functions === "Flat") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const FlatscreensSamsungThirtyToFortyNinePageLocation = SamsungTvs.map((product, index) => {
                  if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Samsung") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
  
                  )
                  }
                  
                  })

                const FlatscreensSamsungThirtyToFortyNineCurvedPage = SamsungTvs.map((product, index) => {
                  if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Samsung") && product.functions === "Curved") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />

                  )
                  }
                  
                  })

                  const FlatscreensSamsungThirtyToFortyNineCurvedPageLocation = SamsungTvs.map((product, index) => {
                    if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Samsung") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
  
                    )
                    }
                    
                    })

                    const FlatscreensSamsungThirtyToFortyNineSmartTvPage = SamsungTvs.map((product, index) => {
                      if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Samsung") && product.compatibleModel === "Smart Tv") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
    
                      )
                      }
                      
                      })
    
                      const FlatscreensSamsungThirtyToFortyNineSmartTvPageLocation = SamsungTvs.map((product, index) => {
                        if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Samsung") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
      
                        )
                        }
                        
                        })

        
                const FlatscreensSamsungFiftyToSixtyPage = SamsungTvs.map((product, index) => {
                  if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Samsung") && product.functions === "Flat") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />

                  )
                  }
                  
                  })

                  const FlatscreensSamsungFiftyToSixtyPageLocation = SamsungTvs.map((product, index) => {
                    if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Samsung") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
  
                    )
                    }
                    
                    })

                  const FlatscreensSamsungFiftyToSixtyCurvedPage = SamsungTvs.map((product, index) => {
                    if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Samsung") && product.functions === "Curved") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />

                    )
                    }
                    
                    })

                    const FlatscreensSamsungFiftyToSixtyCurvedPageLocation = SamsungTvs.map((product, index) => {
                      if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Samsung") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
  
                      )
                      }
                      
                      })

                      const FlatscreensSamsungFiftyToSixtySmartTvPage = SamsungTvs.map((product, index) => {
                        if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Samsung") && product.compatibleModel === "Smart Tv") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
    
                        )
                        }
                        
                        })
    
                        const FlatscreensSamsungFiftyToSixtySmartTvPageLocation = SamsungTvs.map((product, index) => {
                          if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Samsung") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
      
                          )
                          }
                          
                          })

        
                  const FlatscreensSamsungSeventyUpPage = SamsungTvs.map((product, index) => {
                    if ((product.displaySize === "70 inches & Up" && product.brand === "Samsung") && product.functions === "Flat") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />

                    )
                    }
                    
                    })

                    const FlatscreensSamsungSeventyUpPageLocation = SamsungTvs.map((product, index) => {
                      if (((product.displaySize === "70 inches & Up" && product.brand === "Samsung") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
  
                      )
                      }
                      
                      })
                      
                    const FlatscreensSamsungSeventyUpCurvedPage = SamsungTvs.map((product, index) => {
                      if ((product.displaySize === "70 inches & Up" && product.brand === "Samsung") && product.functions === "Curved") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />

                      )
                      }
                      
                      })

                      const FlatscreensSamsungSeventyUpCurvedPageLocation = SamsungTvs.map((product, index) => {
                        if (((product.displaySize === "70 inches & Up" && product.brand === "Samsung") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
  
                        )
                        }
                        
                        })

                        const FlatscreensSamsungSeventyUpSmartTvPage = SamsungTvs.map((product, index) => {
                          if ((product.displaySize === "70 inches & Up" && product.brand === "Samsung") && product.compatibleModel === "Smart Tv") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
    
                          )
                          }
                          
                          })
    
                          const FlatscreensSamsungSeventyUpSmartTvPageLocation = SamsungTvs.map((product, index) => {
                            if (((product.displaySize === "70 inches & Up" && product.brand === "Samsung") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
      
                            )
                            }
                            
                            })


                            const FlatscreensHisenseThirtyTwoPage = HisenseTvs.map((product, index) => {
                              if ((product.displaySize === "32 inches & Under" && product.brand === "Hisense") && product.functions === "Flat") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />

                              )
                              }
                              
                              })

                              const FlatscreensHisenseThirtyTwoPageLocation = HisenseTvs.map((product, index) => {
                                if (((product.displaySize === "32 inches & Under" && product.brand === "Hisense") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true))) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                )
                                }
                                
                                })

                              const FlatscreensHisenseThirtyTwoCurvedPage = HisenseTvs.map((product, index) => {
                                if ((product.displaySize === "32 inches & Under" && product.brand === "Hisense") && product.functions === "Curved") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />

                                )
                                }
                                
                                })

                                const FlatscreensHisenseThirtyTwoCurvedPageLocation = HisenseTvs.map((product, index) => {
                                  if (((product.displaySize === "32 inches & Under" && product.brand === "Hisense") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                   && product.Gobabis === true))) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                  )
                                  }
                                  
                                  })

                                  const FlatscreensHisenseThirtyTwoSmartTvPage = HisenseTvs.map((product, index) => {
                                    if ((product.displaySize === "32 inches & Under" && product.brand === "Hisense") && product.compatibleModel === "Smart Tv") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
    
                                    )
                                    }
                                    
                                    })
    
                                    const FlatscreensHisenseThirtyTwoSmartTvPageLocation = HisenseTvs.map((product, index) => {
                                      if (((product.displaySize === "32 inches & Under" && product.brand === "Hisense") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
      
                                      )
                                      }
                                      
                                      })

                        
                              const FlatscreensHisenseThirtyToFortyNinePage = HisenseTvs.map((product, index) => {
                                if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Hisense") && product.functions === "Flat") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />

                                )
                                }
                                
                                })

                                const FlatscreensHisenseThirtyToFortyNinePageLocation = HisenseTvs.map((product, index) => {
                                  if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Hisense") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                   && product.Gobabis === true))) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                  )
                                  }
                                  
                                  })

                                const FlatscreensHisenseThirtyToFortyNineCurvedPage = HisenseTvs.map((product, index) => {
                                  if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Hisense") && product.functions === "Curved") {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />

                                  )
                                  }
                                  
                                  })

                                  const FlatscreensHisenseThirtyToFortyNineCurvedPageLocation = HisenseTvs.map((product, index) => {
                                    if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Hisense") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                     && product.Gobabis === true))) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                    )
                                    }
                                    
                                    })

                                    const FlatscreensHisenseThirtyToFortyNineSmartTvPage = HisenseTvs.map((product, index) => {
                                      if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Hisense") && product.compatibleModel === "Smart Tv") {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
    
                                      )
                                      }
                                      
                                      })
    
                                      const FlatscreensHisenseThirtyToFortyNineSmartTvPageLocation = HisenseTvs.map((product, index) => {
                                        if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Hisense") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                         && product.Gobabis === true))) {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
      
                                        )
                                        }
                                        
                                        })

                        
                                const FlatscreensHisenseFiftyToSixtyPage = HisenseTvs.map((product, index) => {
                                  if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Hisense") && product.functions === "Flat") {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />

                                  )
                                  }
                                  
                                  })

                                  const FlatscreensHisenseFiftyToSixtyPageLocation = HisenseTvs.map((product, index) => {
                                    if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Hisense") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                     && product.Gobabis === true))) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                    )
                                    }
                                    
                                    })

                                  const FlatscreensHisenseFiftyToSixtyCurvedPage = HisenseTvs.map((product, index) => {
                                    if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Hisense") && product.functions === "Curved") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />

                                    )
                                    }
                                    
                                    })

                                    const FlatscreensHisenseFiftyToSixtyCurvedPageLocation = HisenseTvs.map((product, index) => {
                                      if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Hisense") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                      )
                                      }
                                      
                                      })

                                      const FlatscreensHisenseFiftyToSixtySmartTvPage = HisenseTvs.map((product, index) => {
                                        if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Hisense") && product.compatibleModel === "Smart Tv") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
    
                                        )
                                        }
                                        
                                        })
    
                                        const FlatscreensHisenseFiftyToSixtySmartTvPageLocation = HisenseTvs.map((product, index) => {
                                          if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Hisense") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
      
                                          )
                                          }
                                          
                                          })

                        
                                  const FlatscreensHisenseSeventyUpPage = HisenseTvs.map((product, index) => {
                                    if ((product.displaySize === "70 inches & Up" && product.brand === "Hisense") && product.functions === "Flat") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />

                                    )
                                    }
                                    
                                    })

                                    const FlatscreensHisenseSeventyUpPageLocation = HisenseTvs.map((product, index) => {
                                      if (((product.displaySize === "70 inches & Up" && product.brand === "Hisense") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                      )
                                      }
                                      
                                      })

                                    const FlatscreensHisenseSeventyUpCurvedPage = HisenseTvs.map((product, index) => {
                                      if ((product.displaySize === "70 inches & Up" && product.brand === "Hisense") && product.functions === "Curved") {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />

                                      )
                                      }
                                      
                                      })

                                      const FlatscreensHisenseSeventyUpCurvedPageLocation = HisenseTvs.map((product, index) => {
                                        if (((product.displaySize === "70 inches & Up" && product.brand === "Hisense") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                         && product.Gobabis === true))) {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                        )
                                        }
                                        
                                        })

                                        const FlatscreensHisenseSeventyUpSmartTvPage = HisenseTvs.map((product, index) => {
                                          if ((product.displaySize === "70 inches & Up" && product.brand === "Hisense") && product.compatibleModel === "Smart Tv") {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
    
                                          )
                                          }
                                          
                                          })
    
                                          const FlatscreensHisenseSeventyUpSmartTvPageLocation = HisenseTvs.map((product, index) => {
                                            if (((product.displaySize === "70 inches & Up" && product.brand === "Hisense") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                             && product.Gobabis === true))) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
      
                                            )
                                            }
                                            
                                            })


                                    const FlatscreensSonyThirtyTwoPage = SonyTvs.map((product, index) => {
                                      if ((product.displaySize === "32 inches & Under" && product.brand === "Sony") && product.functions === "Flat") {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />

                                      )
                                      }
                                      
                                      })

                                      const FlatscreensSonyThirtyTwoPageLocation = SonyTvs.map((product, index) => {
                                        if (((product.displaySize === "32 inches & Under" && product.brand === "Sony") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                         && product.Gobabis === true))) {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                        )
                                        }
                                        
                                        })

                                      const FlatscreensSonyThirtyTwoCurvedPage = SonyTvs.map((product, index) => {
                                        if ((product.displaySize === "32 inches & Under" && product.brand === "Sony") && product.functions === "Curved") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />

                                        )
                                        }
                                        
                                        })

                                        const FlatscreensSonyThirtyTwoCurvedPageLocation = SonyTvs.map((product, index) => {
                                          if (((product.displaySize === "32 inches & Under" && product.brand === "Sony") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
  
                                          )
                                          }
                                          
                                          })

                                          const FlatscreensSonyThirtyTwoSmartTvPage = SonyTvs.map((product, index) => {
                                            if ((product.displaySize === "32 inches & Under" && product.brand === "Sony") && product.compatibleModel === "Smart Tv") {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
    
                                            )
                                            }
                                            
                                            })
    
                                            const FlatscreensSonyThirtyTwoSmartTvPageLocation = SonyTvs.map((product, index) => {
                                              if (((product.displaySize === "32 inches & Under" && product.brand === "Sony") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                               && product.Gobabis === true))) {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />
      
                                              )
                                              }
                                              
                                              })

                                
                                      const FlatscreensSonyThirtyToFortyNinePage = SonyTvs.map((product, index) => {
                                        if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Sony") && product.functions === "Flat") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />

                                        )
                                        }
                                        
                                        })

                                        const FlatscreensSonyThirtyToFortyNinePageLocation = SonyTvs.map((product, index) => {
                                          if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Sony") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
  
                                          )
                                          }
                                          
                                          })

                                        const FlatscreensSonyThirtyToFortyNineCurvedPage = SonyTvs.map((product, index) => {
                                          if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Sony") && product.functions === "Curved") {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />

                                          )
                                          }
                                          
                                          })

                                          const FlatscreensSonyThirtyToFortyNineCurvedPageLocation = SonyTvs.map((product, index) => {
                                            if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Sony") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                             && product.Gobabis === true))) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
  
                                            )
                                            }
                                            
                                            })

                                            const FlatscreensSonyThirtyToFortyNineSmartTvPage = SonyTvs.map((product, index) => {
                                              if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Sony") && product.compatibleModel === "Smart Tv") {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />
    
                                              )
                                              }
                                              
                                              })
    
                                              const FlatscreensSonyThirtyToFortyNineSmartTvPageLocation = SonyTvs.map((product, index) => {
                                                if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Sony") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                 && product.Gobabis === true))) {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
      
                                                )
                                                }
                                                
                                                })



                                
                                        const FlatscreensSonyFiftyToSixtyPage = SonyTvs.map((product, index) => {
                                          if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Sony") && product.functions === "Flat") {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />

                                          )
                                          }
                                          
                                          })

                                          const FlatscreensSonyFiftyToSixtyPageLocation = SonyTvs.map((product, index) => {
                                            if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Sony") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                             && product.Gobabis === true))) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
  
                                            )
                                            }
                                            
                                            })

                                          const FlatscreensSonyFiftyToSixtyCurvedPage = SonyTvs.map((product, index) => {
                                            if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Sony") && product.functions === "Curved") {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />

                                            )
                                            }
                                            
                                            })

                                            const FlatscreensSonyFiftyToSixtyCurvedPageLocation = SonyTvs.map((product, index) => {
                                              if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Sony") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                               && product.Gobabis === true))) {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />
  
                                              )
                                              }
                                              
                                              })

                                              const FlatscreensSonyFiftyToSixtySmartTvPage = SonyTvs.map((product, index) => {
                                                if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Sony") && product.compatibleModel === "Smart Tv") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
    
                                                )
                                                }
                                                
                                                })
    
                                                const FlatscreensSonyFiftyToSixtySmartTvPageLocation = SonyTvs.map((product, index) => {
                                                  if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Sony") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                   && product.Gobabis === true))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
      
                                                  )
                                                  }
                                                  
                                                  })

                                
                                          const FlatscreensSonySeventyUpPage = SonyTvs.map((product, index) => {
                                            if ((product.displaySize === "70 inches & Up" && product.brand === "Sony") && product.functions === "Flat") {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />

                                            )
                                            }
                                            
                                            })

                                            const FlatscreensSonySeventyUpPageLocation = SonyTvs.map((product, index) => {
                                              if (((product.displaySize === "70 inches & Up" && product.brand === "Sony") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                               && product.Gobabis === true))) {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />
  
                                              )
                                              }
                                              
                                              })

                                            const FlatscreensSonySeventyUpCurvedPage = SonyTvs.map((product, index) => {
                                              if ((product.displaySize === "70 inches & Up" && product.brand === "Sony") && product.functions === "Curved") {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />

                                              )
                                              }
                                              
                                              })

                                              const FlatscreensSonySeventyUpCurvedPageLocation = SonyTvs.map((product, index) => {
                                                if (((product.displaySize === "70 inches & Up" && product.brand === "Sony") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                 && product.Gobabis === true))) {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                                )
                                                }
                                                
                                                })

                                                const FlatscreensSonySeventyUpSmartTvPage = SonyTvs.map((product, index) => {
                                                  if ((product.displaySize === "70 inches & Up" && product.brand === "Sony") && product.compatibleModel === "Smart Tv") {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
    
                                                  )
                                                  }
                                                  
                                                  })
    
                                                  const FlatscreensSonySeventyUpSmartTvPageLocation = SonyTvs.map((product, index) => {
                                                    if (((product.displaySize === "70 inches & Up" && product.brand === "Sony") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                     && product.Gobabis === true))) {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
      
                                                    )
                                                    }
                                                    
                                                    })


                                            const FlatscreensTCLThirtyTwoPage = TCLTvs.map((product, index) => {
                                              if ((product.displaySize === "32 inches & Under" && product.brand === "TCL") && product.functions === "Flat") {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />

                                              )
                                              }
                                              
                                              })

                                              const FlatscreensTCLThirtyTwoPageLocation = TCLTvs.map((product, index) => {
                                                if (((product.displaySize === "32 inches & Under" && product.brand === "TCL") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                 && product.Gobabis === true))) {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                                )
                                                }
                                                
                                                })

                                              const FlatscreensTCLThirtyTwoCurvedPage = TCLTvs.map((product, index) => {
                                                if ((product.displaySize === "32 inches & Under" && product.brand === "TCL") && product.functions === "Curved") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />

                                                )
                                                }
                                                
                                                })

                                                const FlatscreensTCLThirtyTwoCurvedPageLocation = TCLTvs.map((product, index) => {
                                                  if (((product.displaySize === "32 inches & Under" && product.brand === "TCL") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                   && product.Gobabis === true))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                                  )
                                                  }
                                                  
                                                  })

                                                  const FlatscreensTCLThirtyTwoSmartTvPage = TCLTvs.map((product, index) => {
                                                    if ((product.displaySize === "32 inches & Under" && product.brand === "TCL") && product.compatibleModel === "Smart TV") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
    
                                                    )
                                                    }
                                                    
                                                    })
    
                                                    const FlatscreensTCLThirtyTwoSmartTvPageLocation = TCLTvs.map((product, index) => {
                                                      if (((product.displaySize === "32 inches & Under" && product.brand === "TCL") && product.compatibleModel === "Smart TV") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
      
                                                      )
                                                      }
                                                      
                                                      })

                                        
                                              const FlatscreensTCLThirtyToFortyNinePage = TCLTvs.map((product, index) => {
                                                if ((product.displaySize === "33 inches to 49 inches" && product.brand === "TCL") && product.functions === "Flat") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />

                                                )
                                                }
                                                
                                                })

                                                const FlatscreensTCLThirtyToFortyNinePageLocation = TCLTvs.map((product, index) => {
                                                  if (((product.displaySize === "33 inches to 49 inches" && product.brand === "TCL") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                   && product.Gobabis === true))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                                  )
                                                  }
                                                  
                                                  })

                                                const FlatscreensTCLThirtyToFortyNineCurvedPage = TCLTvs.map((product, index) => {
                                                  if ((product.displaySize === "33 inches to 49 inches" && product.brand === "TCL") && product.functions === "Curved") {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />

                                                  )
                                                  }
                                                  
                                                  })

                                                  const FlatscreensTCLThirtyToFortyNineCurvedPageLocation = TCLTvs.map((product, index) => {
                                                    if (((product.displaySize === "33 inches to 49 inches" && product.brand === "TCL") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                     && product.Gobabis === true))) {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                                    )
                                                    }
                                                    
                                                    })

                                                    const FlatscreensTCLThirtyToFortyNineSmartTvPage = TCLTvs.map((product, index) => {
                                                      if ((product.displaySize === "33 inches to 49 inches" && product.brand === "TCL") && product.compatibleModel === "Smart Tv") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
    
                                                      )
                                                      }
                                                      
                                                      })
    
                                                      const FlatscreensTCLThirtyToFortyNineSmartTvPageLocation = TCLTvs.map((product, index) => {
                                                        if (((product.displaySize === "33 inches to 49 inches" && product.brand === "TCL") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
      
                                                        )
                                                        }
                                                        
                                                        })

                                        
                                                const FlatscreensTCLFiftyToSixtyPage = TCLTvs.map((product, index) => {
                                                  if ((product.displaySize === "50 inches to 69 inches" && product.brand === "TCL") && product.functions === "Flat") {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />

                                                  )
                                                  }
                                                  
                                                  })

                                                  const FlatscreensTCLFiftyToSixtyPageLocation = TCLTvs.map((product, index) => {
                                                    if (((product.displaySize === "50 inches to 69 inches" && product.brand === "TCL") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                     && product.Gobabis === true))) {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                                    )
                                                    }
                                                    
                                                    })

                                                  const FlatscreensTCLFiftyToSixtyCurvedPage = TCLTvs.map((product, index) => {
                                                    if ((product.displaySize === "50 inches to 69 inches" && product.brand === "TCL") && product.functions === "Curved") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                    )
                                                    }
                                                    
                                                    })

                                                    const FlatscreensTCLFiftyToSixtyCurvedPageLocation = TCLTvs.map((product, index) => {
                                                      if (((product.displaySize === "50 inches to 69 inches" && product.brand === "TCL") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                      )
                                                      }
                                                      
                                                      })

                                                      const FlatscreensTCLFiftyToSixtySmartTvPage = TCLTvs.map((product, index) => {
                                                        if ((product.displaySize === "50 inches to 69 inches" && product.brand === "TCL") && product.compatibleModel === "Smart Tv") {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
    
                                                        )
                                                        }
                                                        
                                                        })
    
                                                        const FlatscreensTCLFiftyToSixtySmartTvPageLocation = TCLTvs.map((product, index) => {
                                                          if (((product.displaySize === "50 inches to 69 inches" && product.brand === "TCL") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                           && product.Gobabis === true))) {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
      
                                                          )
                                                          }
                                                          
                                                          })

                                        
                                                  const FlatscreensTCLSeventyUpPage = TCLTvs.map((product, index) => {
                                                    if ((product.displaySize === "70 inches & Up" && product.brand === "TCL") && product.functions === "Flat") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                    )
                                                    }
                                                    
                                                    })

                                                    const FlatscreensTCLSeventyUpPageLocation = TCLTvs.map((product, index) => {
                                                      if (((product.displaySize === "70 inches & Up" && product.brand === "TCL") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                      )
                                                      }
                                                      
                                                      })

                                                    const FlatscreensTCLSeventyUpCurvedPage = TCLTvs.map((product, index) => {
                                                      if ((product.displaySize === "70 inches & Up" && product.brand === "TCL") && product.functions === "Curved") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                      )
                                                      }
                                                      
                                                      })

                                                      const FlatscreensTCLSeventyUpCurvedPageLocation = TCLTvs.map((product, index) => {
                                                        if (((product.displaySize === "70 inches & Up" && product.brand === "TCL") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                                        )
                                                        }
                                                        
                                                        })

                                                        const FlatscreensTCLSeventyUpSmartTvPage = TCLTvs.map((product, index) => {
                                                          if ((product.displaySize === "70 inches & Up" && product.brand === "TCL") && product.compatibleModel === "Smart Tv") {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
    
                                                          )
                                                          }
                                                          
                                                          })
    
                                                          const FlatscreensTCLSeventyUpSmartTvPageLocation = TCLTvs.map((product, index) => {
                                                            if (((product.displaySize === "70 inches & Up" && product.brand === "TCL") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                             && product.Gobabis === true))) {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />
      
                                                            )
                                                            }
                                                            
                                                            })


                                                            const FlatscreensOtherThirtyTwoPage = OtherTvs.map((product, index) => {
                                                              if ((product.displaySize === "32 inches & Under" && product.seriesName === "Unlisted tv") && product.functions === "Flat") {
                                                              return (
                                                                <ProductCart key={index} UserData={UserData} product={product} />

                                                              )
                                                              }
                                                              
                                                              })

                                                              const FlatscreensOtherThirtyTwoPageLocation = OtherTvs.map((product, index) => {
                                                                if (((product.displaySize === "32 inches & Under" && product.seriesName === "Unlisted tv") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                 && product.Gobabis === true))) {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                                                )
                                                                }
                                                                
                                                                })

                                                              const FlatscreensOtherThirtyTwoCurvedPage = OtherTvs.map((product, index) => {
                                                                if ((product.displaySize === "32 inches & Under" && product.seriesName === "Unlisted tv") && product.functions === "Curved") {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />

                                                                )
                                                                }
                                                                
                                                                })

                                                                const FlatscreensOtherThirtyTwoCurvedPageLocation = OtherTvs.map((product, index) => {
                                                                  if (((product.displaySize === "32 inches & Under" && product.seriesName === "Unlisted tv") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                   && product.Gobabis === true))) {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                                                  )
                                                                  }
                                                                  
                                                                  })

                                                                  const FlatscreensOtherThirtyTwoSmartTvPage = OtherTvs.map((product, index) => {
                                                                    if ((product.displaySize === "32 inches & Under" && product.seriesName === "Unlisted tv") && product.compatibleModel === "Smart Tv") {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
    
                                                                    )
                                                                    }
                                                                    
                                                                    })
    
                                                                    const FlatscreensOtherThirtyTwoSmartTvPageLocation = OtherTvs.map((product, index) => {
                                                                      if (((product.displaySize === "32 inches & Under" && product.seriesName === "Unlisted tv") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                       && product.Gobabis === true))) {
                                                                      return (
                                                                        <ProductCart key={index} UserData={UserData} product={product} />
      
                                                                      )
                                                                      }
                                                                      
                                                                      })

                                                        
                                                              const FlatscreensOtherThirtyToFortyNinePage = OtherTvs.map((product, index) => {
                                                                if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Unlisted tv") && product.functions === "Flat") {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />

                                                                )
                                                                }
                                                                
                                                                })

                                                                const FlatscreensOtherThirtyToFortyNinePageLocation = OtherTvs.map((product, index) => {
                                                                  if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Unlisted tv") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                   && product.Gobabis === true))) {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                                                  )
                                                                  }
                                                                  
                                                                  })

                                                                const FlatscreensOtherThirtyToFortyNineCurvedPage = OtherTvs.map((product, index) => {
                                                                  if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Unlisted tv") && product.functions === "Curved") {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />

                                                                  )
                                                                  }
                                                                  
                                                                  })

                                                                  const FlatscreensOtherThirtyToFortyNineCurvedPageLocation = OtherTvs.map((product, index) => {
                                                                    if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Unlisted tv") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                     && product.Gobabis === true))) {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                                                    )
                                                                    }
                                                                    
                                                                    })

                                                                    const FlatscreensOtherThirtyToFortyNineSmartTvPage = OtherTvs.map((product, index) => {
                                                                      if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Unlisted tv") && product.compatibleModel === "Smart Tv") {
                                                                      return (
                                                                        <ProductCart key={index} UserData={UserData} product={product} />
    
                                                                      )
                                                                      }
                                                                      
                                                                      })
    
                                                                      const FlatscreensOtherThirtyToFortyNineSmartTvPageLocation = OtherTvs.map((product, index) => {
                                                                        if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Unlisted tv") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                         && product.Gobabis === true))) {
                                                                        return (
                                                                          <ProductCart key={index} UserData={UserData} product={product} />
      
                                                                        )
                                                                        }
                                                                        
                                                                        })

                                                        
                                                                const FlatscreensOtherFiftyToSixtyPage = OtherTvs.map((product, index) => {
                                                                  if ((product.displaySize === "50 inches to 69 inches" && product.seriesName === "Unlisted tv" && product.functions === "Flat")) {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />

                                                                  )
                                                                  }
                                                                  
                                                                  })

                                                                  const FlatscreensOtherFiftyToSixtyPageLocation = OtherTvs.map((product, index) => {
                                                                    if (((product.displaySize === "50 inches to 69 inches" && product.seriesName === "Unlisted tv") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                     && product.Gobabis === true))) {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                                                    )
                                                                    }
                                                                    
                                                                    })

                                                                  const FlatscreensOtherFiftyToSixtyCurvedPage = OtherTvs.map((product, index) => {
                                                                    if ((product.displaySize === "50 inches to 69 inches" && product.seriesName === "Unlisted tv" && product.functions === "Curved")) {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                                    )
                                                                    }
                                                                    
                                                                    })

                                                                    const FlatscreensOtherFiftyToSixtyCurvedPageLocation = OtherTvs.map((product, index) => {
                                                                      if (((product.displaySize === "50 inches to 69 inches" && product.seriesName === "Unlisted tv") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                       && product.Gobabis === true))) {
                                                                      return (
                                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                                      )
                                                                      }
                                                                      
                                                                      })

                                                                      const FlatscreensOtherFiftyToSixtySmartTvPage = OtherTvs.map((product, index) => {
                                                                        if ((product.displaySize === "50 inches to 69 inches" && product.seriesName === "Unlisted tv" && product.compatibleModel === "Smart Tv")) {
                                                                        return (
                                                                          <ProductCart key={index} UserData={UserData} product={product} />
    
                                                                        )
                                                                        }
                                                                        
                                                                        })
    
                                                                        const FlatscreensOtherFiftyToSixtySmartTvPageLocation = OtherTvs.map((product, index) => {
                                                                          if (((product.displaySize === "50 inches to 69 inches" && product.seriesName === "Unlisted tv") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                           && product.Gobabis === true))) {
                                                                          return (
                                                                            <ProductCart key={index} UserData={UserData} product={product} />
      
                                                                          )
                                                                          }
                                                                          
                                                                          })

                                                        
                                                                  const FlatscreensOtherSeventyUpPage = OtherTvs.map((product, index) => {
                                                                    if ((product.displaySize === "70 inches & Up" && product.seriesName === "Unlisted tv") && product.functions === "Flat") {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                                    )
                                                                    }
                                                                    
                                                                    })

                                                                    const FlatscreensOtherSeventyUpPageLocation = OtherTvs.map((product, index) => {
                                                                      if (((product.displaySize === "70 inches & Up" && product.seriesName === "Unlisted tv") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                       && product.Gobabis === true))) {
                                                                      return (
                                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                                      )
                                                                      }
                                                                      
                                                                      })

                                                                    const FlatscreensOtherSeventyUpCurvedPage = OtherTvs.map((product, index) => {
                                                                      if ((product.displaySize === "70 inches & Up" && product.seriesName === "Unlisted tv") && product.functions === "Curved") {
                                                                      return (
                                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                                      )
                                                                      }
                                                                      
                                                                      })

                                                                      const FlatscreensOtherSeventyUpCurvedPageLocation = OtherTvs.map((product, index) => {
                                                                        if (((product.displaySize === "70 inches & Up" && product.seriesName === "Unlisted tv") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                         && product.Gobabis === true))) {
                                                                        return (
                                                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                                                        )
                                                                        }
                                                                        
                                                                        })

                                                                        const FlatscreensOtherSeventyUpSmartTvPage = OtherTvs.map((product, index) => {
                                                                          if ((product.displaySize === "70 inches & Up" && product.seriesName === "Unlisted tv") && product.compatibleModel === "Smart Tv") {
                                                                          return (
                                                                            <ProductCart key={index} UserData={UserData} product={product} />
    
                                                                          )
                                                                          }
                                                                          
                                                                          })
    
                                                                          const FlatscreensOtherSeventyUpSmartTvPageLocation = OtherTvs.map((product, index) => {
                                                                            if (((product.displaySize === "70 inches & Up" && product.seriesName === "Unlisted tv") && product.compatibleModel === "Smart Tv") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
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
    <div style={{ display: 'block', background: "#c7e9f9"}}>
    {SearchTerms === "" ?
  <div className='Visited_container-wrapper'>
  <div className='Visited_page-banner'>
    <div className='Category_selectTabs_box'>
    <div>
      <span className='Category_selectTabs_span'>TVs</span>
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
  <div className={toggleBrands ===0 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {BrandCategory(0); ToggleSelectTabs(1); ScreenFormDCategory(1)}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/31sXhw7skNS._AC_UF894,1000_QL80_.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>All TVs</span>
  </div>
    
   </div>

   <div className={toggleBrands ===1 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {BrandCategory(1); ToggleSelectTabs(1); ScreenFormDCategory(1); GetSamsung()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/71bdeNqyARL._AC_UF1000,1000_QL80_.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Samsung</span>
  </div>
    
   </div>

   <div className={toggleBrands ===2 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {BrandCategory(2); ToggleSelectTabs(1); ScreenFormDCategory(1); GetHisense()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/912yXOrPu6L._AC_UF1000,1000_QL80_.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Hisense</span>
  </div>
   </div>

   <div className={toggleBrands ===3 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {BrandCategory(3); ToggleSelectTabs(1); ScreenFormDCategory(1); GetSony()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/81KbyIky10L._AC_UF894,1000_QL80_.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Sony</span>
  </div>
   </div>

   <div className={toggleBrands ===4 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {BrandCategory(4); ToggleSelectTabs(1); ScreenFormDCategory(1); GetTCL()}}
  ><div>
    <img src="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6423/6423898_sd.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>TCL</span>
  </div>
   </div>

   <div className={toggleBrands ===5 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {BrandCategory(5); ToggleSelectTabs(1); ScreenFormDCategory(1); GetOther()}}
  ><div>
    <img src="https://wcctv.co.za/wp-content/uploads/2021/04/STL-55U20UM.png"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Other Brands</span>
  </div>
   </div>


</Carousel>

    </div>

    <div className='Select_tabs_organise'>
    <div className={SelectTabs ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(1)}} >
            <span>32 inch</span>
          </div>
    <div className={SelectTabs ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(2)}} >
            <span>33 inch</span>
          </div>
          <div className={SelectTabs ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(3)}} >
            <span>50 inch</span>
          </div>
    <div className={SelectTabs ===4 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(4)}} >
            <span>70 inch</span>
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

    <div className='My_location_items_choose_box'>
    <div 
    className={toggleScreenFormDesktop === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {ScreenFormDCategory(1)}}>
      <span>All</span>
    </div>
    <div 
    className={toggleScreenFormDesktop === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {ScreenFormDCategory(2)}}>
      <span>Smart</span>
    </div>
    <div 
    className={toggleScreenFormDesktop === 3 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {ScreenFormDCategory(3)}}>
      <span>Curved</span>
    </div>
    </div>

  </div>


{/* All Flatscreens */}
{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyTwoPage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyToFortyNinePage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensFiftyToSixtyPage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSeventyUpPage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyTwoPageLocation}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyToFortyNinePageLocation}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensFiftyToSixtyPageLocation}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSeventyUpPageLocation}
</div>
}


{/* Samsung Tvs  */}
{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyTwoPage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyToFortyNinePage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungFiftyToSixtyPage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungSeventyUpPage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyTwoPageLocation}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyToFortyNinePageLocation}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungFiftyToSixtyPageLocation}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungSeventyUpPageLocation}
</div>
}


{/* Hisense Tvs */}
{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyTwoPage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyToFortyNinePage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseFiftyToSixtyPage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseSeventyUpPage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyTwoPageLocation}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyToFortyNinePageLocation}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseFiftyToSixtyPageLocation}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseSeventyUpPageLocation}
</div>
}


{/* Sony Tvs */}
{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyTwoPage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyToFortyNinePage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyFiftyToSixtyPage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonySeventyUpPage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyTwoPageLocation}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyToFortyNinePageLocation}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyFiftyToSixtyPageLocation}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonySeventyUpPageLocation}
</div>
}


{/* TCL Tvs */}
{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyTwoPage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyToFortyNinePage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLFiftyToSixtyPage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLSeventyUpPage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyTwoPageLocation}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyToFortyNinePageLocation}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLFiftyToSixtyPageLocation}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLSeventyUpPageLocation}
</div>
}


{/* Other Tvs */}
{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyTwoPage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyToFortyNinePage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherFiftyToSixtyPage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherSeventyUpPage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyTwoPageLocation}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyToFortyNinePageLocation}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherFiftyToSixtyPageLocation}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherSeventyUpPageLocation}
</div>
}


{/* All Smart Tvs  */}
{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyTwoSmartTvPage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyToFortyNineSmartTvPage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensFiftyToSixtySmartTvPage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSeventyUpSmartTvPage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyTwoSmartTvPageLocation}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyToFortyNineSmartTvPageLocation}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensFiftyToSixtySmartTvPageLocation}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSeventyUpSmartTvPageLocation}
</div>
}


{/* Samsung Tvs  */}
{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyTwoSmartTvPage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyToFortyNineSmartTvPage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungFiftyToSixtySmartTvPage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungSeventyUpSmartTvPage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyTwoSmartTvPageLocation}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyToFortyNineSmartTvPageLocation}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungFiftyToSixtySmartTvPageLocation}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungSeventyUpSmartTvPageLocation}
</div>
}


{/* Hisense Tvs */}
{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyTwoSmartTvPage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyToFortyNineSmartTvPage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseFiftyToSixtySmartTvPage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseSeventyUpSmartTvPage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyTwoSmartTvPageLocation}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyToFortyNineSmartTvPageLocation}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseFiftyToSixtySmartTvPageLocation}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseSeventyUpSmartTvPageLocation}
</div>
}


{/* Sony Tvs */}
{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyTwoSmartTvPage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyToFortyNineSmartTvPage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyFiftyToSixtySmartTvPage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonySeventyUpSmartTvPage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyTwoSmartTvPageLocation}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyToFortyNineSmartTvPageLocation}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyFiftyToSixtySmartTvPageLocation}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonySeventyUpSmartTvPageLocation}
</div>
}


{/* TCL Tvs */}
{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyTwoSmartTvPage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyToFortyNineSmartTvPage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLFiftyToSixtySmartTvPage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLSeventyUpSmartTvPage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyTwoSmartTvPageLocation}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyToFortyNineSmartTvPageLocation}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLFiftyToSixtySmartTvPageLocation}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLSeventyUpSmartTvPageLocation}
</div>
}


{/* Other Tvs */}
{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyTwoSmartTvPage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyToFortyNineSmartTvPage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherFiftyToSixtySmartTvPage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherSeventyUpSmartTvPage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyTwoSmartTvPageLocation}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyToFortyNineSmartTvPageLocation}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherFiftyToSixtySmartTvPageLocation}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherSeventyUpSmartTvPageLocation}
</div>
}


{/* All Curved Tvs  */}
{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyTwoCurvedPage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyToFortyNineCurvedPage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensFiftyToSixtyCurvedPage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSeventyUpCurvedPage}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyTwoCurvedPageLocation}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensThirtyToFortyNineCurvedPageLocation}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensFiftyToSixtyCurvedPageLocation}
</div>
}

{FlatscreenTvs && FlatscreenTvs.length === undefined ?
  <></>
  :
  FlatscreenTvs && FlatscreenTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 0 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSeventyUpCurvedPageLocation}
</div>
}


{/* Samsung Tvs  */}
{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyTwoCurvedPage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyToFortyNineCurvedPage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungFiftyToSixtyCurvedPage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungSeventyUpCurvedPage}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyTwoCurvedPageLocation}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungThirtyToFortyNineCurvedPageLocation}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungFiftyToSixtyCurvedPageLocation}
</div>
}

{SamsungTvs && SamsungTvs.length === undefined ?
  <></>
  :
  SamsungTvs && SamsungTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 1 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSamsungSeventyUpCurvedPageLocation}
</div>
}


{/* Hisense Tvs */}
{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyTwoCurvedPage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyToFortyNineCurvedPage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseFiftyToSixtyCurvedPage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseSeventyUpCurvedPage}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyTwoCurvedPageLocation}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseThirtyToFortyNineCurvedPageLocation}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseFiftyToSixtyCurvedPageLocation}
</div>
}

{HisenseTvs && HisenseTvs.length === undefined ?
  <></>
  :
  HisenseTvs && HisenseTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 2 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensHisenseSeventyUpCurvedPageLocation}
</div>
}


{/* Sony Tvs */}
{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyTwoCurvedPage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyToFortyNineCurvedPage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyFiftyToSixtyCurvedPage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonySeventyUpCurvedPage}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyTwoCurvedPageLocation}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyThirtyToFortyNineCurvedPageLocation}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonyFiftyToSixtyCurvedPageLocation}
</div>
}

{SonyTvs && SonyTvs.length === undefined ?
  <></>
  :
  SonyTvs && SonyTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 3 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensSonySeventyUpCurvedPageLocation}
</div>
}


{/* TCL Tvs */}
{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyTwoCurvedPage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyToFortyNineCurvedPage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLFiftyToSixtyCurvedPage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLSeventyUpCurvedPage}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyTwoCurvedPageLocation}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLThirtyToFortyNineCurvedPageLocation}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLFiftyToSixtyCurvedPageLocation}
</div>
}

{TCLTvs && TCLTvs.length === undefined ?
  <></>
  :
  TCLTvs && TCLTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 4 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensTCLSeventyUpCurvedPageLocation}
</div>
}


{/* Other Tvs */}
{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyTwoCurvedPage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyToFortyNineCurvedPage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherFiftyToSixtyCurvedPage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherSeventyUpCurvedPage}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyTwoCurvedPageLocation}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherThirtyToFortyNineCurvedPageLocation}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherFiftyToSixtyCurvedPageLocation}
</div>
}

{OtherTvs && OtherTvs.length === undefined ?
  <></>
  :
  OtherTvs && OtherTvs.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleBrands === 5 ) && toggleScreenFormDesktop === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FlatscreensOtherSeventyUpCurvedPageLocation}
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

export default Flatscreens