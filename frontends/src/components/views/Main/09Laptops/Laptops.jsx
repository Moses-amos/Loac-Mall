import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import BackgroundImage from '../Images/babyblue background.jpg'
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

import './laptops.css'

function Laptops() {

  const [toggleMemoySizelaptop, settoggleMemoySizelaptop] = useState(1)
  const [Products, setProducts] = useState([])
  const [toggleBrands, settoggleBrands] = useState(0)
  const [UserData, setUserData] = useState([])
  const [Laptops, setLaptops] = useState([])
  const [LaptopValue, setLaptopValue] = useState("Laptop")
  const [ToggleLocation, setToggleLocation] = useState(false)
  const [HoverLocation, setHoverLocation] = useState(0)
  const [SelectLocation, setSelectLocation] = useState(false)
  const [LaptopSpecify, setLaptopSpecify] = useState(false)
  const [ToggleRamType, setToggleRamType] = useState(0)

  const SelectSpecify = () => setLaptopSpecify(!LaptopSpecify)

  const PopupSelectLocation = () => setSelectLocation(!SelectLocation)

  const PopupHover = (index) => {
    setHoverLocation(index);
  }

  const SetLocation = () => setToggleLocation(!ToggleLocation)
  

  const RamSelect = (index) => {
    setToggleRamType(index);
  }
  
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
      setUserData(response.data.doc)
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



  
  const [Skip, setSkip] = useState(0)
  const [Limit, setLimit] = useState(8)
  const [PostSize, setPostSize] = useState()
  const [SearchTerms, setSearchTerms] = useState("")
  const [searchResults, setSearchResults] = useState(false)


  const LaptopsFourGigPageDDRFour = Laptops.map((product, index) => {
    if (product.ram === "4 GB" && product.ramGeneration === "DDR4") {
    return (
      <ProductCart key={index} UserData={UserData} product={product} />

    )
    }
    
    })

    const LaptopsFourGigPageDDRFourLocation = Laptops.map((product, index) => {
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

    const LaptopsEightGigPageDDRFour = Laptops.map((product, index) => {
      if (product.ram === "8 GB" && product.ramGeneration === "DDR4") {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      }
      
      })

      const LaptopsEightGigPageDDRFourLocation = Laptops.map((product, index) => {
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
    
        const LaptopsSixteenGigPageDDRFour = Laptops.map((product, index) => {

          if ((product.ram !== "4 GB" && product.ram !== "8 GB") && product.ramGeneration === "DDR4") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })

        const LaptopsSixteenGigPageDDRFourLocation = Laptops.map((product, index) => {

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

        const LaptopsLenovoFourGigPageDDRFour = Laptops.map((product, index) => {

            if ((product.ram === "4 GB" && product.seriesName === "Lenovo") && product.ramGeneration === "DDR4") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
            )
            }
            
            })

        const LaptopsLenovoFourGigPageDDRFourLocation = Laptops.map((product, index) => {

          if ((product.ram === "4 GB" && product.seriesName === "Lenovo") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })
      
          const LaptopsLenovoEightGigPageDDRFour = Laptops.map((product, index) => {
      
            if ((product.ram === "8 GB" && product.seriesName === "Lenovo") && product.ramGeneration === "DDR4") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const LaptopsLenovoEightGigPageDDRFourLocation = Laptops.map((product, index) => {
      
              if ((product.ram === "8 GB" && product.seriesName === "Lenovo") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })

            const LaptopsLenovoSixteenGigPageDDRFour = Laptops.map((product, index) => {
      
              if ((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
              && product.seriesName === "Lenovo")) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const LaptopsLenovoSixteenGigPageDDRFourLocation = Laptops.map((product, index) => {
      
                if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
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

              const LaptopsAcerFourGigPageDDRFour = Laptops.map((product, index) => {

                if ((product.ram === "4 GB" && product.seriesName === "Acer") && product.ramGeneration === "DDR4") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const LaptopsAcerFourGigPageDDRFourLocation = Laptops.map((product, index) => {

                  if ((product.ram === "4 GB" && product.seriesName === "Acer") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
  
                  )
                  }
                  
                  })
            
                const LaptopsAcerEightGigPageDDRFour = Laptops.map((product, index) => {
            
                  if ((product.ram === "8 GB" && product.seriesName === "Acer") && product.ramGeneration === "DDR4") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />

                  )
                  }
                  
                  })

                  const LaptopsAcerEightGigPageDDRFourLocation = Laptops.map((product, index) => {
            
                    if ((product.ram === "8 GB" && product.seriesName === "Acer") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
  
                    )
                    }
                    
                    })
                
                  const LaptopsAcerSixteenGigPageDDRFour = Laptops.map((product, index) => {
            
                    if ((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                    && product.seriesName === "Acer")) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />

                    )
                    }
                    
                    })

                    const LaptopsAcerSixteenGigPageDDRFourLocation = Laptops.map((product, index) => {
            
                      if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
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

                    const LaptopsHPFourGigPageDDRFour = Laptops.map((product, index) => {

                      if ((product.ram === "4 GB" && product.seriesName === "HP") && product.ramGeneration === "DDR4") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />

                      )
                      }
                      
                      })

                      const LaptopsHPFourGigPageDDRFourLocation = Laptops.map((product, index) => {

                        if ((product.ram === "4 GB" && product.seriesName === "HP") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
  
                        )
                        }
                        
                        })
                  
                      const LaptopsHPEightGigPageDDRFour = Laptops.map((product, index) => {
                  
                        if ((product.ram === "8 GB" && product.seriesName === "HP") && product.ramGeneration === "DDR4") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />

                        )
                        }
                        
                        })

                        const LaptopsHPEightGigPageDDRFourLocation = Laptops.map((product, index) => {
                  
                          if ((product.ram === "8 GB" && product.seriesName === "HP") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
  
                          )
                          }
                          
                          })
                      
                        const LaptopsHPSixteenGigPageDDRFour = Laptops.map((product, index) => {
                  
                          if ((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                          && product.seriesName === "HP")) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />

                          )
                          }
                          
                          })

                          const LaptopsHPSixteenGigPageDDRFourLocation = Laptops.map((product, index) => {
                  
                            if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
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

                          const LaptopsAsusFourGigPageDDRFour = Laptops.map((product, index) => {

                            if ((product.ram === "4 GB" && product.seriesName === "Asus") && product.ramGeneration === "DDR4") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />

                            )
                            }
                            
                            })

                            const LaptopsAsusFourGigPageDDRFourLocation = Laptops.map((product, index) => {

                              if ((product.ram === "4 GB" && product.seriesName === "Asus") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
  
                              )
                              }
                              
                              })
                        
                            const LaptopsAsusEightGigPageDDRFour = Laptops.map((product, index) => {
                        
                              if ((product.ram === "8 GB" && product.seriesName === "Asus") && product.ramGeneration === "DDR4") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />

                              )
                              }
                              
                              })

                              const LaptopsAsusEightGigPageDDRFourLocation = Laptops.map((product, index) => {
                        
                                if ((product.ram === "8 GB" && product.seriesName === "Asus") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                )
                                }
                                
                                })
                            
                              const LaptopsAsusSixteenGigPageDDRFour = Laptops.map((product, index) => {
                        
                                if ((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                && product.seriesName === "Asus")) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />

                                )
                                }
                                
                                })

                                const LaptopsAsusSixteenGigPageDDRFourLocation = Laptops.map((product, index) => {
                        
                                  if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
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

                                const LaptopsDellFourGigPageDDRFour = Laptops.map((product, index) => {

                                  if ((product.ram === "4 GB" && product.seriesName === "Dell") && product.ramGeneration === "DDR4") {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />

                                  )
                                  }
                                  
                                  })

                                  const LaptopsDellFourGigPageDDRFourLocation = Laptops.map((product, index) => {

                                    if ((product.ram === "4 GB" && product.seriesName === "Dell") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                     && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                    )
                                    }
                                    
                                    })
                              
                                  const LaptopsDellEightGigPageDDRFour = Laptops.map((product, index) => {
                              
                                    if ((product.ram === "8 GB" && product.seriesName === "Dell") && product.ramGeneration === "DDR4") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />

                                    )
                                    }
                                    
                                    })

                                    const LaptopsDellEightGigPageDDRFourLocation = Laptops.map((product, index) => {
                              
                                      if ((product.ram === "8 GB" && product.seriesName === "Dell") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                      )
                                      }
                                      
                                      })
                                  
                                    const LaptopsDellSixteenGigPageDDRFour = Laptops.map((product, index) => {
                              
                                      if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                      && product.seriesName === "Dell"))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />

                                      )
                                      }
                                      
                                      })

                                      const LaptopsDellSixteenGigPageDDRFourLocation = Laptops.map((product, index) => {
                              
                                        if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
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

                                      const LaptopsSamsungFourGigPageDDRFour = Laptops.map((product, index) => {

                                        if ((product.ram === "4 GB" && product.seriesName === "Samsung") && product.ramGeneration === "DDR4") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />

                                        )
                                        }
                                        
                                        })

                                        const LaptopsSamsungFourGigPageDDRFourLocation = Laptops.map((product, index) => {

                                          if ((product.ram === "4 GB" && product.seriesName === "Samsung") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
  
                                          )
                                          }
                                          
                                          })
                                    
                                        const LaptopsSamsungEightGigPageDDRFour = Laptops.map((product, index) => {
                                    
                                          if ((product.ram === "8 GB" && product.seriesName === "Samsung") && product.ramGeneration === "DDR4") {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />

                                          )
                                          }
                                          
                                          })

                                          const LaptopsSamsungEightGigPageDDRFourLocation = Laptops.map((product, index) => {
                                    
                                            if ((product.ram === "8 GB"
                                            && product.seriesName === "Samsung") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                             && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
  
                                            )
                                            }
                                            
                                            })
                                        
                                          const LaptopsSamsungSixteenGigPageDDRFour = Laptops.map((product, index) => {
                                    
                                            if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                            && product.seriesName === "Samsung"))) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />

                                            )
                                            }
                                            
                                            })

                                            const LaptopsSamsungSixteenGigPageDDRFourLocation = Laptops.map((product, index) => {
                                    
                                              if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
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

                                            const LaptopsAppleFourGigPageDDRFour = Laptops.map((product, index) => {

                                              if ((product.ram === "4 GB" && product.seriesName === "Apple") && product.ramGeneration === "DDR4") {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />

                                              )
                                              }
                                              
                                              })

                                              const LaptopsAppleFourGigPageDDRFourLocation = Laptops.map((product, index) => {

                                                if ((product.ram === "4 GB" && product.seriesName === "Apple") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                 && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                                )
                                                }
                                                
                                                })
                                          
                                              const LaptopsAppleEightGigPageDDRFour = Laptops.map((product, index) => {
                                          
                                                if ((product.ram === "8 GB" && product.seriesName === "Apple") && product.ramGeneration === "DDR4") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />

                                                )
                                                }
                                                
                                                })

                                                const LaptopsAppleEightGigPageDDRFourLocation = Laptops.map((product, index) => {
                                          
                                                  if ((product.ram === "8 GB" && product.seriesName === "Apple") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                   && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                                  )
                                                  }
                                                  
                                                  })
                                              
                                                const LaptopsAppleSixteenGigPageDDRFour = Laptops.map((product, index) => {
                                          
                                                  if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                  && product.seriesName === "Apple"))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />

                                                  )
                                                  }
                                                  
                                                  })

                                                  const LaptopsAppleSixteenGigPageDDRFourLocation = Laptops.map((product, index) => {
                                          
                                                    if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
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

                                                  const LaptopsToshibaFourGigPageDDRFour = Laptops.map((product, index) => {

                                                    if ((product.ram === "4 GB" && product.seriesName === "Toshiba") && product.ramGeneration === "DDR4") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                    )
                                                    }
                                                    
                                                    })

                                                    const LaptopsToshibaFourGigPageDDRFourLocation = Laptops.map((product, index) => {

                                                      if ((product.ram === "4 GB" && product.seriesName === "Toshiba") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                      )
                                                      }
                                                      
                                                      })
                                                
                                                    const LaptopsToshibaEightGigPageDDRFour = Laptops.map((product, index) => {
                                                
                                                      if ((product.ram === "8 GB" && product.seriesName === "Toshiba") && product.ramGeneration === "DDR4") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                      )
                                                      }
                                                      
                                                      })

                                                      const LaptopsToshibaEightGigPageDDRFourLocation = Laptops.map((product, index) => {
                                                
                                                        if ((product.ram === "8 GB" 
                                                        && product.seriesName === "Toshiba") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                                        )
                                                        }
                                                        
                                                        })
                                                    
                                                      const LaptopsToshibaSixteenGigPageDDRFour = Laptops.map((product, index) => {
                                                
                                                        if ((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                        && product.seriesName === "Toshiba")) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />

                                                        )
                                                        }
                                                        
                                                        })

                                                        const LaptopsToshibaSixteenGigPageDDRFourLocation = Laptops.map((product, index) => {
                                                
                                                          if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
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

                                                  const LaptopsOtherFourGigPageDDRFour = Laptops.map((product, index) => {

                                                    if ((product.ram === "4 GB" && product.seriesName === "Other") && product.ramGeneration === "DDR4") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                    )
                                                    }
                                                    
                                                    })

                                                    const LaptopsOtherFourGigPageDDRFourLocation = Laptops.map((product, index) => {

                                                      if ((product.ram === "4 GB" 
                                                      && product.seriesName === "Other") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                      )
                                                      }
                                                      
                                                      })
                                                
                                                    const LaptopsOtherEightGigPageDDRFour = Laptops.map((product, index) => {
                                                
                                                      if ((product.ram === "8 GB" && product.seriesName === "Other") && product.ramGeneration === "DDR4") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                      )
                                                      }
                                                      
                                                      })

                                                      const LaptopsOtherEightGigPageDDRFourLocation = Laptops.map((product, index) => {
                                                
                                                        if ((product.ram === "8 GB" 
                                                        && product.seriesName === "Other") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true)) && product.ramGeneration === "DDR4") {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                                        )
                                                        }
                                                        
                                                        })
                                                    
                                                      const LaptopsOtherSixteenGigPageDDRFour = Laptops.map((product, index) => {
                                                
                                                        if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
                                                        && product.seriesName === "Other"))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />

                                                        )
                                                        }
                                                        
                                                        })

                                                        const LaptopsOtherSixteenGigPageDDRFourLocation = Laptops.map((product, index) => {
                                                
                                                          if (((product.ram !== "4 GB" && product.ramGeneration === "DDR4") && (product.ram !== "8 GB" 
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

  const LaptopsFourGigPageDDRFive = Laptops.map((product, index) => {
    if (product.ram === "4 GB" && product.ramGeneration === "DDR5") {
    return (
      <ProductCart key={index} UserData={UserData} product={product} />

    )
    }
    
    })

    const LaptopsFourGigPageDDRFiveLocation = Laptops.map((product, index) => {
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

    const LaptopsEightGigPageDDRFive = Laptops.map((product, index) => {
      if (product.ram === "8 GB" && product.ramGeneration === "DDR5") {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      }
      
      })

      const LaptopsEightGigPageDDRFiveLocation = Laptops.map((product, index) => {
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
    
        const LaptopsSixteenGigPageDDRFive = Laptops.map((product, index) => {

          if ((product.ram !== "4 GB" && product.ram !== "8 GB") && product.ramGeneration === "DDR5") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })

        const LaptopsSixteenGigPageDDRFiveLocation = Laptops.map((product, index) => {

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

        const LaptopsLenovoFourGigPageDDRFive = Laptops.map((product, index) => {

            if ((product.ram === "4 GB" && product.seriesName === "Lenovo") && product.ramGeneration === "DDR5") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
            )
            }
            
            })

        const LaptopsLenovoFourGigPageDDRFiveLocation = Laptops.map((product, index) => {

          if ((product.ram === "4 GB" && product.seriesName === "Lenovo") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })
      
          const LaptopsLenovoEightGigPageDDRFive = Laptops.map((product, index) => {
      
            if ((product.ram === "8 GB" && product.seriesName === "Lenovo") && product.ramGeneration === "DDR5") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const LaptopsLenovoEightGigPageDDRFiveLocation = Laptops.map((product, index) => {
      
              if ((product.ram === "8 GB" && product.seriesName === "Lenovo") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })

            const LaptopsLenovoSixteenGigPageDDRFive = Laptops.map((product, index) => {
      
              if ((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
              && product.seriesName === "Lenovo")) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const LaptopsLenovoSixteenGigPageDDRFiveLocation = Laptops.map((product, index) => {
      
                if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
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

              const LaptopsAcerFourGigPageDDRFive = Laptops.map((product, index) => {

                if ((product.ram === "4 GB" && product.seriesName === "Acer") && product.ramGeneration === "DDR5") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const LaptopsAcerFourGigPageDDRFiveLocation = Laptops.map((product, index) => {

                  if ((product.ram === "4 GB" && product.seriesName === "Acer") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
  
                  )
                  }
                  
                  })
            
                const LaptopsAcerEightGigPageDDRFive = Laptops.map((product, index) => {
            
                  if ((product.ram === "8 GB" && product.seriesName === "Acer") && product.ramGeneration === "DDR5") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />

                  )
                  }
                  
                  })

                  const LaptopsAcerEightGigPageDDRFiveLocation = Laptops.map((product, index) => {
            
                    if ((product.ram === "8 GB" && product.seriesName === "Acer") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
  
                    )
                    }
                    
                    })
                
                  const LaptopsAcerSixteenGigPageDDRFive = Laptops.map((product, index) => {
            
                    if ((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                    && product.seriesName === "Acer")) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />

                    )
                    }
                    
                    })

                    const LaptopsAcerSixteenGigPageDDRFiveLocation = Laptops.map((product, index) => {
            
                      if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
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

                    const LaptopsHPFourGigPageDDRFive = Laptops.map((product, index) => {

                      if ((product.ram === "4 GB" && product.seriesName === "HP") && product.ramGeneration === "DDR5") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />

                      )
                      }
                      
                      })

                      const LaptopsHPFourGigPageDDRFiveLocation = Laptops.map((product, index) => {

                        if ((product.ram === "4 GB" && product.seriesName === "HP") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
  
                        )
                        }
                        
                        })
                  
                      const LaptopsHPEightGigPageDDRFive = Laptops.map((product, index) => {
                  
                        if ((product.ram === "8 GB" && product.seriesName === "HP") && product.ramGeneration === "DDR5") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />

                        )
                        }
                        
                        })

                        const LaptopsHPEightGigPageDDRFiveLocation = Laptops.map((product, index) => {
                  
                          if ((product.ram === "8 GB" && product.seriesName === "HP") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
  
                          )
                          }
                          
                          })
                      
                        const LaptopsHPSixteenGigPageDDRFive = Laptops.map((product, index) => {
                  
                          if ((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                          && product.seriesName === "HP")) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />

                          )
                          }
                          
                          })

                          const LaptopsHPSixteenGigPageDDRFiveLocation = Laptops.map((product, index) => {
                  
                            if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
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

                          const LaptopsAsusFourGigPageDDRFive = Laptops.map((product, index) => {

                            if ((product.ram === "4 GB" && product.seriesName === "Asus") && product.ramGeneration === "DDR5") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />

                            )
                            }
                            
                            })

                            const LaptopsAsusFourGigPageDDRFiveLocation = Laptops.map((product, index) => {

                              if ((product.ram === "4 GB" && product.seriesName === "Asus") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
  
                              )
                              }
                              
                              })
                        
                            const LaptopsAsusEightGigPageDDRFive = Laptops.map((product, index) => {
                        
                              if ((product.ram === "8 GB" && product.seriesName === "Asus") && product.ramGeneration === "DDR5") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />

                              )
                              }
                              
                              })

                              const LaptopsAsusEightGigPageDDRFiveLocation = Laptops.map((product, index) => {
                        
                                if ((product.ram === "8 GB" && product.seriesName === "Asus") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                )
                                }
                                
                                })
                            
                              const LaptopsAsusSixteenGigPageDDRFive = Laptops.map((product, index) => {
                        
                                if ((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                                && product.seriesName === "Asus")) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />

                                )
                                }
                                
                                })

                                const LaptopsAsusSixteenGigPageDDRFiveLocation = Laptops.map((product, index) => {
                        
                                  if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
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

                                const LaptopsDellFourGigPageDDRFive = Laptops.map((product, index) => {

                                  if ((product.ram === "4 GB" && product.seriesName === "Dell") && product.ramGeneration === "DDR5") {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />

                                  )
                                  }
                                  
                                  })

                                  const LaptopsDellFourGigPageDDRFiveLocation = Laptops.map((product, index) => {

                                    if ((product.ram === "4 GB" && product.seriesName === "Dell") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                     && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                    )
                                    }
                                    
                                    })
                              
                                  const LaptopsDellEightGigPageDDRFive = Laptops.map((product, index) => {
                              
                                    if ((product.ram === "8 GB" && product.seriesName === "Dell") && product.ramGeneration === "DDR5") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />

                                    )
                                    }
                                    
                                    })

                                    const LaptopsDellEightGigPageDDRFiveLocation = Laptops.map((product, index) => {
                              
                                      if ((product.ram === "8 GB" && product.seriesName === "Dell") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                       && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                      )
                                      }
                                      
                                      })
                                  
                                    const LaptopsDellSixteenGigPageDDRFive = Laptops.map((product, index) => {
                              
                                      if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                                      && product.seriesName === "Dell"))) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />

                                      )
                                      }
                                      
                                      })

                                      const LaptopsDellSixteenGigPageDDRFiveLocation = Laptops.map((product, index) => {
                              
                                        if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
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

                                      const LaptopsSamsungFourGigPageDDRFive = Laptops.map((product, index) => {

                                        if ((product.ram === "4 GB" && product.seriesName === "Samsung") && product.ramGeneration === "DDR5") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />

                                        )
                                        }
                                        
                                        })

                                        const LaptopsSamsungFourGigPageDDRFiveLocation = Laptops.map((product, index) => {

                                          if ((product.ram === "4 GB" && product.seriesName === "Samsung") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
  
                                          )
                                          }
                                          
                                          })
                                    
                                        const LaptopsSamsungEightGigPageDDRFive = Laptops.map((product, index) => {
                                    
                                          if ((product.ram === "8 GB" && product.seriesName === "Samsung") && product.ramGeneration === "DDR5") {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />

                                          )
                                          }
                                          
                                          })

                                          const LaptopsSamsungEightGigPageDDRFiveLocation = Laptops.map((product, index) => {
                                    
                                            if ((product.ram === "8 GB"
                                            && product.seriesName === "Samsung") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                             && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
  
                                            )
                                            }
                                            
                                            })
                                        
                                          const LaptopsSamsungSixteenGigPageDDRFive = Laptops.map((product, index) => {
                                    
                                            if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                                            && product.seriesName === "Samsung"))) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />

                                            )
                                            }
                                            
                                            })

                                            const LaptopsSamsungSixteenGigPageDDRFiveLocation = Laptops.map((product, index) => {
                                    
                                              if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
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

                                            const LaptopsAppleFourGigPageDDRFive = Laptops.map((product, index) => {

                                              if ((product.ram === "4 GB" && product.seriesName === "Apple") && product.ramGeneration === "DDR5") {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />

                                              )
                                              }
                                              
                                              })

                                              const LaptopsAppleFourGigPageDDRFiveLocation = Laptops.map((product, index) => {

                                                if ((product.ram === "4 GB" && product.seriesName === "Apple") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                 && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                                )
                                                }
                                                
                                                })
                                          
                                              const LaptopsAppleEightGigPageDDRFive = Laptops.map((product, index) => {
                                          
                                                if ((product.ram === "8 GB" && product.seriesName === "Apple") && product.ramGeneration === "DDR5") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />

                                                )
                                                }
                                                
                                                })

                                                const LaptopsAppleEightGigPageDDRFiveLocation = Laptops.map((product, index) => {
                                          
                                                  if ((product.ram === "8 GB" && product.seriesName === "Apple") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                   && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                                  )
                                                  }
                                                  
                                                  })
                                              
                                                const LaptopsAppleSixteenGigPageDDRFive = Laptops.map((product, index) => {
                                          
                                                  if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                                                  && product.seriesName === "Apple"))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />

                                                  )
                                                  }
                                                  
                                                  })

                                                  const LaptopsAppleSixteenGigPageDDRFiveLocation = Laptops.map((product, index) => {
                                          
                                                    if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
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

                                                  const LaptopsToshibaFourGigPageDDRFive = Laptops.map((product, index) => {

                                                    if ((product.ram === "4 GB" && product.seriesName === "Toshiba") && product.ramGeneration === "DDR5") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                    )
                                                    }
                                                    
                                                    })

                                                    const LaptopsToshibaFourGigPageDDRFiveLocation = Laptops.map((product, index) => {

                                                      if ((product.ram === "4 GB" && product.seriesName === "Toshiba") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                      )
                                                      }
                                                      
                                                      })
                                                
                                                    const LaptopsToshibaEightGigPageDDRFive = Laptops.map((product, index) => {
                                                
                                                      if ((product.ram === "8 GB" && product.seriesName === "Toshiba") && product.ramGeneration === "DDR5") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                      )
                                                      }
                                                      
                                                      })

                                                      const LaptopsToshibaEightGigPageDDRFiveLocation = Laptops.map((product, index) => {
                                                
                                                        if ((product.ram === "8 GB" 
                                                        && product.seriesName === "Toshiba") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                                        )
                                                        }
                                                        
                                                        })
                                                    
                                                      const LaptopsToshibaSixteenGigPageDDRFive = Laptops.map((product, index) => {
                                                
                                                        if ((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                                                        && product.seriesName === "Toshiba")) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />

                                                        )
                                                        }
                                                        
                                                        })

                                                        const LaptopsToshibaSixteenGigPageDDRFiveLocation = Laptops.map((product, index) => {
                                                
                                                          if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
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

                                                  const LaptopsOtherFourGigPageDDRFive = Laptops.map((product, index) => {

                                                    if ((product.ram === "4 GB" && product.seriesName === "Other") && product.ramGeneration === "DDR5") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                    )
                                                    }
                                                    
                                                    })

                                                    const LaptopsOtherFourGigPageDDRFiveLocation = Laptops.map((product, index) => {

                                                      if ((product.ram === "4 GB" 
                                                      && product.seriesName === "Other") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                      )
                                                      }
                                                      
                                                      })
                                                
                                                    const LaptopsOtherEightGigPageDDRFive = Laptops.map((product, index) => {
                                                
                                                      if ((product.ram === "8 GB" && product.seriesName === "Other") && product.ramGeneration === "DDR5") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                      )
                                                      }
                                                      
                                                      })

                                                      const LaptopsOtherEightGigPageDDRFiveLocation = Laptops.map((product, index) => {
                                                
                                                        if ((product.ram === "8 GB" 
                                                        && product.seriesName === "Other") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true)) && product.ramGeneration === "DDR5") {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                                        )
                                                        }
                                                        
                                                        })
                                                    
                                                      const LaptopsOtherSixteenGigPageDDRFive = Laptops.map((product, index) => {
                                                
                                                        if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
                                                        && product.seriesName === "Other"))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />

                                                        )
                                                        }
                                                        
                                                        })

                                                        const LaptopsOtherSixteenGigPageDDRFiveLocation = Laptops.map((product, index) => {
                                                
                                                          if (((product.ram !== "4 GB" && product.ramGeneration === "DDR5") && (product.ram !== "8 GB" 
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
  
    const BrandCategory = (index) => {
      settoggleBrands(index);
    }
  
    const MemoryLaptopCategory = (index) => {
      settoggleMemoySizelaptop(index);
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
    <div className='Laptop_Specification'>
      <button onClick={()=> {RamSelect(0); SelectSpecify()}} className={LaptopSpecify === true ? "Laptop_Specify-active":"Laptop_Specify"}>
       {LaptopSpecify === false ?
       <span className="View_laptopBrand_link">Specification</span>
       :
       <span className="View_laptopBrand_link">Cancel</span>
       }
      </button>
    </div>
{LaptopSpecify ?
    <div className='Laptop_Specifify_DDR_Four'>
      <button onClick={()=> {RamSelect(1)}} className={ToggleRamType === 1 ? "Laptop_Specify_DDR_Four-active" : "Laptop_Specify_DDR_Four"}>
       <span className="View_laptopBrand_link">DDR4 Laptops</span>
      </button>
    </div>
    :
    <></>
}

{LaptopSpecify ?
    <div className='Laptop_Specifify_DDR_Five'>
    <button onClick={()=> {RamSelect(2)}} className={ToggleRamType === 2 ? "Laptop_Specify_DDR_Five-active" : "Laptop_Specify_DDR_Five"}>
     <span className="View_laptopBrand_link">DDR5 Laptops</span>
    </button>
  </div>
    :
    <></>
}

          <div className='Page_brand-options_box'>
      <div className="Brand_options_listed">
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
          <div className={toggleBrands ===6 ? 'Cable_option_selected_style active-Ram_option_selected_style' : "Cable_option_selected_style"}
        onClick={()=> {BrandCategory(6)}} >
          <span>Samsung</span>
          </div>
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

      <div className="Memory_size_options_listed_first">
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
    </div>

    </div>
  </div>

{/* All Laptops */}
<div className={toggleBrands === 0 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsFourGigPage}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsEightGigPage}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSixteenGigPage}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsFourGigPageLocation}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsEightGigPageLocation}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSixteenGigPageLocation}
</div>

{/* Acer Laptops*/}
<div className={toggleBrands === 1 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerFourGigPage}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 2  && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerEightGigPage}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 3  && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerSixteenGigPage}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerFourGigPageLocation}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 2  && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerEightGigPageLocation}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 3  && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerSixteenGigPageLocation}
</div>

