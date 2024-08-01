import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import Carousel from "react-multi-carousel";
import { Empty } from 'antd';
import 'react-multi-carousel/lib/styles.css';

import '../../00Components/pages.css'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../../00Components/Cards/ProductCart/ProductCart'

function Laptops(props) {

  const [UserData, setUserData] = useState([])
  const [LaptopItems, setLaptopItems] = useState([])
  const [AcerLaptops, setAcerLaptops] = useState([])
  const [HPLaptops, setHPLaptops] = useState([])
  const [LenovoLaptops, setLenovoLaptops] = useState([])
  const [AsusLaptops, setAsusLaptops] = useState([])
  const [MacBookLaptops, setMacBookLaptops] = useState([])
  const [PeblLaptops, setPeblLaptops] = useState([])
  const [SurfaceLaptops, setSurfaceLaptops] = useState([])
  const [OtherLaptops, setOtherLaptops] = useState([])

  const [toggleMemoySizelaptop, settoggleMemoySizelaptop] = useState(1)
  const [SelectTabs, setSelectTabs] = useState(0)
  const [Products, setProducts] = useState([])
  const [ToggleLocation, setToggleLocation] = useState(false)
  const [IsLoading, setIsLoading] = useState(true)
  const [ToggleRamType, setToggleRamType] = useState(0)

  const [SearchTerms, setSearchTerms] = useState("")
  const [Skip, setSkip] = useState(0)
  const [Limit, setLimit] = useState(8)
  const [PostSize, setPostSize] = useState()
  const [searchResults, setSearchResults] = useState(false)
  
  const clickSearch = () => setSearchResults(!searchResults)
  
  const SetLocation = () => setToggleLocation(!ToggleLocation)

  const ToggleSelectTabs = (index) => {
    setSelectTabs(index);
  }  

  const MemoryLaptopCategory = (index) => {
    settoggleMemoySizelaptop(index);
  }

  const RamSelect = (index) => {
    setToggleRamType(index);
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
      product: "Laptop"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  setLaptopItems(response.data.products)
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

  useEffect(() => {

    if (props.user.search === undefined || props.user.search === "") {
      setSearchTerms("")
    } else if(props.user.search !== "" || props.user.search !== undefined) {
      const variables = {
        skip: 0,
        limit: Limit,
        filters: Filters,
        searchTerm: props.user.search
        }

      setSearchTerms(props.user.search)
      getProducts(variables)
    }

}, [props.user.search])


  const GetAcer = () => {
    const variable = {
      brand: "Acer"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setAcerLaptops(response.data.products)
    } else {
    }
    })
  }

  const GetHP = () => {
    const variable = {
      brand: "HP"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setHPLaptops(response.data.products)
    } else {
    }
    })
  }

  const GetLenovo = () => {
    const variable = {
      brand: "Lenovo"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setLenovoLaptops(response.data.products)
    } else {
    }
    })
  }

  const GetAsus = () => {
    const variable = {
      brand: "Asus"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setAsusLaptops(response.data.products)
    } else {
    }
    })
  }

  const GetMacBook = () => {
    const variable = {
      brand: "Apple"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setMacBookLaptops(response.data.products)
    } else {
    }
    })
  }

  const GetPebl = () => {
    const variable = {
      brand: "PEBL"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setPeblLaptops(response.data.products)
    } else {
    }
    })
  }

  const GetSurface = () => {
    const variable = {
      brand: "Surface"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setSurfaceLaptops(response.data.products)
    } else {
    }
    })
  }

  const GetOther = () => {
    const variable = {
      seriesName: "Other Laptops"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setOtherLaptops(response.data.products)
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

      
      const LaptopsFourGigPage = LaptopItems.map((product, index) => {
        if (product.ram === "4 GB") {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
    
        )
        }
        
        })
    
        const LaptopsFourGigPageLocation = LaptopItems.map((product, index) => {
          if (product.ram === "4 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true))) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
      
          )
          }
          
          })
    
        const LaptopsEightGigPage = LaptopItems.map((product, index) => {
          if (product.ram === "8 GB") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
    
          )
          }
          
          })
    
          const LaptopsEightGigPageLocation = LaptopItems.map((product, index) => {
            if (product.ram === "8 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
             && product.Gobabis === true))) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
      
            )
            }
            
            })
        
            const LaptopsSixteenGigPage = LaptopItems.map((product, index) => {
              if (product.ram !== "4 GB" && product.ram !== "8 GB") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
      
              )
              }
              
              })
    
            const LaptopsSixteenGigPageLocation = LaptopItems.map((product, index) => {
    
              if ((product.ram !== "4 GB" && product.ram !== "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
      
              )
              }
              
              })


            const LaptopsPEBLFourGigPage = PeblLaptops.map((product, index) => {
    
                if (product.ram === "4 GB") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
      
                )
                }
                
                })
    
            const LaptopsPEBLFourGigPageLocation = PeblLaptops.map((product, index) => {
    
              if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
    
              )
              }
              
              })
          
              const LaptopsPEBLEightGigPage = PeblLaptops.map((product, index) => {
          
                if (product.ram === "8 GB") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
    
                )
                }
                
                })
    
                const LaptopsPEBLEightGigPageLocation = PeblLaptops.map((product, index) => {
          
                  if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
      
                  )
                  }
                  
                  })
    
                const LaptopsPEBLSixteenGigPage = PeblLaptops.map((product, index) => {
          
                  if (product.ram !== "4 GB" && (product.ram !== "8 GB" 
                 )) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
    
                  )
                  }
                  
                  })
    
                  const LaptopsPEBLSixteenGigPageLocation = PeblLaptops.map((product, index) => {
          
                    if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                   )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
      
                    )
                    }
                    
                    })

    
            const LaptopsLenovoFourGigPage = LenovoLaptops.map((product, index) => {
    
                if (product.ram === "4 GB") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
      
                )
                }
                
                })
    
            const LaptopsLenovoFourGigPageLocation = LenovoLaptops.map((product, index) => {
    
              if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
    
              )
              }
              
              })
          
              const LaptopsLenovoEightGigPage = LenovoLaptops.map((product, index) => {
          
                if (product.ram === "8 GB") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
    
                )
                }
                
                })
    
                const LaptopsLenovoEightGigPageLocation = LenovoLaptops.map((product, index) => {
          
                  if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
      
                  )
                  }
                  
                  })
    
                const LaptopsLenovoSixteenGigPage = LenovoLaptops.map((product, index) => {
          
                  if (product.ram !== "4 GB" && (product.ram !== "8 GB" 
                 )) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
    
                  )
                  }
                  
                  })
    
                  const LaptopsLenovoSixteenGigPageLocation = LenovoLaptops.map((product, index) => {
          
                    if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                   )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
      
                    )
                    }
                    
                    })

    
                  const LaptopsAcerFourGigPage = AcerLaptops.map((product, index) => {
    
                    if (product.ram === "4 GB"
                   ) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
    
                    )
                    }
                    
                    })
    
                    const LaptopsAcerFourGigPageLocation = AcerLaptops.map((product, index) => {
    
                      if ((product.ram === "4 GB" 
                     ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
      
                      )
                      }
                      
                      })
                
                    const LaptopsAcerEightGigPage = AcerLaptops.map((product, index) => {
                
                      if (product.ram === "8 GB"
                     ) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
    
                      )
                      }
                      
                      })
    
                      const LaptopsAcerEightGigPageLocation = AcerLaptops.map((product, index) => {
                
                        if ((product.ram === "8 GB"
                       ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
      
                        )
                        }
                        
                        })
                    
                      const LaptopsAcerSixteenGigPage = AcerLaptops.map((product, index) => {
                
                        if (product.ram !== "4 GB" && (product.ram !== "8 GB" 
                       )) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
    
                        )
                        }
                        
                        })
    
                        const LaptopsAcerSixteenGigPageLocation = AcerLaptops.map((product, index) => {
                
                          if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                         )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
      
                          )
                          }
                          
                          })

    
                        const LaptopsHPFourGigPage = HPLaptops.map((product, index) => {
    
                          if (product.ram === "4 GB" 
                         ) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
    
                          )
                          }
                          
                          })
    
                          const LaptopsHPFourGigPageLocation = HPLaptops.map((product, index) => {
    
                            if ((product.ram === "4 GB" 
                           ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
      
                            )
                            }
                            
                            })
                      
                          const LaptopsHPEightGigPage = HPLaptops.map((product, index) => {
                      
                            if (product.ram === "8 GB"
                           ) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
    
                            )
                            }
                            
                            })
    
                            const LaptopsHPEightGigPageLocation = HPLaptops.map((product, index) => {
                      
                              if ((product.ram === "8 GB"
                             ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
      
                              )
                              }
                              
                              })
                          
                            const LaptopsHPSixteenGigPage = HPLaptops.map((product, index) => {
                      
                              if (product.ram !== "4 GB" && (product.ram !== "8 GB" 
                             )) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
    
                              )
                              }
                              
                              })
    
                              const LaptopsHPSixteenGigPageLocation = HPLaptops.map((product, index) => {
                      
                                if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                               )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true))) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
      
                                )
                                }
                                
                                })

    
                              const LaptopsAsusFourGigPage = AsusLaptops.map((product, index) => {
    
                                if (product.ram === "4 GB"
                               ) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
    
                                )
                                }
                                
                                })
    
                                const LaptopsAsusFourGigPageLocation = AsusLaptops.map((product, index) => {
    
                                  if ((product.ram === "4 GB"
                                 ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                   && product.Gobabis === true))) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
      
                                  )
                                  }
                                  
                                  })
                            
                                const LaptopsAsusEightGigPage = AsusLaptops.map((product, index) => {
                            
                                  if (product.ram === "8 GB" 
                                 ) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
    
                                  )
                                  }
                                  
                                  })
    
                                  const LaptopsAsusEightGigPageLocation = AsusLaptops.map((product, index) => {
                            
                                    if ((product.ram === "8 GB" 
                                   ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                     && product.Gobabis === true))) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
      
                                    )
                                    }
                                    
                                    })
                                
                                  const LaptopsAsusSixteenGigPage = AsusLaptops.map((product, index) => {
                            
                                    if (product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                   )) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
    
                                    )
                                    }
                                    
                                    })
    
                                    const LaptopsAsusSixteenGigPageLocation = AsusLaptops.map((product, index) => {
                            
                                      if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                     )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
      
                                      )
                                      }
                                      
                                      })


                                      const LaptopsSurfaceFourGigPage = SurfaceLaptops.map((product, index) => {
    
                                        if (product.ram === "4 GB"
                                       ) {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
            
                                        )
                                        }
                                        
                                        })
            
                                        const LaptopsSurfaceFourGigPageLocation = SurfaceLaptops.map((product, index) => {
            
                                          if ((product.ram === "4 GB"
                                         ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
              
                                          )
                                          }
                                          
                                          })
                                    
                                        const LaptopsSurfaceEightGigPage = SurfaceLaptops.map((product, index) => {
                                    
                                          if (product.ram === "8 GB" 
                                         ) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
            
                                          )
                                          }
                                          
                                          })
            
                                          const LaptopsSurfaceEightGigPageLocation = SurfaceLaptops.map((product, index) => {
                                    
                                            if ((product.ram === "8 GB" 
                                           ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                             && product.Gobabis === true))) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
              
                                            )
                                            }
                                            
                                            })
                                        
                                          const LaptopsSurfaceSixteenGigPage = SurfaceLaptops.map((product, index) => {
                                    
                                            if (product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                           )) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
            
                                            )
                                            }
                                            
                                            })
            
                                            const LaptopsSurfaceSixteenGigPageLocation = SurfaceLaptops.map((product, index) => {
                                    
                                              if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                             )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                               && product.Gobabis === true))) {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />
              
                                              )
                                              }
                                              
                                              })

    
                                                const LaptopsMacBookAirPage = MacBookLaptops.map((product, index) => {
    
                                                  if ((product.modelName === "MacBook Air") && product.ssd === "256 GB") {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
    
                                                  )
                                                  }
                                                  
                                                  })
    
                                                  const LaptopsMacBookAirPageLocation = MacBookLaptops.map((product, index) => {
    
                                                    if ((product.modelName === "MacBook Air" && product.ssd === "256 GB")  
                                                    && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                     && product.Gobabis === true))) {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
      
                                                    )
                                                    }
                                                    
                                                    })

                                              
                                                  const LaptopsMacBookAirMChipTwoHundredPage = MacBookLaptops.map((product, index) => {
                                              
                                                    if (product.modelName === "MacBook Air | M2 Chip" && product.ssd === "256 GB") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
    
                                                    )
                                                    }
                                                    
                                                    })
    
                                                    const LaptopsMacBookAirMChipTwoHundredPageLocation = MacBookLaptops.map((product, index) => {
                                              
                                                      if ((product.modelName === "MacBook Air | M2 Chip" && product.ssd === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
      
                                                      )
                                                      }
                                                      
                                                      })

                                                      const LaptopsMacBookAirMChipFiveHundredPage = MacBookLaptops.map((product, index) => {
                                              
                                                        if (product.modelName === "MacBook Air | M2 Chip" && product.ssd === "512 GB") {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
        
                                                        )
                                                        }
                                                        
                                                        })
        
                                                        const LaptopsMacBookAirMChipFiveHundredPageLocation = MacBookLaptops.map((product, index) => {
                                                  
                                                          if ((product.modelName === "MacBook Air | M2 Chip" && product.ssd === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                           && product.Gobabis === true))) {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
          
                                                          )
                                                          }
                                                          
                                                          })

                                                  
                                                    const LaptopsMacBookProMChipTwoHundredPage = MacBookLaptops.map((product, index) => {
                                              
                                                      if (product.modelName === "MacBook Pro | M2 Chip" && product.ssd === "256 GB") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
    
                                                      )
                                                      }
                                                      
                                                      })
    
                                                      const LaptopsMacBookProMChipTwoHundredPageLocation = MacBookLaptops.map((product, index) => {
                                              
                                                        if ((product.modelName === "MacBook Pro | M2 Chip" && product.ssd === "256 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
        
                                                        )
                                                        }
                                                        
                                                        })


                                                        const LaptopsMacBookProMChipFiveHundredPage = MacBookLaptops.map((product, index) => {
                                              
                                                          if (product.modelName === "MacBook Pro | M2 Chip" && product.ssd === "512 GB") {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
        
                                                          )
                                                          }
                                                          
                                                          })
        
                                                          const LaptopsMacBookProMChipFiveHundredPageLocation = MacBookLaptops.map((product, index) => {
                                                  
                                                            if ((product.modelName === "MacBook Pro | M2 Chip" && product.ssd === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                             && product.Gobabis === true))) {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />
            
                                                            )
                                                            }
                                                            
                                                            })


                                                            const LaptopsMacBookProMChipProFiveHundredPage = MacBookLaptops.map((product, index) => {
                                              
                                                              if (product.modelName === "MacBook Pro | M2 Pro" && product.ssd === "512 GB") {
                                                              return (
                                                                <ProductCart key={index} UserData={UserData} product={product} />
            
                                                              )
                                                              }
                                                              
                                                              })
            
                                                              const LaptopsMacBookProMChipProFiveHundredPageLocation = MacBookLaptops.map((product, index) => {
                                                      
                                                                if ((product.modelName === "MacBook Pro | M2 Pro" && product.ssd === "512 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                 && product.Gobabis === true))) {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                
                                                                )
                                                                }
                                                                
                                                                })


                                                                const LaptopsMacBookProMChipProTerabytePage = MacBookLaptops.map((product, index) => {
                                              
                                                                  if (product.modelName === "MacBook Pro | M2 Pro" && product.ssd === "1 TB") {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                
                                                                  )
                                                                  }
                                                                  
                                                                  })
                
                                                                  const LaptopsMacBookProMChipProTerabytePageLocation = MacBookLaptops.map((product, index) => {
                                                          
                                                                    if ((product.modelName === "MacBook Pro | M2 Pro" && product.ssd === "1 TB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                     && product.Gobabis === true))) {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                    
                                                                    )
                                                                    }
                                                                    
                                                                    })


    
    
                                                      const LaptopsOtherFourGigPage = OtherLaptops.map((product, index) => {
    
                                                        if (product.ram === "4 GB" 
                                                       ) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
    
                                                        )
                                                        }
                                                        
                                                        })
    
                                                        const LaptopsOtherFourGigPageLocation = OtherLaptops.map((product, index) => {
    
                                                          if ((product.ram === "4 GB" 
                                                         ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                           && product.Gobabis === true))) {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
      
                                                          )
                                                          }
                                                          
                                                          })
                                                    
                                                        const LaptopsOtherEightGigPage = OtherLaptops.map((product, index) => {
                                                    
                                                          if (product.ram === "8 GB"
                                                         ) {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
    
                                                          )
                                                          }
                                                          
                                                          })
    
                                                          const LaptopsOtherEightGigPageLocation = OtherLaptops.map((product, index) => {
                                                    
                                                            if ((product.ram === "8 GB" 
                                                           ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                             && product.Gobabis === true))) {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />
      
                                                            )
                                                            }
                                                            
                                                            })
                                                        
                                                          const LaptopsOtherSixteenGigPage = OtherLaptops.map((product, index) => {
                                                    
                                                            if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                                           ))) {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />
    
                                                            )
                                                            }
                                                            
                                                            })
    
                                                            const LaptopsOtherSixteenGigPageLocation = OtherLaptops.map((product, index) => {
                                                    
                                                              if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                                             )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                               && product.Gobabis === true))) {
                                                              return (
                                                                <ProductCart key={index} UserData={UserData} product={product} />
      
                                                              )
                                                              }
                                                              
                                                              })


                                                              const LaptopsPEBLFourGigPageDDRFour = PeblLaptops.map((product, index) => {
                                                            
                                                                if ((product.ram === "4 GB") && product.ramGeneration === "DDR4") {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                      
                                                                )
                                                                }
                                                                
                                                                })
                                                    
                                                            const LaptopsPEBLFourGigPageDDRFourLocation = PeblLaptops.map((product, index) => {
                                                    
                                                              if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                               && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                              return (
                                                                <ProductCart key={index} UserData={UserData} product={product} />
                                                    
                                                              )
                                                              }
                                                              
                                                              })
                                                          
                                                              const LaptopsPEBLEightGigPageDDRFour = PeblLaptops.map((product, index) => {
                                                          
                                                                if ((product.ram === "8 GB") && product.ramGeneration === "DDR4") {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                    
                                                                )
                                                                }
                                                                
                                                                })
                                                    
                                                                const LaptopsPEBLEightGigPageDDRFourLocation = PeblLaptops.map((product, index) => {
                                                          
                                                                  if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                   && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                      
                                                                  )
                                                                  }
                                                                  
                                                                  })
                                                    
                                                                const LaptopsPEBLSixteenGigPageDDRFour = PeblLaptops.map((product, index) => {
                                                          
                                                                  if ((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                 )) {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                    
                                                                  )
                                                                  }
                                                                  
                                                                  })
                                                    
                                                                  const LaptopsPEBLSixteenGigPageDDRFourLocation = PeblLaptops.map((product, index) => {
                                                          
                                                                    if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                   )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                     && product.Gobabis === true))) {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                      
                                                                    )
                                                                    }
                                                                    
                                                                    })


                                                              const LaptopsFourGigPageDDRFour = LaptopItems.map((product, index) => {
                                                                if (product.ram === "4 GB" && product.ramGeneration === "DDR4") {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                )
                                                                }
                                                                
                                                                })
                                                            
                                                                const LaptopsFourGigPageDDRFourLocation = LaptopItems.map((product, index) => {
                                                                  if ((product.ram === "4 GB" && product.ramGeneration === "DDR4") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                   && product.Gobabis === true))) {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                  )
                                                                  }
                                                                  
                                                                  })
                                                            
                                                                const LaptopsEightGigPageDDRFour = LaptopItems.map((product, index) => {
                                                                  if (product.ram === "8 GB" && product.ramGeneration === "DDR4") {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                  )
                                                                  }
                                                                  
                                                                  })
                                                            
                                                                  const LaptopsEightGigPageDDRFourLocation = LaptopItems.map((product, index) => {
                                                                    if ((product.ram === "8 GB" && product.ramGeneration === "DDR4") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                     && product.Gobabis === true))) {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                    )
                                                                    }
                                                                    
                                                                    })
                                                                
                                                                    const LaptopsSixteenGigPageDDRFour = LaptopItems.map((product, index) => {
                                                            
                                                                      if ((product.ram !== "4 GB" && product.ram !== "8 GB") && product.ramGeneration === "DDR4") {
                                                                      return (
                                                                        <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                      )
                                                                      }
                                                                      
                                                                      })
                                                            
                                                                    const LaptopsSixteenGigPageDDRFourLocation = LaptopItems.map((product, index) => {
                                                            
                                                                      if ((product.ram !== "4 GB" && product.ram !== "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                       && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                      return (
                                                                        <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                      )
                                                                      }
                                                                      
                                                                      })

                                                            
                                                                    const LaptopsLenovoFourGigPageDDRFour = LenovoLaptops.map((product, index) => {
                                                            
                                                                        if ((product.ram === "4 GB") && product.ramGeneration === "DDR4") {
                                                                        return (
                                                                          <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                        )
                                                                        }
                                                                        
                                                                        })
                                                            
                                                                    const LaptopsLenovoFourGigPageDDRFourLocation = LenovoLaptops.map((product, index) => {
                                                            
                                                                      if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                       && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                      return (
                                                                        <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                      )
                                                                      }
                                                                      
                                                                      })
                                                                  
                                                                      const LaptopsLenovoEightGigPageDDRFour = LenovoLaptops.map((product, index) => {
                                                                  
                                                                        if ((product.ram === "8 GB") && product.ramGeneration === "DDR4") {
                                                                        return (
                                                                          <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                        )
                                                                        }
                                                                        
                                                                        })
                                                            
                                                                        const LaptopsLenovoEightGigPageDDRFourLocation = LenovoLaptops.map((product, index) => {
                                                                  
                                                                          if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                           && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                          return (
                                                                            <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                          )
                                                                          }
                                                                          
                                                                          })
                                                            
                                                                        const LaptopsLenovoSixteenGigPageDDRFour = LenovoLaptops.map((product, index) => {
                                                                  
                                                                          if ((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                         )) {
                                                                          return (
                                                                            <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                          )
                                                                          }
                                                                          
                                                                          })
                                                            
                                                                          const LaptopsLenovoSixteenGigPageDDRFourLocation = LenovoLaptops.map((product, index) => {
                                                                  
                                                                            if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                           )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                             && product.Gobabis === true))) {
                                                                            return (
                                                                              <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                            )
                                                                            }
                                                                            
                                                                            })

                                                            
                                                                          const LaptopsAcerFourGigPageDDRFour = AcerLaptops.map((product, index) => {
                                                            
                                                                            if ((product.ram === "4 GB") && product.ramGeneration === "DDR4") {
                                                                            return (
                                                                              <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                            )
                                                                            }
                                                                            
                                                                            })
                                                            
                                                                            const LaptopsAcerFourGigPageDDRFourLocation = AcerLaptops.map((product, index) => {
                                                            
                                                                              if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                               && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                              return (
                                                                                <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                              )
                                                                              }
                                                                              
                                                                              })
                                                                        
                                                                            const LaptopsAcerEightGigPageDDRFour = AcerLaptops.map((product, index) => {
                                                                        
                                                                              if ((product.ram === "8 GB") && product.ramGeneration === "DDR4") {
                                                                              return (
                                                                                <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                              )
                                                                              }
                                                                              
                                                                              })
                                                            
                                                                              const LaptopsAcerEightGigPageDDRFourLocation = AcerLaptops.map((product, index) => {
                                                                        
                                                                                if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                 && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                                return (
                                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                                )
                                                                                }
                                                                                
                                                                                })
                                                                            
                                                                              const LaptopsAcerSixteenGigPageDDRFour = AcerLaptops.map((product, index) => {
                                                                        
                                                                                if ((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                               )) {
                                                                                return (
                                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                                )
                                                                                }
                                                                                
                                                                                })
                                                            
                                                                                const LaptopsAcerSixteenGigPageDDRFourLocation = AcerLaptops.map((product, index) => {
                                                                        
                                                                                  if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                                 )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                   && product.Gobabis === true))) {
                                                                                  return (
                                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                                  )
                                                                                  }
                                                                                  
                                                                                  })

                                                            
                                                                                const LaptopsHPFourGigPageDDRFour = HPLaptops.map((product, index) => {
                                                            
                                                                                  if ((product.ram === "4 GB") && product.ramGeneration === "DDR4") {
                                                                                  return (
                                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                                  )
                                                                                  }
                                                                                  
                                                                                  })
                                                            
                                                                                  const LaptopsHPFourGigPageDDRFourLocation = HPLaptops.map((product, index) => {
                                                            
                                                                                    if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                     && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                                    return (
                                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                                    )
                                                                                    }
                                                                                    
                                                                                    })
                                                                              
                                                                                  const LaptopsHPEightGigPageDDRFour = HPLaptops.map((product, index) => {
                                                                              
                                                                                    if ((product.ram === "8 GB") && product.ramGeneration === "DDR4") {
                                                                                    return (
                                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                                    )
                                                                                    }
                                                                                    
                                                                                    })
                                                            
                                                                                    const LaptopsHPEightGigPageDDRFourLocation = HPLaptops.map((product, index) => {
                                                                              
                                                                                      if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                       && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                                      return (
                                                                                        <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                                      )
                                                                                      }
                                                                                      
                                                                                      })
                                                                                  
                                                                                    const LaptopsHPSixteenGigPageDDRFour = HPLaptops.map((product, index) => {
                                                                              
                                                                                      if ((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                                     )) {
                                                                                      return (
                                                                                        <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                                      )
                                                                                      }
                                                                                      
                                                                                      })
                                                            
                                                                                      const LaptopsHPSixteenGigPageDDRFourLocation = HPLaptops.map((product, index) => {
                                                                              
                                                                                        if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                                       )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                         && product.Gobabis === true))) {
                                                                                        return (
                                                                                          <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                                        )
                                                                                        }
                                                                                        
                                                                                        })

                                                            
                                                                                      const LaptopsAsusFourGigPageDDRFour = AsusLaptops.map((product, index) => {
                                                            
                                                                                        if ((product.ram === "4 GB") && product.ramGeneration === "DDR4") {
                                                                                        return (
                                                                                          <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                                        )
                                                                                        }
                                                                                        
                                                                                        })
                                                            
                                                                                        const LaptopsAsusFourGigPageDDRFourLocation = AsusLaptops.map((product, index) => {
                                                            
                                                                                          if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                           && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                                          return (
                                                                                            <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                                          )
                                                                                          }
                                                                                          
                                                                                          })
                                                                                    
                                                                                        const LaptopsAsusEightGigPageDDRFour = AsusLaptops.map((product, index) => {
                                                                                    
                                                                                          if ((product.ram === "8 GB") && product.ramGeneration === "DDR4") {
                                                                                          return (
                                                                                            <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                                          )
                                                                                          }
                                                                                          
                                                                                          })
                                                            
                                                                                          const LaptopsAsusEightGigPageDDRFourLocation = AsusLaptops.map((product, index) => {
                                                                                    
                                                                                            if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                             && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                                            return (
                                                                                              <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                                            )
                                                                                            }
                                                                                            
                                                                                            })
                                                                                        
                                                                                          const LaptopsAsusSixteenGigPageDDRFour = AsusLaptops.map((product, index) => {
                                                                                    
                                                                                            if ((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                                           )) {
                                                                                            return (
                                                                                              <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                                            )
                                                                                            }
                                                                                            
                                                                                            })
                                                            
                                                                                            const LaptopsAsusSixteenGigPageDDRFourLocation = AsusLaptops.map((product, index) => {
                                                                                    
                                                                                              if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                                             )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                               && product.Gobabis === true))) {
                                                                                              return (
                                                                                                <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                                              )
                                                                                              }
                                                                                              
                                                                                              })


                                                                                              const LaptopsSurfaceFourGigPageDDRFour = SurfaceLaptops.map((product, index) => {
                                                            
                                                                                                if ((product.ram === "4 GB") && product.ramGeneration === "DDR4") {
                                                                                                return (
                                                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                                    
                                                                                                )
                                                                                                }
                                                                                                
                                                                                                })
                                                                    
                                                                                                const LaptopsSurfaceFourGigPageDDRFourLocation = SurfaceLaptops.map((product, index) => {
                                                                    
                                                                                                  if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                                   && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                                                  return (
                                                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                                      
                                                                                                  )
                                                                                                  }
                                                                                                  
                                                                                                  })
                                                                                            
                                                                                                const LaptopsSurfaceEightGigPageDDRFour = SurfaceLaptops.map((product, index) => {
                                                                                            
                                                                                                  if ((product.ram === "8 GB") && product.ramGeneration === "DDR4") {
                                                                                                  return (
                                                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                                    
                                                                                                  )
                                                                                                  }
                                                                                                  
                                                                                                  })
                                                                    
                                                                                                  const LaptopsSurfaceEightGigPageDDRFourLocation = SurfaceLaptops.map((product, index) => {
                                                                                            
                                                                                                    if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                                     && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                                                    return (
                                                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                                      
                                                                                                    )
                                                                                                    }
                                                                                                    
                                                                                                    })
                                                                                                
                                                                                                  const LaptopsSurfaceSixteenGigPageDDRFour = SurfaceLaptops.map((product, index) => {
                                                                                            
                                                                                                    if ((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                                                   )) {
                                                                                                    return (
                                                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                                    
                                                                                                    )
                                                                                                    }
                                                                                                    
                                                                                                    })
                                                                    
                                                                                                    const LaptopsSurfaceSixteenGigPageDDRFourLocation = SurfaceLaptops.map((product, index) => {
                                                                                            
                                                                                                      if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                                                     )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                                       && product.Gobabis === true))) {
                                                                                                      return (
                                                                                                        <ProductCart key={index} UserData={UserData} product={product} />
                                                                      
                                                                                                      )
                                                                                                      }
                                                                                                      
                                                                                                      })
                                                            

                                                                                                              const LaptopsOtherFourGigPageDDRFour = OtherLaptops.map((product, index) => {
                                                            
                                                                                                                if ((product.ram === "4 GB") && product.ramGeneration === "DDR4") {
                                                                                                                return (
                                                                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                                                                )
                                                                                                                }
                                                                                                                
                                                                                                                })
                                                            
                                                                                                                const LaptopsOtherFourGigPageDDRFourLocation = OtherLaptops.map((product, index) => {
                                                            
                                                                                                                  if ((product.ram === "4 GB" 
                                                                                                                 ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                                                   && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                                                                  return (
                                                                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                                                                  )
                                                                                                                  }
                                                                                                                  
                                                                                                                  })
                                                                                                            
                                                                                                                const LaptopsOtherEightGigPageDDRFour = OtherLaptops.map((product, index) => {
                                                                                                            
                                                                                                                  if ((product.ram === "8 GB") && product.ramGeneration === "DDR4") {
                                                                                                                  return (
                                                                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                                                                  )
                                                                                                                  }
                                                                                                                  
                                                                                                                  })
                                                            
                                                                                                                  const LaptopsOtherEightGigPageDDRFourLocation = OtherLaptops.map((product, index) => {
                                                                                                            
                                                                                                                    if ((product.ram === "8 GB" 
                                                                                                                   ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                                                     && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                                                                                    return (
                                                                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                                                                    )
                                                                                                                    }
                                                                                                                    
                                                                                                                    })
                                                                                                                
                                                                                                                  const LaptopsOtherSixteenGigPageDDRFour = OtherLaptops.map((product, index) => {
                                                                                                            
                                                                                                                    if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                                                                   ))) {
                                                                                                                    return (
                                                                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                            
                                                                                                                    )
                                                                                                                    }
                                                                                                                    
                                                                                                                    })
                                                            
                                                                                                                    const LaptopsOtherSixteenGigPageDDRFourLocation = OtherLaptops.map((product, index) => {
                                                                                                            
                                                                                                                      if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                                                                                     )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                                                                       && product.Gobabis === true))) {
                                                                                                                      return (
                                                                                                                        <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                                                                      )
                                                                                                                      }
                                                                                                                      
                                                                                                                      })
                                                            
         
  const LaptopsFourGigPageDDRFive = LaptopItems.map((product, index) => {
    if (product.ram === "4 GB" && product.ramGeneration === "DDR5") {
    return (
      <ProductCart key={index} UserData={UserData} product={product} />

    )
    }
    
    })

    const LaptopsFourGigPageDDRFiveLocation = LaptopItems.map((product, index) => {
      if ((product.ram === "4 GB" && product.ramGeneration === "DDR5") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
       && product.Gobabis === true))) {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />
  
      )
      }
      
      })

    const LaptopsEightGigPageDDRFive = LaptopItems.map((product, index) => {
      if (product.ram === "8 GB" && product.ramGeneration === "DDR5") {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      }
      
      })

      const LaptopsEightGigPageDDRFiveLocation = LaptopItems.map((product, index) => {
        if ((product.ram === "8 GB" && product.ramGeneration === "DDR5") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
         && product.Gobabis === true))) {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
  
        )
        }
        
        })
    
        const LaptopsSixteenGigPageDDRFive = LaptopItems.map((product, index) => {

          if ((product.ram !== "4 GB" && product.ram !== "8 GB") && product.ramGeneration === "DDR5") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })

        const LaptopsSixteenGigPageDDRFiveLocation = LaptopItems.map((product, index) => {

          if ((product.ram !== "4 GB" && product.ram !== "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })


        const LaptopsPEBLFourGigPageDDRFive = PeblLaptops.map((product, index) => {

            if ((product.ram === "4 GB") && product.ramGeneration === "DDR5") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
            )
            }
            
            })

        const LaptopsPEBLFourGigPageDDRFiveLocation = PeblLaptops.map((product, index) => {

          if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })
      
          const LaptopsPEBLEightGigPageDDRFive = PeblLaptops.map((product, index) => {
      
            if ((product.ram === "8 GB") && product.ramGeneration === "DDR5") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const LaptopsPEBLEightGigPageDDRFiveLocation = PeblLaptops.map((product, index) => {
      
              if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })

            const LaptopsPEBLSixteenGigPageDDRFive = PeblLaptops.map((product, index) => {
      
              if ((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
             )) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const LaptopsPEBLSixteenGigPageDDRFiveLocation = PeblLaptops.map((product, index) => {
      
                if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
               )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })


        const LaptopsLenovoFourGigPageDDRFive = LenovoLaptops.map((product, index) => {

            if ((product.ram === "4 GB") && product.ramGeneration === "DDR5") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
            )
            }
            
            })

        const LaptopsLenovoFourGigPageDDRFiveLocation = LenovoLaptops.map((product, index) => {

          if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })
      
          const LaptopsLenovoEightGigPageDDRFive = LenovoLaptops.map((product, index) => {
      
            if ((product.ram === "8 GB") && product.ramGeneration === "DDR5") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const LaptopsLenovoEightGigPageDDRFiveLocation = LenovoLaptops.map((product, index) => {
      
              if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })

            const LaptopsLenovoSixteenGigPageDDRFive = LenovoLaptops.map((product, index) => {
      
              if ((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
             )) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const LaptopsLenovoSixteenGigPageDDRFiveLocation = LenovoLaptops.map((product, index) => {
      
                if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
               )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })


              const LaptopsAcerFourGigPageDDRFive = AcerLaptops.map((product, index) => {

                if ((product.ram === "4 GB") && product.ramGeneration === "DDR5") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const LaptopsAcerFourGigPageDDRFiveLocation = AcerLaptops.map((product, index) => {

                  if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
  
                  )
                  }
                  
                  })
            
                const LaptopsAcerEightGigPageDDRFive = AcerLaptops.map((product, index) => {
            
                  if ((product.ram === "8 GB") && product.ramGeneration === "DDR5") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />

                  )
                  }
                  
                  })

                  const LaptopsAcerEightGigPageDDRFiveLocation = AcerLaptops.map((product, index) => {
            
                    if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
  
                    )
                    }
                    
                    })
                
                  const LaptopsAcerSixteenGigPageDDRFive = AcerLaptops.map((product, index) => {
            
                    if ((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                   )) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />

                    )
                    }
                    
                    })

                    const LaptopsAcerSixteenGigPageDDRFiveLocation = AcerLaptops.map((product, index) => {
            
                      if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                     )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
  
                      )
                      }
                      
                      })


                    const LaptopsHPFourGigPageDDRFive = HPLaptops.map((product, index) => {

                      if ((product.ram === "4 GB") && product.ramGeneration === "DDR5") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />

                      )
                      }
                      
                      })

                      const LaptopsHPFourGigPageDDRFiveLocation = HPLaptops.map((product, index) => {

                        if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
  
                        )
                        }
                        
                        })
                  
                      const LaptopsHPEightGigPageDDRFive = HPLaptops.map((product, index) => {
                  
                        if ((product.ram === "8 GB") && product.ramGeneration === "DDR5") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />

                        )
                        }
                        
                        })

                        const LaptopsHPEightGigPageDDRFiveLocation = HPLaptops.map((product, index) => {
                  
                          if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
  
                          )
                          }
                          
                          })
                      
                        const LaptopsHPSixteenGigPageDDRFive = HPLaptops.map((product, index) => {
                  
                          if ((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                         )) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />

                          )
                          }
                          
                          })

                          const LaptopsHPSixteenGigPageDDRFiveLocation = HPLaptops.map((product, index) => {
                  
                            if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                           )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
  
                            )
                            }
                            
                            })


                          const LaptopsAsusFourGigPageDDRFive = AsusLaptops.map((product, index) => {

                            if ((product.ram === "4 GB") && product.ramGeneration === "DDR5") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />

                            )
                            }
                            
                            })

                            const LaptopsAsusFourGigPageDDRFiveLocation = AsusLaptops.map((product, index) => {

                              if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
  
                              )
                              }
                              
                              })
                        
                            const LaptopsAsusEightGigPageDDRFive = AsusLaptops.map((product, index) => {
                        
                              if ((product.ram === "8 GB") && product.ramGeneration === "DDR5") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />

                              )
                              }
                              
                              })

                              const LaptopsAsusEightGigPageDDRFiveLocation = AsusLaptops.map((product, index) => {
                        
                                if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                )
                                }
                                
                                })
                            
                              const LaptopsAsusSixteenGigPageDDRFive = AsusLaptops.map((product, index) => {
                        
                                if ((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                               )) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />

                                )
                                }
                                
                                })

                                const LaptopsAsusSixteenGigPageDDRFiveLocation = AsusLaptops.map((product, index) => {
                        
                                  if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                                 )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                   && product.Gobabis === true))) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                  )
                                  }
                                  
                                  })


                                  const LaptopsSurfaceFourGigPageDDRFive = SurfaceLaptops.map((product, index) => {

                                    if ((product.ram === "4 GB") && product.ramGeneration === "DDR5") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
        
                                    )
                                    }
                                    
                                    })
        
                                    const LaptopsSurfaceFourGigPageDDRFiveLocation = SurfaceLaptops.map((product, index) => {
        
                                      if ((product.ram === "4 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
          
                                      )
                                      }
                                      
                                      })
                                
                                    const LaptopsSurfaceEightGigPageDDRFive = SurfaceLaptops.map((product, index) => {
                                
                                      if ((product.ram === "8 GB") && product.ramGeneration === "DDR5") {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
        
                                      )
                                      }
                                      
                                      })
        
                                      const LaptopsSurfaceEightGigPageDDRFiveLocation = SurfaceLaptops.map((product, index) => {
                                
                                        if ((product.ram === "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                         && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
          
                                        )
                                        }
                                        
                                        })
                                    
                                      const LaptopsSurfaceSixteenGigPageDDRFive = SurfaceLaptops.map((product, index) => {
                                
                                        if ((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                                       )) {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
        
                                        )
                                        }
                                        
                                        })
        
                                        const LaptopsSurfaceSixteenGigPageDDRFiveLocation = SurfaceLaptops.map((product, index) => {
                                
                                          if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                                         )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
          
                                          )
                                          }
                                          
                                          })


                                                  const LaptopsOtherFourGigPageDDRFive = OtherLaptops.map((product, index) => {

                                                    if ((product.ram === "4 GB") && product.ramGeneration === "DDR5") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                    )
                                                    }
                                                    
                                                    })

                                                    const LaptopsOtherFourGigPageDDRFiveLocation = OtherLaptops.map((product, index) => {

                                                      if ((product.ram === "4 GB" 
                                                     ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                      )
                                                      }
                                                      
                                                      })
                                                
                                                    const LaptopsOtherEightGigPageDDRFive = OtherLaptops.map((product, index) => {
                                                
                                                      if ((product.ram === "8 GB") && product.ramGeneration === "DDR5") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                      )
                                                      }
                                                      
                                                      })

                                                      const LaptopsOtherEightGigPageDDRFiveLocation = OtherLaptops.map((product, index) => {
                                                
                                                        if ((product.ram === "8 GB" 
                                                       ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                                        )
                                                        }
                                                        
                                                        })
                                                    
                                                      const LaptopsOtherSixteenGigPageDDRFive = OtherLaptops.map((product, index) => {
                                                
                                                        if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                                                       ))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />

                                                        )
                                                        }
                                                        
                                                        })

                                                        const LaptopsOtherSixteenGigPageDDRFiveLocation = OtherLaptops.map((product, index) => {
                                                
                                                          if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                                                         )) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
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
    {SearchTerms === "" ?
  <div className='Visited_container-wrapper'>
  <div className='Visited_page-banner'>
    <div className='Category_selectTabs_box'>
    <div>
      <span className='Category_selectTabs_span'>Laptops</span>
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
  <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(0); RamSelect(0); MemoryLaptopCategory(1)}}
  ><div>
    <img 
    src='https://i.imgur.com/wSpBc44.png'
    className={SelectTabs ===0 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>All</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(1); RamSelect(0); MemoryLaptopCategory(1); GetAcer()}}
  ><div>
    <img 
    src='https://i.imgur.com/QaTWjG1.png'
    // src="https://m.media-amazon.com/images/I/91ci4Z+aWOL._AC_UF894,1000_QL80_.jpg"
    className={SelectTabs ===1 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Acer</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(2); RamSelect(0); MemoryLaptopCategory(1); GetHP()}}
  ><div>
    <img 
    src='https://i.imgur.com/VzGZY2g.png'
    className={SelectTabs ===2 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>HP</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(3); RamSelect(0); MemoryLaptopCategory(1); GetLenovo()}}
  ><div>
    <img src="https://i.imgur.com/M1gfcWR.png"
    className={SelectTabs ===3 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Lenovo</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(4); RamSelect(0); MemoryLaptopCategory(1); GetAsus()}}
  ><div>
    <img src="https://i.imgur.com/pk8xHIn.png"
    className={SelectTabs ===4 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Asus</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(5); RamSelect(0); MemoryLaptopCategory(1); GetMacBook()}}
  ><div>
    <img src="https://i.imgur.com/KbEUN2u.png"
    className={SelectTabs ===5 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>MacBook</span>
  </div>
   </div>

   {/* <div className={SelectTabs ===7 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(7); RamSelect(0); MemoryLaptopCategory(1); GetPebl()}}
  ><div>
    <img src="https://media.licdn.com/dms/image/D4D0BAQF0M8BQLUmKIw/company-logo_200_200/0/1664796502323?e=2147483647&v=beta&t=9Eig_SWPLT8WXl1FGBLsMzOvxpPIgrCSO0A2xEdFzHo"
   style={{ width: '100%', height: '140px', padding: '0p 0px 7px 0px', borderRadius: '15px', overflow: 'hide'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>PEBL</span>
  </div>
   </div> */}

<div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(8); RamSelect(0); MemoryLaptopCategory(1); GetSurface()}}
  ><div>
    <img src="https://i.imgur.com/2XyWq4X.png"
    className={SelectTabs ===8 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Surface</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(9); RamSelect(0); MemoryLaptopCategory(1); GetOther()}}
  ><div>
    <img src="https://i.imgur.com/hTtNDPH.png"
    className={SelectTabs ===9 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Other Brands</span>
  </div>
   </div>


</Carousel>

    </div>

    <div className={SelectTabs ===0 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Laptops</span>
    </div>
    </div>

    <div className={SelectTabs ===1 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Acer Laptops</span>
    </div>
    </div>

    <div className={SelectTabs ===2 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>HP Laptops</span>
    </div>
    </div>

    <div className={SelectTabs ===3 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Lenovo Laptops</span>
    </div>
    </div>

    <div className={SelectTabs ===4 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Asus Laptops</span>
    </div>
    </div>

    <div className={SelectTabs ===5 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>MacBooks</span>
    </div>
    </div>

    <div className={SelectTabs ===8 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Surface Laptops</span>
    </div>
    </div>

    <div className={SelectTabs ===9 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>More Laptops</span>
    </div>
    </div>

    <div className={SelectTabs !==5 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={ToggleRamType ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {RamSelect(0)}} >
            <span>All Gen</span>
          </div>
    <div className={ToggleRamType ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {RamSelect(1)}} >
            <span>DDR4</span>
          </div>
          <div className={ToggleRamType ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {RamSelect(2)}} >
          <span>DDR5</span>
          </div>

    </div>

    <div className={SelectTabs ===5 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={ToggleRamType ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {RamSelect(0); MemoryLaptopCategory(1)}} >
            <span>Air</span>
          </div>
    <div className={ToggleRamType ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {RamSelect(1); MemoryLaptopCategory(1)}} >
            <span>Air | M2 Chip</span>
          </div>
          <div className={ToggleRamType ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {RamSelect(2); MemoryLaptopCategory(1)}} >
          <span>Pro | M2 Chip</span>
          </div>
          <div className={ToggleRamType ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {RamSelect(3); MemoryLaptopCategory(2)}} >
          <span>Pro | M2 Pro</span>
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

    <div className={SelectTabs !==5 ? 'My_location_items_choose_box_second' : 'Listed_fetched_products-hide'}>
    <div 
    className='Item_options_Front_box'>
      <span>RAM</span>
    </div>
    <div 
    className={toggleMemoySizelaptop === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryLaptopCategory(1)}}>
      <span>4 GB</span>
    </div>
    <div 
    className={toggleMemoySizelaptop === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryLaptopCategory(2)}}>
      <span>8 GB</span>
    </div>
    <div 
    className={toggleMemoySizelaptop === 3 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryLaptopCategory(3)}}>
      <span>16+ GB</span>
    </div>
    </div>

    <div className={SelectTabs ===5 && ToggleRamType ===0 ? 'My_location_items_choose_box_second' : 'Listed_fetched_products-hide'}>
    <div 
    className='Item_options_Front_box'>
      <span>Size</span>
    </div>
    <div 
    className='active-Item_options_choose_box Item_options_choose_box'
    >
      <span>256 GB</span>
    </div>
    </div>

    <div className={SelectTabs ===5 && ToggleRamType ===1 ? 'My_location_items_choose_box_second' : 'Listed_fetched_products-hide'}>
    <div 
    className='Item_options_Front_box'>
      <span>Size</span>
    </div>
    <div 
    className={toggleMemoySizelaptop === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryLaptopCategory(1)}}>
      <span>256 GB</span>
    </div>
    <div 
    className={toggleMemoySizelaptop === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryLaptopCategory(2)}}>
      <span>512 GB</span>
    </div>
    
    </div>

    <div className={SelectTabs ===5 && ToggleRamType ===2 ? 'My_location_items_choose_box_second' : 'Listed_fetched_products-hide'}>
    <div 
    className='Item_options_Front_box'>
      <span>Size</span>
    </div>
    <div 
    className={toggleMemoySizelaptop === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryLaptopCategory(1)}}>
      <span>256 GB</span>
    </div>
    <div 
    className={toggleMemoySizelaptop === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryLaptopCategory(2)}}>
      <span>512 GB</span>
    </div>
    
    </div>

    <div className={SelectTabs ===5 && ToggleRamType ===3 ? 'My_location_items_choose_box_second' : 'Listed_fetched_products-hide'}>
    <div 
    className='Item_options_Front_box'>
      <span>Size</span>
    </div>
    <div 
    className={toggleMemoySizelaptop === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryLaptopCategory(2)}}>
      <span>512 GB</span>
    </div>
    <div 
    className={toggleMemoySizelaptop === 3 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryLaptopCategory(3)}}>
      <span>1 TB</span>
    </div>
    </div>

  </div>

{/* All Laptops */}
{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsFourGigPage}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsEightGigPage}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSixteenGigPage}
</div>
}

