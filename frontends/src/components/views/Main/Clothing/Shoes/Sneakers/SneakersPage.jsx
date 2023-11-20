import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import { Empty } from 'antd';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import '../../../00Components/pages.css'
import SearchBar from '../../../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../../../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../../../00Components/Cards/ProductCart/ProductCart'

function SneakersPage(props) {

  const [UserData, setUserData] = useState([])
  const [HiTop, setHiTop] = useState([])
  const [LowTops, setLowTops] = useState([])
  const [Trainer, setTrainer] = useState([])
  const [SlipOn, setSlipOn] = useState([])
  const [Loafers, setLoafers] = useState([])
  const [BoatShoes, setBoatShoes] = useState([])

  const [NikeShoes, setNikeShoes] = useState([])
  const [AdidasShoes, setAdidasShoes] = useState([])
  const [NewBalanceShoes, setNewBalanceShoes] = useState([])
  const [PumaShoes, setPumaShoes] = useState([])
  const [ReebokShoes, setReebokShoes] = useState([])
  const [AsicsShoes, setAsicsShoes] = useState([])
  const [SteveMaddenShoes, setSteveMaddenShoes] = useState([])
  const [SkechersShoes, setSkechersShoes] = useState([])
  const [DesignerShoes, setDesignerShoes] = useState([])

  const [toggleShoeType, settoggleShoeType] = useState(0)
  const [SelectTabs, setSelectTabs] = useState(1)

  const [Products, setProducts] = useState([])
  const [ToggleLocation, setToggleLocation] = useState(false)
  const [IsLoading, setIsLoading] = useState(true)

  const SetLocation = () => setToggleLocation(!ToggleLocation)

  const ToggleSelectTabs = (index) => {
    setSelectTabs(index);
  } 

  const ShoeTypeCategory = (index) => {
      settoggleShoeType(index);
  } 


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
    }
  };

  useEffect(() => {

    const variable = {
      product: "High Tops"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
      setHiTop(response.data.products)
  } else {
  }
  })

      Axios.get('/api/users/getUser')
      .then(response => {
          if (response.data.success) {
            setUserData(response.data.doc)
          }
      })

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
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


const GetLowTops = () => {
    const variable = {
        product: "Low Tops"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setLowTops(response.data.products)
    } else {
    }
    })
}

const GetTrainer = () => {
    const variable = {
        product: "Trainers"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setTrainer(response.data.products)
    } else {
    }
    })
}

const GetSlipOn = () => {
    const variable = {
        product: "Slip On"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setSlipOn(response.data.products)
    } else {
    }
    })
}

const GetLoafers = () => {
    const variable = {
        product: "Loafers"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setLoafers(response.data.products)
    } else {
    }
    })
}

const GetBoatShoes = () => {
  const variable = {
      product: "Boat Shoes"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setBoatShoes(response.data.products)
  } else {
  }
  })
}

const GetNikeShoes = () => {
  const variable = {
      product: "Nike Sneakers"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setNikeShoes(response.data.products)
  } else {
  }
  })
}

const GetAdidasShoes = () => {
  const variable = {
      product: "Adidas Sneakers"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setAdidasShoes(response.data.products)
  } else {
  }
  })
}

const GetNewBalanceShoes = () => {
  const variable = {
      product: "New Balance Sneakers"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setNewBalanceShoes(response.data.products)
  } else {
  }
  })
}

const GetPumaShoes = () => {
  const variable = {
      product: "Puma Sneakers"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setPumaShoes(response.data.products)
  } else {
  }
  })
}

const GetReebokShoes = () => {
const variable = {
    product: "Reebok Sneakers"
  }

Axios.post('./api/product/getPageProducts', variable)
.then(response => {
if (response.data.success) {

  setReebokShoes(response.data.products)
} else {
}
})
}

const GetAsicsShoes = () => {
  const variable = {
      product: "Asics Sneakers"
    }
  
  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setAsicsShoes(response.data.products)
  } else {
  }
  })
  }

const GetSteveMaddenShoes = () => {
    const variable = {
        product: "Steve Madden Sneakers"
      }
    
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setSteveMaddenShoes(response.data.products)
    } else {
    }
    })
}

const GetSkechersShoes = () => {
    const variable = {
        product: "Skechers Sneakers"
      }
    
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setSkechersShoes(response.data.products)
    } else {
    }
    })
}

