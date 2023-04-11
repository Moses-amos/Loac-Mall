import React, { useState } from 'react'
import './navmenu.css'

function NavMenu() {

  const [toggleFirstCategory, settoggleFirstCategory] = useState(0)
  const [toggleSecondCategory, settoggleSecondCategory] = useState(0)
const [toggleSelectedOne, settoggleSelectedOne] = useState(0)
const [toggleBottomFirstCategory, settoggleBottomFirstCategory] = useState(0)
const [toggleBottomSecondCategory, settoggleBottomSecondCategory] = useState(0)
const [toggleThirdCategory, settoggleThirdCategory] = useState(0)
const [toggleFourthCategory, settoggleFourthCategory] = useState(0)
const [toggleFifthCategory, settoggleFifthCategory] = useState(0)
const [toggleBottomThirdCategory, settoggleBottomThirdCategory] = useState(0)
const [toggleBottomFourthCategory, settoggleBottomFourthCategory] = useState(0)
const [toggleBottomFifthCategory, settoggleBottomFifthCategory] = useState(0)
const [toggleBottomSixthCategory, settoggleBottomSixthCategory] = useState(0)
const [toggleBottomSevenCategory, settoggleBottomSevenCategory] = useState(0)

  const FirstCategory = (index) => {
    settoggleFirstCategory(index)
}

const SelectedOneCategory = (index) => {
  settoggleSelectedOne(index);
}

const SecondCategory = (index) => {
  settoggleSecondCategory(index);
}

const ThirdCategory = (index) => {
  settoggleThirdCategory(index);
}

const FourthCategory = (index) => {
  settoggleFourthCategory(index);
}

const FifthCategory = (index) => {
  settoggleFifthCategory(index);
}


const BottomFirstCategory = (index) => {
  settoggleBottomFirstCategory(index);
}

const BottomSecondCategory = (index) => {
  settoggleBottomSecondCategory(index);
}

const BottomThirdCategory = (index) => {
  settoggleBottomThirdCategory(index);
}

const BottomFourthCategory = (index) => {
  settoggleBottomFourthCategory(index);
}

const BottomFifthCategory = (index) => {
  settoggleBottomFifthCategory(index);
}

const BottomSixthCategory = (index) => {
  settoggleBottomSixthCategory(index);
}

const BottomSevenCategory = (index) => {
  settoggleBottomSevenCategory(index);
}

return (
  <div className='Nav-menu'>
    <div className='Menu-Item-inline'>
        <div onMouseEnter={()=> {SecondCategory(0); ThirdCategory(0); SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}  
         
        className="Item-title_inline" >
          <span>Gadgets</span>
          <div onMouseLeave={()=> {SecondCategory(0); ThirdCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 

        className="Dropdown_categories-menu"
        >
        <div style={{ display: 'flex', justifyContent: 'center'}}>
      <div className='Dropdown_Navmenu'>
          <div style={{ display: 'flex'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(1); BottomThirdCategory(0);
                                           FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a href='/desktops-laptops' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Desktops & Laptops</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(2);
                                           BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/desktop-components'>
                                        <div style={{ paddingLeft: '5px'}}>Desktop Components</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(3); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                        <div style={{ paddingLeft: '5px'}}>Desktop Accessories</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(4); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/laptop-components'>
                                        <div style={{ paddingLeft: '5px'}}>Laptop Components</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(5); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                        <div style={{ paddingLeft: '5px'}}>Laptop Accessories</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(6); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-drives'>
                                        <div style={{ paddingLeft: '5px'}}>Hard Drive, SSD, Storages</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(7); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/networking'>
                                        <div style={{ paddingLeft: '5px'}}>Wi-Fi Networking, Cables</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(8); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/desktops'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Desktops</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(9); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/laptops'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Laptops</span></div>
                                          </a>
                                    </li>
        </ul>
        <ul className={toggleFirstCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cd-dvd-drives'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Optical Disc Drive</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/processors'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Processors (CPU)</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/graphic-cards'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Graphic Cards</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/motherboards'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Motherboards</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/desktop-memory'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Desktop Memory</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/power-supplies'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Power Supplies</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wifi-cards'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>WiFi Card, Sticks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cooling'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cooling Fans</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cooling'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Heatsinks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/desktop-cabinets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cabinets (Case)</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(13)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cables-adapters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cables & Adapters</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/power-cables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Power Cables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/desktop-components'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Desktop Components</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cd-dvd-drives'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>External CD-DVD Drives</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/mouse-keyboard'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Keyboards</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/mouse-keyboard'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Mouses</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>USB Speakers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-pads'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Desk Pads</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 55? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(55)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Microphones</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/card-readers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Memory Card Readers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cables-adapters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cables & Adapters</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Computer Accessories</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/chargers-batteries'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Laptop Chargers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/chargers-batteries'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Laptop Battery</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cd-dvd-drives'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Laptop CD/DVD Drives</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/laptop-memory'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Laptop Memory</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cooling'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cooling Fans</span></div>
                                          </a>
                                    </li>
                                    {/* <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/laptop-components'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Replacement Screen</span></div>
                                          </a>
                                    </li> */}
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/power-cables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Power Cables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cables-adapters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cables & Adapters</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/laptop-components'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Laptop Components</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cd-dvd-drives'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>External CD-DVD Drives</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Keyboards</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Mouse</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-pads'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cooling Pads</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/laptop-accessory'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Laptop Sleeves, Bags</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/laptop-accessory'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Laptop Stands</span></div>
                                          </a>
                                    </li>
                                    {/* <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/laptop-peripherals'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>USB hub</span></div>
                                          </a>
                                    </li> */}
                                    {/* <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/laptop-peripherals'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Portable Power Stations</span></div>
                                          </a>
                                    </li> */}
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>USB Microphones</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/card-readers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Memory Card Readers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-pads'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Desk Pads</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cables-adapters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cables & Adapters</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Computer Accessories</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===6 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/hard-disk-drives'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Internal Hard Disk Drive (HDD)</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/hard-disk-drives'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Desktop Hard Disk Drive (HDD)</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/solid-state-drives'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Solid State Drive (SSD)</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/solid-state-drives'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>NVMe SSD</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/external-drives'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>External HDD</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/external-drives'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>External SSD</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-devices'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>USB (Flash Drive)</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-devices'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Memory Card</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-drives'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storages Drives</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cables-adapters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cables & Adapters</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/networking'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Routers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/networking'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wi-Fi Adapters (Wi-Fi Stick)</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/networking'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Mesh Wi-Fi Systems</span></div>
                                          </a>
                                    </li>
                                    {/* <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/networking'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Ethernet Switches</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/networking'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cable Modems</span></div>
                                          </a>
                                    </li> */}
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/networking'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>WiFi Range Extender</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/networking'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Ethernet Extenders</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleBottomFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(1); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <span style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Office Equipment</span></div>
                                          </span>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(2); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/monitors'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Monitors</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(3); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/printers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Printers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(4); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/printers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Toners, Inks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(5); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/computer-software'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Computer Software</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
      </div>
      <div className='Dropdown_Navmenu'>
          <div style={{ display: 'flex'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleSecondCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(1); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a href='/cellular-phones' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Cell Phones & Tablets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(2); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/cellular-components'>
                                        <div style={{ paddingLeft: '5px'}}>Phone Accessories</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(3); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                        <div style={{ paddingLeft: '5px'}}>Tablet & ipad Accessories</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(4); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' href='/iphones'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>iPhones</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleSecondCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(5); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' href='/smartphones'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Smartphones</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(6); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' href='/tablets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>iPads</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(7); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' href='/tablets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tablets</span></div>
                                          </a>
                                    </li>
                                    {/* <li className={toggleSecondCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(8); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' href='/tablets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>E Reader</span></div>
                                          </a>
                                    </li> */}
        </ul>
        <ul className={toggleSecondCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cellular-components'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Chargers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cellular-components'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Charge cables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cellular-components'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Powerbanks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Screen protectors</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Phone grips, popsockets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Phone cases</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Phone mounts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Air tags, Smart trackers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Selfie sticks</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleSecondCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cellular-components'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Chargers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cellular-components'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Charge cables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cellular-components'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Powerbanks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Screen protectors</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Grips, popsockets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tablet cases</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Small keyboards</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Stands, mounts</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleBottomSecondCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(1); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a href='/home-theater' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Tv's & Home Theater</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomSecondCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(2); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/flatscreens'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Flatscreen TV's</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomSecondCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(3); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/sound-bars'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Sound Bars</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomSecondCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(4); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/streaming-device'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Decoders</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomSecondCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(5); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/streaming-device'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Streaming Media Players</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomSecondCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(6); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/streaming-device'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>CD/DVD, Blu-Ray Players</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomSecondCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(7); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tv-mounts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tv Wall Mounts</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
      </div>
      <div className='Dropdown_Navmenu'>
          <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(1); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a href='/cameras-other' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Cameras & Other</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(2); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/camera-accessories'>
                                        <div style={{ paddingLeft: '5px'}}>Camera Accessories</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(3); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cameras'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cameras</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(4); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/camcorders'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Camcorders</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(5); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/drones'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Drones</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(6); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/webcams'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Webcams</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(7); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/projectors'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Projectors</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(8); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/binoculars'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Binoculars</span></div>
                                          </a>
                                    </li>
        </ul>
        <ul className={toggleThirdCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/tripods-stabilizers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tripods, Stabilizers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/camera-lenses'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Camera Lenses</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/flashes-lighting'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Flashes, Lighting</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/camera-gimbals'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Gimbals</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/camera-batteries'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Camera Battery</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/camera-microphones'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Camera Microphone</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/digital-frames'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Digital Photo Frame</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/storage-devices'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Memory Card</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/camera-film'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Camera Film</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/setting-backgrounds'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Backgrounds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/card-readers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Memory Card Reader</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/vlogger-kits'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Vlogger Kit</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleBottomThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(1); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a href='/headphones' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Headphones & Earbuds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(2); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/headphones'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Headphones</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(3); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/headphones'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Headsets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(4); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/headphones'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Earbuds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(5); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/headphones'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>AirPods</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomThirdCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(6); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/headphone-accessories'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Accessories</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
      </div>
      <div className='Dropdown_Navmenu'>
          <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(1);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a href='/audio-systems' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Audio Systems</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(2);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/portable-speakers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bluetooth Speakers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(3);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/audio-systems'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Stereo System</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(4);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/audio-systems'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>CD/DVD Players</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(5);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/audio-players'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>iPods, MP3 Players</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(6);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/audio'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Turntables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(7);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/audio'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Audio Mixers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(8);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' href='/audio'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Recievers, Amplifiers, Preamps</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleBottomFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(1); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a href='/game-consoles' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Game Consoles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(2); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/playstations'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>PlayStation Consoles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(3); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/xbox'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>XBOX Consoles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(4); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/nintendo'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Nintendo Consoles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(5); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/handheld-vr'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Handheld PCs, Virtual Reality</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(6); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/other-consoles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Other Game Console</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
      </div>
      <div className='Dropdown_Navmenu_last'>
          <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu_last'>
                                    <li className={toggleFifthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(1);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a href='/wearable-tech' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Wearable Technology</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(2);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/watches'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Watches</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(3);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/fitness-trackers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Fitness Trackers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(4);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/wearable-gadgets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Other Wearable Tech</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu_last'>
                                    <li className={toggleBottomFifthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomFifthCategory(1);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                        >
                                          <span style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Personal Care & Health</span></div>
                                          </span>
                                    </li>
                                    <li className={toggleBottomFifthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomFifthCategory(2);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/hair-devices'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Hair Tools & Appliances</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFifthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomFifthCategory(3);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/health-devices'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Health Devices</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomFifthCategory(4);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/fitness-equipment'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Exercise & Fitness</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu_last'>
                                    <li className={toggleBottomSixthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomSixthCategory(1);FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a href='/auto-electronics' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Auto Electronics</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomSixthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomSixthCategory(2);FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/auto-electronics'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dash, Backup Cam</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu_last'>
                                    <li className={toggleBottomSevenCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomSevenCategory(1);FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0)}}
                                        >
                                          <a href='/home-systems' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Smart Home</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomSevenCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomSevenCategory(2);FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/home-systems'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Smart Home Systems, Other</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
      </div>
        </div>
      </div>
        </div>
    </div>
    <div className='Menu-Item-inline'>
        <div onMouseEnter={()=> {SecondCategory(0); ThirdCategory(0); SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className="Item-title_inline">
          <span>Appliances</span>
          <div onMouseLeave={()=> {SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className="Dropdown_categories-menu-Appliance">
        <div style={{ display: 'flex', paddingLeft: '12px'}}>
      <div className='Dropdown_Navmenu'>
          <div style={{ display: 'flex'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(1); BottomThirdCategory(0);
                                           FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a href='/appliances' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Major kitchen Appliance</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(2); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/refrigerators'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Refrigerators</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(3); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cooking-appliances'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Ranges, Stoves</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(4); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/ovens'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Ovens</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(5); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cooktops'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cooktops</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(6); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/freezers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Freezers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(7); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/dishwashers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dishwashers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(8); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/microwaves'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Microwaves</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(9); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/appliance-packages'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Appliance Bundles</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleBottomFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(1); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <span style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Major Laundry Appliances</span></div>
                                          </span>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(2); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/wash-machines'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wash Machines</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(3); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/dryers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dryers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(4); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/appliance-bundles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Washer & Dryer Bundles</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
      </div>
      <div className='Dropdown_Navmenu'>
          <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleSecondCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(1); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a href='/kitchen-appliances' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Small Kitchen Appliances</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(2); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Coffee, Tea Makers</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(3); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Cookers, Pots</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(4); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Bread, Waffle Makers</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(5); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Juicers, Blenders, Processors</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>

                                    <li className={toggleSecondCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(7); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Mixers, Attachments</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(8); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Toasters, Conveyor</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(9); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Cotton Candy, Ice Cream Machine</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(10); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Countertop Ovens</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(11); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Ice Makers, Dehydrators</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>

                                    <li className={toggleSecondCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(6); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/electric-griddles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Electric Griddles</span></div>
                                          </a>
                                    </li>
                                    
                                    <li className={toggleSecondCategory=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(12); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/indoor-grills'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Indoor Grills</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(13); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/air-deep'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Air, Deep Fryers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(14); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/food-scales'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Food Scales</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 15? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(15); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/vacuum-sealers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Vacuun Sealers</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleSecondCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/coffe-makers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Coffee Makers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/expresso-makers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Expresso Makers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/tea-makers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tea Makers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/soda-makers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Soda Makers</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleSecondCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/instant-pots'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Instant Pots</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/slow-cookers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Slow Cookers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/multi-cookers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Multi Cookers</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleSecondCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bread-makers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bread Makers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/waffle-makers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Waffle Makers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/pancake-makers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pancake Makers</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleSecondCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/blenders'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Blenders</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/juicers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Juicers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/food-processors'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Food Processors</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/food-choppers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Food Choppers</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleSecondCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/stand-mixers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Stand Mixers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/hand-mixers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Hand Mixers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/mixer-attachments'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Mixer Attachments</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleSecondCategory===8 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/slice-toasters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Slice Toaster</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/sandwitch-toasters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Sandwitch Toasters</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/conveyor-toasters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Conveyor Toasters</span></div>
                                          </a>
                                    </li>
                                    

        </ul>

        <ul className={toggleSecondCategory===9 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/icecream-machine'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Ice Cream Machine</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/candy-machine'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cotton Candy Machine</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/popcorn-machine'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Popcorn Machine</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/icecream-shaver'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Ice Cream Shaver</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/fondue-pots'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Fondue Maker</span></div>
                                          </a>
                                    </li>
                                    

        </ul>

        <ul className={toggleSecondCategory===10 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/toaster-ovens'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Toaster Ovens</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/convection-ovens'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Convection Ovens</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleSecondCategory===11 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/ice-makers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Ice Makers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/dehydrators'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dehydrators</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/water-dispensers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Water Cooler Dispensers</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleSecondCategory===12 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/food-scales'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Food Scales</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/vacuum-sealers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Vacuum Sealers</span></div>
                                          </a>
                                    </li>
        </ul>

          </div>
      </div>
      <div className='Dropdown_Navmenu'>
        <div style={{ display: 'flex'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(1); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);
                                         BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a href='/ambiance-devices' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Heating , Cooling , Air</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(2); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);
                                         BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/air-conditioners'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Air Conditioners</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(3); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);
                                         BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/air-purifiers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Air Purifiers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(4); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);
                                         BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/humidifiers-dehumidifiers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Humidifiers, Dehumidifiers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(5); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);
                                         BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/ambiance-devices'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Thermostat</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(6); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);
                                         BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/ambiance-devices'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Evaporative Air Coolers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(7); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);
                                         BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/fans'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Fans</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(8); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);
                                         BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/heaters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Heaters</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(9); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);
                                         BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/ambiance-devices'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Fire Places</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleBottomThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(1); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <span style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Outdoor Kitchen</span></div>
                                          </span>
                                    </li>
                                    <li className={toggleBottomThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(5); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/kitchen-thermometers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Thermometers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(4); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/kitchen-torches'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Torches</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(2); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/outdoor-grills'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Grills</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(3); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/smokers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Smokers</span></div>
                                          </a>
                                    </li>
                                    
                                    
        </ul>
          </div>

      </div>
      <div className='Dropdown_Navmenu'>
      <div style={{ display: 'flex'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleBottomFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(1); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a href='/hair-devices' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Hair Appliances</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(2); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/straighteners-brushes'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Straighteners, Brushes</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(3); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/curling-irons'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Curling Irons</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(4); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/hair-dryers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Hair Dryers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(5); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/clippers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Clippers</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleBottomFourthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(6); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/hair-trimmers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Trimmers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(7); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/electric-shavers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Electric Shavers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(8); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/Epilators'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Epilators, Shavers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(9); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/facial-trimmers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Nose, Ear Trimmers</span></div>
                                          </a>
                                    </li>

        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(1);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a href='/indoor-appliances' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Indoor Appliances</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(2);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); 
                                          BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/vacuums'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Vacuum Cleaners</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(3);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); 
                                          BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/steam-cleaning'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Steam Mobs, Steam Vacuums</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(4);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); 
                                          BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/carpet-cleaning'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Carpet Sweepers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(5);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); 
                                          BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'
                                           href='/essential-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Irons, Steam Irons</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
      </div>
      <div className='Dropdown_Navmenu_last'>
          <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu_last'>
                                    <li className={toggleFifthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(1);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a href='/power-tools' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Power Tools</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(2);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/electric-drills'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Drills</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(3);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/electric-chainsaws'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Chainsaws</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(4);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/electric-planers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Electric Planer</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(5);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/electric-sanders'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Electric Sander</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(6);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/jig-saws'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Jig Saws</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(7);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/nail-guns'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Nail Guns</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu_last'>
                                    <li className={toggleBottomFifthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomFifthCategory(1);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                        >
                                          <a style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Garden & Backyard Tools</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFifthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomFifthCategory(2);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/leaf-blowers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Leaf Blowers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFifthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomFifthCategory(3);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/trimmers-edgers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Trimmers, Edgers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomFifthCategory(4);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                       >
                                           <a className='selectedlink_menu_nav_span' href='/pressure-washers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pressure Washers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFifthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomFifthCategory(5);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/log-splitters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Log Splitters</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFifthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomFifthCategory(6);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/lawn-mowers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Lawn Mowers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFifthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{BottomFifthCategory(7);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/more-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>More Tools</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
      </div>
        </div>
      </div>
        </div>
    </div>

    <div className='Menu-Item-inline'>
    <div onMouseEnter={()=> {SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}  
        className="Item-title_inline" >
          <span>Home</span>
          <div onMouseLeave={()=> {SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className="Dropdown_categories-menu-Home">
          <div style={{ display: 'flex', justifyContent: 'center'}}>
          <div className='Dropdown_Navmenu'>
          <div style={{ display: 'flex'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(1); BottomThirdCategory(0);
                                           FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Furniture</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(2);
                                           BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Living Room Furniture</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(3); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Kitchen & Dining</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(4); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Bedroom Furniture</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(5); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Bathroom Furniture</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(6); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Storage Furniture</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(7); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Office Furniture</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>


                                    <li className={toggleFirstCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(8); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Entryway Furniture</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(9); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Bar Furniture</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(10); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Patio Furniture</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(11); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Folding Chairs, Tables</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>

                                    <li className={toggleFirstCategory=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(12); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Gaming Furniture</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                             className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(13); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Nursery Furniture</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(14); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Kids Furniture</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 15? "SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(15); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px', color: '#fff'}}>Boo boo</div>
                                          </a>
                                    </li>


        </ul>

        <ul className={toggleFirstCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/entertainment-centers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Entertainment Centers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tv-stands'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tv Stands</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/coffee-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Coffee Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/end-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>End, Side Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/console-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Console Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/ottomans'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Ottomans, Benches</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/floor-pillows'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Poufs, Floor Pillows</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/chairs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Chairs, Recliners</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/lounges'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Chaise Lounges</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/sofas-couches'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Sofas, Couches</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/sectional-sofas'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Sectional Sofas</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/love-seats'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Love Seats</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(13)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/sofa-beds'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Sofa Beds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(14)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/futons'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Futons</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/dining-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dining Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/dining-chairs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dining Chairs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/counter-stools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bar, Counter Stools</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/dining-benches'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dinning Benches</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/kitchen-islands'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Islands</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/kitchen-carts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Carts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/sideboards-buffets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Sideboards, Buffets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/pantry-cabinets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pantry Cabinets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bakers-racks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bakers Racks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/kitchen-cabinets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Cabinets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bar-cabinets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bar, Wine Cabinets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bar-carts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bar Carts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(13)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wine-racks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wine Racks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(14)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/dining-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dining Sets</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/beds'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Beds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/mattresses'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Mattresses</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/headboards'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Headboards</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-beds'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Beds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bed-frames'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bed Frames</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bunk-beds'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bunk, Loft Beds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/folding-beds'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Folding Beds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/dressers-chests'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dressers, Chest</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/nightstands'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Nightstands</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/jewellery-armoires'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Jewellery Armoires</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/vanity-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Vanity Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bedroom-benches'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bedroom Benches</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(13)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wardrobes'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wardrobes</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(14)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bedroom-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bedroom Sets</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bathroom-seating'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Benches, Stools</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bathroom-vanity'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bathroom Vanity</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/floor-cabinets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Floor Cabinets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-cabinets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Cabinets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/toilet-etageres'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Over Toilet Cabinets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/towel-racks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Towel Racks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-racks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Racks</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===6 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tv-stands'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tv Stands</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bookshelves'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bookshelves, Bookcases</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-cabinets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Cabinets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/filing-cabinets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Filing Cabinets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-drawers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Drawers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-trunks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Trunks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-racks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dressers, Chest</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cube-storages'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cube Storage Organizer</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/end-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>End, Side Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-ottomans'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Ottomans</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/console-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Console Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/desks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Desk</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(13)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/sideboards-buffets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Sideboards, Buffets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(14)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/nightstands'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Nightstands</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/desks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Desks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/office-chairs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Office Chairs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bookshelves'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bookshelves, Bookcases</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/filing-cabinets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Filing Cabinets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/adjustable-desks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Adjustable Desks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cube-storages'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cube Storage Organizers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/printer-stands'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Printer Stands</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/drawers-carts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Drawers, carts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/breakroom-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Breakroom Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/standing-podiums'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Standing Podiums</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/desk-organizers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Desk Organizers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-baskets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Baskets, Bins</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===8 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/console-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Console Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-benches'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Benches</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/entryway-benches'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Entryway Benches</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-ottomans'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Ottomans</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/hall-tree'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Hall Tree</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bookshelves'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bookshelves</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/cube-storages'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cube Storage Organizers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/shoe-storages'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Shoe Storages</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-shelves'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Shelving</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/coat-racks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Coat Racks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-baskets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Baskets, Bins</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===9 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/counter-stools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bar, Counter Stools</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bar-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bar Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bar-cabinets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wine, Bar Cabinets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/corner-bars'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall, Corner Bars</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/pub-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pub Tables & Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bar-carts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bar Carts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wine-racks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wine Racks</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===10 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/patio-chairs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Patio Chairs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/patio-benches'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Patio Benches</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-lounges'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Outdoor Lounges</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-seating'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Outdoor Sofas, Loveseats</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/patio-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Patio Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-bistros'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Patio Bistros</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-shades'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Shades</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bistro-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bistro Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/conversation-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Patio Conversation Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-dining'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Patio Dining Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/patio-furniture'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Patio Furniture Sets</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===11 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/folding-chairs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Chairs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/folding-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/folding-trays'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tray Tables</span></div>
                                          </a>
                                    </li>
                                    
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/folding-beds'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Folding Beds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/folding-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Folding Tables, Chair sets</span></div>
                                          </a>
                                    </li>
                                    
        </ul>

        <ul className={toggleFirstCategory===12 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/gaming-chairs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Gaming Chairs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/gaming-desks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Gaming Desks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/gaming-furniture'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Gaming Furniture Set</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===13 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/baby-cribs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Baby Cribs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/crib-mattresses'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Crib Mattresses</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bassinets-sleepers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bassinets, Bedside Sleepers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/changing-tables'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Changing Tables</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/gliders-seating'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Gliders, Rocking Chairs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/travel-beds'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Baby Travel Beds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/baby-dressers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Baby Dressers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/toddler-beds'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Toddler Beds</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFirstCategory===14 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/kids-beds'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kids Beds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bunk-beds'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bunk Beds</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/kids-chairs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kids Chairs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/kids-furniture'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tables & Chairs Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/kids-headboards'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kids Headboards</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/play-tents'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Play Tents</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/toy-boxes'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Toy Boxes, Chests</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/kids-vanities'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kids Vanities</span></div>
                                          </a>
                                    </li>
        </ul>

          </div>

          </div>
          <div className='Dropdown_Navmenu'>
          <div style={{ display: 'flex'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleSecondCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(1); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Home Decore</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(2); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Throw Pillows & Blankets</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(3); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Lights & Lamps</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(4); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Wall Decore</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(5); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Wall Art</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(6); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Rugs, Carpets</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(7); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Mirrors</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>

                                    <li className={toggleSecondCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(8); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Clocks</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(9); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Frames, Albums</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(10); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Candles, Home Fragrance</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(11); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Artificial Flowers, Plants</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(12); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Decorative Accessories</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(13); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Flooring, Tiles</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleSecondCategory=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(14); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/vinyl-flooring'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Vinyl Flooring</span></div>
                                          </a>
                                    </li>

        </ul>
        <ul className={toggleSecondCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/throw-pillows'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Throw Pillows</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/throw-blankets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Throw Blankets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/backrest-pillows'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Backrest Pillows</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/floor-pillows'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Floor Pillows, Poufs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/decorative-cases'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Throw Pillow Cases</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleSecondCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/table-lamps'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Table Lamps</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/floor-lamps'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Floor Lamps</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/desk-lamps'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Desks, Reading Lamps</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/decorative-lighting'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Decorative Lighting</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/lamp-shades'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Lamp Shades</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/lamp-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Lamp Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/ceiling-lights'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Ceiling Lights</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/ceiling-fans'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Ceiling Fans</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/chandeliers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Chandeliers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/fandeliers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Fandeliers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/track-lights'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Track Lights</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-lights'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Outdoor Lights</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleSecondCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tapestries'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tapestries</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-shelves'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Shelving</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/wall-hangings'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Hangings</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/decals-wallpaper'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Decals, Wallpaper</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleSecondCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/canvas-art'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Canvas Art</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/framed-art'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Framed Wall Art</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/inspirational-arts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Inspirational Arts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/paintings'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Paintings</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/photography'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Photography</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/metal-art'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Metal Wall Art</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleSecondCategory===6 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/throw-rugs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Throw Rugs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/area-rugs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Area Rugs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bedroom-rugs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bedroom Rugs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/door-mats'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Doormats</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/runner-rugs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Runner Rugs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/round-rugs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Round Rugs</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/kids-rugs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kids Rugs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-rugs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Outdoor Rugs</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleSecondCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/round-mirrors'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Round Mirrors</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/floor-mirrors'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Floor Mirrors</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-mirrors'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Mirrors</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/led-mirrors'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>LED Mirrors</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleSecondCategory===8 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-clocks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Clocks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/table-clocks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Table Top Clocks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cuckoo-clocks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cuckoo Clocks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/digital-clocks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Digital Clocks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/alarm-clocks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Alarm Clocks</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleSecondCategory===9 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/table-frames'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Table Top Frames</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-frames'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Frames</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/gallary-frames'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Gallary Frames</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/digital-frames'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Digital Frames</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleSecondCategory===10 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/candles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Candles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/frameless-candles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Frameless Candles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/candle-holders'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Candle Holders</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/oil-diffusers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Oil Diffusers</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleSecondCategory===11 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/artificial-plants'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Artificial Plants</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/artificial-trees'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Artificial Trees</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/fake-succulents'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Fake Succulents</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/plant-stands'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Plant Stands, Baskets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/planters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Planters</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/vases'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Vases</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleSecondCategory===12 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/globes'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Globes</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/sculptures'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Sculptures</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/decorative-trays'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Decorative Trays</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/decorative-bowls'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Decorative Bowls</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/decorative-lighting'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Decorative Lighting</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/room-dividers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Room Dividers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/storage-baskets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Baskets, Bins</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/bookends'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bookends</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/decorative-items'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Decorative Accessories</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleSecondCategory===13 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/flooring'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Marble Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/flooring'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Ceramic Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/flooring'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Porcelain Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/flooring'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Stone Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cement Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Granite Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Travertine Tiles</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Quarry Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Metal Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/stone-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Stone Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Resin Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(13)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Glass Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(14)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Mosaic Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 15? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(15)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Carpet Tiles</span></div>
                                          </a>
                                    </li>
        </ul>

          </div>
          </div>
          <div className='Dropdown_Navmenu'>
          <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(1); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Kitchen & Dining</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(2); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Cookware</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(3); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Tableware</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(4); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Bakeware</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(5); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Drinkware, Glassware</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(6); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Serveware</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(7); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Silverware, Flatware</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(8); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Utensils, Gadgets</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(9); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Food Storages</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleThirdCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{ThirdCategory(10); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Cutlery, Knives</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleThirdCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cookware-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cookware Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/dutch-ovens'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dutch Ovens</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/pans-skillets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Frying Pans, Skillets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/pots'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cooking Pots</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/pressure-cookers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pressure Cookers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/roasters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Roasters</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleThirdCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/dinner-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dinner Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/dinner-collections'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dinner Collections</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/plates'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Plates</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/dessert-plates'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dessert Plates</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/bowls'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bowls</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleThirdCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/baking-dishes'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Baking Dishes</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/baking-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bakeware Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/baking-sheets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Baking Sheets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/cake-pans'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cake Pans</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cupcake-pans'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Muffins, Cupcake Pans</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/pie-pans'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pie, Tart Pans</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/pizza-pans'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pizza Pans</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/loaf-pans'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bread & Loaf Pans</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/mixing-bowls'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Mixing Bowls</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/baking-cups'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Baking Cups</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/baking-utensils'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Baking Utensils</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleThirdCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/drinking-glasses'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Drinking Glasses</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/coffee-mugs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Coffee Mugs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/tea-cups'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tea Cups</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/wine-glasses'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wine Glasses</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cocktail-glasses'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cocktail Glasses</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/champagne-glasses'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Champagne Glasses</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/beer-glasses'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Beer Glasses</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/pitchers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pitchers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/beverage-dispenser'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Beverage Dispenser</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/travel-mugs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Travel Mugs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/water-bottles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Water Bottles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/blender-bottles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Blender Bottles</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleThirdCategory===6 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/serveware-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Serveware Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cake-stands'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cake Stands</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/tiered-servers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Tiered Servers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/beverage-dispenser'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Beverage Dispenser</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/serving-trays'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Serving Trays</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/serving-platters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Serving Platters</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/pitchers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pitchers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/casserole-dishes'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Casserole Dishes</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/butter-dishes'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Butter Dishes</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/gravy-boats'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Gravy Boats</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/serving-bowls'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Serving Bowls</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/utensil-caddies'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Utensil Caddies</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(13)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/serveware'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Sugar Bowls, Creamer Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(14)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/shakers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Salt & Pepper Shakers</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleThirdCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/silverware-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Silverware Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/silverware-chest'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Silverware Chest</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/kitchen-utensils'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Utensils Sets</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleThirdCategory===8 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/food-scales'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Food Scales</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/kitchen-utensils'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Utensils Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cooking-timers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cooking Timers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/kitchen-thermometers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Thermometer</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/water-dispenser'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Water Filtration Dispenser</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/kitchen-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Tools</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/slice-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Fruit, Vegetables Tools</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/measuring-utensils'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Measuring Spoons, Cups</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/mandolines-slicers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Mandolines, Slicers</span></div>
                                          </a>
                                    </li>


        </ul>

        <ul className={toggleThirdCategory===9 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/storage-canisters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Canisters</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/storage-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Storage Container Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/pantry-cabinets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pantry Cabinets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/bakers-racks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bakers Racks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/kitchen-carts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Carts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/canning-jars'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Canning Jars</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/refrigerator-storage'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Refrigerator Storages</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/pot-racks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pot Racks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/dish-racks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Dish Racks</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleThirdCategory===10 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/knife-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Knife Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/block-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Knife Block Sets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/knife-sharpeners'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Knife Sharpeners</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/knife-blocks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Knife Blocks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cleavers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cleavers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/electric-knifes'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Electric Knifes</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cutting-boards'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cutting Boards</span></div>
                                          </a>
                                    </li>
        </ul>

          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleBottomThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(1); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Kitchen Ornaments & Textiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(2); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/kitchen-ornaments'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Ornaments</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(3); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/kitchen-textiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Textile Sets</span></div>
                                          </a>
                                    </li>

        </ul>
          </div>
      </div>
      <div className='Dropdown_Navmenu'>
          <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(1); SelectedOneCategory(0); ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Bathroom Placements</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                       onMouseOver={()=>{FourthCategory(2); SelectedOneCategory(0); ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Showers</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(3); SelectedOneCategory(0); ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Baths</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(4); SelectedOneCategory(0); ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Bathroom Sinks</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(5); SelectedOneCategory(0); ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>One Piece Toilets</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(6); SelectedOneCategory(0); ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Two Piece Toilets</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleFourthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(7); SelectedOneCategory(0); ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Bathroom Tiles, Flooring</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleFourthCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/shower-systems'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Shower Systems</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/hand-showers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Hand Showers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/shower-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Shower Faucets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/shower-drains'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Shower Drains</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/shower-bars'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Shower Bars</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/shower-doors'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Shower Doors</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/volumne-controls'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Volumne Controls</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFourthCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/freestanding-tubs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Freestanding Tubs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/aclover-tubs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Aclover Tubs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/whirlpool-tubs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Whirlpool Tubs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/combination-tubs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Combination Tubs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/drop-tubs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Drop In Tubs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/air-tubs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Air Tubs</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/clawfoot-tubs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Clawfoot Tubs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/walk-in-tubs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Walk In Tubs</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/corner-tubs'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Corner Tubs</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/roman-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Roman Tub Faucets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/freestanding-fillers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Freestanding Tub Fillers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/wall-fillers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Mounted Fillers</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(13)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/mounted-fillers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Mounted Clawfoot Fillers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(14)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/standing-clawfoot'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Floor Clawfoot Fillers</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFourthCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/pedestal-sinks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pedestal Sinks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/drop-ins'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Drop In Sinks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/unermount-sinks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Undermount Sinks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/vessel-sinks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Vessel Sinks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/wall-sinks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Mounted Sinks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/utility-sinks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Utility Sinks</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/sink-combos'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Sink, Faucet Combos</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/single-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Single Hole Faucets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/centerset-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Centerset Faucets</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/widespread-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Widespread Faucets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/mounted-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Mounted Faucets</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleFourthCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/round-onepiece-toilets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>One Piece Round Toilet</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/elongated-onepiece-toilets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>One Piece Elongated Toilet</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/round-mounted-onepiece'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Mounted Round</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/elongated-mounted-onepiece'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Mounted Elongated</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleFourthCategory===6 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/round-twopiece-toilets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Two Piece Round Toilet</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/elongated-twopiece-toilets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Two Piece Elongated Toilet</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/round-mounted-twopiece'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Mounted Round</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/elongated-mounted-twopiece'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Mounted Elongated</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleFourthCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/flooring'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Porcelain Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Linoleum Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(3)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Granite Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/flooring'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Marble Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/flooring'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Ceramic Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cement Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/flooring'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Stone Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(8)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Terracotta Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(9)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Resin Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(10)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Glass Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(11)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Mosaic Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(12)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Metal Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(13)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Cork Tiles</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(14)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/vinyl-flooring'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Vinyl Tiles</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleBottomFourthCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/single-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Single Handle Faucets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/rince-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pre-Rince Faucets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/bridge-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bridge Faucets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/pull-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pull Down Faucets</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/spray-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Side Spray Faucets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/electric-faucets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Touch, Touchless Faucets</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleBottomFourthCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/kitchen-undermounts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Undermount Sinks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/double-undermounts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Two Basin Undermounts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/drop-sinks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Drop In Sinks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/double-sinks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Two Basin Drop In</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(6)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/farmhouse-sinks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Farmhouse Sinks</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(7)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/double-farmhouse'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Two Basin Farmhouse</span></div>
                                          </a>
                                    </li>
        </ul>

        <ul className={toggleBottomFourthCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/wall-hoods'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Wall Mounted Hoods</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/hood-inserts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Range Hood Inserts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/island-hoods'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Island Range Hoods</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/cabinet-hoods'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Under Cabinets Hoods</span></div>
                                          </a>
                                    </li>

        </ul>

        <ul className={toggleBottomFourthCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(1)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/stainless-Undermounts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Stainless Steel Undermounts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(2)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/stainless-drops'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Stainless Steal Drop In</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(4)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' 
                                          href='/double-basin'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Double Basin</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SelectedOneCategory(5)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/copper-sinks'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Copper Sinks</span></div>
                                          </a>
                                    </li>
        </ul>

          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleBottomFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(1); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Kitchen Placements</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(2); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Kitchen Faucets</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(3); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Kitchen Sinks</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(4); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Range Hoods</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(5); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'>
                                        <div style={{ paddingLeft: '5px'}}>Bar, Stainless Sinks</div>
                                        <div style={{ marginRight: '15px'}}>
                                            <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                             className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                              className="_2JzwqO"></path></svg></div>
                                        </div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFourthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                         onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(6); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                         >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/wall-tiles'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kitchen Wall Tiles</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
      </div>
      <div className='Dropdown_Navmenu_last'>
          <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu_last'>
                                    <li className={toggleFifthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(1);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}>
                                          <a style={{ width: '100%', height: '100%'}}>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Bedding</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(2);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/bed-blankets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bed Blankets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(3);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/bed-pillows'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bed Pillows</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(4);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/throw-blankets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Throw Blankets</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleFifthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(5);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/throw-pillows'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Throw Pillows</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(13);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' href='/weighted-blankets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Weighted Blankets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(6);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/duvet-covers'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Duvet Covers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(7);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/comforter-sets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Comforters</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleFifthCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(8);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' href='/quilts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Quilts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(14);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' href='/bed-skirts'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Bed Skirts</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(9);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/kids-blankets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kids Blankets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(10);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/kids-duvet'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kids Duvets</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleFifthCategory=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(11);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/kids-sheets'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kids Sheets</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFifthCategory=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{FifthCategory(12);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                          <a className='selectedlink_menu_nav_span' href='/kids-comforters'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Kid Comforters</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
      </div>
          </div>
          </div>
      </div>
    </div>
    <div className='Menu-Item-inline'>
    <div onMouseEnter={()=> {SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}  
        className="Item-title_inline" >
          <span>Clothes & Accessories</span>
          <div onMouseLeave={()=> {SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className="Dropdown_categories-menu-Clothes"
        >
        </div>
      </div>
    </div>
    <div className='Menu-Item-inline'>
    <div onMouseEnter={()=> {SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}  
        className="Item-title_inline" >
          <span>Sports & Fitness</span>
          <div onMouseLeave={()=> {SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className="Dropdown_categories-menu-Sports"
        >
               </div>
      </div>
    </div>
    <div className='Menu-Item-inline'>
        <div onMouseEnter={()=> {SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className="Item-title_inline" >
          <span>Tools & Equipment</span>
          <div onMouseLeave={()=> {SecondCategory(0);SelectedOneCategory(0); ThirdCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
        FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
        className="Dropdown_categories-menu-Tools">
        <div style={{ display: 'flex', paddingLeft: '12px'}}>
      <div className='Dropdown_Navmenu'>
          <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(1); BottomThirdCategory(0);
                                           FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a href='/power-tools' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Power Tools</span></div>
                                          </a>
                                    </li>

                                    <li className={toggleFirstCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(2); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/power-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Drills</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(3); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/power-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Chainsaws</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(4); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/power-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Electric Planer</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(5); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/power-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Electric Sander</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(6); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/power-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Jig Saws</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleFirstCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(7); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span'
                                           href='/power-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Nail Guns</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
          <div style={{ display: 'flex', marginTop: '10px'}}>
          <ul className='Electronics_dropdown-selects_menu'>
                                    <li className={toggleBottomFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(1); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                        >
                                          <a href='/outdoor-tools' className='Main_Category_Header'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span style={{ fontSize: '15px', fontWeight: '700',
                                        color: '#212121'}}>Garden & Backyard Tools</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(2); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Leaf Blowers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(3); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Trimmers, Edgers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(4); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Pressure Washers</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(5); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Log Splitter</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(6); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>Lawn Mower</span></div>
                                          </a>
                                    </li>
                                    <li className={toggleBottomFirstCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                        onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(7); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                       >
                                          <a className='selectedlink_menu_nav_span' href='/outdoor-tools'>
                                            <div style={{ paddingLeft: '5px'}}>        
                                        <span>More Tools</span></div>
                                          </a>
                                    </li>
        </ul>
          </div>
      </div>
        </div>
      </div>
        </div>
    </div>
</div>
)
}

export default NavMenu