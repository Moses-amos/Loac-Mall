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

function LuxuryWatches(props) {

  const [UserData, setUserData] = useState([])
  const [OmegaWatches, setOmegaWatches] = useState([])
  const [TagHeuerWatches, setTagHeuerWatches] = useState([])
  const [RolexWatches, setRolexWatches] = useState([])
  const [AudemarsPiguetWatches, setAudemarsPiguetWatches] = useState([])
  const [CartierWatches, setCartierWatches] = useState([])
  const [BreitlingWatches, setBreitlingWatches] = useState([])
  const [LonginesWatches, setLonginesWatches] = useState([])
  const [MoreLuxuryWatches, setMoreLuxuryWatches] = useState([])

  const [SelectTabs, setSelectTabs] = useState(0)
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
      brand: "Omega"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
    setOmegaWatches(response.data.products)
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

  const GetTagHeuerWatches = () => {
    const variable = {
        brand: "Tag Heuer"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
        setTagHeuerWatches(response.data.products)
    } else {
    }
    })
}

const GetRolexWatches = () => {
    const variable = {
        brand: "Rolex"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
        setRolexWatches(response.data.products)
    } else {
    }
    })
}

const GetAudemarsPiguetWatches = () => {
  const variable = {
      brand: "Audemars Piguet"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setAudemarsPiguetWatches(response.data.products)
  } else {
  }
  })
}

const GetCartierWatches = () => {
  const variable = {
      brand: "Cartier"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setCartierWatches(response.data.products)
  } else {
  }
  })
}

const GetBreitlingWatches = () => {
  const variable = {
      brand: "Breitling"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setBreitlingWatches(response.data.products)
  } else {
  }
  })
}

const GetLonginesWatches = () => {
  const variable = {
      brand: "Longines"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setLonginesWatches(response.data.products)
  } else {
  }
  })
}

