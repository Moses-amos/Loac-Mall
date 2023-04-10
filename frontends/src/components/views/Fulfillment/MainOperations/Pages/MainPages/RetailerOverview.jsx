import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import Loading from './Sections/SearchBar/Loading';
import {Bars} from "react-loader-spinner";
import './retailerstyle.css'
import NoImage from './Images/No_Image.jpg'
import RetailerSidebar from './Sections/RetailerSidebar';
// import SearchBar from './Sections/SearchBar/SearchBar';
import BrandProductImages from './Sections/BrandProductImages';
import CatalogSearch from './Sections/SearchBar/CatalogSearch';

function RetailerOverview(props) {
const [Skip, setSkip] = useState(0)
const [Products, setProducts] = useState([])
const [WriterProducts, setWriterProducts] = useState([])
const [Limit, setLimit] = useState("")
const [UserData, setUserData] = useState([])
const [PostSize, setPostSize] = useState()
const [SearchTerms, setSearchTerms] = useState("")
const [IsLoading, setIsLoading] = useState(true)
const [showDelete, setshowDelete] = useState()

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

const deleteProduct = (productId)=>{
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
        <div key={product._id} className='Cart-listing_titles_box-retailer'>
        <div className='Cart-description_listing-retailer'>
            <div style={{ width: '330px', height: '170px'}}>
                    <BrandProductImages images={product.images} />
            </div>
                      <div className='Cart-listing_Other_title'>
              <div className='Cart-listing_title-retailer'>
              <a href={`/product/${product._id}`} target='blank' className="listing_title"><span>{product.title}</span></a>
              </div>
              <div className='Overview_price_quantity_discount_box'>
                <div style={{ display: 'flex',
               justifyContent: 'space-between'}}>
                  <div style={{ display: 'flex'}}>
                  <div className='Overview-item_price-quantity_right_span'>Price: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   style={{ marginLeft: '20px'}}>N$ {product.price}</div>
                  </div>
                  {product.wasPrice === 0 || product.wasPrice === undefined ?
                  <></>
                  :
                  <div style={{ display: 'flex'}}>
                  <div className='Overview-item_price-quantity_right_span'>was Price: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   style={{ marginLeft: '20px'}}>N$ {product.wasPrice}</div>
                  </div>
                  }
                  {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                  <div style={{ display: 'flex'}}>
                  <div className='Overview-item_price-quantity_right_span'>Saved:
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   style={{ marginLeft: '20px'}}>{product.special}</div>
                  </div>
                  :
                  (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                  <div className='Overview-item_price-quantity_right_span'
                  style={{ display: 'flex'}}>
                  <div>Saved: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   style={{ marginLeft: '20px'}}>N$ {product.specialAttribute}</div>
                  </div>
                  :
                  product.special !== "0" && product.specialAttribute !== "0" ?
                  <div className='Edit_discount_error'>
                    <a style={{ color: '#fff'}} href={`/edit/product/${product._id}`}>                      
                    <span className='Percent-Deal_span_overview'>Fix Discount</span>
                    </a>
                  </div>
                  :
                  <></>
                  }
                </div>
                <div style={{ display: 'flex',
               justifyContent: 'center', marginTop: '15px'}}>
                  <div className='SavePercent'>
                    <span className='Percent-Deal_span_overview'>{product.warrenty}</span>
                  </div>
               </div>
              </div>
          </div>
  
        </div>
        <div className='Cart-listing_right_box'>
      <div className='Overview_page_options_listing'>             
          <div style={{ position: 'relative'}} className='Cartlisting_buttons'>
          <button className='Overview_Edit_button'
          ><a style={{ color: '#fff', width: '100%', display: 'flex', alignItems: 'center'
          , justifyContent: 'center', height: '100%'}} href={`/edit/product/${product._id}`}>Edit </a></button>
          </div>
          
          <div  style={{ position: 'relative'}} className='Cartlisting_buttons'>
          <button className='Overview_Delete_button'
          onClick={()=> popUpDelete(product._id)}
          >Delete</button>
          </div>

        <div className={showDelete === product._id ? "Show_deleteBox": "Hide_deleteBox"}>
          <div className='Delete_box_message'>
            <span className='Are_you_sure_message'>
              Are your sure you want to delete this item?.
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
      <div key={product._id} className='Cart-listing_titles_box-retailer'>
      <div className='Cart-description_listing-retailer'>
          <div style={{ width: '330px', height: '170px'}}>
                  <BrandProductImages images={product.images} />
          </div>
          <div className='Cart-listing_Other_title'>
              <div className='Cart-listing_title-retailer'>
              <a href={`/product/${product._id}`} target='blank' className="listing_title"><span>{product.title}</span></a>
              </div>
              <div className='Overview_price_quantity_discount_box'>
                <div style={{ display: 'flex',
               justifyContent: 'space-between'}}>
                  <div style={{ display: 'flex'}}>
                  <div className='Overview-item_price-quantity_right_span'>Price: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   style={{ marginLeft: '20px'}}>N$ {product.price}</div>
                  </div>
                  {product.wasPrice === 0 || product.wasPrice === undefined ?
                  <></>
                  :
                  <div style={{ display: 'flex'}}>
                  <div className='Overview-item_price-quantity_right_span'>was Price: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   style={{ marginLeft: '20px'}}>N$ {product.wasPrice}</div>
                  </div>
                  }
                  {(product.special !== "" && product.special !== "0") && (product.specialAttribute === "" || product.specialAttribute === "0" ) ?
                  <div style={{ display: 'flex'}}>
                  <div className='Overview-item_price-quantity_right_span'>Saved:
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   style={{ marginLeft: '20px'}}>{product.special}</div>
                  </div>
                  :
                  (product.specialAttribute !== "" && product.specialAttribute !== "0") && (product.special === "" || product.special === "0") ?
                  <div className='Overview-item_price-quantity_right_span'
                  style={{ display: 'flex'}}>
                  <div>Saved: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   style={{ marginLeft: '20px'}}>N$ {product.specialAttribute}</div>
                  </div>
                  :
                  product.special !== "0" && product.specialAttribute !== "0" ?
                  <div className='Edit_discount_error'>
                    <a style={{ color: '#fff'}} href={`/edit/product/${product._id}`}>                      
                    <span className='Percent-Deal_span_overview'>Fix Discount</span>
                    </a>
                  </div>
                  :
                  <></>
                  }
                </div>
                <div style={{ display: 'flex',
               justifyContent: 'center', marginTop: '15px'}}>
                  <div className='SavePercent'>
                    <span className='Percent-Deal_span_overview'>{product.warrenty}</span>
                  </div>
               </div>
              </div>
          </div>

      </div>
      <div className='Cart-listing_right_box'>
      <div className='Overview_page_options_listing'>             
          <div style={{ position: 'relative'}} className='Cartlisting_buttons'>
          <button className='Overview_Edit_button'
          ><a style={{ color: '#fff', width: '100%', display: 'flex', alignItems: 'center'
          , justifyContent: 'center', height: '100%'}} href={`/edit/product/${product._id}`}>Edit </a></button>
          </div>
          
          <div  style={{ position: 'relative'}} className='Cartlisting_buttons'>
          <button className='Overview_Delete_button'
          onClick={()=> popUpDelete(product._id)}
          >Delete</button>
          </div>

        <div className={showDelete === product._id ? "Show_deleteBox": "Hide_deleteBox"}>
          <div className='Delete_box_message'>
            <span className='Are_you_sure_message'>
              Are your sure you want to delete this item?.
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
      </div>
      </div>

)
  } else {
    return (
      <div key={index} style={{ display: 'none'}}></div>
    )
    }
})

