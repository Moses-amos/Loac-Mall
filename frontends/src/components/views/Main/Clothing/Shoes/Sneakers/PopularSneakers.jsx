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

function PopularSneakers(props) {
  
    const [UserData, setUserData] = useState([])
    const [VansShoes, setVansShoes] = useState([])
    const [ConverseShoes, setConverseShoes] = useState([])
    const [KappaShoes, setKappaShoes] = useState([])
    const [LeCogShoes, setLeCogShoes] = useState([])
    const [LonsdaleShoes, setLonsdaleShoes] = useState([])
    const [UnderAmorShoes, setUnderAmorShoes] = useState([])
    const [MerrellShoes, setMerrellShoes] = useState([])
    const [FilaShoes, setFilaShoes] = useState([])
    const [SalomonShoes, setSalomonShoes] = useState([])

    const [toggleGender, settoggleGender] = useState(1)
    const [SelectTabs, setSelectTabs] = useState(1)
  
    const [Products, setProducts] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)
    const [IsLoading, setIsLoading] = useState(true)

    const SetLocation = () => setToggleLocation(!ToggleLocation)

    const ToggleSelectTabs = (index) => {
        setSelectTabs(index);
      } 
      
    const GenderCategory = (index) => {
        settoggleGender(index);
      }

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
          product: "Converse Sneakers"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
        setConverseShoes(response.data.products)
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

  const GetVansShoes = () => {
      const variable = {
          product: "Vans Sneakers"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
        setVansShoes(response.data.products)
      } else {
      }
      })
  }
  
  const GetKappaShoes = () => {
    const variable = {
        product: "Kappa Sneakers"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setKappaShoes(response.data.products)
    } else {
    }
    })
  }
  
  const GetLeCogShoes = () => {
    const variable = {
        product: "Le Cog Sneakers"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setLeCogShoes(response.data.products)
    } else {
    }
    })
  }
  
  const GetLonsdaleShoes = () => {
    const variable = {
        product: "Lonsdale Sneakers"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setLonsdaleShoes(response.data.products)
    } else {
    }
    })
  }
  
  const GetUnderArmorShoes = () => {
  const variable = {
      product: "Under Armor Sneakers"
    }
  
  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setUnderAmorShoes(response.data.products)
  } else {
  }
  })
  }
  
  const GetMerrellShoes = () => {
    const variable = {
        product: "Merrell Sneakers"
      }
    
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setMerrellShoes(response.data.products)
    } else {
    }
    })
  }

  const GetFilaShoes = () => {
    const variable = {
        product: "Fila Sneakers"
      }
    
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setFilaShoes(response.data.products)
    } else {
    }
    })
  }

  const GetSalomonShoes = () => {
    const variable = {
        product: "Salomon Sneakers"
      }
    
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setSalomonShoes(response.data.products)
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

      const VansShoesPage = VansShoes.map((product, index) => {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
          )
        })

        const ConverseShoesPage = ConverseShoes.map((product, index) => {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
            )
          })

          const KappaShoesPage = KappaShoes.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
              )
            })

            const LeCogShoesPage = LeCogShoes.map((product, index) => {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
                )
              })

              const LonsdaleShoesPage = LonsdaleShoes.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                  )
                })

                const UnderAmorShoesPage = UnderAmorShoes.map((product, index) => {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
                    )
                  })

                  const MerrellShoesPage = MerrellShoes.map((product, index) => {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                      )
                    })

                    const FilaShoesPage = FilaShoes.map((product, index) => {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                        )
                      })

                      const SalomonShoesPage = SalomonShoes.map((product, index) => {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                          )
                        })


                      const ConverseShoesPageLocation = ConverseShoes.map((product, index) => {
                        if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                    
                          )
                        }
                        })

                        const VansShoesPageLocation = VansShoes.map((product, index) => {
                          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                      
                            )
                          }
                          })

                          const KappaShoesPageLocation = KappaShoes.map((product, index) => {
                            if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                        
                              )
                            }
                            })

                            const LeCogShoesPageLocation = LeCogShoes.map((product, index) => {
                              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                          
                                )
                              }
                              })

                              const LonsdaleShoesPageLocation = LonsdaleShoes.map((product, index) => {
                                if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                  return (
                                    <ProductCart key={index} UserData={UserData} product={product} />
                            
                                  )
                                }
                                })

                                const UnderAmorShoesPageLocation = UnderAmorShoes.map((product, index) => {
                                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                              
                                    )
                                  }
                                  })

                                  const MerrellShoesPageLocation = MerrellShoes.map((product, index) => {
                                    if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                      return (
                                        <ProductCart key={index} UserData={UserData} product={product} />
                                
                                      )
                                    }
                                    })

                                    const FilaShoesPageLocation = FilaShoes.map((product, index) => {
                                      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                  
                                        )
                                      }
                                      })

                                      const SalomonShoesPageLocation = SalomonShoes.map((product, index) => {
                                        if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
                                    
                                          )
                                        }
                                        })

                                      const ConverseShoesPageWomens = ConverseShoes.map((product, index) => {
                                        if (product.genderCategory === "Women") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                        )
                                        }
                                        
                                        })
                                      
                                        const ConverseShoesPageWomensLocation = ConverseShoes.map((product, index) => {
                                          if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                          )
                                          }
                                          })


                                      const VansShoesPageWomens = VansShoes.map((product, index) => {
                                        if (product.genderCategory === "Women") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                        )
                                        }
                                        
                                        })
                                      
                                        const VansShoesPageWomensLocation = VansShoes.map((product, index) => {
                                          if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                           && product.Gobabis === true))) {
                                          return (
                                            <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                          )
                                          }
                                          })
                                      
                                      
                                          const KappaShoesPageWomens = KappaShoes.map((product, index) => {
                                            if (product.genderCategory === "Women") {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
                                          
                                            )
                                            }
                                            
                                            })
                                          
                                            const KappaShoesPageWomensLocation = KappaShoes.map((product, index) => {
                                              if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                               && product.Gobabis === true))) {
                                              return (
                                                <ProductCart key={index} UserData={UserData} product={product} />
                                          
                                              )
                                              }
                                              })
                                      
                                      
                                              const LeCogShoesPageWomens = LeCogShoes.map((product, index) => {
                                                if (product.genderCategory === "Women") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                              
                                                )
                                                }
                                                
                                                })
                                              
                                                const LeCogShoesPageWomensLocation = LeCogShoes.map((product, index) => {
                                                  if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                   && product.Gobabis === true))) {
                                                  return (
                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                              
                                                  )
                                                  }
                                                  })
                                      
                                      
                                                  const LonsdaleShoesPageWomens = LonsdaleShoes.map((product, index) => {
                                                    if (product.genderCategory === "Women") {
                                                    return (
                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                  
                                                    )
                                                    }
                                                    
                                                    })
                                                  
                                                    const LonsdaleShoesPageWomensLocation = LonsdaleShoes.map((product, index) => {
                                                      if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                       && product.Gobabis === true))) {
                                                      return (
                                                        <ProductCart key={index} UserData={UserData} product={product} />
                                                  
                                                      )
                                                      }
                                                      })
                                      
                                      
                                                      const UnderAmorShoesPageWomens = UnderAmorShoes.map((product, index) => {
                                                        if (product.genderCategory === "Women") {
                                                        return (
                                                          <ProductCart key={index} UserData={UserData} product={product} />
                                                      
                                                        )
                                                        }
                                                        
                                                        })
                                                      
                                                        const UnderAmorShoesPageWomensLocation = UnderAmorShoes.map((product, index) => {
                                                          if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                           && product.Gobabis === true))) {
                                                          return (
                                                            <ProductCart key={index} UserData={UserData} product={product} />
                                                      
                                                          )
                                                          }
                                                          })
                                      
                                      
                                                          const MerrellShoesPageWomens = MerrellShoes.map((product, index) => {
                                                            if (product.genderCategory === "Women") {
                                                            return (
                                                              <ProductCart key={index} UserData={UserData} product={product} />
                                                          
                                                            )
                                                            }
                                                            
                                                            })
                                                          
                                                            const MerrellShoesPageWomensLocation = MerrellShoes.map((product, index) => {
                                                              if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                               && product.Gobabis === true))) {
                                                              return (
                                                                <ProductCart key={index} UserData={UserData} product={product} />
                                                          
                                                              )
                                                              }
                                                              })
                                      
                                                              const FilaShoesPageWomens = FilaShoes.map((product, index) => {
                                                                if (product.genderCategory === "Women") {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                )
                                                                }
                                                                
                                                                })
                                                              
                                                                const FilaShoesPageWomensLocation = FilaShoes.map((product, index) => {
                                                                  if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                                                   && product.Gobabis === true))) {
                                                                  return (
                                                                    <ProductCart key={index} UserData={UserData} product={product} />
                                                              
                                                                  )
                                                                  }
                                                                  })


                                                                  const SalomonShoesPageWomens = SalomonShoes.map((product, index) => {
                                                                    if (product.genderCategory === "Women") {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                                  
                                                                    )
                                                                    }
                                                                    
                                                                    })
                                                                  
                                                                    const SalomonShoesPageWomensLocation = SalomonShoes.map((product, index) => {
                                                                      if (product.genderCategory === "Women" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
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
  <div className='Back_to_main_box'>
      <a href='/sneakers'>
      <div className='Back_to_main_content_box'>
        <span>Sneakers</span>
      </div>
      </a>
      
    </div>
    <div className='Category_selectTabs_box_back_to_main'>
    <div>
      <span className='Category_selectTabs_span'>Popular Brands</span>
    </div>


    <div className='Select_tabs_slider'>
    {/* <Carousel className='Carosal_style_images' 
    responsive={responsive}
    partialVisible={true}
    swipeable={true}
    draggable={true}
    minimumTouchDrag={50}
    deviceType={props.deviceType}
    >
  <div className={SelectTabs ===1 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(1); GenderCategory(1)}}
  ><div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/800px-Converse_logo.svg.png"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Converse</span>
  </div>
    
   </div>

   <div className={SelectTabs ===2 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(2); GenderCategory(1); GetVansShoes()}}
  ><div>
    <img src="data:image/png;base64,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"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Vans</span>
  </div>
    
   </div>

   <div className={SelectTabs ===3 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(3); GenderCategory(1); GetKappaShoes()}}
  ><div>
    <img src="https://logos-world.net/wp-content/uploads/2020/12/Kappa-Logo-1994-present.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Kappa</span>
  </div>
   </div>

   <div className={SelectTabs ===9 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(9); GenderCategory(1); GetFilaShoes()}}
  ><div>
    <img src="https://logos-world.net/wp-content/uploads/2020/09/Fila-Logo.png"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Fila</span>
  </div>
   </div>

   <div className={SelectTabs ===8 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(8); GenderCategory(1); GetSalomonShoes()}}
  ><div>
    <img src="https://1000logos.net/wp-content/uploads/2020/09/Salomon-Logo-1947.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Salomon</span>
  </div>
   </div>

   <div className={SelectTabs ===4 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(4); GenderCategory(1); GetLeCogShoes()}}
  ><div>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Le_coq_sportif_logo16.svg/1200px-Le_coq_sportif_logo16.svg.png"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Le Cog</span>
  </div>
   </div>

   <div className={SelectTabs ===5 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(5); GenderCategory(1); GetLonsdaleShoes()}}
  ><div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Lonsdale-Logo.svg/2560px-Lonsdale-Logo.svg.png"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Lonsdale</span>
  </div>
   </div>

   <div className={SelectTabs ===6 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(6); GenderCategory(1); GetUnderArmorShoes()}}
  ><div>
    <img src="https://1000logos.net/wp-content/uploads/2021/04/Under-Armour-logo.png"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Under Armor</span>
  </div>
   </div>

   <div className={SelectTabs ===7 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(7); GenderCategory(1); GetMerrellShoes()}}
  ><div>
    <img src="https://mma.prnewswire.com/media/1472313/Merrell_Logo.jpg?p=facebook"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Merrell</span>
  </div>
   </div>

</Carousel> */}
    <Carousel className='Carosal_style_images' 
    responsive={responsive}
    partialVisible={true}
    swipeable={true}
    draggable={true}
    minimumTouchDrag={50}
    deviceType={props.deviceType}
    >
  <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(1); GenderCategory(1)}}
  ><div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Converse_logo.svg/800px-Converse_logo.svg.png"
    className={SelectTabs ===1 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Converse</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(2); GenderCategory(1); GetVansShoes()}}
  ><div>
    <img src="https://i.imgur.com/hhDqZxx.png"
    className={SelectTabs ===2 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Vans</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(3); GenderCategory(1); GetKappaShoes()}}
  ><div>
    <img src="https://i.imgur.com/wWkKxX7.png"
    className={SelectTabs ===3 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Kappa</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(9); GenderCategory(1); GetFilaShoes()}}
  ><div>
    <img src="https://logos-world.net/wp-content/uploads/2020/09/Fila-Logo.png"
    className={SelectTabs ===9 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Fila</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(8); GenderCategory(1); GetSalomonShoes()}}
  ><div>
    <img src="https://i.imgur.com/4kKMiCY.png"
    className={SelectTabs ===8 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Salomon</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(4); GenderCategory(1); GetLeCogShoes()}}
  ><div>
    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/e9/Le_coq_sportif_logo16.svg/1200px-Le_coq_sportif_logo16.svg.png"
    className={SelectTabs ===4 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Le Cog</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(5); GenderCategory(1); GetLonsdaleShoes()}}
  ><div>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Lonsdale-Logo.svg/2560px-Lonsdale-Logo.svg.png"
    className={SelectTabs ===5 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Lonsdale</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(6); GenderCategory(1); GetUnderArmorShoes()}}
  ><div>
    <img src="https://1000logos.net/wp-content/uploads/2021/04/Under-Armour-logo.png"
    className={SelectTabs ===6 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Under Armor</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(7); GenderCategory(1); GetMerrellShoes()}}
  ><div>
    <img src="https://i.imgur.com/ANCC3bJ.png"
    className={SelectTabs ===7 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Merrell</span>
  </div>
   </div>

</Carousel>

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

  </div>

<div className='ListedItems_container'>

{/* Converse Shoes */}
{ConverseShoes && ConverseShoes.length === undefined ?
  <></>
  :
  ConverseShoes && ConverseShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === false && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ConverseShoesPage}
</div>
}

