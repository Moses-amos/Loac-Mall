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

function Desktops(props) {

    const [UserData, setUserData] = useState([])
    const [DeskstopPc, setDeskstopPc] = useState([])
    const [AIOPC, setAIOPC] = useState([])
    const [iMacPc, setiMacPc] = useState([])
    const [MiniPC, setMiniPC] = useState([])
    const [MiniMacPC, setMiniMacPC] = useState([])

    const [toggleListedItem, settoggleListedItem] = useState(0)
    const [toggleMemorySizeDesktop, settoggleMemorySizeDesktop] = useState(1)
    const [SelectTabs, setSelectTabs] = useState(0)
    const [Products, setProducts] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)
    const [IsLoading, setIsLoading] = useState(true)
  
    const SetLocation = () => setToggleLocation(!ToggleLocation)
  
    const ToggleSelectTabs = (index) => {
      setSelectTabs(index);
    }  

    const MemoryDesktopCategory = (index) => {
        settoggleMemorySizeDesktop(index);
      }

      const ListedItemCategory = (index) => {
        settoggleListedItem(index);
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
        product: "Desktop Pc"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    setDeskstopPc(response.data.products)
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

    const GetAIO = () => {
      const variable = {
          product: "AIO PC"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
          setAIOPC(response.data.products)
      } else {
      }
      })
  }

  const GetiMac = () => {
    const variable = {
        product: "iMac PC"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
        setiMacPc(response.data.products)
    } else {
    }
    })
}

const GetMiniPc = () => {
  const variable = {
      product: "Mini PC"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
      setMiniPC(response.data.products)
  } else {
  }
  })
}

