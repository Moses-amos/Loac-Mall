import React, { useEffect,useState } from 'react'
import Axios from 'axios'
import '../00Components/pages.css'
import '../0_Home/homepage.css'
import SearchBar from '../00Components/SearchBar/SearchBar'
import {Bars} from "react-loader-spinner";
import SearchedCart from '../00Components/Cards/SearchedProductCart/SearchedCart'
import SpecialsSlider from './BrochureSlider/SpecialsSlider'

function SpecialDealsPage() {

  const [UserData, setUserData] = useState([])
  const [Products, setProducts] = useState([])

  const [StoreName, setStoreName] = useState("")
  const [departmentStores, setdepartmentStores] = useState(0)
  
  const [electronicsStores, setelectronicsStores] = useState(0)
  const [furnitureStores, setfurnitureStores] = useState(0)
  const [clothingStores, setclothingStores] = useState(0)
  const [fashionStores, setfashionStores] = useState(0)
  const [jewelleryStores, setjewelleryStores] = useState(0)

  const [toggleStoreCategories, settoggleStoreCategories] = useState(0)
  const [ToggleLocation, setToggleLocation] = useState(false)

  const SetLocation = () => setToggleLocation(!ToggleLocation)

  const DepartmentStoresTabs = (index) => {
    setdepartmentStores(index);
  } 

  const ElectronicsStoresTabs = (index) => {
    setelectronicsStores(index);
  } 

  const FurnitureStoresTabs = (index) => {
    setfurnitureStores(index);
  } 

  const ClothingStoresTabs = (index) => {
    setclothingStores(index);
  } 

  const FashionStoresTabs = (index) => {
    setfashionStores(index);
  } 

  const JewelleryStoresTabs = (index) => {
    setjewelleryStores(index);
  } 
  
  
  const StoreCategoriesTabs = (index) => {
    settoggleStoreCategories(index);
  }  

  useEffect(() => {

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

  return (
    <div style={{ display: 'block', background: "#f7f3f6"}}>
    <SearchBar showResults={clickSearch} refreshFunction={updateSearchTerms} />
    {SearchTerms === "" ?
  <div className='Visited_container-wrapper'>
  <div className='Visited_page-banner'>
    <div className='Category_selectTabs_box'>
    <div>
      <span className='Special_deals_page_span'>Store Brochures</span>
    </div>
    <div className='Select_Store_tabs_box'>
    <div className={toggleStoreCategories === 1 ? 'Stores_by_Category_box active-Store_by_category' : "Stores_by_Category_box"}
        onClick={()=> {StoreCategoriesTabs(1); FurnitureStoresTabs(0); ElectronicsStoresTabs(0);
         ClothingStoresTabs(0); FashionStoresTabs(0); JewelleryStoresTabs(0); FashionStoresTabs(0)}} >
            <span>Department</span>
          </div>
              <div className={toggleStoreCategories === 2 ? 'Stores_by_Category_box active-Store_by_category' : "Stores_by_Category_box"}
        onClick={()=> {StoreCategoriesTabs(2); FurnitureStoresTabs(0); ClothingStoresTabs(0);
         DepartmentStoresTabs(0); FashionStoresTabs(0); JewelleryStoresTabs(0); FashionStoresTabs(0)}} >
            <span>Electronic</span>
          </div>
    </div>
    <div className={toggleStoreCategories === 1 ? 'Select_tabs_organise' : 'Select_tabs_organise_hide'}>
          <div className={departmentStores ===1 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {DepartmentStoresTabs(1); setStoreName("Bears")}} >
            <span>Bears</span>
          </div>
          <div className={departmentStores ===2 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {DepartmentStoresTabs(2); setStoreName("Game")}} >
            <span>Game</span>
          </div>
          <div className={departmentStores ===3 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {DepartmentStoresTabs(3); setStoreName("HiFi Corp")}} >
            <span>HiFi Corp</span>
          </div>
          <div className={departmentStores ===4 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {DepartmentStoresTabs(4); setStoreName("Home Corp")}} >
            <span>Home Corp</span>
          </div>
          <div className={departmentStores ===5 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {DepartmentStoresTabs(5); setStoreName("House & Home")}} >
          <span>House & Home</span>
          </div>
          <div className={departmentStores ===6 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {DepartmentStoresTabs(6); setStoreName("Incredible")}} >
            <span>Incredible</span>
          </div>
          <div className={departmentStores ===7 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {DepartmentStoresTabs(7); setStoreName("Lewis")}} >
            <span>Lewis</span>
          </div>
          <div className={departmentStores ===8 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {DepartmentStoresTabs(8); setStoreName("Nictus")}} >
          <span>Nictus</span>
          </div>

    </div>

    <div className={toggleStoreCategories === 2 ? 'Select_tabs_organise' : 'Select_tabs_organise_hide'}>
 
          <div className={electronicsStores ===1 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(1); setStoreName("Home Electric")}} >
            <span>Best Home Electric</span>
          </div>
          <div className={electronicsStores ===2 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(2); setStoreName("Cash Crusaders")}} >
            <span>Cash Crusaders</span>
          </div>
          <div className={electronicsStores ===3 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(3); setStoreName("GCM Cellular")}} >
            <span>GCM Cellular</span>
          </div>
          <div className={electronicsStores ===4 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(4); setStoreName("Huawei")}} >
            <span>Huawei</span>
          </div>
          <div className={electronicsStores ===5 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(5); setStoreName("iStore")}} >
            <span>iStore</span>
          </div>
          <div className={electronicsStores ===6 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(6); setStoreName("MTC")}} >
          <span>MTC</span>
          </div>
          <div className={electronicsStores ===7 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(7); setStoreName("Nanodog Gaming")}} >
          <span>Nanodog Gaming</span>
          </div>
          <div className={electronicsStores ===8 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(8); setStoreName("PEBL")}} >
          <span>PEBL</span>
          </div>
          <div className={electronicsStores ===9 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(9); setStoreName("Royal Computers")}} >
          <span>Royal Computers</span>
          </div>
          <div className={electronicsStores ===10 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(10); setStoreName("Samsung")}} >
          <span>Samsung</span>
          </div>
          <div className={electronicsStores ===11 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(11); setStoreName("Supertronix")}} >
          <span>Supertronix</span>
          </div>
          <div className={electronicsStores ===12 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ElectronicsStoresTabs(12); setStoreName("Tn Mobile")}} >
          <span>Tn Mobile</span>
          </div>
    </div>
    <div className='Select_Store_tabs_box'>
    <div className={toggleStoreCategories === 3 ? 'Stores_by_Category_box active-Store_by_category' : "Stores_by_Category_box"}
        onClick={()=> {StoreCategoriesTabs(3); ElectronicsStoresTabs(0); ClothingStoresTabs(0);
         DepartmentStoresTabs(0); FashionStoresTabs(0); JewelleryStoresTabs(0); FashionStoresTabs(0)}} >
            <span>Furniture</span>
          </div>
          <div className={toggleStoreCategories === 4 ? 'Stores_by_Category_box active-Store_by_category' : "Stores_by_Category_box"}
        onClick={()=> {StoreCategoriesTabs(4); ElectronicsStoresTabs(0); FashionStoresTabs(0);
         DepartmentStoresTabs(0); FurnitureStoresTabs(0); JewelleryStoresTabs(0); FashionStoresTabs(0)}} >
            <span>Clothing</span>
          </div>
    </div>
    <div className={toggleStoreCategories === 3 ? 'Select_tabs_organise' : 'Select_tabs_organise_hide'}>
    <div className={furnitureStores ===1 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(1); setStoreName("@Home")}} >
            <span>@Home</span>
          </div>
          <div className={furnitureStores ===2 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(2); setStoreName("Bears")}} >
          <span>Bears</span>
          </div>
          <div className={furnitureStores ===3 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(3); setStoreName("Coricraft")}} >
          <span>Coricraft</span>
          </div>
          <div className={furnitureStores ===4 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(4); setStoreName("Furnmart")}} >
          <span>Furnmart</span>
          </div>
          <div className={furnitureStores ===5 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(5); setStoreName("Home Corp")}} >
          <span>Home Corp</span>
          </div>
          <div className={furnitureStores ===6 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(6); setStoreName("House & Home")}} >
          <span>House & Home</span>
          </div>
          <div className={furnitureStores ===7 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(7); setStoreName("Lewis")}} >
          <span>Lewis</span>
          </div>
          <div className={furnitureStores ===8 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(8); setStoreName("Jet Home")}} >
          <span>Jet Home</span>
          </div>
          <div className={furnitureStores ===9 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(9); setStoreName("Mr Price Home")}} >
          <span>Mr Price Home</span>
          </div>
          <div className={furnitureStores ===10 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(10); setStoreName("Ok Furniture")}} >
          <span>Ok Furniture</span>
          </div>
          <div className={furnitureStores ===11 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(11); setStoreName("Ouhout Meubels")}} >
          <span>Ouhout Meubels</span>
          </div>
          <div className={furnitureStores ===12 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(12); setStoreName("Nictus")}} >
          <span>Nictus</span>
          </div>
          <div className={furnitureStores ===13 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(13); setStoreName("Sleepmasters")}} >
          <span>Sleepmasters</span>
          </div>
          <div className={furnitureStores ===14 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FurnitureStoresTabs(14); setStoreName("Vlopes")}} >
          <span>Vlopes</span>
          </div>
    </div>

    <div className={toggleStoreCategories === 4 ? 'Select_tabs_organise' : 'Select_tabs_organise_hide'}>
          <div className={clothingStores ===1 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(1); setStoreName("Big Daddy")}} >
          <span>Big Daddy</span>
          </div>
          <div className={clothingStores ===2 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(2); setStoreName("Cape Union")}} >
          <span>Cape Union</span>
          </div>
          <div className={clothingStores ===3 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(3); setStoreName("Cotton On")}} >
          <span>Cotton On</span>
          </div>
          <div className={clothingStores ===4 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(4); setStoreName("Dunns")}} >
          <span>Dunns</span>
          </div>
          <div className={clothingStores ===5 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(5); setStoreName("Edgars")}} >
          <span>Edgars</span>
          </div>
          <div className={clothingStores ===6 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(6); setStoreName("Foschini")}} >
          <span>Foschini</span> 
          </div>
          <div className={clothingStores ===7 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(7); setStoreName("Guess")}} >
          <span>Guess</span>
          </div>
          <div className={clothingStores ===8 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(8); setStoreName("Jet")}} >
          <span>Jet</span>
          </div>
          <div className={clothingStores ===9 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(9); setStoreName("Legit")}} >
          <span>Legit</span>
          </div>
          <div className={clothingStores ===10 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(10); setStoreName("Mr Price")}} >
          <span>Mr Price</span>
          </div>
          <div className={clothingStores ===11 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(11); setStoreName("Mr Price Sport")}} >
          <span>Mr Price Sport</span>
          </div>
          <div className={clothingStores ===12 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(12); setStoreName("Sport Scene")}} >
          <span>Sport Scene</span>
          </div>
          <div className={clothingStores ===13 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(13); setStoreName("Shoe City")}} >
          <span>Shoe City</span>
          </div>
          <div className={clothingStores ===14 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(14); setStoreName("Tekkie Town")}} >
          <span>Tekkie Town</span>
          </div>
          <div className={clothingStores ===15 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(15); setStoreName("Total Sport")}} >
          <span>Total Sport</span>
          </div>
          <div className={clothingStores ===16 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(16); setStoreName("Truworths")}} >
          <span>Truworths</span>
          </div>
          <div className={clothingStores ===17 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {ClothingStoresTabs(17); setStoreName("Woolworths")}} >
          <span>Woolworths</span>
          </div>

    </div>
    <div className='Select_Store_tabs_box'>
    <div className={toggleStoreCategories === 5 ? 'Stores_by_Category_box active-Store_by_category' : "Stores_by_Category_box"}
        onClick={()=> {StoreCategoriesTabs(5); ElectronicsStoresTabs(0); ClothingStoresTabs(0);
         DepartmentStoresTabs(0); FurnitureStoresTabs(0); JewelleryStoresTabs(0); FashionStoresTabs(0)}} >
            <span>Fashion</span>
          </div>
          <div className={toggleStoreCategories === 6 ? 'Stores_by_Category_box active-Store_by_category' : "Stores_by_Category_box"}
        onClick={()=> {StoreCategoriesTabs(6); ElectronicsStoresTabs(0); ClothingStoresTabs(0);
         DepartmentStoresTabs(0); FurnitureStoresTabs(0); FashionStoresTabs(0)}} >
            <span>Jewellery</span>
          </div>
    </div>
    <div className={toggleStoreCategories === 5 ? 'Select_tabs_organise' : 'Select_tabs_organise_hide'}>
    <div className={fashionStores ===1 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(1); setStoreName("Beaver Canoe")}} >
            <span>Beaver Canoe</span>
          </div>
    <div className={fashionStores ===2 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(2); setStoreName("Bogart Man")}} >
            <span>Bogart Man</span>
          </div>
          <div className={fashionStores ===3 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(3); setStoreName("Cross Trainer")}} >
          <span>Cross Trainer</span>
          </div>
          <div className={fashionStores ===4 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(4); setStoreName("Exact")}} >
          <span>Exact</span>
          </div>
          <div className={fashionStores ===5 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(5); setStoreName("Forever New")}} >
          <span>Forever New</span>
          </div>
          <div className={fashionStores ===6 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(6); setStoreName("Fabiani")}} >
          <span>Fabiani</span>
          </div>
          <div className={fashionStores ===7 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(7); setStoreName("Identity")}} >
          <span>Identity</span>
          </div>
          <div className={fashionStores ===8 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(8); setStoreName("John Craig")}} >
          <span>John Craig</span>
          </div>
          <div className={fashionStores ===9 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(9); setStoreName("La Coste")}} >
          <span>La Coste</span>
          </div>
          <div className={fashionStores ===10 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(10); setStoreName("Markham")}} >
          <span>Markham</span>
          </div>
          <div className={fashionStores ===11 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(11); setStoreName("Miladys")}} >
          <span>Miladys</span>
          </div>
          <div className={fashionStores ===12 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(12); setStoreName("Old Khaki")}} >
          <span>Old Khaki</span>
          </div>
          <div className={fashionStores ===13 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(13); setStoreName("Polo")}} >
          <span>Polo</span>
          </div>
          <div className={fashionStores ===14 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(14); setStoreName("Refinery")}} >
          <span>Refinery</span>
          </div>
          <div className={fashionStores ===15 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(15); setStoreName("Relay Jeans")}} >
          <span>Relay Jeans</span>
          </div>
          <div className={fashionStores ===16 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(16); setStoreName("Side Step")}} >
          <span>Side Step</span>
          </div>
          <div className={fashionStores ===17 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(17); setStoreName("Studio 88")}} >
          <span>Studio 88</span>
          </div>
          <div className={fashionStores ===18 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(18); setStoreName("Stuttafords")}} >
          <span>Stuttafords</span>
          </div>
          <div className={fashionStores ===19 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {FashionStoresTabs(19); setStoreName("UZZI")}} >
          <span>UZZI</span>
          </div>

    </div>

    <div className={toggleStoreCategories === 6 ? 'Select_tabs_organise' : 'Select_tabs_organise_hide'}>
    <div className={jewelleryStores ===1 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {JewelleryStoresTabs(1); setStoreName("American Swiss")}} >
            <span>American Swiss</span>
          </div>
          <div className={jewelleryStores ===2 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {JewelleryStoresTabs(2); setStoreName("Lovisa")}} >
          <span>Lovisa</span>
          </div>
          <div className={jewelleryStores ===3 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {JewelleryStoresTabs(3); setStoreName("Queen of Namibia")}} >
          <span>Queen of Namibia</span>
          </div>
          <div className={jewelleryStores ===4 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {JewelleryStoresTabs(4); setStoreName("Sterns")}} >
          <span>Sterns</span>
          </div>
          <div className={jewelleryStores ===5 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {JewelleryStoresTabs(5); setStoreName("Steve Madden")}} >
          <span>Steve Madden</span>
          </div>
          <div className={jewelleryStores ===6 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {JewelleryStoresTabs(6); setStoreName("Swarovski")}} >
          <span>Swarovski</span>
          </div>
          <div className={jewelleryStores ===7 ? 'Stores_by_Category_select active-Store_by_category_select' : "Stores_by_Category_select"}
        onClick={()=> {JewelleryStoresTabs(7); setStoreName("Watch Zone")}} >
          <span>Watch Zone</span>
          </div>
    </div>
    </div>
  </div>

          {electronicsStores === undefined ?
          <></>
          :
          electronicsStores === 0 && furnitureStores === 0 && clothingStores === 0 && fashionStores === 0
          && departmentStores === 0 && jewelleryStores === 0 ?
          <></>
          :
          <>
    <div className='View_more_link_box'>
        <div className='My_location_items_box'>
        <a href='/login' style={{ width: '100%', height: '100%', display: 'flex', 
          justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ color: '#656481', fontSize: '13px'}}>View More</span>
        </a>
      </div>
  </div>
          <div className='Store_page_ad'>
          <div className='Brand_Deals_Speials_Box'>
          <div className='Brand_Deals_Box_header'> 
          <div>
          <span className='Brand_Deals_Box_header_span'>{StoreName}</span>
          </div>
          </div>
          <div className='Slider_Padding'>
          <SpecialsSlider
            //  Products={Flatscreens}
           />
          </div>
        </div>
          </div>
          </>
          
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

export default SpecialDealsPage