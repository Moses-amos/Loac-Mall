import React from 'react'

function navBackup() {
  return (
    <div className='Nav-menu'>
    <div onMouseEnter={()=> {menuHover(0); SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
    className='Top_Clear_div'></div>
  <div className='Menu-Item-inline'>
         <div style={{position: 'relative'}}>
      <div onMouseEnter={()=> {menuHover(1); SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
       FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
       onClick={()=> {menuHover(0); SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
      className={menuColor ===1 ? "Item-title_inline active-Item-title_inline" : "Item-title_inline"} >
        <span>Electronics</span>
      </div>
    </div>
    <div onMouseLeave={()=> {menuHover(0); SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
      FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
      // className={menuColor === 1 ? "Dropdown_categories-menu" : "Dropdown_categories-menu-hide"}
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
                                        <a href='/desktops-laptops' style={{ width: '100%', height: '100%'}}>
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
                                        <a className='selectedlink_menu_nav_span' href='/desktop-accessories'>
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
                                        <a className='selectedlink_menu_nav_span' href='/laptop-accessories'>
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
                                        <a className='selectedlink_menu_nav_span' href='/desktop-motherboards'>
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
                                  <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-powerSupplies'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Power Supplies</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/wifi-cards'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>WiFi Card & Sticks</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(9)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cooling'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cooling Fans</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(10)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cooling'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Heatsinks</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-cabinets'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cabinets (Case)</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(11)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Power Cables</span></div>
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
                                        <a className='selectedlink_menu_nav_span' href='/desktop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Keyboards</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Mouses</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>USB Speakers</span></div>
                                        </a>
                                  </li>
                                  {/* <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>USB Docking Stations</span></div>
                                        </a>
                                  </li> */}
                                  <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Desk Pads</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Microphones</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(10)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Memory Card Readers</span></div>
                                        </a>
                                  </li>
      </ul>

      <ul className={toggleFirstCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(1)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Ac Laptop Chargers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Battery</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cd-dvd-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptop CD/DVD Drive</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-memory'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptop Memory</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cooling Fan</span></div>
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
                                  <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptop Power Cables</span></div>
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
                                  <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Keyboards</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Mouse</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cooling Pads</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-accessory'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptop Sleeves & Bags</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(4)}}
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
                                  <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(10)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>USB Microphones</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(11)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Memory Card Readers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(12)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Desk Pads</span></div>
                                        </a>
                                  </li>
      </ul>

      <ul className={toggleFirstCategory===6 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(1)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Internal Hard Disk Drive (HDD)</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Desktop Hard Disk Drive (HDD)</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Solid State Drive (SSD)</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(9)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>NVMe SSD</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(10)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>M.2 Sata SSD</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>External Hard Disk Drive (HDD)</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>External SSD (SSD)</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(13)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>USB (Flash Drive)</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(14)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Memory Card</span></div>
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
                                  <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/networking'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Wi-Fi Adapters (Wi-Fi Stick)</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(3)}}
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
                                  <li className={toggleBottomFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(3); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/monitors'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Monitors</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomFirstCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(6); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/printers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Printers</span></div>
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
                                        <a href='/cellular-phones' style={{ width: '100%', height: '100%'}}>
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
                                  <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/cellular-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Powerbanks</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Screen protectors</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Phone grips & popsockets</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Phone cases</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(10)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Phone mounts</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(11)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Air tags & Smart trackers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(12)}}
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
                                  <li className={toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Powerbanks</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Screen protectors</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Grips & popsockets</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Tablet cases</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(9)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Small keyboard</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(11)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Stands & mount</span></div>
                                        </a>
                                  </li>
      </ul>
        </div>
        <div style={{ display: 'flex', marginTop: '10px'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={toggleBottomSecondCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(1); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                      >
                                        <a href='/home-theater' style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span style={{ fontSize: '15px', fontWeight: '700',
                                      color: '#212121'}}>Tv's & Home Theater</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomSecondCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(3); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/flatscreens'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Flatscreen TV's</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomSecondCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(4); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' 
                                        href='/sound-bars'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Sound Bars</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomSecondCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(5); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/streaming-device'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Decoders</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomSecondCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(6); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/streaming-device'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Streaming Media Players</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomSecondCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(7); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/streaming-device'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>CD/DVD Players</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomSecondCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(8); BottomThirdCategory(0); ThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/streaming-device'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Blu-Ray Players</span></div>
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
                                        <a href='/cameras-other' style={{ width: '100%', height: '100%'}}>
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
                                  <li className={toggleThirdCategory=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{ThirdCategory(12); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/cameras'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cameras</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{ThirdCategory(4); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/cameras'>
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
                                         href='/cameras'>
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
                                         href='/camera-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Tripods & Stabilizers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Camera Lenses</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Flash & Lighting</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' 
                                        href='/camera-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Gimbal</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Camera Battery</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Camera Microphone</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Digital Photo Frame</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(9)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/storage-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Memory Card</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(10)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Camera Film</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(11)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Backgrounds</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(12)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Memory Card Reader</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SelectedOneCategory(13)}}
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
                                        <a href='/headphones' style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span style={{ fontSize: '15px', fontWeight: '700',
                                      color: '#212121'}}>Headphones & Earbuds</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(3); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/headphones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Headphones</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(4); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/headphones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Headsets</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(5); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/headphones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Earbuds</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(6); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/headphones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>AirPods</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(7); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
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
                                        <a href='/audio-systems' style={{ width: '100%', height: '100%'}}>
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
                                  <li className={toggleFourthCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(9);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/audio-systems'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Audio Recorders</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(4);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/audio-systems'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Stereo System</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleFourthCategory=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(12);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/audio-systems'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>iPods & MP3 Players</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(5);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/audio-systems'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Turntables</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleFourthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(6);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/audio-systems'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Audio Mixers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleFourthCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(8);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span' href='/audio-systems'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Reciever & Amplifiers</span></div>
                                        </a>
                                  </li>
      </ul>
        </div>
        <div style={{ display: 'flex', marginTop: '10px'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={toggleBottomFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(1); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                      >
                                        <a href='/game-consoles' style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span style={{ fontSize: '15px', fontWeight: '700',
                                      color: '#212121'}}>Game Consoles</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(3); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/playstations'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Playstations</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(4); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/xboxes'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Xbox</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(5); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/nintendos'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Nintendos</span></div>
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
                                        <a href='/wearable-tech' style={{ width: '100%', height: '100%'}}>
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
                                  <li className={toggleFifthCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FifthCategory(9);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/fitness-trackers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Fitness Trackers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FifthCategory(4);FourthCategory(0);ThirdCategory(0); FirstCategory(0);BottomFourthCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/wearable-tech'>
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
                                  <li className={toggleBottomFifthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{BottomFifthCategory(3);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/hair-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Hair Tools & Appliances</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{BottomFifthCategory(4);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/health-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Health Devices</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomFifthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{BottomFifthCategory(5);FifthCategory(0); FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); BottomSevenCategory(0); BottomSixthCategory(0); FifthCategory(0)}}
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
                                        <a href='/auto-electronics' style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span style={{ fontSize: '15px', fontWeight: '700',
                                      color: '#212121'}}>Auto Electronics</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomSixthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{BottomSixthCategory(3);FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/dash-backup-cameras'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Dash & Backup Cam</span></div>
                                        </a>
                                  </li>
      </ul>
        </div>
        <div style={{ display: 'flex', marginTop: '10px'}}>
        <ul className='Electronics_dropdown-selects_menu_last'>
                                  <li className={toggleBottomSevenCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{BottomSevenCategory(1);FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0)}}
                                      >
                                        <span style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span style={{ fontSize: '15px', fontWeight: '700',
                                      color: '#212121'}}>Smart Home</span></div>
                                        </span>
                                  </li>
                                  <li className={toggleBottomSevenCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{BottomSevenCategory(3);FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(0); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/home-systems'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Smart Home Systems and Other</span></div>
                                        </a>
                                  </li>
      </ul>
        </div>
    </div>
      </div>
    </div>

  </div>
  <div className='Menu-Item-inline'>
    <div style={{position: 'relative'}}>
      <div onMouseEnter={()=> {menuHover(2); SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
       FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
       onClick={()=> {menuHover(0); SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
      className={menuColor ===2 ? "Item-title_inline active-Item-title_inline" : "Item-title_inline"} >
        <span>Appliances</span>
      </div>
    </div>
    <div onMouseLeave={()=> {menuHover(0); SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
      FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
      className={menuColor === 2 ? "Dropdown_categories-menu-Appliance" : "Dropdown_categories-menu-hide"}>
      <div style={{ display: 'flex', paddingLeft: '12px'}}>
    <div className='Dropdown_Navmenu'>
        <div style={{ display: 'flex'}}>
      <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={toggleFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(1); BottomThirdCategory(0);
                                         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                      >
                                        <a href='/appliances' style={{ width: '100%', height: '100%'}}>
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
                                      <span>Ranges, Stoves & Cooktops</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(4); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/freezers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Freezer</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleFirstCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(5); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/dishwashers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Dishwasher</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleFirstCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(6); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/microwaves'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Microwave</span></div>
                                        </a>
                                  </li>
      </ul>
        </div>
        <div style={{ display: 'flex', marginTop: '10px'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={toggleBottomFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(1); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                      >
                                        <a href='/laundry-appliances' style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span style={{ fontSize: '15px', fontWeight: '700',
                                      color: '#212121'}}>Major Laundry Appliances</span></div>
                                        </a>
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
                                         href='/laundry-appliance-packages'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Washer & Dryer Bundle Sales</span></div>
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
                                        <a href='/kitchen-appliances' style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span style={{ fontSize: '15px', fontWeight: '700',
                                      color: '#212121'}}>Small Kitchen Appliances</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(3); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Coffee, Tea & Expresso Makers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(2); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cookers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(5); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Bread Makers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(6); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Waffle Makers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(7); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Griddles</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(4); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Mixers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(8); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Blenders</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(9); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Juicers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(10); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Food Processors</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(11); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Toasters</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(12); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Indoor Grills</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleSecondCategory=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(13); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(0);ThirdCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Air Fryers & Deep Fryers</span></div>
                                        </a>
                                  </li>
      </ul>
        </div>
    </div>
    <div className='Dropdown_Navmenu'>
        <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={toggleBottomThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(1); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                      >
                                        <a href='/ambiance-devices' style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span style={{ fontSize: '15px', fontWeight: '700',
                                      color: '#212121'}}>Heating , Cooling , Air</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(3); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/air-conditioners'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Air Conditioners</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(4); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/air-purifiers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Air Purifiers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(5); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/humidifiers-dehumidifiers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Humidifiers & Dehumidifiers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(7); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/ambiance-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Thermostat</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(8); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/ambiance-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Evaporative Air Coolers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(9); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/fans'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Fans</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(10); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/heaters'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Heater</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomThirdCategory=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomFourthCategory(0);BottomThirdCategory(11); ThirdCategory(0); FourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/ambiance-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Fire Places</span></div>
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
                                        <a href='/indoor-appliances' style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span style={{ fontSize: '15px', fontWeight: '700',
                                      color: '#212121'}}>Indoor Appliances</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{ThirdCategory(2); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/vacuums'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Vacuum Cleaners</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{ThirdCategory(5); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/steam-cleaning-tools'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Steam Mobs & Steam Vacuums</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleThirdCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{ThirdCategory(6); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/carpet-cleaning-tools'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Carpet Sweepers</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleThirdCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{ThirdCategory(7); FirstCategory(0); BottomSecondCategory(0);SecondCategory(0); BottomFirstCategory(0);SelectedOneCategory(0); BottomThirdCategory(0); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/essential-tools'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Irons & Steam Irons</span></div>
                                        </a>
                                  </li>
      </ul>
        </div>
        <div style={{ display: 'flex', marginTop: '10px'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={toggleBottomFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(1); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                      >
                                        <a href='/outdoor-appliances' style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span style={{ fontSize: '15px', fontWeight: '700',
                                      color: '#212121'}}>Outdoor Appliances</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(3); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/outdoor-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Grills</span></div>
                                        </a>
                                  </li>
                                  <li className={toggleBottomFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{FourthCategory(0);SecondCategory(0);SelectedOneCategory(0); FirstCategory(0); BottomFirstCategory(0); BottomSecondCategory(0); BottomThirdCategory(0);BottomFourthCategory(2); ThirdCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/outdoor-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Smokers</span></div>
                                        </a>
                                  </li>

      </ul>
        </div>
    </div>
      </div>
    </div>
  </div>

  <div className='Menu-Item-inline'>
    <a href='/'>
      <div onMouseEnter={()=> menuHover(3)} onMouseLeave={()=> menuHover(0)} 
      className={menuColor ===3 ? "Item-title_inline active-Item-title_inline" : "Item-title_inline"} >
        <span>Home</span>
      </div>
    </a>
  </div>
  <div className='Menu-Item-inline'>
    <a href='/'>
      <div onMouseEnter={()=> menuHover(4)} onMouseLeave={()=> menuHover(0)} 
      className={menuColor ===4 ? "Item-title_inline active-Item-title_inline" : "Item-title_inline"} >
        <span>Clothes & Accessory</span>
      </div>
    </a>
  </div>
  <div className='Menu-Item-inline'>
    <a href='/'>
      <div onMouseEnter={()=> menuHover(5)} onMouseLeave={()=> menuHover(0)} 
      className={menuColor ===5 ? "Item-title_inline active-Item-title_inline" : "Item-title_inline"} >
        <span>Sports & Fitness</span>
      </div>
    </a>
  </div>
  <div className='Menu-Item-inline'>
    <div style={{position: 'relative'}}>
      <div onMouseEnter={()=> {menuHover(6); SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
       FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
       onClick={()=> {menuHover(0); SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0);
         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
      className={menuColor ===6 ? "Item-title_inline active-Item-title_inline" : "Item-title_inline"} >
        <span>Tools & Equipment</span>
      </div>
    </div>
    <div onMouseLeave={()=> {menuHover(0); SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(0); BottomThirdCategory(0); 
      FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}} 
      className={menuColor === 6 ? "Dropdown_categories-menu-Tools" : "Dropdown_categories-menu-hide"}>
      <div style={{ display: 'flex', paddingLeft: '12px'}}>
    <div className='Dropdown_Navmenu'>
        <div style={{ display: 'flex'}}>
      <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={toggleFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0); BottomSecondCategory(0); BottomFirstCategory(0); FirstCategory(1); BottomThirdCategory(0);
                                         FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
                                      >
                                        <a href='/power-tools' style={{ width: '100%', height: '100%'}}>
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
                                        <a href='/outdoor-tools' style={{ width: '100%', height: '100%'}}>
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
                                      <span>Trimmers & Edgers</span></div>
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
                                  <li className={toggleBottomFirstCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{SecondCategory(0);SelectedOneCategory(0);ThirdCategory(0); BottomThirdCategory(0); FirstCategory(0); BottomSecondCategory(0); BottomFirstCategory(8); FourthCategory(0); BottomFourthCategory(0); FifthCategory(0); BottomFifthCategory(0); BottomSixthCategory(0); BottomSevenCategory(0)}}
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
  )
}

export default navBackup