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
              <Carousel 
              responsive={responsive}
              partialVisible={true}
              swipeable={true}
              draggable={true}
              minimumTouchDrag={50}
              deviceType={props.deviceType}
              arrows={false}
              autoPlay={true}
              autoPlaySpeed={9000}
              infinite={true}
          
          >
            {/* <div style={{ width: '100%', height: '100%', borderRadius: '10px', background: 'lightgray'}}>
            <img alt=""
            src='https://i.imgur.com/yqQQjzi.jpg'
            className='Homepage_large_image' />            
          </div>

          <div style={{ width: '100%', height: '100%', borderRadius: '10px', background: 'lightgray'}}>
            <img alt=""
            src='https://pbs.twimg.com/media/F62uGGcXYAAGcsW?format=jpg&name=medium'
            className='Homepage_large_image' />            
          </div>
          <div style={{ width: '100%', height: '100%', borderRadius: '10px'}}>
            <img alt=""
            
            src='https://pbs.twimg.com/media/F62uGGZWMAAiu2I?format=jpg&name=medium'
            className='Homepage_large_image' />
          </div>

          <div style={{ width: '100%', height: '100%', borderRadius: '10px'}}>
            <img alt=""
            
            src='https://pbs.twimg.com/media/F7qWcW0XEAAuwUE?format=jpg&name=900x900'
            className='Homepage_large_image' />
          </div>
          
           */}

          <div style={{ width: '100%', height: '100%', borderRadius: '10px', background: 'lightgray'}}>
            <img alt=""
            src='https://scontent.fers2-1.fna.fbcdn.net/v/t39.30808-6/386595632_338585395195462_4814981998957599482_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=1rbFGwWIzMgAX_nDBZ9&_nc_oc=AQkTyxV_tGjDfIcic7wDVzIz_UouzAcJ99Qyl_PzzaTKu4Nm3uG6ekzw63D0-QbwT8U&_nc_ht=scontent.fers2-1.fna&oh=00_AfASfrmOvsGmJRExOY_JPb4xFIKhmrTVPH1O1ItFqWdwug&oe=65318EB8'
            className='Homepage_large_image' />            
          </div>
          <div style={{ width: '100%', height: '100%', borderRadius: '10px'}}>
            <img alt=""
            
            src='https://img.offers-cdn.net/assets/uploads/offers/za/23939108/samsung-galaxy-a04-smartphone-large.jpeg'
            className='Homepage_large_image' />
          </div>

          <div style={{ width: '100%', height: '100%', borderRadius: '10px'}}>
            <img alt=""
            
            src='https://scontent.fers2-1.fna.fbcdn.net/v/t45.1600-4/383059046_23861168892580273_7435782542131275564_n.jpg?stp=cp0_dst-jpg_fr_q75_spS444&_nc_cat=102&ccb=1-7&_nc_sid=528f85&_nc_ohc=cehNVMo9uAAAX_2ay77&_nc_ht=scontent.fers2-1.fna&oh=00_AfDWDvUzRnNrcTOn0_UVtIBzvPRmruYBIjtz787ioFVNgw&oe=65315002'
            className='Homepage_large_image' />
          </div>

          <div style={{ width: '100%', height: '100%', borderRadius: '10px', background: 'lightgray'}}>
            <img alt=""
            src='https://scontent.fers2-1.fna.fbcdn.net/v/t45.1600-4/387338994_120200419947810614_5011142092792843095_n.jpg?stp=cp0_dst-jpg_fr_q75_spS444&_nc_cat=101&ccb=1-7&_nc_sid=528f85&_nc_ohc=ZoAOTzmInwUAX96J8rh&_nc_ht=scontent.fers2-1.fna&oh=00_AfBjWwyjX_bcl9P0guF791OppD4NT8WTdqHRdyBokKJfYA&oe=65309D5F'
            className='Homepage_large_image' />            
          </div>

          </Carousel>
            </div>

            <div className='Home_ad_right_box'>
              <div className='Home_ad_top_right'>
                <div style={{ width: '100%', height: '210px', borderRadius: '10px', background: 'lightgray'}}>
            <img alt="" style={{ width: '100%', height: '210px', borderRadius: '10px', background: 'lightgray'}}
            src='https://scontent.fers2-1.fna.fbcdn.net/v/t45.1600-4/385827528_120200317171050614_739299087193319760_n.jpg?stp=cp0_dst-jpg_fr_q75_spS444&_nc_cat=110&ccb=1-7&_nc_sid=528f85&_nc_ohc=KPnBbK2FZA0AX94Lfp0&_nc_ht=scontent.fers2-1.fna&oh=00_AfBHvaauxTT5IuO9pKlOL9jBVmEYq5bYEIeyO7u0SL4LjA&oe=652FAD8C'
            />            
          </div>
          </div>

          <div className='Home_ad_bottom_right'>
          <div style={{ width: '100%', height: '210px', borderRadius: '10px', background: 'lightgray'}}>
            <img alt="" style={{ width: '100%', height: '210px', borderRadius: '10px', background: 'lightgray'}}
            src='https://scontent.fers2-1.fna.fbcdn.net/v/t45.1600-4/386257167_23861202459110273_3600493119400305849_n.jpg?stp=cp0_dst-jpg_p960x960_q75_spS444&_nc_cat=100&ccb=1-7&_nc_sid=528f85&_nc_ohc=_9Qg1LTSDRMAX8dEO2p&_nc_ht=scontent.fers2-1.fna&oh=00_AfCrumk1fhAwTAMqC_IC7PMjzedKtVb-_z_FIU7x9_AKrQ&oe=6531181B'
             />            
          </div>
          </div>
                

            </div>
          </div>
          
          
        </div>

        </div>

        <div className='Home_images_top_boxes'>

          <div className='Home_image_box'>
          <a style={{width: '100%', height: '250px', position: 'relative'}}>
              <div className='home_front_image'>
                  <img  style={{width: '100%', height: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px'}}
                   src='https://i.imgur.com/KWYPUXT.jpg'  alt="" />
              </div>
            </a>
            <div className='home_front_image_title'>
              <a style={{width: '100%', height: '45px'}}> 
              <span className='home_front_image_title_span'>Brand Clothing</span>
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
              <a style={{width: '100%', height: '45px'}}> 
              <span className='home_front_image_title_span'>Mobile Phones</span>
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
              <a style={{width: '100%', height: '45px'}} href='/explore-sneakers'> 
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
              <a style={{width: '100%', height: '45px'}} href='/room-chairs'> 
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
              <a style={{width: '100%', height: '45px'}} href='/explore-sneakers'> 
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
              <a style={{width: '100%', height: '45px'}} href='/room-chairs'> 
              <span className='home_front_image_title_span'>Lounge Suites</span>
              </a>
                
              </div>
          </div>
        </div>

        <div className='Popular_product_categories'>
          <h2 className='Popular_product_categories_span'>Trending Items</h2></div>

        <div className='Popular_product_categories_container'>
        <div className='Popular_categories_resize_box'>
       <div className='Category_box_top'>
                <a href='/laptops'>
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/RWHF5Xi.jpg'
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
                src='https://i.imgur.com/HjYNXO3.jpg'
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
              src='https://i.imgur.com/nFqOvHJ.jpg'
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
                src='https://i.imgur.com/YUwgLKB.jpg'
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
                src='https://i.imgur.com/scdckjC.jpg'
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
              src='https://i.imgur.com/WuhbtLg.jpg'
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
                src='https://i.imgur.com/O9ZSb1d.jpg'
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
              src='https://i.imgur.com/K4vsr6D.jpg'
              />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>Home Decore</span>
              </div>
              </a>
              </div>
              <div className='Category_box_top'>
              <a href='/kitchen-appliances'>
                <div className='Category_box_top_image'>
                <img  style={{width: '100%', height: '100%'}} alt=''
                src='https://i.imgur.com/jVAs2JK.jpg'
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
              src='https://i.imgur.com/d7ebUlg.jpg'
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
                src='https://i.imgur.com/5pSq2o2.jpg'
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
                src='https://i.imgur.com/ewsvQux.jpg'
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
                src='https://i.imgur.com/PU0iInI.png'
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
              src='https://i.imgur.com/GufMqQ7.png'
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
                src='https://i.imgur.com/dyCXSM7.jpg'
                />
              </div>
              <div className='Category_box_bottom_section'>
              <span className='bottom_section_span'>Stream</span>
              </div>
              </a>
              </div>
              
        <div 
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
         </div>
              
              
       </div>

        </div>

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