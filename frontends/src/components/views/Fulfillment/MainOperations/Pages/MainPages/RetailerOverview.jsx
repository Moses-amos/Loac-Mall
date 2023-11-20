import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import {Bars} from "react-loader-spinner";
import './retailerstyle.css'
import '../../../../Main/00Components/pages.css' 
import '../../../../Main/CartPage/cartpage.css'
import '../../UploadProducts/productsupload.css'
import './retailerpages.css'
import BrandProductImages from './Sections/BrandProductImages';
import AvailableLocation from './Towns/AvailableLocation';
import TownLocations from './Towns/TownLocations'
import { SearchOutlined } from '@ant-design/icons';
import NoImage from './Images/No_Image.jpg'

function RetailerOverview(props) {
const [Products, setProducts] = useState([])
const [WriterProducts, setWriterProducts] = useState([])

const [Limit, setLimit] = useState("")

const [UserData, setUserData] = useState([])
const [IsLoading, setIsLoading] = useState(true)
const [showDelete, setshowDelete] = useState()

const [SearchTerms, setSearchTerms] = useState("")
const [Skip, setSkip] = useState(0)
const [PostSize, setPostSize] = useState()
const [searchResults, setSearchResults] = useState(false)

const clickSearch = () => setSearchResults(!searchResults)

const [ShowPreview, setShowPreview] = useState(false)

const TogglePreview = () => setShowPreview(!ShowPreview)

const [UpgradePlan, setUpgradePlan] = useState(false)

const PopUpUpgrade = () => setUpgradePlan(!UpgradePlan);

const onChangeSearch = (event) => {
  setSearchTerms(event.currentTarget.value)

}

const popUpDelete = (index) => {
  setshowDelete(index);
}

useEffect(() => {

  setTimeout(() => {
    setIsLoading(false)
  }, 2000);
  
})

useEffect(() => {

  Axios.get('/api/product/writerProducts')
  .then(response => {
      if (response.data.success) {
        setWriterProducts(response.data.doc);
      }
  })

}, [])


useEffect(() => {

const variables = {
limit: Limit,
}

setLimit(UserData._id)

getProducts(variables)

}, [Limit, UserData])

function refreshPage() {
  window.location.reload(false);
}

useEffect(() => {

  Axios.get('/api/users/getUser')
  .then(response => {
      if (response.data.success) {
          setUserData(response.data.doc);

      }
  })
  
  }, [])

  
  if (UserData.operateLocation === "Branch"){
    props.history.push("/branch")
    refreshPage()
    } else if (UserData.operateLocation === "User") {
      props.history.push("/")
      refreshPage()
    }

const getProducts = (variables) => {
    Axios.post('/api/product/getProductRetailer', variables)
.then(response => {
if (response.data.success) {
  setProducts(response.data.products)
} else {
alert('Failed to fetch product datas')
}
})
}

const deleteProduct = (productId) => {
function refreshPage() {
window.location.reload(false);
}

Axios.delete(`/api/product/deleteproduct/${productId}`)
.then(result=>{
const newData = Products.filter(item=>{
return item._id !== result._id
})
setProducts(newData)
refreshPage()
})
}


const SearchedProducts = Products.map((product, index) => {
  if (UserData && product.sellerId === UserData._id) {

      return (
        <div key={product._id} className='Overview_listed_Items_render'>
        <div className='Overview_information_listing_retailer'>
            <div className='Overview_item_image_box'>
                    <BrandProductImages images={product.imageOne} />
            </div>
          <div className='Overview_items_listed_info'>
              <div className='Cart-listing_title-retailer'>
              <a href={`/product/${product._id}`} target='blank' className="listing_title"><span>{product.title}</span></a>
              </div>
              <div className='Overview_price_quantity_discount_box'>
                <div className='Overview_price_quantity_box'>
                  <div style={{ display: 'flex', width: '100%', marginTop: '15px'}}>
                  <div className='Overview-item_price-quantity_left_span'>Price: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   >N$ {product.price}</div>
                  </div>
                  {product.wasPrice === 0 || product.wasPrice === undefined ?
                  <></>
                  :
                  <div style={{ display: 'flex', width: '100%', marginTop: '15px'}}>
                  <div className='Overview-item_price-quantity_left_span'>was: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   >N$ {product.wasPrice}</div>
                  </div>
                  }
                  {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                  <div style={{ display: 'flex', width: '100%', marginTop: '15px'}}>
                  <div className='Overview-item_price-quantity_left_span'>Saved:
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   >{product.special}</div>
                  </div>
                  :
                  (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                  <div className='Overview-item_price-quantity_left_span'
                  style={{ display: 'flex', width: '100%', marginTop: '15px'}}>
                  <div className='Overview-item_price-quantity_left_span'>Saved: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   >N$ {product.specialAttribute}</div>
                  </div>
                  :
                  product.special !== "0" && product.specialAttribute !== "0" ?
                  <div className='Edit_discount_error'>
                    <a style={{ color: '#fff'}} href={`/edit/product/${product._id}`}>                      
                    <span className='Percent-Deal_span_overview'>Fix</span>
                    </a>
                  </div>
                  :
                  <></>
                  }
                </div>
                <div className='Overview_edit_delete_box'>
      <div className='Overview_page_options_listing'>             
          <div style={{ position: 'relative'}} className='Overview_configure_buttons'>
          <button className='Overview_Edit_button'
          ><a style={{ color: '#fff', width: '100%', display: 'flex', alignItems: 'center'
          , justifyContent: 'center', height: '100%'}} 
          // href={`/edit/product/${product._id}`}
          >Edit </a></button>
          </div>
          
          <div  style={{ position: 'relative'}} className='Overview_configure_buttons'>
          <button className='Overview_Delete_button'
          onClick={()=> popUpDelete(product._id)}
          >Remove</button>
          </div>

      </div>
               </div>

              </div>
          </div>

        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div className={showDelete === product._id ? "Show_deleteBox": "Hide_deleteBox"}>
          <div className='Delete_box_message'>
            <span className='Are_you_sure_message'>
              Do you want to delete this item?.
            </span>
          </div>
          <div className='Delete_box_options'>
            <button           
            onClick={()=>deleteProduct(product._id)}
            className='Delete_Item_button'>Yes</button>
            <button onClick={()=> popUpDelete()} className='Cancel_Item_delete_button'>No</button>
          </div>
        </div>
        </div>

        <div className='Overview_product_locations'>
                  <AvailableLocation Product={product} />
               </div>

        </div>
  )
  } else {
    return (
      <div key={index} style={{ display: 'none'}}></div>
    )
  }
  })

const DisplayProducts = Products.map((product, index) => {
  if (UserData && product.sellerId === UserData._id) {
    return (
      <div key={product._id} className='Overview_listed_Items_render'>
        <div className='Overview_information_listing_retailer'>
            <div className='Overview_item_image_box'>
                    <BrandProductImages images={product.imageOne} />
            </div>
          <div className='Overview_items_listed_info'>
              <div className='Cart-listing_title-retailer'>
              <a href={`/product/${product._id}`} target='blank' className="listing_title"><span>{product.title}</span></a>
              </div>
              <div className='Overview_price_quantity_discount_box'>
                <div className='Overview_price_quantity_box'>
                  <div style={{ display: 'flex', width: '100%', marginTop: '15px'}}>
                  <div className='Overview-item_price-quantity_left_span'>Price: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   >N$ {product.price}</div>
                  </div>
                  {product.wasPrice === 0 || product.wasPrice === undefined ?
                  <></>
                  :
                  <div style={{ display: 'flex', width: '100%', marginTop: '15px'}}>
                  <div className='Overview-item_price-quantity_left_span'>was: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   >N$ {product.wasPrice}</div>
                  </div>
                  }
                  {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                  <div style={{ display: 'flex', width: '100%', marginTop: '15px'}}>
                  <div className='Overview-item_price-quantity_left_span'>Saved:
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   >{product.special}</div>
                  </div>
                  :
                  (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                  <div className='Overview-item_price-quantity_left_span'
                  style={{ display: 'flex', width: '100%', marginTop: '15px'}}>
                  <div className='Overview-item_price-quantity_left_span'>Saved: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   >N$ {product.specialAttribute}</div>
                  </div>
                  :
                  product.special !== "0" && product.specialAttribute !== "0" ?
                  <div className='Edit_discount_error'>
                    <a style={{ color: '#fff'}} href={`/edit/product/${product._id}`}>                      
                    <span className='Percent-Deal_span_overview'>Fix</span>
                    </a>
                  </div>
                  :
                  <></>
                  }
                </div>
                <div className='Overview_edit_delete_box'>
      <div className='Overview_page_options_listing'>             
          <div style={{ position: 'relative'}} className='Overview_configure_buttons'>
          <button className='Overview_Edit_button'
          ><a style={{ color: '#fff', width: '100%', display: 'flex', alignItems: 'center'
          , justifyContent: 'center', height: '100%'}}
          //  href={`/edit/product/${product._id}`}
           >Edit </a></button>
          </div>
          
          <div  style={{ position: 'relative'}} className='Overview_configure_buttons'>
          <button className='Overview_Delete_button'
          onClick={()=> popUpDelete(product._id)}
          >Remove</button>
          </div>

      </div>
               </div>

              </div>
          </div>

        </div>

        <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
        <div className={showDelete === product._id ? "Show_deleteBox": "Hide_deleteBox"}>
          <div className='Delete_box_message'>
            <span className='Are_you_sure_message'>
              Do you want to delete this item?.
            </span>
          </div>
          <div className='Delete_box_options'>
            <button           
            onClick={()=>deleteProduct(product._id)}
            className='Delete_Item_button'>Yes</button>
            <button onClick={()=> popUpDelete()} className='Cancel_Item_delete_button'>No</button>
          </div>
        </div>
        </div>

        <div className='Overview_product_locations'>
                  <AvailableLocation Product={product} />
               </div>

        </div>

)
  } else {
    return (
      <div key={index} style={{ display: 'none'}}></div>
    )
    }
})

const [Filters, setFilters] = useState({
  location: []
  })

useEffect(() => {

  if (SearchTerms === undefined || SearchTerms === "") {
    setSearchTerms("")
    getProducts()

  } else if(SearchTerms !== "" || SearchTerms !== undefined) {
    const variables = {
      skip: 0,
      limit: Limit,
      filters: Filters,
      searchTerm: SearchTerms
      }

    setSearchTerms(SearchTerms)
    getProducts(variables)
  }

}, [SearchTerms])


return (
  <div className='Retailer_Overview_container'>

                  <div className='Retailer_Overview_page_left'>
                    <div className='Retailer_Overview_Top'>
                      <div className='Listed_Items_box'>
                    <div>
                      <span style={{ fontSize: '20.8px', fontWeight: '700', color: '#fff'}}>Overview</span>
                    </div>
                    
                    <div style={{  padding: '5px 0px 0px 0px', display: 'flex'}}>
                      <div>
                        <span style={{ fontSize: '16px', fontWeight: '600',
                       color: '#fff'}}>{WriterProducts.length} items</span>
                      </div>
                    </div>
                 
                  </div>


                  {WriterProducts.length === 8 && UserData.accountTier === "Free" ?
          <div className='Add_product_button_overview'>
            <div className='Add_product_button_overview_box' onClick={PopUpUpgrade}>
            <span className='Add_product_button_overview_box_span'>Upload Item</span></div>
         </div>
                    :
<div className='Add_product_button_overview'>
          <a href='/item/upload'>
            <div className='Add_product_button_overview_box'>
            <span className='Add_product_button_overview_box_span'>Upload Item</span></div>
          </a>
         </div>
                    }

                  <div className='Overview_Account_setup_information'>
                   <div className='Overview_Account_details_box'>
                  <div className='Overview_Account_title_box'>
                  Account Name:
                  </div>
                  <div className='Overview_Account_subject_box'>
                  {UserData.name? <>{UserData.name}</>:<>none</>}
                  </div>
                  </div>

                  <div className='Overview_Account_details_box'>
                  <div className='Overview_Account_title_box'>
                  Email Account:
                  </div>
                  <div className='Overview_Account_subject_box'>
                  {UserData.email? <>{UserData.email}</>:<>none</>}
                  </div>
                  </div>

                  <div className='Overview_Account_details_box'>
                  <div className='Overview_Account_title_box'>
                  Contact Nr:
                  </div>
                  <div className='Overview_Account_subject_box'>
                  {UserData.contact? <>{UserData.contact}</>:<>none</>}
                  </div>
                  </div>

                  <div>
                    <div className='Overview_Account_information_button'><a style={{ width: '100%', height: '100%', display: 'flex', 
                          justifyContent: 'center', alignItems: 'center' }} href='/re-settings'>
                          <span style={{ color: '#fff', fontSize: '16px', fontWeight: '500'}}>Update</span> </a> </div>
                  </div>
                  
                  </div>
                    </div>
                    

                  </div>

                  <div className='Overview_Right_box'>
                  <div className='Overview_search_bar_box'>
                      <input className='Overview_search_bar'
                      value={SearchTerms} 
                      maxLength={45}
                      placeholder='Search Catalog'
                      onChange={onChangeSearch}
                      type='text'
                       />
                    <div className='Overview_search_bar_button_box'>

                      <button className='Overview_search_bar_button'>
                      <span style={{width: '100%', height: '100%', 
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'center'}}><SearchOutlined /></span>
                      </button>
                      
                    </div>
                  </div>

                  {SearchTerms === "" ?
                  <>

                  {WriterProducts.length === undefined ?
                  <>
                  </>
                  :
                  WriterProducts.length === 0 ?
                  <>
                  {IsLoading === true ?
                  <></>
                  :
                  <>
                  <div className={ShowPreview === false? "Retail_preview_box" : "Retail_preview_box_hide"}>
                    <div style={{ width: '100%', height: '353px', display: 'flex', justifyContent: 'center', alignItems: 'center', border: '1px solid #c5cbd5', borderRadius: '7px'}}>
                      <a href='/item/upload'>
                        <img className='Overview_item_image_box' src="https://i.imgur.com/sKLwoEp.jpg" alt="" />
                      </a>
                    </div>
                    
                    <div style={{ marginTop: '30px'}}>
                        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
                            <span style={{ fontWeight: '500', fontSize: '15px', color: '#3E3D53'}}>Items that are uploaded will be listed here.</span>
                        </div>
                     </div>

                      <div className='Retailer_preview_box'>
                        <button className='Retailer_preview_button' onClick={TogglePreview}>Preview</button>
                      </div>
                    
                  </div>

                  <div className={ShowPreview === true? "Retail_preview_box" : "Retail_preview_box_hide"}>
                  <div className='Overview_listed_Items_render'>
  <div className='Overview_information_listing_retailer'>
      <div className='Overview_item_image_box'>
        <img className='Overview_item_image_box'src={NoImage} alt="" />
      </div>
    <div className='Overview_items_listed_info'>
        <div className='Cart-listing_title-retailer'>
          <span className="listing_title_example">This is where the title of the item is shown.</span>
        </div>
        <div className='Overview_price_quantity_discount_box'>
          <div className='Overview_price_quantity_box'>
            <div style={{ display: 'flex', width: '100%', marginTop: '15px'}}>
            <div className='Overview-item_price-quantity_left_span'>Price: 
            </div>
            <div className='Overview-item_price-quantity_right_span'
             >N$ 0.00</div>
            </div>
            
            <div style={{ display: 'flex', width: '100%', marginTop: '15px'}}>
            <div className='Overview-item_price-quantity_left_span'>was: 
            </div>
            <div className='Overview-item_price-quantity_right_span'
             >N$ 0.00</div>
            </div>

            <div style={{ display: 'flex', width: '100%', marginTop: '15px'}}>
              <div className='Overview-item_price-quantity_left_span'>Save: 
              </div>
              <div className='Overview-item_price-quantity_right_span'
               >0 %</div>
              </div>
            
          </div>
          <div className='Overview_edit_delete_box'>
<div className='Overview_page_options_listing'>             
    <div style={{ position: 'relative'}} className='Overview_configure_buttons'>
    <button className='Overview_Edit_button'
    ><a style={{ color: '#fff', width: '100%', display: 'flex', alignItems: 'center'
    , justifyContent: 'center', height: '100%'}}
     >Edit </a></button>
    </div>
    
    <div  style={{ position: 'relative'}} className='Overview_configure_buttons'>
    <button className='Overview_Delete_button'
    >Remove</button>
    </div>

</div>
         </div>

        </div>
    </div>

  </div>

  <div className='Overview_product_locations'>
    <TownLocations />
  </div>

  </div>

                  <div className='Retailer_preview_box'>
                    <button className='Retailer_preview_button' onClick={TogglePreview}>Back</button>
                  </div>
                </div>

                  </>
                  }
                  </>
                  :
                  <></>
                  }

            {Products.length === 0 ?
            <></>
            
             :
            <div className='fetched-container'>
              {IsLoading === true ?
              <>
              </>
              :
              <>
                {DisplayProducts}
              </>
              }
            </div>
            }

                  </>
                  :
                  SearchTerms !== "" ?
                  <div className='Searched_container_retailer'>
                  {
                  (SearchTerms !== "" && searchResults === true) || (SearchTerms !== "" && searchResults === false)  ?
                  <>
                  {Products.length === 0 ?
                        <div className='Searching-product_central_box'>
                          {SearchTerms === "" ? 
                          <></>
                          :
                          <div>
                          <span className='Searching-product_title'>Searching Your Catalog</span>
                        </div>
                          }
                        <div style={{ marginTop: '5px'}}>
                          <input className='Searching-product_input' readOnly type="text" value={SearchTerms} />
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '50px'}}>
                        <Bars color="#00BFFF" height={200} width={300} />
                        </div>
                      </div>
                  :
                  Products.length !== 0 ?
                  <div style={{ display: 'block'}}>
                  {SearchedProducts}
                  </div>
                  :
                  <></>
                  }
                  
                  </>
                  :
                   (SearchTerms !== "" && searchResults === false) || SearchTerms === "" ?
                  <>
                  {Products.length === 0 ?
                  <div className='Searching-product_central_box'>
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
                 
                
                </div> 

)
}

export default RetailerOverview