{VansShoes && VansShoes.length === undefined ?
  <></>
  :
  VansShoes && VansShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 2 && ToggleLocation === false && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {VansShoesPage}
</div>
}

{KappaShoes && KappaShoes.length === undefined ?
  <></>
  :
  KappaShoes && KappaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === false && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 3 && ToggleLocation === false && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {KappaShoesPage}
</div>
}

{LeCogShoes && LeCogShoes.length === undefined ?
  <></>
  :
  LeCogShoes && LeCogShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 4 && ToggleLocation === false && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 4 && ToggleLocation === false && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LeCogShoesPage}
</div>
}

{LonsdaleShoes && LonsdaleShoes.length === undefined ?
  <></>
  :
  LonsdaleShoes && LonsdaleShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === false && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 5 && ToggleLocation === false && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LonsdaleShoesPage}
</div>
}

{UnderAmorShoes && UnderAmorShoes.length === undefined ?
  <></>
  :
  UnderAmorShoes && UnderAmorShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === false && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === false && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {UnderAmorShoesPage}
</div>
}

{MerrellShoes && MerrellShoes.length === undefined ?
  <></>
  :
  MerrellShoes && MerrellShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 7 && ToggleLocation === false && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 7 && ToggleLocation === false && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {MerrellShoesPage}
</div>
}


