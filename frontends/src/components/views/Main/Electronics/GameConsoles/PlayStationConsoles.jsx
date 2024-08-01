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

function PlayStationConsoles(props) {

    const [UserData, setUserData] = useState([])
    const [PlayStationsFive, setPlayStationsFive] = useState([])
    const [PlayStationsFour, setPlayStationsFour] = useState([])
    const [PlayStationsThree, setPlayStationsThree] = useState([])

    const [toggleConsoleModel, settoggleConsoleModel] = useState(0)

    const [SelectTabs, setSelectTabs] = useState(1)
    const [Products, setProducts] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)

    const [IsLoading, setIsLoading] = useState(true)
  
    const SetLocation = () => setToggleLocation(!ToggleLocation)
    
    const [ToggleVerified, setToggleVerified] = useState(false)
    const SetVerified = () => setToggleVerified(!ToggleVerified)

    const ToggleSelectTabs = (index) => {
      setSelectTabs(index);
    }  

    const ConsoleModelCategory = (index) => {
      settoggleConsoleModel(index);
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
          items: 7,
          slidesToSlide: 3,
          partialVisibilityGutter: 30
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7,
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
          product: "PlayStation 5"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
        setPlayStationsFive(response.data.products)
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

      const GetPlayStationFour = () => {
        const variable = {
            product: "PlayStation 4"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
          setPlayStationsFour(response.data.products)
        } else {
        }
        })
      }
      
      const GetPlayStationThree = () => {
        const variable = {
            product: "PlayStation 3"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
          setPlayStationsThree(response.data.products)
        } else {
        }
        })
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



          const PlayStationsFiveStandardPage = PlayStationsFive.map((product, index) => {
            if (product.modelName === "PS5 Standard") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
      
            )
            }
            
            })
      
            const PlayStationsFiveStandardPageLocation = PlayStationsFive.map((product, index) => {
              if (product.modelName === "PS5 Standard" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
        
              )
              }
              
              })

              const PlayStationsFiveStandardPageVerified = PlayStationsFive.map((product, index) => {
                if (product.modelName === "PS5 Standard" && product.accountTier === "Verified" ) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
                }
                
                })
          
                const PlayStationsFiveStandardPageLocationVerified = PlayStationsFive.map((product, index) => {
                  if (( product.modelName === "PS5 Standard" && product.accountTier === "Verified") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
            
                  )
                  }
                  
                  })

              const PlayStationsFiveDigitalPage = PlayStationsFive.map((product, index) => {
                if (product.modelName === "PS5 Digital") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
                }
                
                })
          
                const PlayStationsFiveDigitalPageLocation = PlayStationsFive.map((product, index) => {
                  if (product.modelName === "PS5 Digital" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
            
                  )
                  }
                  
                  })

                  const PlayStationsFiveDigitalPageVerified = PlayStationsFive.map((product, index) => {
                    if (product.modelName === "PS5 Digital" && product.accountTier === "Verified") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
              
                    )
                    }
                    
                    })
              
                    const PlayStationsFiveDigitalPageLocationVerified = PlayStationsFive.map((product, index) => {
                      if (( product.modelName === "PS5 Digital" && product.accountTier === "Verified" ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                
                      )
                      }
                      
                      })



              const PlayStationsFourStandardPage = PlayStationsFour.map((product, index) => {
                if (product.modelName === "PS4 Standard") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
                }
                
                })
          
                const PlayStationsFourStandardPageLocation = PlayStationsFour.map((product, index) => {
                  if (product.modelName === "PS4 Standard" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
            
                  )
                  }
                  
                  })

                  const PlayStationsFourStandardPageVerified = PlayStationsFour.map((product, index) => {
                    if (product.modelName === "PS4 Standard" && product.accountTier === "Verified") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
              
                    )
                    }
                    
                    })
              
                    const PlayStationsFourStandardPageLocationVerified = PlayStationsFour.map((product, index) => {
                      if (( product.modelName === "PS4 Standard" && product.accountTier === "Verified" ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                
                      )
                      }
                      
                      })


                  const PlayStationsFourSlimPage = PlayStationsFour.map((product, index) => {
                    if (product.modelName === "PS4 Slim") {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
              
                    )
                    }
                    
                    })
              
                    const PlayStationsFourSlimPageLocation = PlayStationsFour.map((product, index) => {
                      if (product.modelName === "PS4 Slim" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                       && product.Gobabis === true))) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                
                      )
                      }
                      
                      })

                      const PlayStationsFourSlimPageVerified = PlayStationsFour.map((product, index) => {
                        if (product.modelName === "PS4 Slim" && product.accountTier === "Verified") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                  
                        )
                        }
                        
                        })
                  
                        const PlayStationsFourSlimPageLocationVerified = PlayStationsFour.map((product, index) => {
                          if (( product.modelName === "PS4 Slim" && product.accountTier === "Verified" ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                    
                          )
                          }
                          
                          })

                      const PlayStationsFourProPage = PlayStationsFour.map((product, index) => {
                        if (product.modelName === "PS4 Pro") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                  
                        )
                        }
                        
                        })
                  
                        const PlayStationsFourProPageLocation = PlayStationsFour.map((product, index) => {
                          if (product.modelName === "PS4 Pro" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                           && product.Gobabis === true))) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                    
                          )
                          }
                          
                          })


                          const PlayStationsFourProPageVerified = PlayStationsFour.map((product, index) => {
                            if (product.modelName === "PS4 Pro" && product.accountTier === "Verified") {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                      
                            )
                            }
                            
                            })
                      
                            const PlayStationsFourProPageLocationVerified = PlayStationsFour.map((product, index) => {
                              if (( product.modelName === "PS4 Pro" && product.accountTier === "Verified" ) && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true))) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                        
                              )
                              }
                              
                              })


                          const PlayStationsThreePage = PlayStationsThree.map((product, index) => {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                      
                            )
                            })
                      
                            const PlayStationsThreePageLocation = PlayStationsThree.map((product, index) => {
                              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                               && product.Gobabis === true)) {
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
      <span className='Category_selectTabs_span'>PlayStation Consoles</span>
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
  onClick={()=> {ToggleSelectTabs(1); ConsoleModelCategory(0)}}
  ><div>
    <img  
    src='https://i.imgur.com/lxzu4oC.png'
    className={SelectTabs ===1 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>PlayStation 5</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(2); GetPlayStationFour(); ConsoleModelCategory(0)}}
  ><div>
    <img  
    src='https://i.imgur.com/f25YL9B.png'
    className={SelectTabs ===2 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>PlayStation 4</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(3); GetPlayStationThree(); ConsoleModelCategory()}}
  ><div>
    <img  
    src='https://i.imgur.com/257K9SR.png'
    className={SelectTabs ===3 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>PlayStation 3</span>
  </div>
   </div>


</Carousel>

    </div>

    <div className={SelectTabs ===1 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Models</span>
    </div>
    </div>
    
    <div className={SelectTabs ===1 ? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={toggleConsoleModel ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ConsoleModelCategory(0)}} >
            <span>PS5 Digital</span>
          </div>
    <div className={toggleConsoleModel ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ConsoleModelCategory(1)}} >
            <span>PS5 Standard</span>
          </div>

    </div>

    <div className={SelectTabs ===2? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Models</span>
    </div>
    </div>
    <div className={SelectTabs ===2? 'Select_tabs_organise' : 'Listed_fetched_products-hide'}>
    <div className={toggleConsoleModel ===0 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ConsoleModelCategory(0)}} >
            <span>PS4 Pro</span>
          </div>
    <div className={toggleConsoleModel ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ConsoleModelCategory(1)}} >
            <span>PS4 Slim</span>
          </div>
    <div className={toggleConsoleModel ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ConsoleModelCategory(2)}} >
            <span>PS4 Standard</span>
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
    <>
    <div className='My_location_items_box'>
        <a href='/login' style={{ width: '100%', height: '100%', display: 'flex', 
          justifyContent: 'center', alignItems: 'center' }}>
        <span>Near Me</span>
        </a>
      </div>
      <div onClick={SetVerified}  className={ToggleVerified === true ? 'Verified_items_box_active' : 'Verified_items_box'}>
      <span>Verified</span>
    </div>
    </>
    :
    (UserData.length !== 0 & UserData.userLocation === "") && UserData.operateLocation === "User" ?
    <>
    <div className='My_location_items_box'>
        <a href='/0settings' style={{ width: '100%', height: '100%', display: 'flex', 
          justifyContent: 'center', alignItems: 'center' }}>
        <span>Near Me</span>
        </a>
      </div>
      <div onClick={SetVerified}  className={ToggleVerified === true ? 'Verified_items_box_active' : 'Verified_items_box'}>
      <span>Verified</span>
    </div>
    </>
    
      :
      <>
      <div onClick={SetLocation}  className={ToggleLocation === true ? 'My_location_items_box_active' : 'My_location_items_box'}>
      <span>Near Me</span>
    </div>
    <div onClick={SetVerified}  className={ToggleVerified === true ? 'Verified_items_box_active' : 'Verified_items_box'}>
    <span>Verified</span>
  </div>
      </>
      
    }
    </div>
  </div>