{/* HP Laptops*/}
<div className={toggleBrands === 2 && toggleMemoySizelaptop === 1  && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPFourGigPage}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 2  && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPEightGigPage}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 3  && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPSixteenGigPage}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 1  && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPFourGigPageLocation}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 2  && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPEightGigPageLocation}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 3  && ToggleRamType === 0  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPSixteenGigPageLocation}
</div>

{/* Lenovo Laptops*/}
<div className={toggleBrands === 3 && toggleMemoySizelaptop === 1 && ToggleRamType === 0  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoFourGigPage}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 2 && ToggleRamType === 0  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoEightGigPage}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 3 && ToggleRamType === 0  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoSixteenGigPage}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 1 && ToggleRamType === 0  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoFourGigPageLocation}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 2 && ToggleRamType === 0  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoEightGigPageLocation}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 3 && ToggleRamType === 0  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoSixteenGigPageLocation}
</div>

{/* Asus Laptops*/}
<div className={toggleBrands === 4 && toggleMemoySizelaptop === 1 && ToggleRamType === 0  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusFourGigPage}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 2 && ToggleRamType === 0  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusEightGigPage}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusSixteenGigPage}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusFourGigPageLocation}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusEightGigPageLocation}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusSixteenGigPageLocation}
</div>