{/* All Location */}
{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsFourGigPageLocation}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsEightGigPageLocation}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSixteenGigPageLocation}
</div>
}


{/* Acer Laptops*/}
{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerFourGigPage}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerEightGigPage}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerSixteenGigPage}
</div>
}

{/* Acer Location */}
{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerFourGigPageLocation}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerEightGigPageLocation}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerSixteenGigPageLocation}
</div>
}



{/* HP Laptops*/}
{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPFourGigPage}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPEightGigPage}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPSixteenGigPage}
</div>
}

{/* HP Location */}
{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPFourGigPageLocation}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPEightGigPageLocation}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPSixteenGigPageLocation}
</div>
}



{/* Lenovo Laptops*/}
{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoFourGigPage}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoEightGigPage}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoSixteenGigPage}
</div>
}

{/* Lenovo Location */}
{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoFourGigPageLocation}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoEightGigPageLocation}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoSixteenGigPageLocation}
</div>
}


{/* Asus Laptops*/}
{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusFourGigPage}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusEightGigPage}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusSixteenGigPage}
</div>
}

{/* Asus Location */}
{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusFourGigPageLocation}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusEightGigPageLocation}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusSixteenGigPageLocation}
</div>
}


{/* Apple Laptops*/}
{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookAirPage}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookAirMChipTwoHundredPage}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookAirMChipFiveHundredPage}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookProMChipTwoHundredPage}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookProMChipFiveHundredPage}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookProMChipProFiveHundredPage}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 3 && ToggleLocation === false ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookProMChipProTerabytePage}
</div>
}