const GetMacMini = () => {
  const variable = {
      product: "Mac Mini PC"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
      setMiniMacPC(response.data.products)
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

    const DeskstopFourGigPage = DeskstopPc.map((product, index) => {
      if (product.ram === "4 GB") {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      }
      
      })

      const DeskstopFourGigPageLocation = DeskstopPc.map((product, index) => {
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

      const DeskstopEightGigPage = DeskstopPc.map((product, index) => {
        if (product.ram === "8 GB") {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        }
        
        })

        const DeskstopEightGigPageLocation = DeskstopPc.map((product, index) => {
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

        const DeskstopSixteenGigPage = DeskstopPc.map((product, index) => {
          if (product.ram !== "4 GB" && product.ram !== "8 GB") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })

          const DeskstopSixteenGigPageLocation = DeskstopPc.map((product, index) => {
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


    const DeskstopDDRThreeFourGigPage = DeskstopPc.map((product, index) => {
      if (product.ramGeneration === "DDR3" && product.ram === "4 GB") {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      }
      
      })

      const DeskstopDDRThreeFourGigPageLocation = DeskstopPc.map((product, index) => {
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

      const DeskstopDDRThreeEightGigPage = DeskstopPc.map((product, index) => {
        if ((product.product === "Desktop Pc" && product.ramGeneration === "DDR3") 
        && product.ram === "8 GB") {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        }
        
        })

        const DeskstopDDRThreeEightGigPageLocation = DeskstopPc.map((product, index) => {
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

        const DeskstopDDRThreeSixteenGigPage = DeskstopPc.map((product, index) => {
          if ((product.ramGeneration === "DDR3") &&
           (product.ram !== "4 GB" && product.ram !== "8 GB")) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })

          const DeskstopDDRThreeSixteenGigPageLocation = DeskstopPc.map((product, index) => {
            if ((product.ramGeneration === "DDR3") &&
             (product.ram !== "4 GB" && product.ram !== "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
             || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
             || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
             || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
              && product.Gobabis === true))) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
            )
            }
            
            })


      const DeskstopDDRFourFourtGigPage = DeskstopPc.map((product, index) => {
        if (product.ramGeneration === "DDR4" && product.ram === "4 GB") {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        }
        
        })

        const DeskstopDDRFourFourtGigPageLocation = DeskstopPc.map((product, index) => {
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

        const DeskstopDDRFourEightGigPage = DeskstopPc.map((product, index) => {
          if (product.ramGeneration === "DDR4" && product.ram === "8 GB") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })

          const DeskstopDDRFourEightGigPageLocation = DeskstopPc.map((product, index) => {
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

          const DeskstopDDRFourSixteentGigPage = DeskstopPc.map((product, index) => {
            if (product.ramGeneration === "DDR4" && (product.ram !== "4 GB" && product.ram !== "8 GB")) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const DeskstopDDRFourSixteentGigPageLocation = DeskstopPc.map((product, index) => {
              if ((product.ramGeneration === "DDR4" && (product.ram !== "4 GB" && product.ram !== "8 GB")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })


        const DeskstopDDRFiveFourGigPage = DeskstopPc.map((product, index) => {
          if (product.ramGeneration === "DDR5" && product.ram === "4 GB") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })

          const DeskstopDDRFiveFourGigPageLocation = DeskstopPc.map((product, index) => {
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

          const DeskstopDDRFiveEightGigPage = DeskstopPc.map((product, index) => {
            if (product.ramGeneration === "DDR5" && product.ram === "8 GB") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const DeskstopDDRFiveEightGigPageLocation = DeskstopPc.map((product, index) => {
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

            const DeskstopDDRFiveSixteenGigPage = DeskstopPc.map((product, index) => {
              if (product.ramGeneration === "DDR5" && (product.ram !== "4 GB" && product.ram !== "8 GB")) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const DeskstopDDRFiveSixteenGigPageLocation = DeskstopPc.map((product, index) => {
                if ((product.ramGeneration === "DDR5" && (product.ram !== "4 GB" && product.ram !== "8 GB")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })


                const AioPcFourGigPage = AIOPC.map((product, index) => {
                  if (product.ram === "4 GB") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
            
                  )
                  }
                  
                  })
            
                  const AioPcFourGigPageLocation = AIOPC.map((product, index) => {
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
            
                  const AioPcEightGigPage = AIOPC.map((product, index) => {
                    if (product.ram === "8 GB") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
            
                    )
                    }
                    
                    })
            
                    const AioPcEightGigPageLocation = AIOPC.map((product, index) => {
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
            
                    const AioPcSixteenGigPage = AIOPC.map((product, index) => {
                      if (product.ram !== "4 GB" && product.ram !== "8 GB") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
            
                      )
                      }
                      
                      })
            
                      const AioPcSixteenGigPageLocation = AIOPC.map((product, index) => {
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


                const AioPcDDRFourFourGigPage = AIOPC.map((product, index) => {
                  if (product.ramGeneration === "DDR4" && product.ram === "4 GB") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
          
                  )
                  }
                  
                  })
          
                  const AioPcDDRFourFourGigPageLocation = AIOPC.map((product, index) => {
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
          
                  const AioPcDDRFourEightGigPage = AIOPC.map((product, index) => {
                    if (product.ramGeneration === "DDR4" && product.ram === "8 GB") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
          
                    )
                    }
                    
                    })
          
                    const AioPcDDRFourEightGigPageLocation = AIOPC.map((product, index) => {
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
          
                    const AioPcDDRFourSixteentGigPage = AIOPC.map((product, index) => {
                      if (product.ramGeneration === "DDR4" && (product.ram !== "4 GB" && product.ram !== "8 GB")) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
          
                      )
                      }
                      
                      })
          
                      const AioPcDDRFourSixteentGigPageLocation = AIOPC.map((product, index) => {
                        if ((product.ramGeneration === "DDR4" && (product.ram !== "4 GB" && product.ram !== "8 GB")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
            
                        )
                        }
                        
                        })

          
                  const AioPcDDRFiveFourGigPage = AIOPC.map((product, index) => {
                    if (product.ramGeneration === "DDR5" && product.ram === "4 GB") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
          
                    )
                    }
                    
                    })
          
                    const AioPcDDRFiveFourGigPageLocation = AIOPC.map((product, index) => {
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
          
                    const AioPcDDRFiveEightGigPage = AIOPC.map((product, index) => {
                      if (product.ramGeneration === "DDR5" && product.ram === "8 GB") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
          
                      )
                      }
                      
                      })
          
                      const AioPcDDRFiveEightGigPageLocation = AIOPC.map((product, index) => {
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
          
                      const AioPcDDRFiveSixteenGigPage = AIOPC.map((product, index) => {
                        if (product.ramGeneration === "DDR5" && (product.ram !== "4 GB" && product.ram !== "8 GB")) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
          
                        )
                        }
                        
                        })
          
                        const AioPcDDRFiveSixteenGigPageLocation = AIOPC.map((product, index) => {
                          if ((product.ramGeneration === "DDR5" && (product.ram !== "4 GB" && product.ram !== "8 GB")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
            
                          )
                          }
                          
                          })


                          const MiniPcFourGigPage = MiniPC.map((product, index) => {
                            if (product.ram === "4 GB") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                      
                            )
                            }
                            
                            })
                      
                            const MiniPcFourGigPageLocation = MiniPC.map((product, index) => {
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
                      
                            const MiniPcEightGigPage = MiniPC.map((product, index) => {
                              if (product.ram === "8 GB") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                      
                              )
                              }
                              
                              })
                      
                              const MiniPcEightGigPageLocation = MiniPC.map((product, index) => {
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
                      
                              const MiniPcSixteenGigPage = MiniPC.map((product, index) => {
                                if (product.ram !== "4 GB" && product.ram !== "8 GB") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                      
                                )
                                }
                                
                                })
                      
                                const MiniPcSixteenGigPageLocation = MiniPC.map((product, index) => {
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


                          const MiniPcDDRThreeFourGigPage = MiniPC.map((product, index) => {
                            if (product.ramGeneration === "DDR3" && product.ram === "4 GB") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                      
                            )
                            }
                            
                            })
                      
                            const MiniPcDDRThreeFourGigPageLocation = MiniPC.map((product, index) => {
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
                      
                            const MiniPcDDRThreeEightGigPage = MiniPC.map((product, index) => {
                              if ((product.product === "Desktop Pc" && product.ramGeneration === "DDR3") 
                              && product.ram === "8 GB") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                      
                              )
                              }
                              
                              })
                      
                              const MiniPcDDRThreeEightGigPageLocation = MiniPC.map((product, index) => {
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
                      
                              const MiniPcDDRThreeSixteenGigPage = MiniPC.map((product, index) => {
                                if ((product.ramGeneration === "DDR3") &&
                                 (product.ram !== "4 GB" && product.ram !== "8 GB")) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                      
                                )
                                }
                                
                                })
                      
                                const MiniPcDDRThreeSixteenGigPageLocation = MiniPC.map((product, index) => {
                                  if ((product.ramGeneration === "DDR3") &&
                                   (product.ram !== "4 GB" && product.ram !== "8 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                   || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                   || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                   || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                    && product.Gobabis === true))) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                        
                                  )
                                  }
                                  
                                  })


                          const MiniPcDDRFourFourtGigPage = MiniPC.map((product, index) => {
                            if (product.ramGeneration === "DDR4" && product.ram === "4 GB") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                    
                            )
                            }
                            
                            })
                    
                            const MiniPcDDRFourFourtGigPageLocation = MiniPC.map((product, index) => {
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
                    
                            const MiniPcDDRFourEightGigPage = MiniPC.map((product, index) => {
                              if (product.ramGeneration === "DDR4" && product.ram === "8 GB") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                    
                              )
                              }
                              
                              })
                    
                              const MiniPcDDRFourEightGigPageLocation = MiniPC.map((product, index) => {
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
                    
                              const MiniPcDDRFourSixteentGigPage = MiniPC.map((product, index) => {
                                if (product.ramGeneration === "DDR4" && (product.ram !== "4 GB" && product.ram !== "8 GB")) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                    
                                )
                                }
                                
                                })
                    
                                const MiniPcDDRFourSixteentGigPageLocation = MiniPC.map((product, index) => {
                                  if ((product.ramGeneration === "DDR4" && (product.ram !== "4 GB" && product.ram !== "8 GB")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                   && product.Gobabis === true))) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                      
                                  )
                                  }
                                  
                                  })

                    
                            const MiniPcDDRFiveFourGigPage = MiniPC.map((product, index) => {
                              if (product.ramGeneration === "DDR5" && product.ram === "4 GB") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                    
                              )
                              }
                              
                              })
          
                              const MiniPcDDRFiveFourGigPageLocation = MiniPC.map((product, index) => {
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
                    
                              const MiniPcDDRFiveEightGigPage = MiniPC.map((product, index) => {
                                if (product.ramGeneration === "DDR5" && product.ram === "8 GB") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                    
                                )
                                }
                                
                                })
                    
                                const MiniPcDDRFiveEightGigPageLocation = MiniPC.map((product, index) => {
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
                    
                                const MiniPcDDRFiveSixteenGigPage = MiniPC.map((product, index) => {
                                  if (product.ramGeneration === "DDR5" && (product.ram !== "4 GB" && product.ram !== "8 GB")) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                    
                                  )
                                  }
                                  
                                  })
                    
                                  const MiniPcDDRFiveSixteenGigPageLocation = MiniPC.map((product, index) => {
                                    if ((product.ramGeneration === "DDR5" && (product.ram !== "4 GB" && product.ram !== "8 GB")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                     && product.Gobabis === true))) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                      
                                    )
                                    }
                                    
                                    })


                          const IMacTwoFiftySixGigPage = iMacPc.map((product, index) => {
                            if (product.storageCapacity === "256 GB") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                      
                            )
                            }
                            
                            })
                      
                            const IMacTwoFiftySixGigPageLocation = iMacPc.map((product, index) => {
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
                      
                            const IMacFiveTwelveGigPage = iMacPc.map((product, index) => {
                              if (product.storageCapacity === "512 GB") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                      
                              )
                              }
                              
                              })
                      
                              const IMacFiveTwelveGigPageLocation = iMacPc.map((product, index) => {
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
                      
                                const IMacTerabyteGigPage = iMacPc.map((product, index) => {
                                  if (product.storageCapacity === "1 TB") {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                          
                                  )
                                  }
                                  
                                  })

                                  const IMacTerabyteGigPageLocation = iMacPc.map((product, index) => {
                                    if (product.storageCapacity === "1 TB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                     && product.Gobabis === true))) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                              
                                    )
                                    }
                                    
                                    })


                                    const MiniMacStudioTwoFiftySixGigPage = MiniMacPC.map((product, index) => {
                                      if (product.storageCapacity === "256 GB") {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                                
                                      )
                                      }
                                      
                                      })
                                
                                      const MiniMacStudioTwoFiftySixGigPageLocation = MiniMacPC.map((product, index) => {
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
                                
                                      const MiniMacStudioFiveTwelveGigPage = MiniMacPC.map((product, index) => {
                                        if (product.storageCapacity === "512 GB") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                
                                        )
                                        }
                                        
                                        })
                                
                                        const MiniMacStudioFiveTwelveGigPageLocation = MiniMacPC.map((product, index) => {
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
                                
                                          const MiniMacStudioTerabyteGigPage = MiniMacPC.map((product, index) => {
                                            if (product.storageCapacity === "1 TB") {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
                                    
                                            )
                                            }
                                            
                                            })
          
                                            const MiniMacStudioTerabyteGigPageLocation = MiniMacPC.map((product, index) => {
                                              if (product.storageCapacity === "1 TB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
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
      <span className='Category_selectTabs_span'>Desktop PC</span>
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
  onClick={()=> {ListedItemCategory(0); ToggleSelectTabs(0); MemoryDesktopCategory(1)}}
  ><div>
    <img 
    src='https://i.dell.com/sites/csimages/App-Merchandizing_Images/en/indhs-Inspiron-3020-Small-desktop.png?qlt=90,0&op_usm=1.75,0.3,2,0&resMode=sharp&pscan=auto&fmt=png-alpha&hei=500'
    className={toggleListedItem ===0 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Desktops</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ListedItemCategory(1); ToggleSelectTabs(0); MemoryDesktopCategory(1); GetAIO()}}
  ><div>
    <img 
    src='https://i.imgur.com/i9UxT9Y.png'
    className={toggleListedItem ===1 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>All in One</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ListedItemCategory(2); ToggleSelectTabs(0); MemoryDesktopCategory(); GetiMac()}}
  ><div>
    <img 
    src='https://i.imgur.com/wN6myM0.png'
    className={toggleListedItem ===2 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>iMac</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ListedItemCategory(3); ToggleSelectTabs(0); MemoryDesktopCategory(1); GetMiniPc()}}
  ><div>
    <img 
    src='https://i.imgur.com/FKXkbnn.png'
    className={toggleListedItem ===3 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Mini PC</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ListedItemCategory(4); ToggleSelectTabs(0); MemoryDesktopCategory(); GetMacMini()}}
  ><div>
    <img 
    src='https://i.imgur.com/wFBfBBr.png'
    className={toggleListedItem ===4 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Mac Mini & Studio</span>
  </div>
    
   </div>


   <div className="Select_image_product"
  >
    <a 
    // href='/specify-pc'
    >
      <div>
    <img src="https://plecom.imgix.net/bo-643423-header_badges.png?auto=format"
   className="Image_Background_link_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Specify PC</span>
  </div>
    </a>
   </div>

   <div className="Select_image_product"
  >
    <a>
      <div>
    <img src="https://m.media-amazon.com/images/I/71fH1bumcBL.jpg"
   className="Image_Background_link_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Peripherals</span>
  </div>
    </a>
   </div>

   <div className="Select_image_product"
  >
    <a href='/monitors'>
      <div>
    <img src="https://www.hp.com/content/dam/sites/worldwide/personal-computers/consumer/monitors-accessories/computer-monitors-b/HP%20E27%20G5@2x.png"
   className="Image_Background_link_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Monitors</span>
  </div>
    </a>
   </div>

   <div className="Select_image_product"
  >
    <a>
      <div>
    <img src="https://m.media-amazon.com/images/I/71nc4XdibXS.jpg"
   className="Image_Background_link_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Graphics Cards</span>
  </div>
    </a>
   </div>


</Carousel>

    </div>

    <div className={toggleListedItem ===0 || toggleListedItem ===3 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={SelectTabs ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(0)}} >
            <span>All PC's</span>
          </div>
    <div className={SelectTabs ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(1)}} >
            <span>DDR3</span>
          </div>
          <div className={SelectTabs ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(2)}} >
          <span>DDR4</span>
          </div>
          <div className={SelectTabs ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(3)}} >
          <span>DDR5</span>
          </div>
    </div>

    <div className={toggleListedItem ===1 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={SelectTabs ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(0)}} >
            <span>All AIOs</span>
          </div>
          <div className={SelectTabs ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(1)}} >
          <span>DDR4</span>
          </div>
          <div className={SelectTabs ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(2)}} >
          <span>DDR5</span>
          </div>
    </div>

    <div className={toggleListedItem ===2 || toggleListedItem ===4 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={SelectTabs ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(0)}} >
            <span>256 GB</span>
          </div>
          <div className={SelectTabs ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(1)}} >
          <span>512 GB</span>
          </div>
          <div className={SelectTabs ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ToggleSelectTabs(2)}} >
          <span>1 TB</span>
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

    <div className={toggleListedItem ===0 || toggleListedItem ===1 || toggleListedItem ===3 ? 'My_location_items_choose_box' : 'Listed_fetched_products-hide'}>
    <div 
    className='Item_options_Front_box'>
      <span>RAM</span>
    </div>
    <div 
    className={toggleMemorySizeDesktop === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryDesktopCategory(1)}}>
      <span>4 GB</span>
    </div>
    <div 
    className={toggleMemorySizeDesktop === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryDesktopCategory(2)}}>
      <span>8 GB</span>
    </div>
    <div 
    className={toggleMemorySizeDesktop === 3 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryDesktopCategory(3)}}>
      <span>16+ GB</span>
    </div>
    </div>

  </div>


