import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import './homepage.css'
// import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import Carousel from "react-multi-carousel";
// import NoAdSlider from './components/ImageSlider/NoAdSlider'
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart';

function _Home(props) {

const [Products, setProducts] = useState([])
const [UserData, setUserData] = useState([])

const [ToggleLocation, setToggleLocation] = useState(false)

const [SearchTerms, setSearchTerms] = useState("")
const [Skip, setSkip] = useState(0)
const [Limit, setLimit] = useState(8)
const [PostSize, setPostSize] = useState()
const [searchResults, setSearchResults] = useState(false)

const clickSearch = () => setSearchResults(!searchResults)

const SetLocation = () => setToggleLocation(!ToggleLocation)

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
    slidesToSlide: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 600 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  }
};

useEffect(() => {

Axios.get('/api/users/getUser')
.then(response => {
  if (response.data.success) {
    setUserData(response.data.doc)
  }
})

})


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

    if (props.user.search === undefined || props.user.search === "") {
      setSearchTerms("")
    } else if(props.user.search !== "" || props.user.search !== undefined) {
      const variables = {
        skip: 0,
        limit: Limit,
        filters: Filters,
        searchTerm: props.user.search
        }

      setSearchTerms(props.user.search)
      getProducts(variables)
    }

}, [props.user.search])