<div className='ListedItems_container'>

{/* PS5 Digital Console */}
{PlayStationsFive && PlayStationsFive.length === undefined ?
  <></>
  :
  PlayStationsFive && PlayStationsFive.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleConsoleModel === 0 ) && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleConsoleModel === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PlayStationsFiveDigitalPage}
</div>
}

{PlayStationsFive && PlayStationsFive.length === undefined ?
  <></>
  :
  PlayStationsFive && PlayStationsFive.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleConsoleModel === 0 ) && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleConsoleModel === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PlayStationsFiveDigitalPageLocation}
</div>
}

{/* PS5 Standard Console */}
{PlayStationsFive && PlayStationsFive.length === undefined ?
  <></>
  :
  PlayStationsFive && PlayStationsFive.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleConsoleModel === 1 ) && ToggleLocation === false ?
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
<div className={(SelectTabs === 1 && toggleConsoleModel === 1 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PlayStationsFiveStandardPage}
</div>
}

{PlayStationsFive && PlayStationsFive.length === undefined ?
  <></>
  :
  PlayStationsFive && PlayStationsFive.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 1 && toggleConsoleModel === 1 ) && ToggleLocation === true ?
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
<div className={(SelectTabs === 1 && toggleConsoleModel === 1 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PlayStationsFiveStandardPageLocation}
</div>
}