{SalomonShoes && SalomonShoes.length === undefined ?
  <></>
  :
  SalomonShoes && SalomonShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 8 && ToggleLocation === false && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 8 && ToggleLocation === false && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {SalomonShoesPage}
</div>
}


{FilaShoes && FilaShoes.length === undefined ?
  <></>
  :
  FilaShoes && FilaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 9 && ToggleLocation === false && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 9 && ToggleLocation === false && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {FilaShoesPage}
</div>
}


{/* loaction */}
{ConverseShoes && ConverseShoes.length === undefined ?
  <></>
  :
  ConverseShoes && ConverseShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === true && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ConverseShoesPageLocation}
</div>
}

{VansShoes && VansShoes.length === undefined ?
  <></>
  :
  VansShoes && VansShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 2 && ToggleLocation === true && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {VansShoesPageLocation}
</div>
}

{KappaShoes && KappaShoes.length === undefined ?
  <></>
  :
  KappaShoes && KappaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === true && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 3 && ToggleLocation === true && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {KappaShoesPageLocation}
</div>
}

{LeCogShoes && LeCogShoes.length === undefined ?
  <></>
  :
  LeCogShoes && LeCogShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 4 && ToggleLocation === true && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 4 && ToggleLocation === true && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LeCogShoesPageLocation}