const GetMoreLuxuryWatches = () => {
  const variable = {
      seriesName: "Luxury Watches"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setMoreLuxuryWatches(response.data.products)
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


const TagHeuerWatchesPage = TagHeuerWatches.map((product, index) => {
  return (
    <ProductCart key={index} UserData={UserData} product={product} />
    )
  })

  const TagHeuerWatchesPageLocation = TagHeuerWatches.map((product, index) => {
    if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />

      )
    }
    })

    const RolexWatchesPage = RolexWatches.map((product, index) => {
      return (
        <ProductCart key={index} UserData={UserData} product={product} />
        )
      })

      const RolexWatchesPageLocation = RolexWatches.map((product, index) => {
        if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
    
          )
        }
        })

        const OmegaWatchesPage = OmegaWatches.map((product, index) => {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
            )
          })
  
          const OmegaWatchesPageLocation = OmegaWatches.map((product, index) => {
            if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
        
              )
            }
            })

            const AudemarsPiguetWatchesPage = AudemarsPiguetWatches.map((product, index) => {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
                )
              })
      
              const AudemarsPiguetWatchesPageLocation = AudemarsPiguetWatches.map((product, index) => {
                if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
            
                  )
                }
                })

                const CartierWatchesPage = CartierWatches.map((product, index) => {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
                    )
                  })
          
                  const CartierWatchesPageLocation = CartierWatches.map((product, index) => {
                    if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                
                      )
                    }
                    })

                    const BreitlingWatchesPage = BreitlingWatches.map((product, index) => {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                        )
                      })
              
                      const BreitlingWatchesPageLocation = BreitlingWatches.map((product, index) => {
                        if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                    
                          )
                        }
                        })

                        const LonginesWatchesPage = LonginesWatches.map((product, index) => {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                            )
                          })
                  
                          const LonginesWatchesPageLocation = LonginesWatches.map((product, index) => {
                            if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                        
                              )
                            }
                            })

                            const MoreLuxuryWatchesPage = MoreLuxuryWatches.map((product, index) => {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                                )
                              })
                      
                              const MoreLuxuryWatchesPageLocation = MoreLuxuryWatches.map((product, index) => {
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
  <div className='Back_to_main_box'>
      <a href='/watches'>
      <div className='Back_to_main_content_box'>
        <span>Watches</span>
      </div>
      </a>
      
    </div>
    <div className='Category_selectTabs_box_back_to_main'>
    <div>
      <span className='Category_selectTabs_span'>Luxury Watches</span>
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

<div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(0)}}
  ><div>
    <img  
    src='https://i.imgur.com/7CpsDhJ.png'
    className={SelectTabs ===0 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Omega Brand</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(1); GetTagHeuerWatches()}}
  ><div>
    <img  
    src='https://i.imgur.com/7ZdTv7L.png'
    className={SelectTabs ===1 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Tag Heuer Brand</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(2); GetRolexWatches()}}
  ><div>
    <img  
    src='https://i.imgur.com/iZekFLh.png'
    // src='https://m.media-amazon.com/images/I/61DiSLhxIcS._AC_UY1000_.jpg'
      // src='https://chronexttime.imgix.net/V/4/V46510/V46510_1_det.png?w=570&ar=1:1&auto=format&fm=png&q=55&usm=50&usmrad=1.5&dpr=1&trim=color&fit=fill&auto=compress&bg=FFFFFF&bg-remove=true'
    // src='https://i.ebayimg.com/images/g/xDgAAOSwrCpiaCIU/s-l1200.jpg'
    // src='https://www.swisswatchexpo.com/images/custom-catalog-content/header/tag-heuer.jpg'
    className={SelectTabs ===2 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Rolex Brand</span>
  </div>
    
   </div>

   {/* <div className={SelectTabs ===3 ? 'Select_image_product_longer active_Select_image_product_longer' : "Select_image_product_longer"}
  onClick={()=> {ToggleSelectTabs(3); GetAudemarsPiguetWatches()}}
  ><div>
    <img 
     
    // src='https://watchesoff5th.com/cdn/shop/products/audemars-piguet-royal-oak-selfwinding-18k-rose-gold-black-dial-ref15500oroo1220or01-657485_800x.jpg?v=1679412439'
    src="https://cdn.shopify.com/s/files/1/0070/2732/7039/products/audemars-piguet-royal-oak-chronograph-watch-blue-dial-41mm-26331orood315cr01-871443_300x300.jpg?v=1592904289"
   className="Image_Large_size"  alt="" />
  </div>
  <div className="Image_title_box">
    <span>Audemars Piguet</span>
  </div>
   </div> */}

<div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(4); GetCartierWatches()}}
  ><div>
    <img  
    src='https://i.imgur.com/D7RJonZ.png'
    className={SelectTabs ===4 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Cartier Brand</span>
  </div>
   </div>


   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(5); GetBreitlingWatches()}}
  ><div>
    <img  
    src='https://i.imgur.com/Pl84vwN.png'
    // src='https://m.media-amazon.com/images/I/61tdbsQmX3L._AC_UY1000_.jpg'
    className={SelectTabs ===5 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Breitling Brand</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(6); GetLonginesWatches()}}
  ><div>
    <img  
    src='https://i.imgur.com/1sqGNRk.png'
    className={SelectTabs ===6 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Longines Brand</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(7); GetMoreLuxuryWatches()}}
  ><div>
    <img 
    // src='https://m.media-amazon.com/images/I/71bPNeYJ6ML._AC_SS130_.jpg'
    src='https://i.imgur.com/AeV87qw.png'
    className={SelectTabs ===7 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>More Brands</span>
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


{/* Luxury Watches */}
{OmegaWatches && OmegaWatches.length === undefined ?
  <></>
  :
  OmegaWatches && OmegaWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 0 && ToggleLocation === false ?
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
<div className={SelectTabs === 0 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {OmegaWatchesPage}
</div>
}

{TagHeuerWatches && TagHeuerWatches.length === undefined ?
  <></>
  :
  TagHeuerWatches && TagHeuerWatches.length === 0 ?
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
    {TagHeuerWatchesPage}
</div>
}

{RolexWatches && RolexWatches.length === undefined ?
  <></>
  :
  RolexWatches && RolexWatches.length === 0 ?
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
    {RolexWatchesPage}
</div>
}

{AudemarsPiguetWatches && AudemarsPiguetWatches.length === undefined ?
  <></>
  :
  AudemarsPiguetWatches && AudemarsPiguetWatches.length === 0 ?
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
    {AudemarsPiguetWatchesPage}
</div>
}

{CartierWatches && CartierWatches.length === undefined ?
  <></>
  :
  CartierWatches && CartierWatches.length === 0 ?
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
    {CartierWatchesPage}
</div>
}

{BreitlingWatches && BreitlingWatches.length === undefined ?
  <></>
  :
  BreitlingWatches && BreitlingWatches.length === 0 ?
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
    {BreitlingWatchesPage}
</div>
}

{LonginesWatches && LonginesWatches.length === undefined ?
  <></>
  :
  LonginesWatches && LonginesWatches.length === 0 ?
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
    {LonginesWatchesPage}
</div>
}

{MoreLuxuryWatches && MoreLuxuryWatches.length === undefined ?
  <></>
  :
  MoreLuxuryWatches && MoreLuxuryWatches.length === 0 ?
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
    {MoreLuxuryWatchesPage}
</div>
}



{/* Location */}
{OmegaWatches && OmegaWatches.length === undefined ?
  <></>
  :
  OmegaWatches && OmegaWatches.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 0 && ToggleLocation === true ?
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
<div className={SelectTabs === 0 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {OmegaWatchesPageLocation}
</div>
}

{TagHeuerWatches && TagHeuerWatches.length === undefined ?
  <></>
  :
  TagHeuerWatches && TagHeuerWatches.length === 0 ?
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
    {TagHeuerWatchesPageLocation}
</div>
}

{RolexWatches && RolexWatches.length === undefined ?
  <></>
  :
  RolexWatches && RolexWatches.length === 0 ?
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
    {RolexWatchesPageLocation}
</div>
}

{AudemarsPiguetWatches && AudemarsPiguetWatches.length === undefined ?
  <></>
  :
  AudemarsPiguetWatches && AudemarsPiguetWatches.length === 0 ?
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
    {AudemarsPiguetWatchesPageLocation}
</div>
}

{CartierWatches && CartierWatches.length === undefined ?
  <></>
  :
  CartierWatches && CartierWatches.length === 0 ?
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
    {CartierWatchesPageLocation}
</div>
}

{BreitlingWatches && BreitlingWatches.length === undefined ?
  <></>
  :
  BreitlingWatches && BreitlingWatches.length === 0 ?
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
    {BreitlingWatchesPageLocation}
</div>
}

{LonginesWatches && LonginesWatches.length === undefined ?
  <></>
  :
  LonginesWatches && LonginesWatches.length === 0 ?
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
    {LonginesWatchesPageLocation}
</div>
}

{MoreLuxuryWatches && MoreLuxuryWatches.length === undefined ?
  <></>
  :
  MoreLuxuryWatches && MoreLuxuryWatches.length === 0 ?
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
    {MoreLuxuryWatchesPageLocation}
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

export default LuxuryWatches