{/* Dell Laptops*/}
<div className={toggleBrands === 5 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellFourGigPage}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellEightGigPage}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellSixteenGigPage}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellFourGigPageLocation}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellEightGigPageLocation}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellSixteenGigPageLocation}
</div>

{/* Samsung Laptops*/}
{/* 
<div className={toggleBrands === 6 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungFourGigPage}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungEightGigPage}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungSixteenGigPage}
</div> 

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungFourGigPageLocation}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungEightGigPageLocation}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungSixteenGigPageLocation}
</div> 
*/}

{/* Apple Laptops*/}
<div className={toggleBrands === 7 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleFourGigPage}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleEightGigPage}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleSixteenGigPage}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleFourGigPageLocation}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleEightGigPageLocation}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleSixteenGigPageLocation}
</div>

{/* Toshiba Laptops*/}
<div className={toggleBrands === 8 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaFourGigPage}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaEightGigPage}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaSixteenGigPage}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaFourGigPageLocation}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaEightGigPageLocation}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaSixteenGigPageLocation}
</div>


{/* Other Laptops*/}
<div className={toggleBrands === 9 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherFourGigPage}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherEightGigPage}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherSixteenGigPage}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 1 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherFourGigPageLocation}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 2 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherEightGigPageLocation}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 3 && ToggleRamType === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherSixteenGigPageLocation}
</div>


