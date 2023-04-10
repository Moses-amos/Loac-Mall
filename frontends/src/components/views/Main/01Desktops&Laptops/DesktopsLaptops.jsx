import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import BackgroundImage from '../Images/babyblue background.jpg'
import LaptopImage from './Images/laptop-removebg-preview.png'
import DesktopImage from './Images/Desktop.png'

// import './desktopslaptops.css'
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

function DesktopsLaptops() {

  const [togglePageCategory, settogglePageCategory] = useState(1)
  const [toggleBrands, settoggleBrands] = useState(0)
  const [toggleMemoySizelaptop, settoggleMemoySizelaptop] = useState(1)
  const [toggleMemorySizeDesktop, settoggleMemorySizeDesktop] = useState(1)
  const [Laptops, setLaptops] = useState([])
  const [Desktops, setDesktops] = useState([])
  const [Products, setProducts] = useState([])
  const [UserData, setUserData] = useState([])
  const [LaptopValue, setLaptopValue] = useState("Laptop")
  const [DesktopValue, setDesktopValue] = useState("Desktop Pc")
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
      product: LaptopValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
  setLaptops(response.data.products)
  } else {
  }
  })

  Axios.get('/api/users/getUser')
.then(response => {
    if (response.data.success) {
    //   (response.data.doc);
      setUserData(response.data.doc)
    }
})
  
  }, [])

  useEffect(() => {
    const variable = {
      product: DesktopValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setDesktops(response.data.products)
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

  const PageCategory = (index) => {
    settogglePageCategory(index);
  }

  const BrandCategory = (index) => {
    settoggleBrands(index);
  }

  const MemoryLaptopCategory = (index) => {
    settoggleMemoySizelaptop(index);
  }

  const MemoryDesktopCategory = (index) => {
    settoggleMemorySizeDesktop(index);
  }

  const LaptopsFourGigPage = Laptops.map((product, index) => {
    if (product.ram === "4 GB") {
    return (
      <ProductCart key={index} UserData={UserData} product={product} />

    )
    }
    
    })

    const LaptopsFourGigPageLocation = Laptops.map((product, index) => {
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

    const LaptopsEightGigPage = Laptops.map((product, index) => {
      if (product.ram === "8 GB") {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      }
      
      })

      const LaptopsEightGigPageLocation = Laptops.map((product, index) => {
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
    
        const LaptopsSixteenGigPage = Laptops.map((product, index) => {

          if (product.ram !== "4 GB" && product.ram !== "8 GB") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })

        const LaptopsSixteenGigPageLocation = Laptops.map((product, index) => {

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

        const LaptopsLenovoFourGigPage = Laptops.map((product, index) => {

            if (product.ram === "4 GB" && product.seriesName === "Lenovo") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
            )
            }
            
            })

        const LaptopsLenovoFourGigPageLocation = Laptops.map((product, index) => {

          if ((product.ram === "4 GB" && product.seriesName === "Lenovo") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true))) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })
      
          const LaptopsLenovoEightGigPage = Laptops.map((product, index) => {
      
            if (product.ram === "8 GB" && product.seriesName === "Lenovo") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const LaptopsLenovoEightGigPageLocation = Laptops.map((product, index) => {
      
              if ((product.ram === "8 GB" && product.seriesName === "Lenovo") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })

            const LaptopsLenovoSixteenGigPage = Laptops.map((product, index) => {
      
              if (product.ram !== "4 GB" && (product.ram !== "8 GB" 
              && product.seriesName === "Lenovo")) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const LaptopsLenovoSixteenGigPageLocation = Laptops.map((product, index) => {
      
                if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                && product.seriesName === "Lenovo")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })

              const LaptopsAcerFourGigPage = Laptops.map((product, index) => {

                if (product.ram === "4 GB"
                && product.seriesName === "Acer") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const LaptopsAcerFourGigPageLocation = Laptops.map((product, index) => {

                  if ((product.ram === "4 GB" 
                  && product.seriesName === "Acer") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
  
                  )
                  }
                  
                  })
            
                const LaptopsAcerEightGigPage = Laptops.map((product, index) => {
            
                  if (product.ram === "8 GB"
                  && product.seriesName === "Acer") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />

                  )
                  }
                  
                  })

                  const LaptopsAcerEightGigPageLocation = Laptops.map((product, index) => {
            
                    if ((product.ram === "8 GB"
                    && product.seriesName === "Acer") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
  
                    )
                    }
                    
                    })
                
                  const LaptopsAcerSixteenGigPage = Laptops.map((product, index) => {
            
                    if (product.ram !== "4 GB" && (product.ram !== "8 GB" 
                    && product.seriesName === "Acer")) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />

                    )
                    }
                    
                    })

                    const LaptopsAcerSixteenGigPageLocation = Laptops.map((product, index) => {
            
                      if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                      && product.seriesName === "Acer")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
  
                      )
                      }
                      
                      })

                    const LaptopsHPFourGigPage = Laptops.map((product, index) => {

                      if (product.ram === "4 GB" 
                      && product.seriesName === "HP") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />

                      )
                      }
                      
                      })

                      const LaptopsHPFourGigPageLocation = Laptops.map((product, index) => {

                        if ((product.ram === "4 GB" 
                        && product.seriesName === "HP") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
  
                        )
                        }
                        
                        })
                  
                      const LaptopsHPEightGigPage = Laptops.map((product, index) => {
                  
                        if (product.ram === "8 GB"
                        && product.seriesName === "HP") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />

                        )
                        }
                        
                        })

                        const LaptopsHPEightGigPageLocation = Laptops.map((product, index) => {
                  
                          if ((product.ram === "8 GB"
                          && product.seriesName === "HP") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
  
                          )
                          }
                          
                          })
                      
                        const LaptopsHPSixteenGigPage = Laptops.map((product, index) => {
                  
                          if (product.ram !== "4 GB" && (product.ram !== "8 GB" 
                          && product.seriesName === "HP")) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />

                          )
                          }
                          
                          })

                          const LaptopsHPSixteenGigPageLocation = Laptops.map((product, index) => {
                  
                            if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                            && product.seriesName === "HP")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
  
                            )
                            }
                            
                            })

                          const LaptopsAsusFourGigPage = Laptops.map((product, index) => {

                            if (product.ram === "4 GB"
                            && product.seriesName === "Asus") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />

                            )
                            }
                            
                            })

                            const LaptopsAsusFourGigPageLocation = Laptops.map((product, index) => {

                              if ((product.ram === "4 GB"
                              && product.seriesName === "Asus") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
  
                              )
                              }
                              
                              })
                        
                            const LaptopsAsusEightGigPage = Laptops.map((product, index) => {
                        
                              if (product.ram === "8 GB" 
                              && product.seriesName === "Asus") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />

                              )
                              }
                              
                              })

                              const LaptopsAsusEightGigPageLocation = Laptops.map((product, index) => {
                        
                                if ((product.ram === "8 GB" 
                                && product.seriesName === "Asus") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true))) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                )
                                }
                                
                                })
                            
                              const LaptopsAsusSixteenGigPage = Laptops.map((product, index) => {
                        
                                if (product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                && product.seriesName === "Asus")) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />

                                )
                                }
                                
                                })

                                const LaptopsAsusSixteenGigPageLocation = Laptops.map((product, index) => {
                        
                                  if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                  && product.seriesName === "Asus")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                   && product.Gobabis === true))) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                  )
                                  }
                                  
                                  })

                                const LaptopsDellFourGigPage = Laptops.map((product, index) => {

                                  if (product.ram === "4 GB"
                                  && product.seriesName === "Dell") {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />

                                  )
                                  }
                                  
                                  })

                                  const LaptopsDellFourGigPageLocation = Laptops.map((product, index) => {

                                    if ((product.ram === "4 GB" 
                                    && product.seriesName === "Dell") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                     && product.Gobabis === true))) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                    )
                                    }
                                    
                                    })
                              
                                  const LaptopsDellEightGigPage = Laptops.map((product, index) => {
                              
                                    if (product.ram === "8 GB" 
                                    && product.seriesName === "Dell") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />

                                    )
                                    }
                                    
                                    })

                                    const LaptopsDellEightGigPageLocation = Laptops.map((product, index) => {
                              
                                      if ((product.ram === "8 GB"
                                      && product.seriesName === "Dell") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                      )
                                      }
                                      
                                      })
                                  
                                    const LaptopsDellSixteenGigPage = Laptops.map((product, index) => {
                              
                                      if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                      && product.seriesName === "Dell"))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />

                                      )
                                      }
                                      
                                      })

                                      const LaptopsDellSixteenGigPageLocation = Laptops.map((product, index) => {
                              
                                        if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                        && product.seriesName === "Dell")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                         && product.Gobabis === true))) {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                        )
                                        }
                                        
                                        })

                                      const LaptopsSamsungFourGigPage = Laptops.map((product, index) => {

                                        if (product.ram === "4 GB" 
                                        && product.seriesName === "Samsung") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />

                                        )
                                        }
                                        
                                        })

                                        const LaptopsSamsungFourGigPageLocation = Laptops.map((product, index) => {

                                          if ((product.ram === "4 GB" 
                                          && product.seriesName === "Samsung") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
  
                                          )
                                          }
                                          
                                          })
                                    
                                        const LaptopsSamsungEightGigPage = Laptops.map((product, index) => {
                                    
                                          if (product.ram === "8 GB"
                                          && product.seriesName === "Samsung") {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />

                                          )
                                          }
                                          
                                          })

                                          const LaptopsSamsungEightGigPageLocation = Laptops.map((product, index) => {
                                    
                                            if ((product.ram === "8 GB"
                                            && product.seriesName === "Samsung") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                             && product.Gobabis === true))) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
  
                                            )
                                            }
                                            
                                            })
                                        
                                          const LaptopsSamsungSixteenGigPage = Laptops.map((product, index) => {
                                    
                                            if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                            && product.seriesName === "Samsung"))) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />

                                            )
                                            }
                                            
                                            })

                                            const LaptopsSamsungSixteenGigPageLocation = Laptops.map((product, index) => {
                                    
                                              if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                              && product.seriesName === "Samsung")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                               && product.Gobabis === true))) {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />
  
                                              )
                                              }
                                              
                                              })

                                            const LaptopsAppleFourGigPage = Laptops.map((product, index) => {

                                              if (product.ram === "4 GB" 
                                              && product.seriesName === "Apple") {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />

                                              )
                                              }
                                              
                                              })

                                              const LaptopsAppleFourGigPageLocation = Laptops.map((product, index) => {

                                                if ((product.ram === "4 GB" 
                                                && product.seriesName === "Apple") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                 && product.Gobabis === true))) {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                                )
                                                }
                                                
                                                })
                                          
                                              const LaptopsAppleEightGigPage = Laptops.map((product, index) => {
                                          
                                                if (product.ram === "8 GB"
                                                && product.seriesName === "Apple") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />

                                                )
                                                }
                                                
                                                })

                                                const LaptopsAppleEightGigPageLocation = Laptops.map((product, index) => {
                                          
                                                  if ((product.ram === "8 GB" 
                                                  && product.seriesName === "Apple") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                   && product.Gobabis === true))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                                  )
                                                  }
                                                  
                                                  })
                                              
                                                const LaptopsAppleSixteenGigPage = Laptops.map((product, index) => {
                                          
                                                  if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                                  && product.seriesName === "Apple"))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />

                                                  )
                                                  }
                                                  
                                                  })

                                                  const LaptopsAppleSixteenGigPageLocation = Laptops.map((product, index) => {
                                          
                                                    if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                                    && product.seriesName === "Apple")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                     && product.Gobabis === true))) {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                                    )
                                                    }
                                                    
                                                    })

                                                  const LaptopsToshibaFourGigPage = Laptops.map((product, index) => {

                                                    if (product.ram === "4 GB"
                                                    && product.seriesName === "Toshiba") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                    )
                                                    }
                                                    
                                                    })

                                                    const LaptopsToshibaFourGigPageLocation = Laptops.map((product, index) => {

                                                      if ((product.ram === "4 GB"
                                                      && product.seriesName === "Toshiba") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                      )
                                                      }
                                                      
                                                      })
                                                
                                                    const LaptopsToshibaEightGigPage = Laptops.map((product, index) => {
                                                
                                                      if (product.ram === "8 GB"
                                                      && product.seriesName === "Toshiba") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                      )
                                                      }
                                                      
                                                      })

                                                      const LaptopsToshibaEightGigPageLocation = Laptops.map((product, index) => {
                                                
                                                        if ((product.ram === "8 GB" 
                                                        && product.seriesName === "Toshiba") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                                        )
                                                        }
                                                        
                                                        })
                                                    
                                                      const LaptopsToshibaSixteenGigPage = Laptops.map((product, index) => {
                                                
                                                        if (product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                                        && product.seriesName === "Toshiba")) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />

                                                        )
                                                        }
                                                        
                                                        })

                                                        const LaptopsToshibaSixteenGigPageLocation = Laptops.map((product, index) => {
                                                
                                                          if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                                          && product.seriesName === "Toshiba")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                           && product.Gobabis === true))) {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
  
                                                          )
                                                          }
                                                          
                                                          })

                                                  const LaptopsOtherFourGigPage = Laptops.map((product, index) => {

                                                    if (product.ram === "4 GB" 
                                                    && product.seriesName === "Other") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                    )
                                                    }
                                                    
                                                    })

                                                    const LaptopsOtherFourGigPageLocation = Laptops.map((product, index) => {

                                                      if ((product.ram === "4 GB" 
                                                      && product.seriesName === "Other") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                      )
                                                      }
                                                      
                                                      })
                                                
                                                    const LaptopsOtherEightGigPage = Laptops.map((product, index) => {
                                                
                                                      if (product.ram === "8 GB"
                                                      && product.seriesName === "Other") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                      )
                                                      }
                                                      
                                                      })

                                                      const LaptopsOtherEightGigPageLocation = Laptops.map((product, index) => {
                                                
                                                        if ((product.ram === "8 GB" 
                                                        && product.seriesName === "Other") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                                        )
                                                        }
                                                        
                                                        })
                                                    
                                                      const LaptopsOtherSixteenGigPage = Laptops.map((product, index) => {
                                                
                                                        if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                                        && product.seriesName === "Other"))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />

                                                        )
                                                        }
                                                        
                                                        })

                                                        const LaptopsOtherSixteenGigPageLocation = Laptops.map((product, index) => {
                                                
                                                          if ((product.ram !== "4 GB" && (product.ram !== "8 GB" 
                                                          && product.seriesName === "Other")) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                           && product.Gobabis === true))) {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
  
                                                          )
                                                          }
                                                          
                                                          })

                                                        const DesktopsFourGigPage = Desktops.map((product, index) => {
                                                
                                                          if (product.ram === "4 GB") {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />

                                                          )
                                                          }
                                                          
                                                          })

                                                          const DesktopsFourGigPageLocation = Desktops.map((product, index) => {
                                                
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

                                                          const DesktopsEightGigPage = Desktops.map((product, index) => {
                                                
                                                            if (product.ram === "8 GB") {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />

                                                            )
                                                            }
                                                            
                                                            })

                                                            const DesktopsEightGigPageLocation = Desktops.map((product, index) => {
                                                
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

                                                            const DesktopsSixteenGigPage = Desktops.map((product, index) => {
                                                
                                                              if ((product.ram !== "4 GB") && product.ram !== "8 GB") {
                                                              return (
                                                                <ProductCart key={index} UserData={UserData} product={product} />

                                                              )
                                                              }
                                                              
                                                              })

                                                              const DesktopsSixteenGigPageLocation = Desktops.map((product, index) => {
                                                
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

  return (
    <div style={{ display: 'block'}}>
  <SearchBar showResults={clickSearch} refreshFunction={updateSearchTerms} />
  {SearchTerms === "" ?
<div className='Visited_container-wrapper'>
<div className='Visited_page-banner'>
  <div className='Page_banner-style'>
    <div className='Page_select-option'>
      <div onClick={()=> {PageCategory(1); BrandCategory(0); MemoryLaptopCategory(1)}}
       className={togglePageCategory ===1 ? "Page-option_selects_toggle active-image_page_selected" : "Page-option_selects_toggle"}>
        <img className="image_page_selected" 
        src={LaptopImage} alt=""
        />
        <div className='Image_Description_hover_box'>
        <div className='Image_Description_hover'>
          Laptops
        </div>
        </div>

      </div>

      <div onClick={()=> {PageCategory(2); BrandCategory(99); MemoryDesktopCategory(1)}}
       className={togglePageCategory ===2 ? "Page-option_selects_toggle active-image_page_selected" : "Page-option_selects_toggle"}>
      <img className="image_page_selected_full"
      src={DesktopImage}
      alt=""
       />
      <div className='Image_Description_hover_box_full'>
        <div className='Image_Description_hover'>
        Desktops
        </div>
        </div>
         </div>

         {UserData.length === 0 ?
      <div className='Page_My_Location_Two'>
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
      <button className='Page_Choose_Location_Two'>
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
    <button onClick={PopupSelectLocation} className={SelectLocation === true ? "Page_Choose_Button_Location-active_Two" : "Page_Choose_Button_Location_Two"}>
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
  <button onClick={PopupSelectLocation} className={SelectLocation === true ? "Page_Choose_Button_Location-active_Two" : "Page_Choose_Button_Location_Two"}>
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
      <img src={BackgroundImage} className='Background_Image_style' />
    </div>
    <div className='Page_brand-options_box'>
      <div className={togglePageCategory ===1 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
     <div className='Brand_opt-list'>
      <div className={toggleBrands ===0 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(0)}} >
            <span>All</span>
          </div>
        <div className={toggleBrands ===1 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>Acer</span>
          </div>
          <div className={toggleBrands ===2 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>HP</span>
          </div>
          <div className={toggleBrands ===3 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>Lenovo</span>
          </div>
          <div className={toggleBrands ===4 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(4)}} >
          <span>Asus</span>
          </div>
          <div className={toggleBrands ===5 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(5)}} >
          <span>Dell</span>
          </div>
          {/* <div className={toggleBrands ===6 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(6)}} >
          <span>Samsung</span>
          </div> */}
          <div className={toggleBrands ===7 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(7)}} >
          <span>MacBook</span>
          </div>
          <div className={toggleBrands ===8 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(8)}} >
          <span>Toshiba</span>
          </div>
          <div className={toggleBrands ===9 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(9)}} >
          <span>Other</span>
          </div>
     </div>


      </div>
      <div className={togglePageCategory ===2 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        </div>

      <div className={togglePageCategory ===1 ? "Memory_size_options_listed_first" : "Memory_size_options_listed-hide"}>
        {/* <div className='Memomry_size_option'><button className='Memory_option-style'>Memory:</button></div> */}
        <div className='Memomry_size_option-list'>
          <button onClick={()=> {MemoryLaptopCategory(1)}}
          className={toggleMemoySizelaptop ===1 ? "Memory_size_option_selected_style active-Memory_size_option_selected_style Memory_size_option_selected_style-left" : "Memory_size_option_selected_style Memory_size_option_selected_style-left"}
          >4 Gb</button>
          <button onClick={()=> {MemoryLaptopCategory(2)}}
          className={toggleMemoySizelaptop ===2 ? "Memory_size_option_selected_style active-Memory_size_option_selected_style Memory_size_option_selected_style-left" : "Memory_size_option_selected_style Memory_size_option_selected_style-left"}>8 Gb</button>

          <button onClick={()=> {MemoryLaptopCategory(3)}}
          className={toggleMemoySizelaptop ===3 ? "Memory_size_option_selected_style active-Memory_size_option_selected_style" : "Memory_size_option_selected_style"}>16 Gb+</button>
          </div>
      </div>

      <div className={togglePageCategory ===2 ? "Memory_size_options_listed_first" : "Memory_size_options_listed-hide"}>
          <div className='Memomry_size_option-list'>
          <button onClick={()=> {MemoryDesktopCategory(1)}}
          className={toggleMemorySizeDesktop ===1 ? "Memory_size_option_selected_style active-Memory_size_option_selected_style Memory_size_option_selected_style-left" : "Memory_size_option_selected_style Memory_size_option_selected_style-left"}
          >4 Gb</button>
          <button onClick={()=> {MemoryDesktopCategory(2)}}
          className={toggleMemorySizeDesktop ===2 ? "Memory_size_option_selected_style active-Memory_size_option_selected_style Memory_size_option_selected_style-left" : "Memory_size_option_selected_style Memory_size_option_selected_style-left"}>8 Gb</button>

          <button onClick={()=> {MemoryDesktopCategory(3)}}
          className={toggleMemorySizeDesktop ===3 ? "Memory_size_option_selected_style active-Memory_size_option_selected_style" : "Memory_size_option_selected_style"}>16 Gb+</button>
          </div>
      </div>
    </div>
  </div>
</div>

{/* All Laptops*/}
<div className={toggleBrands === 0 && toggleMemoySizelaptop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsFourGigPage}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsEightGigPage}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSixteenGigPage}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsFourGigPageLocation}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsEightGigPageLocation}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSixteenGigPageLocation}
</div>

{/* Acer Laptops*/}
<div className={toggleBrands === 1 && toggleMemoySizelaptop === 1 && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerFourGigPage}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerEightGigPage}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerSixteenGigPage}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 1 && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerFourGigPageLocation}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerEightGigPageLocation}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerSixteenGigPageLocation}
</div>

