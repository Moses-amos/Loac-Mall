import React from 'react'

function GadgetsNav(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', background: "#fff", padding: "15px 15px 15px 15px"}}>
    <div className='Dropdown_Navmenu'>
        <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={props.toggleFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleFirstCategory(1); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                      >
                                        <span className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Computer Systems</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleFirstCategory(8); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktops'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Desktops</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleFirstCategory(9); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptops'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptops</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleFirstCategory(10); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/monitors'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Monitors</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleFirstCategory(2); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <span className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Desktop Components</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                           className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </span>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleFirstCategory(3); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <span className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Desktop Accessories</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                           className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </span>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleFirstCategory(4); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <span className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Laptop Components</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                           className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </span>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleFirstCategory(5); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <span className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Laptop Accessories</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                           className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </span>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleFirstCategory(6); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <span className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Hard Drive, SSD, Storages</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                           className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </span>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleFirstCategory(7); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <span className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Wi-Fi Networking, Cables</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </span>
                                  </li>
      </ul>
      <ul className={props.toggleFirstCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=> {props.settoggleSelectedOne(1)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cd-dvd-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Optical Disc Drives</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/processors'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Processors (CPU)</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/graphic-cards'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Graphic Cards</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/motherboards'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Motherboards</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-memory'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Desktop Memory</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/power-supplies'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Power Supplies</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/wifi-cards'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>WiFi Cards, Sticks</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cooling'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cooling Fans</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cooling'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Heatsinks</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-cabinets'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cabinets (Case)</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(13)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cables-adapters'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cables & Adapters</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/power-cables'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Power Cables</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/desktop-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Desktop Components</span></div>
                                        </a>
                                  </li>
      </ul>

      <ul className={props.toggleFirstCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cd-dvd-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>External CD-DVD Drives</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/mouse-keyboard'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Keyboards</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/mouse-keyboard'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Mouses</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/usb-speakers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>USB Speakers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/computer-pads'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Desk Pads</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 55? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(55)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Microphones</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/card-readers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Memory Card Readers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cables-adapters'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cables & Adapters</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Computer Accessories</span></div>
                                        </a>
                                  </li>
      </ul>

      <ul className={props.toggleFirstCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/chargers-batteries'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptop Chargers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/chargers-batteries'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptop Batteries</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cd-dvd-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptop CD/DVD Drives</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-memory'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptop Memory</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cooling'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cooling Fans</span></div>
                                        </a>
                                  </li>
                                  {/* <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Replacement Screen</span></div>
                                        </a>
                                  </li> */}
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/power-cables'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Power Cables</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cables-adapters'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cables & Adapters</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptop Components</span></div>
                                        </a>
                                  </li>
      </ul>

      <ul className={props.toggleFirstCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cd-dvd-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>External CD-DVD Drives</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Keyboards</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Mouse</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/computer-pads'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cooling Pads</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-accessory'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptop Sleeves, Bags</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-accessory'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Laptop Stands</span></div>
                                        </a>
                                  </li>
                                  {/* <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-peripherals'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>USB hub</span></div>
                                        </a>
                                  </li> */}
                                  {/* <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/laptop-peripherals'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Portable Power Stations</span></div>
                                        </a>
                                  </li> */}
                                  <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>USB Microphones</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/card-readers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Memory Card Readers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/computer-pads'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Desk Pads</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cables-adapters'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cables & Adapters</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/computer-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Computer Accessories</span></div>
                                        </a>
                                  </li>
      </ul>

      <ul className={props.toggleFirstCategory===6 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/hard-disk-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Internal Hard Disk Drives (HDD)</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/hard-disk-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Desktop Hard Disk Drives (HDD)</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/solid-state-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Solid State Drives (SSD)</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/solid-state-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>NVMe SSD</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/external-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>External HDD</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/external-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>External SSD</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>USB (Flash Drives)</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Memory Cards</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/storage-drives'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Storages Drives</span></div>
                                        </a>
                                  </li>
      </ul>

      <ul className={props.toggleFirstCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cables-adapters'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cables & Adapters</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/networking'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Routers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/networking'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>WiFi Adapters , Sticks</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/networking'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Mesh WiFi Systems</span></div>
                                        </a>
                                  </li>
                                  {/* <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/networking'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Ethernet Switches</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/networking'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cable Modems</span></div>
                                        </a>
                                  </li> */}
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/networking'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>WiFi Range Extenders</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
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
                                <li className={props.toggleBottomFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(1); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                         props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                      >
                                        <span className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Office Equipment</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleBottomFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(3); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                         props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/printers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Printers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(4); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                         props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/printers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Toners, Inks</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFirstCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(5); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                         props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
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
                                  <li className={props.toggleSecondCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(1); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}>
                                        <span className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Cell Phones & Tablets</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(4); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span' href='/iphones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>iPhones</span></div>
                                        </a>
                                  </li>

                                  <li className={props.toggleSecondCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(5); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span' href='/smartphones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Smartphones</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(6); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span' href='/tablets'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>iPads</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(7); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span' href='/tablets'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Tablets</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(2); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <span className='selectedlink_menu_nav_span' 
                                        href='/cellular-components'>
                                      <div style={{ paddingLeft: '5px'}}>Phone Accessories</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </span>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(3); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <span className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Tablet & iPad Accessories</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </span>
                                  </li>
                                  
                                  {/* <li className={props.toggleSecondCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(8); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span' href='/tablets'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>E Reader</span></div>
                                        </a>
                                  </li> */}
      </ul>
      <ul className={props.toggleSecondCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Chargers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Charge cables</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/cellular-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Powerbanks</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Screen Protectors</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Phone Grips, Popsockets</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Phone Cases</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Phone Mounts</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Air tags, Smart trackers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Selfie Sticks</span></div>
                                        </a>
                                  </li>
      </ul>

      <ul className={props.toggleSecondCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Chargers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Charge Cables</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/cellular-components'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Powerbanks</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Screen Protectors</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Grips, Popsockets</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Tablet Cases</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Small Keyboards</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/tablet-accessories'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Stands, Mounts</span></div>
                                        </a>
                                  </li>
      </ul>
        </div>
        <div style={{ display: 'flex', marginTop: '10px'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={props.toggleBottomSecondCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(1); props.settoggleBottomThirdCategory(0); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                      >
                                        <span className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Tv's & Home Theater</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleBottomSecondCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(2); props.settoggleBottomThirdCategory(0); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/flatscreens'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Flatscreen TV's</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomSecondCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(3); props.settoggleBottomThirdCategory(0); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' 
                                        href='/sound-bars'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Sound Bars</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomSecondCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(4); props.settoggleBottomThirdCategory(0); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/streaming-device'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Decoders</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomSecondCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(5); props.settoggleBottomThirdCategory(0); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/streaming-device'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Streaming Media Players</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomSecondCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(6); props.settoggleBottomThirdCategory(0); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/streaming-device'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>CD/DVD, Blu-Ray Players</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomSecondCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(7); props.settoggleBottomThirdCategory(0); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
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
                                  <li className={props.toggleThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(1); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}>
                                        <span className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Cameras & Other</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(2); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <span className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Camera Accessories</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </span>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(3); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/cameras'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cameras</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(4); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camcorders'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Camcorders</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(5); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/drones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Drones</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(6); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/webcams'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Webcams</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(7); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/projectors'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Projectors</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(8); props.settoggleFirstCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/binoculars'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Binoculars</span></div>
                                        </a>
                                  </li>
      </ul>
      <ul className={props.toggleThirdCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                     >
                                        <span className='selectedlink_menu_nav_span'
                                         href='/tripods-stabilizers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Tripods, Stabilizers</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-lenses'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Camera Lenses</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/flashes-lighting'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Flashes, Lighting</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' 
                                        href='/camera-gimbals'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Gimbals</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-batteries'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Camera Batteries</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-microphones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Camera Microphones</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/digital-frames'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Digital Photo Frames</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/storage-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Memory Card</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/camera-film'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Camera Films</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/setting-backgrounds'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Backgrounds</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/card-readers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Memory Card Readers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/vlogger-kits'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Vlogger Kits</span></div>
                                        </a>
                                  </li>
      </ul>
        </div>
        <div style={{ display: 'flex', marginTop: '10px'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={props.toggleBottomThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(1); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                      >
                                        <span className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Headphones & Earbuds</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleBottomThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(2); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/headphones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Headphones</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(3); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/headphones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Headsets</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(4); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/headphones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Earbuds</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(5); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/headphones'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>AirPods</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomThirdCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(6); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
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
                                  <li className={props.toggleFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(1); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}>
                                        <span className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Audio Systems</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(2); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/portable-speakers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Bluetooth Speakers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(3); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/audio-systems'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Stereo System</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFourthCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(8); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span' 
                                        href='/sound-bars'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Sound Bars</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(4); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/audio-systems'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>CD/DVD Players</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFourthCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(9); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/audio-systems'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Boom Boxes</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFourthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(6); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/audio'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Turntables</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFourthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(7); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/audio'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Audio Mixers</span></div>
                                        </a>
                                  </li>

                                  
      </ul>
        </div>
        <div style={{ display: 'flex', marginTop: '10px'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={props.toggleBottomFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(1); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                      >
                                        <a className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Game Consoles</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(2); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/playstations'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>PlayStation Consoles</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(3); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/xbox'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>XBOX Consoles</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(4); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/nintendo'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Nintendo Consoles</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(5); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/handheld-vr'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Handheld PCs, Virtual Reality</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(6); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0);
                                          props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}
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
                                  <li className={props.toggleFifthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFifthCategory(1); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}}>
                                        <span className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Wearable Technology</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleFifthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFifthCategory(2); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/watches'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Watches</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFifthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFifthCategory(3); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/fitness-trackers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Fitness Trackers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFifthCategory(4); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomSecondCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0);
                                        props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleBottomSevenCategory(0)}} >
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
                                  <li className={props.toggleBottomFifthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomFifthCategory(1); props.settoggleFifthCategory(0); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleBottomSevenCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleFifthCategory(0)}}
                                      >
                                        <span className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Personal Care & Health</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleBottomFifthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomFifthCategory(2); props.settoggleFifthCategory(0); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleBottomSevenCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/hair-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Hair Tools & Appliances</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFifthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomFifthCategory(3); props.settoggleFifthCategory(0); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleBottomSevenCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/health-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Health Devices</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomFifthCategory(4); props.settoggleFifthCategory(0); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleBottomSevenCategory(0); props.settoggleBottomSixthCategory(0); props.settoggleFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/fitness-equipment'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Gym & Fitness</span></div>
                                        </a>
                                  </li>
      </ul>
        </div>
        <div style={{ display: 'flex', marginTop: '10px'}}>
        <ul className='Electronics_dropdown-selects_menu_last'>
                                  <li className={props.toggleBottomSixthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomSixthCategory(1); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0);
                                        props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0); props.settoggleBottomSevenCategory(0)}}
                                      >
                                        <span className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Auto Electronics</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleBottomSixthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomSixthCategory(2); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0);
                                        props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0); props.settoggleBottomSevenCategory(0)}}
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
                                  <li className={props.toggleBottomSevenCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomSevenCategory(1); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0)}}
                                      >
                                        <span className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Smart Home</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleBottomSevenCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomSevenCategory(2); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0);
                                         props.settoggleBottomSecondCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0); props.settoggleBottomSixthCategory(0)}}
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
  )
}

export default GadgetsNav