{/* All Laptops DDR4 */}
<div className={toggleBrands === 0 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsFourGigPageDDRFour}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsEightGigPageDDRFour}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSixteenGigPageDDRFour}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsFourGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsEightGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSixteenGigPageDDRFourLocation}
</div>

{/* Acer Laptops*/}
<div className={toggleBrands === 1 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerFourGigPageDDRFour}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 2  && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerEightGigPageDDRFour}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 3  && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerSixteenGigPageDDRFour}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerFourGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 2  && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerEightGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 3  && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerSixteenGigPageDDRFourLocation}
</div>

{/* HP Laptops*/}
<div className={toggleBrands === 2 && toggleMemoySizelaptop === 1  && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPFourGigPageDDRFour}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 2  && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPEightGigPageDDRFour}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 3  && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPSixteenGigPageDDRFour}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 1  && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPFourGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 2  && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPEightGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 3  && ToggleRamType === 1  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPSixteenGigPageDDRFourLocation}
</div>

{/* Lenovo Laptops*/}
<div className={toggleBrands === 3 && toggleMemoySizelaptop === 1 && ToggleRamType === 1  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoFourGigPageDDRFour}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 2 && ToggleRamType === 1  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoEightGigPageDDRFour}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 3 && ToggleRamType === 1  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoSixteenGigPageDDRFour}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 1 && ToggleRamType === 1  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoFourGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 2 && ToggleRamType === 1  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoEightGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 3 && ToggleRamType === 1  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoSixteenGigPageDDRFourLocation}
</div>

