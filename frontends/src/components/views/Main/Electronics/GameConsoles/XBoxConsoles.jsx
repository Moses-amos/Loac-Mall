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

function XBoxConsoles(props) {

    const [UserData, setUserData] = useState([])
    const [XBoxSeries, setXBoxSeries] = useState([])
    const [XBoxOne, setXBoxOne] = useState([])
    const [XBoxThreeSixty, setXBoxThreeSixty] = useState([])

    const [toggleConsoleModel, settoggleConsoleModel] = useState(0)
    const [SelectTabs, setSelectTabs] = useState(1)
    const [Products, setProducts] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)
    const [IsLoading, setIsLoading] = useState(true)
  
    const SetLocation = () => setToggleLocation(!ToggleLocation)
  
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
          product: "Xbox Series"
        }
    
      Axios.post('./api/product/getPageProducts', variable)
      .then(response => {
      if (response.data.success) {
        setXBoxSeries(response.data.products)
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

      const GetXBoxOne = () => {
        const variable = {
            product: "Xbox One"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
          setXBoxOne(response.data.products)
        } else {
        }
        })
      }
      
      const GetXBoxThreeSixty = () => {
        const variable = {
            product: "Xbox 360"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
          setXBoxThreeSixty(response.data.products)
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


            const XBoxSeriesSPage = XBoxSeries.map((product, index) => {
              if (product.modelName === "Series S") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
        
              )
              }
              
              })
        
              const XBoxSeriesSPageLocation = XBoxSeries.map((product, index) => {
                if (product.modelName === "Series S" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
          
                )
                }
                
                })


                const XBoxSeriesXPage = XBoxSeries.map((product, index) => {
                  if (product.modelName === "Series X") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
            
                  )
                  }
                  
                  })
            
                  const XBoxSeriesXPageLocation = XBoxSeries.map((product, index) => {
                    if (product.modelName === "Series X" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
              
                    )
                    }
                    
                    })


                  const XBoxOneSDigitalPage = XBoxOne.map((product, index) => {
                  if (product.modelName === "One S Digital") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
            
                  )
                  }
                  
                  })
            
                  const XBoxOneSDigitalPageLocation = XBoxOne.map((product, index) => {
                    if (product.modelName === "One S Digital" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                    || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                    || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                    || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                     && product.Gobabis === true))) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
              
                    )
                    }
                    
                    })


                    const XBoxOneXPage = XBoxOne.map((product, index) => {
                      if (product.modelName === "One X") {
                      return (
                        <ProductCart key={index} UserData={UserData} product={product} />
                
                      )
                      }
                      
                      })
                
                      const XBoxOneXPageLocation = XBoxOne.map((product, index) => {
                        if (product.modelName === "One X" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                        || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                        || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                        || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                         && product.Gobabis === true))) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                  
                        )
                        }
                        
                        })

                        const XBoxOneSPage = XBoxOne.map((product, index) => {
                          if (product.modelName === "One S") {
                          return (
                            <ProductCart key={index} UserData={UserData} product={product} />
                    
                          )
                          }
                          
                          })
                    
                          const XBoxOneSPageLocation = XBoxOne.map((product, index) => {
                            if (product.modelName === "One S" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                             && product.Gobabis === true))) {
                            return (
                              <ProductCart key={index} UserData={UserData} product={product} />
                      
                            )
                            }
                            
                            })

                            const XBoxOnePage = XBoxOne.map((product, index) => {
                              if (product.modelName === "Xbox One") {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                        
                              )
                              }
                              
                              })
                        
                              const XBoxOnePageLocation = XBoxOne.map((product, index) => {
                                if (product.modelName === "Xbox One" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                                 && product.Gobabis === true))) {
                                return (
                                  <ProductCart key={index} UserData={UserData} product={product} />
                          
                                )
                                }
                                
                                })

                            const XBoxThreeSixtyPage = XBoxThreeSixty.map((product, index) => {
                              return (
                                <ProductCart key={index} UserData={UserData} product={product} />
                        
                              )
                              })
                        
                              const XBoxThreeSixtyPageLocation = XBoxThreeSixty.map((product, index) => {
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
      <span className='Category_selectTabs_span'>Xbox Consoles</span>
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
  onClick={()=> {ToggleSelectTabs(1); ConsoleModelCategory(0)}}
  ><div>
    <img 
    src='https://pbs.twimg.com/media/F56dxeNXcAARkMh?format=png&name=small'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Xbox Series</span>
  </div>
    
   </div>

   <div className={SelectTabs ===2 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(2); GetXBoxOne(); ConsoleModelCategory(0)}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/61RA2sUPu+L._AC_UF1000,1000_QL80_.jpg'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Xbox One</span>
  </div>
    
   </div>

   <div className={SelectTabs ===3 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(3); GetXBoxThreeSixty(); ConsoleModelCategory()}}
  ><div>
    <img 
    src='https://pbs.twimg.com/media/F56g9AiWIAAcoqY?format=jpg&name=small'
   className="Image_Mid_size" alt="" />
  </div>
  <div className="Image_title_box">
    <span>Xbox 360</span>
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
  onClick={()=> {ToggleSelectTabs(1); ConsoleModelCategory(0)}}
  ><div>
    <img  
    src='https://i.imgur.com/g0XIOEO.png'
    className={SelectTabs ===1 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Xbox Series</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(2); GetXBoxOne(); ConsoleModelCategory(0)}}
  ><div>
    <img  
    src='https://i.imgur.com/Q1hhSxt.png'
    className={SelectTabs ===2 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Xbox One</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(3); GetXBoxThreeSixty(); ConsoleModelCategory()}}
  ><div>
    <img  
    src='https://i.imgur.com/joBquQe.png'
    className={SelectTabs ===3 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Xbox 360</span>
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
            <span>Series S</span>
          </div>
    <div className={toggleConsoleModel ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ConsoleModelCategory(1)}} >
            <span>Series X</span>
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
            <span>One S Digital</span>
          </div>
    <div className={toggleConsoleModel ===1 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ConsoleModelCategory(1)}} >
            <span>One X</span>
          </div>
    <div className={toggleConsoleModel ===2 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ConsoleModelCategory(2)}} >
            <span>One S</span>
          </div>
          <div className={toggleConsoleModel ===3 ? 'Phone_option_selected_style active-Ram_option_selected_style' : "Phone_option_selected_style"}
        onClick={()=> {ConsoleModelCategory(3)}} >
            <span>Standard</span>
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
  </div>