return (
  <div style={{ display: 'block'}}>
  {SearchTerms === "" ?
      <div style={{ display: 'block', background: '#fff'}}>
      <div className='Home_page_container'>
        <div className='Main_ad_menu'>
        <div className='Main_ad_center_box'>
          {/* <NoAdSlider /> */}
          <div className='Home_ad_page_box'>
            <div className='Home_ad_left_box'>

            <div style={{ width: '100%', height: '100%', borderRadius: '10px', background: 'lightgray'}}>
            <img alt=""
            src='https://i.imgur.com/yqQQjzi.jpg'
            className='Homepage_large_image' />            
          </div>
            </div>

            {/* <div className='Home_ad_right_box'>
              <div className='Home_ad_top_right'>
                <div style={{ width: '100%', height: '210px', borderRadius: '10px', background: 'lightgray'}}>
            <img alt="" style={{ width: '100%', height: '210px', borderRadius: '10px', background: 'lightgray'}}
            src='https://pbs.twimg.com/media/F62uGGZWMAAiu2I?format=jpg&name=medium'
            />            
          </div>
          </div>

          <div className='Home_ad_bottom_right'>
          <div style={{ width: '100%', height: '210px', borderRadius: '10px', background: 'lightgray'}}>
            <img alt="" style={{ width: '100%', height: '210px', borderRadius: '10px', background: 'lightgray'}}
            src='https://pbs.twimg.com/media/F7qWcW0XEAAuwUE?format=jpg&name=900x900'
             />            
          </div>
          </div>
                
            </div> */}
          </div>

        </div>

        </div>

        <div className='Home_images_top_boxes'>

          <div className='Home_image_box'>
          <a href='/smart-watches' style={{width: '100%', height: '250px', position: 'relative'}}>
              <div className='home_front_image'>
                  <img  style={{width: '100%', height: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}
                   src='https://i.imgur.com/D6mE7SF.jpg'  alt="" />
              </div>
            </a>
            <div className='home_front_image_title'>
              <a href='/smart-watches' style={{width: '100%', height: '50px'}}> 
              <span className='home_front_image_title_span'>Smart Watches</span>
              </a>
                
              </div>
          </div>

          <div className='Home_image_box'>
          <a style={{width: '100%', height: '250px', position: 'relative'}}>
              <div className='home_front_image'>
                  <img  style={{width: '100%', height: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}
                   src="https://pbs.twimg.com/media/F7qZdxZXUAA8OUZ?format=jpg&name=large" alt="" />
              </div>
            </a>
            <div className='home_front_image_title'>
              <a style={{width: '100%', height: '50px'}}> 
              <span className='home_front_image_title_span'>Coming Soon</span>
              </a>
                
              </div>
          </div>

          <div className='Home_image_box_mobile'>
          <a href='/explore-sneakers' style={{width: '100%', height: '250px', position: 'relative'}}>
              <div className='home_front_image'>
                  <img  style={{width: '100%', height: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}
                   src="https://i.imgur.com/ke5B4PW.jpg" alt="" />
              </div>
            </a>
            <div className='home_front_image_title'>
              <a style={{width: '100%', height: '50px'}} href='/explore-sneakers'> 
              <span className='home_front_image_title_span'>Popular Shoes</span>
              </a>
                
              </div>
          </div>

          <div className='Home_image_box_mobile'>
          <a href='/room-chairs' style={{width: '100%', height: '250px', position: 'relative'}}>
              <div className='home_front_image'>
                  <img  style={{width: '100%', height: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}
                   src="https://i.imgur.com/j8nlTB6.jpg" alt="" />
              </div>
            </a>
            <div className='home_front_image_title'>
              <a style={{width: '100%', height: '50px'}} href='/room-chairs'> 
              <span className='home_front_image_title_span'>Lounge Suites</span>
              </a>
                
              </div>
          </div>

        </div>

        <div className='Home_images_bottom_boxes'>
          <div className='Home_image_box'>
          <a href='/explore-sneakers' style={{width: '100%', height: '250px', position: 'relative'}}>
              <div className='home_front_image'>
                  <img  style={{width: '100%', height: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}
                   src="https://i.imgur.com/ke5B4PW.jpg" alt="" />
              </div>
            </a>
            <div className='home_front_image_title'>
              <a style={{width: '100%', height: '50px'}} href='/explore-sneakers'> 
              <span className='home_front_image_title_span'>Popular Shoes</span>
              </a>
                
              </div>
          </div>

          <div className='Home_image_box'>
          <a href='/room-chairs' style={{width: '100%', height: '250px', position: 'relative'}}>
              <div className='home_front_image'>
                  <img  style={{width: '100%', height: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}
                   src="https://i.imgur.com/j8nlTB6.jpg" alt="" />
              </div>
            </a>
            <div className='home_front_image_title'>
              <a style={{width: '100%', height: '50px'}} href='/room-chairs'> 
              <span className='home_front_image_title_span'>Lounge Suites</span>
              </a>
                
              </div>
          </div>
        </div>

        <div className='Popular_product_categories'>
          <h2 className='Home_page_categories_text'>Trending Items</h2></div>

        <div className='Popular_product_categories_container'>
        <div className='Popular_categories_resize_box'>
       <div className='Category_box_top'>
                <a href='/laptops'>
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/JX14V8v.png'
                />
              </div>
              <div className='Category_box_bottom_section'>
                <span className='bottom_section_span'>Laptops</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
                <a 
                href='/desktops'
                >
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/fySZNH7.png'
           />
              </div>
              <div className='Category_box_bottom_section'>
                <span className='bottom_section_span'>Desktops</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
              <a 
               href="/tvs"
              >
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
              src='https://i.imgur.com/hZMrs46.png'
              />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>Flatscreens</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
              <a 
              href='/iphones'
              >
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/HFs78ZL.png'
                />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>iPhones</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
                <a 
                href='/sneakers'
                >
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/QvECNRR.png'
                />
              </div>
              <div className='Category_box_bottom_section'>
                <span className='bottom_section_span'>Sneakers</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
              <a 
              href="/earphones-audio"
              >
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
              src='https://i.imgur.com/wSyDYeZ.png'
              />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>Headphones</span>
              </div>
              </a>
              </div>
              
              
               <div className='Category_box_top'>
                <a 
                  href='/living-room'
                >
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/PlrHS1N.png'
                />
              </div>
              <div className='Category_box_bottom_section'>
                <span className='bottom_section_span'>Furniture</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
              <a href="/home-decore">
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
              src='https://i.imgur.com/Dbf2bdH.png'
              />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>Decore</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
              <a href='/kitchen-appliances'>
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/2jLYlWT.png'
                />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>Appliances</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
              <a href="/portable-speakers">
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
              src='https://i.imgur.com/ZPOqRns.png'
              />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>Speakers</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
              <a 
              href="/watches"
              >
                <div className='Category_box_top_image'>
                <img loading='lazy' style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/l1ZJs49.png'
              />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>Watches</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
              <a 
                 href='/cameras'
              >
                <div className='Category_box_top_image'>
                <img loading='lazy' style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/F4ES6V5.png'
                />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>Cameras</span>
              </div>
              </a>
              </div>
              
              <div className='Category_box_top'>
              <a 
              href='/playStation-consoles'
              >
                <div className='Category_box_top_image'>
                <img loading='lazy' style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/WOap4g9.png'
                />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>PlayStation</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
              <a 
              href='/xbox-consoles'
              >
                <div className='Category_box_top_image'>
                <img loading='lazy' style={{width: '100%', height: '100%'}} alt=''
              src='https://i.imgur.com/CSovSG8.png'
              />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>Xbox</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
              <a 
              href='/media-devices'
              >
                <div className='Category_box_top_image'>
                <img loading='lazy' style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/JvNC0hM.png'
                />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>Stream</span>
              </div>
              </a>
              </div>
              
        {/* <div 
        className='Popular_product_categories_home'
        >
          <a 
          // href='/special-deals'
          >
            <button
            className='View_more_deals_box'
            >
            <span className='View_more_deals_box_span'>Store Specials</span></button>
          </a>
         </div> */}
              
              
       </div>

        </div>

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

export default _Home