{/* Asus Laptops*/}
<div className={toggleBrands === 4 && toggleMemoySizelaptop === 1 && ToggleRamType === 1  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusFourGigPageDDRFour}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 2 && ToggleRamType === 1  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusEightGigPageDDRFour}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusSixteenGigPageDDRFour}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusFourGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusEightGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusSixteenGigPageDDRFourLocation}
</div>

{/* Dell Laptops*/}
<div className={toggleBrands === 5 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellFourGigPageDDRFour}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellEightGigPageDDRFour}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellSixteenGigPageDDRFour}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellFourGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellEightGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellSixteenGigPageDDRFourLocation}
</div>

{/* Samsung Laptops*/}
{/* 
<div className={toggleBrands === 6 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungFourGigPageDDRFour}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungEightGigPageDDRFour}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungSixteenGigPageDDRFour}
</div> 

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungFourGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungEightGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungSixteenGigPageDDRFourLocation}
</div> 
*/}

{/* Apple Laptops*/}
<div className={toggleBrands === 7 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleFourGigPageDDRFour}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleEightGigPageDDRFour}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleSixteenGigPageDDRFour}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleFourGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleEightGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleSixteenGigPageDDRFourLocation}
</div>

{/* Toshiba Laptops*/}
<div className={toggleBrands === 8 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaFourGigPageDDRFour}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaEightGigPageDDRFour}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaSixteenGigPageDDRFour}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaFourGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaEightGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaSixteenGigPageDDRFourLocation}
</div>


