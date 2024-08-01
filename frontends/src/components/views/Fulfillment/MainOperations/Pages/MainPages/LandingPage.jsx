import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../../../../Main/00Components/pages.css'
import '../../../../Main/0_Home/homepage.css'
import './retailerstyle.css'
import './retailerpages.css'

import {Bars} from "react-loader-spinner";

import ActiveLandingPageSlider from '../../../../Main/0_Home/components/ImageSlider/ActiveLandingPageSlider'
import LandingPageSlider from '../../../../Main/0_Home/components/ImageSlider/LandingPageSlider'
import NoImage from './Images/No_Image.jpg'
import SearchedCart from '../../../../Main/00Components/Cards/SearchedProductCart/SearchedCart';
import ProductCart from '../../../../Main/00Components/Cards/ProductCart/ProductCart'

function LandingPage(props) {

  const userId = props.match.params.userId

const [Products, setProducts] = useState([])
const [UserData, setUserData] = useState([])
const [VisitUser, setVisitUser] = useState([])
const [WriterTopItems, setWriterTopItems] = useState([])
const [WriterBrochure, setWriterBrochure] = useState([])

const [ToggleLocation, setToggleLocation] = useState(false)

const [SearchTerms, setSearchTerms] = useState("")
const [Skip, setSkip] = useState(0)
const [Limit, setLimit] = useState(8)
const [PostSize, setPostSize] = useState()
const [searchResults, setSearchResults] = useState(false)

const clickSearch = () => setSearchResults(!searchResults)

const SetLocation = () => setToggleLocation(!ToggleLocation)

useEffect(() => {
    const variable = {
        userId: userId,
    }
  
  Axios.post('/api/users/getLandingPageUser', variable)
  .then(response => {
  if (response.data.success) {
    setUserData(response.data.doc)
  }
  })

  Axios.get('/api/users/getUser')
  .then(response => {
      if (response.data.success) {
        setVisitUser(response.data.doc)
      }
  })
  
}, [])


useEffect(() => {
  const variable = {
      userId: userId,
  }

  Axios.post('/api/product/LandingPageTopItems', variable)
  .then(response => {
      if (response.data.success) {
        setWriterTopItems(response.data.doc);
      }
  })

}, [])

useEffect(() => {
  const variable = {
      userId: userId,
  }

  Axios.post('/api/product/LandingPageWriterDeals', variable)
  .then(response => {
      if (response.data.success) {
        setWriterBrochure(response.data.doc);
      }
  })

}, [])


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

      const TopItemsListed = WriterTopItems.map((product, index) => {
        return (
          <ProductCart key={index} UserData={UserData} product={product} />
        )
        })

        const TopItemsListedLocation = WriterTopItems.map((product, index) => {
          if ((UserData.userLocation === "Windhoek" && product.Windhoek === true) || (UserData.userLocation === "Walvis" && product.Walvis === true) || (UserData.userLocation === "Swakop" && product.Swakop === true)
          || (UserData.userLocation === "Okahandja" && product.Okahandja === true) || (UserData.userLocation === "Oshakati" && product.Oshakati === true) || (UserData.userLocation === "Grootfontein" && product.Grootfontein === true)
          || (UserData.userLocation === "Rehoboth" && product.Rehoboth === true) || (UserData.userLocation === "KatimaMulilo" && product.KatimaMulilo === true) || (UserData.userLocation === "Ongwediva" && product.Ongwediva === true)
          || (UserData.userLocation === "Otjiwarongo" && product.Otjiwarongo === true) || (UserData.userLocation === "Tsumeb" && product.Tsumeb === true) || (UserData.userLocation === "Gobabis" && product.Gobabis === true)) {
            return (
              <ProductCart key={index} UserData={UserData} product={product} />
      
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

  return (
<div className='Seller_landingPage_main_box'>
    {SearchTerms === "" ?
        <div style={{ display: 'block'}}>
        <div className='Main_page_container'>
        {/* <div className='LandingPage_title_box'>
        <span className='LandingPage_title_box_span'>Landing Page</span>
         </div> */}

  {/* {UserData._id === undefined ?
  <></>
  :
  UserData.accountTier === "Free" ?
<></>
  :
  <div className='Landing_page_slider_box'>

  {WriterBrochure.length === undefined ?
  <></>
  :
  WriterBrochure.length >= 3 ?
  <div className='Brand_Deals_Box_display'>
            <div className='Brand_Deals_Box_header'> 
            <div>
            <span className='Brand_Deals_Box_header_span'>Best Deals</span>
            </div>
            </div>
          < ActiveLandingPageSlider
           Products={WriterBrochure}
             />
          </div>
          :
          <div className='Brand_Deals_Box_display'>
            <div className='Brand_Deals_Box_header'> 
            <div>
            <span className='Brand_Deals_Box_header_span'>Best Deals</span>
            </div>
            </div>
          < LandingPageSlider
             />
          </div>
  }
  </div>
  } */}

{/* {UserData._id === undefined ?
<></>
:
UserData.accountTier === "Free" ? */}
  <div className='Visited_page-banner'>
  <div className='Category_selectTabs_box'>
  <div className="LandingPage_Seller_Information">
    <span>Landing Page</span>
  </div>
  <div className='Seller_Information_Name_box'>
    <span>Name:  </span><span  style={{ marginLeft: '31px'}}>{UserData.name}</span>
  </div>
  <div className='Seller_Information_Email_box'>
    <span>Email:  </span><span  style={{ marginLeft: '31px'}}>{UserData.email}</span>
  </div>
  <div className='Seller_Information_Contact_box'>
    <span>Contact:  </span><span style={{ marginLeft: '15px'}}>{UserData.contact}</span>
  </div>

  </div>
</div>
{/* :
<></>
} */}

    <div className='My_location_items_only'>
    <div className='My_location_choose_box'>
      <span>Choose</span>
    </div>

    {VisitUser.length === 0 ?
        <div className='My_location_items_box'>
        <a href='/login' style={{ width: '100%', height: '100%', display: 'flex', 
          justifyContent: 'center', alignItems: 'center' }}>
        <span>Near Me</span>
        </a>
      </div>
    :
    (VisitUser.length !== 0 & VisitUser.userLocation === "") && VisitUser.operateLocation === "User" ?
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

        {WriterTopItems.length === undefined ?
        <></>
        :
        WriterTopItems.length === 0 ?
<div className='ListedItems_container'>
<div className="Listed_fetched_products_wrapper">
    
    <div className='Item_listed_Box'>
    <div className='Item_listed_Details'>
        <a> <div className='Item_listed_image'>
        <img className='Item_listed_image_size'src={NoImage} alt="" />
      </div>
      <div className='Item_listed_title_box'>
          <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
      </div>
      </a>

      <div className='Item_value_box'>
        <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
        <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
      </div>

    </div>
    
    </div>
    <div className='Item_listed_Box'>
    <div className='Item_listed_Details'>
        <a> <div className='Item_listed_image'>
        <img className='Item_listed_image_size'src={NoImage} alt="" />
      </div>
      <div className='Item_listed_title_box'>
          <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
      </div>
      </a>

      <div className='Item_value_box'>
        <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
        <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
      </div>

    </div>
    
    </div>
    <div className='Item_listed_Box'>
    <div className='Item_listed_Details'>
        <a> <div className='Item_listed_image'>
        <img className='Item_listed_image_size'src={NoImage} alt="" />
      </div>
      <div className='Item_listed_title_box'>
          <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
      </div>
      </a>

      <div className='Item_value_box'>
        <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
        <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
      </div>

    </div>
    
    </div>
    <div className='Item_listed_Box'>
    <div className='Item_listed_Details'>
        <a> <div className='Item_listed_image'>
        <img className='Item_listed_image_size'src={NoImage} alt="" />
      </div>
      <div className='Item_listed_title_box'>
          <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
      </div>
      </a>

      <div className='Item_value_box'>
        <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
        <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
      </div>

    </div>
    
    </div>
    <div className='Item_listed_Box'>
    <div className='Item_listed_Details'>
        <a> <div className='Item_listed_image'>
        <img className='Item_listed_image_size'src={NoImage} alt="" />
      </div>
      <div className='Item_listed_title_box'>
          <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
      </div>
      </a>

      <div className='Item_value_box'>
        <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
        <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
      </div>

    </div>
    
    </div>
    <div className='Item_listed_Box'>
    <div className='Item_listed_Details'>
        <a> <div className='Item_listed_image'>
        <img className='Item_listed_image_size'src={NoImage} alt="" />
      </div>
      <div className='Item_listed_title_box'>
          <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
      </div>
      </a>

      <div className='Item_value_box'>
        <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
        <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
      </div>

    </div>
    
    </div>
    <div className='Item_listed_Box'>
    <div className='Item_listed_Details'>
        <a> <div className='Item_listed_image'>
        <img className='Item_listed_image_size'src={NoImage} alt="" />
      </div>
      <div className='Item_listed_title_box'>
          <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
      </div>
      </a>

      <div className='Item_value_box'>
        <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
        <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
      </div>

    </div>
    
    </div>
    <div className='Item_listed_Box'>
    <div className='Item_listed_Details'>
        <a> <div className='Item_listed_image'>
        <img className='Item_listed_image_size'src={NoImage} alt="" />
      </div>
      <div className='Item_listed_title_box'>
          <p className='Item_listed_title_text'>This is where title of the item will be shown.</p>
      </div>
      </a>

      <div className='Item_value_box'>
        <div className='Item_value_saved_box'><span className='Item_value_saved'>Save 0%</span></div>
        <div className='Item_value_price_box'><span className='Item_value_price'>N$ 0.00</span></div>
      </div>

    </div>
    
    </div>
        </div>
            </div>
        :
        <div className='ListedItems_container'>
        <div className={ToggleLocation === false ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
            {TopItemsListed}
        </div>
        <div className={ToggleLocation === true ? "Listed_fetched_products_wrapper" : "Listed_fetched_products-hide"}>
            {TopItemsListedLocation}
        </div>
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
                  {VisitUser.userLocation === undefined ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>Near Me:</span>
                  :
                  VisitUser.userLocation === "Windhoek" ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My City:</span>
                  :
                  VisitUser.userLocation === "" ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>Near Me:</span>
                  :
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My Town:</span>
                  }

                </div>
                {VisitUser.length === 0 ?
                <div className='Filter_location'>
                <div className="Filter_location_button"><a href='/login' style={{ width: '100%', height: '100%', display: 'flex', 
                 justifyContent: 'center', alignItems: 'center' }}><span style={{color: '#fff', fontSize: '13px', fontWeight: '700'}}>LOGIN</span></a></div>
                </div>
                :
                VisitUser.length !== 0 & VisitUser.userLocation === "" ?
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

export default LandingPage