{/* All and Storages GB*/}
{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopFourGigPage}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopEightGigPage}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopSixteenGigPage}
</div>
}

{/* All DesktopDDRThree */}
{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRThreeFourGigPage}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRThreeEightGigPage}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRThreeSixteenGigPage}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFourFourtGigPage}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFourEightGigPage}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFourSixteentGigPage}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFiveFourGigPage}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFiveEightGigPage}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFiveSixteenGigPage}
</div>
}


{/* AIOs */}
{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcFourGigPage}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcEightGigPage}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcSixteenGigPage}
</div>
}


{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFourFourGigPage}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFourEightGigPage}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFourSixteentGigPage}
</div>
}



{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFiveFourGigPage}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFiveEightGigPage}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFiveSixteenGigPage}
</div>
}



{/* iMac */}
{iMacPc && iMacPc.length === undefined ?
  <></>
  :
  iMacPc && iMacPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 2 && SelectTabs === 0 ) && ToggleLocation === false ?
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
<div className={(toggleListedItem === 2 && SelectTabs === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IMacTwoFiftySixGigPage}
</div>
}

{iMacPc && iMacPc.length === undefined ?
  <></>
  :
  iMacPc && iMacPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 2 && SelectTabs === 1 ) && ToggleLocation === false ?
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
<div className={(toggleListedItem === 2 && SelectTabs === 1 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IMacFiveTwelveGigPage}
</div>
}