{/* HP Laptops*/}
<div className={toggleBrands === 2 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPFourGigPage}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPEightGigPage}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPSixteenGigPage}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPFourGigPageLocation}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPEightGigPageLocation}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 3  && togglePageCategory === 1  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPSixteenGigPageLocation}
</div>

{/* Lenovo Laptops*/}
<div className={toggleBrands === 3 && toggleMemoySizelaptop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoFourGigPage}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoEightGigPage}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoSixteenGigPage}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoFourGigPageLocation}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoEightGigPageLocation}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoSixteenGigPageLocation}
</div>

{/* Asus Laptops*/}
<div className={toggleBrands === 4 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusFourGigPage}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusEightGigPage}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusSixteenGigPage}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusFourGigPageLocation}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusEightGigPageLocation}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusSixteenGigPageLocation}
</div>

{/* Dell Laptops*/}
<div className={toggleBrands === 5 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellFourGigPage}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellEightGigPage}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellSixteenGigPage}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellFourGigPageLocation}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellEightGigPageLocation}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellSixteenGigPageLocation}
</div>

{/* Samsung Laptops*/}
{/* 
<div className={toggleBrands === 6 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungFourGigPage}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungEightGigPage}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungSixteenGigPage}
</div> 

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungFourGigPageLocation}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungEightGigPageLocation}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungSixteenGigPageLocation}
</div> 
*/}