{/* Apple Location */}
{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookAirPageLocation}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookAirMChipTwoHundredPageLocation}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookAirMChipFiveHundredPageLocation}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookProMChipTwoHundredPageLocation}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookProMChipFiveHundredPageLocation}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookProMChipProFiveHundredPageLocation}
</div>
}

{MacBookLaptops && MacBookLaptops.length === undefined ?
  <></>
  :
  MacBookLaptops && MacBookLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 5 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 3 && ToggleLocation === true ?
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
<div className={(SelectTabs === 5 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsMacBookProMChipProTerabytePageLocation}
</div>
}



{/* PEBL Laptops*/}
{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLFourGigPage}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLEightGigPage}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLSixteenGigPage}
</div>
}

{/* PEBL Location */}
{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLFourGigPageLocation}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLEightGigPageLocation}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLSixteenGigPageLocation}
</div>
}



{/* Surface Laptops*/}
{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceFourGigPage}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceEightGigPage}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceSixteenGigPage}
</div>
}

{/* Surface Location */}
{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceFourGigPageLocation}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceEightGigPageLocation}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceSixteenGigPageLocation}
</div>
}


{/* Other Laptops*/}
{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherFourGigPage}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherEightGigPage}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherSixteenGigPage}
</div>
}

