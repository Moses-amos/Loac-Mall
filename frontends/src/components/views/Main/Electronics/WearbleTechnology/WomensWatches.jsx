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

function WomensWatches(props) {

    const [UserData, setUserData] = useState([])
    const [TempoWatches, setTempoWatches] = useState([])
    const [FossilWatches, setFossilWatches] = useState([])
    const [DanielKleinWatches, setDanielKleinWatches] = useState([])
    const [GuessWatches, setGuessWatches] = useState([])
    const [SkagenWatches, setSkagenWatches] = useState([])
    const [SteveMaddenWatches, setSteveMaddenWatches] = useState([])
    const [DKNYWatches, setDKNYWatches] = useState([])
    const [NineWestWatches, setNineWestWatches] = useState([])
    const [AnneKleinWatches, setAnneKleinWatches] = useState([])
    const [MichaelKhorsWatches, setMichaelKhorsWatches] = useState([])

    const [SelectTabs, setSelectTabs] = useState(1)
    const [Products, setProducts] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)
    const [IsLoading, setIsLoading] = useState(true)
  
    const SetLocation = () => setToggleLocation(!ToggleLocation)
  
    const ToggleSelectTabs = (index) => {
      setSelectTabs(index);
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
          brand: "Tempo Watch"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
        setTempoWatches(response.data.products)
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

      const GetFossil = () => {
        const variable = {
            brand: "Fossil Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setFossilWatches(response.data.products)
        } else {
        }
        })
    }

    const GetDanielKlein = () => {
        const variable = {
            brand: "Daniel Klein Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setDanielKleinWatches(response.data.products)
        } else {
        }
        })
    }

    const GetSkagen = () => {
        const variable = {
            brand: "Skagen Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setSkagenWatches(response.data.products)
        } else {
        }
        })
    }

    const GetSteveMadden = () => {
      const variable = {
          brand: "Steve Madden Watch"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
          setSteveMaddenWatches(response.data.products)
      } else {
      }
      })
  }

    const GetGuess = () => {
        const variable = {
            brand: "Guess Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setGuessWatches(response.data.products)
        } else {
        }
        })
    }

    const GetDKNY = () => {
        const variable = {
            brand: "DKNY Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setDKNYWatches(response.data.products)
        } else {
        }
        })
    }

    const GetNineWest = () => {
        const variable = {
            brand: "Nine West Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setNineWestWatches(response.data.products)
        } else {
        }
        })
    }

    const GetAnneKlein = () => {
        const variable = {
            brand: "Anne Klein Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setAnneKleinWatches(response.data.products)
        } else {
        }
        })
    }

    const GetMichaelKhors = () => {
        const variable = {
            brand: "Michael Khors Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setMichaelKhorsWatches(response.data.products)
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

          const TempoWatchesWomenPage = TempoWatches.map((product, index) => {
            if (product.genderCategory === "Women") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
          
            )
            }
            
            })
          
            const TempoWatchesWomenPageLocation = TempoWatches.map((product, index) => {
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

              const FossilWatchesWomenPage = FossilWatches.map((product, index) => {
                if (product.genderCategory === "Women") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
              
                )
                }
                
                })
              
                const FossilWatchesWomenPageLocation = FossilWatches.map((product, index) => {
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

                  const DanielKleinWatchesWomenPage = DanielKleinWatches.map((product, index) => {
                    if (product.genderCategory === "Women") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                  
                    )
                    }
                    
                    })
                  
                    const DanielKleinWatchesWomenPageLocation = DanielKleinWatches.map((product, index) => {
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

                      const GuessWatchesWomenPage = GuessWatches.map((product, index) => {
                        if (product.genderCategory === "Women") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                      
                        )
                        }
                        
                        })
                      
                        const GuessWatchesWomenPageLocation = GuessWatches.map((product, index) => {
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

                          const SkagenWatchesWomenPage = SkagenWatches.map((product, index) => {
                            if (product.genderCategory === "Women") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                          
                            )
                            }
                            
                            })
                          
                            const SkagenWatchesWomenPageLocation = SkagenWatches.map((product, index) => {
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

                              const SteveMaddenWatchesWomenPage = SteveMaddenWatches.map((product, index) => {
                                if (product.genderCategory === "Women") {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                              
                                )
                                }
                                
                                })
                              
                                const SteveMaddenWatchesWomenPageLocation = SteveMaddenWatches.map((product, index) => {
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

                                  const DKNYWatchesWomenPage = DKNYWatches.map((product, index) => {
                                    if (product.genderCategory === "Women") {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                                  
                                    )
                                    }
                                    
                                    })
                                  
                                    const DKNYWatchesWomenPageLocation = DKNYWatches.map((product, index) => {
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


                                      const NineWestWatchesWomenPage = NineWestWatches.map((product, index) => {
                                        if (product.genderCategory === "Women") {
                                        return (
                                          <ProductCart key={index} UserData={UserData} product={product} />
                                      
                                        )
                                        }
                                        
                                        })
                                      
                                        const NineWestWatchesWomenPageLocation = NineWestWatches.map((product, index) => {
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

                                          const AnneKleinWatchesWomenPage = AnneKleinWatches.map((product, index) => {
                                            if (product.genderCategory === "Women") {
                                            return (
                                              <ProductCart key={index} UserData={UserData} product={product} />
                                          
                                            )
                                            }
                                            
                                            })
                                          
                                            const AnneKleinWatchesWomenPageLocation = AnneKleinWatches.map((product, index) => {
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

                                              const MichaelKhorsWatchesWomenPage = MichaelKhorsWatches.map((product, index) => {
                                                if (product.genderCategory === "Women") {
                                                return (
                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                              
                                                )
                                                }
                                                
                                                })
                                              
                                                const MichaelKhorsWatchesWomenPageLocation = MichaelKhorsWatches.map((product, index) => {
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
    <SearchBar showResults={clickSearch} refreshFunction={updateSearchTerms} />
    {SearchTerms === "" ?
  <div className='Visited_container-wrapper'>
  <div className='Visited_page-banner'>
  <div className='Back_to_main_box'>
      <a href='/watches'>
      <div className='Back_to_main_content_box'>
        <span>Watches</span>
      </div>
      </a>
      
    </div>
    <div className='Category_selectTabs_box_back_to_main'>
    <div>
      <span className='Category_selectTabs_span'>Women's Watches</span>
    </div>

    <div className='Select_tabs_slider_longer'>
    <Carousel className='Carosal_style_images' 
    responsive={responsive}
    partialVisible={true}
    swipeable={true}
    draggable={true}
    minimumTouchDrag={50}
    deviceType={props.deviceType}
    >

  <div className={SelectTabs ===1 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(1)}}
  ><div>
    <img 
    src='https://pbs.twimg.com/media/F7XB6R4WIAAq60Z?format=jpg&name=4096x4096'
   style={{ width: '100%', height: '230px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Tempo</span>
  </div>
    
   </div>

   <div className={SelectTabs ===2 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(2); GetFossil()}}
  ><div>
    <img 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiq6d8Hw54NemkQWc-KCOspPxbVik2XYe1Islbl4matWDz_szqMm65flh81ixCeTtxtC4&usqp=CAU'
   style={{ width: '100%', height: '230px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Fossil</span>
  </div>
   </div>

   <div className={SelectTabs ===3 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(3); GetDanielKlein()}}
  ><div>
    <img 
    src='https://i.pinimg.com/1200x/76/ed/b5/76edb5701cb2f9213ac1cd318cba1fe7.jpg'
    // src='https://www.swisswatchexpo.com/images/custom-catalog-content/header/tag-heuer.jpg'
   style={{ width: '100%', height: '230px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Daniel Klein</span>
  </div>
    
   </div>

   <div className={SelectTabs ===6 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(6); GetSteveMadden()}}
  ><div>
    <img 
    src='https://i.pinimg.com/1200x/1d/53/2a/1d532aebb85126d464e67af2a8402180.jpg'
   style={{ width: '100%', height: '230px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Steve Madden</span>
  </div>
   </div>

   <div className={SelectTabs ===4 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(4); GetGuess()}}
  ><div>
    <img src="https://m.media-amazon.com/images/I/81wkiAQRYWL._AC_UY1000_.jpg"
   style={{ width: '100%', height: '230px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Guess</span>
  </div>
   </div>

   <div className={SelectTabs ===5 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(5); GetSkagen()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/91d3X0UWnTL._AC_UY1000_.jpg'
   style={{ width: '100%', height: '230px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Skagen</span>
  </div>
   </div>


   <div className={SelectTabs ===7 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(7); GetDKNY()}}
  ><div>
    <img 
    src='https://www.chic-time.fr/44835/dkny-ny8539-womens-watchbracelet-color-brown-movement-quartz-waterproofing-50-m-dial-color-brown-bracelet-material-stainless-ste.jpg'
   style={{ width: '100%', height: '230px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>DKNY</span>
  </div>
   </div>

   <div className={SelectTabs ===9 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(9); GetAnneKlein()}}
  ><div>
    <img 
    src='https://i.pinimg.com/1200x/9e/45/b5/9e45b51b29e19d0f75761a1392be6fdc.jpg'
   style={{ width: '100%', height: '230px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Anne Klein</span>
  </div>
   </div>

   <div className={SelectTabs ===8 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(8); GetNineWest()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/71xoylnc+5S._AC_UY1000_.jpg'
   style={{ width: '100%', height: '230px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Nine West</span>
  </div>
   </div>

   <div className={SelectTabs ===10 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(10); GetMichaelKhors()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/91j9POmdxCL._AC_UY1000_.jpg'
   style={{ width: '100%', height: '230px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Michael Khors</span>
  </div>
   </div>


</Carousel>

    </div>


    </div>
  </div>

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

{/* All Watches */}
{TempoWatches && TempoWatches.length === undefined ?
  <></>
  :
  TempoWatches && TempoWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {TempoWatchesWomenPage}
</div>
}

{FossilWatches && FossilWatches.length === undefined ?
  <></>
  :
  FossilWatches && FossilWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 2 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FossilWatchesWomenPage}
</div>
}

{DanielKleinWatches && DanielKleinWatches.length === undefined ?
  <></>
  :
  DanielKleinWatches && DanielKleinWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 3 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DanielKleinWatchesWomenPage}
</div>
}

{GuessWatches && GuessWatches.length === undefined ?
  <></>
  :
  GuessWatches && GuessWatches.length === 0 ?
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
    {GuessWatchesWomenPage}
</div>
}

{SkagenWatches && SkagenWatches.length === undefined ?
  <></>
  :
  SkagenWatches && SkagenWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 5 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {SkagenWatchesWomenPage}
</div>
}

{SteveMaddenWatches && SteveMaddenWatches.length === undefined ?
  <></>
  :
  SteveMaddenWatches && SteveMaddenWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === false ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {SteveMaddenWatchesWomenPage}
</div>
}

{DKNYWatches && DKNYWatches.length === undefined ?
  <></>
  :
  DKNYWatches && DKNYWatches.length === 0 ?
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
    {DKNYWatchesWomenPage}
</div>
}

{NineWestWatches && NineWestWatches.length === undefined ?
  <></>
  :
  NineWestWatches && NineWestWatches.length === 0 ?
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
    {NineWestWatchesWomenPage}
</div>
}

{AnneKleinWatches && AnneKleinWatches.length === undefined ?
  <></>
  :
  AnneKleinWatches && AnneKleinWatches.length === 0 ?
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
    {AnneKleinWatchesWomenPage}
</div>
}

{MichaelKhorsWatches && MichaelKhorsWatches.length === undefined ?
  <></>
  :
  MichaelKhorsWatches && MichaelKhorsWatches.length === 0 ?
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
    {MichaelKhorsWatchesWomenPage}
</div>
}



{/* Location */}
{TempoWatches && TempoWatches.length === undefined ?
  <></>
  :
  TempoWatches && TempoWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 1 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {TempoWatchesWomenPageLocation}
</div>
}

{FossilWatches && FossilWatches.length === undefined ?
  <></>
  :
  FossilWatches && FossilWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 2 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {FossilWatchesWomenPageLocation}
</div>
}

{DanielKleinWatches && DanielKleinWatches.length === undefined ?
  <></>
  :
  DanielKleinWatches && DanielKleinWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 3 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 3 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {DanielKleinWatchesWomenPageLocation}
</div>
}

{GuessWatches && GuessWatches.length === undefined ?
  <></>
  :
  GuessWatches && GuessWatches.length === 0 ?
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
    {GuessWatchesWomenPageLocation}
</div>
}

{SkagenWatches && SkagenWatches.length === undefined ?
  <></>
  :
  SkagenWatches && SkagenWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 5 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 5 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {SkagenWatchesWomenPageLocation}
</div>
}

{SteveMaddenWatches && SteveMaddenWatches.length === undefined ?
  <></>
  :
  SteveMaddenWatches && SteveMaddenWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 6 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 6 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {SteveMaddenWatchesWomenPageLocation}
</div>
}

{DKNYWatches && DKNYWatches.length === undefined ?
  <></>
  :
  DKNYWatches && DKNYWatches.length === 0 ?
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
    {DKNYWatchesWomenPageLocation}
</div>
}

{NineWestWatches && NineWestWatches.length === undefined ?
  <></>
  :
  NineWestWatches && NineWestWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 8 && ToggleLocation === true ?
 <div style={{
  width: '100%', display: 'flex', flexDirection: 'column',
  justifyContent: 'center', background: '#fff'
  }}>
  <br />
  <Empty description={false} />
  <div style={{
  width: '100%', display: 'flex', justifyContent: 'center'
  }}>
  <p>No Items listed yet</p>
  </div>
  </div>
  :
  <></>
  }
  </>
  }
  </>
:
<div className={SelectTabs === 8 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {NineWestWatchesWomenPageLocation}
</div>
}

{AnneKleinWatches && AnneKleinWatches.length === undefined ?
  <></>
  :
  AnneKleinWatches && AnneKleinWatches.length === 0 ?
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
    {AnneKleinWatchesWomenPageLocation}
</div>
}

{MichaelKhorsWatches && MichaelKhorsWatches.length === undefined ?
  <></>
  :
  MichaelKhorsWatches && MichaelKhorsWatches.length === 0 ?
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
    {MichaelKhorsWatchesWomenPageLocation}
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

export default WomensWatches