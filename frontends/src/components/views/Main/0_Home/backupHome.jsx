import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";

import ImageAutoSlide from './components/ImageSlider/ImageAutoSlide'
import ElectronicSlider from './components/ImageSlider/ElectronicSlider'
import SmartphonesSlider from './components/ImageSlider/SmartphonesSlider'
// import ClothingSlider from './components/ImageSlider/ClothingSlider'
// import ShoesSlider from './components/ImageSlider/ShoesSlider'
// import WatchesSlider from './components/ImageSlider/WatchesSlider'
// import TransportSlider from './components/ImageSlider/TransportSlider'
// import FurnitureSlider from './components/ImageSlider/FurnitureSlider'
// import SearchedImages from '../../../assets/SearchedImages';
// import CompanyImage from '../../../assets/CompanyImage';
import incredibleSale from './components/ImageSlider/Images/Incre.jpg'
import GameBike from './components/ImageSlider/Images/GameBike.jpg'
import HifiCorpAd from './components/ImageSlider/Images/HifiCorpAd.jpg'
import HifiDishwasherAd from './components/ImageSlider/Images/HifiDishwasher.jpg'
import LaptopImage from './Images/AcerLaptop.jpg'
import IphoneImage from './Images/iphonesImage.png'
import HeadphoneImage from './Images/HeadphoneImage.jpg'
import ApplianceImage from './Images/ApplianceImage.jpg'
import MakeupImage from './Images/MakeupImage.jpg'
import HealthDeviceImage from './Images/HealthDevice.jpg'
import BikeImage from './Images/BikeImage.png'
import ToolsImage from './Images/ToolsImage.jpg'
import PowerToolImage from './Images/PowerToolImage.png'
import FlowerRingImage from './Images/JewellryImage.jpg'
import WatchImage from './Images/BlackWatch.png'
import GolfImage from './Images/GolfImage.png'
import MattressImage from './Images/MattressImage.png'
import FurnitureImage from './Images/FurnitureImage.jpg'


import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart';