{iMacPc && iMacPc.length === undefined ?
  <></>
  :
  iMacPc && iMacPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 2 && SelectTabs === 2 ) && ToggleLocation === false ?
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
<div className={(toggleListedItem === 2 && SelectTabs === 2 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IMacTerabyteGigPage}
</div>
}


{/* All Mini Pc and Storages GB*/}
{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcFourGigPage}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcEightGigPage}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcSixteenGigPage}
</div>
}

{/* All DesktopDDRThree */}
{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRThreeFourGigPage}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRThreeEightGigPage}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRThreeSixteenGigPage}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFourFourtGigPage}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFourEightGigPage}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFourSixteentGigPage}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFiveFourGigPage}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFiveEightGigPage}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === false && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFiveSixteenGigPage}
</div>
}


{/* Mini Mac & Studio */}
{MiniMacPC && MiniMacPC.length === undefined ?
  <></>
  :
  MiniMacPC && MiniMacPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 4 && SelectTabs === 0 ) && ToggleLocation === false ?
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
<div className={(toggleListedItem === 4 && SelectTabs === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniMacStudioTwoFiftySixGigPage}
</div>
}

{MiniMacPC && MiniMacPC.length === undefined ?
  <></>
  :
  MiniMacPC && MiniMacPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 4 && SelectTabs === 1 ) && ToggleLocation === false ?
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
<div className={(toggleListedItem === 4 && SelectTabs === 1 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniMacStudioFiveTwelveGigPage}
</div>
}