</div>
}

{LonsdaleShoes && LonsdaleShoes.length === undefined ?
  <></>
  :
  LonsdaleShoes && LonsdaleShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === true && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 5 && ToggleLocation === true && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LonsdaleShoesPageLocation}
</div>
}

{UnderAmorShoes && UnderAmorShoes.length === undefined ?
  <></>
  :
  UnderAmorShoes && UnderAmorShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === true && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === true && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {UnderAmorShoesPageLocation}
</div>
}


{MerrellShoes && MerrellShoes.length === undefined ?
  <></>
  :
  MerrellShoes && MerrellShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 7 && ToggleLocation === true && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 7 && ToggleLocation === true && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {MerrellShoesPageLocation}
</div>
}

{SalomonShoes && SalomonShoes.length === undefined ?
  <></>
  :
  SalomonShoes && SalomonShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 8 && ToggleLocation === true && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 8 && ToggleLocation === true && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {SalomonShoesPageLocation}
</div>
}

{FilaShoes && FilaShoes.length === undefined ?
  <></>
  :
  FilaShoes && FilaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 9 && ToggleLocation === true && toggleGender === 1 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 9 && ToggleLocation === true && toggleGender === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {FilaShoesPageLocation}
</div>
}





