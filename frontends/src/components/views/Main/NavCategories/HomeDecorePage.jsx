import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import { Empty } from 'antd';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

function HomeDecorePage(props) {

  const [UserData, setUserData] = useState([])
  const [ThrowPillows, setThrowPillows] = useState([])
  const [ThrowBlankets, setThrowBlankets] = useState([])
  const [TableLamps, setTableLamps] = useState([])
  const [FloorLamps, setFloorLamps] = useState([])
  const [WallArt, setWallArt] = useState([])
  const [ThrowRugs, setThrowRugs] = useState([])
  const [RunnerRugs, setRunnerRugs] = useState([])
  const [PictureFrames, setPictureFrames] = useState([])
  const [RubberPlants, setRubberPlants] = useState([])

  const [SelectTabs, setSelectTabs] = useState(1)
  const [Products, setProducts] = useState([])
  const [ToggleLocation, setToggleLocation] = useState(false)
  const [IsLoading, setIsLoading] = useState(true)

  const SetLocation = () => setToggleLocation(!ToggleLocation)

  const ToggleSelectTabs = (index) => {
    setSelectTabs(index);
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
      product: "Throw Pillow Set"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setThrowPillows(response.data.products)
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


const GetThrowBlankets = () => {
  const variable = {
      product: "Throw Blanket"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setThrowBlankets(response.data.products)
  } else {
  }
  })
}

const GetTableLamps = () => {
  const variable = {
      product: "Table Lamp"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setTableLamps(response.data.products)
  } else {
  }
  })
}

const GetFloorLamps = () => {
  const variable = {
      product: "Floor Lamp"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setFloorLamps(response.data.products)
  } else {
  }
  })
}

const GetWallArt = () => {
  const variable = {
      product: "Wall Art"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setWallArt(response.data.products)
  } else {
  }
  })
}

const GetThrowRugs = () => {
  const variable = {
      product: "Throw Rug"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setThrowRugs(response.data.products)
  } else {
  }
  })
}

const GetRunnerRugs = () => {
  const variable = {
      product: "Runner Rug"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setRunnerRugs(response.data.products)
  } else {
  }
  })
}

const GetPictureFrames = () => {
  const variable = {
      product: "Table Top Frame"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setPictureFrames(response.data.products)
  } else {
  }
  })
}

