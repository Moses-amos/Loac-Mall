import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import BackgroundImage from '../Images/babyblue background.jpg'
import Seventy from './Images/Seventy.png'
import Fifty from './Images/Fifty.png'
import TwentyFour from './Images/TwentyFour.png'
import ThirtyThree from './Images/ThirtyThree.png'
import './flatscreen.css'
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

function Flatscreens() {

  const [togglePageCategory, settogglePageCategory] = useState(1)
  const [Products, setProducts] = useState([])
  const [toggleBrands, settoggleBrands] = useState(0)
  const [UserData, setUserData] = useState([])

  const [toggleMemorySizeDesktop, settoggleMemorySizeDesktop] = useState(1)
  const [Flatscreens, setFlatscreens] = useState([])
  const [FlatscreensValue, setFlatscreensValue] = useState("Flatscreen Tv")
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
      product: FlatscreensValue
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setFlatscreens(response.data.products)
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

    const FlatscreensThirtyTwoPage = Flatscreens.map((product, index) => {
      if (product.displaySize === "32 inches & Under" && product.functions === "Flat") {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />
      )
      }
      
      })

      const FlatscreensThirtyTwoPageLocation = Flatscreens.map((product, index) => {
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

      const FlatscreensThirtyTwoCurvedPage = Flatscreens.map((product, index) => {
        if (product.displaySize === "32 inches & Under" && product.functions === "Curved") {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
        )
        }
        
        })

        const FlatscreensThirtyTwoCurvedPageLocation = Flatscreens.map((product, index) => {
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

      const FlatscreensThirtyToFortyNinePage = Flatscreens.map((product, index) => {
        if (product.displaySize === "33 inches to 49 inches" && product.functions === "Flat") {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />

        )
        }
        
        })

        const FlatscreensThirtyToFortyNinePageLocation = Flatscreens.map((product, index) => {
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

        const FlatscreensThirtyToFortyNineCurvedPage = Flatscreens.map((product, index) => {
          if (product.displaySize === "33 inches to 49 inches" && product.functions === "Curved") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />

          )
          }
          
          })

          const FlatscreensThirtyToFortyNineCurvedPageLocation = Flatscreens.map((product, index) => {
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

        const FlatscreensFiftyToSixtyPage = Flatscreens.map((product, index) => {
          if (product.displaySize === "50 inches to 69 inches") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
          )
          }
          
          })

          const FlatscreensFiftyToSixtyPageLocation = Flatscreens.map((product, index) => {
            if ((product.displaySize === "50 inches to 69 inches") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
             && product.Gobabis === true))) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
            )
            }
            
            })

          // const FlatscreensFiftyToSixtyPage = Flatscreens.map((product, index) => {
          //   if (product.displaySize === "50 inches to 69 inches" && product.functions === "Flat") {
          //   return (
          //     <ProductCart key={index} UserData={UserData} product={product} />

          //   )
          //   }
            
          //   })

          // const FlatscreensFiftyToSixtyPageLocation = Flatscreens.map((product, index) => {
          //   if ((product.displaySize === "50 inches to 69 inches" && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          //      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          //      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
           //     || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           //      && product.Gobabis === true))) {
          //   return (
          //     <ProductCart key={index} UserData={UserData} product={product} />

          //   )
          //   }
            
          //   })

          const FlatscreensFiftyToSixtyCurvedPage = Flatscreens.map((product, index) => {
            if (product.displaySize === "50 inches to 69 inches" && product.functions === "Curved") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
            )
            }
            
            })

            const FlatscreensFiftyToSixtyCurvedPageLocation = Flatscreens.map((product, index) => {
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

          const FlatscreensSeventyUpPage = Flatscreens.map((product, index) => {
            if (product.displaySize === "70 inches & Up" && product.functions === "Flat") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />

            )
            }
            
            })

            const FlatscreensSeventyUpPageLocation = Flatscreens.map((product, index) => {
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

            const FlatscreensSeventyUpCurvedPage = Flatscreens.map((product, index) => {
              if (product.displaySize === "70 inches & Up" && product.functions === "Curved") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const FlatscreensSeventyUpCurvedPageLocation = Flatscreens.map((product, index) => {
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

            const FlatscreensSamsungThirtyTwoPage = Flatscreens.map((product, index) => {
              if ((product.displaySize === "32 inches & Under" && product.brand === "Samsung") && product.functions === "Flat") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />

              )
              }
              
              })

              const FlatscreensSamsungThirtyTwoPageLocation = Flatscreens.map((product, index) => {
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

              const FlatscreensSamsungThirtyTwoCurvedPage = Flatscreens.map((product, index) => {
                if ((product.displaySize === "32 inches & Under" && product.brand === "Samsung") && product.functions === "Curved") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const FlatscreensSamsungThirtyTwoCurvedPageLocation = Flatscreens.map((product, index) => {
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
        
              const FlatscreensSamsungThirtyToFortyNinePage = Flatscreens.map((product, index) => {
                if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Samsung") && product.functions === "Flat") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />

                )
                }
                
                })

                const FlatscreensSamsungThirtyToFortyNinePageLocation = Flatscreens.map((product, index) => {
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

                const FlatscreensSamsungThirtyToFortyNineCurvedPage = Flatscreens.map((product, index) => {
                  if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Samsung") && product.functions === "Curved") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />

                  )
                  }
                  
                  })

                  const FlatscreensSamsungThirtyToFortyNineCurvedPageLocation = Flatscreens.map((product, index) => {
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
        
                const FlatscreensSamsungFiftyToSixtyPage = Flatscreens.map((product, index) => {
                  if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Samsung") && product.functions === "Flat") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />

                  )
                  }
                  
                  })

                  const FlatscreensSamsungFiftyToSixtyPageLocation = Flatscreens.map((product, index) => {
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

                  const FlatscreensSamsungFiftyToSixtyCurvedPage = Flatscreens.map((product, index) => {
                    if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Samsung") && product.functions === "Curved") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />

                    )
                    }
                    
                    })

                    const FlatscreensSamsungFiftyToSixtyCurvedPageLocation = Flatscreens.map((product, index) => {
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
        
                  const FlatscreensSamsungSeventyUpPage = Flatscreens.map((product, index) => {
                    if ((product.displaySize === "70 inches & Up" && product.brand === "Samsung") && product.functions === "Flat") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />

                    )
                    }
                    
                    })

                    const FlatscreensSamsungSeventyUpPageLocation = Flatscreens.map((product, index) => {
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

                    const FlatscreensSamsungSeventyUpCurvedPage = Flatscreens.map((product, index) => {
                      if ((product.displaySize === "70 inches & Up" && product.brand === "Samsung") && product.functions === "Curved") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />

                      )
                      }
                      
                      })

                      const FlatscreensSamsungSeventyUpCurvedPageLocation = Flatscreens.map((product, index) => {
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

                    const FlatscreensLGThirtyTwoPage = Flatscreens.map((product, index) => {
                      if ((product.displaySize === "32 inches & Under" && product.brand === "LG") && product.functions === "Flat") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />

                      )
                      }
                      
                      })

                      const FlatscreensLGThirtyTwoPageLocation = Flatscreens.map((product, index) => {
                        if (((product.displaySize === "32 inches & Under" && product.brand === "LG") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
  
                        )
                        }
                        
                        })

                      const FlatscreensLGThirtyTwoCurvedPage = Flatscreens.map((product, index) => {
                        if ((product.displaySize === "32 inches & Under" && product.brand === "LG") && product.functions === "Curved") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />

                        )
                        }
                        
                        })

                        const FlatscreensLGThirtyTwoCurvedPageLocation = Flatscreens.map((product, index) => {
                          if (((product.displaySize === "32 inches & Under" && product.brand === "LG") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
  
                          )
                          }
                          
                          })
                
                      const FlatscreensLGThirtyToFortyNinePage = Flatscreens.map((product, index) => {
                        if ((product.displaySize === "33 inches to 49 inches" && product.brand === "LG") && product.functions === "Flat") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />

                        )
                        }
                        
                        })

                        const FlatscreensLGThirtyToFortyNinePageLocation = Flatscreens.map((product, index) => {
                          if (((product.displaySize === "33 inches to 49 inches" && product.brand === "LG") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
  
                          )
                          }
                          
                          })

                        const FlatscreensLGThirtyToFortyNineCurvedPage = Flatscreens.map((product, index) => {
                          if ((product.displaySize === "33 inches to 49 inches" && product.brand === "LG") && product.functions === "Curved") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />

                          )
                          }
                          
                          })

                          const FlatscreensLGThirtyToFortyNineCurvedPageLocation = Flatscreens.map((product, index) => {
                            if (((product.displaySize === "33 inches to 49 inches" && product.brand === "LG") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
  
                            )
                            }
                            
                            })
                
                       const FlatscreensLGFiftyToSixtyPage = Flatscreens.map((product, index) => {
                            if ((product.displaySize === "50 inches to 69 inches" && product.brand === "LG") && product.functions === "Flat") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />

                            )
                            }
                            
                            })

                            const FlatscreensLGFiftyToSixtyPageLocation = Flatscreens.map((product, index) => {
                              if (((product.displaySize === "50 inches to 69 inches" && product.brand === "LG") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
  
                              )
                              }
                              
                              })

                        const FlatscreensLGFiftyToSixtyCurvedPage = Flatscreens.map((product, index) => {
                              if ((product.displaySize === "50 inches to 69 inches" && product.brand === "LG") && product.functions === "Curved") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />

                              )
                              }
                              
                              })

                              const FlatscreensLGFiftyToSixtyCurvedPageLocation = Flatscreens.map((product, index) => {
                                if (((product.displaySize === "50 inches to 69 inches" && product.brand === "LG") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true))) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                )
                                }
                                
                                })
                
                          const FlatscreensLGSeventyUpPage = Flatscreens.map((product, index) => {
                            if ((product.displaySize === "70 inches & Up" && product.brand === "LG") && product.functions === "Flat") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />

                            )
                            }
                            
                            })

                            const FlatscreensLGSeventyUpPageLocation = Flatscreens.map((product, index) => {
                              if (((product.displaySize === "70 inches & Up" && product.brand === "LG") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
  
                              )
                              }
                              
                              })

                            const FlatscreensLGSeventyUpCurvedPage = Flatscreens.map((product, index) => {
                              if ((product.displaySize === "70 inches & Up" && product.brand === "LG") && product.functions === "Curved") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />

                              )
                              }
                              
                              })

                              const FlatscreensLGSeventyUpCurvedPageLocation = Flatscreens.map((product, index) => {
                                if (((product.displaySize === "70 inches & Up" && product.brand === "LG") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true))) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                )
                                }
                                
                                })

                            const FlatscreensHisenseThirtyTwoPage = Flatscreens.map((product, index) => {
                              if ((product.displaySize === "32 inches & Under" && product.brand === "Hisense") && product.functions === "Flat") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />

                              )
                              }
                              
                              })

                              const FlatscreensHisenseThirtyTwoPageLocation = Flatscreens.map((product, index) => {
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

                              const FlatscreensHisenseThirtyTwoCurvedPage = Flatscreens.map((product, index) => {
                                if ((product.displaySize === "32 inches & Under" && product.brand === "Hisense") && product.functions === "Curved") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />

                                )
                                }
                                
                                })

                                const FlatscreensHisenseThirtyTwoCurvedPageLocation = Flatscreens.map((product, index) => {
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
                        
                              const FlatscreensHisenseThirtyToFortyNinePage = Flatscreens.map((product, index) => {
                                if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Hisense") && product.functions === "Flat") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />

                                )
                                }
                                
                                })

                                const FlatscreensHisenseThirtyToFortyNinePageLocation = Flatscreens.map((product, index) => {
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

                                const FlatscreensHisenseThirtyToFortyNineCurvedPage = Flatscreens.map((product, index) => {
                                  if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Hisense") && product.functions === "Curved") {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />

                                  )
                                  }
                                  
                                  })

                                  const FlatscreensHisenseThirtyToFortyNineCurvedPageLocation = Flatscreens.map((product, index) => {
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
                        
                                const FlatscreensHisenseFiftyToSixtyPage = Flatscreens.map((product, index) => {
                                  if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Hisense") && product.functions === "Flat") {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />

                                  )
                                  }
                                  
                                  })

                                  const FlatscreensHisenseFiftyToSixtyPageLocation = Flatscreens.map((product, index) => {
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

                                  const FlatscreensHisenseFiftyToSixtyCurvedPage = Flatscreens.map((product, index) => {
                                    if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Hisense") && product.functions === "Curved") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />

                                    )
                                    }
                                    
                                    })

                                    const FlatscreensHisenseFiftyToSixtyCurvedPageLocation = Flatscreens.map((product, index) => {
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
                        
                                  const FlatscreensHisenseSeventyUpPage = Flatscreens.map((product, index) => {
                                    if ((product.displaySize === "70 inches & Up" && product.brand === "Hisense") && product.functions === "Flat") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />

                                    )
                                    }
                                    
                                    })

                                    const FlatscreensHisenseSeventyUpPageLocation = Flatscreens.map((product, index) => {
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

                                    const FlatscreensHisenseSeventyUpCurvedPage = Flatscreens.map((product, index) => {
                                      if ((product.displaySize === "70 inches & Up" && product.brand === "Hisense") && product.functions === "Curved") {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />

                                      )
                                      }
                                      
                                      })

                                      const FlatscreensHisenseSeventyUpCurvedPageLocation = Flatscreens.map((product, index) => {
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

                                    const FlatscreensSonyThirtyTwoPage = Flatscreens.map((product, index) => {
                                      if ((product.displaySize === "32 inches & Under" && product.brand === "Sony") && product.functions === "Flat") {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />

                                      )
                                      }
                                      
                                      })

                                      const FlatscreensSonyThirtyTwoPageLocation = Flatscreens.map((product, index) => {
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

                                      const FlatscreensSonyThirtyTwoCurvedPage = Flatscreens.map((product, index) => {
                                        if ((product.displaySize === "32 inches & Under" && product.brand === "Sony") && product.functions === "Curved") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />

                                        )
                                        }
                                        
                                        })

                                        const FlatscreensSonyThirtyTwoCurvedPageLocation = Flatscreens.map((product, index) => {
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
                                
                                      const FlatscreensSonyThirtyToFortyNinePage = Flatscreens.map((product, index) => {
                                        if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Sony") && product.functions === "Flat") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />

                                        )
                                        }
                                        
                                        })

                                        const FlatscreensSonyThirtyToFortyNinePageLocation = Flatscreens.map((product, index) => {
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

                                        const FlatscreensSonyThirtyToFortyNineCurvedPage = Flatscreens.map((product, index) => {
                                          if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Sony") && product.functions === "Curved") {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />

                                          )
                                          }
                                          
                                          })

                                          const FlatscreensSonyThirtyToFortyNineCurvedPageLocation = Flatscreens.map((product, index) => {
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
                                
                                        const FlatscreensSonyFiftyToSixtyPage = Flatscreens.map((product, index) => {
                                          if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Sony") && product.functions === "Flat") {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />

                                          )
                                          }
                                          
                                          })

                                          const FlatscreensSonyFiftyToSixtyPageLocation = Flatscreens.map((product, index) => {
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

                                          const FlatscreensSonyFiftyToSixtyCurvedPage = Flatscreens.map((product, index) => {
                                            if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Sony") && product.functions === "Curved") {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />

                                            )
                                            }
                                            
                                            })

                                            const FlatscreensSonyFiftyToSixtyCurvedPageLocation = Flatscreens.map((product, index) => {
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
                                
                                          const FlatscreensSonySeventyUpPage = Flatscreens.map((product, index) => {
                                            if ((product.displaySize === "70 inches & Up" && product.brand === "Sony") && product.functions === "Flat") {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />

                                            )
                                            }
                                            
                                            })

                                            const FlatscreensSonySeventyUpPageLocation = Flatscreens.map((product, index) => {
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

                                            const FlatscreensSonySeventyUpCurvedPage = Flatscreens.map((product, index) => {
                                              if ((product.displaySize === "70 inches & Up" && product.brand === "Sony") && product.functions === "Curved") {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />

                                              )
                                              }
                                              
                                              })

                                              const FlatscreensSonySeventyUpCurvedPageLocation = Flatscreens.map((product, index) => {
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

                                            const FlatscreensPanasonicThirtyTwoPage = Flatscreens.map((product, index) => {
                                              if ((product.displaySize === "32 inches & Under" && product.brand === "Panasonic") && product.functions === "Flat") {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />

                                              )
                                              }
                                              
                                              })

                                              const FlatscreensPanasonicThirtyTwoPageLocation = Flatscreens.map((product, index) => {
                                                if (((product.displaySize === "32 inches & Under" && product.brand === "Panasonic") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                 && product.Gobabis === true))) {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                                )
                                                }
                                                
                                                })

                                              const FlatscreensPanasonicThirtyTwoCurvedPage = Flatscreens.map((product, index) => {
                                                if ((product.displaySize === "32 inches & Under" && product.brand === "Panasonic") && product.functions === "Curved") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />

                                                )
                                                }
                                                
                                                })

                                                const FlatscreensPanasonicThirtyTwoCurvedPageLocation = Flatscreens.map((product, index) => {
                                                  if (((product.displaySize === "32 inches & Under" && product.brand === "Panasonic") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                   && product.Gobabis === true))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                                  )
                                                  }
                                                  
                                                  })
                                        
                                              const FlatscreensPanasonicThirtyToFortyNinePage = Flatscreens.map((product, index) => {
                                                if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Panasonic") && product.functions === "Flat") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />

                                                )
                                                }
                                                
                                                })

                                                const FlatscreensPanasonicThirtyToFortyNinePageLocation = Flatscreens.map((product, index) => {
                                                  if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Panasonic") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                   && product.Gobabis === true))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
  
                                                  )
                                                  }
                                                  
                                                  })

                                                const FlatscreensPanasonicThirtyToFortyNineCurvedPage = Flatscreens.map((product, index) => {
                                                  if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Panasonic") && product.functions === "Curved") {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />

                                                  )
                                                  }
                                                  
                                                  })

                                                  const FlatscreensPanasonicThirtyToFortyNineCurvedPageLocation = Flatscreens.map((product, index) => {
                                                    if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Panasonic") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                     && product.Gobabis === true))) {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                                    )
                                                    }
                                                    
                                                    })
                                        
                                                const FlatscreensPanasonicFiftyToSixtyPage = Flatscreens.map((product, index) => {
                                                  if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Panasonic") && product.functions === "Flat") {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />

                                                  )
                                                  }
                                                  
                                                  })

                                                  const FlatscreensPanasonicFiftyToSixtyPageLocation = Flatscreens.map((product, index) => {
                                                    if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Panasonic") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                     && product.Gobabis === true))) {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
  
                                                    )
                                                    }
                                                    
                                                    })

                                                  const FlatscreensPanasonicFiftyToSixtyCurvedPage = Flatscreens.map((product, index) => {
                                                    if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Panasonic") && product.functions === "Curved") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                    )
                                                    }
                                                    
                                                    })

                                                    const FlatscreensPanasonicFiftyToSixtyCurvedPageLocation = Flatscreens.map((product, index) => {
                                                      if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Panasonic") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                      )
                                                      }
                                                      
                                                      })
                                        
                                                  const FlatscreensPanasonicSeventyUpPage = Flatscreens.map((product, index) => {
                                                    if ((product.displaySize === "70 inches & Up" && product.brand === "Panasonic") && product.functions === "Flat") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                    )
                                                    }
                                                    
                                                    })

                                                    const FlatscreensPanasonicSeventyUpPageLocation = Flatscreens.map((product, index) => {
                                                      if (((product.displaySize === "70 inches & Up" && product.brand === "Panasonic") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
  
                                                      )
                                                      }
                                                      
                                                      })

                                                    const FlatscreensPanasonicSeventyUpCurvedPage = Flatscreens.map((product, index) => {
                                                      if ((product.displaySize === "70 inches & Up" && product.brand === "Panasonic") && product.functions === "Curved") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                      )
                                                      }
                                                      
                                                      })

                                                      const FlatscreensPanasonicSeventyUpCurvedPageLocation = Flatscreens.map((product, index) => {
                                                        if (((product.displaySize === "70 inches & Up" && product.brand === "Panasonic") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                                        )
                                                        }
                                                        
                                                        })

                                                    const FlatscreensSansuiThirtyTwoPage = Flatscreens.map((product, index) => {
                                                      if ((product.displaySize === "32 inches & Under" && product.brand === "Sansui") && product.functions === "Flat") {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                      )
                                                      }
                                                      
                                                      })

                                                      const FlatscreensSansuiThirtyTwoPageLocation = Flatscreens.map((product, index) => {
                                                        if (((product.displaySize === "32 inches & Under" && product.brand === "Sansui") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                         && product.Gobabis === true))) {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
  
                                                        )
                                                        }
                                                        
                                                        })

                                                      const FlatscreensSansuiThirtyTwoCurvedPage = Flatscreens.map((product, index) => {
                                                        if ((product.displaySize === "32 inches & Under" && product.brand === "Sansui") && product.functions === "Curved") {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />

                                                        )
                                                        }
                                                        
                                                        })

                                                        const FlatscreensSansuiThirtyTwoCurvedPageLocation = Flatscreens.map((product, index) => {
                                                          if (((product.displaySize === "32 inches & Under" && product.brand === "Sansui") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                           && product.Gobabis === true))) {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
  
                                                          )
                                                          }
                                                          
                                                          })
                                                
                                                      const FlatscreensSansuiThirtyToFortyNinePage = Flatscreens.map((product, index) => {
                                                        if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Sansui") && product.functions === "Flat") {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />

                                                        )
                                                        }
                                                        
                                                        })

                                                        const FlatscreensSansuiThirtyToFortyNinePageLocation = Flatscreens.map((product, index) => {
                                                          if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Sansui") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                           && product.Gobabis === true))) {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
  
                                                          )
                                                          }
                                                          
                                                          })

                                                        const FlatscreensSansuiThirtyToFortyNineCurvedPage = Flatscreens.map((product, index) => {
                                                          if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Sansui") && product.functions === "Curved") {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />

                                                          )
                                                          }
                                                          
                                                          })

                                                          const FlatscreensSansuiThirtyToFortyNineCurvedPageLocation = Flatscreens.map((product, index) => {
                                                            if (((product.displaySize === "33 inches to 49 inches" && product.brand === "Sansui") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                             && product.Gobabis === true))) {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />
  
                                                            )
                                                            }
                                                            
                                                            })
                                                
                                                        const FlatscreensSansuiFiftyToSixtyPage = Flatscreens.map((product, index) => {
                                                          if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Sansui") && product.functions === "Flat") {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />

                                                          )
                                                          }
                                                          
                                                          })

                                                          const FlatscreensSansuiFiftyToSixtyPageLocation = Flatscreens.map((product, index) => {
                                                            if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Sansui") && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                             && product.Gobabis === true))) {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />
  
                                                            )
                                                            }
                                                            
                                                            })

                                                          const FlatscreensSansuiFiftyToSixtyCurvedPage = Flatscreens.map((product, index) => {
                                                            if ((product.displaySize === "50 inches to 69 inches" && product.brand === "Sansui") && product.functions === "Curved") {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />

                                                            )
                                                            }
                                                            
                                                            })

                                                            const FlatscreensSansuiFiftyToSixtyCurvedPageLocation = Flatscreens.map((product, index) => {
                                                              if (((product.displaySize === "50 inches to 69 inches" && product.brand === "Sansui") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                               && product.Gobabis === true))) {
                                                              return (
                                                                <ProductCart key={index} UserData={UserData} product={product} />
  
                                                              )
                                                              }
                                                              
                                                              })
                                                
                                                          const FlatscreensSansuiSeventyUpPage = Flatscreens.map((product, index) => {
                                                            if ((product.displaySize === "70 inches & Up" && product.brand === "Sansui") && product.functions === "Flat") {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />

                                                            )
                                                            }
                                                            
                                                            })

                                                            const FlatscreensSansuiSeventyUpPageLocation = Flatscreens.map((product, index) => {
                                                              if (((product.displaySize === "70 inches & Up" && product.brand === "Sansui")
                                                               && product.functions === "Flat") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                               || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                               || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                               || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                && product.Gobabis === true))) {
                                                              return (
                                                                <ProductCart key={index} UserData={UserData} product={product} />
  
                                                              )
                                                              }
                                                              
                                                              })

                                                            const FlatscreensSansuiSeventyUpCurvedPage = Flatscreens.map((product, index) => {
                                                              if ((product.displaySize === "70 inches & Up" && product.brand === "Sansui") && product.functions === "Curved") {
                                                              return (
                                                                <ProductCart key={index} UserData={UserData} product={product} />

                                                              )
                                                              }
                                                              
                                                              })

                                                              const FlatscreensSansuiSeventyUpCurvedPageLocation = Flatscreens.map((product, index) => {
                                                                if (((product.displaySize === "70 inches & Up" && product.brand === "Sansui") && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                 && product.Gobabis === true))) {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />
  
                                                                )
                                                                }
                                                                
                                                                })

                                                            const FlatscreensOtherThirtyTwoPage = Flatscreens.map((product, index) => {
                                                              if ((product.displaySize === "32 inches & Under" && product.seriesName === "Unlisted tv") && product.functions === "Flat") {
                                                              return (
                                                                <ProductCart key={index} UserData={UserData} product={product} />

                                                              )
                                                              }
                                                              
                                                              })

                                                              const FlatscreensOtherThirtyTwoPageLocation = Flatscreens.map((product, index) => {
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

                                                              const FlatscreensOtherThirtyTwoCurvedPage = Flatscreens.map((product, index) => {
                                                                if ((product.displaySize === "32 inches & Under" && product.seriesName === "Unlisted tv") && product.functions === "Curved") {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />

                                                                )
                                                                }
                                                                
                                                                })

                                                                const FlatscreensOtherThirtyTwoCurvedPageLocation = Flatscreens.map((product, index) => {
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
                                                        
                                                              const FlatscreensOtherThirtyToFortyNinePage = Flatscreens.map((product, index) => {
                                                                if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Unlisted tv") && product.functions === "Flat") {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />

                                                                )
                                                                }
                                                                
                                                                })

                                                                const FlatscreensOtherThirtyToFortyNinePageLocation = Flatscreens.map((product, index) => {
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

                                                                const FlatscreensOtherThirtyToFortyNineCurvedPage = Flatscreens.map((product, index) => {
                                                                  if ((product.displaySize === "33 inches to 49 inches" && product.brand === "Unlisted tv") && product.functions === "Curved") {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />

                                                                  )
                                                                  }
                                                                  
                                                                  })

                                                                  const FlatscreensOtherThirtyToFortyNineCurvedPageLocation = Flatscreens.map((product, index) => {
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
                                                        
                                                                const FlatscreensOtherFiftyToSixtyPage = Flatscreens.map((product, index) => {
                                                                  if ((product.displaySize === "50 inches to 69 inches" && product.seriesName === "Unlisted tv" && product.functions === "Flat")) {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />

                                                                  )
                                                                  }
                                                                  
                                                                  })

                                                                  const FlatscreensOtherFiftyToSixtyPageLocation = Flatscreens.map((product, index) => {
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

                                                                  const FlatscreensOtherFiftyToSixtyCurvedPage = Flatscreens.map((product, index) => {
                                                                    if ((product.displaySize === "50 inches to 69 inches" && product.seriesName === "Unlisted tv" && product.functions === "Curved")) {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                                    )
                                                                    }
                                                                    
                                                                    })

                                                                    const FlatscreensOtherFiftyToSixtyCurvedPageLocation = Flatscreens.map((product, index) => {
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
                                                        
                                                                  const FlatscreensOtherSeventyUpPage = Flatscreens.map((product, index) => {
                                                                    if ((product.displaySize === "70 inches & Up" && product.seriesName === "Unlisted tv") && product.functions === "Flat") {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />

                                                                    )
                                                                    }
                                                                    
                                                                    })

                                                                    const FlatscreensOtherSeventyUpPageLocation = Flatscreens.map((product, index) => {
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

                                                                    const FlatscreensOtherSeventyUpCurvedPage = Flatscreens.map((product, index) => {
                                                                      if ((product.displaySize === "70 inches & Up" && product.seriesName === "Unlisted tv") && product.functions === "Curved") {
                                                                      return (
                                                                        <ProductCart key={index} UserData={UserData} product={product} />

                                                                      )
                                                                      }
                                                                      
                                                                      })

                                                                      const FlatscreensOtherSeventyUpCurvedPageLocation = Flatscreens.map((product, index) => {
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

      const PageCategory = (index) => {
        settogglePageCategory(index);
      }

      const [Skip, setSkip] = useState(0)
      const [Limit, setLimit] = useState(8)
      const [PostSize, setPostSize] = useState()
      const [SearchTerms, setSearchTerms] = useState("")
      const [searchResults, setSearchResults] = useState(false)
    
      const clickSearch = () => setSearchResults(!searchResults)
    
    const [Filters, setFilters] = useState({
    location: []
    })
    
    const BrandCategory = (index) => {
      settoggleBrands(index);
    }
    
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

      const MemoryDesktopCategory = (index) => {
        settoggleMemorySizeDesktop(index);
      }


  return (
    <div style={{ display: 'block'}}>
    <SearchBar showResults={clickSearch} refreshFunction={updateSearchTerms} />
    {SearchTerms === "" ?
  <div className='Visited_container-wrapper'>
  <div className='Visited_page-banner'>
    <div className='Page_banner-style'>
    <div className='Page_select-option_many'>
      <div onClick={()=> {PageCategory(1); BrandCategory(0); MemoryDesktopCategory(1)}}
       className={togglePageCategory ===1 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_tv_thirty" 
        src={TwentyFour}
        />
        <div className='Image_Description_hover_box_some'>
        <div className='Image_Description_hover'>
          32 inches & Under
        </div>
        </div>
      </div>

      <div onClick={()=> {PageCategory(2); BrandCategory(0); MemoryDesktopCategory(1)}}
       className={togglePageCategory ===2 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_tv_thirty_up" 
        src={ThirtyThree}
        />
        <div className='Image_Description_hover_box_some'>
        <div className='Image_Description_hover'>
          33 inches to 49 inches
        </div>
        </div>
      </div>

      <div onClick={()=> {PageCategory(3); BrandCategory(0); MemoryDesktopCategory(1)}}
       className={togglePageCategory ===3 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_tv_fifty" 
        src={Fifty}
        />
        <div className='Image_Description_hover_box_some'>
        <div className='Image_Description_hover'>
          50 inches to 69 inches
        </div>
        </div>
      </div>

      <div onClick={()=> {PageCategory(4); BrandCategory(0); MemoryDesktopCategory(1)}}
       className={togglePageCategory ===4 ? "Page-option_selects_toggle_some active-image_page_selected" : "Page-option_selects_toggle_some"}>
        <img className="image_page_selected_tv_seventy" 
        src={Seventy}
        />
        <div className='Image_Description_hover_box_some'>
        <div className='Image_Description_hover'>
          70 inches & Up
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
      <div className="Brand_options_listed">
        <div className={toggleBrands ===0 ? 'Flatscreen_tv_option_selected_style active-Ram_option_selected_style' : "Flatscreen_tv_option_selected_style"}
        onClick={()=> {BrandCategory(0)}} >
            <span>All TV's</span>
          </div>
        <div className={toggleBrands ===1 ? 'Flatscreen_tv_option_selected_style active-Ram_option_selected_style' : "Flatscreen_tv_option_selected_style"}
        onClick={()=> {BrandCategory(1)}} >
            <span>SAMSUNG</span>
          </div>
          <div className={toggleBrands ===2 ? 'Flatscreen_tv_option_selected_style active-Ram_option_selected_style' : "Flatscreen_tv_option_selected_style"}
        onClick={()=> {BrandCategory(2)}} >
          <span>LG</span>
          </div>
          <div className={toggleBrands ===3 ? 'Flatscreen_tv_option_selected_style active-Ram_option_selected_style' : "Flatscreen_tv_option_selected_style"}
        onClick={()=> {BrandCategory(3)}} >
          <span>HISENSE</span>
          </div>
          <div className={toggleBrands ===4 ? 'Flatscreen_tv_option_selected_style active-Ram_option_selected_style' : "Flatscreen_tv_option_selected_style"}
        onClick={()=> {BrandCategory(4)}} >
          <span>SONY</span>
          </div>
          <div className={toggleBrands ===5 ? 'Flatscreen_tv_option_selected_style active-Ram_option_selected_style' : "Flatscreen_tv_option_selected_style"}
        onClick={()=> {BrandCategory(5)}} >
          <span>PANASONIC</span>
          </div>
          <div className={toggleBrands ===6 ? 'Flatscreen_tv_option_selected_style active-Ram_option_selected_style' : "Flatscreen_tv_option_selected_style"}
        onClick={()=> {BrandCategory(6)}} >
          <span>SANSUI</span>
          </div>
          <div className={toggleBrands ===7 ? 'Flatscreen_tv_option_selected_style active-Ram_option_selected_style' : "Flatscreen_tv_option_selected_style"}
        onClick={()=> {BrandCategory(7)}} >
          <span>Other Brands</span>
          </div>
        </div>
        <div className="Tv_size_options_listed">
        <div className='Memomry_size_option-list'>
          <button onClick={()=> {MemoryDesktopCategory(1)}}
          className={toggleMemorySizeDesktop ===1 ? "Memory_size_option_selected_style active-Memory_size_option_selected_style Memory_size_option_selected_style-left" : "Memory_size_option_selected_style Memory_size_option_selected_style-left"}
          >Flat</button>
          <button onClick={()=> {MemoryDesktopCategory(2)}}
          className={toggleMemorySizeDesktop ===2 ? "Memory_size_option_selected_style active-Memory_size_option_selected_style Memory_size_option_selected_style-left" : "Memory_size_option_selected_style Memory_size_option_selected_style-left"}>Curved</button>
          </div>
      </div>
      </div>
    </div>
  </div>

{/* All Flatscreen Flat  */}
<div className={(togglePageCategory === 1 && toggleBrands === 0) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensThirtyTwoPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 0) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensThirtyToFortyNinePage}
</div>

<div className={togglePageCategory === 3 && toggleBrands === 0 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensFiftyToSixtyPage}
</div>

{/* <div className={(togglePageCategory === 3 && toggleBrands === 0) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensFiftyToSixtyPage}
</div> */}

<div className={(togglePageCategory === 4 && toggleBrands === 0) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSeventyUpPageLocation}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 0) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensThirtyTwoPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 0) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensThirtyToFortyNinePageLocation}
</div>

<div className={togglePageCategory === 3 && toggleBrands === 0 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensFiftyToSixtyPageLocation}
</div>

{/* <div className={(togglePageCategory === 3 && toggleBrands === 0) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensFiftyToSixtyPageLocation}
</div> */}

<div className={(togglePageCategory === 4 && toggleBrands === 0) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSeventyUpPageLocation}
</div>

{/* Samsung Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 1) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungThirtyTwoPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 1) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungThirtyToFortyNinePage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 1) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungFiftyToSixtyPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 1) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungSeventyUpPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 1) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungThirtyTwoPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 1) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungThirtyToFortyNinePageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 1) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungFiftyToSixtyPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 1) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungSeventyUpPageLocation}
</div>

{/* LG Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 2) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGThirtyTwoPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 2) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGThirtyToFortyNinePage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 2) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGFiftyToSixtyPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 2) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGSeventyUpPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 2) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGThirtyTwoPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 2) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGThirtyToFortyNinePageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 2) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGFiftyToSixtyPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 2) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGSeventyUpPageLocation}
</div>

{/* Hisense Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 3) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseThirtyTwoPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 3) && toggleMemorySizeDesktop === 1 && SelectLocation === false  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseThirtyToFortyNinePage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 3) && toggleMemorySizeDesktop === 1 && SelectLocation === false  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseFiftyToSixtyPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 3) && toggleMemorySizeDesktop === 1 && SelectLocation === false  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseSeventyUpPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 3) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseThirtyTwoPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 3) && toggleMemorySizeDesktop === 1 && SelectLocation === true  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseThirtyToFortyNinePageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 3) && toggleMemorySizeDesktop === 1 && SelectLocation === true  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseFiftyToSixtyPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 3) && toggleMemorySizeDesktop === 1 && SelectLocation === true  ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseSeventyUpPageLocation}
</div>

{/* Sony Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 4) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyThirtyTwoPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 4) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyThirtyToFortyNinePage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 4) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyFiftyToSixtyPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 4) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonySeventyUpPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 4) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyThirtyTwoPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 4) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyThirtyToFortyNinePageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 4) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyFiftyToSixtyPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 4) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonySeventyUpPageLocation}
</div>

{/* Panasonic Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 5) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicThirtyTwoPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 5) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicThirtyToFortyNinePage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 5) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicFiftyToSixtyPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 5) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicSeventyUpPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 5) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicThirtyTwoPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 5) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicThirtyToFortyNinePageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 5) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicFiftyToSixtyPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 5) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicSeventyUpPageLocation}
</div>

{/* Sansui Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 6) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiThirtyTwoPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 6) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiThirtyToFortyNinePage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 6) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiFiftyToSixtyPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 6) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiSeventyUpPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 6) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiThirtyTwoPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 6) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiThirtyToFortyNinePageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 6) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiFiftyToSixtyPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 6) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiSeventyUpPageLocation}
</div>

{/* Other Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 7) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherThirtyTwoPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 7) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherThirtyToFortyNinePage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 7) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherFiftyToSixtyPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 7) && toggleMemorySizeDesktop === 1 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherSeventyUpPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 7) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherThirtyTwoPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 7) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherThirtyToFortyNinePageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 7) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherFiftyToSixtyPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 7) && toggleMemorySizeDesktop === 1 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherSeventyUpPageLocation}
</div>

{/* All Curved Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 0) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensThirtyTwoCurvedPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 0) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensThirtyToFortyNineCurvedPage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 0) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensFiftyToSixtyCurvedPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 0) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSeventyUpCurvedPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 0) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensThirtyTwoCurvedPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 0) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensThirtyToFortyNineCurvedPageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 0) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensFiftyToSixtyCurvedPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 0) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSeventyUpCurvedPageLocation}
</div>

{/* Samsung Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 1) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungThirtyTwoCurvedPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 1) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungThirtyToFortyNineCurvedPage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 1) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungFiftyToSixtyCurvedPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 1) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungSeventyUpCurvedPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 1) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungThirtyTwoCurvedPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 1) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungThirtyToFortyNineCurvedPageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 1) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungFiftyToSixtyCurvedPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 1) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSamsungSeventyUpCurvedPageLocation}
</div>

{/* LG Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 2) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGThirtyTwoCurvedPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 2) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGThirtyToFortyNineCurvedPage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 2) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGFiftyToSixtyCurvedPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 2) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGSeventyUpCurvedPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 2) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGThirtyTwoCurvedPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 2) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGThirtyToFortyNineCurvedPageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 2) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGFiftyToSixtyCurvedPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 2) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensLGSeventyUpCurvedPageLocation}
</div>

{/* Hisense Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 3) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseThirtyTwoCurvedPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 3) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseThirtyToFortyNineCurvedPage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 3) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseFiftyToSixtyCurvedPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 3) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseSeventyUpCurvedPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 3) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseThirtyTwoCurvedPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 3) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseThirtyToFortyNineCurvedPageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 3) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseFiftyToSixtyCurvedPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 3) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensHisenseSeventyUpCurvedPageLocation}
</div>

{/* Sony Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 4) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyThirtyTwoCurvedPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 4) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyThirtyToFortyNineCurvedPage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 4) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyFiftyToSixtyCurvedPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 4) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonySeventyUpCurvedPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 4) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyThirtyTwoCurvedPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 4) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyThirtyToFortyNineCurvedPageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 4) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonyFiftyToSixtyCurvedPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 4) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSonySeventyUpCurvedPageLocation}
</div>

{/* Panasonic Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 5) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicThirtyTwoCurvedPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 5) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicThirtyToFortyNineCurvedPage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 5) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicFiftyToSixtyCurvedPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 5) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicSeventyUpCurvedPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 5) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicThirtyTwoCurvedPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 5) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicThirtyToFortyNineCurvedPageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 5) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicFiftyToSixtyCurvedPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 5) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensPanasonicSeventyUpCurvedPageLocation}
</div>

{/* Sansui Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 6) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiThirtyTwoCurvedPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 6) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiThirtyToFortyNineCurvedPage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 6) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiFiftyToSixtyCurvedPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 6) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiSeventyUpCurvedPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 6) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiThirtyTwoCurvedPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 6) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiThirtyToFortyNineCurvedPageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 6) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiFiftyToSixtyCurvedPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 6) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensSansuiSeventyUpCurvedPageLocation}
</div>

{/* Other Tvs  */}
<div className={(togglePageCategory === 1 && toggleBrands === 7) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherThirtyTwoCurvedPage}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 7) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherThirtyToFortyNineCurvedPage}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 7) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherFiftyToSixtyCurvedPage}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 7) && toggleMemorySizeDesktop === 2 && SelectLocation === false ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherSeventyUpCurvedPage}
</div>

<div className={(togglePageCategory === 1 && toggleBrands === 7) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherThirtyTwoCurvedPageLocation}
</div>

<div className={(togglePageCategory === 2 && toggleBrands === 7) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherThirtyToFortyNineCurvedPageLocation}
</div>

<div className={(togglePageCategory === 3 && toggleBrands === 7) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherFiftyToSixtyCurvedPageLocation}
</div>

<div className={(togglePageCategory === 4 && toggleBrands === 7) && toggleMemorySizeDesktop === 2 && SelectLocation === true ? "Listed_fetched_products" : "Listed_fetched_products-hide"}>
  {FlatscreensOtherSeventyUpCurvedPageLocation}
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

export default Flatscreens