{/* Womens Shoes */}
{ConverseShoes && ConverseShoes.length === undefined ?
  <></>
  :
  ConverseShoes && ConverseShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === false && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ConverseShoesPageWomens}
</div>
}

{VansShoes && VansShoes.length === undefined ?
  <></>
  :
  VansShoes && VansShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 2 && ToggleLocation === false && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {VansShoesPageWomens}
</div>
}

{KappaShoes && KappaShoes.length === undefined ?
  <></>
  :
  KappaShoes && KappaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === false && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 3 && ToggleLocation === false && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {KappaShoesPageWomens}
</div>
}

{LeCogShoes && LeCogShoes.length === undefined ?
  <></>
  :
  LeCogShoes && LeCogShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 4 && ToggleLocation === false && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 4 && ToggleLocation === false && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LeCogShoesPageWomens}
</div>
}

{LonsdaleShoes && LonsdaleShoes.length === undefined ?
  <></>
  :
  LonsdaleShoes && LonsdaleShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === false && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 5 && ToggleLocation === false && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LonsdaleShoesPageWomens}
</div>
}

{UnderAmorShoes && UnderAmorShoes.length === undefined ?
  <></>
  :
  UnderAmorShoes && UnderAmorShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === false && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === false && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {UnderAmorShoesPageWomens}
</div>
}

{MerrellShoes && MerrellShoes.length === undefined ?
  <></>
  :
  MerrellShoes && MerrellShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 7 && ToggleLocation === false && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 7 && ToggleLocation === false && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {MerrellShoesPageWomens}
</div>
}

{SalomonShoes && SalomonShoes.length === undefined ?
  <></>
  :
  SalomonShoes && SalomonShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 8 && ToggleLocation === false && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 8 && ToggleLocation === false && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {SalomonShoesPageWomens}
</div>
}

{FilaShoes && FilaShoes.length === undefined ?
  <></>
  :
  FilaShoes && FilaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 9 && ToggleLocation === false && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 9 && ToggleLocation === false && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {FilaShoesPageWomens}
</div>
}



{/* loaction */}
{ConverseShoes && ConverseShoes.length === undefined ?
  <></>
  :
  ConverseShoes && ConverseShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === true && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {ConverseShoesPageWomensLocation}
</div>
}

{VansShoes && VansShoes.length === undefined ?
  <></>
  :
  VansShoes && VansShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 2 && ToggleLocation === true && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {VansShoesPageWomensLocation}
</div>
}

{KappaShoes && KappaShoes.length === undefined ?
  <></>
  :
  KappaShoes && KappaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === true && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 3 && ToggleLocation === true && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {KappaShoesPageWomensLocation}
</div>
}

{LeCogShoes && LeCogShoes.length === undefined ?
  <></>
  :
  LeCogShoes && LeCogShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 4 && ToggleLocation === true && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 4 && ToggleLocation === true && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LeCogShoesPageWomensLocation}
</div>
}

{LonsdaleShoes && LonsdaleShoes.length === undefined ?
  <></>
  :
  LonsdaleShoes && LonsdaleShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === true && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 5 && ToggleLocation === true && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {LonsdaleShoesPageWomensLocation}
</div>
}

{UnderAmorShoes && UnderAmorShoes.length === undefined ?
  <></>
  :
  UnderAmorShoes && UnderAmorShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === true && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === true && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {UnderAmorShoesPageWomensLocation}
</div>
}


{MerrellShoes && MerrellShoes.length === undefined ?
  <></>
  :
  MerrellShoes && MerrellShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 7 && ToggleLocation === true && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 7 && ToggleLocation === true && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {MerrellShoesPageWomensLocation}
</div>
}

{SalomonShoes && SalomonShoes.length === undefined ?
  <></>
  :
  SalomonShoes && SalomonShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 8 && ToggleLocation === true && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 8 && ToggleLocation === true && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {SalomonShoesPageWomensLocation}
</div>
}

{FilaShoes && FilaShoes.length === undefined ?
  <></>
  :
  FilaShoes && FilaShoes.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 9 && ToggleLocation === true && toggleGender === 2 ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 9 && ToggleLocation === true && toggleGender === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {FilaShoesPageWomensLocation}
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

export default PopularSneakers