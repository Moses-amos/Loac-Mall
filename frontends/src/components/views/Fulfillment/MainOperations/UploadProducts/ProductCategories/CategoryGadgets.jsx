import React, { useState } from 'react'

function CategoryGadgets(props) {

    const [toggleFirstCategory, settoggleFirstCategory] = useState(0)
    const [togglePhoneTablet, settogglePhoneTablet] = useState(0)
    const [toggleThirdCategory, settoggleThirdCategory] = useState(0)
    const [toggleTvTheater, settoggleTvTheater] = useState(0)
    const [toggleCamera, settoggleCamera] = useState(0)
    const [toggleHeadphone, settoggleHeadphone] = useState(0)
    const [toggleConsole, settoggleConsole] = useState(0)
    const [togglePersonalDevice, settogglePersonalDevice] = useState(0)
    const [toggleComputerOptions, settoggleComputerOptions] = useState(0)
    const [toggleCableCategory, settoggleCableCategory] = useState(0)


    const FirstCategory = (index) => {
        settoggleFirstCategory(index);
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
                                    <li className={toggleFirstCategory=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FirstCategory(1)} onMouseEnter={()=>{PhoneTabletCategory(); ThirdCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Computer Systems </div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFirstCategory=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FirstCategory(2)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}} >
                                        <div>Cell Phone, Tablet</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFirstCategory=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FirstCategory(3)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Tv, Home Theater</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFirstCategory=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FirstCategory(4)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Camera, Other</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFirstCategory=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FirstCategory(5)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Headphone , Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFirstCategory=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FirstCategory(6)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Audio System , Speaker</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFirstCategory=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FirstCategory(7)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();PersonalDeviceCategory()}}>
                                        <div>Game Console</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFirstCategory=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FirstCategory(8)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Watches, Wearable Tech</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFirstCategory=== 10? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FirstCategory(10)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Smart Home</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    
                                    <li className={toggleFirstCategory=== 12? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FirstCategory(12)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory()}}>
                                        <div>Personal Care , Health</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleFirstCategory=== 13? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>FirstCategory(13)} onMouseEnter={()=>{computerCategory(); ThirdCategory(); CableCategory();PhoneTabletCategory();TvTheaterCategory()
                                        ; CameraCategory(); HeadphoneCategory();ConsoleCategory();PersonalDeviceCategory()}}>
                                        <div>Auto Electronic</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Computer , office Category boxes*/}
                                <ul className={toggleFirstCategory===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleComputerOptions=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(1); ThirdCategory(); CableCategory()}}>
                                        <div>Laptop Component</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(2); ThirdCategory(); CableCategory()}}>
                                        <div>Laptop Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(3); ThirdCategory(); CableCategory()}}>
                                        <div>Desktop Pc Component</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(4); ThirdCategory(); CableCategory()}}>
                                        <div>Desktop Pc Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(5); ThirdCategory(); CableCategory()}}>
                                        <div>Hard Drive, SSD , Storage</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(6); ThirdCategory(); CableCategory()}}>
                                        <div>Printer , Scanner</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(7); ThirdCategory(); CableCategory()}}>
                                        <div>Wi-Fi Networking, Cable</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleComputerOptions=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(8); ThirdCategory(); CableCategory()}}>
                                        <div>Software</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseOver={()=>{ThirdCategory(); computerCategory()}}>
                                        <div>MacBook</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("MacBook")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseOver={()=>{ThirdCategory(); computerCategory()}}>
                                        <div>Laptop</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseOver={()=>{ThirdCategory(); computerCategory()}}>
                                    <div>Desktop Pc</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desktop Pc")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseOver={()=>{ThirdCategory(); computerCategory()}}>
                                    <div>Monitor</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Monitor")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Phone , Tablet Category */}
                                <ul className={toggleFirstCategory===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={togglePhoneTablet=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>PhoneTabletCategory(1)}>
                                        <div>Phone Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={togglePhoneTablet=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>PhoneTabletCategory(2)}>
                                        <div>Tablet/iPad Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => PhoneTabletCategory()}
                                        >
                                        <div>iPhone</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("iPhone")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => PhoneTabletCategory()}
                                        >                       
                                        <div>Smartphone</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Smartphone")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => PhoneTabletCategory()}
                                        >                       
                                        <div>Tablet</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tablet")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => PhoneTabletCategory()}
                                        >
                                        <div>iPad</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("iPad")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => PhoneTabletCategory()}
                                        >
                                        <div>E Reader</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("E Reader")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Tv , Home theater */}
                                <ul className={toggleFirstCategory===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleTvTheater=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>TvTheaterCategory(1)}>
                                        <div>Accessories</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => TvTheaterCategory()}
                                        >
                                        <div>Flatscreen, Curved Tv</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Flatscreen Tv")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => TvTheaterCategory()}
                                        >
                                        <div>Sound Bar</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Sound Bar")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => TvTheaterCategory()}
                                        >                       
                                        <div>Decoder</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Decoder")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => TvTheaterCategory()}
                                        >                       
                                        <div>Streaming Media Player</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Streaming Device")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => TvTheaterCategory()}
                                        >                       
                                        <div>Stereo System</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Stereo System")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => TvTheaterCategory()}
                                        >
                                        <div>Projector</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Projector")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => TvTheaterCategory()}
                                        >
                                        <div>Blu-Ray Player</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Blue-Ray Player")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => TvTheaterCategory()}
                                        >
                                        <div>CD/DVD Player</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("CD/DVD Player")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Camera, Drone , Accessory */}
                                <ul className={toggleFirstCategory===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleCamera=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>CameraCategory(1)}>
                                        <div>Camera Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CameraCategory()}
                                        >
                                        <div>Camera</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Camera")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CameraCategory()}
                                        >                       
                                        <div>Camcorder</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Camcorder")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CameraCategory()}
                                        >                       
                                        <div>Action Camera (GoPro)</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Action Camera")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CameraCategory()}
                                        >                       
                                        <div>Drone</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Drone")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CameraCategory()}
                                        >                       
                                        <div>Webcam</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Webcam")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CameraCategory()}
                                        >                       
                                        <div>Binocular</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Binocular")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CameraCategory()}
                                        >
                                        <div>Projector</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Projector")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CameraCategory()}
                                        >
                                        <div>Edit Software</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Photo Edit Software")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => CameraCategory()}
                                        >
                                        <div>Vlogger Kit</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Vlogger Kit")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Headphone , Earbud */}
                                <ul className={toggleFirstCategory===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleHeadphone=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>HeadphoneCategory(1)}>
                                        <div>Headphone Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => HeadphoneCategory()}
                                        >
                                        <div>Headphone</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Headphone")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => HeadphoneCategory()}
                                        >                       
                                        <div>Headset</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Headset")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => HeadphoneCategory()}
                                        >                       
                                        <div>Earbuds</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Earbuds")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => HeadphoneCategory()}
                                        >                       
                                        <div>EarPods</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("EarPods")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => HeadphoneCategory()}
                                        >                       
                                        <div>AirPods</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("AirPods")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => HeadphoneCategory()}
                                        >                       
                                        <div>AirPod Max</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("AirPod Max")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Audio , Speaker */}
                                <ul className={toggleFirstCategory===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>iPod , MP3 Player</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Audio Player")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Audio Recorder</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Audio Recorder")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Turntable</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Turntable")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>CD/DVD Player</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("CD/DVD Player")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bluetooth Speaker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bluetooth Speaker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Sound Bar</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Sound Bar")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Stereo System</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Stereo System")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Audio Mixer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Audio Mixer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Reciever, Amplifier, Preamp</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Audio Device")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Guitar Amp</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Guitar Amp")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Vinyl Record</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Vinyl Record")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Speaker Stand</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Speaker Stand")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Game Console */}
                                <ul className={toggleFirstCategory===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleConsole=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{ConsoleCategory(1);}}>
                                        <div>Game , Accessory</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >
                                        <div>PlayStation Console</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("PlayStation Console")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>XBOX Console</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("XBOX Console")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Nintendo</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Nintendo")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Steam Deck</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Steam Deck")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Handheld PC Console</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Handheld Console")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >
                                        <div>Virtual Reality Headset</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Virtual Reality")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Other Game Console</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Game Console")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Wearable Tech */}
                                <ul className={toggleFirstCategory===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >
                                        <div>Watch</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Watch")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >
                                        <div>Stop Watch</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Stop Watch")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Fitness Tracker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Fitness Tracker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Other Wearable Tech</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wearable Tech")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Smart Home */}
                                <ul className={toggleFirstCategory===10 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >
                                        <div>Smart Home Assistant</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Smart Assistant")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Smart Security System</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Smart Security System")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Smart Doorbell , lock</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Smart Door System")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Baby Monitor</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Baby Monitor")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Motion Sensor</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Motion Sensor")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Other Smart Home Tech</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Smart Security System")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                

                                {/* Health , Personal Case */}
                                <ul className={toggleFirstCategory===12 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={togglePersonalDevice=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PersonalDeviceCategory(1);}}>
                                        <div>Hair Tool</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                <li className={togglePersonalDevice=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PersonalDeviceCategory(2);}}>
                                        <div>Health Device</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                <li className={togglePersonalDevice=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PersonalDeviceCategory(3);}}>
                                        <div>Exercise Equipment</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={togglePersonalDevice=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{PersonalDeviceCategory(4);}}>
                                        <div>Fitness Accessories</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Auto ELectronics */}
                                <ul className={toggleFirstCategory===13 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li" 
                                        >
                                        <div>Dash Cam</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auto Cam")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >
                                        <div>Backup Cam</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auto Backup Cam")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                    <li className="SelectCategory-li" 
                                        >
                                        <div>CB Radio , Scanner</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auto Electronic")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >                       
                                        <div>Bluetooth MP3 Player</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auto Audio")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >                       
                                        <div>Car Amplifier</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auto Amplifier")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >                       
                                        <div>Car Speaker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auto Speaker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >                       
                                        <div>Phone Car Accessory</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auto Phone Accessory")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Remote Start System</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auto Remote Start")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" 
                                        >                       
                                        <div>GPS Navigation</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auto Navigation")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => ConsoleCategory()}
                                        >                       
                                        <div>Other Car Accessory</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auto Accessory")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <div>
                                {/* third select box */}
                                {/* Laptop Component & Accessory */}
                                <ul className={toggleComputerOptions===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Laptop Charger</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop Charger")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Battery</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop Battery")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Laptop DDR3 Ram</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop DDR3 Ram")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Laptop DDR4 Ram</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop DDR4 Ram")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Laptop DDR5 Ram</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop DDR5 Ram")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Cooling Fan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop Fan")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Disc Drive</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop Disc Drive")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Power Cable</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Clover Power Cable")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <ul className={toggleComputerOptions===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Keyboard</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Keyboard")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Mouse</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mouse")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Mouse Keyboard Combo</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mouse Keyboard Combo")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Card Reader</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Memory Card Reader")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li"
                                        >
                                        <div>External Disc Drive</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("External Disc Drive")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Cooling Pad</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cooling Pad")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Webcam</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Webcam")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>USB Microphone</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("USB Microphone")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>USB hub</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("USB Hub")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Laptop Sleeve</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop Sleeve")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Laptop Backpack</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop Backpack")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Laptop Stand</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop Stand")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Desk Pad</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desk Pad")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Desktop Component & Accessory */}
                                <ul className={toggleComputerOptions===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Optical Disc Drive</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Optical Disc Drive")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Processor (CPU)</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Processor")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Graphics Card (GPU)</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Graphics Card")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Motherboard</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Motherboard")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Desktop DDR3 Ram</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desktop DDR3 Ram")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Desktop DDR4 Ram</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desktop DDR4 Ram")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Desktop DDR5 Ram</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desktop DDR5 Ram")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>WiFi Card</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("WiFi Card")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Cabinet (Case)</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desktop Casing")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Power Supply</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Power Supply")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Cooling Fan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desktop Cooling Fan")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Heatsink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desktop Heatsink")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Power Cable</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("3 Pin Round Power Cable")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                </ul>
                                <ul className={toggleComputerOptions===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Keyboard</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Keyboard")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Mouse</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mouse")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Mouse Keyboard Combo</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mouse Keyboard Combo")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Card Reader</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Memory Card Reader")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>USB Microphone</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("USB Microphone")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>USB Speaker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("USB Speaker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Webcam</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Webcam")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Docking Station</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Docking Station")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>USB Hub</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("USB Hub")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Desk Pad</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desk Pad")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Hard Drive , SSD , Storage */}
                                <ul className={toggleComputerOptions===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className={toggleThirdCategory=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>ThirdCategory(1)} onMouseEnter={()=>{PhoneTabletCategory()}}>
                                        <div>Laptop , Desktop Pc Storage</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Playstation Drive</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Playstation Storage Drive")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Xbox Drive</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Xbox Storage Drive")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li onMouseEnter={() => {ThirdCategory()}} className="SelectCategory-li"
                                        >
                                        <div>USB (Flash Drive)</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("USB Drive")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Memory Card</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Memory Card")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>DVD Bundle</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Recordable DVD Disc")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>CD Bundle</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Recordable CD Disc")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Memory Card Holder</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Memory Card Holder")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Printer , Scanner */}
                                <ul className={toggleComputerOptions===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li onMouseEnter={() => {ThirdCategory()}} className="SelectCategory-li"
                                        >
                                        <div>Printer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Printer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Scanner</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Scanner")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Photo Printer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Photo Printer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Label Printer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Label Printer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Ink</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ink")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory()}}
                                        >
                                        <div>Toner</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toner")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Wifi , networking, cable */}
                                <ul className={toggleComputerOptions===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleCableCategory=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>CableCategory(1)}>
                                        <div>Cable , Adapter</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li onMouseEnter={() => {ThirdCategory(); CableCategory()}} className="SelectCategory-li"
                                        >
                                        <div>Router</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Router")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li onMouseEnter={() => {ThirdCategory(); CableCategory()}} className="SelectCategory-li"
                                        >
                                        <div>Wi-Fi Adapter (Wi-Fi Stick)</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("WiFi Adapter")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory(); CableCategory()}}
                                        >
                                        <div>Mesh Wi-Fi System</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mesh WiFi System")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory(); CableCategory()}}
                                        >
                                        <div>Ethernet Switch</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ethernet Switch")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory(); CableCategory()}}
                                        >
                                        <div>Cable Modem</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cable Modem")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory(); CableCategory()}}
                                        >
                                        <div>WiFi Range Extender</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("WiFi Range Extender")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li" onMouseEnter={() => {ThirdCategory(); CableCategory()}}
                                        >
                                        <div>Ethernet Extender</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ethernet Range Extender")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                            {/* Software */}
                                <ul className={toggleComputerOptions===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Operating System</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("System Software")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Computer Programs</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Computer Software")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Anti-Virus</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Anti-Virus Software")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Phone , Tablet Category boxes*/}
                                <ul className={togglePhoneTablet===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Phone charger</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Phone Charger")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Phone battery</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Phone Battery")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Charge cable</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Charge Cable")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Powerbank</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Powerbank")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Screen protector</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Screen Protector")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Phone grip</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Phone Grip")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Phone popsocket </div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Popsocket")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Phone case</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Phone Case")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Phone mount</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Phone Mount")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Air tag , Smart tracker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mobile Tracker")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Selfie stick</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Selfie Stick")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                <ul className={togglePhoneTablet===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                        <li className="SelectCategory-li">
                                    <div>Charger</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Phone Charger")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Battery</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tablet Battery")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Charge cable</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Charge Cable")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Powerbank</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Powerbank")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Screen protector</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tablet Screen Protector")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Popsocket</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Popsocket")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Tablet case , sleeve</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tablet Case Sleeve")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Small keyboard</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Small Keyboard")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Stylus</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Stylus")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Stand , mount</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tablet Stand Mount")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Tv , Home theater */}
                                <ul className={toggleTvTheater===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Tv wall mount</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tv Mount")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Projector mount</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Projector Mount")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Sound Bar mount</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Sound Bar Mount")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Tv Frame</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tv Frame")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Dish Antenna</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dish Antenna")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>HDMI Cable</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("HDMI Related")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Camera, Drone , Accessory */}
                                <ul className={toggleCamera===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Tripod , Stabilizer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tripod, Stabilizer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Camera Lense</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Camera Lense")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Flash , Lighting</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Camera Flash , Lighting")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Gimbal</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Gimbal")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Camera Battery</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Camera Battery")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Camera Microphone</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Camera Microphone")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Digital Photo Frame</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Photo Frame")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Card Reader</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Memory Card Reader")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Memory Card</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Memory Card")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Camera Film</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Camera Film")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Background</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Photo Background")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                 {/* Headphone , Earbud */} 
                                 <ul className={toggleHeadphone===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Airpod , Earbud Charger</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Charging Dock")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Audio Splitter</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Audio Splitter")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Audio Cable</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auxilary Cable")}} className='Category-select_button'>select</div>
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
                                    <div>Trimmer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Trimmer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Clipper</div>
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
                                    <div>Nose, Ear Trimmer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Nose Hair Trimmer")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Body Hair Trimmer</div>
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
                                {/* Laptop , Desktop Storage */}
                                <ul className={toggleThirdCategory===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Internal Hard Disk Drive</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Laptop HDD Drive")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Desktop Hard Disk Drive</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Desktop HDD Drive")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Solid State Drive (SSD)</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("SSD Drive")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>M.2 NVMe SSD</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("NVMe SSD")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>External Hard Disk Drive</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("External HDD Drive")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>External SSD</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("External SSD")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Cable category */}
                                <ul className={toggleCableCategory===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>LAN Cable (Ethernet)</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ethernet Cable")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>HDMI cable or other kind</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("HDMI Related")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>VGA cable or other kind</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("VGA Related")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>DVI cable or other kind</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("DVI Related")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>DisplayPort cable or other</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("DisplayPort Related")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>USB cable or other kind</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("USB Related")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Auxilary (Aux) Cable</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Auxilary Cable")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>SATA Cable</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Sata Cable")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Molex to SATA Cable</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Molex Related")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Unlisted Cable</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Unlisted Cable")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                {/* Game Console */}
                                <ul className={toggleConsole===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li">
                                    <div>Game Disc , Digital</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Game Disc")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Console Controller</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Console Controller")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Wheel , Floor Pedal</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Console Accessory")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Charging Dock</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Controller Charger")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Gear Shifter</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Console Accessory")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Media Remote</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Console Remote")}} className='Category-select_button'>select</div>
                                        </div></li>
                                        <li className="SelectCategory-li">
                                    <div>Console Camera</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Console Camera")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Controller Backbone</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Controller Accessory")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Console Bag , Case</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Console Bag")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Nintendo Screen Protector</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Nintendo Screen Protector")}} className='Category-select_button'>select</div>
                                        </div></li>
                                    <li className="SelectCategory-li">
                                    <div>Memory Card</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Memory Card")}} className='Category-select_button'>select</div>
                                        </div></li>
                                </ul>

                                </div>
                                </div>
    </div>
  )
}

export default CategoryGadgets