{MiniMacPC && MiniMacPC.length === undefined ?
  <></>
  :
  MiniMacPC && MiniMacPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 4 && SelectTabs === 2 ) && ToggleLocation === false ?
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
<div className={(toggleListedItem === 4 && SelectTabs === 2 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniMacStudioTerabyteGigPage}
</div>
}




{/* Location */}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopFourGigPageLocation}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopEightGigPageLocation}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopSixteenGigPageLocation}
</div>
}

{/* Location DesktopDDRThree */}
{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRThreeFourGigPageLocation}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRThreeEightGigPageLocation}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRThreeSixteenGigPageLocation}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFourFourtGigPageLocation}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFourEightGigPageLocation}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFourSixteentGigPageLocation}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFiveFourGigPageLocation}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFiveEightGigPageLocation}
</div>
}

{DeskstopPc && DeskstopPc.length === undefined ?
  <></>
  :
  DeskstopPc && DeskstopPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 0 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DeskstopDDRFiveSixteenGigPageLocation}
</div>
}


{/* AIOs Location */}
{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcFourGigPageLocation}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcEightGigPageLocation}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcSixteenGigPageLocation}
</div>
}


{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFourFourGigPageLocation}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFourEightGigPageLocation}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFourSixteentGigPageLocation}
</div>
}


