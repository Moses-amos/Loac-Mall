import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import { Empty } from 'antd';
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

import '../00Components/pages.css'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import ProductCart from '../00Components/Cards/ProductCart/ProductCart'

function BluetoothSpeakersPage(props) {

  const [UserData, setUserData] = useState([])
  const [Speakers, setSpeakers] = useState([])
  const [JBLSpeakers, setJBLSpeakers] = useState([])
  const [VolkanoSpeakers, setVolkanoSpeakers] = useState([])
  const [SonySpeakers, setSonySpeakers] = useState([])
  const [OtherSpeakers, setOtherSpeakers] = useState([])

  const [SelectTabs, setSelectTabs] = useState(1)
  const [Products, setProducts] = useState([])
  const [ToggleLocation, setToggleLocation] = useState(false)
  const [IsLoading, setIsLoading] = useState(true)

const [SearchTerms, setSearchTerms] = useState("")
const [Skip, setSkip] = useState(0)
const [Limit, setLimit] = useState(8)
const [PostSize, setPostSize] = useState()
const [searchResults, setSearchResults] = useState(false)

const clickSearch = () => setSearchResults(!searchResults)

  const SetLocation = () => setToggleLocation(!ToggleLocation)

  const ToggleSelectTabs = (index) => {
    setSelectTabs(index);
  }  

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
  })

  // const responsive = {
  //   superLargeDesktop: {
  //     // the naming can be any, depends on you.
  //     breakpoint: { max: 4000, min: 3000 },
  //     items: 6,
  //     slidesToSlide: 3,
  //     partialVisibilityGutter: 40
  //   },
  //   desktop: {
  //     breakpoint: { max: 3000, min: 1024 },
  //     items: 6,
  //     slidesToSlide: 3,
  //     partialVisibilityGutter: 30
  //   },
  //   tablet: {
  //     breakpoint: { max: 1024, min: 600 },
  //     items: 4,
  //     slidesToSlide: 3,
  //     partialVisibilityGutter: 20
  //   },
  //   mobile: {
  //     breakpoint: { max: 600, min: 0 },
  //     items: 3,
  //     slidesToSlide: 2,
  //   }
  // };

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
      product: "Bluetooth Speaker"
    }

  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setSpeakers(response.data.products)
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

  useEffect(() => {

    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: SearchTerms
      }

      if (props.user.search === undefined || props.user.search === "") {
        setSearchTerms("")
      } else if(props.user.search !== "" || props.user.search !== undefined) {
        setSearchTerms(props.user.search)
        getProducts(variables)
      }

  }, [props.user.search])


  const GetJBL = () => {
    const variable = {
        seriesName: "JBL"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setJBLSpeakers(response.data.products)
    } else {
    }
    })
  }

  const GetVolkano = () => {
    const variable = {
        brand: "Volkano"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setVolkanoSpeakers(response.data.products)
    } else {
    }
    })
  }

  const GetSony = () => {
    const variable = {
        brand: "Sony"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setSonySpeakers(response.data.products)
    } else {
    }
    })
  }

  const GetOther = () => {
    const variable = {
        brand: "Other Bluetooth Speakers"
      }
  
    Axios.post('./api/product/getPageProducts', variable)
    .then(response => {
    if (response.data.success) {
    
      setOtherSpeakers(response.data.products)
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

      const AllSpeakersPage = Speakers.map((product, index) => {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
          )
        })

        const AllSpeakersPageLocation = Speakers.map((product, index) => {
          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
      
            )
          }
          })
  
        const JBLSpeakersPage = JBLSpeakers.map((product, index) => {
          return (
            <ProductCart key={index} UserData={UserData} product={product} />
  
          )
          
          })

          const JBLSpeakersPageLocation = JBLSpeakers.map((product, index) => {
            if (product.brand === "JBL" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
            || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
            || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
            || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
             && product.Gobabis === true))) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
        
            )
            }
            
            })

          const VolkanoSpeakersPage = VolkanoSpeakers.map((product, index) => {
            if (product.brand === "Volkano") {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
  
            )
            }
            
            })

            const VolkanoSpeakersPageLocation = VolkanoSpeakers.map((product, index) => {
              if (product.brand === "Volkano" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
              || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
              || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
              || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
               && product.Gobabis === true))) {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
          
              )
              }
              
              })
  
            const SonySpeakersPage = SonySpeakers.map((product, index) => {
              if (product.brand === "Sony") {
              return (
                <ProductCart key={index} UserData={UserData} product={product} />
  
              )
              }
              
              })

              const SonySpeakersPageLocation = SonySpeakers.map((product, index) => {
                if (product.brand === "Sony" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
                || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
                || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
                || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis"
                 && product.Gobabis === true))) {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
            
                )
                }
                
                })
  
              const UnlistedSpeakersPage = OtherSpeakers.map((product, index) => {
                if (product.seriesName === "Other Bluetooth Speakers") {
                return (
                  <ProductCart key={index} UserData={UserData} product={product} />
  
                )
                }
                
                })

                const UnlistedSpeakersPageLocation = OtherSpeakers.map((product, index) => {
                  if (product.seriesName === "Other Bluetooth Speakers" && ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
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
      <span className='Category_selectTabs_span'>Bluetooth Speakers</span>
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
  onClick={()=> {ToggleSelectTabs(1)}}
  ><div>
    <img  
    src='https://i.imgur.com/6cvCsug.png'
    className={SelectTabs ===1 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>All</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(2); GetJBL()}}
  ><div>
    <img  
    src='https://i.imgur.com/BPKIyaK.png'
    className={SelectTabs ===2 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>JBL</span>
  </div>
    
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(3); GetVolkano()}}
  ><div>
    <img  
    src='https://i.imgur.com/vwmQqaf.png'
    className={SelectTabs ===3 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Volkano</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(4); GetSony()}}
  ><div>
    <img  src="https://i.imgur.com/ZXOXs8L.png"
   className={SelectTabs ===4 ? "Image_Background_small_size_active" : 'Image_Background_small_size'} alt="" />
   </div>
  <div className="Image_title_box">
    <span>Sony</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(6);}}
  ><div>
    <img  
    src='https://i.imgur.com/derU4rT.png'
    className={SelectTabs ===6 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Orion</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(7); }}
  ><div>
    <img  
    src='https://trysonos.sg/cdn/shop/products/move-hero_bb13c2ef-0e06-46de-a73d-b012b9c2af0d.png?v=1613456592'
    className={SelectTabs ===7 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
    </div>
  <div className="Image_title_box">
    <span>Sonos</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(8);}}
  ><div>
    <img  
    src='https://i.imgur.com/AdKI158.png'
    className={SelectTabs ===8 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>Bose</span>
  </div>
   </div>

   <div className='Select_image_product_longer'
  onClick={()=> {ToggleSelectTabs(5); GetOther()}}
  ><div>
    <img  
    src='https://i.imgur.com/BGTLyja.png'
    className={SelectTabs ===5 ? "Image_Background_size_active" : 'Image_Background_size'} alt="" />
  </div>
  <div className="Image_title_box">
    <span>More Brands</span>
  </div>
   </div>


</Carousel>

    </div>

    <div className={SelectTabs ===1 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Speaker Brands</span>
    </div>
    </div>

    <div className={SelectTabs ===2 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>JBL Brand</span>
    </div>
    </div>

    <div className={SelectTabs === 3 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Volkano Brand</span>
    </div>
    </div>

    <div className={SelectTabs ===4 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>Sony Brand</span>
    </div>
    </div>

    <div className={SelectTabs ===5 ? 'Select_Store_tabs_box' : 'Listed_fetched_products-hide'}>
    <div className="Item_option_selected_style">
        <span>More Brands</span>
    </div>
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



{Speakers && Speakers.length === undefined ?
  <></>
  :
  Speakers && Speakers.length === 0 ?
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
    {AllSpeakersPage}
</div>
}


{JBLSpeakers && JBLSpeakers.length === undefined ?
  <></>
  :
  JBLSpeakers && JBLSpeakers.length === 0 ?
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
    {JBLSpeakersPage}
</div>
}

{VolkanoSpeakers && VolkanoSpeakers.length === undefined ?
  <></>
  :
  VolkanoSpeakers && VolkanoSpeakers.length === 0 ?
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
    {VolkanoSpeakersPage}
</div>
}

{SonySpeakers && SonySpeakers.length === undefined ?
  <></>
  :
  SonySpeakers && SonySpeakers.length === 0 ?
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
<div className={SelectTabs === 4 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {SonySpeakersPage}
</div>
}

{OtherSpeakers && OtherSpeakers.length === undefined ?
  <></>
  :
  OtherSpeakers && OtherSpeakers.length === 0 ?
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
<div className={SelectTabs === 5 && ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {UnlistedSpeakersPage}
</div>
}


{/* Location */}
{Speakers && Speakers.length === undefined ?
  <></>
  :
  Speakers && Speakers.length === 0 ?
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
    {AllSpeakersPageLocation}
</div>
}


{JBLSpeakers && JBLSpeakers.length === undefined ?
  <></>
  :
  JBLSpeakers && JBLSpeakers.length === 0 ?
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
    {JBLSpeakersPageLocation}
</div>
}

{VolkanoSpeakers && VolkanoSpeakers.length === undefined ?
  <></>
  :
  VolkanoSpeakers && VolkanoSpeakers.length === 0 ?
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
    {VolkanoSpeakersPageLocation}
</div>
}

{SonySpeakers && SonySpeakers.length === undefined ?
  <></>
  :
  SonySpeakers && SonySpeakers.length === 0 ?
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
<div className={SelectTabs === 4 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {SonySpeakersPageLocation}
</div>
}

{OtherSpeakers && OtherSpeakers.length === undefined ?
  <></>
  :
  OtherSpeakers && OtherSpeakers.length === 0 ?
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
<div className={SelectTabs === 5 && ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
    {UnlistedSpeakersPageLocation}
</div>
}


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

export default BluetoothSpeakersPage