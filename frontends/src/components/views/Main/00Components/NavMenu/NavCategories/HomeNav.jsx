import React from 'react'

function HomeNav(props) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', background: "#fff", padding: "15px 15px 15px 15px"}}>
    <div className='Dropdown_Navmenu'>
    <div style={{ display: 'flex'}}>
    <ul className='Electronics_dropdown-selects_menu'>
                              <li className={props.toggleFirstCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(1); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
                                  >
                                    <a className='Main_Category_Header'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span className='Header_nav_menu'>Furniture</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFirstCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(2); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleFirstCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(3); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleFirstCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(4); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleFirstCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(5); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleFirstCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(6); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleFirstCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(7); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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


                              <li className={props.toggleFirstCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(8); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Hallway Furniture</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                       className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleFirstCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(9); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleFirstCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(10); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleFirstCategory=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(11); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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

                              <li className={props.toggleFirstCategory=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(12); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleFirstCategory=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(13); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleFirstCategory=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(14); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleFirstCategory=== 15? "SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(15); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px', color: '#fff'}}>Boo boo</div>
                                    </a>
                              </li>


  </ul>

  <ul className={props.toggleFirstCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/entertainment-centers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Unit</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/tv-stands'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Tv Stands</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/coffee-tables'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Coffee Tables</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/end-tables'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>End, Side Tables</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/console-tables'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Console Tables</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/ottomans'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Ottomans</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/floor-pillows'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Poufs, Floor Pillows</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/chairs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Chairs, Recliners</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/lounges'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Chaise Lounges</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/couchs-couches'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Couch Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/sectional-couchs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Sectional Couch</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/love-seats'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Love Seats</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(13)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/couch-beds'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Couch Beds</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(14)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/futons'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Futons</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFirstCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/dining-tables'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Dining Tables</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/dining-chairs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Dining Chairs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(14)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/dining-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Dinette Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/counter-stools'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Counter Stools</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/dining-benches'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Dining Benches</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/kitchen-islands'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kitchen Islands</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/kitchen-carts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kitchen Carts</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/sideboards-buffets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Sideboards, Buffets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/pantry-cabinets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Pantry Cabinets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bakers-racks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bakers Racks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/kitchen-cabinets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Cabinets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bar-cabinets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bar, Wine Cabinets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bar-carts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bar Carts</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(13)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wine-racks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wine Racks</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFirstCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(14)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bedroom-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bedroom Suites</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bed-frames'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Base Set</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/mattresses'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Mattresses</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/headboards'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Headboards</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/beds'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bed Frames</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bunk-beds'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bunk, Loft Beds</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/folding-beds'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Folding Beds</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/dressers-chests'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Dressers, Chest</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/nightstands'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Nightstands</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/jewellery-armoires'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Jewellery Armoires</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/vanity-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Vanity Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bedroom-benches'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bedroom Benches</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(13)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wardrobes'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wardrobes</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFirstCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bathroom-seating'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Benches, Stools</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bathroom-vanity'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bathroom Vanity</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/storage-cabinets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Cabinets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-cabinets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Cabinets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/toilet-etageres'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Toilet Cabinets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/towel-racks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Towel Racks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/storage-racks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Racks</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFirstCategory===6 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/tv-stands'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Tv Stands</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bookshelves'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bookshelves</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/storage-cabinets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Cabinets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/filing-cabinets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Filing Cabinets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/storage-drawers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Drawers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/storage-trunks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Trunks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/dressers-chests'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Dressers, Chest</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/cube-storages'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cube Storage Organizer</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/end-tables'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>End, Side Tables</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/storage-ottomans'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Ottomans</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/console-tables'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Console Tables</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/desks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Desk</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(13)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/sideboards-buffets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Sideboards, Buffets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(14)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/nightstands'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Nightstands</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFirstCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/desks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Desks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/office-chairs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Office Chairs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bookshelves'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bookshelves</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/filing-cabinets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Filing Cabinets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/adjustable-desks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Adjustable Desks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/cube-storages'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cube Storage Organizers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/printer-stands'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Printer Stands</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/drawers-carts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Drawers, carts</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/breakroom-tables'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Breakroom Tables</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/standing-podiums'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Standing Podiums</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/desk-organizers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Desk Organizers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/storage-baskets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Baskets</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFirstCategory===8 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/console-tables'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Console Tables</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/storage-benches'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Benches</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/entryway-benches'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Entryway Benches</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/storage-ottomans'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Ottomans</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/hall-tree'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Hall Tree</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bookshelves'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bookshelves</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/cube-storages'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cube Storage Organizers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/shoe-storages'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Shoe Storages</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-shelves'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Shelving</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/coat-racks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Coat Racks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/storage-baskets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Baskets</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFirstCategory===9 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/counter-stools'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Counter Stools</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bar-tables'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Table Set</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bar-cabinets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bar Cabinets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/corner-bars'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Corner Bars</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bar-carts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bar Carts</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wine-racks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wine Racks</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFirstCategory===10 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/outdoor-dining'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Patio Dining Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/patio-chairs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Patio Chairs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/patio-benches'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Patio Benches</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/outdoor-lounges'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Outdoor Lounges</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/outdoor-seating'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Outdoor Loveseats</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bistro-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bistro Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/outdoor-shades'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Patio Shades</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFirstCategory===11 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/folding-chairs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Chairs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/folding-trays'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Tray Tables</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/folding-beds'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Folding Beds</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/folding-tables'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Folding Tables</span></div>
                                    </a>
                              </li>              
  </ul>

  <ul className={props.toggleFirstCategory===12 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/gaming-chairs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Gaming Chairs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/gaming-desks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Gaming Desks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/desk-furniture'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Desk</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFirstCategory===13 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/baby-cribs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Baby Cribs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/crib-mattresses'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Crib Mattresses</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bassinets-sleepers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bassinets, Bedside Sleepers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/changing-tables'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Changing Tables</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/gliders-seating'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Gliders, Rocking Chairs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/travel-beds'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Baby Travel Beds</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/baby-dressers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Baby Dressers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/toddler-beds'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Toddler Beds</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFirstCategory===14 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/kids-beds'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kids Beds</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bunk-beds'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bunk Beds</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/kids-chairs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kids Chairs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/kids-furniture'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Tables & Chairs Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/kids-headboards'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kids Headboards</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/play-tents'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Play Tents</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/toy-boxes'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Toy Boxes, Chests</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
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
                              <li className={props.toggleSecondCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(1); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}>
                                    <a className='Main_Category_Header'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span className='Header_nav_menu'>Home Decore</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSecondCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(2); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Throw Pillows & Blankets</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleSecondCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(3); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Lights & Lamps</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleSecondCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(4); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Wall Decore</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleSecondCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(5); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Wall Art</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleSecondCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(6); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Rugs, Carpets</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleSecondCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(7); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Mirrors</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>

                              <li className={props.toggleSecondCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(8); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Clocks</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleSecondCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(9); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Frames, Albums</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleSecondCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(10); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Candles, Home Fragrance</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleSecondCategory=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(11); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Artificial Plants, Flowers</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleSecondCategory=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(12); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleSecondCategory=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(13); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleSecondCategory=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(14); props.settoggleFirstCategory(0); props.settoggleThirdCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/vinyl-flooring'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Vinyl Flooring</span></div>
                                    </a>
                              </li>

  </ul>
  <ul className={props.toggleSecondCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/throw-pillows'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Throw Pillows</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/throw-blankets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Throw Blankets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/backrest-pillows'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Backrest Pillows</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/floor-pillows'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Floor Pillows, Poufs</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleSecondCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/table-lamps'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Table Lamps</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/floor-lamps'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Floor Lamps</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/desk-lamps'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Desks, Reading Lamps</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/decorative-lighting'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Decorative Lighting</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/lamp-shades'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Lamp Shades</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/lamp-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Lamp Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/ceiling-lights'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Ceiling Lights</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/ceiling-fans'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Ceiling Fans</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/chandeliers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Chandeliers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/fandeliers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Fandeliers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/track-lights'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Track Lights</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/outdoor-lights'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Outdoor Lights</span></div>
                                    </a>
                              </li>

  </ul>

  <ul className={props.toggleSecondCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/tapestries'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Tapestries</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-shelves'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Shelving</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/wall-hangings'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Hangings</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/decals-wallpaper'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Decals, Wallpaper</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleSecondCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/canvas-art'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Canvas Art</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/framed-art'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Framed Wall Art</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/inspirational-arts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Inspirational Arts</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/paintings'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Paintings</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/photography'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Photography</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/metal-art'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Metal Wall Art</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleSecondCategory===6 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/throw-rugs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Throw Rugs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/area-rugs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Area Rugs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/door-mats'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Doormats</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/runner-rugs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Runner Rugs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/round-rugs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Round Rugs</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/kids-rugs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kids Rugs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/outdoor-rugs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Outdoor Rugs</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleSecondCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/round-mirrors'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Table Mirrors</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/floor-mirrors'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Floor Mirrors</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-mirrors'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Mirrors</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/led-mirrors'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>LED Mirrors</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleSecondCategory===8 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-clocks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Clocks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/table-clocks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Table Top Clocks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/cuckoo-clocks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cuckoo Clocks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/digital-clocks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Digital Clocks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/alarm-clocks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Accent Clocks</span></div>
                                    </a>
                              </li>

  </ul>

  <ul className={props.toggleSecondCategory===9 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/table-frames'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Table Top Frames</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-frames'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Frames</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/gallary-frames'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Gallary Frames</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/digital-frames'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Digital Frames</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleSecondCategory===10 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/candles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Scented Candles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/frameless-candles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Frameless Candles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/candle-holders'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Candle Holders</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/oil-diffusers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Oil Diffusers</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleSecondCategory===11 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/artificial-plants'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Artificial Plants</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/artificial-trees'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Artificial Trees</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/fake-succulents'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Fake Succulents</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/plant-stands'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Plant Stands, Baskets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/planters'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Planter Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/vases'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Vases</span></div>
                                    </a>
                              </li>

  </ul>

  <ul className={props.toggleSecondCategory===12 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/globes'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Globes</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/sculptures'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Sculptures</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/decorative-trays'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Decorative Trays</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/decorative-bowls'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Decorative Bowls Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/decorative-lighting'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Decorative Lighting</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/room-dividers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Room Dividers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/storage-baskets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Baskets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/bookends'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bookends</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/decorative-items'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Decorative Accessories</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleSecondCategory===13 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/flooring'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Marble Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/flooring'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Ceramic Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/flooring'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Porcelain Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/flooring'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Stone Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cement Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Granite Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Travertine Tiles</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Quarry Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Metal Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Resin Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(13)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Glass Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(14)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Mosaic Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 15? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(15)}}
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
                              <li className={props.toggleThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleThirdCategory(1); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}}>
                                    <a className='Main_Category_Header'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span className='Header_nav_menu'>Kitchen & Dining</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleThirdCategory(2); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Cookware</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleThirdCategory(3); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Tableware</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleThirdCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleThirdCategory(4); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Bakeware</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleThirdCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleThirdCategory(5); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Drinkware, Glassware</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleThirdCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleThirdCategory(6); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Serveware</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleThirdCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleThirdCategory(7); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Silverware, Flatware</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleThirdCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleThirdCategory(8); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Utensils, Gadgets</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleThirdCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleThirdCategory(9); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Food Storages</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleThirdCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleThirdCategory(10); props.settoggleFirstCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFourthCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleFifthCategory(0)}} >
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

  <ul className={props.toggleThirdCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/cookware-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cookware Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/dutch-ovens'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Dutch Ovens</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/pans-skillets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Frying Pans, Skillets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/roasters'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Roaster Pans</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/pots'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cooking Pots</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/pressure-cookers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Steel Cookers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/instant-pots'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Instant Pots</span></div>
                                    </a>
                              </li>
                              
  </ul>

  <ul className={props.toggleThirdCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/dinner-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Dinner Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/plates'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Plate Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/dessert-plates'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Dessert Plates</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/bowls'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bowl Sets</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleThirdCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/baking-dishes'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Baking Dishes</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/baking-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bakeware Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/baking-sheets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Baking Sheets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/cake-pans'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cake Pans</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/cupcake-pans'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Muffins, Cupcake Pans</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/pie-pans'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Pie, Tart Pans</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/pizza-pans'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Pizza Pans</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/loaf-pans'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bread & Loaf Pans</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/mixing-bowls'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Mixing Bowls</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/baking-cups'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Baking Cups</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/baking-utensils'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Baking Utensils</span></div>
                                    </a>
                              </li>

  </ul>

  <ul className={props.toggleThirdCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/drinking-glasses'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Drinking Glasses</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/coffee-mugs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Mug Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/tea-cups'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Tea Cup Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/wine-glasses'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wine Glasses</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/cocktail-glasses'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cocktail Glasses</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/champagne-glasses'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Champagne Glasses</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/beer-glasses'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Beer Glasses</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/pitchers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Glasses & Pitchers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/beverage-dispenser'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Beverage Dispenser</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/travel-mugs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Travel Mugs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/water-bottles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kettle Bottles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/blender-bottles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Blender Bottles</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleThirdCategory===6 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/serveware-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Serveware Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/cake-stands'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cake Stands</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/tiered-servers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Tiered Servers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/beverage-dispenser'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Beverage Dispenser</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/serving-trays'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Serving Trays</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/serving-platters'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Serving Platters</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/pitchers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Glasses & Pitchers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/casserole-dishes'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Casserole Dishes</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/butter-dishes'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Butter Dish Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/gravy-boats'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Gravy Boat Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/serving-bowls'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Serving Bowl Sets</span></div>
                                    </a>
                              </li>


                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/utensil-caddies'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Utensil Caddies</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(13)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/serveware'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Sugar, Creamer Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(14)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/shakers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Salt & Pepper Shakers</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleThirdCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/silverware-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Silverware Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/silverware-chest'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Silverware Chest</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/kitchen-utensils'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kitchen Utensils Sets</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleThirdCategory===8 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/food-scales'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Food Scales</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/kitchen-utensils'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kitchen Utensils Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/cooking-timers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cooking Timers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/kitchen-thermometers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kitchen Thermometers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/water-dispenser'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Water Filter Dispenser</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/slice-tools'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Fruit Slicers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/measuring-utensils'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Measuring Spoons, Cups</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/mandolines-slicers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Mandolines, Slicers</span></div>
                                    </a>
                              </li>


  </ul>

  <ul className={props.toggleThirdCategory===9 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/storage-canisters'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Canisters</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/storage-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Storage Container Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/pantry-cabinets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Pantry Cabinets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/bakers-racks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bakers Racks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/kitchen-carts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kitchen Carts</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/canning-jars'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Canning Jar Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/refrigerator-storage'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Refrigerator Organizer Bins</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/pot-racks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Pot Racks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/dish-racks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Dish Racks</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleThirdCategory===10 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/knife-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Knife Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/block-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Knife Block Sets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/cleavers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cleavers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/electric-knifes'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Electric Knifes</span></div>
                                    </a>
                              </li>
                              
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/knife-sharpeners'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Knife Sharpeners</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
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
                              <li className={props.toggleBottomThirdCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(1); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0)}}
                                  >
                                    <a className='Main_Category_Header'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span className='Header_nav_menu'>Ornaments & Textiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleBottomThirdCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(2); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/ornaments'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Ornaments</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleBottomThirdCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleBottomThirdCategory(3); props.settoggleThirdCategory(0); props.settoggleFourthCategory(0); props.settoggleFifthCategory(0)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/textiles'>
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
                              <li className={props.toggleFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFourthCategory(1); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleFifthCategory(0)}}>
                                    <a className='Main_Category_Header'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span className='Header_nav_menu'>Bathroom Placements</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                 onMouseOver={()=>{props.settoggleFourthCategory(2); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleFifthCategory(0)}}>
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Showers</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFourthCategory(3); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Baths</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFourthCategory(4); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Bathroom Sinks</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFourthCategory(5); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>One Piece Toilets</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleFourthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFourthCategory(6); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleFifthCategory(0)}} >
                                    <a className='selectedlink_menu_nav_span'>
                                  <div style={{ paddingLeft: '5px'}}>Two Piece Toilets</div>
                                  <div style={{ marginRight: '15px'}}>
                                      <div className='Arrow_right_flip'><svg width="7.7" height="9" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
                                       className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
                                        className="_2JzwqO"></path></svg></div>
                                  </div>
                                    </a>
                              </li>
                              <li className={props.toggleFourthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFourthCategory(7); props.settoggleSelectedOne(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleFifthCategory(0)}} >
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

  <ul className={props.toggleFourthCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/shower-systems'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Shower Systems</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/hand-showers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Hand Showers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/shower-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Shower Faucets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/shower-drains'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Shower Drains</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/shower-bars'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Shower Bars</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/shower-doors'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Shower Doors</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/volumne-controls'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Volumne Handle Valve</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFourthCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/freestanding-tubs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Freestanding Tubs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/aclover-tubs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Aclover Tubs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/whirlpool-tubs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Whirlpool Tubs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/combination-tubs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Combination Tubs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/drop-tubs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Drop In Tubs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/air-tubs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Air Tubs</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/clawfoot-tubs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Clawfoot Tubs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/walk-in-tubs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Walk In Tubs</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/corner-tubs'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Corner Tubs</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/roman-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Roman Tub Faucets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/freestanding-fillers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Freestanding Tub Fillers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/wall-fillers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Mounted Fillers</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(13)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/mounted-fillers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Mounted Clawfoot Fillers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(14)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/standing-clawfoot'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Floor Clawfoot Fillers</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFourthCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/pedestal-sinks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Pedestal Sinks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/drop-ins'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Drop In Sinks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/unermount-sinks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Undermount Sinks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/vessel-sinks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Vessel Sinks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/wall-sinks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Mounted Sinks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/utility-sinks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Utility Sinks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/single-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Single Hole Faucets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/centerset-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Centerset Faucets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/widespread-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Widespread Faucets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/mounted-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Mounted Faucets</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleFourthCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/round-onepiece-toilets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>One Piece Round Toilet</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/elongated-onepiece-toilets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>One Piece Elongated Toilet</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/round-mounted-onepiece'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Mounted Round</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/elongated-mounted-onepiece'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Mounted Elongated</span></div>
                                    </a>
                              </li>

  </ul>

  <ul className={props.toggleFourthCategory===6 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/round-twopiece-toilets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Two Piece Round Toilet</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/elongated-twopiece-toilets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Two Piece Elongated Toilet</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/round-mounted-twopiece'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Mounted Round</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/elongated-mounted-twopiece'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Mounted Elongated</span></div>
                                    </a>
                              </li>

  </ul>

  <ul className={props.toggleFourthCategory===7 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/flooring'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Porcelain Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(3)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Granite Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/flooring'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Marble Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/flooring'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Ceramic Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/floor-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cement Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/flooring'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Stone Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(8)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Terracotta Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(9)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Resin Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(10)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Glass Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(11)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Mosaic Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(12)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/wall-tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Metal Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(13)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Cork Tiles</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/tiles'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Linoleum Flooring</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(14)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' href='/vinyl-flooring'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Vinyl Floorin</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleBottomFourthCategory===2 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/single-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Single Handle Faucets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/rince-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Pre-Rince Faucets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/bridge-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bridge Faucets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/pull-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Pull Down Faucets</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/spray-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Side Spray Faucets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/electric-faucets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Touch, Touchless Faucets</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleBottomFourthCategory===3 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/kitchen-undermounts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Undermount Sinks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/double-undermounts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Two Basin Undermounts</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/drop-sinks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Drop In Sinks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/double-sinks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Two Basin Drop In</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleSelectedOne=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(6)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/farmhouse-sinks'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Farmhouse Sinks</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(7)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/double-farmhouse'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Two Basin Farmhouse</span></div>
                                    </a>
                              </li>
  </ul>

  <ul className={props.toggleBottomFourthCategory===4 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/wall-hoods'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Wall Mounted Hoods</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/hood-inserts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Range Hood Inserts</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/island-hoods'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Island Range Hoods</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/cabinet-hoods'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Under Cabinet Hoods</span></div>
                                    </a>
                              </li>

  </ul>

  <ul className={props.toggleBottomFourthCategory===5 ? "Electronics_dropdown-selects_menu_hover": "Electronics_dropdown-selects-hide"}>
                              <li className={props.toggleSelectedOne=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(1)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/stainless-Undermounts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Stainless Steel Undermounts</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(2)}}
                                 >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/stainless-drops'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Stainless Steal Drop In</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(4)}}
                                 >
                                    <a className='selectedlink_menu_nav_span' 
                                    href='/double-basin'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Double Basin</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleSelectedOne=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleSelectedOne(5)}}
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
                              <li className={props.toggleBottomFourthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(1); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
                                  >
                                    <a className='Main_Category_Header'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span className='Header_nav_menu'>Kitchen Placements</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleBottomFourthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(2); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleBottomFourthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(3); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleBottomFourthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(4); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleBottomFourthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(5); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleBottomFourthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                   onMouseOver={()=>{props.settoggleFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(6); props.settoggleThirdCategory(0); props.settoggleFifthCategory(0)}}
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
                              <li className={props.toggleFifthCategory=== 1? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(1); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0)}}>
                                    <a className='Main_Category_Header'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span className='Header_nav_menu'>Bedding</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFifthCategory=== 2? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(2); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/bed-blankets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bed Blankets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFifthCategory=== 3? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(3); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/bed-pillows'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bed Pillows</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFifthCategory=== 4? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(4); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/throw-blankets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Throw Blankets</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleFifthCategory=== 5? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(5); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/throw-pillows'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Throw Pillows</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFifthCategory=== 13? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(13); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span' href='/weighted-blankets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Weighted Blankets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFifthCategory=== 6? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(6); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/duvet-covers'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Duvet Covers</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFifthCategory=== 7? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(7); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/comforter-sets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Comforters</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleFifthCategory=== 8? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(8); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span' href='/quilts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Quilts</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFifthCategory=== 14? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(14); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span' href='/bed-skirts'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Bed Skirts</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFifthCategory=== 9? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(9); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/kids-blankets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kids Blankets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFifthCategory=== 10? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(10); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/kids-duvet'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kids Duvets</span></div>
                                    </a>
                              </li>

                              <li className={props.toggleFifthCategory=== 11? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(11); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span'
                                     href='/kids-sheets'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kids Sheets</span></div>
                                    </a>
                              </li>
                              <li className={props.toggleFifthCategory=== 12? "active-SelectCategory_li-menu SelectCategory_li-menu" : "SelectCategory_li-menu"}
                                  onMouseOver={()=>{props.settoggleFifthCategory(12); props.settoggleFourthCategory(0); props.settoggleThirdCategory(0); props.settoggleFirstCategory(0); props.settoggleBottomFourthCategory(0); props.settoggleSecondCategory(0); props.settoggleSelectedOne(0)}} >
                                    <a className='selectedlink_menu_nav_span' href='/kids-comforters'>
                                      <div style={{ paddingLeft: '5px'}}>        
                                  <span>Kid Comforters</span></div>
                                    </a>
                              </li>
  </ul>
    </div>
</div>
    </div>
  )
}

export default HomeNav