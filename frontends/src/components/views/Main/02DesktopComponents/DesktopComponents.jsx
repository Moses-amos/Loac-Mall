import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import BackgroundImage from '../Images/babyblue background.jpg'
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

import CPUImage from './Images/cpu.webp'
import MotherboardImage from './Images/motherboards.png'
import GraphicCardImage from './Images/graphicsCard.png'
import MemoryImage from './Images/DesktopRam.png'


import './desktopcomponents.css'

function DesktopComponents() {

  const [togglePageCategory, settogglePageCategory] = useState(1)
  const [Products, setProducts] = useState([])
  const [toggleBrands, settoggleBrands] = useState(1)
  const [UserData, setUserData] = useState([])
  const [Processors, setProcessors] = useState([])
  const [Graphics, setGraphics] = useState([])
  const [Motherboards, setMotherboards] = useState([])
  const [DDRThreeMemory, setDDRThreeMemory] = useState([])
  const [DDRFourMemory, setDDRFourMemory] = useState([])
  const [DDRFiveMemory, setDDRFiveMemory] = useState([])
  const [ProcessorValue, setProcessorValue] = useState("Processor")
  const [GraphicsValue, setGraphicsValue] = useState("Graphic Card")
  const [MotherboardValue, setMotherboardValue] = useState("MotherBoard")
  const [MemoryDDRThreeValue, setMemoryDDRThreeValue] = useState("Desktop DDR3 Ram")
  const [MemoryDDRFourValue, setMemoryDDRFourValue] = useState("Desktop DDR4 Ram")
  const [MemoryDDRFiveValue, setMemoryDDRFiveValue] = useState("Desktop DDR5 Ram")
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
      product: ProcessorValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setProcessors(response.data.products)
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
      product: GraphicsValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setGraphics(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: MotherboardValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setMotherboards(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: MemoryDDRThreeValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setDDRThreeMemory(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: MemoryDDRFourValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setDDRFourMemory(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: MemoryDDRFiveValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setDDRFiveMemory(response.data.products)
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

      const ProcessorsPageLocation = Processors.map((product, index) => {
        if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
    
          )
        }

        })

        const ProcessorsIThreePageLocation = Processors.map((product, index) => {
          if (product.modelName === "Intel Core i3" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true))) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })

      const ProcessorsIFivePageLocation = Processors.map((product, index) => {
        if (product.modelName === "Intel Core i5" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
         && product.Gobabis === true))) {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        }
        
        })

        const ProcessorsISevenPageLocation = Processors.map((product, index) => {
          if (product.modelName === "Intel Core i7" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true))) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })

          const ProcessorsINinePageLocation = Processors.map((product, index) => {
            if (product.modelName === "Intel Core i9" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
             && product.Gobabis === true))) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const ProcessorsAMDPageLocation = Processors.map((product, index) => {
                if (product.brand === "AMD" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const MotherboardDDRThreePageLocation = Motherboards.map((product, index) => {
                  if (product.ramGeneration === "DDR3" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
      
                    )
                  }
                  
                  })
      
                  const MotherboardDDRFourPageLocation = Motherboards.map((product, index) => {
                    if (product.ramGeneration === "DDR4" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
      
                    )
                    }
                    
                    })
      
                    const MotherboardDDRFivePageLocation = Motherboards.map((product, index) => {
                      if (product.ramGeneration === "DDR5" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
      
                        )
                      }
                      
                      })
      
                      const MemoryDDRThreePageLocation = DDRThreeMemory.map((product, index) => {
      
                        if (product.product === "Desktop DDR3 Ram" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
            
                          )
                        }
                        
                        })
      
                        const MemoryDDRFourPageLocation = DDRFourMemory.map((product, index) => {
      
                          if (product.product === "Desktop DDR4 Ram" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
            
                            )
                          }
                          
                          })
      
                          const MemoryDDRFivePageLocation = DDRFiveMemory.map((product, index) => {
      
                            if (product.product === "Desktop DDR5 Ram" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
            
                              )
                            }
                            
                            })

                            const GraphicsCardsGDDRThreePageLocation = Graphics.map((product, index) => {
                              if (product.graphicsCardGeneration === "GDDR3" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
            
                              )
                              }
                              
                              })
            
                              const GraphicsCardsGDDRFourPageLocation = Graphics.map((product, index) => {
                                if (product.graphicsCardGeneration === "GDDR4" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true))) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
            
                                )
                                }
                                
                                })
            
                                const GraphicsCardsGDDRFivePageLocation = Graphics.map((product, index) => {
                                  if (product.graphicsCardGeneration === "GDDR5" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                   && product.Gobabis === true))) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
            
                                  )
                                  }
                                  
                                  })
            
                                  const GraphicsCardsGDDRSixPageLocation = Graphics.map((product, index) => {
                                    if (product.graphicsCardGeneration === "GDDR6" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                     && product.Gobabis === true))) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
            
                                    )
                                    }
                                    
                                    })

    const ProcessorsPage = Processors.map((product, index) => {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      })

      const ProcessorsIThreePage = Processors.map((product, index) => {
        if (product.modelName === "Intel Core i3") {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        }
        
        })

        const ProcessorsIFivePage = Processors.map((product, index) => {
          if (product.modelName === "Intel Core i5") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })

          const ProcessorsISevenPage = Processors.map((product, index) => {
            if (product.modelName === "Intel Core i7") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const ProcessorsINinePage = Processors.map((product, index) => {
              if (product.modelName === "Intel Core i9") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const ProcessorsAMDPage = Processors.map((product, index) => {
                if (product.brand === "AMD") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                  const GraphicsCardsGDDRThreePage = Graphics.map((product, index) => {
                    if (product.graphicsCardGeneration === "GDDR3") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
  
                    )
                    }
                    
                    })
            
                  const GraphicsCardsGDDRFourPage = Graphics.map((product, index) => {
                    if (product.graphicsCardGeneration === "GDDR4") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />

                    )
                    }
                    
                    })
            
                    const GraphicsCardsGDDRFivePage = Graphics.map((product, index) => {
                      if (product.graphicsCardGeneration === "GDDR5") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />

                      )
                      }
                      
                      })
            
                      const GraphicsCardsGDDRSixPage = Graphics.map((product, index) => {
                        if (product.graphicsCardGeneration === "GDDR6") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />

                        )
                        }
                        
                        })

            const MotherboardDDRThreePage = Motherboards.map((product, index) => {
              if (product.ramGeneration === "DDR3") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
  
                )
              }
              
              })
      
            const MotherboardDDRFourPage = Motherboards.map((product, index) => {
              if (product.ramGeneration === "DDR4") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })
      
              const MotherboardDDRFivePage = Motherboards.map((product, index) => {
                if (product.ramGeneration === "DDR5") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />

                  )
                }
                
                })

          const MemoryDDRThreePage = DDRThreeMemory.map((product, index) => {

            if (product.product === "Desktop DDR3 Ram") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
            }
            
            })

            const MemoryDDRFourPage = DDRFourMemory.map((product, index) => {

              if (product.product === "Desktop DDR4 Ram") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
              }
              
              })

              const MemoryDDRFivePage = DDRFiveMemory.map((product, index) => {

                if (product.product === "Desktop DDR5 Ram") {
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

const BrandCategory = (index) => {
  settoggleBrands(index);
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
      <div onClick={()=> {PageCategory(1); BrandCategory(1)}}
       className={togglePageCategory ===1 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_some_full" 
        src={CPUImage}
        />
        <div className='Image_Description_hover_box_some_full'>
        <div className='Image_Description_hover'>
          Processors
        </div>
        </div>
      </div>
      <div onClick={()=> {PageCategory(2); BrandCategory(1)}}
       className={togglePageCategory ===2 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_some" 
        src={MotherboardImage}
        />
        <div className='Image_Description_hover_box_some'>
        <div className='Image_Description_hover'>
          Motherboards
        </div>
        </div>
      </div>
      <div onClick={()=> {PageCategory(3); BrandCategory(1)}}
       className={togglePageCategory ===3 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_some" 
        src={GraphicCardImage}
        />
        <div className='Image_Description_hover_box_some'>
        <div className='Image_Description_hover'>
          Graphics Cards
        </div>
        </div>
      </div>
      <div onClick={()=> {PageCategory(4); BrandCategory(1)}}
       className={togglePageCategory ===4 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_some" 
        src={MemoryImage} 
        />
        <div className='Image_Description_hover_box_some'>
        <div className='Image_Description_hover'>
          Memory
        </div>
        </div>
      </div>
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
      <div className={togglePageCategory ===1 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
      <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>All Processors</span>
          </div>
        <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
            <span>Intel Core i3</span>
          </div>
          <div className={toggleBrands ===3 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>Intel Core i5</span>
          </div>
          <div className={toggleBrands ===4 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(4)}} >
          <span>Intel Core i7</span>
          </div>
          <div className={toggleBrands ===5 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(5)}} >
          <span>Intel Core i9</span>
          </div>
          <div className={toggleBrands ===6 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(6)}} >
          <span>AMD</span>
          </div>
        </div>
        <div className={togglePageCategory ===2 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>DDR3 Boards</span>
          </div>
        <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
            <span>DDR4 Boards</span>
          </div>
          <div className={toggleBrands ===3 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>DDR5 Boards</span>
          </div>
        </div>
        <div className={togglePageCategory ===3 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>GDDR3 Cards</span>
          </div>
        <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
            <span>GDDR4 Cards</span>
          </div>
          <div className={toggleBrands ===3 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>GDDR5 Cards</span>
          </div>
          <div className={toggleBrands ===4 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(4)}} >
          <span>GDDR6 Cards</span>
          </div>
        </div>
        <div className={togglePageCategory ===4 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>Desktop DDR3 Ram</span>
          </div>
          <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>Desktop DDR4 Ram</span>
          </div>
          <div className={toggleBrands ===3 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>Desktop DDR5 Ram</span>
          </div>
        </div>
  
        <div className={togglePageCategory ===1 ? "Memory_size_options_listed" : "Memory_size_options_listed-hide"}>
          <div className='View_all_option'><a href="/processors" className='Memory_option-style_view'>View All</a></div>
        </div>
        <div className={togglePageCategory ===2 ? "Memory_size_options_listed" : "Memory_size_options_listed-hide"}>
          <div className='View_all_option'><a href="/desktop-motherboards" className='Memory_option-style_view'>View All</a></div>
        </div>
        <div className={togglePageCategory ===3 ? "Memory_size_options_listed" : "Memory_size_options_listed-hide"}>
          <div className='View_all_option'><a href="/graphic-cards" className='Memory_option-style_view'>View All</a></div>
        </div>
        <div className={togglePageCategory ===4 ? "Memory_size_options_listed" : "Memory_size_options_listed-hide"}>
          <div className='View_all_option'><a href="/desktop-memory" className='Memory_option-style_view'>View All</a></div>
        </div>
      </div>

    </div>
  </div>

  {/* All Processors*/}
  <div className={ togglePageCategory === 1 && toggleBrands === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsPage}
</div>

<div className={ togglePageCategory === 1 && toggleBrands === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsIThreePage}
</div>

<div className={ togglePageCategory === 1 && toggleBrands === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsIFivePage}
</div>

<div className={ togglePageCategory === 1 && toggleBrands === 4 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsISevenPage}
</div>

<div className={ togglePageCategory === 1 && toggleBrands === 5 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsINinePage}
</div>

<div className={ togglePageCategory === 1 && toggleBrands === 6 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsAMDPage}
</div>

{/* Location */}

<div className={ togglePageCategory === 1 && toggleBrands === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsPageLocation}
</div>

<div className={ togglePageCategory === 1 && toggleBrands === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsIThreePageLocation}
</div>

<div className={ togglePageCategory === 1 && toggleBrands === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsIFivePageLocation}
</div>

<div className={ togglePageCategory === 1 && toggleBrands === 4 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsISevenPageLocation}
</div>

<div className={ togglePageCategory === 1 && toggleBrands === 5 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsINinePageLocation}
</div>

<div className={ togglePageCategory === 1 && toggleBrands === 6 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {ProcessorsAMDPageLocation}
</div>

  {/* All Motherboards*/}
  <div className={ togglePageCategory === 2 && toggleBrands === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MotherboardDDRThreePage}
</div>

<div className={ togglePageCategory === 2 && toggleBrands === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MotherboardDDRFourPage}
</div>

<div className={ togglePageCategory === 2 && toggleBrands === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MotherboardDDRFivePage}
</div>

{/* Location */}
<div className={ togglePageCategory === 2 && toggleBrands === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MotherboardDDRThreePageLocation}
</div>

<div className={ togglePageCategory === 2 && toggleBrands === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MotherboardDDRFourPageLocation}
</div>

<div className={ togglePageCategory === 2 && toggleBrands === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MotherboardDDRFivePageLocation}
</div>

  {/* All Graphics*/}
  <div className={ togglePageCategory === 3 && toggleBrands === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {GraphicsCardsGDDRThreePage}
</div>

<div className={ togglePageCategory === 3 && toggleBrands === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {GraphicsCardsGDDRFourPage}
</div>

<div className={ togglePageCategory === 3 && toggleBrands === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {GraphicsCardsGDDRFivePage}
</div>

<div className={ togglePageCategory === 3 && toggleBrands === 4 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {GraphicsCardsGDDRSixPage}
</div>

{/* Location */}
<div className={ togglePageCategory === 3 && toggleBrands === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {GraphicsCardsGDDRThreePageLocation}
</div>

<div className={ togglePageCategory === 3 && toggleBrands === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {GraphicsCardsGDDRFourPageLocation}
</div>

<div className={ togglePageCategory === 3 && toggleBrands === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {GraphicsCardsGDDRFivePageLocation}
</div>

<div className={ togglePageCategory === 3 && toggleBrands === 4 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {GraphicsCardsGDDRSixPageLocation}
</div>

  {/* All DDR3*/}
  <div className={togglePageCategory === 4 && toggleBrands === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MemoryDDRThreePage}
</div>

  {/* All DDR4*/}
  <div className={togglePageCategory === 4 && toggleBrands === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MemoryDDRFourPage}
</div>

  {/* All DDR5*/}
  <div className={togglePageCategory === 4 && toggleBrands === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MemoryDDRFivePage}
</div>

{/* Location */}
<div className={togglePageCategory === 4 && toggleBrands === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MemoryDDRThreePageLocation}
</div>

  {/* All DDR4*/}
  <div className={togglePageCategory === 4 && toggleBrands === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MemoryDDRFourPageLocation}
</div>

  {/* All DDR5*/}
  <div className={togglePageCategory === 4 && toggleBrands === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {MemoryDDRFivePageLocation}
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

export default DesktopComponents