const GetDesignerShoes = () => {
  const variable = {
      product: "Designer Sneakers"
    }
  
  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setDesignerShoes(response.data.products)
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


      const HiTopPage = HiTop.map((product, index) => {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
          )
        })

          const NikeShoesHiTopPage = NikeShoes.map((product, index) => {
            if (product.nikeShoeStyle === "High Top") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
    
            )
            }
            
            })

            const AdidasShoesHiTopPage = AdidasShoes.map((product, index) => {
              if (product.adidasShoeStyle === "High Top") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
      
              )
              }
              
              })

                const PumaShoesHiTopPage = PumaShoes.map((product, index) => {
                  if (product.pumaShoeStyle === "High Top") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
          
                  )
                  }
                  
                  })

                  const ReebokShoesHiTopPage = ReebokShoes.map((product, index) => {
                    if (product.reebokShoeStyle === "High Top") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
            
                    )
                    }
                    
                    })


        const HiTopPageLocation = HiTop.map((product, index) => {
          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
      
            )
          }
          })

          const NikeShoesHiTopPageLocation = NikeShoes.map((product, index) => {
            if (product.nikeShoeStyle === "High Top" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
             && product.Gobabis === true))) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
        
            )
            }
            
            })

            const AdidasShoesHiTopPageLocation = AdidasShoes.map((product, index) => {
              if (product.adidasShoeStyle === "High Top" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
          
              )
              }
              
              })


                const PumaShoesHiTopPageLocation = PumaShoes.map((product, index) => {
                  if (product.pumaShoeStyle === "High Top" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
              
                  )
                  }
                  
                  })

                  const ReebokShoesHiTopPageLocation = ReebokShoes.map((product, index) => {
                    if (product.reebokShoeStyle === "High Top" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                
                    )
                    }
                    
                    })


          const LowTopsPage = LowTops.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
              )
            })

            const NikeShoesLowTopsPage = NikeShoes.map((product, index) => {
              if (product.nikeShoeStyle === "Low Top") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
      
              )
              }
              
              })
  
              const AdidasShoesLowTopsPage = AdidasShoes.map((product, index) => {
                if (product.adidasShoeStyle === "Low Top") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
        
                )
                }
                
                })
  
                  const PumaShoesLowTopsPage = PumaShoes.map((product, index) => {
                    if (product.pumaShoeStyle === "Low Top") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
            
                    )
                    }
                    
                    })
  
                    const ReebokShoesLowTopsPage = ReebokShoes.map((product, index) => {
                      if (product.reebokShoeStyle === "Low Top") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
              
                      )
                      }
                      
                      })


            const LowTopsPageLocation = LowTops.map((product, index) => {
              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
              }
              })

              const NikeShoesLowTopsPageLocation = NikeShoes.map((product, index) => {
                if (product.nikeShoeStyle === "Low Top" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
            
                )
                }
                
                })
    
                const AdidasShoesLowTopsPageLocation = AdidasShoes.map((product, index) => {
                  if (product.adidasShoeStyle === "Low Top" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
              
                  )
                  }
                  
                  })
    
    
                    const PumaShoesLowTopsPageLocation = PumaShoes.map((product, index) => {
                      if (product.pumaShoeStyle === "Low Top" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                  
                      )
                      }
                      
                      })
    
                      const ReebokShoesLowTopsPageLocation = ReebokShoes.map((product, index) => {
                        if (product.reebokShoeStyle === "Low Top" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                    
                        )
                        }
                        
                        })
    

              const TrainerPage = Trainer.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                  )
                })

                const NikeShoesTrainerPage = NikeShoes.map((product, index) => {
                  if (product.nikeShoeStyle === "Trainers") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
          
                  )
                  }
                  
                  })
      
                  const AdidasShoesTrainerPage = AdidasShoes.map((product, index) => {
                    if (product.adidasShoeStyle === "Trainers") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
            
                    )
                    }
                    
                    })

      
                      const PumaShoesTrainerPage = PumaShoes.map((product, index) => {
                        if (product.pumaShoeStyle === "Trainers") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                
                        )
                        }
                        
                        })
      
                        const ReebokShoesTrainerPage = ReebokShoes.map((product, index) => {
                          if (product.reebokShoeStyle === "Trainers") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                  
                          )
                          }
                          
                          })
      

        
                const TrainerPageLocation = Trainer.map((product, index) => {
                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
              
                    )
                  }
                  })

                  const NikeShoesTrainerPageLocation = NikeShoes.map((product, index) => {
                    if (product.nikeShoeStyle === "Trainer" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                
                    )
                    }
                    
                    })
        
                    const AdidasShoesTrainerPageLocation = AdidasShoes.map((product, index) => {
                      if (product.adidasShoeStyle === "Trainer" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                  
                      )
                      }
                      
                      })

        
                        const PumaShoesTrainerPageLocation = PumaShoes.map((product, index) => {
                          if (product.pumaShoeStyle === "Trainer" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                      
                          )
                          }
                          
                          })
        
                          const ReebokShoesTrainerPageLocation = ReebokShoes.map((product, index) => {
                            if (product.reebokShoeStyle === "Trainer" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                        
                            )
                            }
                            
                            })
      


                  const SlipOnPage = SlipOn.map((product, index) => {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                      )
                    })

                    const NikeShoesSlipOnPage = NikeShoes.map((product, index) => {
                      if (product.nikeShoeStyle === "Slip On") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
              
                      )
                      }
                      
                      })
          
                      const AdidasShoesSlipOnPage = AdidasShoes.map((product, index) => {
                        if (product.adidasShoeStyle === "Slip On") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                
                        )
                        }
                        
                        })
          
                          const PumaShoesSlipOnPage = PumaShoes.map((product, index) => {
                            if (product.pumaShoeStyle === "Slip On") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                    
                            )
                            }
                            
                            })
          
                            const ReebokShoesSlipOnPage = ReebokShoes.map((product, index) => {
                              if (product.reebokShoeStyle === "Slip On") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                      
                              )
                              }
                              
                              })
          
                              
            
                    const SlipOnPageLocation = SlipOn.map((product, index) => {
                      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                  
                        )
                      }
                      })

                      const NikeShoesSlipOnPageLocation = NikeShoes.map((product, index) => {
                        if (product.nikeShoeStyle === "Slip On" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                    
                        )
                        }
                        
                        })
            
                        const AdidasShoesSlipOnPageLocation = AdidasShoes.map((product, index) => {
                          if (product.adidasShoeStyle === "Slip On" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                      
                          )
                          }
                          
                          })
            
                            const PumaShoesSlipOnPageLocation = PumaShoes.map((product, index) => {
                              if (product.pumaShoeStyle === "Slip On" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                          
                              )
                              }
                              
                              })
            
                              const ReebokShoesSlipOnPageLocation = ReebokShoes.map((product, index) => {
                                if (product.reebokShoeStyle === "Slip On" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true))) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                            
                                )
                                }
                                
                                })

                                const DesignerShoesPage = DesignerShoes.map((product, index) => {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                          
                                  )
                                  
                                  })

                                  const DesignerShoesPageLocation = DesignerShoes.map((product, index) => {
                                    if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                                
                                      )
                                    }
                                    })

                                const NewBalanceShoesPage = NewBalanceShoes.map((product, index) => {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                          
                                  )
                                  
                                  })

                                  const NewBalanceShoesPageLocation = NewBalanceShoes.map((product, index) => {
                                    if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                                
                                      )
                                    }
                                    })

                                    const AsicsShoesPage = AsicsShoes.map((product, index) => {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                              
                                      )
                                      })

                                      const AsicsShoesPageLocation = AsicsShoes.map((product, index) => {
                                        if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
                                    
                                          )
                                        }
                                        })
                
                                      const SteveMaddenShoesPage = SteveMaddenShoes.map((product, index) => {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                
                                        )
                                        
                                        })

                                        const SteveMaddenShoesPageLocation = SteveMaddenShoes.map((product, index) => {
                                          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                            )
                                          }
                                          })

                                    const SkechersShoesPage = SkechersShoes.map((product, index) => {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                                        )
                                      })
                              
                                      const SkechersShoesPageLocation = SkechersShoes.map((product, index) => {
                                        if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
                                    
                                          )
                                        }
                                        })

                      const LoafersPage = Loafers.map((product, index) => {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                          )
                        })
                
                        const LoafersPageLocation = Loafers.map((product, index) => {
                          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                      
                            )
                          }
                          })

                          const BoatShoesPage = BoatShoes.map((product, index) => {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                              )
                            })
                    
                            const BoatShoesPageLocation = BoatShoes.map((product, index) => {
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
      <span className='Category_selectTabs_span'>Sneakers</span>
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
  onClick={()=> {ToggleSelectTabs(1); ShoeTypeCategory(0)}}
  ><div>
    <img src="https://www.cleevs.com/cdn/shop/products/product-image-1908242254.jpg?v=1644095497&width=1445"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Shoes</span>
  </div>
    
   </div>

   <div className={SelectTabs ===2 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(2); ShoeTypeCategory(0); GetNikeShoes()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/71aqRovrexL._AC_UY1000_.jpg"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Nike</span>
  </div>
    
   </div>

   <div className={SelectTabs ===3 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(3); ShoeTypeCategory(0); GetAdidasShoes()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/8157VJjXFiL._AC_UY1000_.jpg"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Adidas</span>
  </div>
   </div>

   <div className={SelectTabs ===6 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(6); ShoeTypeCategory(0); GetReebokShoes()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/715x-iU0HzL._AC_UY1000_.jpg"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Reebok</span>
  </div>
   </div>

   <div className={SelectTabs ===5 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(5); ShoeTypeCategory(0); GetPumaShoes()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/51Q+UbNKbdL._AC_UY1000_.jpg'
    // src="https://images.stylight.net/image/upload/e_trim/t_web_product_330x440max_nobg/q_auto:eco,f_auto/x6nwvcvrz43xi2srxn0c.jpg"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Puma</span>
  </div>
   </div>

   <div className={SelectTabs ===4 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(4); ShoeTypeCategory(); GetNewBalanceShoes()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/71afIMhjDBL._AC_255_.jpg"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>New Balance</span>
  </div>
   </div>

   <div className={SelectTabs ===7 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(7); ShoeTypeCategory(); GetAsicsShoes()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/51DGk772hfL._AC_UY780_.jpg"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Asics</span>
  </div>
   </div>

   <div className={SelectTabs ===8 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(8); ShoeTypeCategory(); GetSteveMaddenShoes()}}
  ><div>
    <img 
    src="https://m.media-amazon.com/images/I/71YmxMf0CCL._AC_UY1000_.jpg"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Steve Madden</span>
  </div>
   </div>

   <div className={SelectTabs ===9 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(9); ShoeTypeCategory(); GetSkechersShoes()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/81maij+kVhL._AC_UY1000_.jpg"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Skechers</span>
  </div>
   </div>

   <div className={SelectTabs ===12 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(12); ShoeTypeCategory(); GetDesignerShoes()}}
  ><div>
    <img src="https://pbs.twimg.com/media/F6fxRmAW4AkvDud?format=jpg&name=large"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Designer Shoes</span>
  </div>
   </div>

   <div className="Select_image_product"
  >
    <a href='/sneakers-collections'>
      <div>
    <img src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F06%2Fadidas-nike-sue-lawsuit-patent-infringement-snkrs-app-info-0.jpeg?w=960&cbr=1&q=90&fit=max"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Adidas & Nike</span>
  </div>
    </a>
    

   </div>

   <div className="Select_image_product"
  >
    <a href='/explore-sneakers'>
      <div>
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7CCEZfmNCKggvkfqT_oKQC69VjUHl5rWZLg&usqp=CAU"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Popular Shoes</span>
  </div>
    </a>
    

   </div>

   {/* <div className={SelectTabs ===10 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(10); GetLoafers(); ShoeTypeCategory(0)}}
  ><div>
    <img src="https://stylesatlife.com/wp-content/uploads/2018/06/Men%E2%80%99s-Mesh-Loafers-and-Moccasin.jpg"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Loafers</span>
  </div>
   </div>

   <div className={SelectTabs ===11 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(11); GetBoatShoes(); ShoeTypeCategory(0)}}
  ><div>
    <img src="https://www.rancourtandcompany.com/cdn/shop/products/6024-03_front.jpg?v=1606079857"
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Boat Shoes</span>
  </div>
   </div> */}

</Carousel>

    </div>

    <div className={SelectTabs ===1 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Style</span>
    </div>
    </div>
    <div className={SelectTabs ===1 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={toggleShoeType ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ShoeTypeCategory(0)}} >
            <span>Hi Tops</span>
          </div>
    <div className={toggleShoeType ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ShoeTypeCategory(1); GetLowTops()}} >
            <span>Low Tops</span>
          </div>
    <div className={toggleShoeType ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ShoeTypeCategory(2); GetTrainer()}} >
            <span>Trainers</span>
          </div>
    <div className={toggleShoeType ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ShoeTypeCategory(3); GetSlipOn()}} >
            <span>Slip-On lows</span>
          </div>

    </div>

    <div className={SelectTabs ===2 || SelectTabs ===3 || SelectTabs ===5 || SelectTabs ===6 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Style</span>
    </div>
    </div>
    <div className={SelectTabs ===2 || SelectTabs ===3 || SelectTabs ===5 || SelectTabs ===6 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={toggleShoeType ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ShoeTypeCategory(0)}} >
            <span>Hi Tops</span>
          </div>
    <div className={toggleShoeType ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ShoeTypeCategory(1)}} >
            <span>Low Tops</span>
          </div>
    <div className={toggleShoeType ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ShoeTypeCategory(2)}} >
            <span>Trainers</span>
          </div>
    <div className={toggleShoeType ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ShoeTypeCategory(3)}} >
            <span>Slip-On lows</span>
          </div>

    </div>

    </div>
  </div>

  {/* <div className='My_location_items_options_box'>
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

    <div className='My_location_items_price_box'>
      <div style={{ display: 'flex'}}>
      <div 
    className={toggleGender === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {GenderCategory(1)}}>
      <span>All</span>
    </div>
    <div 
    className={toggleGender === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {GenderCategory(2)}}>
      <span>Ladies</span>
    </div>
      </div>

    </div>

  </div> */}
    <div className='My_location_items_only'>
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

<div className='ListedItems_container'>

{/* High Tops */}
{HiTop && HiTop.length === undefined ?
  <></>
  :
  HiTop && HiTop.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleShoeType ===0 ?
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
<div className={SelectTabs === 1 && ToggleLocation === false && toggleShoeType ===0 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {HiTopPage}
</div>
}

{LowTops && LowTops.length === undefined ?
  <></>
  :
  LowTops && LowTops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleShoeType ===1 ?
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
<div className={SelectTabs === 1 && ToggleLocation === false && toggleShoeType ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LowTopsPage}
</div>
}

{/* Trainers */}
{Trainer && Trainer.length === undefined ?
  <></>
  :
  Trainer && Trainer.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleShoeType ===2 ?
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
<div className={SelectTabs === 1 && ToggleLocation === false && toggleShoeType ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {TrainerPage}
</div>
}

{/* Slip-On */}
{SlipOn && SlipOn.length === undefined ?
  <></>
  :
  SlipOn && SlipOn.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleShoeType ===3 ?
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
<div className={SelectTabs === 1 && ToggleLocation === false && toggleShoeType ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {SlipOnPage}
</div>
}


{/* Nike High Tops */}
{NikeShoes && NikeShoes.length === undefined ?
  <></>
  :
  NikeShoes && NikeShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false && toggleShoeType ===0 ?
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
<div className={SelectTabs === 2 && ToggleLocation === false && toggleShoeType ===0 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {NikeShoesHiTopPage}
</div>
}

{/* Nike Low Tops */}
{NikeShoes && NikeShoes.length === undefined ?
  <></>
  :
  NikeShoes && NikeShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false && toggleShoeType ===1 ?
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
<div className={SelectTabs === 2 && ToggleLocation === false && toggleShoeType ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {NikeShoesLowTopsPage}
</div>
}

{/* Nike Trainers */}
{NikeShoes && NikeShoes.length === undefined ?
  <></>
  :
  NikeShoes && NikeShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false && toggleShoeType ===2 ?
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
<div className={SelectTabs === 2 && ToggleLocation === false && toggleShoeType ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {NikeShoesTrainerPage}
</div>
}

{/* Nike Slip-On */}
{NikeShoes && NikeShoes.length === undefined ?
  <></>
  :
  NikeShoes && NikeShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false && toggleShoeType ===3 ?
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
<div className={SelectTabs === 2 && ToggleLocation === false && toggleShoeType ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {NikeShoesSlipOnPage}
</div>
}

{/* Adidas High Tops */}
{AdidasShoes && AdidasShoes.length === undefined ?
  <></>
  :
  AdidasShoes && AdidasShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === false && toggleShoeType ===0 ?
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
<div className={SelectTabs === 3 && ToggleLocation === false && toggleShoeType ===0 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {AdidasShoesHiTopPage}
</div>
}

{/* Adidas Low Tops */}
{AdidasShoes && AdidasShoes.length === undefined ?
  <></>
  :
  AdidasShoes && AdidasShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === false && toggleShoeType ===1 ?
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
<div className={SelectTabs === 3 && ToggleLocation === false && toggleShoeType ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {AdidasShoesLowTopsPage}
</div>
}

{/* Adidas Trainers */}
{AdidasShoes && AdidasShoes.length === undefined ?
  <></>
  :
  AdidasShoes && AdidasShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === false && toggleShoeType ===2 ?
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
<div className={SelectTabs === 3 && ToggleLocation === false && toggleShoeType ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {AdidasShoesTrainerPage}
</div>
}

{/* Adidas Slip-On */}
{AdidasShoes && AdidasShoes.length === undefined ?
  <></>
  :
  AdidasShoes && AdidasShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === false && toggleShoeType ===3 ?
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
<div className={SelectTabs === 3 && ToggleLocation === false && toggleShoeType ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {AdidasShoesSlipOnPage}
</div>
}

{/* NewBalance */}
{NewBalanceShoes && NewBalanceShoes.length === undefined ?
  <></>
  :
  NewBalanceShoes && NewBalanceShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 4 && ToggleLocation === false ?
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
<div className={SelectTabs === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {NewBalanceShoesPage}
</div>
}


{/* Puma High Tops */}
{PumaShoes && PumaShoes.length === undefined ?
  <></>
  :
  PumaShoes && PumaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === false && toggleShoeType ===0 ?
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
<div className={SelectTabs === 5 && ToggleLocation === false && toggleShoeType ===0 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {PumaShoesHiTopPage}
</div>
}

{/* Puma Low Tops */}
{PumaShoes && PumaShoes.length === undefined ?
  <></>
  :
  PumaShoes && PumaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === false && toggleShoeType ===1 ?
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
<div className={SelectTabs === 5 && ToggleLocation === false && toggleShoeType ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {PumaShoesLowTopsPage}
</div>
}

{/* Puma Trainers */}
{PumaShoes && PumaShoes.length === undefined ?
  <></>
  :
  PumaShoes && PumaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === false && toggleShoeType ===2 ?
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
<div className={SelectTabs === 5 && ToggleLocation === false && toggleShoeType ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {PumaShoesTrainerPage}
</div>
}

{/* Puma Slip-On */}
{PumaShoes && PumaShoes.length === undefined ?
  <></>
  :
  PumaShoes && PumaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === false && toggleShoeType ===3 ?
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
<div className={SelectTabs === 5 && ToggleLocation === false && toggleShoeType ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {PumaShoesSlipOnPage}
</div>
}

{/* Reebok High Tops */}
{ReebokShoes && ReebokShoes.length === undefined ?
  <></>
  :
  ReebokShoes && ReebokShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === false && toggleShoeType ===0 ?
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
<div className={SelectTabs === 6 && ToggleLocation === false && toggleShoeType ===0 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ReebokShoesHiTopPage}
</div>
}

{/* Reebok Low Tops */}
{ReebokShoes && ReebokShoes.length === undefined ?
  <></>
  :
  ReebokShoes && ReebokShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === false && toggleShoeType ===1 ?
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
<div className={SelectTabs === 6 && ToggleLocation === false && toggleShoeType ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ReebokShoesLowTopsPage}
</div>
}

{/* Reebok Trainers */}
{ReebokShoes && ReebokShoes.length === undefined ?
  <></>
  :
  ReebokShoes && ReebokShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === false && toggleShoeType ===2 ?
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
<div className={SelectTabs === 6 && ToggleLocation === false && toggleShoeType ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ReebokShoesTrainerPage}
</div>
}

{/* Reebok Slip-On */}
{ReebokShoes && ReebokShoes.length === undefined ?
  <></>
  :
  ReebokShoes && ReebokShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === false && toggleShoeType ===3 ?
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
<div className={SelectTabs === 6 && ToggleLocation === false && toggleShoeType ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ReebokShoesSlipOnPage}
</div>
}

{/* Asics */}
{AsicsShoes && AsicsShoes.length === undefined ?
  <></>
  :
  AsicsShoes && AsicsShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 7 && ToggleLocation === false ?
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
<div className={SelectTabs === 7 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {AsicsShoesPage}
</div>
}

{/* Steve Madden */}
{SteveMaddenShoes && SteveMaddenShoes.length === undefined ?
  <></>
  :
  SteveMaddenShoes && SteveMaddenShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 8 && ToggleLocation === false ?
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
<div className={SelectTabs === 8 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {SteveMaddenShoesPage}
</div>
}

{SkechersShoes && SkechersShoes.length === undefined ?
  <></>
  :
  SkechersShoes && SkechersShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 9 && ToggleLocation === false ?
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
<div className={SelectTabs === 9 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {SkechersShoesPage}
</div>
}

{Loafers && Loafers.length === undefined ?
  <></>
  :
  Loafers && Loafers.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 10 && ToggleLocation === false ?
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
<div className={SelectTabs === 10 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LoafersPage}
</div>
}

{BoatShoes && BoatShoes.length === undefined ?
  <></>
  :
  BoatShoes && BoatShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 11 && ToggleLocation === false ?
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
<div className={SelectTabs === 11 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {BoatShoesPage}
</div>
}

{DesignerShoes && DesignerShoes.length === undefined ?
  <></>
  :
  DesignerShoes && DesignerShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 12 && ToggleLocation === false ?
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
<div className={SelectTabs === 12 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {DesignerShoesPage}
</div>
}


{/* Location */}

{/* High Tops */}
{HiTop && HiTop.length === undefined ?
  <></>
  :
  HiTop && HiTop.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleShoeType ===0 ?
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
<div className={SelectTabs === 1 && ToggleLocation === true && toggleShoeType ===0 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {HiTopPageLocation}
</div>
}

{LowTops && LowTops.length === undefined ?
  <></>
  :
  LowTops && LowTops.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleShoeType ===1 ?
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
<div className={SelectTabs === 1 && ToggleLocation === true && toggleShoeType ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LowTopsPageLocation}
</div>
}

{Trainer && Trainer.length === undefined ?
  <></>
  :
  Trainer && Trainer.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleShoeType ===2 ?
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
<div className={SelectTabs === 1 && ToggleLocation === true && toggleShoeType ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {TrainerPageLocation}
</div>
}

{SlipOn && SlipOn.length === undefined ?
  <></>
  :
  SlipOn && SlipOn.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleShoeType ===3 ?
 <div style={{
  width: '130%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center'
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
<div className={SelectTabs === 1 && ToggleLocation === true && toggleShoeType ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {SlipOnPageLocation}
</div>
}

{/* Nike High Tops */}
{NikeShoes && NikeShoes.length === undefined ?
  <></>
  :
  NikeShoes && NikeShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true && toggleShoeType ===0 ?
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
<div className={SelectTabs === 2 && ToggleLocation === true && toggleShoeType ===0 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {NikeShoesHiTopPageLocation}
</div>
}

{NikeShoes && NikeShoes.length === undefined ?
  <></>
  :
  NikeShoes && NikeShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true && toggleShoeType ===1 ?
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
<div className={SelectTabs === 2 && ToggleLocation === true && toggleShoeType ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {NikeShoesLowTopsPageLocation}
</div>
}


{NikeShoes && NikeShoes.length === undefined ?
  <></>
  :
  NikeShoes && NikeShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true && toggleShoeType ===2 ?
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
<div className={SelectTabs === 2 && ToggleLocation === true && toggleShoeType ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {NikeShoesTrainerPageLocation}
</div>
}

{NikeShoes && NikeShoes.length === undefined ?
  <></>
  :
  NikeShoes && NikeShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true && toggleShoeType ===3 ?
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
<div className={SelectTabs === 2 && ToggleLocation === true && toggleShoeType ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {NikeShoesSlipOnPageLocation}
</div>
}

{/* Adidas High Tops */}
{AdidasShoes && AdidasShoes.length === undefined ?
  <></>
  :
  AdidasShoes && AdidasShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === true && toggleShoeType ===0 ?
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
<div className={SelectTabs ===3 && ToggleLocation === true && toggleShoeType ===0 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {AdidasShoesHiTopPageLocation}
</div>
}

{AdidasShoes && AdidasShoes.length === undefined ?
  <></>
  :
  AdidasShoes && AdidasShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === true && toggleShoeType ===1 ?
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
<div className={SelectTabs === 3 && ToggleLocation === true && toggleShoeType ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {AdidasShoesLowTopsPageLocation}
</div>
}

{AdidasShoes && AdidasShoes.length === undefined ?
  <></>
  :
  AdidasShoes && AdidasShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === true && toggleShoeType ===2 ?
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
<div className={SelectTabs === 3 && ToggleLocation === true && toggleShoeType ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {AdidasShoesTrainerPageLocation}
</div>
}

{AdidasShoes && AdidasShoes.length === undefined ?
  <></>
  :
  AdidasShoes && AdidasShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === true && toggleShoeType ===3 ?
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
<div className={SelectTabs === 3 && ToggleLocation === true && toggleShoeType ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {AdidasShoesSlipOnPageLocation}
</div>
}

{/* NewBalance */}
{NewBalanceShoes && NewBalanceShoes.length === undefined ?
  <></>
  :
  NewBalanceShoes && NewBalanceShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 4 && ToggleLocation === true ?
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
<div className={SelectTabs === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {NewBalanceShoesPageLocation}
</div>
}


{/* Puma High Tops */}
{PumaShoes && PumaShoes.length === undefined ?
  <></>
  :
  PumaShoes && PumaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === true && toggleShoeType ===0 ?
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
<div className={SelectTabs === 5 && ToggleLocation === true && toggleShoeType ===0 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {PumaShoesHiTopPageLocation}
</div>
}

{PumaShoes && PumaShoes.length === undefined ?
  <></>
  :
  PumaShoes && PumaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === true && toggleShoeType ===1 ?
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
<div className={SelectTabs === 5 && ToggleLocation === true && toggleShoeType ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {PumaShoesLowTopsPageLocation}
</div>
}

{PumaShoes && PumaShoes.length === undefined ?
  <></>
  :
  PumaShoes && PumaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === true && toggleShoeType ===2 ?
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
<div className={SelectTabs === 5 && ToggleLocation === true && toggleShoeType ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {PumaShoesTrainerPageLocation}
</div>
}

{PumaShoes && PumaShoes.length === undefined ?
  <></>
  :
  PumaShoes && PumaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === true && toggleShoeType ===3 ?
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
<div className={SelectTabs === 5 && ToggleLocation === true && toggleShoeType ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {PumaShoesSlipOnPageLocation}
</div>
}

{/* Reebok High Tops */}
{ReebokShoes && ReebokShoes.length === undefined ?
  <></>
  :
  ReebokShoes && ReebokShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === true && toggleShoeType ===0 ?
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
<div className={SelectTabs === 6 && ToggleLocation === true && toggleShoeType ===0 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ReebokShoesHiTopPageLocation}
</div>
}

{ReebokShoes && ReebokShoes.length === undefined ?
  <></>
  :
  ReebokShoes && ReebokShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === true && toggleShoeType ===1 ?
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
<div className={SelectTabs === 6 && ToggleLocation === true && toggleShoeType ===1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ReebokShoesLowTopsPageLocation}
</div>
}

{ReebokShoes && ReebokShoes.length === undefined ?
  <></>
  :
  ReebokShoes && ReebokShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === true && toggleShoeType ===2 ?
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
<div className={SelectTabs === 6 && ToggleLocation === true && toggleShoeType ===2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ReebokShoesTrainerPageLocation}
</div>
}

{ReebokShoes && ReebokShoes.length === undefined ?
  <></>
  :
  ReebokShoes && ReebokShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === true && toggleShoeType ===3 ?
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
<div className={SelectTabs === 6 && ToggleLocation === true && toggleShoeType ===3 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ReebokShoesSlipOnPageLocation}
</div>
}

{/* Asics */}
{AsicsShoes && AsicsShoes.length === undefined ?
  <></>
  :
  AsicsShoes && AsicsShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 7 && ToggleLocation === true ?
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
<div className={SelectTabs === 7 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {AsicsShoesPageLocation}
</div>
}


{/* Steve Madden */}
{SteveMaddenShoes && SteveMaddenShoes.length === undefined ?
  <></>
  :
  SteveMaddenShoes && SteveMaddenShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 8 && ToggleLocation === true?
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
<div className={SelectTabs === 8 && ToggleLocation === true? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {SteveMaddenShoesPageLocation}
</div>
}


{SkechersShoes && SkechersShoes.length === undefined ?
  <></>
  :
  SkechersShoes && SkechersShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 9 && ToggleLocation === true ?
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
<div className={SelectTabs === 9 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {SkechersShoesPageLocation}
</div>
}

{Loafers && Loafers.length === undefined ?
  <></>
  :
  Loafers && Loafers.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 10 && ToggleLocation === true ?
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
<div className={SelectTabs === 10 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LoafersPageLocation}
</div>
}

{BoatShoes && BoatShoes.length === undefined ?
  <></>
  :
  BoatShoes && BoatShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 11 && ToggleLocation === true ?
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
<div className={SelectTabs === 11 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {BoatShoesPageLocation}
</div>
}

{DesignerShoes && DesignerShoes.length === undefined ?
  <></>
  :
  DesignerShoes && DesignerShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 12 && ToggleLocation === true ?
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
<div className={SelectTabs === 12 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {DesignerShoesPageLocation}
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

export default SneakersPage