{/* Other Location */}
{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherFourGigPageLocation}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherEightGigPageLocation}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherSixteenGigPageLocation}
</div>
}


{/* All Laptops DDR4 */}
{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsFourGigPageDDRFour}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsEightGigPageDDRFour}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSixteenGigPageDDRFour}
</div>
}

{/* All Location */}
{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsFourGigPageDDRFourLocation}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsEightGigPageDDRFourLocation}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSixteenGigPageDDRFourLocation}
</div>
}


{/* Acer Laptops*/}
{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerFourGigPageDDRFour}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerEightGigPageDDRFour}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerSixteenGigPageDDRFour}
</div>
}

{/* Acer Location */}
{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerFourGigPageDDRFourLocation}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerEightGigPageDDRFourLocation}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerSixteenGigPageDDRFourLocation}
</div>
}



{/* HP Laptops*/}
{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPFourGigPageDDRFour}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPEightGigPageDDRFour}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPSixteenGigPageDDRFour}
</div>
}

{/* HP Location */}
{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPFourGigPageDDRFourLocation}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPEightGigPageDDRFourLocation}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPSixteenGigPageDDRFourLocation}
</div>
}



{/* Lenovo Laptops*/}
{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoFourGigPageDDRFour}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoEightGigPageDDRFour}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoSixteenGigPageDDRFour}
</div>
}