function _Home() {

  const [Products, setProducts] = useState([])
  const [UserData, setUserData] = useState([])
  const [Flatscreens, setFlatscreens] = useState([])
  const [SmartPhones, setSmartPhones] = useState([])
  const [FlatscreensValue, setFlatscreensValue] = useState("Flatscreen Tv")
  const [SmartphoneValue, setSmartphoneValue] = useState("Smartphone")
  const [ToggleLocation, setToggleLocation] = useState(false)
  
  const SetLocation = () => setToggleLocation(!ToggleLocation)
  
  
  useEffect(() => {
    const variable = {
      product: FlatscreensValue
    }
  
  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setFlatscreens(response.data.products)
  } else {
  }
  })
  
  Axios.get('/api/users/getUser')
  .then(response => {
    if (response.data.success) {
      setUserData(response.data.doc)
    }
  })
  
  }, [FlatscreensValue])
  
  useEffect(() => {
    const variable = {
      product: SmartphoneValue
    }
  
  Axios.post('./api/product/getPageProducts', variable)
  .then(response => {
  if (response.data.success) {
  
    setSmartPhones(response.data.products)
  } else {
  }
  })
  
  }, [SmartphoneValue])
  
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
      <div style={{ display: 'block', marginLeft: '5px', background: '#fff'}}>
      <div style={{ padding: '60px 20px 50px 20px',display: 'block'}}>
        <div style={{  display: 'flex'}}>
        <div style={{ marginRight: '20px'}}>
          <div style={{ width: '310px', height: '250px', background: '#e7e7e7', borderRadius: '10px',marginBottom: '15px'}}>
            <a href="/product/63638ba9f7442838a867cf99">
                <img 
                style={{ width: '100%', borderRadius: '10px', height: '100%'}}
                 src={HifiDishwasherAd} 
                 alt=""/>
            </a>
          </div>
          <div style={{ width: '310px', height: '220px', background: '#e7e7e7', borderRadius: '10px'}}>
            <a href='/product/6372800ed94ecd11386a49fc'>
                <img 
                style={{ width: '100%', borderRadius: '10px', height: '100%'}} 
                src={HifiCorpAd} alt="" />
            </a>
          </div>
        </div>
        <div style={{ width: '640px', height: '430px', background: '#e7e7e7', borderRadius: '10px'}}>
          <ImageAutoSlide />
        </div>
        <div style={{ marginLeft: '20px'}}>
          <div style={{ width: '310px', height: '250px', background: '#e7e7e7', borderRadius: '10px',marginBottom: '15px'}}>
            <a href="/product/63638ba9f7442838a867cf99">
                <img 
                style={{ width: '100%', borderRadius: '10px', height: '100%'}}
                 src={GameBike} 
                 alt=""/>
            </a>
          </div>
          <div style={{ width: '310px', height: '220px', background: '#e7e7e7', borderRadius: '10px'}}>
            <a href='/product/6372800ed94ecd11386a49fc'>
                <img 
                style={{ width: '100%', borderRadius: '10px', height: '100%'}} 
                src={incredibleSale} alt="" />
            </a>
          </div>
        </div>
        </div>

        <div style={{width: '1300px',height: '300px', display: 'flex',
          alignItems: 'center', marginTop: '60px', justifyContent: 'space-between' }}>
            <div style={{ width: '300px', height: '100%', borderRadius: '10px',
              boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #e7e7e7', background: '#fff'}}>
              <a href="/laptops">
              <div style={{ width: '100%', height: '220px', padding: '10px'}}>
              <img style={{width: '100%', height: '100%', background: '#fff'}} alt=''
              src={LaptopImage}
                />
              </div>
              <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Laptops</span>
              </div>
              </a>
            </div>

            <div style={{ width: '300px', height: '100%', borderRadius: '10px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #c5cbd5', background: '#fff'}}>
              <a href="/iphones">
                <div style={{ width: '100%', height: '220px', padding: '10px'}}>
              <img style={{width: '100%', height: '100%'}}
              src={IphoneImage} alt=''
                />
              </div>
              <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>iPhones</span>
              </div>
              </a>

            </div>

            <div style={{ width: '300px', height: '100%', borderRadius: '10px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #c5cbd5', background: '#fff'}}>
              <a href="/headphones">
                <div style={{ width: '100%', height: '220px', padding: '10px'}}>
              <img style={{width: '100%', height: '100%'}} alt=''
              src={HeadphoneImage}
                />
              </div>
              <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Headphones</span>
              </div>
              </a>
            </div>
            <div style={{ width: '300px', height: '100%', borderRadius: '10px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #c5cbd5', background: '#fff'}}>
              <a href="/appliances">
                <div style={{ width: '100%', height: '220px', padding: '10px 20px'}}>
                <img style={{width: '100%', height: '100%'}}
              src={ApplianceImage} alt=''
                />
              </div>
              <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Appliances</span>
              </div>
              </a>
            </div>
        </div>

        {Flatscreens.length > 5 ? 
          <div style={{ width: '1300px', background: '#fff', borderRadius: '10px', marginTop: '60px'
        , border: '2px solid royalblue',
          }}>
          <div style={{ padding: '0px 20px 0px 20px', borderTopLeftRadius: '6px', borderTopRightRadius: '6px', background: 'royalblue', display: 'flex', justifyContent: 'space-between'}}> 
          <div>
          <span style={{ fontSize: '21px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>Flat Screen Tv's</span>
          </div>
          <div style={{ padding: '5px 30px 0px 0px'}}>
            <a href='/flatscreens'>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>see All</span>
            </a>
          </div>
          </div>
        <ElectronicSlider Products={Flatscreens}  />
        </div>
        :
        <></>
        }

        {SmartPhones.length > 5 ?
        <div style={{ borderRadius: '10px', width: '1300px', background: '#fff', marginTop: '30px',
         border: '2px solid royalblue', 
          }}>
          <div style={{ padding: '0px 20px 0px 20px', background: 'royalblue', display: 'flex', borderTopLeftRadius: '6px', borderTopRightRadius: '6px', justifyContent: 'space-between'}}> 
          <div>
          <span style={{ fontSize: '21px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>Smartphones</span>
          </div>
          <div style={{ padding: '5px 30px 0px 0px'}}>
            <a href='smartphones'>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>see All</span>
            </a>
          </div>
          </div>
        <SmartphonesSlider 
        Products={SmartPhones}
         />
        </div>
        :
        <></>
        }

<div style={{width: '1300px',height: '300px', display: 'flex',
          alignItems: 'center', marginTop: '35px', justifyContent: 'space-between' }}>
            <div style={{ width: '300px', height: '100%', borderRadius: '10px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #c5cbd5', background: '#fff'}}>
              <a>
              <div style={{ width: '100%', height: '220px', padding: '10px'}}>
              <img style={{width: '100%', height: '100%'}}
              src={MakeupImage} alt=''
                />
              </div>
              <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Beauty</span>
              </div>
              </a>
            </div>

            <div style={{ width: '300px', height: '100%', borderRadius: '10px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #c5cbd5', background: '#fff'}}>
              <a href="/health-devices">
                <div style={{ width: '100%', height: '220px', padding: '10px'}}>
              <img style={{width: '100%', height: '100%'}} alt=''
              src={HealthDeviceImage}
                />
              </div>
              <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Health</span>
              </div>
              </a>

            </div>

            <div style={{ width: '300px', height: '100%', borderRadius: '10px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #c5cbd5', background: '#fff'}}>
              <a>
                <div style={{ width: '100%', height: '220px', padding: '10px'}}>
              <img style={{width: '100%', height: '100%'}} alt=''
              src={BikeImage}
                />
              </div>
              <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Recreation</span>
              </div>
              </a>
            </div>
            <div style={{ width: '300px', height: '100%'}}>
              <div style={{ width: '300px', height: '140px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #e7e7e7', background: '#fff'}}>
                <a>
                <div style={{ width: '100%', height: '105px', padding: '10px 20px 0px 20px'}}>
                <img style={{width: '100%', height: '100%'}} alt=''
                src={ToolsImage}
                />
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Tools</span>
              </div>
              </a>
              </div>

              <div style={{ width: '300px', height: '140px', borderRadius: '10px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #c5cbd5', background: '#fff'}}>
                <a href="/power-tools">
                <div style={{ width: '100%', height: '105px', padding: '10px 20px 0px 20px'}}>
                <img style={{width: '100%', height: '100%'}} alt=''
              src={PowerToolImage}
                />
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Power Tools</span>
              </div>
              </a>
              </div>

            </div>
        </div>

<div style={{width: '1300px',height: '300px', display: 'flex',
          alignItems: 'center', marginTop: '35px', justifyContent: 'space-between' }}>
              <div style={{ width: '300px', height: '100%'}}>
              <div style={{ width: '300px', height: '140px', borderRadius: '10px', marginBottom: '20px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #e7e7e7', background: '#fff'}}>
                <a>
                <div style={{ width: '100%', height: '105px', padding: '10px 20px 0px 20px'}}>
                <img style={{width: '100%', height: '100%'}} alt=''
              src={FlowerRingImage}
                />
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Jewellery</span>
              </div>
              </a>
              </div>

              <div style={{ width: '300px', height: '140px', borderRadius: '10px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #c5cbd5', background: '#fff'}}>
                <a href="/watches">
                <div style={{ width: '100%', height: '105px', padding: '10px 20px 0px 20px'}}>
                <img style={{width: '100%', height: '100%'}} alt=''
              src={WatchImage}
                />
              </div>
              <div style={{ width: '100%', display: 'flex', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Watches</span>
              </div>
              </a>
              </div>

            </div>
            <div style={{ width: '300px', height: '100%', borderRadius: '10px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #c5cbd5', background: '#fff'}}>
              <a>
              <div style={{ width: '100%', height: '220px', padding: '10px'}}>
              <img style={{width: '100%', height: '100%'}}
              src={GolfImage} alt=''
                />
              </div>
              <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Sports</span>
              </div>
              </a>
            </div>

            <div style={{ width: '300px', height: '100%', borderRadius: '10px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #c5cbd5', background: '#fff'}}>
              <a>
                <div style={{ width: '100%', height: '220px', padding: '10px'}}>
              <img style={{width: '100%', height: '100%'}}
              src={MattressImage} alt=''
                />
              </div>
              <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Bedding</span>
              </div>
              </a>

            </div>

            <div style={{ width: '300px', height: '100%', borderRadius: '10px', boxShadow: '0px 1px 2px 1px #c5cbd5', border: '1px solid #c5cbd5', background: '#fff'}}>
              <a>
                <div style={{ width: '100%', height: '220px', padding: '10px'}}>
              <img style={{width: '100%', height: '100%'}} alt=''
              src={FurnitureImage}
                />
              </div>
              <div style={{ width: '100%', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <span style={{ fontWeight: '700', color: '#13E780', fontSize: '22px'}}>Home Decore</span>
              </div>
              </a>
            </div>
        </div>

        {/* <div style={{ width: '1300px', background: '#fff', borderRadius: '10px', marginTop: '35px'
        , border: '2px solid royalblue',
        }}>
          <div style={{ padding: '0px 20px 0px 20px', background: 'royalblue', display: 'flex', borderTopLeftRadius: '6px', borderTopRightRadius: '6px', justifyContent: 'space-between'}}> 
          <div>
          <span style={{ fontSize: '21px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>Outfits, Dresses & Tracksuit</span>
          </div>
          <div style={{ padding: '5px 30px 0px 0px'}}>
            <a>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>see All</span>
            </a>
          </div>
          </div>
        <ClothingSlider />
        </div> */}

        {/* <div style={{ width: '1300px', background: '#fff', borderRadius: '10px', marginTop: '30px'
        , border: '2px solid royalblue',
        }}>
          <div style={{ padding: '0px 20px 0px 20px', background: 'royalblue', display: 'flex', borderTopLeftRadius: '6px', borderTopRightRadius: '6px', justifyContent: 'space-between'}}> 
          <div>
          <span style={{ fontSize: '21px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>Shoes, Sneakers and Footware</span>
          </div>
          <div style={{ padding: '5px 30px 0px 0px'}}>
            <a>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>see All</span>
            </a>
          </div>
          </div>
        <ShoesSlider/>
        </div> */}

        {/* <div style={{ width: '1300px', background: '#fff', borderRadius: '10px', marginTop: '30px'
        , border: '2px solid royalblue',
        }}>
          <div style={{ padding: '0px 20px 0px 20px', background: 'royalblue', display: 'flex', borderTopLeftRadius: '6px', borderTopRightRadius: '6px', justifyContent: 'space-between'}}> 
          <div>
          <span style={{ fontSize: '21px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>Watches & Smartwatches</span>
          </div>
          <div style={{ padding: '5px 30px 0px 0px'}}>
            <a>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>see All</span>
            </a>
          </div>
          </div>
        <WatchesSlider />
        </div> */}

        {/* <div style={{ width: '1300px', background: '#fff', borderRadius: '10px', marginTop: '35px'
        , border: '2px solid royalblue',
        }}>
          <div style={{ padding: '0px 20px 0px 20px', background: 'royalblue', display: 'flex', borderTopLeftRadius: '6px', borderTopRightRadius: '6px', justifyContent: 'space-between'}}> 
          <div>
          <span style={{ fontSize: '21px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>Furniture</span>
          </div>
          <div style={{ padding: '5px 30px 0px 0px'}}>
            <a>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>see All</span>
            </a>
          </div>
          </div>
        <FurnitureSlider />
        </div> */}

        {/* <div style={{ width: '1300px', background: '#fff', borderRadius: '10px', marginTop: '30px'
        , border: '2px solid royalblue',
        }}>
          <div style={{ padding: '0px 20px 0px 20px', background: 'royalblue', display: 'flex', borderTopLeftRadius: '6px', borderTopRightRadius: '6px', justifyContent: 'space-between'}}> 
          <div>
          <span style={{ fontSize: '21px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>Transport & Mobility</span>
          </div>
          <div style={{ padding: '5px 30px 0px 0px'}}>
            <a>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#fff', fontStyle: 'normal'}}>see All</span>
            </a>
          </div>
          </div>
        <TransportSlider />
        </div> */}

      </div>

      </div>
:
SearchTerms !== "" ?
<div className='listings-container'>
{
(SearchTerms !== "" && searchResults === true) || (SearchTerms !== "" && searchResults === false) ?
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
                  {UserData.userLocation === undefined ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My Town/City:</span>
                  :
                  UserData.userLocation === "Windhoek" ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My City:</span>
                  :
                  UserData.userLocation === "" ?
                  <span style={{ fontSize: '17px', fontWeight: '700', color: '#070606'}}>My Town/City:</span>
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
                 justifyContent: 'center', alignItems: 'center' }}><span style={{color: '#fff', fontSize: '13px', fontWeight: '700'}}>Set</span></a></div>
                </div>
                :
                UserData.userLocation === "Windhoek" ?
                <div className='Filter_location_Windhoek'>
                  <button onClick={SetLocation} className={ToggleLocation ? "active-Filter_location_button": "Filter_location_button"}>
                    {ToggleLocation ?
                    <></>
                    :
                    <>select</>
                    }
                  </button>
                  </div>
                  :
                  <div className='Filter_location_Selected'>
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

export default _Home