{/* Other Laptops*/}
<div className={toggleBrands === 9 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherFourGigPageDDRFour}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherEightGigPageDDRFour}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherSixteenGigPageDDRFour}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 1 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherFourGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 2 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherEightGigPageDDRFourLocation}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 3 && ToggleRamType === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherSixteenGigPageDDRFourLocation}
</div>


{/* All Laptops DDR5 */}
<div className={toggleBrands === 0 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsFourGigPageDDRFive}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsEightGigPageDDRFive}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSixteenGigPageDDRFive}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsFourGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsEightGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 0 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSixteenGigPageDDRFiveLocation}
</div>

{/* Acer Laptops*/}
<div className={toggleBrands === 1 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerFourGigPageDDRFive}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 2  && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerEightGigPageDDRFive}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 3  && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerSixteenGigPageDDRFive}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerFourGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 2  && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerEightGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 1 && toggleMemoySizelaptop === 3  && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAcerSixteenGigPageDDRFiveLocation}
</div>

{/* HP Laptops*/}
<div className={toggleBrands === 2 && toggleMemoySizelaptop === 1  && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPFourGigPageDDRFive}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 2  && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPEightGigPageDDRFive}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 3  && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPSixteenGigPageDDRFive}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 1  && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPFourGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 2  && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPEightGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 2 && toggleMemoySizelaptop === 3  && ToggleRamType === 2  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsHPSixteenGigPageDDRFiveLocation}
</div>