{/* Lenovo Location */}
{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoFourGigPageDDRFourLocation}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoEightGigPageDDRFourLocation}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoSixteenGigPageDDRFourLocation}
</div>
}


{/* Asus Laptops*/}
{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusFourGigPageDDRFour}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusEightGigPageDDRFour}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusSixteenGigPageDDRFour}
</div>
}

{/* Asus Location */}
{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusFourGigPageDDRFourLocation}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusEightGigPageDDRFourLocation}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusSixteenGigPageDDRFourLocation}
</div>
}



{/* PEBL Laptops*/}
{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLFourGigPageDDRFour}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLEightGigPageDDRFour}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLSixteenGigPageDDRFour}
</div>
}

{/* PEBL Location */}
{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLFourGigPageDDRFourLocation}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLEightGigPageDDRFourLocation}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLSixteenGigPageDDRFourLocation}
</div>
}



{/* Surface Laptops*/}
{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceFourGigPageDDRFour}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceEightGigPageDDRFour}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceSixteenGigPageDDRFour}
</div>
}

{/* Surface Location */}
{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceFourGigPageDDRFourLocation}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceEightGigPageDDRFourLocation}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceSixteenGigPageDDRFourLocation}
</div>
}


{/* Other Laptops*/}
{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherFourGigPageDDRFour}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherEightGigPageDDRFour}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherSixteenGigPageDDRFour}
</div>
}

