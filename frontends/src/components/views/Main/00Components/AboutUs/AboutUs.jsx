import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../../00Components/pages.css'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../Cards/SearchedProductCart/SearchedCart';
import './aboutus.css'

function AboutUs(props) {

    const [Products, setProducts] = useState([])
    const [UserData, setUserData] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)

    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState()
    const [SearchTerms, setSearchTerms] = useState("")
    const [searchResults, setSearchResults] = useState(false)
    
    const clickSearch = () => setSearchResults(!searchResults)
    
    const [Filters, setFilters] = useState({
    location: []
    })
    const SetLocation = () => setToggleLocation(!ToggleLocation)
    
    useEffect(() => {
      Axios.get('/api/users/getUser')
    .then(response => {
        if (response.data.success) {
          setUserData(response.data.doc)
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
    
    // const updateSearchTerms = (newSearchTerm) => {
    
    // const variables = {
    // skip: 0,
    // limit: Limit,
    // filters: Filters,
    // searchTerm: newSearchTerm
    // }
    
    // setSkip(0)
    // setSearchTerms(newSearchTerm)
    
    // getProducts(variables)
    // }

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
    <div style={{ display: 'block', background: '#fff'}}>
    {SearchTerms === "" ?
    <div className='AboutPage_container-wrapper'>
        <div className='About_container'>
          <div className='About_container_color'>
            <div className="AboutUs_box">
               <div className='About_us_title'>
                <span className='About_us_title_span'>What We Do</span>
               </div>
               <div style={{ marginTop: '30px'}}>
                <div>
                    <span className='About_us_purpose_span'>Our Purpose</span>
                </div>
                <div style={{ marginTop: '5px'}}>
                     <span className='Purpose_span'>
                        "We bring local Retailers onto a single online mall for shop-goers to browse local products in or across towns of Namibia."
                    </span>
                </div>
            </div>
            <div style={{ marginTop: '40px'}}>
                <div>
                    <span className='About_us_purpose_span'>How it Works</span>
                </div>
                <div>
                    <div style={{ marginTop: '5px'}}>
                    <span className='Purpose_span'>
                    When you find an item you want, then you make a <span style={{ fontWeight: '900'}}>REQUEST</span> to confirm if the item is available
                    </span>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '40px'}}>
                <div>
                    <span className='About_us_purpose_span'>Online Payments</span>
                </div>
                <div>
                    <div style={{ marginTop: '5px'}}>
                    <span className='Purpose_span'>
                    No Online Payments
                    </span>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: '40px'}}>
                <div>
                    <span className='About_us_purpose_span'>Products Not Allowed</span>
                </div>
                <div style={{ marginTop: '5px'}}>
                    {/* <div style={{ marginTop: '5px'}}>
                     <span className='Purpose_span'>
                        We do do not allow meats, fresh foods or any perishable products that are refrigerated.
                    </span>
                    </div> */}
                    <div style={{ marginTop: '5px'}}>
                     <span className='Purpose_span'>
                        All kinds of consumable foods are not allowed on the platform.
                    </span>
                    </div>
                </div>
            </div>
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
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>Near Me</span>
                  :
                  UserData.userLocation === "Windhoek" ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My City:</span>
                  :
                  UserData.userLocation === "" ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>Near Me</span>
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

export default AboutUs