{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFiveFourGigPageLocation}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFiveEightGigPageLocation}
</div>
}

{AIOPC && AIOPC.length === undefined ?
  <></>
  :
  AIOPC && AIOPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 1 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {AioPcDDRFiveSixteenGigPageLocation}
</div>
}


{iMacPc && iMacPc.length === undefined ?
  <></>
  :
  iMacPc && iMacPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 2 && SelectTabs === 0 ) && ToggleLocation === true ?
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
<div className={(toggleListedItem === 2 && SelectTabs === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IMacTwoFiftySixGigPageLocation}
</div>
}

{iMacPc && iMacPc.length === undefined ?
  <></>
  :
  iMacPc && iMacPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 2 && SelectTabs === 1 ) && ToggleLocation === true ?
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
<div className={(toggleListedItem === 2 && SelectTabs === 1 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IMacFiveTwelveGigPageLocation}
</div>
}

{iMacPc && iMacPc.length === undefined ?
  <></>
  :
  iMacPc && iMacPc.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 2 && SelectTabs === 2 ) && ToggleLocation === true ?
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
<div className={(toggleListedItem === 2 && SelectTabs === 2 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {IMacTerabyteGigPageLocation}
</div>
}



{/* All Mini Pc and Storages GB*/}
{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcFourGigPageLocation}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcEightGigPageLocation}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 0 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcSixteenGigPageLocation}
</div>
}