{/* Other Location */}
{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherFourGigPageDDRFourLocation}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherEightGigPageDDRFourLocation}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherSixteenGigPageDDRFourLocation}
</div>
}


{/* All Laptops DDR5 */}
{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsFourGigPageDDRFive}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsEightGigPageDDRFive}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSixteenGigPageDDRFive}
</div>
}

{/* All Location */}
{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsFourGigPageDDRFiveLocation}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsEightGigPageDDRFiveLocation}
</div>
}

{LaptopItems && LaptopItems.length === undefined ?
  <></>
  :
  LaptopItems && LaptopItems.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 0 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSixteenGigPageDDRFiveLocation}
</div>
}


{/* Acer Laptops*/}
{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerFourGigPageDDRFive}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerEightGigPageDDRFive}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerSixteenGigPageDDRFive}
</div>
}

{/* Acer Location */}
{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerFourGigPageDDRFiveLocation}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerEightGigPageDDRFiveLocation}
</div>
}

{AcerLaptops && AcerLaptops.length === undefined ?
  <></>
  :
  AcerLaptops && AcerLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAcerSixteenGigPageDDRFiveLocation}
</div>
}



{/* HP Laptops*/}
{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPFourGigPageDDRFive}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPEightGigPageDDRFive}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPSixteenGigPageDDRFive}
</div>
}

