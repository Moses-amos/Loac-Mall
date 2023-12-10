import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import { Empty } from 'antd';
import Carousel from "react-multi-carousel";
import '../../00Components/pages.css'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../../00Components/Cards/ProductCart/ProductCart'

function Monitors(props) {

  const [UserData, setUserData] = useState([])
  const [MonitorItems, setMonitorItems] = useState([])

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

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  })

  useEffect(() => {
    const variable = {
      product: "Monitor"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
    setMonitorItems(response.data.products)
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

      const MonitorsPage = MonitorItems.map((product, index) => {
        return (
              <ProductCart key={index} UserData={UserData} product={product} />
        )
    
        })

        const MonitorsPageLocation = MonitorItems.map((product, index) => {
          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
            )
          }
          })
  
      const ThirtyUnderPage = MonitorItems.map((product, index) => {
        if (product.displaySize === "32 inches & Under") {
        return (
              <ProductCart key={index} UserData={UserData} product={product} />
        )
        }
        
        })

        const ThirtyUnderPageLocation = MonitorItems.map((product, index) => {
          if (product.displaySize === "32 inches & Under" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
           && product.Gobabis === true))) {
          return (
                <ProductCart key={index} UserData={UserData} product={product} />
          )
          }
          
          })
  
        const ThirtyUpPage = MonitorItems.map((product, index) => {
          if (product.displaySize === "33 inches & Up") {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          }
          
          })

          const ThirtyUpPageLocation = MonitorItems.map((product, index) => {
            if (product.displaySize === "33 inches & Up" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
             && product.Gobabis === true))) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
    
            )
            }
            
            })

              const MonitorsCurvedPage = MonitorItems.map((product, index) => {
                if (product.functions === "Curved") {
                return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })

                const MonitorsCurvedPageLocation = MonitorItems.map((product, index) => {
                  if (product.functions === "Curved" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                  || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                  || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                  || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                   && product.Gobabis === true))) {
                  return (
                <ProductCart key={index} UserData={UserData} product={product} />
    
                  )
                  }
                  
                  })
          
              const ThirtyUnderCurvedPage = MonitorItems.map((product, index) => {
                if (product.displaySize === "32 inches & Under" && product.functions === "Curved") {
                return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })

                const ThirtyUnderCurvedPageLocation = MonitorItems.map((product, index) => {
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
          
                const ThirtyUpCurvedPage = MonitorItems.map((product, index) => {
                  if (product.displaySize === "33 inches & Up" && product.functions === "Curved") {
                  return (
                    <ProductCart key={index} UserData={UserData} product={product} />
  
                  )
                  }
                  
                  })

                  const ThirtyUpCurvedPageLocation = MonitorItems.map((product, index) => {
                    if ((product.displaySize === "33 inches & Up" && product.functions === "Curved") && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
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
    <div className='Category_selectTabs_box'>
    <div>
      <span className='Category_selectTabs_span'>Monitors</span>
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
  onClick={()=> {ToggleSelectTabs(1)}}
  ><div>
    <img 
    src='https://m.media-amazon.com/images/I/81o-jZFisVL.jpg'
   style={{ width: '100%', height: '140px', padding: '0p 0px 7px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>All Monitors</span>
  </div>
    
   </div>

   <div className={SelectTabs ===2 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(2)}}
  ><div>
    <img 
    src='https://i.imgur.com/iQkQbKj.png'
   style={{ width: '100%', height: '140px', padding: '0p 0px 7px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>32 inch & Under</span>
  </div>
    
   </div>

   <div className={SelectTabs ===3 ? 'Select_image_product active_Select_image_product' : "Select_image_product"}
  onClick={()=> {ToggleSelectTabs(3)}}
  ><div>
    <img 
    src='https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/peripherals/output-devices/dell/monitors/u3423we/media-gallery/monitor-u3423we-silver-gallery-2.psd?fmt=pjpg&pscan=auto&scl=1&wid=3906&hei=2333&qlt=100,1&resMode=sharp2&size=3906,2333&chrss=full&imwidth=5000'
   style={{ width: '100%', height: '140px', padding: '0p 0px 7px 0px'}} alt="" />
  </div>
  <div className="Image_title_box">
    <span>33 inch & Up</span>
  </div>
   </div>

</Carousel>

    </div>
    </div>
  </div>

  <div className='My_location_items_options_box'>
    <div className='My_location_items_choose_box'>
    <div className='My_location_choose_box'>
      <span>Choose</span>
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

    {/* <div className='My_location_items_choose_box'>
    <div 
    className={toggleMemorySizeDesktop === 1 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryDesktopCategory(1)}}>
      <span>All</span>
    </div>
    <div 
    className={toggleMemorySizeDesktop === 2 ? 'Item_options_choose_box active-Item_options_choose_box' : 'Item_options_choose_box'}
    onClick={()=> {MemoryDesktopCategory(2)}}>
      <span>Curved</span>
    </div>
    </div> */}

  </div>

  <div className='ListedItems_container'>

  {MonitorItems && MonitorItems.length === undefined ?
  <></>
  :
  MonitorItems && MonitorItems.length === 0 ?
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
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
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
  {MonitorsPage}
</div>
}

{MonitorItems && MonitorItems.length === undefined ?
  <></>
  :
  MonitorItems && MonitorItems.length === 0 ?
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
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
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
  {ThirtyUnderPage}
</div>
}

{MonitorItems && MonitorItems.length === undefined ?
  <></>
  :
  MonitorItems && MonitorItems.length === 0 ?
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
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
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
  {ThirtyUpPage}
</div>
}

{/* Location */}
{MonitorItems && MonitorItems.length === undefined ?
  <></>
  :
  MonitorItems && MonitorItems.length === 0 ?
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
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
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
  {MonitorsPageLocation}
</div>
}

{MonitorItems && MonitorItems.length === undefined ?
  <></>
  :
  MonitorItems && MonitorItems.length === 0 ?
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
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
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
  {ThirtyUnderPageLocation}
</div>
}

{MonitorItems && MonitorItems.length === undefined ?
  <></>
  :
  MonitorItems && MonitorItems.length === 0 ?
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
  justifyContent: 'center', background: '#fff', borderBottomRightRadius: '10px', borderBottomLeftRadius: '10px'
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
  {ThirtyUpPageLocation}
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

export default Monitors