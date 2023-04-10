import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import BackgroundImage from '../Images/babyblue background.jpg'
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

import FlashDriveImage from './Images/UsbImage.png'
import MemoryCardImage from './Images/MicroSD.png'
import DiscImage from './Images/DiscRecord.png'

function StorageDevices() {

  const [togglePageCategory, settogglePageCategory] = useState(1)
  const [Products, setProducts] = useState([])
  const [toggleBrands, settoggleBrands] = useState(1)
  const [UserData, setUserData] = useState([])
  const [FlashDrive, setFlashDrive] = useState([])
  const [MemoryCard, setMemoryCard] = useState([])
  const [Discs, setDiscs] = useState([])
  const [FlashDriveValue, setFlashDriveValue] = useState("USB Drive")
  const [MemoryValue, setMemoryValue] = useState("Memory Card")
  const [DiscsValue, setDiscsValue] = useState("Recordable Disc")
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
      product: FlashDriveValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setFlashDrive(response.data.products)
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
      product: MemoryValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setMemoryCard(response.data.products)
  } else {
  }
  })
  
  }, [])

  useEffect(() => {
    const variable = {
      product: DiscsValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setDiscs(response.data.products)
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

    const FlashDriveFourGigPage = FlashDrive.map((product, index) => {
      if (product.storageCapacity === "4 GB") {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
      }
      
      })

      const FlashDriveFourGigPageLocation = FlashDrive.map((product, index) => {
        if (product.storageCapacity === "4 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
         && product.Gobabis === true))) {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
  
        )
        }
        
        })

      const FlashDriveEigthGigPage = FlashDrive.map((product, index) => {
        if (product.storageCapacity === "8 GB") {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        }
        
        })

        const FlashDriveEigthGigPageLocation = FlashDrive.map((product, index) => {
          if (product.storageCapacity === "8 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true))) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })

        const FlashDriveSixteenGigPage = FlashDrive.map((product, index) => {
          if (product.storageCapacity === "16 GB") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })

          const FlashDriveSixteenGigPageLocation = FlashDrive.map((product, index) => {
            if (product.storageCapacity === "16 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
             && product.Gobabis === true))) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
            )
            }
            
            })

          const FlashDriveThirdyTwoGigPage = FlashDrive.map((product, index) => {
            if (product.storageCapacity === "32 GB") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const FlashDriveThirdyTwoGigPageLocation = FlashDrive.map((product, index) => {
              if (product.storageCapacity === "32 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })

            const FlashDriveSixtyFourGigPage = FlashDrive.map((product, index) => {
              if (product.storageCapacity === "64 GB") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const FlashDriveSixtyFourGigPageLocation = FlashDrive.map((product, index) => {
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

              const FlashDriveOneTwentyEightGigPage = FlashDrive.map((product, index) => {
                if (product.storageCapacity === "128 GB") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const FlashDriveOneTwentyEightGigPageLocation = FlashDrive.map((product, index) => {
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

              const FlashDriveLargeGigPage = FlashDrive.map((product, index) => {
                if ((product.storageCapacity !== "64 GB") && (product.storageCapacity !== "4 GB"
                && product.storageCapacity !== "8 GB") && (product.storageCapacity !== "16 GB" && product.storageCapacity !== "32 GB")
                && product.storageCapacity !== "128 GB") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const FlashDriveLargeGigPageLocation = FlashDrive.map((product, index) => {
                  if (((product.storageCapacity !== "64 GB") && (product.storageCapacity !== "4 GB"
                  && product.storageCapacity !== "8 GB") && (product.storageCapacity !== "16 GB" && product.storageCapacity !== "32 GB")
                  && product.storageCapacity !== "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
  
                  )
                  }
                  
                  })

                const MemoryCardFourGigPage = MemoryCard.map((product, index) => {
                  if (product.storageCapacity === "4 GB") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />

                  )
                  }
                  
                  })

                  const MemoryCardFourGigPageLocation = MemoryCard.map((product, index) => {
                    if (product.storageCapacity === "4 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
  
                    )
                    }
                    
                    })
            
                  const MemoryCardEigthGigPage = MemoryCard.map((product, index) => {
                    if (product.storageCapacity === "8 GB") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />

                    )
                    }
                    
                    })

                    const MemoryCardEigthGigPageLocation = MemoryCard.map((product, index) => {
                      if (product.storageCapacity === "8 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
  
                      )
                      }
                      
                      })
            
                    const MemoryCardSixteenGigPage = MemoryCard.map((product, index) => {
                      if (product.storageCapacity === "16 GB") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />

                      )
                      }
                      
                      })

                      const MemoryCardSixteenGigPageLocation = MemoryCard.map((product, index) => {
                        if (product.storageCapacity === "16 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
  
                        )
                        }
                        
                        })
            
                      const MemoryCardThirdyTwoGigPage = MemoryCard.map((product, index) => {
                        if (product.storageCapacity === "32 GB") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />

                        )
                        }
                        
                        })

                        const MemoryCardThirdyTwoGigPageLocation = MemoryCard.map((product, index) => {
                          if (product.storageCapacity === "32 GB" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
  
                          )
                          }
                          
                          })
            
                        const MemoryCardSixtyFourGigPage = MemoryCard.map((product, index) => {
                          if (product.storageCapacity === "64 GB") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />

                          )
                          }
                          
                          })

                          const MemoryCardSixtyFourGigPageLocation = MemoryCard.map((product, index) => {
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

                          const MemoryCardOneTwentyEightGigPage = MemoryCard.map((product, index) => {
                            if (product.storageCapacity === "128 GB") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />

                            )
                            }
                            
                            })

                            const MemoryCardOneTwentyEightGigPageLocation = MemoryCard.map((product, index) => {
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
            
                          const MemoryCardLargeGigPage = MemoryCard.map((product, index) => {
                            if ((product.storageCapacity !== "64 GB") && (product.storageCapacity !== "4 GB"
                            && product.storageCapacity !== "8 GB") && (product.storageCapacity !== "16 GB" && product.storageCapacity !== "32 GB")
                            && product.storageCapacity !== "128 GB") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />

                            )
                            }
                            
                            })

                            const MemoryCardLargeGigPageLocation = MemoryCard.map((product, index) => {
                              if (((product.storageCapacity !== "64 GB") && (product.storageCapacity !== "4 GB"
                              && product.storageCapacity !== "8 GB") && (product.storageCapacity !== "16 GB" && product.storageCapacity !== "32 GB")
                              && product.storageCapacity !== "128 GB") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
  
                              )
                              }
                              
                              })


        const DiscsPage = Discs.map((product, index) => {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          
          })

          const DiscsPageLocation = Discs.map((product, index) => {
            if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && 
            product.Gobabis === true)) {
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
    <div className='Page_select-option_some'>
    <div onClick={()=> {PageCategory(1); BrandCategory(1)}}
       className={togglePageCategory ===1 ? "Page-option_selects_toggle active-image_page_selected" : "Page-option_selects_toggle"}>
        <img className="image_page_selected" 
        src={FlashDriveImage}
        />
        <div className='Image_Description_hover_box'>
        <div className='Image_Description_hover'>
          Flash Drive (USB)
        </div>
        </div>
      </div>

      <div onClick={()=> {PageCategory(2); BrandCategory(1)}}
       className={togglePageCategory ===2 ? "Page-option_selects_toggle active-image_page_selected" : "Page-option_selects_toggle"}>
        <img className="image_page_selected" 
        src={MemoryCardImage}
        />
        <div className='Image_Description_hover_box'>
        <div className='Image_Description_hover'>
          Memory Card
        </div>
        </div>
      </div>

      <div onClick={()=> {PageCategory(3); BrandCategory(0)}}
       className={togglePageCategory ===3 ? "Page-option_selects_toggle active-image_page_selected" : "Page-option_selects_toggle"}>
        <img className="image_page_selected" 
        src={DiscImage}
        />
        <div className='Image_Description_hover_box'>
        <div className='Image_Description_hover'>
          Recordable Discs
        </div>
        </div>
      </div>  
      {UserData.length === 0 ?
      <div className='Page_My_Location_Three'>
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
      <button className='Page_Choose_Location_Three'>
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
    <button onClick={PopupSelectLocation} className={SelectLocation === true ? "Page_Choose_Button_Location-active_Three" : "Page_Choose_Button_Location_Three"}>
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
  <button onClick={PopupSelectLocation} className={SelectLocation === true ? "Page_Choose_Button_Location-active_Three" : "Page_Choose_Button_Location_Three"}>
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
            <span>4 GB</span>
          </div>
          <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>8 GB</span>
          </div>
          <div className={toggleBrands ===3 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>16 GB</span>
          </div>
          <div className={toggleBrands ===4 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(4)}} >
          <span>32 GB</span>
          </div>
          <div className={toggleBrands ===5 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(5)}} >
          <span>64 GB</span>
          </div>
          <div className={toggleBrands ===6 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(6)}} >
          <span>128 GB</span>
          </div>
          <div className={toggleBrands ===7 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(7)}} >
          <span>Other Sizes</span>
          </div>
        </div>
        <div className={togglePageCategory ===2 ? "Brand_options_listed" : "Brand_options_listed-hide"}>
        <div className={toggleBrands ===1 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>4 GB</span>
          </div>
          <div className={toggleBrands ===2 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>8 GB</span>
          </div>
          <div className={toggleBrands ===3 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>16 GB</span>
          </div>
          <div className={toggleBrands ===4 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(4)}} >
          <span>32 GB</span>
          </div>
          <div className={toggleBrands ===5 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(5)}} >
          <span>64 GB</span>
          </div>
          <div className={toggleBrands ===6 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(6)}} >
          <span>128 GB</span>
          </div>
          <div className={toggleBrands ===7 ? 'Ram_option_selected_style active-Ram_option_selected_style' : "Ram_option_selected_style"}
        onClick={()=> {BrandCategory(7)}} >
          <span>Other Sizes</span>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div className={togglePageCategory === 1 && toggleBrands === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveFourGigPage}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveEigthGigPage}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveSixteenGigPage}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 4 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveThirdyTwoGigPage}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 5 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveSixtyFourGigPage}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 6 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveOneTwentyEightGigPage}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 7 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveLargeGigPage}
    </div>

    <div className={togglePageCategory === 2 && toggleBrands === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardFourGigPage}
    </div>

    <div className={togglePageCategory === 2 && toggleBrands === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardEigthGigPage}
    </div>

    <div className={togglePageCategory === 2 && toggleBrands === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardSixteenGigPage}
    </div>

    <div className={togglePageCategory === 2  && toggleBrands === 4 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardThirdyTwoGigPage}
    </div>

    <div className={togglePageCategory === 2 && toggleBrands === 5 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardSixtyFourGigPage}
    </div>

    <div className={togglePageCategory === 2 && toggleBrands === 6 && SelectLocation === false  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardOneTwentyEightGigPage}
    </div> 

    <div className={togglePageCategory === 2 && toggleBrands === 7 && SelectLocation === false  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardLargeGigPage}
    </div> 
    <div className={togglePageCategory === 3 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {DiscsPage}
    </div>
  

  {/* Location */}

  <div className={togglePageCategory === 1 && toggleBrands === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveFourGigPageLocation}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveEigthGigPageLocation}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveSixteenGigPageLocation}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 4 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveThirdyTwoGigPageLocation}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 5 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveSixtyFourGigPageLocation}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 6 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveOneTwentyEightGigPageLocation}
    </div>

    <div className={togglePageCategory === 1 && toggleBrands === 7 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {FlashDriveLargeGigPageLocation}
    </div>

    <div className={togglePageCategory === 2 && toggleBrands === 1 && SelectLocation === true  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardFourGigPageLocation}
    </div>

    <div className={togglePageCategory === 2 && toggleBrands === 2 && SelectLocation === true  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardEigthGigPageLocation}
    </div>

    <div className={togglePageCategory === 2 && toggleBrands === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardSixteenGigPageLocation}
    </div>

    <div className={togglePageCategory === 2  && toggleBrands === 4 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardThirdyTwoGigPageLocation}
    </div>

    <div className={togglePageCategory === 2 && toggleBrands === 5 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardSixtyFourGigPageLocation}
    </div>

    <div className={togglePageCategory === 2 && toggleBrands === 6 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardOneTwentyEightGigPageLocation}
    </div> 

    <div className={togglePageCategory === 2 && toggleBrands === 7 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {MemoryCardLargeGigPageLocation}
    </div> 
    <div className={togglePageCategory === 3 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
      {DiscsPageLocation}
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

export default StorageDevices