{/* HP Location */}
{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPFourGigPageDDRFiveLocation}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPEightGigPageDDRFiveLocation}
</div>
}

{HPLaptops && HPLaptops.length === undefined ?
  <></>
  :
  HPLaptops && HPLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsHPSixteenGigPageDDRFiveLocation}
</div>
}



{/* Lenovo Laptops*/}
{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoFourGigPageDDRFive}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoEightGigPageDDRFive}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoSixteenGigPageDDRFive}
</div>
}

{/* Lenovo Location */}
{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoFourGigPageDDRFiveLocation}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoEightGigPageDDRFiveLocation}
</div>
}

{LenovoLaptops && LenovoLaptops.length === undefined ?
  <></>
  :
  LenovoLaptops && LenovoLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 3 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsLenovoSixteenGigPageDDRFiveLocation}
</div>
}


{/* Asus Laptops*/}
{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusFourGigPageDDRFive}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusEightGigPageDDRFive}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusSixteenGigPageDDRFive}
</div>
}

{/* Asus Location */}
{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusFourGigPageDDRFiveLocation}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusEightGigPageDDRFiveLocation}
</div>
}

{AsusLaptops && AsusLaptops.length === undefined ?
  <></>
  :
  AsusLaptops && AsusLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 4 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsAsusSixteenGigPageDDRFiveLocation}