{/* Apple Laptops*/}
<div className={toggleBrands === 7 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleFourGigPage}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleEightGigPage}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleSixteenGigPage}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleFourGigPageLocation}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleEightGigPageLocation}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleSixteenGigPageLocation}
</div>

{/* Toshiba Laptops*/}
<div className={toggleBrands === 8 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaFourGigPage}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaEightGigPage}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaSixteenGigPage}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaFourGigPageLocation}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaEightGigPageLocation}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaSixteenGigPageLocation}
</div>


{/* Other Laptops*/}
<div className={toggleBrands === 9 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherFourGigPage}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherEightGigPage}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherSixteenGigPage}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 1  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherFourGigPageLocation}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 2  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherEightGigPageLocation}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 3  && togglePageCategory === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherSixteenGigPageLocation}
</div>

{/* Desktops */}
<div className={togglePageCategory === 2 && toggleMemorySizeDesktop === 1 && SelectLocation === false  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {DesktopsFourGigPage}
</div>

<div className={togglePageCategory === 2 && toggleMemorySizeDesktop === 2 && SelectLocation === false  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {DesktopsEightGigPage}
</div>

<div className={togglePageCategory === 2 && toggleMemorySizeDesktop === 3 && SelectLocation === false  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {DesktopsSixteenGigPage}
</div>

<div className={togglePageCategory === 2 && toggleMemorySizeDesktop === 1 && SelectLocation === true  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {DesktopsFourGigPageLocation}
</div>

<div className={togglePageCategory === 2 && toggleMemorySizeDesktop === 2 && SelectLocation === true  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {DesktopsEightGigPageLocation}
</div>

<div className={togglePageCategory === 2 && toggleMemorySizeDesktop === 3 && SelectLocation === true  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {DesktopsSixteenGigPageLocation}
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

export default DesktopsLaptops