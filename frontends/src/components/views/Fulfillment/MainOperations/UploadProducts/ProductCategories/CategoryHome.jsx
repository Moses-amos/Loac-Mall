import React, { useState } from 'react'

function CategoryHome(props) {

    const [toggleFurnitureCategory, settoggleFurnitureCategory] = useState(0)
    const [togglePhoneTablet, settogglePhoneTablet] = useState(0)
    const [toggleThirdCategory, settoggleThirdCategory] = useState(0)
    const [toggleTvTheater, settoggleTvTheater] = useState(0)
    const [toggleCamera, settoggleCamera] = useState(0)
    const [toggleHeadphone, settoggleHeadphone] = useState(0)
    const [toggleConsole, settoggleConsole] = useState(0)
    const [togglePersonalDevice, settogglePersonalDevice] = useState(0)
    const [toggleComputerOptions, settoggleComputerOptions] = useState(0)
    const [toggleCableCategory, settoggleCableCategory] = useState(0)

    const FurnitureCategory = (index) => {
        settoggleFurnitureCategory(index);
    }

    const PhoneTabletCategory = (index) => {
        settogglePhoneTablet(index);
    }

    const ThirdCategory = (index) => {
        settoggleThirdCategory(index);
    }

    const TvTheaterCategory = (index) => {
        settoggleTvTheater(index);
    }

    const CameraCategory = (index) => {
        settoggleCamera(index);
    }

    const HeadphoneCategory = (index) => {
        settoggleHeadphone(index);
    }

    const ConsoleCategory = (index) => {
        settoggleConsole(index);
    }

    const PersonalDeviceCategory = (index) => {
        settogglePersonalDevice(index);
    }

    const computerCategory = (index) => {
        settoggleComputerOptions(index);
    }

    const CableCategory = (index) => {
        settoggleCableCategory(index);
    }
    

  return (
    <div>
                                    <div style={{ marginBottom: '3px', display: 'flex', justifyContent: 'space-between'}}>
                                    <div>
                                    <span style={{ fontSize: '15px', fontWeight: '700', color: '#333'}}>Categories</span>
                                    </div>
                                    <div onClick={()=> props.sethoverCategory(0)}
                                     style={{ width: '50px', cursor: 'pointer', display: 'flex', justifyContent: 'center'}}>
                                        <span style={{ fontWeight: '700', color: '#333'}}>Close</span>
                                    </div>
                                </div>
                                <div style={{ display: 'flex'}}>
                                <ul className='Electronics_dropdown-selects'>
                                    <li className={toggleFurnitureCategory=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FurnitureCategory(1)} onMouseEnter={()=>{PhoneTabletCategory(); ThirdCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFurnitureCategory=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FurnitureCategory(2)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}} >
                                        <div>Home Decore</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFurnitureCategory=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FurnitureCategory(3)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Kitchen & Dinning</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFurnitureCategory=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FurnitureCategory(4)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Bathroom Placements</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFurnitureCategory=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FurnitureCategory(5)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Kitchen Placements</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFurnitureCategory=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FurnitureCategory(6)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Bedding</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        <li className={toggleFurnitureCategory=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FurnitureCategory(7)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Ornaments</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleFurnitureCategory=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FurnitureCategory(8)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Textiles</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Computer , office Category boxes*/}
                                <ul className={toggleFurnitureCategory===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleComputerOptions=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(1); ThirdCategory(); CableCategory()}}>
                                        <div>Living Room Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(2); ThirdCategory(); CableCategory()}}>
                                        <div>Kitchen, Dining</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(3); ThirdCategory(); CableCategory()}}>
                                        <div>Bedroom Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(4); ThirdCategory(); CableCategory()}}>
                                        <div>Bathroom Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(5); ThirdCategory(); CableCategory()}}>
                                        <div>Storage Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(6); ThirdCategory(); CableCategory()}}>
                                        <div>Office Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(7); ThirdCategory(); CableCategory()}}>
                                        <div>Hallway Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(8); ThirdCategory(); CableCategory()}}>
                                        <div>Bar Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleComputerOptions=== 9? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(9); ThirdCategory(); CableCategory()}}>
                                        <div>Patio Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleComputerOptions=== 10? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(10); ThirdCategory(); CableCategory()}}>
                                        <div>Folding Chairs, Tables</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleComputerOptions=== 11? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(11); ThirdCategory(); CableCategory()}}>
                                        <div>Gaming Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        <li className={toggleComputerOptions=== 12? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(12); ThirdCategory(); CableCategory()}}>
                                        <div>Nursery Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleComputerOptions=== 13? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(13); ThirdCategory(); CableCategory()}}>
                                        <div>Kids Furniture</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Phone , Tablet Category */}
                                <ul className={toggleFurnitureCategory===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={togglePhoneTablet=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(1); ThirdCategory()}}>
                                        <div>Throw Pillows & Blankets</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={togglePhoneTablet=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(2); ThirdCategory()}}>
                                        <div>Lights, Lamps</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={togglePhoneTablet=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(3); ThirdCategory()}}>
                                        <div>Wall Decore</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={togglePhoneTablet=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(4); ThirdCategory()}}>
                                        <div>Wall Art</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={togglePhoneTablet=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(5); ThirdCategory()}}>
                                        <div>Rugs, Carpets</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        <li className={togglePhoneTablet=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(6); ThirdCategory()}}>
                                        <div>Mirrors</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={togglePhoneTablet=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(7); ThirdCategory()}}>
                                        <div>Clocks</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={togglePhoneTablet=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(8); ThirdCategory()}}>
                                        <div>Frames, Albums</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        <li className={togglePhoneTablet=== 9? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(9); ThirdCategory()}}>
                                        <div>Candles, Home Fragrance</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={togglePhoneTablet=== 10? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(10); ThirdCategory()}}>
                                        <div>Artificial Plants, Flowers</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={togglePhoneTablet=== 11? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(11); ThirdCategory()}}>
                                        <div>Decorative Accessories</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={togglePhoneTablet=== 12? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PhoneTabletCategory(12); ThirdCategory()}}>
                                        <div>Flooring Tiles</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Kitchen & Dining */}
                                <ul className={toggleFurnitureCategory===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleTvTheater=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{TvTheaterCategory(1); ThirdCategory()}}>
                                        <div>Cookware</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleTvTheater=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{TvTheaterCategory(2); ThirdCategory()}}>
                                        <div>Tableware</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleTvTheater=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{TvTheaterCategory(3); ThirdCategory()}}>
                                        <div>Bakeware</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleTvTheater=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{TvTheaterCategory(4); ThirdCategory()}}>
                                        <div>Drinkware, Glassware</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleTvTheater=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{TvTheaterCategory(5); ThirdCategory()}}>
                                        <div>Serveware</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleTvTheater=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{TvTheaterCategory(6); ThirdCategory()}}>
                                        <div>Silverware, Flatware</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        <li className={toggleTvTheater=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{TvTheaterCategory(7); ThirdCategory()}}>
                                        <div>Utensils, Gadgets</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleTvTheater=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{TvTheaterCategory(8); ThirdCategory()}}>
                                        <div>Food Storages</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleTvTheater=== 9? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{TvTheaterCategory(9); ThirdCategory()}}>
                                        <div>Cutlery, Knives</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                </ul>

                                {/* Bathroom Placements */}
                                <ul className={toggleFurnitureCategory===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleCamera=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{CameraCategory(1); ThirdCategory()}}>
                                        <div>Showers</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleCamera=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{CameraCategory(2); ThirdCategory()}}>
                                        <div>Baths</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleCamera=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{CameraCategory(3); ThirdCategory()}}>
                                        <div>Bathroom Sink</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleCamera=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{CameraCategory(4); ThirdCategory()}}>
                                        <div>One Piece Toilet</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                        <li className={toggleCamera=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{CameraCategory(5); ThirdCategory()}}>
                                        <div>Two Piece Toilet</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleCamera=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{CameraCategory(6); ThirdCategory()}}>
                                        <div>Faucet</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Kitchen Placements */}
                                <ul className={toggleFurnitureCategory===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleHeadphone=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>HeadphoneCategory(1)}>
                                        <div>Kitchen Faucets</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleHeadphone=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>HeadphoneCategory(2)}>
                                        <div>Kitchen Sinks</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>                                
                                        <li className={toggleHeadphone=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>HeadphoneCategory(3)}>
                                        <div>Range Hoods</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>                                
                                        <li className={toggleHeadphone=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>HeadphoneCategory(4)}>
                                        <div>Stainless Sinks</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Bedding */}
                                <ul className={toggleFurnitureCategory===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleConsole=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ConsoleCategory(5)}>
                                        <div>Kids Bedding</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleConsole=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ConsoleCategory(1)}>
                                        <div>Blanket</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Quilt Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Quilt Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Duvet Cover Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Duvet Cover Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Comforter Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Comforter Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bed Skirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bed Skirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bed Sheet Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bed Sheet Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Bed Pillow</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bed Pillow")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Throw Pillow</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Throw Pillow")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                </ul>

                                {/* Ornaments */}
                                <ul className={toggleFurnitureCategory===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Floor Ornament</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Floor Ornament")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Table Top Ornament</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Table Top Ornament")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Wall Ornament</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Ornament")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Textiles */}
                                <ul className={toggleFurnitureCategory===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleConsole=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ConsoleCategory(2)}>
                                        <div>Bed Linen</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleConsole=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ConsoleCategory(3)}>
                                        <div>Kitchen Linen</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleConsole=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ConsoleCategory(4)}>
                                        <div>Bathroom Linen</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Curtains</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Curtains")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <div>

                                {/* third select box */}
                                {/* Living Room Furniture */}
                                <ul className={toggleComputerOptions===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleCableCategory=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>CableCategory(1)}>
                                        <div>Table</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleCableCategory=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>CableCategory(5)}>
                                        <div>Couch Set</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Wall Unit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Unit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Storage Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Floor Pillow</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Floor Pillow")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Pouf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pouf")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Accent Chair</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Accent Chair")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Recliner</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Recliner Chair")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Chaise Lounge</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Chaise Lounge")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Sofa Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Sofa Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Love Seat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Love Seat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Futon</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Futon")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Kitchen Dining Furniture */}
                                <ul className={toggleComputerOptions===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleCableCategory=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>CableCategory(2)}>
                                        <div>Cabinets</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Dining Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dining Table")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Dining Chair Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dining Chair Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Dinette Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dinette Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Counter Stool Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Counter Stool Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Dining Bench</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dining Bench")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Kitchen Island</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kitchen Island")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Buffet Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Buffet Table")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Sideboard Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Sideboard Table")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Bakers Rack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bakers Rack")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}>
                                    <div>Wine Rack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wine Rack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Kitchen Cart</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kitchen Cart")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Bar Cart</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bar Cart")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Bedroom Furniture */}
                                <ul className={toggleComputerOptions===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleCableCategory=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>CableCategory(3)}>
                                        <div>Bed</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Bedroom Suite</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bedroom Suite")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Headboard</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Headboard")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Kids Headboard</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kids Headboard")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                        <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Wardrobe</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wardrobe")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Drawer Dresser</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Drawer Dresser")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Nightstand</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Nightstand")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Jewellery Armoire</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Jewellery Armoire")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Vanity Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Vanity Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Storage Bench</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Bench")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Shoe Storage</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Shoe Storage")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Bathroom Furniture */}
                                <ul className={toggleComputerOptions===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Storage Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Floor Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Wall Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Toilet Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toilet Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Storage Rack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Rack")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Towel Rack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Towel Rack")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Bathroom Vanity</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bathroom Vanity")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Shower Bench</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Shower Bench")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CableCategory()}
                                        >
                                        <div>Bathroom Stool</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bathroom Stool")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Storage Furniture */}
                                <ul className={toggleComputerOptions===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleCableCategory=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>CableCategory(4)}>
                                        <div>Table</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bookshelf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bookshelf")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Wall Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Storage Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Filing Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Filing Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Storage Drawer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Drawer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Storage Trunk</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Trunk")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Shoe Storage</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Shoe Storage")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Drawer Dresser</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Drawer Dresser")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li"
                                        >
                                        <div>Cube Storage Organizer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cube Storage Organizer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                        <li className="SelectCategory-li">
                                    <div>Storage Ottoman</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Ottoman")}} className='Category-select_button'>select</div>
                                        </div></li>
                            

                                    <li className="SelectCategory-li"
                                        >
                                        <div>Office Desk</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Office Desk")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>


                                </ul>

                                {/* Office Furniture */}
                                <ul className={toggleComputerOptions===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Office Desk</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Office Desk")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Adjustable Desk</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Adjustable Desk")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Desk</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desk")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Breakroom Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Breakroom Table")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Breakroom Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Breakroom Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Standing Podium</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Standing Podium")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Office Chair</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Office Chair")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bookshelf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bookshelf")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Storage Drawer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Drawer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Filing Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Filing Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Cube Storage Organizer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cube Storage Organizer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Printer Stand</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Printer Stand")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Desk Organizer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desk Organizer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Storage Basket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Basket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Hallway Furniture */}
                                <ul className={toggleComputerOptions===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Hall Tree</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hall Tree")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Cube Storage Organizer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cube Storage Organizer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Console Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Console Table")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Storage Bench</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Bench")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Entryway Bench</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Entryway Bench")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Storage Ottoman</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Ottoman")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bookshelf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bookshelf")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Shoe Storage</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Shoe Storage")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Storage Basket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Basket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Coat Rack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Coat Rack")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Wall Shelve Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Shelve Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                            {/* Bar Furniture */}
                                <ul className={toggleComputerOptions===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Counter Stool Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Counter Stool Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseOver={()=>{ThirdCategory(); computerCategory()}}>
                                    <div>Table Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Table Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bar Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bar Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Corner Bar</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Corner Bar")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bar Cart</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bar Cart")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Wine Rack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wine Rack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Patio Furniture */}
                                <ul className={toggleComputerOptions===9 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Patio Chair Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Patio Chair Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Patio Bench</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Patio Bench")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Patio Dining Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Patio Dining Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Outdoor Couch Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Outdoor Couch Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Outdoor Loveseat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Outdoor Loveseat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Patio Bistro Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Patio Bistro Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className={toggleCableCategory=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>CableCategory(4)}>
                                        <div>Patio Shade</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Folding Furniture */}
                                <ul className={toggleComputerOptions===10 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Folding Chair Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Folding Chair")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Folding Table Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Folding Table Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Tray Table Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tray Table Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Folding Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Folding Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Gaming Furniture */}
                                <ul className={toggleComputerOptions===11 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Gaming Chair</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Gaming Chair")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Gaming Desk</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Gaming Desk")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Nursery Furniture */}
                                <ul className={toggleComputerOptions===12 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Baby Crib</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Crib")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Crib Mattress</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Crib Mattress")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bassinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bassinet Bedside-Sleeper")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bedside Sleeper</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bassinet Bedside-Sleeper")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Travel Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Travel Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Toddler Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Changing Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Changing Table")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li"
                                        >
                                        <div>Rocking Chair</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Nursery Chair")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Glider Chair</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Nursery Chair")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Baby Dresser</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Dresser")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* kids Furniture */}
                                <ul className={toggleComputerOptions===13 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Toddler Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bunk Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bunk Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Kids Furniture Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kids Furniture Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Kids Vanity</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kids Vanity")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Play Tent</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Play Tent")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Toy Box</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toy Furniture")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Toy Chest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toy Furniture")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Throw Pillow - Throw Blanket Category*/}
                                <ul className={togglePhoneTablet===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Throw Pillow Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Throw Pillow Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Throw Blanket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Throw Blanket")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Backrest Pillow Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Backrest Pillow Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Floor Pillow</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Accent Pillow")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Pouf</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Accent Pillow")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Throw Pillow Cases</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Throw Pillow Cases")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Lights & Lamps Category*/}
                                <ul className={togglePhoneTablet===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                        <li className="SelectCategory-li">
                                    <div>Table Lamp</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Table Lamp")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Floor Lamp</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Floor Lamp")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Reading Lamp</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Reading Lamp")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Smart Lamp</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Smart Lamp")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Decorative Lighting</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Decorative Lighting")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Lamp Shade</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Lamp Shade")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Ceiling Light</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ceiling Light")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Track Lighting</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Track Lighting")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Ceiling Fan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ceiling Fan")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Chandelier</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Chandelier")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Fandelier</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Fandelier")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Outdoor Light</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Outdoor Light")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Wall Decore Category*/}
                                <ul className={togglePhoneTablet===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Tapestry</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tapestry")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Wall Shelve Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Shelve Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Wall Hanging</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Hanging")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Wallpaper</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wallpaper")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Wall Decal</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Decore")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Wall Art Category*/}
                                <ul className={togglePhoneTablet===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Canvas Art</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Canvas Art")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Framed Art</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Framed Art")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Inspirational Art</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Inspirational Art")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Painting Art</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Painting Art")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Photographic Art</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Photographic Art")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Metal Wall Art</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Metal Wall Art")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                </ul>

                                {/* Carpets & Rugs Category*/}
                                <ul className={togglePhoneTablet===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Throw Rug</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Throw Rug")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Area Rug</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Area Rug")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Doormat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Doormat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Runner Rug</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Runner Rug")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Round Rug</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Round Rug")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li"
                                        >
                                        <div>Kids Rug</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kids Rug")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Outdoor Rug</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Outdoor Rug")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                </ul>

                                {/* Mirrors Category*/}
                                <ul className={togglePhoneTablet===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Table Mirror</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Table Mirror")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Wall Mirror</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Mirror")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Floor Mirror</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Floor Mirror")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>LED Mirror</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("LED Mirror")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Clock Category*/}
                                <ul className={togglePhoneTablet===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Wall Clock</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Clock")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Table Clock</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Table Clock")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Cuckoo Clock</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cuckoo Clock")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Digital Clock</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Digital Clock")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Accent Clock</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Digital Clock")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Album Frames Category*/}
                                <ul className={togglePhoneTablet===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Table Top Frame</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Table Top Frame")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Wall Frame</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Frame")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Gallary Frame</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Gallary Frame")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Digital Frame</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Digital Frame")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Candles & Fragrance Category*/}
                                <ul className={togglePhoneTablet===9 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Scented Candles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Scented Candles")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Flameless Candle</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Flameless Candle")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Candle Holder Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Candle Holder Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Pillar Candle Stand</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pillar Candle Stand")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Candelabra Candle Stand</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Candelabra Candle Stand")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Oil Diffuser</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Oil Diffuser")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Artificial Plants Category*/}
                                <ul className={togglePhoneTablet===10 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Artificial Plant</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Artificial Plant")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Artificial Tree</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Artificial Tree")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Fake Succulent</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Fake Succulent")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Plant Stand</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Plant Stand")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Plant Basket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Plant Basket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Planter Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Planter Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Plant Vase</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Plant Vase")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Decorative Accessories Category*/}
                                <ul className={togglePhoneTablet===11 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Globe</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Globe")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Sculpture</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Sculpture")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Decorative Tray</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Decorative Tray")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Decorative Bowl Sets</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Decorative Bowl Sets")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Decorative Lighting</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Decorative Lighting")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Room Divider</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Room Divider")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Storage Basket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Basket")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bookend Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bookend Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Flooring Category*/}
                                <ul className={togglePhoneTablet===12 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}> 
                                    <div>Marble Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Marble Tiles")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Ceramic Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ceramic Tiles")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Porcelain Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Porcelain Tiles")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Stone Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Stone Tiles")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Cement Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cement Tiles")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Granite Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Granite Tiles")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Travertine Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Travertine Tiles")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Quarry Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Quarry Tiles")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Brick Mold</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Brick Mold")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className={toggleThirdCategory=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ThirdCategory(1)}>
                                        <div>Decorative Tiles</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Cookware Category */}
                                <ul className={toggleTvTheater===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Cookware Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cookware Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Instant Pot</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Instant Pot")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Dutch Oven</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dutch Oven")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Frying Pan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cookware Pan")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Skillet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cookware Pan")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Roaster Pan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Roaster Pan")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Steel Pressure Cooker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Steel Pressure Cooker")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Tableware Category */}
                                <ul className={toggleTvTheater===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Dinner Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dinner Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Plate Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Plate Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Dessert Plate Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dessert Plate Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Bowl Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bowl Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Bakeware Category */}
                                <ul className={toggleTvTheater===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleThirdCategory=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ThirdCategory(2)}>
                                        <div>Baking Pan</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Baking Dish</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baking Dish")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Bakeware Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bakeware Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Baking Sheet Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baking Sheet Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Mixing Bowl</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mixing Bowl")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Baking Cups</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baking Cups")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Baking Utensil Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baking Utensil Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Glassware Category */}
                                <ul className={toggleTvTheater===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Tea Cup Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tea Cup Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Mug Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mug Set")}} className='Category-select_button'>select</div>
                                        </div></li>

                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Drinking Glass Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Drinking Glass Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Wine Glass Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wine Glass Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Cocktail Glass Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cocktail Glass Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Champagne Glass Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Champagne Glass Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Beer Glass Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Beer Glass Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Glass & Pitcher Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Glass & Pitcher Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Beverage Dispenser</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Beverage Dispenser")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className={toggleThirdCategory=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ThirdCategory(3)}>
                                        <div>Drinkware</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Servware Category */}
                                <ul className={toggleTvTheater===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Serveware Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Serveware Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Cake Stand</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cake Stand")}} className='Category-select_button'>select</div>
                                        </div></li>

                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Tiered Server</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tiered Server")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Beverage Dispenser</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Beverage Dispenser")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Serving Tray</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Serving Tray")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Serving Platter</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Serving Platter")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className={toggleThirdCategory=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ThirdCategory(4)}>
                                        <div>Serving Set</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>

                                </ul>

                                {/* Silverware Category */}
                                <ul className={toggleTvTheater===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Silverware Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Silverware Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Silverware Chest</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Silverware Chest")}} className='Category-select_button'>select</div>
                                        </div></li>

                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Kitchen Utensils Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kitchen Utensils Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Utensil, Gadgets Category */}
                                <ul className={toggleTvTheater===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Food Scale</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Food Scale")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Kitchen Utensils Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kitchen Utensils Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Cooking Timer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cooking Timer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Kitchen Thermometer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kitchen Thermometer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Water Filter Dispenser</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Water Filter Dispenser")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Fruit Slicer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Fruit Slicer")}} className='Category-select_button'>select</div>
                                        </div></li>

                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Measuring Spoon Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Measuring Tool")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Measuring Cup Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Measuring Tool")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Slice Tool</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Slice Tool")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Mandoline</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Slice Tool")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Food Storage Category */}
                                <ul className={toggleTvTheater===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Storage Container Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Container Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Storage Canister Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Canister Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Pantry Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pantry Cabinet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Bakers Rack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bakers Rack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Kitchen Cart</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kitchen Cart")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Canning Jar Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Canning Jar Set")}} className='Category-select_button'>select</div>
                                        </div></li>

                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Refrigerator Organizer Bin</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Refrigerator Organizer Bin")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Pot Rack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pot Rack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Dish Rack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dish Rack")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Storage Bin</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Storage Bin")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Knifes, Cutlery Category */}
                                <ul className={toggleTvTheater===9 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Knife Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Knife Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Cleaver Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cleaver Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Electric Knife</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Electric Knife")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Knife Sharpener</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Knife Sharpener")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Knife Block Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Knife Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}} >
                                    <div>Cutting Board</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cutting Board")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Showers Category */}
                                <ul className={toggleCamera===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Shower System</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Shower System")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Hand Shower</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hand Shower")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Shower Faucet Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Shower Faucet Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Shower Drain</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Shower Drain")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Shower Bars</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Shower Bars")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Shower Doors</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Shower Doors")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Volumne Handle Valve</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Volumne Handle Valve")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Baths Category */}
                                <ul className={toggleCamera===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Freestanding Tub</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Freestanding Tub")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Aclover Tub</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Aclover Tub")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Whirlpool Tub</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Whirlpool Tub")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Combination Tub</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Combination Tub")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Drop In Tub</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Drop In Tub")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Air Tub</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Air Tub")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Clawfoot Tub</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Clawfoot Tub")}} className='Category-select_button'>select</div>
                                        </div></li>

                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Walk In Tub</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Walk In Tub")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Corner Tub</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Corner Tub")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className={toggleThirdCategory=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ThirdCategory(5)}>
                                        <div>Tub Filler</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Sink Category */}
                                <ul className={toggleCamera===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Pedestal Sink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pedestal Sink")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Drop In Sink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Drop In Sink")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Undermount Sink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Undermount Sink")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Vessel Sink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Vessel Sink")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Wall Mount Sink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Mount Sink")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Utility Sink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Utility Sink")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* One Piece Toilet Category */}
                                <ul className={toggleCamera===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>One Piece Round</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("One Piece Round")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>One Piece Elongated</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("One Piece Elongated")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Wall Mount Round</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Mount Round One Piece")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Wall Mount Elongated</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Mount Elongated One Piece")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Two Piece Toilet Category */}
                                <ul className={toggleCamera===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Two Piece Round</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Two Piece Round")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Two Piece Elongated</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Two Piece Elongated")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Wall Mount Round</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Mount Round Two Piece")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}>
                                    <div>Wall Mount Elongated</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Mount Elongated Two Piece")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Faucet Category */}
                                <ul className={toggleCamera===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li">
                                    <div>Single Hole Faucet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Single Hole Faucet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Centerset Faucet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Centerset Faucet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Widespread Faucet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Widespread Faucet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Wall Mount Faucet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Mount Faucet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                 {/* Kitchen Faucet Category */} 
                                 <ul className={toggleHeadphone===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Single Handle Faucet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Single Handle Faucet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Pre-Rince Faucet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pre-Rince Faucet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Bridge Faucet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bridge Faucet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Pull Down Faucet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pull Down Faucet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Side Spray Faucet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Side Spray Faucet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Touchless Faucet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Touchless Faucet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Touch Faucet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Touch Faucet")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Kitchen Sinks Category */} 
                                <ul className={toggleHeadphone===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Undermount Sink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Undermount Sink")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Two Basin Undermount</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Two Basin Undermount")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Drop In Sink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Drop In Sink")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Two Basin Drop In</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Two Basin Drop In")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Farmhouse Sink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Farmhouse Sink")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Two Basin Farmhouse</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Two Basin Farmhouse")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Roof Hoods Category */} 
                                <ul className={toggleHeadphone===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Wall Mount Hood</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Mount Hood")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Range Hood Insert</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Range Hood Insert")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Island Range Hood</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Island Range Hood")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Under Cabinet Hood</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Under Cabinet Hood")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Stainless Steel Sink Category */} 
                                <ul className={toggleHeadphone===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Stainless Undermount</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Stainless Steel Undermount")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Stainless Drop In</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Stainless Steal Drop In")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Double Basin</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Stainless Steal Double Basin")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Copper Sink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Copper Sink")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Health , Personal Care Device */} 
                                <ul className={togglePersonalDevice===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Hair Dryer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Dryer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Hair Straightner</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Straightner")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Straightner Comb</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Straightner Comb")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Curling Iron, Wand</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Iron")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Hair Steamer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Steamer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Hair Trimmer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Trimmer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Hair Clipper</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Clipper")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Electric Shaver</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Electric Shaver")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Epilator</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Epilator")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Nose Hair Trimmer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Nose Hair Trimmer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Body , Body Hair Trimmer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Body Hair Trimmer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                <ul className={togglePersonalDevice===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Blood Pressure Monitor</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Blood Monitor")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Heart Rate Monitor</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Heart Monitor")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Hearing Aid & Amplifier</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hearing Aid")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Electric Mobility Aid</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mobility Aid")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Steam Vaporizer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Steam Vaporizer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Massager</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Massage Device")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Weight Scale</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Weight Device")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Electric Thermometer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Thermometer Device")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Nebulizer, Asthma pump</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Inhaler")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Vape</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Vape")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Other Health Device</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Health Item")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                <ul className={togglePersonalDevice===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Treadmill</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Treadmill Machine")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Stationery Bike</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Stationery Bike")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Elliptical Machine</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Elliptical Machine")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Rowing Machine</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Rowing Machine")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Other Electronic Gear</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Exercise Machine")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                <ul className={togglePersonalDevice===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Muscle Trainer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Muscle Trainer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Muscle Massager</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Muscle Massager")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                </div>
                                <div>

                                {/* Decorative Tiles */}
                                <ul className={toggleThirdCategory===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li">
                                    <div>Terracotta Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Terracotta Tiles")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Resin Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Resin Tiles")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Metal Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Metal Tiles")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Glass Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Glass Tiles")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Mosaic Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mosaic Tiles")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Cork Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cork Tiles")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Carpet Tiles</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Carpet Tiles")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Vinyl Flooring</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Vinyl Flooring")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Linoleum Flooring</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Linoleum Flooring")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Bakware Category */}
                                <ul className={toggleThirdCategory===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li">
                                    <div>Cake Pan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cake Pan")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Cupcake Pan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cupcake Pan")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Pie Plate</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pie Plate")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Pizza Pan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pizza Pan")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Loaf Pan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Loaf Pan")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Drinkware Category */}
                                <ul className={toggleThirdCategory===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                        <li className="SelectCategory-li">
                                    <div>Travel Mug</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Travel Mug")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Blender Bottle</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Blender Bottle")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Eletric Blender Bottle</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Eletric Blender Bottle")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Kettle Bottle</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kettle Bottle")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Servware Category */}
                                <ul className={toggleThirdCategory===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                        <li className="SelectCategory-li">
                                    <div>Glass & Pitcher Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Glass & Pitcher Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Casserole Dish Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Casserole Dish Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Butter Dish Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Butter Dish Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Gravy Boat Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Gravy Boat Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Serving Bowl Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Serving Bowl Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Utensil Caddy Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Utensil Caddy Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Sugar & Creamer Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Sugar & Creamer Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Salt & Pepper Shakers</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Salt & Pepper Shakers")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Tub Fillers Category */}
                                <ul className={toggleThirdCategory===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                        <li className="SelectCategory-li">
                                    <div>Roman Tub Faucets</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Roman Tub Faucets")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Freestanding Tub Filler</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Freestanding Tub Filler")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Wall Mount Filler</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Mount Filler")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Mount Clawfoot Filler</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mount Clawfoot Filler")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Floor Clawfoot Filler</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Floor Clawfoot Filler")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Tables Category */}
                                <ul className={toggleCableCategory===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Tv Stand Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tv Stand Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Coffee Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Coffee Table")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>End, Side Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("End, Side Table")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Console Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Console Table")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Ottoman Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ottoman Table")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                </ul>

                                {/* Sofa Category */}
                                <ul className={toggleCableCategory===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li">
                                    <div>2 Piece Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("2 Piece Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>3 Piece Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("3 Piece Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>4 Piece Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("4 Piece Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>5 Piece Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("5 Piece Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>6 Piece Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("6 Piece Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Sectional Sofa</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Sectional Sofa")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Cabintes Category */}
                                <ul className={toggleCableCategory===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Wall Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Pantry Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pantry Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bar Cabinet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bar Cabinet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Table Category */}
                                <ul className={toggleCableCategory===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li">
                                    <div>End, Side Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("End, Side Table")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Nightstand</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Nightstand")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Buffet Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Buffet Table")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Sideboard Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Sideboard Table")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Console Table</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Console Table")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Patio Shade Category */}
                                <ul className={toggleCableCategory===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li">
                                    <div>Gazebo</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Gazebo")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Pergolas</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pergola")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Outdoor Umbrella</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Outdoor Umbrella")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Portable Shed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Portable Shed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Patio Awning</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Patio Awning")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Beds Category */}
                                <ul className={toggleCableCategory===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Base Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Base Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Mattress</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mattress")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bed Frame</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bed Frame")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bedroom Suite</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bedroom Suite")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bunk Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bunk Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Loft Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Loft Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Kids Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kids Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Toddler Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toddler Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Folding Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Folding Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Adjustable Bed</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Adjustable Bed")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Blankets */}
                                <ul className={toggleConsole===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Bed Blanket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bed Blanket")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Weighted Blanket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Weighted Blanket")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Electric Blanket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Electric Blanket")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Throw Blanket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Throw Blanket")}} className='Category-select_button'>select</div>
                                        </div></li>

                                </ul>

                                {/* Bed Linen */}
                                <ul className={toggleConsole===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Bed Sheet Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bed Sheet Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Bed Skirt</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bed Skirt")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Bed Spread</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bedspread Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Duvet Cover Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Duvet Cover Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                        <li className="SelectCategory-li">
                                    <div>Pillow Case Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pillow Case Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Throw Pillow Cases</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Throw Pillow Cases")}} className='Category-select_button'>select</div>
                                        </div></li>

                                </ul>

                                {/* Kitchen Linen */}
                                <ul className={toggleConsole===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Tablecloth Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tablecloth Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Table Runner Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Table Runner Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Table Skirt Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Table Skirt Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Kitchen Apron Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kitchen Apron Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>Potholder Mittens Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kitchen Textile Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                        <li className="SelectCategory-li">
                                    <div>Dishcloth Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dishcloth Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Placemat Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Placemat Set")}} className='Category-select_button'>select</div>
                                        </div></li>

                                </ul>

                                {/* Bathroom Linen */}
                                <ul className={toggleConsole===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bath Towel Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bath Towel Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                        <li className="SelectCategory-li">
                                    <div>Face Towel Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Face Towel Set")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Bathroom Rug</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bathroom Rug")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Shower Curtain</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Shower Curtain")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Seat Cover</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Seat Cover")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Kids Bedding */}
                                <ul className={toggleConsole===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li">
                                    <div>Kids Blanket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kids Blanket")}} className='Category-select_button'>select</div>
                                        </div></li>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Kids Quilt Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kids Quilt Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Kids Duvet Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kids Duvet Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Kids Comforter Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kids Comforter Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Kids Sheet Set</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kids Sheet Set")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                </div>
                                </div>
    </div>
  )
}

export default CategoryHome