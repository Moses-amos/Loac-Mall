import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../../00Components/pages.css'
import SearchBar from '../../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../Cards/SearchedProductCart/SearchedCart';
import './aboutus.css'

function AboutUs() {

    const [Products, setProducts] = useState([])
    const [UserData, setUserData] = useState([])
    const [ToggleLocation, setToggleLocation] = useState(false)

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

  return (
    <div style={{ display: 'block'}}>
    <SearchBar showResults={clickSearch} refreshFunction={updateSearchTerms} />
    {SearchTerms === "" ?
    <div className='Visited_container-wrapper'>
        <div className='About_container'>
            <div className="AboutUs_box">
               <div className='About_us_title'>
                <span className='About_us_title_span'>About Us</span>
               </div>
               <div style={{ marginTop: '10px'}}>
                <div>
                    <span className='About_us_purpose_span'>Our Purpose</span>
                </div>
                <div>
                     <span className='Purpose_span'>
                        "We bring local Retail Stores onto a single online mall for shop-goers to browse, purchase, order products locally or across towns/city in Namibia."
                    </span>
                </div>
            </div>
            <div style={{ marginTop: '30px'}}>
                <div>
                    <span className='About_us_purpose_span'>Want to be a Seller on Loac.com ?</span>
                </div>
                <div>
                    <div>
                    <span className='Purpose_span'>
                        Reach out to us via our email (provide your contact number in email) or through the communication channels we provided publically.
                    </span>
                    </div>
                    <div style={{ display: 'flex', marginTop: '5px'}}>
                        <span className='Purpose_span'>
                            Email: 
                        </span>
                        <span style={{marginLeft: '3px'}} className='Purpose_span'>loacmall.com@gmail.com</span>
                    </div>
                    <div style={{ display: 'flex', marginTop: '2px'}}>
                        <span className='Purpose_span'>
                            Contact number:
                        </span>
                        <span style={{marginLeft: '3px'}} className='Purpose_span'>081 7060 833</span>
                    </div>
                    {/* <div style={{ marginTop: '5px'}}>
                    <span className='Purpose_span'>
                        To maintain the efficasy of the Retailers on our site: <br/> We vet them by having direct contact with them before allowing them to conduct business on our platform.
                    </span>
                    </div> */}



                </div>
            </div>
            <div style={{ marginTop: '30px'}}>
                <div>
                    <span className='About_us_purpose_span'>Requirements in order to Eligible to sell on Loac.com</span>
                </div>
                <div>
                    <div style={{ marginTop: '5px'}}>
                     <span className='Purpose_span'>
                        - Retailer should have branches in at least 3 Namibian towns/city.
                    </span>
                    </div>
                    <div style={{ marginTop: '5px'}}>
                     <span className='Purpose_span'>
                        - Each of the at least 3 branches should be situated in the urban area of the town/city: 
                        it should be easily accessible to shoppers by foot.
                    </span>
                    </div>
                    <div style={{ marginTop: '5px'}}>
                     <span className='Purpose_span'>
                        - The Retailer should be Publically known and Anounced as an Namibian Retailer.
                    </span>
                    </div>

                </div>
            </div>
            <div style={{ marginTop: '30px'}}>
                <div>
                    <span className='About_us_purpose_span'>Products Not Allowed on Loac.com</span>
                </div>
                <div>
                    <div style={{ marginTop: '5px'}}>
                     <span className='Purpose_span'>
                        - We do do not allow meats, fresh foods or any perishable products that are refrigerated.
                    </span>
                    </div>
                    <div style={{ marginTop: '5px'}}>
                     <span className='Purpose_span'>
                        - All kinds of consumable foods are not allowed on the platform.
                    </span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    :
SearchTerms !== "" ?
<div className='listings-container'>
{
(SearchTerms !== "" && searchResults === true) || (SearchTerms !== "" && searchResults === false)  ?
<>
{Products.length === 0 ?
      <div className='Searching-product_box'>
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
<div style={{ display: 'flex', padding: '20px 0px 60px 0px'}}>
<div style={{ minWidth: '280px', height: '450px',marginLeft: '15px', borderRadius: '5px', padding: '10px 15px', border: '2px solid #c5cbd5'}}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', borderBottom: '1px solid #5a596a'}}>
            <span style={{ fontSize: '22px', fontWeight: '700', color: '#070606'}}>Filter Search</span>
            </div>
            <div style={{ width: '100%', paddingTop: '30px', display: 'block'}}>
              <div style={{ display: 'flex'}}>
                <div>
                <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My Town/City:</span>
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
  <div style={{ marginLeft: '20px'}}>
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
<div className='Searching-product_box'>
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