const GetRubberPlants = () => {
  const variable = {
      product: "Rubber Plants"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setRubberPlants(response.data.products)
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

      const ThrowPillowsPage = ThrowPillows.map((product, index) => {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
          )
        })

        const ThrowPillowsPageLocation = ThrowPillows.map((product, index) => {
          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
            )
          }
          })

          const ThrowBlanketsPage = ThrowBlankets.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
              )
            })
    
            const ThrowBlanketsPageLocation = ThrowBlankets.map((product, index) => {
              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                )
              }
              })

              const TableLampsPage = TableLamps.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                  )
                })
        
                const TableLampsPageLocation = TableLamps.map((product, index) => {
                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                    )
                  }
                  })

                  const FloorLampsPage = FloorLamps.map((product, index) => {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                      )
                    })
            
                    const FloorLampsPageLocation = FloorLamps.map((product, index) => {
                      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                        )
                      }
                      })

                      const WallArtPage = WallArt.map((product, index) => {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                          )
                        })
                
                        const WallArtPageLocation = WallArt.map((product, index) => {
                          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                            )
                          }
                          })

                          const ThrowRugsPage = ThrowRugs.map((product, index) => {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                              )
                            })
                    
                            const ThrowRugsPageLocation = ThrowRugs.map((product, index) => {
                              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                                )
                              }
                              })

                              const RunnerRugsPage = RunnerRugs.map((product, index) => {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                                  )
                                })
                        
                                const RunnerRugsPageLocation = RunnerRugs.map((product, index) => {
                                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                    return (
                                      <ProductCart key={index} UserData={UserData} product={product} />
                                    )
                                  }
                                  })


                                                              const PictureFramesPage = PictureFrames.map((product, index) => {
                                                                return (
                                                                  <ProductCart key={index} UserData={UserData} product={product} />
                                                                  )
                                                                })
                                                        
                                                                const PictureFramesPageLocation = PictureFrames.map((product, index) => {
                                                                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                                                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                                                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                                                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                                    )
                                                                  }
                                                                  })

                                                                  const RubberPlantsPage = RubberPlants.map((product, index) => {
                                                                    return (
                                                                      <ProductCart key={index} UserData={UserData} product={product} />
                                                                      )
                                                                    })
                                                            
                                                                    const RubberPlantsPageLocation = RubberPlants.map((product, index) => {
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
    {SearchTerms === "" ?
  <div className='Visited_container-wrapper'>
  <div className='Visited_page-banner'>
    <div className='Category_selectTabs_box'>
    <div>
      <span className='Category_selectTabs_span'>Home Decore</span>
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
  onClick={()=> {ToggleSelectTabs(1)}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/71SFaMQxZeL._AC_UF894,1000_QL80_.jpg'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Throw Pillows</span>
  </div>
    
   </div>

   <div className={SelectTabs ===2 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(2); GetThrowBlankets()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/71ALj4+DRtL._AC_UF894,1000_QL80_.jpg'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Throw Blankets</span>
  </div>
    
   </div>

   <div className={SelectTabs ===3 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(3); GetTableLamps()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/71MJywpczTL._AC_UF894,1000_QL80_.jpg'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Table Lamps</span>
  </div>
   </div>

   <div className={SelectTabs ===4 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(4); GetFloorLamps()}}
  ><div>
    <img src="https://storage.leafmedia.io/hunker_data/product/9cfdbeab-220c-4561-8480-1476bd3a88f4-LEPOWERWoodTripodFloorLamp.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Floor Lamps</span>
  </div>
   </div>


   <div className={SelectTabs ===6 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(6); GetThrowRugs()}}
  ><div>
    <img 
    src='https://people.com/thmb/QLWVClgVnajpAf1l92FlupoygRk=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/moynesa-ultra-thin-washable-vintage-area-rug-0e8ada11eeb54df6b7865b5e2ed7d2eb.jpg'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Throw Rugs</span>
  </div>
   </div>

   <div className={SelectTabs ===7 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(7); GetRunnerRugs()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/81AD4V7AnsL._AC_UF1000,1000_QL80_.jpg'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Runner Rugs</span>
  </div>
   </div>

   <div className="Select_image_product"
  >
    <a href='/mirrors'>
      <div>
    <img src="https://i5.walmartimages.com/asr/95030027-a941-437d-8155-9fd59b35a499.ff6d6760161826064ffa430026262ae4.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Mirrors</span>
  </div>
    </a>
   </div>

   <div className="Select_image_product"
  >
    <a href='/clocks'>
      <div>
    <img src="https://m.media-amazon.com/images/I/61kNNY6UDrL._AC_UF894,1000_QL80_.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Clocks</span>
  </div>
    </a>

   </div>

   <div className="Select_image_product"
  >
    <a>
      <div>
    <img src="https://m.media-amazon.com/images/I/91oAc2CeAVL._AC_UF350,350_QL50_.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Wall Art</span>
  </div>
    </a>
  
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
  onClick={()=> {ToggleSelectTabs(1)}}
  ><div>
    <img  
    src='https://i.imgur.com/AesdhYI.png'
    className={SelectTabs ===1 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Throw Pillows</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(2); GetThrowBlankets()}}
  ><div>
    <img  
    src='https://i.imgur.com/hxsfo05.png'
    className={SelectTabs ===2 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Throw Blankets</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(3); GetTableLamps()}}
  ><div>
    <img  
    src='https://i.imgur.com/4sf7ugq.png'
    className={SelectTabs ===3 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Table Lamps</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(4); GetFloorLamps()}}
  ><div>
    <img  src="https://i.imgur.com/pbYYNCi.png"
    className={SelectTabs ===4 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Floor Lamps</span>
  </div>
   </div>


   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(6); GetThrowRugs()}}
  ><div>
    <img  
    src='https://i.imgur.com/7LcACFT.png'
    className={SelectTabs ===6 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Throw Rugs</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(7); GetRunnerRugs()}}
  ><div>
    <img  
    src='https://i.imgur.com/eXhscpe.png'
    className={SelectTabs ===7 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Runner Rugs</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  >
    <a href='/mirrors'>
      <div>
    <img  src="https://i5.walmartimages.com/asr/95030027-a941-437d-8155-9fd59b35a499.ff6d6760161826064ffa430026262ae4.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Mirrors</span>
  </div>
    </a>
   </div>

   <div className='Select_image_product_longer'
  >
    <a href='/clocks'>
      <div>
    <img  src="https://m.media-amazon.com/images/I/61kNNY6UDrL._AC_UF894,1000_QL80_.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Clocks</span>
  </div>
    </a>

   </div>

   <div className='Select_image_product_longer'
  >
    <a>
      <div>
    <img  src="https://m.media-amazon.com/images/I/91oAc2CeAVL._AC_UF350,350_QL50_.jpg"
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Wall Art</span>
  </div>
    </a>
  
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

{ThrowPillows && ThrowPillows.length === undefined ?
  <></>
  :
  ThrowPillows && ThrowPillows.length === 0 ?
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
  {ThrowPillowsPage}
</div>
}

{ThrowBlankets && ThrowBlankets.length === undefined ?
  <></>
  :
  ThrowBlankets && ThrowBlankets.length === 0 ?
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
  {ThrowBlanketsPage}
</div>
}

{TableLamps && TableLamps.length === undefined ?
  <></>
  :
  TableLamps && TableLamps.length === 0 ?
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
  {TableLampsPage}
</div>
}

{FloorLamps && FloorLamps.length === undefined ?
  <></>
  :
  FloorLamps && FloorLamps.length === 0 ?
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
  {FloorLampsPage}
</div>
}

{WallArt && WallArt.length === undefined ?
  <></>
  :
  WallArt && WallArt.length === 0 ?
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
  {WallArtPage}
</div>
}

{ThrowRugs && ThrowRugs.length === undefined ?
  <></>
  :
  ThrowRugs && ThrowRugs.length === 0 ?
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
  {ThrowRugsPage}
</div>
}

{RunnerRugs && RunnerRugs.length === undefined ?
  <></>
  :
  RunnerRugs && RunnerRugs.length === 0 ?
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
  {RunnerRugsPage}
</div>
}



{ThrowPillows && ThrowPillows.length === undefined ?
  <></>
  :
  ThrowPillows && ThrowPillows.length === 0 ?
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
  {ThrowPillowsPageLocation}
</div>
}

{ThrowBlankets && ThrowBlankets.length === undefined ?
  <></>
  :
  ThrowBlankets && ThrowBlankets.length === 0 ?
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
  {ThrowBlanketsPageLocation}
</div>
}

{TableLamps && TableLamps.length === undefined ?
  <></>
  :
  TableLamps && TableLamps.length === 0 ?
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
  {TableLampsPageLocation}
</div>
}

{FloorLamps && FloorLamps.length === undefined ?
  <></>
  :
  FloorLamps && FloorLamps.length === 0 ?
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
  {FloorLampsPageLocation}
</div>
}

{WallArt && WallArt.length === undefined ?
  <></>
  :
  WallArt && WallArt.length === 0 ?
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
  {WallArtPageLocation}
</div>
}

{ThrowRugs && ThrowRugs.length === undefined ?
  <></>
  :
  ThrowRugs && ThrowRugs.length === 0 ?
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
  {ThrowRugsPageLocation}
</div>
}

{RunnerRugs && RunnerRugs.length === undefined ?
  <></>
  :
  RunnerRugs && RunnerRugs.length === 0 ?
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
  {RunnerRugsPageLocation}
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

export default HomeDecorePage