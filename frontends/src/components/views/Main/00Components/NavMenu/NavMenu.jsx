import React, { useState, useEffect } from 'react'
import './navmenu.css'
import { USER_SERVER } from '../../../../Config'
import CroppedLogoImage from '../../../../CroppedLogo/croppedlogo.png'
import Axios from 'axios'
import { MenuOutlined } from '@material-ui/icons';
import { NavMenuState, SearchData } from '../../../../../_actions/user_actions'
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SearchOutlined } from '@ant-design/icons';
import '../Navbar/logostyle.css'


function NavMenu(props) {

  function refreshPage() {
    window.location.reload(false);
  }

  const dispatch = useDispatch();

  const userMenu = useSelector(state => state.user)
  const [SearchTerms, setSearchTerms] = useState("")
  
  const [User, setUser] = useState([])
  const [modal, setModal] = useState(false);
  const [PhoneModal, setPhoneModal] = useState(false)
  
  const [toggleFirstCategory, settoggleFirstCategory] = useState(0)
  const [toggleSecondCategory, settoggleSecondCategory] = useState(0)
  const [toggleComputersCategory, settoggleComputersCategory] = useState(0)
  const [togglePhonesAccessories, settogglePhonesAccessories] = useState(0)
  const [toggleCameraAccessories, settoggleCameraAccessories] = useState(0)
  
  const [toggleElectronics, settoggleElectronics] = useState(0)
  const [toggleAppliances, settoggleAppliances] = useState(0)
  const [toggleHome, settoggleHome] = useState(0)
  const [toggleFurniture, settoggleFurniture] = useState(0)
  const [toggleClothesAccessories, settoggleClothesAccessories] = useState(0)
  const [toggleClothing, settoggleClothing] = useState(0)
  const [toggleShoes, settoggleShoes] = useState(0)
  const [togglePersonalCare, settogglePersonalCare] = useState(0)
  const [toggleMakeup, settoggleMakeup] = useState(0)
  const [toggleSportsOutdoor, settoggleSportsOutdoor] = useState(0)
  const [toggleHomeImprovements, settoggleHomeImprovements] = useState(0)

  const onChangeSearch = (event) => {
    setSearchTerms(event.currentTarget.value)
  
  }

  useEffect(() => {
    dispatch(SearchData(SearchTerms))

    if (props && props.user) {
      setSearchTerms(props.user.search)
    }
    
  }, [SearchTerms])

    useEffect(() => {
      if (userMenu && userMenu.menuBox) {
        setPhoneModal(userMenu.menuBox)
      }
        
      }, [userMenu.menuBox])

      useEffect(() => {

        dispatch(NavMenuState(PhoneModal))
          
        }, [PhoneModal])

  const ElectronicsCategory = (index) => {
    settoggleElectronics(index);
  }

  const AppliancesCategory = (index) => {
    settoggleAppliances(index);
  }

  const FurnitureCategory = (index) => {
    settoggleFurniture(index);
  }

  const HomeCategory = (index) => {
    settoggleHome(index);
  }

  const ClothesAccessoriesCategory = (index) => {
    settoggleClothesAccessories(index);
  }

  const ClothingCategory = (index) => {
    settoggleClothing(index);
  }

  const ShoesCategory = (index) => {
    settoggleShoes(index);
  }

  const PersonalCategory = (index) => {
    settogglePersonalCare(index);
  }

  const MakeupCategory = (index) => {
    settoggleMakeup(index);
  }

  const SportsOutdoorCategory = (index) => {
    settoggleSportsOutdoor(index);
  }

  const HomeImprovementsCategory = (index) => {
    settoggleHomeImprovements(index);
  }


  const CameraAccessoriesCategory = (index) => {
    settoggleCameraAccessories(index);
  }

  const PhonesAccessoriesCategory = (index) => {
    settogglePhonesAccessories(index);
  }

  const FirstCategory = (index) => {
    settoggleFirstCategory(index)
  }

  const SecondCategory = (index) => {
    settoggleSecondCategory(index);
  }

  const ComputersCategory = (index) => {
    settoggleComputersCategory(index);
  }
  

  useEffect(() => {
    Axios.get('./api/users/getUser')
    .then(response => {
    if (response.data.success) {
      setUser(response.data.doc)
    } 
  })

    }, [])


    const logoutHandler = () => {
      Axios.get(`${USER_SERVER}/logout`).then(response => {
        if (response.status === 200) {
          props.history.push("/");
        } else {
          alert('Log Out Failed')
        }
      });
    };

return (
  <>
    <div className='Nav-menu'>
    <div className='Nav_menu_box'>
    <div className='Nav_category_sidbar'>
    <div className='Category_sidebar' onClick={() => setModal(true)}>
        <div className='Category_sidebar_title'>
        Discover
        </div>
                
        <div className='Sidbar_menu_svg'>
          <MenuOutlined style={{ height: '1em'}} className='Category_sidebar_Icon_style' />

      </div>
      
      </div>
    </div>
    <div className='nav_search_second'>
        <div className='nav_search_flex_box'>
          
          <div className='nav_search_bar'>
                <input className='Nav_search_bar_input_main' 
                    value={SearchTerms} 
                    maxLength={50}
                    placeholder='Search with us'
                    onChange={onChangeSearch}
                    type='text'
                />
                </div>
                <div className='nav_search_bar_button_box'>
                    <button className='Nav_search_bar_button'>
                        <span style={{width: '100%', height: '100%', 
                        display: 'flex', justifyContent: 'center',
                        alignItems: 'center'}}><SearchOutlined /></span>
                    </button>
                </div>
        </div> 
      </div>

    <div className='Nav_category_menus'>
    <div className='Menu-Item-inline'>
          <a 
           href='/portable-speakers'
          >
            <div className='Menu-Item-inline_box'>
              <span className='Menu-Item-inline_span'>Bluetooth Speakers</span>
            </div>
          </a>
        </div>
        <div className='Menu-Item-inline'>
          <a 
           href='/iPhones'
          >
            <div className='Menu-Item-inline_box'>
              <span className='Menu-Item-inline_span'>iPhones</span>
            </div>
          </a>
        </div>
        <div className='Menu-Item-inline'>
          <a 
           href='/cameras'
          >
            <div className='Menu-Item-inline_box'>
              <span className='Menu-Item-inline_span'>Cameras</span>
            </div>
          </a>
        </div>
        <div className='Menu-Item-inline'>
          <a 
           href='/smart-watches'
          >
            <div className='Menu-Item-inline_box'>
              <span className='Menu-Item-inline_span'>Smart Watches</span>
            </div>
          </a>
        </div>
        <div className='Menu-Item-inline'>
          <a
           href='/living-room'
           >
            <div className='Menu-Item-inline_box'>
              <span className='Menu-Item-inline_span'>Furniture</span>
            </div>
          </a>
        </div>
        <div className='Menu-Item-inline'>
          <a 
           href='/kitchen-appliances'
          >
            <div className='Menu-Item-inline_box'>
              <span className='Menu-Item-inline_span'>Kitchen Appliances</span>
            </div>
          </a>
        </div>
        <div className='Menu-Item-inline'>
          <a 
           href='/home-decore'
          >
            <div className='Menu-Item-inline_box'>
              <span className='Menu-Item-inline_span'>Home Decore</span>
            </div>
          </a>
        </div>
        {/* <div className='Menu-Item-View_Brochure'>
          <a 
           href='/special-deals'
          >
            <div className='Menu-Item-View_Brochure_box'>
              <span className='Menu-Item-View_Brochure_span'>View Specials</span>
            </div>
          </a>
        </div> */}
    </div>
    </div>
</div>
<div className={modal === true || PhoneModal === true ? 'Active_modal' : 'hide_sidebar'}>
    <div onClick={() => {setModal(false); setPhoneModal(false)}} className="overlay"></div>
    <div className='Sidebar_menu_container'>
      <div className='Logo_close_box'>
        <div style={{ display: 'flex'}}>
        <div style={{ width: '25px', height: '25px', marginTop: '9px' }} >
            <a href="/">     
                <img 
                style={{ width: '25px', height: '25px'}}
                src={CroppedLogoImage} 
                alt=""/>
            </a> 
            </div>
            <div className='Logo_name_box' >
            <a href="/">     
                <h1 className='Company_name_h1'>loac mall</h1>
            </a> 
            </div>
        </div>

        <div className='Header_close_tag' onClick={() => {setModal(false); setPhoneModal(false)}}>
        <svg loading='lazy'  stroke="#c25be9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve" aria-hidden="true" role="img" className="lZero-bottom-close-button" height="22" width="22"><path d="M4.75 20c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14.5-14.5c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-14.5 14.5c-.15.15-.34.22-.53.22z"></path>
        <path d="M19.25 20c-.19 0-.38-.07-.53-.22L4.22 5.28c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l14.5 14.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"></path></svg>
        </div>
        <div className='Header_close_tag_phone' onClick={() => {setPhoneModal(false); setModal(false)}}>
        <svg loading='lazy'  stroke="#c25be9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlSpace="preserve" aria-hidden="true" role="img" className="lZero-bottom-close-button" height="22" width="22"><path d="M4.75 20c-.19 0-.38-.07-.53-.22a.754.754 0 0 1 0-1.06l14.5-14.5c.29-.29.77-.29 1.06 0s.29.77 0 1.06l-14.5 14.5c-.15.15-.34.22-.53.22z"></path>
        <path d="M19.25 20c-.19 0-.38-.07-.53-.22L4.22 5.28c-.29-.29-.29-.77 0-1.06s.77-.29 1.06 0l14.5 14.5c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22z"></path></svg>
        </div>
        </div>
        <div className={ toggleFirstCategory === 0 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FirstCategory(1)}}>
          <div className='Top_categories_Select_department'>Departments</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>

        {User && User._id === undefined ?
                <></>
                :
                User.operateLocation === "Admin" ?
                <></>
                :
             <div className='Nav_User_menu'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/overview'
          ><div className='Top_categories_Select_link'>Overview</div></a></div>
         {/* <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/user/cart'
          ><div className='Top_categories_Select_link'>Cart</div></a></div> */}
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/wishlist'
          ><div className='Top_categories_Select_link'>Wishlist</div></a></div>
         
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/request-made'
          ><div className='Top_categories_Select_link'>Requests</div></a></div>
          
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/0settings'
          ><div className='Top_categories_Select_link'>Settings</div></a></div>
        </div>   
        }

        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'>
          <a className='Top_categories_Select_link_tag'
          href='/portable-speakers'
          ><div className='Top_categories_Select_link'>
            <div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://i5.walmartimages.com/seo/JBL-Flip-4-Waterproof-Portable-Bluetooth-Speaker_5ae2eb48-26b0-4d08-abe7-16737fb35319_1.2bd93a875b18e87efa7535c1ba48fc9a.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>
            Bluetooth Speakers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/iPhones'
          ><div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://powermaccenter.com/cdn/shop/files/iPhone_14_Pro_Deep_Purple_PDP_Image_Position-1b__en-US_33aecbd6-1cfa-4d3b-9a03-b1ae3119551f_823x.jpg?v=1689791496" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>iPhones</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/living-room'
          ><div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://www.clubfurniture.com/cdn/shop/products/maxinefabricaccent_leander4_1024x1024.jpg?v=1637607987" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Furniture</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/kitchen-appliances'
          ><div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BVIcwXwAE9-NR?format=jpg&name=small" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Kitchen Appliances</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/home-decore'
          ><div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BU_MFXgAEUiFQ?format=jpg&name=large" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Home Decore</div></a></div>
          {/* <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/special-deals'
          ><div className='Top_categories_Select_link'>Store Specials</div></a></div> */}
          {/* {User && User.operateLocation === "Admin" ?
           
           <div className='Top_categories_Select_market'><a className='Top_categories_Select_link_tag'
            href={`/0/${User._id}`}
          ><div className='Top_categories_Select_link'>Marketing Account</div></a></div>
            :
            <></>
          } */}

        </div>
        </div>
        <div className={ toggleFirstCategory === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FirstCategory(0)}}>
          <div className='Top_categories_Select_department'>Back to Main</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select' onClick={() => {SecondCategory(1);FirstCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BX2J8WwAAo_G5?format=jpg&name=360x360" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Electronics</div></a></div>
          <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(2);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BX2J5XYAAzULe?format=jpg&name=large" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Appliances</div></a></div>
          <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(3);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BX2J5WcAAntdG?format=jpg&name=medium" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Home, Furniture</div></a></div>
          <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(4);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BX2KCWgAAeJgw?format=jpg&name=small" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Clothing & Accessories</div></a></div>
          <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(5);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BYn7BXUAAAILF?format=jpg&name=small" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Video Games</div></a></div>
        {/*  <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(6);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://i5.walmartimages.com/seo/Frigidaire-GCRG3060AF-30-Gallery-Series-Stainless-Steel-Gas-Range-with-5-cu-ft-Oven-Capacity-5-Burners-Air-Fry-and-True-Convection_3bb73b77-f86c-45e3-be8a-c8da573c3a87.4f1f12c54964d1bbfa371b7b84a891af.png" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Baby</div></a></div>
          <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(7);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://i5.walmartimages.com/seo/Frigidaire-GCRG3060AF-30-Gallery-Series-Stainless-Steel-Gas-Range-with-5-cu-ft-Oven-Capacity-5-Burners-Air-Fry-and-True-Convection_3bb73b77-f86c-45e3-be8a-c8da573c3a87.4f1f12c54964d1bbfa371b7b84a891af.png" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Beauty, Personal Care</div></a></div>
           <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(8);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://i5.walmartimages.com/seo/Frigidaire-GCRG3060AF-30-Gallery-Series-Stainless-Steel-Gas-Range-with-5-cu-ft-Oven-Capacity-5-Burners-Air-Fry-and-True-Convection_3bb73b77-f86c-45e3-be8a-c8da573c3a87.4f1f12c54964d1bbfa371b7b84a891af.png" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Toys, Games</div></a></div>
            <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(9);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://i5.walmartimages.com/seo/Frigidaire-GCRG3060AF-30-Gallery-Series-Stainless-Steel-Gas-Range-with-5-cu-ft-Oven-Capacity-5-Burners-Air-Fry-and-True-Convection_3bb73b77-f86c-45e3-be8a-c8da573c3a87.4f1f12c54964d1bbfa371b7b84a891af.png" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Bicycles, Skateboords</div></a></div>
          <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(10);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://i5.walmartimages.com/seo/Frigidaire-GCRG3060AF-30-Gallery-Series-Stainless-Steel-Gas-Range-with-5-cu-ft-Oven-Capacity-5-Burners-Air-Fry-and-True-Convection_3bb73b77-f86c-45e3-be8a-c8da573c3a87.4f1f12c54964d1bbfa371b7b84a891af.png" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Health, Wellness</div></a></div>
            <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(11);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://i5.walmartimages.com/seo/Frigidaire-GCRG3060AF-30-Gallery-Series-Stainless-Steel-Gas-Range-with-5-cu-ft-Oven-Capacity-5-Burners-Air-Fry-and-True-Convection_3bb73b77-f86c-45e3-be8a-c8da573c3a87.4f1f12c54964d1bbfa371b7b84a891af.png" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Fitness</div></a></div>
          <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(12);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Sports & Outdoors</div></a></div>
          <div className='Top_categories_Select' 
          onClick={() => {SecondCategory(13);FirstCategory()}}
          ><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Home Improvements</div></a></div> */}
        </div>
        </div>

        {/* Electronics */}
        <div className={ toggleSecondCategory === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(1); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BfTY2WYAAY57K?format=jpg&name=small" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Computers & Accessories</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(2); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BfTY6X0AA_AaR?format=jpg&name=medium" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Cell Phones, Tablets</div></a></div>
          <div className='Top_categories_Select' 
           onClick={() => {ElectronicsCategory(3); SecondCategory()}}
              ><a>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BgkFwWwAAVh2T?format=jpg&name=medium" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>TVs & Home Theater</div></a></div>
          <div className='Top_categories_Select' 
           onClick={() => {ElectronicsCategory(4); SecondCategory()}}
              ><a>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BfTY0WcAArh1F?format=jpg&name=large" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Cameras, Camcorders Other</div></a></div>
          <div className='Top_categories_Select' 
           onClick={() => {ElectronicsCategory(5); SecondCategory()}}
              ><a>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BjqkpXUAEgRWB?format=jpg&name=medium" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Headphones & Earbuds</div></a></div>
          <div className='Top_categories_Select' 
           onClick={() => {ElectronicsCategory(6); SecondCategory()}}
              ><a>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BkliZXgAAReMV?format=jpg&name=360x360" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Video Games</div></a></div>
          <div className='Top_categories_Select' 
           onClick={() => {ElectronicsCategory(7); SecondCategory()}}
              ><a>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BjqkrW4AAOr8v?format=jpg&name=large" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Speakers & Audio Systems</div></a></div>
          {/* <div className='Top_categories_Select' 
           onClick={() => {ElectronicsCategory(8); SecondCategory()}}
              ><a>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BYn7BXUAAAILF?format=jpg&name=small" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Wearable Technology</div></a></div>
          <div className='Top_categories_Select' 
           onClick={() => {ElectronicsCategory(9); SecondCategory()}}
              ><a>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BYn7BXUAAAILF?format=jpg&name=small" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Wi-Fi & Networking</div></a></div>
          <div className='Top_categories_Select' 
           onClick={() => {ElectronicsCategory(10); SecondCategory()}}
              ><a>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BYn7BXUAAAILF?format=jpg&name=small" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Smart Home, Security</div></a></div>
          <div className='Top_categories_Select' 
           onClick={() => {ElectronicsCategory(11); SecondCategory()}}
              ><a>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BYn7BXUAAAILF?format=jpg&name=small" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Auto Electronics</div></a></div> */}
        </div>
        </div>

        {/* Appliances */}
        <div className={ toggleSecondCategory === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BxBVPXAAAQ0Nu?format=jpg&name=360x360" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Refrigerators</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BxBTEWAAAGBuh?format=jpg&name=small" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Ranges, Stoves</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8Bw0CDWcAAfyLa?format=jpg&name=360x360" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Cooktops</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BxBXMWAAAxKnq?format=jpg&name=900x900" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Wall Ovens</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8Bw0C2XwAEbaTa?format=jpg&name=large" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Dishwashers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8Bw0C3W8AAiRdz?format=jpg&name=small" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Freezers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8BxBSaXcAAmjCg?format=jpg&name=900x900" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Microwaves</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8Bw0B-WIAAe7JN?format=jpg&name=360x360" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Bundle Sale</div></a></div>
          {/* <div className='Top_categories_Select' onClick={() => {AppliancesCategory(1); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Major kitchen Appliance</div></a></div>
          <div className='Top_categories_Select' onClick={() => {AppliancesCategory(2); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Small kitchen Appliance</div></a></div>
          <div className='Top_categories_Select' onClick={() => {AppliancesCategory(3); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Washers & Dryers</div></a></div> */}
          {/* <div className='Top_categories_Select' onClick={() => {AppliancesCategory(4); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Cooling, Air Quality</div></a></div>
          <div className='Top_categories_Select' onClick={() => {AppliancesCategory(5); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Outdoor Appliances</div></a></div>
          <div className='Top_categories_Select' onClick={() => {AppliancesCategory(6); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Floor Care, Vacuums</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/essential-tools'
          >
            <div className='Top_categories_Select_link'>Irons, Steamers & Accessories</div></a></div>
          <div className='Top_categories_Select' onClick={() => {AppliancesCategory(7); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Power Tools</div></a></div>
          <div className='Top_categories_Select' onClick={() => {AppliancesCategory(8); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Garden & Backyard Tools</div></a></div> */}

        </div>
        </div>

        {/* Furniture, Home */}
        <div className={ toggleSecondCategory === 3 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          {/* <div className='Top_categories_Select' onClick={() => {HomeCategory(1); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Furniture</div></a></div>
          <div className='Top_categories_Select' onClick={() => {HomeCategory(2); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Home Decore</div></a></div>
          <div className='Top_categories_Select' onClick={() => {HomeCategory(3); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Kitchen & Dining</div></a></div> */}
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/living-room'
          >
            <div className='Top_categories_Select_link'>Furniture</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/home-decore'
          >
            <div className='Top_categories_Select_link'>Home Decore</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/room-chairs'
          >
            <div className='Top_categories_Select_link'>Chairs, Recliners</div></a></div>
          {/* <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/ornaments-textiles'
          >
            <div className='Top_categories_Select_link'>Ornaments & Textiles</div></a></div>

          <div className='Top_categories_Select' onClick={() => {HomeCategory(4); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Bathroom Placements</div></a></div>
          <div className='Top_categories_Select' onClick={() => {HomeCategory(5); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Kitchen Placements</div></a></div>
          <div className='Top_categories_Select' onClick={() => {HomeCategory(6); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Bedding</div></a></div> */}

        </div>
        </div>

        {/* Clothes, Accessories */}
        <div className={ toggleSecondCategory === 4 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          {/* <div className='Top_categories_Select' onClick={() => {ClothesAccessoriesCategory(1); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Clothing</div></a></div> */}
            {/* <div className='Top_categories_Select' onClick={() => {ClothesAccessoriesCategory(5); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Top Brands</div></a></div> */}
          <div className='Top_categories_Select' onClick={() => {ClothesAccessoriesCategory(2); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8B1wc9W0AINOHX?format=jpg&name=small" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Shoes & Sneakers</div></a></div>
          {/* <div className='Top_categories_Select' onClick={() => {ClothesAccessoriesCategory(3); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8Bw0B-WIAAe7JN?format=jpg&name=360x360" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Jewelry</div></a></div> */}
            <div className='Top_categories_Select' onClick={() => {ClothesAccessoriesCategory(4); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8B1wdAWMAAInuQ?format=jpg&name=large" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Watches</div></a></div>

            {/* <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-handbags'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8Bw0B-WIAAe7JN?format=jpg&name=360x360" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Handbags & Purses</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bags-backpacks'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8Bw0B-WIAAe7JN?format=jpg&name=360x360" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Bags, Backpacks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/perfumes-Colognes'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8Bw0B-WIAAe7JN?format=jpg&name=360x360" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Perfumes, Colognes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-accessories'
          >
            <div className='Top_categories_Select_link'><div className='Sidebar_category_image'>
              <img loading='lazy'  src="https://pbs.twimg.com/media/F8Bw0B-WIAAe7JN?format=jpg&name=360x360" 
              style={{ width: '100%', height: '100%'}}
             alt="" />
            </div>Hats, Other</div></a></div> */}
        </div>
        </div>

        {/* Video Games */}
        <div className={ toggleSecondCategory === 5 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/playStation-consoles'
          >
            <div className='Top_categories_Select_link'>PlayStations Consoles</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/xbox-consoles'
          >
            <div className='Top_categories_Select_link'>Xbox Consoles</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/nintendo'
          >
            <div className='Top_categories_Select_link'>Nintendo Consoles</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/virtual-reality'
          >
            <div className='Top_categories_Select_link'>Virtual Reality</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/pc-gaming'
          >
            <div className='Top_categories_Select_link'>PC Gaming</div></a></div>
        </div>
        </div>

        {/* Baby Products */}
        <div className={ toggleSecondCategory === 6 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-products'
          >
            <div className='Top_categories_Select_link'>Strollers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-products'
          >
            <div className='Top_categories_Select_link'>Car Seats</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-products'
          >
            <div className='Top_categories_Select_link'>Baby Carriers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-products'
          >
            <div className='Top_categories_Select_link'>Bassinets, Sleepers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-products'
          >
            <div className='Top_categories_Select_link'>Baby Swings, Bouncers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-products'
          >
            <div className='Top_categories_Select_link'>Baby Walkers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-activity'
          >
            <div className='Top_categories_Select_link'>Nursery Centers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-activity'
          >
            <div className='Top_categories_Select_link'>Baby Gym, Playmats</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-activity'
          >
            <div className='Top_categories_Select_link'>Baby Playards</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-items'
          >
            <div className='Top_categories_Select_link'>Diaper Bags</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-activity'
          >
            <div className='Top_categories_Select_link'>High Chairs & Boosters</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-items'
          >
            <div className='Top_categories_Select_link'>Toddler Potties</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-items'
          >
            <div className='Top_categories_Select_link'>Diaper Pails</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-items'
          >
            <div className='Top_categories_Select_link'>Bath Tubs, Other</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-toys'
          >
            <div className='Top_categories_Select_link'>Baby Toys</div></a></div>
        </div>
        </div>

        {/* Beauty, Personal Care */}
        <div className={ toggleSecondCategory === 7 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select' onClick={() => {PersonalCategory(1); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Hair Care</div></a></div>
          <div className='Top_categories_Select' onClick={() => {PersonalCategory(2); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Makeup</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/perfumes-Colognes'
          >
            <div className='Top_categories_Select_link'>Perfumes, Colognes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/oral-care'
          >
            <div className='Top_categories_Select_link'>Oral Care</div></a></div>
        </div>
        </div>

        {/* Toys, Games */}
        <div className={ toggleSecondCategory === 8 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>

        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/board-games'
          >
            <div className='Top_categories_Select_link'>Board Games, Puzzles</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/dolls-houses'
          >
            <div className='Top_categories_Select_link'>Dolls & Houses</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/blaster-toys'
          >
            <div className='Top_categories_Select_link'>Toy Blasters</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/electric-toys'
          >
            <div className='Top_categories_Select_link'>Electric Toys, Drones</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baby-toys'
          >
            <div className='Top_categories_Select_link'>Baby Toys</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/block-toys'
          >
            <div className='Top_categories_Select_link'>LEGO & Building Sets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/action-figures'
          >
            <div className='Top_categories_Select_link'>Action Figures</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/stuffed-animals'
          >
            <div className='Top_categories_Select_link'>Stuffed Animals</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-toys'
          >
            <div className='Top_categories_Select_link'>Outdoor Toys, Other</div></a></div>
        </div>
        </div>

        {/* Bicycles, Skateboards  */}
        <div className={ toggleSecondCategory === 9 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>

        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bicycles'
          >
            <div className='Top_categories_Select_link'>Bicycles</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/skateboards-scooters'
          >
            <div className='Top_categories_Select_link'>Skateboards, Scooters</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/skateboards-scooters'
          >
            <div className='Top_categories_Select_link'>Hoverboards</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/skateboards-scooters'
          >
            <div className='Top_categories_Select_link'>Roller, Inline Skates</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/powered-rideons'
          >
            <div className='Top_categories_Select_link'>Go Karts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/powered-rideons'
          >
            <div className='Top_categories_Select_link'>Powered Ride ons</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/rideon-toys'
          >
            <div className='Top_categories_Select_link'>Wagons</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/rideon-toys'
          >
            <div className='Top_categories_Select_link'>Rocking Horses, Hoppers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/rideon-toys'
          >
            <div className='Top_categories_Select_link'>Pedal, Push Toys</div></a></div>

        </div>
        </div>

        {/* Health, Wellness */}
        <div className={ toggleSecondCategory === 10 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>

        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/health-devices'
          >
            <div className='Top_categories_Select_link'>Blood Pressure</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/health-devices'
          >
            <div className='Top_categories_Select_link'>Heart Rate</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/health-devices'
          >
            <div className='Top_categories_Select_link'>Electric Thermometer</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/health-aids'
          >
            <div className='Top_categories_Select_link'>Hearing Aid</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/health-devices'
          >
            <div className='Top_categories_Select_link'>Inhaler</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/health-devices'
          >
            <div className='Top_categories_Select_link'>Steam Vaporizer</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/health-aids'
          >
            <div className='Top_categories_Select_link'>Wheelchairs</div></a></div>

        </div>
        </div>

        {/* Fitness */}
        <div className={ toggleSecondCategory === 11 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>

        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/workout-gear'
          >
            <div className='Top_categories_Select_link'>Treadmills</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/gym-equipment'
          >
            <div className='Top_categories_Select_link'>Gym Bikes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/gym-equipment'
          >
            <div className='Top_categories_Select_link'>Ellipticals</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/gym-equipment'
          >
            <div className='Top_categories_Select_link'>Gym Rows</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/workout-gear'
          >
            <div className='Top_categories_Select_link'>Dumbells</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/workout-gear'
          >
            <div className='Top_categories_Select_link'>Weight Scales</div></a></div>

        </div>
        </div>

        {/* Sports, Outdoors */}
        <div className={ toggleSecondCategory === 12 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select' onClick={() => {SportsOutdoorCategory(1); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Sports</div></a></div>
          <div className='Top_categories_Select' onClick={() => {SportsOutdoorCategory(2); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Outdoor Sports</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/camping-gear'
          >
            <div className='Top_categories_Select_link'>Camping Gear</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-items'
          >
            <div className='Top_categories_Select_link'>Pools, Trampolines</div></a></div>
        </div>
        </div>

        {/* Home improvements */}
        <div className={ toggleSecondCategory === 13 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {FirstCategory(1); SecondCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select' onClick={() => {HomeImprovementsCategory(1); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Paints, Supplies</div></a></div>
          <div className='Top_categories_Select' onClick={() => {HomeImprovementsCategory(2); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Tools & Sets</div></a></div>
          <div className='Top_categories_Select' onClick={() => {HomeImprovementsCategory(3); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Kitchen Placements</div></a></div>
            <div className='Top_categories_Select' onClick={() => {HomeImprovementsCategory(4); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Bathroom Placements</div></a></div>
          <div className='Top_categories_Select' onClick={() => {HomeImprovementsCategory(5); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Heating & Cooling</div></a></div>
            <div className='Top_categories_Select' onClick={() => {HomeImprovementsCategory(6);
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Door Hardware</div></a></div>
            <div className='Top_categories_Select' onClick={() => {HomeImprovementsCategory(7); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Power Tools</div></a></div>
            <div className='Top_categories_Select' onClick={() => {HomeImprovementsCategory(8); 
              SecondCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Garden Power Tools</div></a></div>
            <div className='Top_categories_Select'
            // onClick={() => {HomeImprovementsCategory(9); SecondCategory()}}
            ><a>
            <div className='Top_categories_Select_link'>Outdoor Tools</div></a></div>
            <div className='Top_categories_Select' 
            // onClick={() => {HomeImprovementsCategory(10); SecondCategory()}}
              ><a>
            <div className='Top_categories_Select_link'>Wood Working</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/heavy-equipment'
          >
            <div className='Top_categories_Select_link'>Heavy Equipment</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/building-materials'
          >
            <div className='Top_categories_Select_link'>Building Materials</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/protective-equipment'
          >
            <div className='Top_categories_Select_link'>Protective Equipment</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/ropes-straps'
          >
            <div className='Top_categories_Select_link'>Ropes, Straps</div></a></div>

        </div>
        </div>

        {/* Paints, Supplies */}
        <div className={ toggleHomeImprovements === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {HomeImprovementsCategory(); SecondCategory(13)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/paints-coats'
          >
            <div className='Top_categories_Select_link'>Paints</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/paints-coats'
          >
            <div className='Top_categories_Select_link'>Coats & Finishes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/paint-supplies'
          >
            <div className='Top_categories_Select_link'>Brushes, Rollers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/paint-supplies'
          >
            <div className='Top_categories_Select_link'>Paint Sprayers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/paint-supplies'
          >
            <div className='Top_categories_Select_link'>Ladders</div></a></div>

        </div>
        </div>

        {/* Tools, Sets */}
        <div className={ toggleHomeImprovements === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {HomeImprovementsCategory(); SecondCategory(13)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hand-tools'
          >
            <div className='Top_categories_Select_link'>Hand Tools</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mechanic-tools'
          >
            <div className='Top_categories_Select_link'>Mechanic Tools</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/tool-sets'
          >
            <div className='Top_categories_Select_link'>Tool Sets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/measuring-tools'
          >
            <div className='Top_categories_Select_link'>Measuring Tools</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/ladders'
          >
            <div className='Top_categories_Select_link'>Ladders</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/tool-storage'
          >
            <div className='Top_categories_Select_link'>Tool Box</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/tool-storage'
          >
            <div className='Top_categories_Select_link'>Utility Carts</div></a></div>

        </div>
        </div>

        {/* Kitchen Placements */}
        <div className={ toggleHomeImprovements === 3 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {HomeImprovementsCategory(); SecondCategory(13)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-placements'
          >
            <div className='Top_categories_Select_link'>Kitchen Sinks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-placements'
          >
            <div className='Top_categories_Select_link'>Kitchen Faucets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-placements'
          >
            <div className='Top_categories_Select_link'>Range Hoods</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-placements'
          >
            <div className='Top_categories_Select_link'>One Piece Toilets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-placements'
          >
            <div className='Top_categories_Select_link'>Bar, Stainless Sinks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-tiles'
          >
            <div className='Top_categories_Select_link'>Kitchen Wall Tiles</div></a></div>
           
        </div>
        </div>

        {/* Bathroom Placements */}
        <div className={ toggleHomeImprovements === 4 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {HomeImprovementsCategory(); SecondCategory(13)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-placements'
          >
            <div className='Top_categories_Select_link'>Showers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-placements'
          >
            <div className='Top_categories_Select_link'>Baths</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-placements'
          >
            <div className='Top_categories_Select_link'>Bathroom Sinks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-placements'
          >
            <div className='Top_categories_Select_link'>One Piece Toilets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-placements'
          >
            <div className='Top_categories_Select_link'>Two Piece Toilets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-tiles'
          >
            <div className='Top_categories_Select_link'>Bathroom Tiles, Flooring</div></a></div>
           
        </div>
        </div>

        {/* Cooling, Air Quality */}
        <div className={ toggleHomeImprovements === 5 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {HomeImprovementsCategory(); SecondCategory(13)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Air Conditioners</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Air Purifiers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Humidifiers, Dehumidifiers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Thermostat</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Evaporative Air Coolers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Fans</div></a></div>

        </div>
        </div>

        {/* Door Hardwork */}
        <div className={ toggleHomeImprovements === 6 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {HomeImprovementsCategory(); SecondCategory(13)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/door-gates'
          >
            <div className='Top_categories_Select_link'>Doors</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/door-hardware'
          >
            <div className='Top_categories_Select_link'>Door Locks</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/door-hardware'
          >
            <div className='Top_categories_Select_link'>Door Bells</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/door-gates'
          >
            <div className='Top_categories_Select_link'>Gates</div></a></div>

        </div>
        </div>

        {/* Power Tools */}
        <div className={ toggleHomeImprovements === 7 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {HomeImprovementsCategory(); SecondCategory(13)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Drills & Drivers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Power Saws</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Power Sanders & Grinders</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Nail Guns</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Rotary Tools</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Woodworking Tools</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Power Tools</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-sets'
          >
            <div className='Top_categories_Select_link'>Power Tool Sets</div></a></div>
        </div>
        </div>

        {/* Outdoor Power Tools */}
        <div className={ toggleHomeImprovements === 8 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {HomeImprovementsCategory(); SecondCategory(13)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Lawn Mowers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Leaf Blowers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Trimmers, Edgers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Pressure Washers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Pole Saws, Chainsaws</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Power Generators</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Outdoor Tools</div></a></div>

        </div>
        </div>


         {/* Sports */}
         <div className={ toggleSportsOutdoor === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {SportsOutdoorCategory(); SecondCategory(12)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_header_Select'><a className='Top_categories_Select_link_tag'
          >
            <div className='Top_categories_Select_Header'>Sports Gear</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/soccer-items'
          >
            <div className='Top_categories_Select_link'>Soccer</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/basketball-items'
          >
            <div className='Top_categories_Select_link'>Basketball</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/tennis-items'
          >
            <div className='Top_categories_Select_link'>Tennis</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/cricket-items'
          >
            <div className='Top_categories_Select_link'>Cricket</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/boxing-items'
          >
            <div className='Top_categories_Select_link'>Boxing</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/golf-items'
          >
            <div className='Top_categories_Select_link'>Golf</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/all-balls'
          >
            <div className='Top_categories_Select_link'>All Balls</div></a></div>

        </div>
        </div>

        {/* Outdoor Sports */}
        <div className={ toggleSportsOutdoor === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {SportsOutdoorCategory(); SecondCategory(12)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_header_Select'><a className='Top_categories_Select_link_tag'
          >
            <div className='Top_categories_Select_Header'>Outdoor Sports</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/fishing-items'
          >
            <div className='Top_categories_Select_link'>Fishing</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/water-sports'
          >
            <div className='Top_categories_Select_link'>Boating, Water Sports</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hiking-items'
          >
            <div className='Top_categories_Select_link'>Hiking</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hunting-items'
          >
            <div className='Top_categories_Select_link'>Hunting</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/shooting-sports'
          >
            <div className='Top_categories_Select_link'>Sports Shooting</div></a></div>

        </div>
        </div>


        <div className={ togglePersonalCare === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {PersonalCategory(); SecondCategory(7)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hair-combs'
          >
            <div className='Top_categories_Select_link'>Combs, Brushes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hair-devices'
          >
            <div className='Top_categories_Select_link'>Hair Straighteners, Combs</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hair-devices'
          >
            <div className='Top_categories_Select_link'>Hair Dryers, Curling Irons</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hair-shavers'
          >
            <div className='Top_categories_Select_link'>Electric Shavers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hair-shavers'
          >
            <div className='Top_categories_Select_link'>Razors Blades</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hair-shavers'
          >
            <div className='Top_categories_Select_link'>Epilators</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hair-trimmers'
          >
            <div className='Top_categories_Select_link'>Hair Clippers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hair-trimmers'
          >
            <div className='Top_categories_Select_link'>Hair Trimmers</div></a></div>

        </div>
        </div>

        <div className={ togglePersonalCare === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {PersonalCategory(); SecondCategory(7)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-items'
          >
            <div className='Top_categories_Select_link'>Palettes & Sets</div></a></div>
        <div className='Top_categories_Select' onClick={() => {MakeupCategory(1); 
              PersonalCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Lips</div></a></div>
          <div className='Top_categories_Select' onClick={() => {MakeupCategory(2); 
              PersonalCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Eyes</div></a></div>
            <div className='Top_categories_Select' onClick={() => {MakeupCategory(3); 
              PersonalCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Face</div></a></div>
          <div className='Top_categories_Select' onClick={() => {MakeupCategory(4); 
              PersonalCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Nails</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-items'
          >
            <div className='Top_categories_Select_link'>Bag & Organiserz</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-items'
          >
            <div className='Top_categories_Select_link'>Makeup Tools</div></a></div>

        </div>
        </div>

        <div className={ toggleMakeup === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {PersonalCategory(2); MakeupCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-lips'
          >
            <div className='Top_categories_Select_link'>Lip Sticks, Stains</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-lips'
          >
            <div className='Top_categories_Select_link'>Lip Gloss</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-lips'
          >
            <div className='Top_categories_Select_link'>Lip Liners, Pencils</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-lips'
          >
            <div className='Top_categories_Select_link'>Lip Plumpers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-lips'
          >
            <div className='Top_categories_Select_link'>Lip Balms</div></a></div>

        </div>
        </div>

        <div className={ toggleMakeup === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {PersonalCategory(2); MakeupCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-eyes'
          >
            <div className='Top_categories_Select_link'>Mascara</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-eyes'
          >
            <div className='Top_categories_Select_link'>Eyeliners</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-eyes'
          >
            <div className='Top_categories_Select_link'>Eyeshadow Palettes</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-eyes'
          >
            <div className='Top_categories_Select_link'>Eyelashes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-eyes'
          >
            <div className='Top_categories_Select_link'>Eyelash Curlers</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-eyes'
          >
            <div className='Top_categories_Select_link'>Eye Primers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-eyes'
          >
            <div className='Top_categories_Select_link'>Eyebrow Enhancers</div></a></div>

        </div>
        </div>

        <div className={ toggleMakeup === 3 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {PersonalCategory(2); MakeupCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-face'
          >
            <div className='Top_categories_Select_link'>Foundations</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-face'
          >
            <div className='Top_categories_Select_link'>Powders</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-face'
          >
            <div className='Top_categories_Select_link'>Concealers</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-face'
          >
            <div className='Top_categories_Select_link'>Face Primers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-face'
          >
            <div className='Top_categories_Select_link'>Highlighters</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-face'
          >
            <div className='Top_categories_Select_link'>Blushes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-face'
          >
            <div className='Top_categories_Select_link'>Contour Makeup</div></a></div>

        </div>
        </div>

        <div className={ toggleMakeup === 4 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
      <div className='Top_categories_departments' onClick={() => {PersonalCategory(2); MakeupCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-nails'
          >
            <div className='Top_categories_Select_link'>Nail Polish</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-nails'
          >
            <div className='Top_categories_Select_link'>Tops & Coats</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-nails'
          >
            <div className='Top_categories_Select_link'>Fake Nails</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-nails'
          >
            <div className='Top_categories_Select_link'>Nail Care Tools</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-nails'
          >
            <div className='Top_categories_Select_link'>Nail Art</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/makeup-nails'
          >
            <div className='Top_categories_Select_link'>Nail Treatments</div></a></div>

        </div>
        </div>


        {/* Clothing */}
        <div className={ toggleClothesAccessories === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ClothesAccessoriesCategory(); SecondCategory(4)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select' onClick={() => {ClothingCategory(1); 
              ClothesAccessoriesCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Women's Clothing</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ClothingCategory(2); 
              ClothesAccessoriesCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Men's Clothing</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ClothingCategory(3); 
              ClothesAccessoriesCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Boys Clothing</div></a></div>
            <div className='Top_categories_Select' onClick={() => {ClothingCategory(4); 
              ClothesAccessoriesCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Girls Clothing</div></a></div>
            <div className='Top_categories_Select' onClick={() => {ClothingCategory(5); 
              ClothesAccessoriesCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Baby Boy Clothing</div></a></div>
            <div className='Top_categories_Select' onClick={() => {ClothingCategory(6); 
              ClothesAccessoriesCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Baby Girl Clothing</div></a></div>
        </div>
        </div>

        {/* Shoes & Sneakers */}
        <div className={ toggleClothesAccessories === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ClothesAccessoriesCategory(); SecondCategory(4)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          {/* <div className='Top_categories_Select' onClick={() => {ShoesCategory(1); 
              ClothesAccessoriesCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Women's Shoes</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ShoesCategory(2); 
              ClothesAccessoriesCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Men's Shoes</div></a></div> */}

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/sneakers'
          >
            <div className='Top_categories_Select_link'>Sneakers</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/sneakers-collections'
          >
            <div className='Top_categories_Select_link'>Adidas & Nike</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/explore-sneakers'
          >
            <div className='Top_categories_Select_link'>Popular Shoes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/soccer-cleats'
          >
            <div className='Top_categories_Select_link'>Soccer Cleats</div></a></div>
            
        </div>
        </div>

        {/* Jewelry */}
        <div className={ toggleClothesAccessories === 3 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ClothesAccessoriesCategory(); SecondCategory(4)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'> 

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/jewelry-items'
          >
            <div className='Top_categories_Select_link'>Earrings</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/jewelry-items'
          >
            <div className='Top_categories_Select_link'>Necklaces</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/jewelry-items'
          >
            <div className='Top_categories_Select_link'>Bracelets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/jewelry-items'
          >
            <div className='Top_categories_Select_link'>Rings</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/jewelry-items'
          >
            <div className='Top_categories_Select_link'>Jewelry Storage</div></a></div>
        </div>
        </div>

        {/* Watches */}
        <div className={ toggleClothesAccessories === 4 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ClothesAccessoriesCategory(); SecondCategory(4)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'> 
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/watches'
          >
            <div className='Top_categories_Select_link'>All Watches</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/popular-watches'
          >
            <div className='Top_categories_Select_link'>Popular Watches</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/luxury-watches'
          >
            <div className='Top_categories_Select_link'>Luxury Watches</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/smart-watches'
          >
            <div className='Top_categories_Select_link'>Smart Watches</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/womens-watches'
          >
            <div className='Top_categories_Select_link'>Women's Watches</div></a></div>
        </div>
        </div>

        {/* Top Brands */}
        <div className={ toggleClothesAccessories === 5 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ClothesAccessoriesCategory(); SecondCategory(4)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'> 
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           // href='/brand-clothing'
          >
            <div className='Top_categories_Select_link'>Brand Clothing</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           // href='/adidas-clothing'
          >
            <div className='Top_categories_Select_link'>Adidas</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           // href='/nike-clothing'
          >
            <div className='Top_categories_Select_link'>Nike</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           // href='/puma-clothing'
          >
            <div className='Top_categories_Select_link'>Puma</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           // href='/reeBok-clothing'
          >
            <div className='Top_categories_Select_link'>ReeBok</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           // href='/champion-clothing'
          >
            <div className='Top_categories_Select_link'>Champion</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           // href='/fila-clothing'
          >
            <div className='Top_categories_Select_link'>Fila</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           // href='/northface-clothing'
          >
            <div className='Top_categories_Select_link'>North Face</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           // href='/airwalk-clothing'
          >
            <div className='Top_categories_Select_link'>Airwalk</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           // href='/swagga-clothing'
          >
            <div className='Top_categories_Select_link'>Swagga</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           // href='/umbro-clothing'
          >
            <div className='Top_categories_Select_link'>Umbro</div></a></div>
         
            
        </div>
        </div>

        {/* Womens Shoes */} 
        <div className={ toggleShoes === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ShoesCategory(); ClothesAccessoriesCategory(2)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>

        <div className='Top_categories_header_Select'><a className='Top_categories_Select_link_tag'
          >
            <div className='Top_categories_Select_Header'>Women's Shoes</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-footwear'
          >
            <div className='Top_categories_Select_link'>Sandals</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-footwear'
          >
            <div className='Top_categories_Select_link'>Slippers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-footwear'
          >
            <div className='Top_categories_Select_link'>Flats</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/athletic-sneakers'
          >
            <div className='Top_categories_Select_link'>Sneakers & Athletic Shoes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-footwear'
          >
            <div className='Top_categories_Select_link'>Heel & Pumps</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-footwear'
          >
            <div className='Top_categories_Select_link'>Boots</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-coverups'
          >
            <div className='Top_categories_Select_link'>Loafers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-clothes'
          >
            <div className='Top_categories_Select_link'>Clogs</div></a></div>

        </div>
        </div>

        {/* Mens Shoes */}
        <div className={ toggleShoes === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ShoesCategory(); ClothesAccessoriesCategory(2)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>

        <div className='Top_categories_header_Select'><a className='Top_categories_Select_link_tag'
          >
            <div className='Top_categories_Select_Header'>Mens's Shoes</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-footwear'
          >
            <div className='Top_categories_Select_link'>Sandals & Flip-Flops</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-footwear'
          >
            <div className='Top_categories_Select_link'>Slippers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-footwear'
          >
            <div className='Top_categories_Select_link'>Flats</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/athletic-sneakers'
          >
            <div className='Top_categories_Select_link'>Sneakers & Athletic Shoes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-footwear'
          >
            <div className='Top_categories_Select_link'>Dress Shoes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/work-boots'
          >
            <div className='Top_categories_Select_link'>Work & Hiking Boots</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-footwear'
          >
            <div className='Top_categories_Select_link'>Loafers & Slip-Ons</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-footwear'
          >
            <div className='Top_categories_Select_link'>Clogs</div></a></div>

        </div>
        </div>

        {/* Womens Clothes */}
        <div className={ toggleClothing === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ClothingCategory(); ClothesAccessoriesCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>

        <div className='Top_categories_header_Select'><a className='Top_categories_Select_link_tag'
          >
            <div className='Top_categories_Select_Header'>Women's Clothing</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-activewear'
          >
            <div className='Top_categories_Select_link'>Activewear</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-covers'
          >
            <div className='Top_categories_Select_link'>Blazers, Jackets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-covers'
          >
            <div className='Top_categories_Select_link'>Coats, Sweatshirts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-covers'
          >
            <div className='Top_categories_Select_link'>Suites & Separates</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-coverups'
          >
            <div className='Top_categories_Select_link'>Bras, Panties & Lingerie</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-coverups'
          >
            <div className='Top_categories_Select_link'>Swimsuits, Cover-Ups</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-clothes'
          >
            <div className='Top_categories_Select_link'>Dresses, Skirts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-clothes'
          >
            <div className='Top_categories_Select_link'>Tops & T-Shirts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-clothes'
          >
            <div className='Top_categories_Select_link'>Jeans, Pants</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-clothes'
          >
            <div className='Top_categories_Select_link'>Shorts, Capris</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-wear'
          >
            <div className='Top_categories_Select_link'>Jumpsuits & Rompers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-wear'
          >
            <div className='Top_categories_Select_link'>Pajamas, Loungewear</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/maternity-clothing'
          >
            <div className='Top_categories_Select_link'>Maternity Clothing</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/womens-wear'
          >
            <div className='Top_categories_Select_link'>Socks, Hoistery</div></a></div>

        </div>
        </div>

        {/* Men Clothes */}
        <div className={ toggleClothing === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ClothingCategory(); ClothesAccessoriesCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>

        <div className='Top_sidebar_categories'>
        <div className='Top_categories_header_Select'><a className='Top_categories_Select_link_tag'
          >
            <div className='Top_categories_Select_Header'>Men's Clothing</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-covers'
          >
            <div className='Top_categories_Select_link'>Blazers, Jackets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-covers'
          >
            <div className='Top_categories_Select_link'>Coats, Sweaters</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-covers'
          >
            <div className='Top_categories_Select_link'>Suites</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-clothes'
          >
            <div className='Top_categories_Select_link'>T-Shirts, Vests</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-underwear'
          >
            <div className='Top_categories_Select_link'>Shorts, Swimsuits</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-activewear'
          >
            <div className='Top_categories_Select_link'>Activewear</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-clothes'
          >
            <div className='Top_categories_Select_link'>Polo Shirts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-clothes'
          >
            <div className='Top_categories_Select_link'>Jeans, Pants</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-underwear'
          >
            <div className='Top_categories_Select_link'>Pajamas, Robes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/mens-wear'
          >
            <div className='Top_categories_Select_link'>Socks, Hats, Ties</div></a></div>

        </div>
        </div>

        {/* Boys Clothes */}
        <div className={ toggleClothing === 3 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ClothingCategory(); ClothesAccessoriesCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_header_Select'><a className='Top_categories_Select_link_tag'
          >
            <div className='Top_categories_Select_Header'>Boys Clothing</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/boys-covers'
          >
            <div className='Top_categories_Select_link'>Blazers, Jackets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/boys-covers'
          >
            <div className='Top_categories_Select_link'>Coats, Sweaters</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/boys-covers'
          >
            <div className='Top_categories_Select_link'>Boys Suites</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/boys-clothes'
          >
            <div className='Top_categories_Select_link'>T-Shirts, Vests</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/boys-underwear'
          >
            <div className='Top_categories_Select_link'>Shorts, Swimsuits</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/boys-activewear'
          >
            <div className='Top_categories_Select_link'>Boys Activewear</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/boys-clothes'
          >
            <div className='Top_categories_Select_link'>Polo Shirts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/boys-clothes'
          >
            <div className='Top_categories_Select_link'>Jeans, Pants</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/boys-underwear'
          >
            <div className='Top_categories_Select_link'>Pajamas, Robes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/school-uniforms'
          >
            <div className='Top_categories_Select_link'>School Uniforms</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/boys-wear'
          >
            <div className='Top_categories_Select_link'>Socks, Hats</div></a></div>

        </div>
        </div>

        {/* Girls Clothes */}
        <div className={ toggleClothing === 4 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ClothingCategory(); ClothesAccessoriesCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_header_Select'><a className='Top_categories_Select_link_tag'
          >
            <div className='Top_categories_Select_Header'>Girl's Clothing</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-activewear'
          >
            <div className='Top_categories_Select_link'>Girls Activewear</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-covers'
          >
            <div className='Top_categories_Select_link'>Blazers, Jackets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-covers'
          >
            <div className='Top_categories_Select_link'>Coats, Sweatshirts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-covers'
          >
            <div className='Top_categories_Select_link'>Suites & Separates</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-coverups'
          >
            <div className='Top_categories_Select_link'>Sports Bras, Underwear</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-coverups'
          >
            <div className='Top_categories_Select_link'>Swimsuits, Cover-Ups</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-clothes'
          >
            <div className='Top_categories_Select_link'>Dresses, Skirts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-clothes'
          >
            <div className='Top_categories_Select_link'>Tops & T-Shirts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-clothes'
          >
            <div className='Top_categories_Select_link'>Jeans, Pants</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-clothes'
          >
            <div className='Top_categories_Select_link'>Shorts, Capris</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-wear'
          >
            <div className='Top_categories_Select_link'>Jumpsuits & Rompers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-wear'
          >
            <div className='Top_categories_Select_link'>Girls Pajamas</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/school-uniforms'
          >
            <div className='Top_categories_Select_link'>School Uniforms</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/girls-wear'
          >
            <div className='Top_categories_Select_link'>Socks, Other</div></a></div>

        </div>
        </div>

        {/* Baby Boy Clothes */}
        <div className={ toggleClothing === 5 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ClothingCategory(); ClothesAccessoriesCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_header_Select'><a className='Top_categories_Select_link_tag'
          >
            <div className='Top_categories_Select_Header'>Baby Boy Clothing</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babyboy'
          >
            <div className='Top_categories_Select_link'>Boy Onesies</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babyboy'
          >
            <div className='Top_categories_Select_link'>One Pieces</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babyboy'
          >
            <div className='Top_categories_Select_link'>Boy Outfits</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babyboy'
          >
            <div className='Top_categories_Select_link'>Boy Pajamas</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babyboy'
          >
            <div className='Top_categories_Select_link'>T-Shirts & Shorts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babyboy'
          >
            <div className='Top_categories_Select_link'>Pant, Jeans</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babyboy'
          >
            <div className='Top_categories_Select_link'>Coats & Jackets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babyboy'
          >
            <div className='Top_categories_Select_link'>Underwear</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babyboy'
          >
            <div className='Top_categories_Select_link'>Hats Accessories</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babyboy'
          >
            <div className='Top_categories_Select_link'>Socks, Shoes</div></a></div>

        </div>
        </div>

         {/* Baby Girl Clothes */}
         <div className={ toggleClothing === 6 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ClothingCategory(); ClothesAccessoriesCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_header_Select'><a className='Top_categories_Select_link_tag'
          >
            <div className='Top_categories_Select_Header'>Baby Girl Clothing</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babygirl'
          >
            <div className='Top_categories_Select_link'>Girl Onesies</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babygirl'
          >
            <div className='Top_categories_Select_link'>One Pieces</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babygirl'
          >
            <div className='Top_categories_Select_link'>Girl Outfits</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babygirl'
          >
            <div className='Top_categories_Select_link'>Girl Pajamas</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babygirl'
          >
            <div className='Top_categories_Select_link'>T-Shirts & Shorts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babygirl'
          >
            <div className='Top_categories_Select_link'>Pant, Dresses</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babygirl'
          >
            <div className='Top_categories_Select_link'>Coats & Jackets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babygirl'
          >
            <div className='Top_categories_Select_link'>Underwear</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babygirl'
          >
            <div className='Top_categories_Select_link'>Hats Accessories</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/clothes-babygirl'
          >
            <div className='Top_categories_Select_link'>Socks, Shoes</div></a></div>

        </div>
        </div>

        {/* Furniture */}
        <div className={ toggleHome === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {HomeCategory(); SecondCategory(3)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select' onClick={() => {FurnitureCategory(1); 
              HomeCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Living Room</div></a></div>
          <div className='Top_categories_Select' onClick={() => {FurnitureCategory(2); 
              HomeCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Kitchen & Dining</div></a></div>
          <div className='Top_categories_Select' onClick={() => {FurnitureCategory(3); 
              HomeCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Bedroom Furniture</div></a></div>
          <div className='Top_categories_Select' onClick={() => {FurnitureCategory(4); 
              HomeCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Bathroom Furniture</div></a></div>
          <div className='Top_categories_Select' onClick={() => {FurnitureCategory(5); 
              HomeCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Storage Furniture</div></a></div>
          <div className='Top_categories_Select' onClick={() => {FurnitureCategory(6); 
              HomeCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Office Furniture</div></a></div>
          <div className='Top_categories_Select' onClick={() => {FurnitureCategory(7); 
              HomeCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Bar Furniture</div></a></div>
          <div className='Top_categories_Select' onClick={() => {FurnitureCategory(8); 
              HomeCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Patio Furniture</div></a></div>
            <div className='Top_categories_Select' onClick={() => {FurnitureCategory(9); 
              HomeCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Nursery Furniture</div></a></div>
          <div className='Top_categories_Select' onClick={() => {FurnitureCategory(10); 
              HomeCategory()}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Kids Furniture</div></a></div>

        </div>
        </div>

        {/* Home Decore */}
        <div className={ toggleHome === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {HomeCategory(); SecondCategory(3)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedding-pillows'
          >
            <div className='Top_categories_Select_link'>Throw Pillows & Blankets</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/home-decore'
          >
            <div className='Top_categories_Select_link'>Lights & Lamps</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/home-decore'
          >
            <div className='Top_categories_Select_link'>Wall Decore</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/home-decore'
          >
            <div className='Top_categories_Select_link'>Rugs, Carpets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/home-decore'
          >
            <div className='Top_categories_Select_link'>Mirrors</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/home-decore'
          >
            <div className='Top_categories_Select_link'>Clocks</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/home-decore'
          >
            <div className='Top_categories_Select_link'>Frames, Albums</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/home-decore'
          >
            <div className='Top_categories_Select_link'>Candles, Home Fragrance</div></a></div>


            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/home-decore'
          >
            <div className='Top_categories_Select_link'>Artificial Plants, Flowers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/home-decore'
          >
            <div className='Top_categories_Select_link'>Decorative Accessories</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/floor-decore'
          >
            <div className='Top_categories_Select_link'>Flooring, Tiles</div></a></div>

        </div>
        </div>

        {/* Kitchen & Dining */}
        <div className={ toggleHome === 3 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {HomeCategory(); SecondCategory(3)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchenware'
          >
            <div className='Top_categories_Select_link'>Cookware</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchenware'
          >
            <div className='Top_categories_Select_link'>Tableware</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchenware'
          >
            <div className='Top_categories_Select_link'>Bakeware</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchenware'
          >
            <div className='Top_categories_Select_link'>Drinkware, Glassware</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchenware'
          >
            <div className='Top_categories_Select_link'>Serveware</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchenware'
          >
            <div className='Top_categories_Select_link'>Silverware, Flatware</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchenware'
          >
            <div className='Top_categories_Select_link'>Utensils, Gadgets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchenware'
          >
            <div className='Top_categories_Select_link'>Candles, Home Fragrances</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchenware'
          >
            <div className='Top_categories_Select_link'>Food Storages</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchenware'
          >
            <div className='Top_categories_Select_link'>Cutlery, Knives</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchenware'
          >
            <div className='Top_categories_Select_link'>Utensils, Gadgets</div></a></div>

        </div>
        </div>

        {/* Bathroom Placements */}
        <div className={ toggleHome === 4 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {HomeCategory(); SecondCategory(3)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-placements'
          >
            <div className='Top_categories_Select_link'>Showers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-placements'
          >
            <div className='Top_categories_Select_link'>Baths</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-placements'
          >
            <div className='Top_categories_Select_link'>Bathroom Sinks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-placements'
          >
            <div className='Top_categories_Select_link'>One Piece Toilets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-placements'
          >
            <div className='Top_categories_Select_link'>Two Piece Toilets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-tiles'
          >
            <div className='Top_categories_Select_link'>Bathroom Tiles, Flooring</div></a></div>
           
        </div>
        </div>

        {/* Kitchen Placements */}
        <div className={ toggleHome === 5 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {HomeCategory(); SecondCategory(3)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-placements'
          >
            <div className='Top_categories_Select_link'>Kitchen Sinks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-placements'
          >
            <div className='Top_categories_Select_link'>Kitchen Faucets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-placements'
          >
            <div className='Top_categories_Select_link'>Range Hoods</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-placements'
          >
            <div className='Top_categories_Select_link'>One Piece Toilets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-placements'
          >
            <div className='Top_categories_Select_link'>Bar, Stainless Sinks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kitchen-tiles'
          >
            <div className='Top_categories_Select_link'>Kitchen Wall Tiles</div></a></div>
           
        </div>
        </div>

        {/* Bedding */}
        <div className={ toggleHome === 6 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {HomeCategory(); SecondCategory(3)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedding-blankets'
          >
            <div className='Top_categories_Select_link'>Bed Blankets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedding-pillows'
          >
            <div className='Top_categories_Select_link'>Bed Pillows</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedding-blankets'
          >
            <div className='Top_categories_Select_link'>Throw Blankets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedding-pillows'
          >
            <div className='Top_categories_Select_link'>Throw Pillows</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedding-blankets'
          >
            <div className='Top_categories_Select_link'>Weighted Blankets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedding-blankets'
          >
            <div className='Top_categories_Select_link'>Duvet Covers</div></a></div>
           
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedding-blankets'
          >
            <div className='Top_categories_Select_link'>Comforters</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedding-blankets'
          >
            <div className='Top_categories_Select_link'>Quilts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedding-blankets'
          >
            <div className='Top_categories_Select_link'>Bed Skirts</div></a></div>
           
        </div>
        </div>

        {/* Livingroom Furniture */}
      <div className={ toggleFurniture === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FurnitureCategory(0); HomeCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/living-room'
          >
            <div className='Top_categories_Select_link'>Wall Unit, Entertaiment Centers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/living-room'
          >
            <div className='Top_categories_Select_link'>Center Tables</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/living-room'
          >
            <div className='Top_categories_Select_link'>Ottoman Furniture</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-pillows'
          >
            <div className='Top_categories_Select_link'>Poufs, Floor Pillows</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/living-room'
          >
            <div className='Top_categories_Select_link'>Chairs, Recliners</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/living-room'
          >
            <div className='Top_categories_Select_link'>Chaise Lounges</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/living-room'
          >
            <div className='Top_categories_Select_link'>Living Room Suites</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/living-room'
          >
            <div className='Top_categories_Select_link'>Sectional Couches</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/living-room'
          >
            <div className='Top_categories_Select_link'>Loveseats</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/living-room'
          >
            <div className='Top_categories_Select_link'>Couch Beds</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/living-room'
          >
            <div className='Top_categories_Select_link'>Futons</div></a></div>
        </div>
        </div>

        {/* Kitchen & Dining */}
      <div className={ toggleFurniture === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FurnitureCategory(0); HomeCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-tables'
          >
            <div className='Top_categories_Select_link'>Dining Tables</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-chairs'
          >
            <div className='Top_categories_Select_link'>Dining Chairs</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-tables'
          >
            <div className='Top_categories_Select_link'>Dinette Sets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-chairs'
          >
            <div className='Top_categories_Select_link'>Counter Stools</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-chairs'
          >
            <div className='Top_categories_Select_link'>Dining Benches</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-tables'
          >
            <div className='Top_categories_Select_link'>Kitchen Islands</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-cabinets'
          >
            <div className='Top_categories_Select_link'>Kitchen Carts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-tables'
          >
            <div className='Top_categories_Select_link'>Sideboards, Buffets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-cabinets'
          >
            <div className='Top_categories_Select_link'>Pantry Cabinets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-cabinets'
          >
            <div className='Top_categories_Select_link'>Bakers Racks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-cabinets'
          >
            <div className='Top_categories_Select_link'>Wall Cabinets</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-cabinets'
          >
            <div className='Top_categories_Select_link'>Bar, Wine Cabinets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-cabinets'
          >
            <div className='Top_categories_Select_link'>Bar Carts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-cabinets'
          >
            <div className='Top_categories_Select_link'>Wine Racks</div></a></div>

        </div>
        </div>

        {/* Bedroom Furniture */}
      <div className={ toggleFurniture === 3 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FurnitureCategory(0); HomeCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom'
          >
            <div className='Top_categories_Select_link'>Bedroom Suites</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom'
          >
            <div className='Top_categories_Select_link'>Bed Base Sets</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom'
          >
            <div className='Top_categories_Select_link'>Mattresses</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom'
          >
            <div className='Top_categories_Select_link'>Headboards</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom'
          >
            <div className='Top_categories_Select_link'>Bed Frames</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom'
          >
            <div className='Top_categories_Select_link'>Bunk, Loft Beds</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom'
          >
            <div className='Top_categories_Select_link'>Folding Beds</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom-furniture'
          >
            <div className='Top_categories_Select_link'>Dressers, Chest</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom-furniture'
          >
            <div className='Top_categories_Select_link'>Nightstands</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom-furniture'
          >
            <div className='Top_categories_Select_link'>Jewellery Armoires</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom-furniture'
          >
            <div className='Top_categories_Select_link'>Vanity Sets</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom-furniture'
          >
            <div className='Top_categories_Select_link'>Bedroom Benches</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bedroom-furniture'
          >
            <div className='Top_categories_Select_link'>Wardrobes</div></a></div>

        </div>
        </div>

        {/* Bathroom Furniture */}
      <div className={ toggleFurniture === 4 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FurnitureCategory(0); HomeCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-furniture'
          >
            <div className='Top_categories_Select_link'>Benches, Stools</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-furniture'
          >
            <div className='Top_categories_Select_link'>Bathroom Vanity</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-cabinets'
          >
            <div className='Top_categories_Select_link'>Wall Cabinets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-cabinets'
          >
            <div className='Top_categories_Select_link'>Storage Cabinets</div></a></div>
          
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-furniture'
          >
            <div className='Top_categories_Select_link'>Toilet Cabinets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bathroom-furniture'
          >
            <div className='Top_categories_Select_link'>Towel Racks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-cabinets'
          >
            <div className='Top_categories_Select_link'>Storage Racks</div></a></div>

        </div>
        </div>

        {/* Storage Furniture */}
      <div className={ toggleFurniture === 5 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FurnitureCategory(0); HomeCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/storage-cabinets'
          >
            <div className='Top_categories_Select_link'>Bookshelves, Bookcases</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/storage-cabinets'
          >
            <div className='Top_categories_Select_link'>Storage Cabinets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/storage-cabinets'
          >
            <div className='Top_categories_Select_link'>Filing Cabinets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/storage-cabinets'
          >
            <div className='Top_categories_Select_link'>Storage Cabinets</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/storage-cabinets'
          >
            <div className='Top_categories_Select_link'>Storage Drawers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/storage-cabinets'
          >
            <div className='Top_categories_Select_link'>Storage Trunks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/storage-cabinets'
          >
            <div className='Top_categories_Select_link'>Dressers, Chest</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/storage-cabinets'
          >
            <div className='Top_categories_Select_link'>Cube Storage Organizer</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-tables'
          >
            <div className='Top_categories_Select_link'>End, Side Tables</div></a></div>            
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-tables'
          >
            <div className='Top_categories_Select_link'>Storage Ottomans</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-tables'
          >
            <div className='Top_categories_Select_link'>Console Tables</div></a></div>


            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-tables'
          >
            <div className='Top_categories_Select_link'>Desk Tables</div></a></div>            
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-tables'
          >
            <div className='Top_categories_Select_link'>Sideboards, Buffets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/room-tables'
          >
            <div className='Top_categories_Select_link'>Nightstands</div></a></div>
        </div>
        </div>

        {/* Office Furniture */}
      <div className={ toggleFurniture === 6 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FurnitureCategory(0); HomeCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/office-furniture'
          >
            <div className='Top_categories_Select_link'>Office Desks</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/office-furniture'
          >
            <div className='Top_categories_Select_link'>Office Chairs</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/office-furniture'
          >
            <div className='Top_categories_Select_link'>Bookshelves, Bookcases</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/office-furniture'
          >
            <div className='Top_categories_Select_link'>Filing Cabinets</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/office-furniture'
          >
            <div className='Top_categories_Select_link'>Adjustable Desks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/office-furniture'
          >
            <div className='Top_categories_Select_link'>Cube Storage Organizers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/office-furniture'
          >
            <div className='Top_categories_Select_link'>Drawers, Carts</div></a></div>

            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/office-furniture'
          >
            <div className='Top_categories_Select_link'>Breakroom Tables</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/office-furniture'
          >
            <div className='Top_categories_Select_link'>Standing Podiums</div></a></div>            
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/side-furniture'
          >
            <div className='Top_categories_Select_link'>Desk Organizers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/side-furniture'
          >
            <div className='Top_categories_Select_link'>Storage Baskets</div></a></div>

        </div>
        </div>

        {/* Bar Furniture */}
      <div className={ toggleFurniture === 7 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FurnitureCategory(0); HomeCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bar-furniture'
          >
            <div className='Top_categories_Select_link'>Counter Stools</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bar-furniture'
          >
            <div className='Top_categories_Select_link'>Table Sets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bar-furniture'
          >
            <div className='Top_categories_Select_link'>Bar Cabinets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bar-furniture'
          >
            <div className='Top_categories_Select_link'>Corner Bars</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bar-furniture'
          >
            <div className='Top_categories_Select_link'>Bar Carts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/bar-furniture'
          >
            <div className='Top_categories_Select_link'>Wine Racks</div></a></div>
           
        </div>
        </div>

        {/* Patio Furniture */}
      <div className={ toggleFurniture === 8 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FurnitureCategory(0); HomeCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/patio-furniture'
          >
            <div className='Top_categories_Select_link'>Patio Dining Sets</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/patio-furniture'
          >
            <div className='Top_categories_Select_link'>Patio Chairs</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/patio-furniture'
          >
            <div className='Top_categories_Select_link'>Patio Benches</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/patio-furniture'
          >
            <div className='Top_categories_Select_link'>Outdoor Lounges</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/patio-furniture'
          >
            <div className='Top_categories_Select_link'>Outdoor Loveseats</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/patio-furniture'
          >
            <div className='Top_categories_Select_link'>Bistro Sets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/patio-furniture'
          >
            <div className='Top_categories_Select_link'>Patio Shades</div></a></div>
           
        </div>
        </div>

        {/* Nursery Furniture */}
      <div className={ toggleFurniture === 9 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FurnitureCategory(0); HomeCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/nursery-furniture'
          >
            <div className='Top_categories_Select_link'>Baby Cribs</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/nursery-furniture'
          >
            <div className='Top_categories_Select_link'>Crib Mattresses</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/nursery-furniture'
          >
            <div className='Top_categories_Select_link'>Bassinets, Bedside Slippers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/nursery-furniture'
          >
            <div className='Top_categories_Select_link'>Changing Tables</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/nursery-furniture'
          >
            <div className='Top_categories_Select_link'>Gliders, Rocking Chairs</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/nursery-furniture'
          >
            <div className='Top_categories_Select_link'>Baby Travel Beds</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/nursery-furniture'
          >
            <div className='Top_categories_Select_link'>Baby Dressers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/nursery-furniture'
          >
            <div className='Top_categories_Select_link'>Toddler Beds</div></a></div>
           
        </div>
        </div>

        {/* Kids Furniture */}
      <div className={ toggleFurniture === 10 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {FurnitureCategory(0); HomeCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kids-furniture'
          >
            <div className='Top_categories_Select_link'>Kids Beds</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kids-furniture'
          >
            <div className='Top_categories_Select_link'>Bunk Beds</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kids-furniture'
          >
            <div className='Top_categories_Select_link'>Kids Chairs</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kids-furniture'
          >
            <div className='Top_categories_Select_link'>Tables & Chairs Sets</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kids-furniture'
          >
            <div className='Top_categories_Select_link'>Kids Headboards</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kids-furniture'
          >
            <div className='Top_categories_Select_link'>Play Tents</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kids-furniture'
          >
            <div className='Top_categories_Select_link'>Toy Boxes, Chests</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/kids-furniture'
          >
            <div className='Top_categories_Select_link'>Kids Vanities</div></a></div>
           
        </div>
        </div>




      {/* Major Kitchen Appliances */}
      <div className={ toggleAppliances === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {AppliancesCategory(0); SecondCategory(2)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'>Refrigerators</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'>Ranges, Stoves</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'>Cooktops</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'>Wall Ovens</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'>Dishwashers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'>Freezers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'>Microwaves</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/kitchen-appliances'
          >
            <div className='Top_categories_Select_link'>Bundle Sale</div></a></div>
        </div>
        </div>

        {/* Small Kitchen Appliances */}
        <div className={ toggleAppliances === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {AppliancesCategory(0); SecondCategory(2)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/beverage-machines'
          >
            <div className='Top_categories_Select_link'>Coffee, Tea & Expresso</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/cooking-appliances'
          >
            <div className='Top_categories_Select_link'>Cookers, Instant Pots</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baking-machines'
          >
            <div className='Top_categories_Select_link'>Bread, Waffle Makers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/food-machines'
          >
            <div className='Top_categories_Select_link'>Blenders, Juicers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/baking-machines'
          >
            <div className='Top_categories_Select_link'>Mixers, Attachments</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/toaster-machines'
          >
            <div className='Top_categories_Select_link'>Toasters</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/treat-makers'
          >
            <div className='Top_categories_Select_link'>Popcorn, Cream Machines</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/countertop-ovens'
          >
            <div className='Top_categories_Select_link'>Countertop Ovens</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/fryers'
          >
            <div className='Top_categories_Select_link'>Air, Deep Fryers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/grills-cradles'
          >
            <div className='Top_categories_Select_link'>Electric Grills, Griddles</div></a></div>
        </div>
        </div>

        {/* Laundry Appliances */}
        <div className={ toggleAppliances === 3 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {AppliancesCategory(0); SecondCategory(2)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/washer-dryer'
          >
            <div className='Top_categories_Select_link'>Wash Machines</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/washer-dryer'
          >
            <div className='Top_categories_Select_link'>Dryers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/washer-dryer'
          >
            <div className='Top_categories_Select_link'>Washer Dryer Combo</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/washer-dryer'
          >
            <div className='Top_categories_Select_link'>Washer Dryer Sets</div></a></div>

        </div>
        </div>

        {/* Cooling, Air Quality */}
        <div className={ toggleAppliances === 4 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {AppliancesCategory(0); SecondCategory(2)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Air Conditioners</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Air Purifiers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Humidifiers, Dehumidifiers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Thermostat</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Evaporative Air Coolers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/atmosphere-devices'
          >
            <div className='Top_categories_Select_link'>Fans</div></a></div>

        </div>
        </div>

        {/* Outdoor Appliances */}
        <div className={ toggleAppliances === 5 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {AppliancesCategory(0); SecondCategory(2)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-kitchen'
          >
            <div className='Top_categories_Select_link'>Kitchen Thermometers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-kitchen'
          >
            <div className='Top_categories_Select_link'>Kitchen Torches</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-kitchen'
          >
            <div className='Top_categories_Select_link'>Grills</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-kitchen'
          >
            <div className='Top_categories_Select_link'>Smokers</div></a></div>

        </div>
        </div>

        {/* Vacuums, Floor Care */}
        <div className={ toggleAppliances === 6 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {AppliancesCategory(0); SecondCategory(2)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/vacuums'
          >
            <div className='Top_categories_Select_link'>Vacuum Cleaners</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/vacuums'
          >
            <div className='Top_categories_Select_link'>Steam Mobs, Vacuums</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/vacuums'
          >
            <div className='Top_categories_Select_link'>Carpet Sweepers</div></a></div>

        </div>
        </div>

        {/* Power Tools */}
        <div className={ toggleAppliances === 7 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {AppliancesCategory(0); SecondCategory(2)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Drills & Drivers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Power Saws</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Power Sanders & Grinders</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Nail Guns</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Rotary Tools</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Woodworking Tools</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-tools'
          >
            <div className='Top_categories_Select_link'>Power Tools</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-sets'
          >
            <div className='Top_categories_Select_link'>Power Tool Sets</div></a></div>
        </div>
        </div>

        {/* Outdoor Power Tools */}
        <div className={ toggleAppliances === 8 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {AppliancesCategory(0); SecondCategory(2)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Lawn Mowers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Leaf Blowers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Trimmers, Edgers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Pressure Washers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Pole Saws, Chainsaws</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Power Generators</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/outdoor-tools'
          >
            <div className='Top_categories_Select_link'>Outdoor Tools</div></a></div>

        </div>
        </div>

        {/* Computers Category */}
        <div className={ toggleElectronics === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'href='/laptops'>
            <div className='Top_categories_Select_link'>Laptops</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'href='/desktops'>
            <div className='Top_categories_Select_link'>Desktops</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/monitors'
          >
            <div className='Top_categories_Select_link'>Monitors</div></a></div>
          {/* <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(1)}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Computer Components</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(2)}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Computer Accessories</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(3)}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Laptop Components</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(4)}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Laptop Accessories</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(5)}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Hard Drives, SSD & Storage</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(6)}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Software</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(7)}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Wi-Fi & Networking</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(8)}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Printers, Scanners</div></a></div> */}
        </div>
        </div>

        {/* Cell Phones & Tablet Category */}
        <div className={ toggleElectronics === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/iPhones'
          >
            <div className='Top_categories_Select_link'>iPhones</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/galaxy-phones'
          >
            <div className='Top_categories_Select_link'>Samsung Galaxy</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/huawei'
          >
            <div className='Top_categories_Select_link'>Huawei</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/google-pixel'
          >
            <div className='Top_categories_Select_link'>Google Pixel</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/smartphones'
          >
            <div className='Top_categories_Select_link'>Smartphones</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/tablets'
          >
            <div className='Top_categories_Select_link'>Tablets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/iPads'
          >
            <div className='Top_categories_Select_link'>iPads</div></a></div>
          {/* <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              PhonesAccessoriesCategory(1)}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Phone Accessories</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              PhonesAccessoriesCategory(2)}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Tablet, iPad Accessories</div></a></div> */}
        </div>
        </div>

        {/* Tv's & Home Theater */}
        <div className={ toggleElectronics === 3 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/tvs'
          >
            <div className='Top_categories_Select_link'>TVs</div></a></div>
            {/* <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/sound-bars'
          >
            <div className='Top_categories_Select_link'>Sound Bars</div></a></div> */}
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/media-devices'
          >
            <div className='Top_categories_Select_link'>Stereo Systems</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/media-devices'
          >
            <div className='Top_categories_Select_link'>Streaming Devices</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/media-devices'
          >
            <div className='Top_categories_Select_link'>Blu-Ray/DVD Players</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/projectors-screens'
          >
            <div className='Top_categories_Select_link'>Projectors & Screens</div></a></div>
            {/* <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/wall-mounts'
          >
            <div className='Top_categories_Select_link'>Wall Mounts</div></a></div> */}
            
        </div>
        </div>

        {/* Cameras & Camcorders */}
        <div className={ toggleElectronics === 4 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/cameras'
          >
            <div className='Top_categories_Select_link'>Cameras</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/cameras'
          >
            <div className='Top_categories_Select_link'>Webcams</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/cameras'
          >
            <div className='Top_categories_Select_link'>Camcorders</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/cameras'
          >
            <div className='Top_categories_Select_link'>Drones</div></a></div>
          {/* <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              CameraAccessoriesCategory(1)}}><a className='Top_categories_Select_link_tag'>
            <div className='Top_categories_Select_link'>Camera Accessories</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/binoculars-telescopes'
          >
            <div className='Top_categories_Select_link'>Binoculars</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/binoculars-telescopes'
          >
            <div className='Top_categories_Select_link'>Telescopes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/editing-software'
          >
            <div className='Top_categories_Select_link'>Editing Softwares</div></a></div> */}
        </div>
        </div>

        {/* Headphones */}
        <div className={ toggleElectronics === 5 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/earphones-audio'
          >
            <div className='Top_categories_Select_link'>Earbuds</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/earphones-audio'
          >
          <div className='Top_categories_Select_link'>Earpods</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/earphones-audio'
          >
            <div className='Top_categories_Select_link'>AirPods</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/earphones-audio'
          >
            <div className='Top_categories_Select_link'>Headphones</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/earphones-audio'
          >
            <div className='Top_categories_Select_link'>Headsets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/earphone-accessories'
          >
            <div className='Top_categories_Select_link'>Accessories</div></a></div>
        </div>
        </div>

        {/* Video Games */}
        <div className={ toggleElectronics === 6 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/playStation-consoles'
          >
            <div className='Top_categories_Select_link'>PlayStation Consoles</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/xbox-consoles'
          >
            <div className='Top_categories_Select_link'>Xbox Consoles</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/nintendo'
          >
            <div className='Top_categories_Select_link'>Nintendo Consoles</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/virtual-reality'
          >
            <div className='Top_categories_Select_link'>Virtual Reality</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/pc-gaming'
          >
            <div className='Top_categories_Select_link'>PC Gaming</div></a></div>
        </div>
        </div>

        {/* Speakers Audio Systems */}
        <div className={ toggleElectronics === 7 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
           href='/portable-speakers'
          >
            <div className='Top_categories_Select_link'>Bluetooth Speakers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/media-devices'
          >
            <div className='Top_categories_Select_link'>Stereo System</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/sound-bars'
          >
            <div className='Top_categories_Select_link'>Sound Bars</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/media-devices'
          >
            <div className='Top_categories_Select_link'>CD/DVD Players</div></a></div>
            {/* <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/audio-systems'
          >
            <div className='Top_categories_Select_link'>Boom Boxes</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/audio-systems'
          >
            <div className='Top_categories_Select_link'>Radios</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/audio'
          >
            <div className='Top_categories_Select_link'>Turntables</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/audio'
          >
            <div className='Top_categories_Select_link'>Audio Mixers</div></a></div> */}
        </div>
        </div>

        {/* Wearable Technology */}
        <div className={ toggleElectronics === 8 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/watches'
          >
            <div className='Top_categories_Select_link'>Watches</div></a></div>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/watches'
          >
            <div className='Top_categories_Select_link'>Smart Watches</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          href='/watches'
          >
            <div className='Top_categories_Select_link'>Fitness Trackers</div></a></div>
        </div>
        </div>

        {/* Wi-Fi Networking */}
        <div className={ toggleElectronics === 9 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/networking'
          >
            <div className='Top_categories_Select_link'>WiFi Routers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/networking'
          >
            <div className='Top_categories_Select_link'>Mesh WiFi</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/networking'
          >
            <div className='Top_categories_Select_link'>Cable Modems</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/networking'
            >
            <div className='Top_categories_Select_link'>Range Extenders</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/networking-accessories'
            >
            <div className='Top_categories_Select_link'>Cable & Adapters</div></a></div>
        </div>
        </div>

        {/* Smart Home */}
        <div className={ toggleElectronics === 10 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/smart-home'
          >
            <div className='Top_categories_Select_link'>Smart Doorbells & Locks</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/smart-home'
          >
            <div className='Top_categories_Select_link'>Smart Assistants</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/smart-home'
          >
            <div className='Top_categories_Select_link'>Home Security</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/smart-trackers'
            >
            <div className='Top_categories_Select_link'>Smart Trackers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/smart-home'
            >
            <div className='Top_categories_Select_link'>Smart Thermostats</div></a></div>
        </div>
        </div>

        {/* Auto Electronics */}
        <div className={ toggleElectronics === 11 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/auto-cams'
          >
            <div className='Top_categories_Select_link'>Dash & Backup Cams</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/gps-stereos'
          >
            <div className='Top_categories_Select_link'>GPS & Navigation</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/gps-stereos'
          >
            <div className='Top_categories_Select_link'>Car Stereos</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/gps-stereos'
            >
            <div className='Top_categories_Select_link'>CB Radios</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/gps-stereos'
            >
            <div className='Top_categories_Select_link'>Car Amplifiers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/gps-stereos'
            >
            <div className='Top_categories_Select_link'>Power Inverters</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/car-accessories'
            >
            <div className='Top_categories_Select_link'>Phone Mounts, Other</div></a></div>
        </div>
        </div>

        {/* Phone Accessories */}
        <div className={ togglePhonesAccessories === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(2); PhonesAccessoriesCategory(0)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/phone-components'
          >
            <div className='Top_categories_Select_link'>Chargers & Cables</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/phone-components'
          >
            <div className='Top_categories_Select_link'>Powerbanks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/phone-accessories'
          >
            <div className='Top_categories_Select_link'>Phone Grips, Popsockets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/phone-accessories'
          >
            <div className='Top_categories_Select_link'>Phone Cases, Protectors</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/phone-gadgets'
          >
            <div className='Top_categories_Select_link'>Phone Mounts, Smart Trackers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/phone-gadgets'
          >
            <div className='Top_categories_Select_link'>Selfie Sticks</div></a></div>
        </div>
        </div>

        {/* Tablet Accessories */}
        <div className={ togglePhonesAccessories === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(2); PhonesAccessoriesCategory(0)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/phone-components'
          >
            <div className='Top_categories_Select_link'>Chargers & Cables</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/phone-components'
          >
            <div className='Top_categories_Select_link'>Powerbanks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/tablet-accessories'
          >
            <div className='Top_categories_Select_link'>Grips, Popsockets</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/tablet-accessories'
          >
            <div className='Top_categories_Select_link'>Cases, Protectors</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/tablet-gadgets'
          >
            <div className='Top_categories_Select_link'>Stands & Mounts</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/tablet-gadgets'
          >
            <div className='Top_categories_Select_link'>Small Keyboard & Stylus</div></a></div>
        </div>
        </div>

        {/* Cameras Accessories */}
        <div className={ toggleCameraAccessories === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(4); CameraAccessoriesCategory(0)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/camera-lenses'
          >
            <div className='Top_categories_Select_link'>Camera Lenses</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/cameras-gadgets'
          >
            <div className='Top_categories_Select_link'>Tripods, Stabilizers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/cameras-gadgets'
          >
            <div className='Top_categories_Select_link'>Flashes & Lighting</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/cameras-gadgets'
          >
            <div className='Top_categories_Select_link'>Camera Microphones</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/photo-printers'
          >
            <div className='Top_categories_Select_link'>Photo Printers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/camera-memory'
          >
            <div className='Top_categories_Select_link'>Memory Cards</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/camera-memory'
          >
            <div className='Top_categories_Select_link'>Memory Card Readers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/camera-lenses'
          >
            <div className='Top_categories_Select_link'>Digital Photo Frames</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/cameras-gadgets'
          >
            <div className='Top_categories_Select_link'>Backgrounds</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/cameras-gadgets'
          >
            <div className='Top_categories_Select_link'>Camera Film</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/vlogger-kits'
          >
            <div className='Top_categories_Select_link'>Vlogger Kits</div></a></div>
        </div>
        </div>

        {/* Desktop Computers */}
        <div className={ toggleComputersCategory === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(1); ComputersCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-components'
          >
            <div className='Top_categories_Select_link'>Optical Disc Drives</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/processors'
          >
            <div className='Top_categories_Select_link'>Processors</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/graphic-cards'
          >
            <div className='Top_categories_Select_link'>Graphic Cards</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/motherboards'
            >
            <div className='Top_categories_Select_link'>Motherboards</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/desktop-memory'
          >
            <div className='Top_categories_Select_link'>Desktop Memory</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/power-supplies'
          >
            <div className='Top_categories_Select_link'>Power Supplies</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/pc-casing'
          >
            <div className='Top_categories_Select_link'>PC Cabinet</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/wifi-adapters'
          >
            <div className='Top_categories_Select_link'>WiFi Cards, Sticks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-components'
          >
            <div className='Top_categories_Select_link'>Cooling Fans</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-components'
          >
            <div className='Top_categories_Select_link'>Heatsinks</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-components'
          >
            <div className='Top_categories_Select_link'>Power Cables</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/cables-adapters'
          >
            <div className='Top_categories_Select_link'>Cables & Adapters</div></a></div>
        </div>
        </div>

        {/* Desktop Accessories */}
        <div className={ toggleComputersCategory === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(1); ComputersCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-peripheral'
          >
            <div className='Top_categories_Select_link'>External CD-DVD Drives</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-peripheral'
          >
            <div className='Top_categories_Select_link'>Keyboards</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-peripheral'
          >
            <div className='Top_categories_Select_link'>Mouses</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/computer-peripheral'
            >
            <div className='Top_categories_Select_link'>USB Speakers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-peripheral'
          >
            <div className='Top_categories_Select_link'>USB Microphones</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-peripheral'
          >
            <div className='Top_categories_Select_link'>Memory Card Readers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/cables-adapters'
          >
            <div className='Top_categories_Select_link'>Cables & Adapters</div></a></div>
        </div>
        </div>

        {/* Laptop Components */}
      <div className={ toggleComputersCategory === 3 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(1); ComputersCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/laptop-components'
          >
            <div className='Top_categories_Select_link'>Laptop Chargers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/laptop-components'
          >
            <div className='Top_categories_Select_link'>Laptop Batteries</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/laptop-components'
          >
            <div className='Top_categories_Select_link'>Laptop CD/DVD Drives</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/laptop-memory'
            >
            <div className='Top_categories_Select_link'>Laptop Memory</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/laptop-components'
          >
            <div className='Top_categories_Select_link'>Cooling Fans</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/laptop-components'
          >
            <div className='Top_categories_Select_link'>Power Cables</div></a></div>

        </div>
        </div>

        {/* Laptop Accessories */}
        <div className={ toggleComputersCategory === 4 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(1); ComputersCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-peripheral'
          >
            <div className='Top_categories_Select_link'>External CD-DVD Drives</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-peripheral'
          >
            <div className='Top_categories_Select_link'>Keyboards</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-peripheral'
          >
            <div className='Top_categories_Select_link'>Mouses</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/laptop-accessory'
            >
            <div className='Top_categories_Select_link'>Cooling Pads</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/laptop-accessory'
          >
            <div className='Top_categories_Select_link'>Laptop Sleeves, Bags</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/laptop-accessory'
          >
            <div className='Top_categories_Select_link'>Laptop Stands</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-pads'
          >
            <div className='Top_categories_Select_link'>Desk Pads</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/computer-peripheral'
            >
            <div className='Top_categories_Select_link'>USB Speakers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-peripheral'
          >
            <div className='Top_categories_Select_link'>USB Microphones</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-peripheral'
          >
            <div className='Top_categories_Select_link'>Memory Card Readers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/cables-adapters'
          >
            <div className='Top_categories_Select_link'>Cables & Adapters</div></a></div>
        </div>
        </div>

        {/* Storage Drives */}
        <div className={ toggleComputersCategory === 5 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(1); ComputersCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hard-disk-drives'
          >
            <div className='Top_categories_Select_link'>Internal Hard Disk Drives (HDD)</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/hard-disk-drives'
          >
            <div className='Top_categories_Select_link'>Desktop Hard Disk Drives (HDD)</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/solid-state-drives'
          >
            <div className='Top_categories_Select_link'>Solid State Drives (SSD)</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/solid-state-drives'
            >
            <div className='Top_categories_Select_link'>NVMe SSD</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/external-drives'
          >
            <div className='Top_categories_Select_link'>External HDD</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/external-drives'
          >
            <div className='Top_categories_Select_link'>External SSD</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/storage-devices'
          >
            <div className='Top_categories_Select_link'>USB (Flash Drives)</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/storage-devices'
            >
            <div className='Top_categories_Select_link'>Memory Cards</div></a></div>
        </div>
        </div>

        {/* Software */}
        <div className={ toggleComputersCategory === 6 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(1); ComputersCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-software'
          >
            <div className='Top_categories_Select_link'>Microsoft 365/Office & Adobe</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-software'
          >
            <div className='Top_categories_Select_link'>Operating Systems</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/computer-software'
          >
            <div className='Top_categories_Select_link'>Antivirus & Security</div></a></div>

        </div>
        </div>

        {/* Wi-Fi Networking */}
        <div className={ toggleComputersCategory === 7 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(1); ComputersCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/networking'
          >
            <div className='Top_categories_Select_link'>WiFi Routers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/networking'
          >
            <div className='Top_categories_Select_link'>Mesh WiFi</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/networking'
          >
            <div className='Top_categories_Select_link'>Cable Modems</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/networking'
            >
            <div className='Top_categories_Select_link'>Range Extenders</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/networking-accessories'
            >
            <div className='Top_categories_Select_link'>Cable & Adapters</div></a></div>
        </div>
        </div>

        {/* Printer, Scanners */}
        <div className={ toggleComputersCategory === 8 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(1); ComputersCategory()}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/printers'
          >
            <div className='Top_categories_Select_link'>Printers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/printers'
          >
            <div className='Top_categories_Select_link'>Commercial Printers</div></a></div>
          <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
          // href='/printers'
          >
            <div className='Top_categories_Select_link'>Photo Printers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/printers'
            >
            <div className='Top_categories_Select_link'>Scanners</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/printers'
            >
            <div className='Top_categories_Select_link'>Label Printers</div></a></div>
            <div className='Top_categories_Select'><a className='Top_categories_Select_link_tag'
            // href='/inks-toners'
            >
            <div className='Top_categories_Select_link'>Inks & Toners</div></a></div>
        </div>
        </div>

        {User && User._id === undefined ?
                <div className='SignIn_sidebar_box'> 
                <div className='SignIn_sidebar_button'>
                <a href='/login'>
                  <div className='signin_button_on_menu'>
                    <span className='signin_button_on_menu_span'>Sign In</span>
                  </div>
                </a>
                </div>
                </div>
                :
                <></>
        }

{User && User._id === undefined ?
                <></>
                :
                <div className='Logout_sidebar_box'> 
                <div className='Logout_sidebar_button'>
                <a onClick={() => { refreshPage(); logoutHandler() }}>
                  <div className='signin_button_on_menu'>
                    <span className='signin_button_on_menu_span'>logout</span>
                  </div>
                </a>
                </div>
                </div>
        }

    </div>
    </div>
  </>

)
}

export default NavMenu