const [searchResults, setSearchResults] = useState(false)

const clickSearch = () => setSearchResults(!searchResults)

const updateSearchTerms = (newSearchTerm) => {

const variables = {
searchTerm: newSearchTerm
}

setSearchTerms(newSearchTerm)

getProducts(variables)
}

return (
          <div style={{ display: 'block' , maxWidth: '1349px', minHeight: '700px'}}>
          <CatalogSearch showResults={clickSearch} refreshFunction={updateSearchTerms} />
          {SearchTerms === "" ?
                  <div style={{ width: '1349px', display: 'flex', position: 'relative', paddingTop: '46px'}}>
                  <RetailerSidebar />
                 <div style={{width: '1060px', display: 'block',position: 'relative', paddingLeft: '40px', background: '#fff'}}>
                    <div style={{ width: '1020px', display: 'flex', justifyContent: 'space-between',
                     border: '2px solid #5a596a', marginTop: '10px', padding: '0px 20px', borderRadius: '7px', position: 'relative'}}>
                    <div style={{ width: '400px'}}>
                      <span style={{ fontSize: '25px', fontWeight: '700', color: '#070606'}}>Your Listings</span>
                    </div>
                    <div style={{  padding: '8px 0px 0px 0px', display: 'flex'}}>
                      <div>
                          <span style={{ fontSize: '16px', fontWeight: '700',
                       color: '#070606'}}>Number of Listed Products: </span>  
                      </div>
                      <div style={{ marginLeft: '30px'}}>
                        <span style={{ fontSize: '15px', fontWeight: '700',
                       color: '#070606'}}>{WriterProducts.length} products</span>
                      </div>
                    </div>
                  </div>

                  {WriterProducts.length === undefined ?
                  <>
                  </>
                  :
                  WriterProducts.length === 0 ?
                  <>
                  {IsLoading === true ?
                  <></>
                  :
                  <div className='Empty_Overview'>
                    <div className='Overview_Demonstration'>
                      <span className='Overview_Demonstration_Title'>Overview Example</span>
                    </div>
                    <div style={{ marginBottom: '20px'}}>
                        <div>
                            <span style={{ fontWeight: '600', fontSize: '13px', color: '#333'}}>- Products that are uploaded will be listed here.</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: '600', fontSize: '13px', color: '#333'}}>- Listed Products can only be Edited (Change Details About the item) or Deleted here.</span>
                        </div>
                        <div>
                            <span style={{ fontWeight: '600', fontSize: '13px', color: '#333'}}>- Use the Search Bar above to search for Products in the Catalog.</span>
                        </div>
                     </div>
                    <div className='Cart-listing_titles_box-retailer'>
      <div className='Cart-description_listing-retailer'>
          <div style={{ width: '330px', height: '165px'}}>
                  <img style={{ width: '330px', height: '165px'}} src={NoImage} alt="" />
          </div>
          <div className='Cart-listing_Other_title'>
              <div className='Cart-listing_title-retailer'>
              <span className="listing_title_example">This is where the Title of the product is shown.</span>
              </div>
              <div className='Overview_price_quantity_discount_box'>
                <div style={{ display: 'flex',
               justifyContent: 'space-between'}}>
                  <div style={{ display: 'flex'}}>
                  <div className='Overview-item_price-quantity_right_span' style={{cursor: 'default'}}>Price: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   style={{ marginLeft: '20px', cursor: 'default'}}>N$ XXXX.XX</div>
                  </div>
                  <div style={{ display: 'flex'}}>
                  <div  style={{cursor: 'default', cursor: 'default'}} className='Overview-item_price-quantity_right_span'>was Price: 
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   style={{ marginLeft: '20px', cursor: 'default'}}>N$ XXXX.XX</div>
                  </div>
                  <div style={{ display: 'flex'}}>
                  <div  style={{cursor: 'default'}} className='Overview-item_price-quantity_right_span'>Save:
                  </div>
                  <div className='Overview-item_price-quantity_right_span'
                   style={{ marginLeft: '20px', cursor: 'default'}}>X %</div>
                  </div>
                </div>
                <div style={{ display: 'flex',
               justifyContent: 'center', marginTop: '15px'}}>
                  <div className='SavePercent'>
                    <span  style={{cursor: 'default'}} className='Percent-Deal_span_overview'>This part shows the warrenty offered</span>
                  </div>
               </div>
              </div>
          </div>

      </div>
      <div className='Cart-listing_right_box'>
      <div className='Overview_page_options_listing'>             
          <div style={{ position: 'relative'}} className='Cartlisting_buttons'>
          <button className='Overview_Edit_button_example'
          ><span target="blank" style={{ color: '#fff', width: '100%', display: 'flex', alignItems: 'center'
          , justifyContent: 'center', height: '100%'}}>Edit</span></button>
          </div>
          
          <div  style={{ position: 'relative'}} className='Cartlisting_buttons'>
          <button className='Overview_Delete_button_example'
          >Delete</button>
          </div>

      </div>
      </div>
                    </div>
                  </div>
                  }

                  </>

                  :
                  <></>
                  }
              
                  <div style={{ width: '100%', position: 'relative'}}>
                    {Products.length === 0 ?
                    <div className='Searching-product_box'>
                    {SearchTerms === "" ? 
                    <></>
                    :
                    <div>
                    <span className='Searching-product_title'>Searching Items In Your Catalog</span>
                  </div>
                    }
            
                  <div style={{ marginTop: '10px'}}>
                    <input className='Searching-product_input' readOnly type="text" value={SearchTerms} />
                  </div>
                  <div style={{ display: 'flex', paddingLeft: '100px', alignItems: 'center', paddingTop: '50px'}}>
                  <Bars color="#00BFFF" height={200} width={300} />
                  </div>
                </div>
                     :
                    <div className='fetched-container'>
                      {IsLoading === true ?
                      <Loading />
                      :
                      <>
                        {DisplayProducts}
                      </>
                      }
                    </div>
                    }
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
                <span className='Searching-product_title'>Searching Item In Your Catalog</span>
              </div>
                }
              <div style={{ marginTop: '10px'}}>
                <input className='Searching-product_input' readOnly type="text" value={SearchTerms} />
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '50px'}}>
              <Bars color="#00BFFF" height={200} width={300} />
              </div>
            </div>
        :
        Products.length !== 0 ?
        <div style={{ display: 'flex', padding: '20px 0px 60px 0px'}}>
          <div style={{ minWidth: '270px', height: '450px',marginLeft: '15px', borderRadius: '5px', padding: '10px 15px', border: '2px solid lightgray'}}>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
            <span style={{ fontSize: '22px', fontWeight: '700', color: '#070606'}}>Search By Category</span>
            </div>
            <div style={{ width: '100%', paddingTop: '20px'}}>
            <span style={{ fontSize: '15px', fontWeight: '700', color: '#5a596a'}}>* This feature is not yet Available *</span>
            </div>
          </div>
          <div style={{ marginLeft: '20px'}}>
            <div>
              <div style={{ marginBottom: '5px'}}>
              <span style={{ fontSize: '18px', fontWeight: '700', color: '#070606'}}>{UserData.name} Searched Catalog</span>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap'}}>
              {SearchedProducts}
              </div>
            </div>
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

export default RetailerOverview