<div className='ListedItems_container'>

{/* Series S Console */}
{XBoxSeries && XBoxSeries.length === undefined ?
  <></>
  :
  XBoxSeries && XBoxSeries.length === 0 ?
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
    {XBoxSeriesSPage}
</div>
}

{XBoxSeries && XBoxSeries.length === undefined ?
  <></>
  :
  XBoxSeries && XBoxSeries.length === 0 ?
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
    {XBoxSeriesSPageLocation}
</div>
}


{/* Series X Console */}
{XBoxSeries && XBoxSeries.length === undefined ?
  <></>
  :
  XBoxSeries && XBoxSeries.length === 0 ?
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
    {XBoxSeriesXPage}
</div>
}

{XBoxSeries && XBoxSeries.length === undefined ?
  <></>
  :
  XBoxSeries && XBoxSeries.length === 0 ?
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
    {XBoxSeriesXPageLocation}
</div>
}


{/* One S Digital Console */}
{XBoxOne && XBoxOne.length === undefined ?
  <></>
  :
  XBoxOne && XBoxOne.length === 0 ?
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
    {XBoxOneSDigitalPage}
</div>
}

{XBoxOne && XBoxOne.length === undefined ?
  <></>
  :
  XBoxOne && XBoxOne.length === 0 ?
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
    {XBoxOneSDigitalPageLocation}
</div>
}


{/* One X Console */}
{XBoxOne && XBoxOne.length === undefined ?
  <></>
  :
  XBoxOne && XBoxOne.length === 0 ?
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
    {XBoxOneXPage}
</div>
}

{XBoxOne && XBoxOne.length === undefined ?
  <></>
  :
  XBoxOne && XBoxOne.length === 0 ?
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
    {XBoxOneXPageLocation}
</div>
}


{/* One S Console */}
{XBoxOne && XBoxOne.length === undefined ?
  <></>
  :
  XBoxOne && XBoxOne.length === 0 ?
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
    {XBoxOneSPage}
</div>
}

{XBoxOne && XBoxOne.length === undefined ?
  <></>
  :
  XBoxOne && XBoxOne.length === 0 ?
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
    {XBoxOneSPageLocation}
</div>
}

{/* One S Console */}
{XBoxOne && XBoxOne.length === undefined ?
  <></>
  :
  XBoxOne && XBoxOne.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleConsoleModel === 3 ) && ToggleLocation === false ?
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
<div className={(SelectTabs === 2 && toggleConsoleModel === 3 ) && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {XBoxOnePage}
</div>
}

{XBoxOne && XBoxOne.length === undefined ?
  <></>
  :
  XBoxOne && XBoxOne.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {(SelectTabs === 2 && toggleConsoleModel === 3 ) && ToggleLocation === true ?
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
<div className={(SelectTabs === 2 && toggleConsoleModel === 3 ) && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {XBoxOnePageLocation}
</div>
}


{/* Xbox 360 Console */}
{XBoxThreeSixty && XBoxThreeSixty.length === undefined ?
  <></>
  :
  XBoxThreeSixty && XBoxThreeSixty.length === 0 ?
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
    {XBoxThreeSixtyPage}
</div>
}

{XBoxThreeSixty && XBoxThreeSixty.length === undefined ?
  <></>
  :
  XBoxThreeSixty && XBoxThreeSixty.length === 0 ?
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
    {XBoxThreeSixtyPageLocation}
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

export default XBoxConsoles