import React from 'react'

function ApplianceNav(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', background: "#fff", padding: "15px 15px 15px 15px"}}>
    <div className='Dropdown_Navmenu'>
        <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={props.toggleFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomFirstCategory(0); props.settoggleFirstCategory(1); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                      >
                                        <a href='/appliances' className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Major kitchen Appliance</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomFirstCategory(0); props.settoggleFirstCategory(2); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/refrigerators'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Refrigerators</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomFirstCategory(0); props.settoggleFirstCategory(3); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/cooking-appliances'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Ranges, Stoves</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomFirstCategory(0); props.settoggleFirstCategory(4); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/ovens'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Wall Ovens</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomFirstCategory(0); props.settoggleFirstCategory(5); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/cooktops'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cooktops</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomFirstCategory(0); props.settoggleFirstCategory(6); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/freezers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Freezers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomFirstCategory(0); props.settoggleFirstCategory(7); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/dishwashers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Dishwashers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomFirstCategory(0); props.settoggleFirstCategory(8); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/microwaves'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Microwaves</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFirstCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomFirstCategory(0); props.settoggleFirstCategory(9); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
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
                                  <li className={props.toggleBottomFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(1); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                      >
                                        <span style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Major Laundry Appliances</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleBottomFirstCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(2); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/wash-machines'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Wash Machines</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(3); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/dryers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Dryers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(4); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/appliance-bundles'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Washer & Dryer </span></div>
                                        </a>
                                  </li>
      </ul>
        </div>
    </div>
    <div className='Dropdown_Navmenu'>
        <div style={{ display: 'flex'}}>
      <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={props.toggleSecondCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(1); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a href='/kitchen-appliances' className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Small Kitchen Appliances</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(2); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Coffee, Tea Makers</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(3); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                      <a className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Cookers, Pots</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(4); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Bread, Waffle Makers</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(5); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Juicers, Blenders</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </a>
                                  </li>

                                  <li className={props.toggleSecondCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(7); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Mixers, Attachments</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(8); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Toasters, Conveyors</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(9); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Popcorn, Cream Machines</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(10); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Countertop Ovens</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSecondCategory=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(11); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'>
                                      <div style={{ paddingLeft: '5px'}}>Fryers, Dehydrators</div>
                                      <div style={{ marginRight: '15px'}}>
                                          <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                           className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                            className="_2JzwqO"></path></svg></div>
                                      </div>
                                        </a>
                                  </li>

                                  <li className={props.toggleSecondCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(6); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/food-scales'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Kitchen Scales</span></div>
                                        </a>
                                  </li>
                                  
                                  <li className={props.toggleSecondCategory=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(12); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/vacuum-sealers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Vacuum Sealers</span></div>
                                        </a>
                                  </li>
      </ul>

      <ul className={props.toggleSecondCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/coffe-makers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Coffee Makers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/expresso-makers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Expresso Makers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/tea-makers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Tea Makers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/soda-makers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Soda Makers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/ice-makers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Ice Makers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/water-dispensers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Water Cooler Dispensers</span></div>
                                        </a>
                                  </li>

      </ul>

      <ul className={props.toggleSecondCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/instant-pots'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Instant Pots</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/slow-cookers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Slow Cookers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/multi-cookers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Multi Cookers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/electric-griddles'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Electric Griddles</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/indoor-grills'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Indoor Grills</span></div>
                                        </a>
                                  </li>

      </ul>

      <ul className={props.toggleSecondCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/bread-makers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Bread Makers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/waffle-makers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Waffle Makers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/pancake-makers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Pancake Makers</span></div>
                                        </a>
                                  </li>

      </ul>

      <ul className={props.toggleSecondCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/blenders'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Blenders</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/juicers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Juicers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/food-processors'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Food Processors</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/food-choppers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Food Choppers</span></div>
                                        </a>
                                  </li>

      </ul>

      <ul className={props.toggleSecondCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/stand-mixers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Stand Mixers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/hand-mixers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Hand Mixers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/mixer-attachments'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Mixer Attachments</span></div>
                                        </a>
                                  </li>

      </ul>

      <ul className={props.toggleSecondCategory===8 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/slice-toasters'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Slice Toaster</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/sandwitch-toasters'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Sandwitch Toasters</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/conveyor-toasters'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Conveyor Toasters</span></div>
                                        </a>
                                  </li>
                                  

      </ul>

      <ul className={props.toggleSecondCategory===9 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/icecream-machine'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Ice Cream Machine</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/candy-machine'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Cotton Candy Machine</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/popcorn-machine'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Popcorn Machine</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/icecream-shaver'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Ice Cream Shaver</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/fondue-pots'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Fondue Maker</span></div>
                                        </a>
                                  </li>
                                  

      </ul>

      <ul className={props.toggleSecondCategory===10 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/toaster-ovens'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Toaster Ovens</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/convection-ovens'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Convection Ovens</span></div>
                                        </a>
                                  </li>
      </ul>

      <ul className={props.toggleSecondCategory===11 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                                  <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/dehydrators'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Dehydrators</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/air-fryers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Air Fryers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/fryer-ovens'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Air Fryer Ovens</span></div>
                                        </a>
                                  </li>

                                  <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/deep-fryers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Deep Fryers</span></div>
                                        </a>
                                  </li>
                                  
                                  <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/dry-ager'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Dry Ager</span></div>
                                        </a>
                                  </li>
      </ul>

        </div>
    </div>
    <div className='Dropdown_Navmenu'>
      <div style={{ display: 'flex'}}>
        <ul className='Electronics_dropdown-selects_menu'>
                                  <li className={props.toggleThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(1); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a href='/ambiance-devices' className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Ambiance Appliances</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(2); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a className='selectedlink_menu_nav_span'
                                         href='/air-conditioners'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Air Conditioners</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(3); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a className='selectedlink_menu_nav_span'
                                         href='/air-purifiers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Air Purifiers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(4); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a className='selectedlink_menu_nav_span'
                                         href='/humidifiers-dehumidifiers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Humidifiers, Dehumidifiers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(5); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a className='selectedlink_menu_nav_span'
                                         href='/ambiance-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Thermostat</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(6); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a className='selectedlink_menu_nav_span'
                                         href='/ambiance-devices'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Evaporative Air Coolers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(7); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a className='selectedlink_menu_nav_span'
                                         href='/fans'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Fans</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(8); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a className='selectedlink_menu_nav_span'
                                         href='/heaters'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Heaters</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleThirdCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleThirdCategory(9); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0);
                                       props.settoggleBottomThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
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
                                  <li className={props.toggleBottomThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(1); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                      >
                                        <span style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Outdoor Kitchen</span></div>
                                        </span>
                                  </li>
                                  <li className={props.toggleBottomThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(5); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' 
                                        href='/kitchen-thermometers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Kitchen Thermometers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(4); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/kitchen-torches'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Kitchen Torches</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(2); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/outdoor-grills'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Grills</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(3); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
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
                                  <li className={props.toggleBottomFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(1); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                      >
                                        <a href='/hair-devices' className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Hair Appliances</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(2); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/straighteners-brushes'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Straighteners, Brushes</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(3); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/curling-irons'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Curling Irons</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(4); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/hair-dryers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Hair Dryers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(5); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/clippers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Clippers</span></div>
                                        </a>
                                  </li>

                                  <li className={props.toggleBottomFourthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(6); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/hair-trimmers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Trimmers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(7); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/electric-shavers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Electric Shavers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(8); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/epilators'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Epilators</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFourthCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(9); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}
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
                                  <li className={props.toggleFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(1); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a href='/indoor-appliances' className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Indoor Appliances</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(2); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); 
                                        props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a className='selectedlink_menu_nav_span'
                                         href='/vacuums'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Vacuum Cleaners</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(3); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); 
                                        props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a className='selectedlink_menu_nav_span'
                                         href='/steam-cleaning'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Steam Mobs, Vacuums</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(4); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); 
                                        props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a className='selectedlink_menu_nav_span'
                                         href='/carpet-cleaning'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Carpet Sweepers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFourthCategory(5); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); 
                                        props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFifthCategory(0); props.settoggleBottomFifthCategory(0)}}>
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
                                  <li className={props.toggleFifthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFifthCategory(1); props.settoggleFourthCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFifthCategory(0)}}>
                                        <a href='/power-tools' className='Main_Category_Header'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Power Tools</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFifthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFifthCategory(2); props.settoggleFourthCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/electric-drills'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Drills</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFifthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFifthCategory(3); props.settoggleFourthCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/electric-chainsaws'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Chainsaws</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFifthCategory(4); props.settoggleFourthCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/electric-planers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Electric Planer</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFifthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFifthCategory(5); props.settoggleFourthCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/electric-sanders'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Electric Sander</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFifthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFifthCategory(6); props.settoggleFourthCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFifthCategory(0)}} >
                                        <a className='selectedlink_menu_nav_span'
                                         href='/jig-saws'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Jig Saws</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleFifthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleFifthCategory(7); props.settoggleFourthCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleSelectedOne(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFifthCategory(0)}} >
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
                                  <li className={props.toggleBottomFifthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomFifthCategory(1); props.settoggleFifthCategory(0); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
                                      >
                                        <a style={{ width: '100%', height: '100%'}}>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span className='Header_nav_menu'>Garden & Backyard Tools</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFifthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomFifthCategory(2); props.settoggleFifthCategory(0); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/leaf-blowers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Leaf Blowers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFifthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomFifthCategory(3); props.settoggleFifthCategory(0); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/trimmers-edgers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Trimmers, Edgers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomFifthCategory(4); props.settoggleFifthCategory(0); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
                                     >
                                         <a className='selectedlink_menu_nav_span' href='/pressure-washers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Pressure Washers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFifthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomFifthCategory(5); props.settoggleFifthCategory(0); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/log-splitters'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Log Splitters</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFifthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomFifthCategory(6); props.settoggleFifthCategory(0); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
                                     >
                                        <a className='selectedlink_menu_nav_span' href='/lawn-mowers'>
                                          <div style={{ paddingLeft: '5px'}}>        
                                      <span>Lawn Mowers</span></div>
                                        </a>
                                  </li>
                                  <li className={props.toggleBottomFifthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                      onMouseOver={()=>{props.settoggleBottomFifthCategory(7); props.settoggleFifthCategory(0); props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFirstCategory(0); props.settoggleBottomThirdCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
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
  )
}

export default ApplianceNav