{/* Lenovo Laptops*/}
<div className={toggleBrands === 3 && toggleMemoySizelaptop === 1 && ToggleRamType === 2  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoFourGigPageDDRFive}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 2 && ToggleRamType === 2  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoEightGigPageDDRFive}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 3 && ToggleRamType === 2  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoSixteenGigPageDDRFive}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 1 && ToggleRamType === 2  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoFourGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 2 && ToggleRamType === 2  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoEightGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 3 && toggleMemoySizelaptop === 3 && ToggleRamType === 2  && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsLenovoSixteenGigPageDDRFiveLocation}
</div>

{/* Asus Laptops*/}
<div className={toggleBrands === 4 && toggleMemoySizelaptop === 1 && ToggleRamType === 2  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusFourGigPageDDRFive}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 2 && ToggleRamType === 2  && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusEightGigPageDDRFive}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusSixteenGigPageDDRFive}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusFourGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusEightGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 4 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAsusSixteenGigPageDDRFiveLocation}
</div>

{/* Dell Laptops*/}
<div className={toggleBrands === 5 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellFourGigPageDDRFive}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellEightGigPageDDRFive}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellSixteenGigPageDDRFive}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellFourGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellEightGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 5 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsDellSixteenGigPageDDRFiveLocation}
</div>