{/* PS4 Pro Console */}
{PlayStationsFour && PlayStationsFour.length === undefined ?
  <></>
  :
  PlayStationsFour && PlayStationsFour.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleConsoleModel === 0 ) && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleConsoleModel === 0 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PlayStationsFourProPage}
</div>
}

{PlayStationsFour && PlayStationsFour.length === undefined ?
  <></>
  :
  PlayStationsFour && PlayStationsFour.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleConsoleModel === 0 ) && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleConsoleModel === 0 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PlayStationsFourProPageLocation}
</div>
}


{/* PS4 Slim Console */}
{PlayStationsFour && PlayStationsFour.length === undefined ?
  <></>
  :
  PlayStationsFour && PlayStationsFour.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleConsoleModel === 1 ) && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleConsoleModel === 1 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PlayStationsFourSlimPage}
</div>
}

{PlayStationsFour && PlayStationsFour.length === undefined ?
  <></>
  :
  PlayStationsFour && PlayStationsFour.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleConsoleModel === 1 ) && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleConsoleModel === 1 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PlayStationsFourSlimPageLocation}
</div>
}


{/* PS4 Standard Console */}
{PlayStationsFour && PlayStationsFour.length === undefined ?
  <></>
  :
  PlayStationsFour && PlayStationsFour.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleConsoleModel === 2 ) && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleConsoleModel === 2 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PlayStationsFourStandardPage}
</div>
}

{PlayStationsFour && PlayStationsFour.length === undefined ?
  <></>
  :
  PlayStationsFour && PlayStationsFour.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleConsoleModel === 2 ) && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleConsoleModel === 2 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {PlayStationsFourStandardPageLocation}
</div>
}


{/* PS3 Console */}
{PlayStationsThree && PlayStationsThree.length === undefined ?
  <></>
  :
  PlayStationsThree && PlayStationsThree.length === 0 ?
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
    {PlayStationsThreePage}
</div>
}

{PlayStationsFour && PlayStationsFour.length === undefined ?
  <></>
  :
  PlayStationsFour && PlayStationsFour.length === 0 ?
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
    {PlayStationsThreePageLocation}
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

export default PlayStationConsoles