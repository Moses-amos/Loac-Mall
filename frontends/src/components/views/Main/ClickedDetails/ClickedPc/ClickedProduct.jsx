import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import { addToCartOnce, addToWishlistOnce, } from '../../../../../_actions/user_actions';
import { useDispatch } from 'react-redux';
import Recommendslider from '../../0_Home/components/ImageSlider/Recommendslider'
import ProductInfo from './sections/SelectedItem/ProductInfo';
import ProductImage from './sections/SelectedItem/ProductImage';
import '../../00Components/pages.css'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../../00Components/Cards/SearchedProductCart/SearchedCart';

import "./clickedpc.css"

function ClickedProduct(props) {

const productId = props.match.params.productId
const dispatch = useDispatch();

const [Product, setProduct] = useState([])
const [UserData, setUserData] = useState([])
const [Products, setProducts] = useState([])
const [ReccomededProducts, setReccomededProducts] = useState([])
const [ToggleLocation, setToggleLocation] = useState(false)

const [SearchTerms, setSearchTerms] = useState("")
const [Skip, setSkip] = useState(0)
const [Limit, setLimit] = useState(8)
const [PostSize, setPostSize] = useState()
const [searchResults, setSearchResults] = useState(false)

const clickSearch = () => setSearchResults(!searchResults)

const SetLocation = () => setToggleLocation(!ToggleLocation)


useEffect(() => {
Axios.get(`/api/product/products_by_id?id=${productId}&type=single`)
.then(response => {
setProduct(response.data[0])
})

}, [])

useEffect(() => {
    const variable = {
        product: Product.product
    }
    
    Axios.post('/api/product/recommendProducts', variable)
    .then(response => {
    if (response.data.success) {
    setReccomededProducts(response.data.doc)
    }
    })
}, [Product])

useEffect(() => {

Axios.get('/api/users/getUser')
.then(response => {
  if (response.data.success) {
    setUserData(response.data.doc)
  }
})

}, [])

const addToCartHandler = (productId) => {
dispatch(addToCartOnce(productId))
}

const addToWishlistOnceHandler = (productId) => {
dispatch(addToWishlistOnce(productId))
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
    <div className='Clicked_page_Main_wrapper'>
    {SearchTerms === "" ?
    <div>
<div className='Clicked_page_container'>
    <div className='Clicked_page_wrapper'>
        <ProductImage detail={Product} />
        <ProductInfo addToCartOnce={addToCartHandler} addToWishlistOnce={addToWishlistOnceHandler} detail={Product} />
    </div>

    {ReccomededProducts.length > 5 ?
    <div style={{ width: '100%', background: '#fff', marginTop: '60px', padding: '15px 40px 15px 40px', borderRadius: '10px'}}>
       <Recommendslider Products={ReccomededProducts} UserData={Product} />
    </div>
    :
    <></>
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

export default ClickedProduct