{/* Samsung Laptops*/}
{/* 
<div className={toggleBrands === 6 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungFourGigPageDDRFive}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungEightGigPageDDRFive}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungSixteenGigPageDDRFive}
</div> 

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungFourGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungEightGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 6 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsSamsungSixteenGigPageDDRFiveLocation}
</div> 
*/}

{/* Apple Laptops*/}
<div className={toggleBrands === 7 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleFourGigPageDDRFive}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleEightGigPageDDRFive}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleSixteenGigPageDDRFive}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleFourGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleEightGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 7 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsAppleSixteenGigPageDDRFiveLocation}
</div>

{/* Toshiba Laptops*/}
<div className={toggleBrands === 8 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaFourGigPageDDRFive}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaEightGigPageDDRFive}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaSixteenGigPageDDRFive}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaFourGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaEightGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 8 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsToshibaSixteenGigPageDDRFiveLocation}
</div>


{/* Other Laptops*/}
<div className={toggleBrands === 9 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherFourGigPageDDRFive}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherEightGigPageDDRFive}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherSixteenGigPageDDRFive}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 1 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherFourGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 2 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherEightGigPageDDRFiveLocation}
</div>

<div className={toggleBrands === 9 && toggleMemoySizelaptop === 3 && ToggleRamType === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {LaptopsOtherSixteenGigPageDDRFiveLocation}
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

export default Laptops