</div>
}


{/* PEBL Laptops*/}
{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLFourGigPageDDRFive}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLEightGigPageDDRFive}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLSixteenGigPageDDRFive}
</div>
}

{/* PEBL Location */}
{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLFourGigPageDDRFiveLocation}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLEightGigPageDDRFiveLocation}
</div>
}

{PeblLaptops && PeblLaptops.length === undefined ?
  <></>
  :
  PeblLaptops && PeblLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 7 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsPEBLSixteenGigPageDDRFiveLocation}
</div>
}



{/* Surface Laptops*/}
{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceFourGigPageDDRFive}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceEightGigPageDDRFive}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceSixteenGigPageDDRFive}
</div>
}

{/* Surface Location */}
{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceFourGigPageDDRFiveLocation}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceEightGigPageDDRFiveLocation}
</div>
}

{SurfaceLaptops && SurfaceLaptops.length === undefined ?
  <></>
  :
  SurfaceLaptops && SurfaceLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 8 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsSurfaceSixteenGigPageDDRFiveLocation}
</div>
}


{/* Other Laptops*/}
{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherFourGigPageDDRFive}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherEightGigPageDDRFive}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherSixteenGigPageDDRFive}
</div>
}

{/* Other Location */}
{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 1 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherFourGigPageDDRFiveLocation}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 2 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherEightGigPageDDRFiveLocation}
</div>
}

{OtherLaptops && OtherLaptops.length === undefined ?
  <></>
  :
  OtherLaptops && OtherLaptops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ?
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
<div className={(SelectTabs === 9 && toggleMemoySizelaptop === 3 ) && ToggleRamType === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {LaptopsOtherSixteenGigPageDDRFiveLocation}
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

export default Laptops