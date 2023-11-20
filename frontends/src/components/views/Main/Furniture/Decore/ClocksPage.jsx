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

function ClocksPage(props) {

    const [UserData, setUserData] = useState([])
    const [TableClocks, setTableClocks] = useState([])
    const [WallClocks, setWallClocks] = useState([])
    const [CuckooClocks, setCuckooClocks] = useState([])
    const [DigitalClocks, setDigitalClocks] = useState([])
    const [DigitalWallClocks, setDigitalWallClocks] = useState([])

    const [SelectTabs, setSelectTabs] = useState(1)
    const [Products, setProducts] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)
    const [IsLoading, setIsLoading] = useState(true)
    const [toggleConnectivity, settoggleConnectivity] = useState(1)
  
    const SetLocation = () => setToggleLocation(!ToggleLocation)

    const ToggleSelectTabs = (index) => {
      setSelectTabs(index);
    }  

    
    const ConnectivityCategory = (index) => {
      settoggleConnectivity(index);
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
        partialVisibilityGutter: 10
      }
    };
  
    useEffect(() => {
  
      const variable = {
        product: "Table Clock"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
        setTableClocks(response.data.products)
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

      const GetWallClocks = () => {
        const variable = {
            product: "Wall Clock"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
          setWallClocks(response.data.products)
        } else {
        }
        })
      }
      
      const GetCuckooClocks = () => {
        const variable = {
            product: "Cuckoo Clock"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
          setCuckooClocks(response.data.products)
        } else {
        }
        })
      }

      const GetDigitalClocks = () => {
        const variable = {
            product: "Digital Clock"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
          setDigitalClocks(response.data.products)
        } else {
        }
        })
      }

      const GetDigitalWallClocks = () => {
        const variable = {
            product: "Digital Wall Clock"
          }
      
        Axios.post('./api/product/getPageProducts', variable)
        .then(response => {
        if (response.data.success) {
        
          setDigitalWallClocks(response.data.products)
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

          const TableClocksPage = TableClocks.map((product, index) => {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
              )
            })
    
            const TableClocksPageLocation = TableClocks.map((product, index) => {
              if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                )
              }
              })

              const DigitalClocksPage = DigitalClocks.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                  )
                })
        
                const DigitalClocksPageLocation = DigitalClocks.map((product, index) => {
                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                    )
                  }
                  })


              const WallClocksPage = WallClocks.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                  )
                })
        
                const WallClocksPageLocation = WallClocks.map((product, index) => {
                  if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                    )
                  }
                  })

                  const DigitalWallClocksPage = DigitalWallClocks.map((product, index) => {
                    return (
                      <ProductCart key={index} UserData={UserData} product={product} />
                      )
                    })
            
                    const DigitalWallClocksPageLocation = DigitalWallClocks.map((product, index) => {
                      if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                      || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                      || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                      || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
                        return (
                          <ProductCart key={index} UserData={UserData} product={product} />
                        )
                      }
                      })

              const CuckooClocksPage = CuckooClocks.map((product, index) => {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
                  )
                })
        
                const CuckooClocksPageLocation = CuckooClocks.map((product, index) => {
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
  <div className='Back_to_main_box'>
      <a href='/home-decore'>
      <div className='Back_to_main_content_box'>
        <span>Decore</span>
      </div>
      </a>
      
    </div>
    <div className='Category_selectTabs_box_back_to_main'>
    <div>
      <span className='Category_selectTabs_span'>Clocks & Alarms</span>
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
  onClick={()=> {ToggleSelectTabs(1); ConnectivityCategory(1)}}
  ><div>
    <img 
    src='https://5.imimg.com/data5/SELLER/Default/2023/7/327780487/TT/SN/PX/99946172/plastic-analog-table-clock-500x500.jpeg'
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Table Clocks</span>
  </div>
    
   </div>

   <div className={SelectTabs ===2 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(2); GetWallClocks(); ConnectivityCategory(1)}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/61k6d61hP9L._AC_UF894,1000_QL80_.jpg'
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Wall Clocks</span>
  </div>
    
   </div>

   <div className={SelectTabs ===3 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(3); GetCuckooClocks(); ConnectivityCategory()}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/51ic8muUNIL.jpg'
   style={{ width: '100%', height: '110px', padding: '5px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Cuckoo Clocks</span>
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

  <div className={SelectTabs ===1? 'My_location_items_choose_box' : 'Listed_fetched_products-hide'}>
    <div 
    className={toggleConnectivity === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {ConnectivityCategory(1)}}>
      <span>Analog</span>
    </div>
    <div 
    className={toggleConnectivity === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {ConnectivityCategory(2); ; GetDigitalClocks()}}>
      <span>Digital</span>
    </div>
    </div>

    <div className={SelectTabs ===2 ? 'My_location_items_choose_box' : 'Listed_fetched_products-hide'}>
    <div 
    className={toggleConnectivity === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {ConnectivityCategory(1)}}>
      <span>Analog</span>
    </div>
    <div 
    className={toggleConnectivity === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {ConnectivityCategory(2); ; GetDigitalWallClocks()}}>
      <span>Digital</span>
    </div>
    </div>

    </div>


<div className='ListedItems_container'>

{TableClocks && TableClocks.length === undefined ?
  <></>
  :
  TableClocks && TableClocks.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleConnectivity === 1 ?
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
<div className={SelectTabs === 1 && ToggleLocation === false && toggleConnectivity === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {TableClocksPage}
</div>
}

{DigitalClocks && DigitalClocks.length === undefined ?
  <></>
  :
  DigitalClocks && DigitalClocks.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === false && toggleConnectivity === 2 ?
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
<div className={SelectTabs === 1 && ToggleLocation === false && toggleConnectivity === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {DigitalClocksPage}
</div>
}

{WallClocks && WallClocks.length === undefined ?
  <></>
  :
  WallClocks && WallClocks.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false && toggleConnectivity === 1 ?
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
<div className={SelectTabs === 2 && ToggleLocation === false && toggleConnectivity === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {WallClocksPage}
</div>
}

{DigitalWallClocks && DigitalWallClocks.length === undefined ?
  <></>
  :
  DigitalWallClocks && DigitalWallClocks.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === false && toggleConnectivity === 2 ?
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
<div className={SelectTabs === 2 && ToggleLocation === false && toggleConnectivity === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {DigitalWallClocksPage}
</div>
}

{CuckooClocks && CuckooClocks.length === undefined ?
  <></>
  :
  CuckooClocks && CuckooClocks.length === 0 ?
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
  {CuckooClocksPage}
</div>
}


{/* Location */}

{TableClocks && TableClocks.length === undefined ?
  <></>
  :
  TableClocks && TableClocks.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleConnectivity === 1 ?
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
<div className={SelectTabs === 1 && ToggleLocation === true && toggleConnectivity === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {TableClocksPageLocation}
</div>
}

{DigitalClocks && DigitalClocks.length === undefined ?
  <></>
  :
  DigitalClocks && DigitalClocks.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 1 && ToggleLocation === true && toggleConnectivity === 2 ?
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
<div className={SelectTabs === 1 && ToggleLocation === true && toggleConnectivity === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {DigitalClocksPageLocation}
</div>
}

{WallClocks && WallClocks.length === undefined ?
  <></>
  :
  WallClocks && WallClocks.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true && toggleConnectivity === 1 ?
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
<div className={SelectTabs === 2 && ToggleLocation === true && toggleConnectivity === 1 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {WallClocksPageLocation}
</div>
}

{DigitalWallClocks && DigitalWallClocks.length === undefined ?
  <></>
  :
  DigitalWallClocks && DigitalWallClocks.length === 0 ?
  <>
  {IsLoading === undefined ?
  <></>
  :
  IsLoading === true ?
  <></>
  :
  <>
  {SelectTabs === 2 && ToggleLocation === true && toggleConnectivity === 2 ?
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
<div className={SelectTabs === 2 && ToggleLocation === true && toggleConnectivity === 2 ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
  {DigitalWallClocksPageLocation}
</div>
}

{CuckooClocks && CuckooClocks.length === undefined ?
  <></>
  :
  CuckooClocks && CuckooClocks.length === 0 ?
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
  {CuckooClocksPageLocation}
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

export default ClocksPage