{/* All DesktopDDRThree */}
{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRThreeFourGigPageLocation}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRThreeEightGigPageLocation}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 1 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRThreeSixteenGigPageLocation}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFourFourtGigPageLocation}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFourEightGigPageLocation}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 2 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFourSixteentGigPageLocation}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFiveFourGigPageLocation}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFiveEightGigPageLocation}
</div>
}

{MiniPC && MiniPC.length === undefined ?
  <></>
  :
  MiniPC && MiniPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ?
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
<div className={(toggleListedItem === 3 && SelectTabs === 3 ) && ToggleLocation === true && toggleMemorySizeDesktop === 3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniPcDDRFiveSixteenGigPageLocation}
</div>
}


{MiniMacPC && MiniMacPC.length === undefined ?
  <></>
  :
  MiniMacPC && MiniMacPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 4 && SelectTabs === 0 ) && ToggleLocation === true ?
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
<div className={(toggleListedItem === 4 && SelectTabs === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniMacStudioTwoFiftySixGigPageLocation}
</div>
}

{MiniMacPC && MiniMacPC.length === undefined ?
  <></>
  :
  MiniMacPC && MiniMacPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 4 && SelectTabs === 1 ) && ToggleLocation === true ?
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
<div className={(toggleListedItem === 4 && SelectTabs === 1 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniMacStudioFiveTwelveGigPageLocation}
</div>
}

{MiniMacPC && MiniMacPC.length === undefined ?
  <></>
  :
  MiniMacPC && MiniMacPC.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(toggleListedItem === 4 && SelectTabs === 2 ) && ToggleLocation === true ?
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
<div className={(toggleListedItem === 4 && SelectTabs === 2 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {MiniMacStudioTerabyteGigPageLocation}
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

export default Desktops