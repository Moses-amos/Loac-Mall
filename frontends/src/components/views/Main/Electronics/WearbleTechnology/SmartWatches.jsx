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

function SmartWatches(props) {

    const [UserData, setUserData] = useState([])
    const [SmartWatches, setSmartWatches] = useState([])
    const [AppleWatches, setAppleWatches] = useState([])
    const [SamsungWatches, setSamsungWatches] = useState([])
    const [GarminWatches, setGarminWatches] = useState([])
    const [ReflexActiveWatches, setReflexActiveWatches] = useState([])
    const [HuaweiWatches, setHuaweiWatches] = useState([])
    const [FitbitWatches, setFitbitWatches] = useState([])

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
          items: 6,
          slidesToSlide: 3,
          partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6,
          slidesToSlide: 3,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: { max: 1024, min: 600 },
          items: 4,
          slidesToSlide: 3,
          partialVisibilityGutter: 20
        },
        mobile: {
          breakpoint: { max: 600, min: 0 },
          items: 3,
          slidesToSlide: 2,
  
        }
      };
    
      useEffect(() => {
        const variable = {
          product: "Smart Watch"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
        setSmartWatches(response.data.products)
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

      const GetAppleWatches = () => {
        const variable = {
            brand: "Apple Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setAppleWatches(response.data.products)
        } else {
        }
        })
    }
    
    const GetSamsungWatches = () => {
        const variable = {
            brand: "Samsung Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setSamsungWatches(response.data.products)
        } else {
        }
        })
    }
    
    const GetHuaweiWatches = () => {
      const variable = {
          brand: "Huawei Watch"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
      
        setHuaweiWatches(response.data.products)
      } else {
      }
      })
    }
    
    const GetGarminWatches = () => {
        const variable = {
            brand: "Garmin Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setGarminWatches(response.data.products)
        } else {
        }
        })
    }

    const GetReflexActiveWatches = () => {
        const variable = {
            brand: "Reflex Active Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setReflexActiveWatches(response.data.products)
        } else {
        }
        })
    }
    
    const GetFitbitWatches = () => {
        const variable = {
            brand: "Fitbit Watch"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
            setFitbitWatches(response.data.products)
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

    const SmartWatchesPage = SmartWatches.map((product, index) => {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
          )
        })

        const SmartWatchesPageLocation = SmartWatches.map((product, index) => {
          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
      
            )
          }
          })

          const AppleWatchesPage = AppleWatches.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
              )
            })
    
            const AppleWatchesPageLocation = AppleWatches.map((product, index) => {
              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
              }
              })

    const SamsungWatchesPage = SamsungWatches.map((product, index) => {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
          )
        })

        const SamsungWatchesPageLocation = SamsungWatches.map((product, index) => {
          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
      
            )
          }
          })

          const HuaweiWatchesPage = HuaweiWatches.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
              )
            })
    
            const HuaweiWatchesPageLocation = HuaweiWatches.map((product, index) => {
              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
              }
              })

          const GarminWatchesPage = GarminWatches.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
              )
            })
    
            const GarminWatchesPageLocation = GarminWatches.map((product, index) => {
              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
              }
              })

              const ReflexActiveWatchesPage = ReflexActiveWatches.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                  )
                })
        
                const ReflexActiveWatchesPageLocation = ReflexActiveWatches.map((product, index) => {
                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
              
                    )
                  }
                  })

              const FitbitWatchesPage = FitbitWatches.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                  )
                })
        
                const FitbitWatchesPageLocation = FitbitWatches.map((product, index) => {
                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
              
                    )
                  }
                  })


                      const MoreSmartWatchesPage = SmartWatches.map((product, index) => {
                        if (product.seriesName === "Other Watches") {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                      
                        )
                        }
                        
                        })
                      
                        const MoreSmartWatchesPageLocation = SmartWatches.map((product, index) => {
                          if (product.seriesName === "Other Watches" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
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
      <a href='/watches'>
      <div className='Back_to_main_content_box'>
        <span>Watches</span>
      </div>
      </a>
      
    </div>
    <div className='Category_selectTabs_box_back_to_main'>
    <div>
      <span className='Category_selectTabs_span'>Smart Watches</span>
    </div>

    <div className='Select_tabs_slider_longer'>
    {/* <Carousel className='Carosal_style_images' 
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
    src='https://m.media-amazon.com/images/I/61ZjlBOp+rL._AC_UF1000,1000_QL80_.jpg'
   className={SelectTabs ===1 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Smart Watches</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(2); GetAppleWatches()}}
  ><div>
    <img 
    src='https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-ultra2-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693611639254'
    className={SelectTabs ===2 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Apple</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(3); GetSamsungWatches()}}
  ><div>
    <img 
    src='https://www.elgiganten.se/image/dv_web_D1800010021089916/492754/samsung-galaxy-watch5-44mm-bt-silver.jpg'
    // src='https://www.swisswatchexpo.com/images/custom-catalog-content/header/tag-heuer.jpg'
    className={SelectTabs ===3 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Galaxy</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(4); GetHuaweiWatches()}}
  ><div>
    <img src="https://cdn1.smartprix.com/rx-izSDy5a8R-w420-h420/huawei-watch-gt-3-se.jpg"
    className={SelectTabs ===4 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Huawei</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(5); GetGarminWatches()}}
  ><div>
    <img 
    src='https://i.imgur.com/QcNvTkq.png'
    className={SelectTabs ===5 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Garmin</span>
  </div>
   </div>


   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(6); GetReflexActiveWatches()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/71MvYY4g+BL._AC_CR0%2C0%2C0%2C0_SX352_SY330_.jpg'
    className={SelectTabs ===6 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Reflex Active</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(7); GetFitbitWatches()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/61L5Jko2QqL._AC_UF1000,1000_QL80_.jpg'
    className={SelectTabs ===7 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Fitbit Trackers</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(8)}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/71e83m82p1L._AC_UF1000,1000_QL80_.jpg'
    className={SelectTabs ===8 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>More Brands</span>
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
  onClick={()=> {ToggleSelectTabs(1)}}
  ><div>
    <img  
    src='https://i.imgur.com/66Pvthd.png'
    className={SelectTabs ===1 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>All</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(2); GetAppleWatches()}}
  ><div>
    <img  
    src='https://i.imgur.com/pawEEvl.png'
    className={SelectTabs ===2 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Apple</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(3); GetSamsungWatches()}}
  ><div>
    <img  
    src='https://i.imgur.com/rfjoTl1.png'
    // src='https://www.swisswatchexpo.com/images/custom-catalog-content/header/tag-heuer.jpg'
    className={SelectTabs ===3 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Galaxy</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(4); GetHuaweiWatches()}}
  ><div>
    <img  src="https://i.imgur.com/DHXGDMs.png"
    className={SelectTabs ===4 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Huawei</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(5); GetGarminWatches()}}
  ><div>
    <img  
    src='https://i.imgur.com/nE8QuUL.png'
    className={SelectTabs ===5 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Garmin</span>
  </div>
   </div>


   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(6); GetReflexActiveWatches()}}
  ><div>
    <img  
    src='https://i.imgur.com/WDfj7WK.png'
    className={SelectTabs ===6 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Reflex Active</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(7); GetFitbitWatches()}}
  ><div>
    <img  
    src='https://i.imgur.com/N1QV1zk.png'
    className={SelectTabs ===7 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Fitbit</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(8)}}
  ><div>
    <img  
    src='https://i.imgur.com/gjU0E6S.png'
    className={SelectTabs ===8 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Smart Brands</span>
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
{SmartWatches && SmartWatches.length === undefined ?
  <></>
  :
  SmartWatches && SmartWatches.length === 0 ?
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
    {SmartWatchesPage}
</div>
}

{AppleWatches && AppleWatches.length === undefined ?
  <></>
  :
  AppleWatches && AppleWatches.length === 0 ?
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
    {AppleWatchesPage}
</div>
}

{SamsungWatches && SamsungWatches.length === undefined ?
  <></>
  :
  SamsungWatches && SamsungWatches.length === 0 ?
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
    {SamsungWatchesPage}
</div>
}

{HuaweiWatches && HuaweiWatches.length === undefined ?
  <></>
  :
  HuaweiWatches && HuaweiWatches.length === 0 ?
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
    {HuaweiWatchesPage}
</div>
}

{GarminWatches && GarminWatches.length === undefined ?
  <></>
  :
  GarminWatches && GarminWatches.length === 0 ?
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
    {GarminWatchesPage}
</div>
}

{ReflexActiveWatches && ReflexActiveWatches.length === undefined ?
  <></>
  :
  ReflexActiveWatches && ReflexActiveWatches.length === 0 ?
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
    {ReflexActiveWatchesPage}
</div>
}

{FitbitWatches && FitbitWatches.length === undefined ?
  <></>
  :
  FitbitWatches && FitbitWatches.length === 0 ?
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
    {FitbitWatchesPage}
</div>
}

{SmartWatches && SmartWatches.length === undefined ?
  <></>
  :
  SmartWatches && SmartWatches.length === 0 ?
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
    {MoreSmartWatchesPage}
</div>
}


{/* Location */}
{SmartWatches && SmartWatches.length === undefined ?
  <></>
  :
  SmartWatches && SmartWatches.length === 0 ?
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
    {SmartWatchesPageLocation}
</div>
}

{AppleWatches && AppleWatches.length === undefined ?
  <></>
  :
  AppleWatches && AppleWatches.length === 0 ?
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
    {AppleWatchesPageLocation}
</div>
}

{SamsungWatches && SamsungWatches.length === undefined ?
  <></>
  :
  SamsungWatches && SamsungWatches.length === 0 ?
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
    {SamsungWatchesPageLocation}
</div>
}

{HuaweiWatches && HuaweiWatches.length === undefined ?
  <></>
  :
  HuaweiWatches && HuaweiWatches.length === 0 ?
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
    {HuaweiWatchesPageLocation}
</div>
}

{GarminWatches && GarminWatches.length === undefined ?
  <></>
  :
  GarminWatches && GarminWatches.length === 0 ?
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
    {GarminWatchesPageLocation}
</div>
}

{ReflexActiveWatches && ReflexActiveWatches.length === undefined ?
  <></>
  :
  ReflexActiveWatches && ReflexActiveWatches.length === 0 ?
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
    {ReflexActiveWatchesPageLocation}
</div>
}

{FitbitWatches && FitbitWatches.length === undefined ?
  <></>
  :
  FitbitWatches && FitbitWatches.length === 0 ?
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
    {FitbitWatchesPageLocation}
</div>
}

{SmartWatches && SmartWatches.length === undefined ?
  <></>
  :
  SmartWatches && SmartWatches.length === 0 ?
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
    {MoreSmartWatchesPageLocation}
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

export default SmartWatches