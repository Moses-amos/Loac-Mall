import React, { useState } from 'react'

function CategoryAppliances(props) {

    const [toggleSecondCategory, settoggleSecondCategory] = useState(0)
    const [toggleComputerOptions, settoggleComputerOptions] = useState(0)
    
    const SecondCategory = (index) => {
        settoggleSecondCategory(index);
    }

    const computerCategory = (index) => {
        settoggleComputerOptions(index);
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
                                    <li className={toggleSecondCategory=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{SecondCategory(1); computerCategory(0)}}>
                                        <div>Major kitchen Appliance</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleSecondCategory=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{SecondCategory(2); computerCategory(0)}}>
                                        <div>Laundry Appliance</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleSecondCategory=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{SecondCategory(3); computerCategory(0)}}>
                                        <div>Small kitchen Appliance</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleSecondCategory=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{SecondCategory(4); computerCategory(0)}}>
                                        <div>Ambiance Appliance</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleSecondCategory=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{SecondCategory(5); computerCategory(0)}}>
                                        <div>Barbeque Equipment</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                    <li className={toggleSecondCategory=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{SecondCategory(6); computerCategory(0)}}>
                                        <div>Indoor Appliance</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleSecondCategory=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{SecondCategory(7); computerCategory(0)}}>
                                        <div>Hair Appliance</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleSecondCategory=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{SecondCategory(8); computerCategory(0)}}>
                                        <div>Power Tools</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleSecondCategory=== 9? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{SecondCategory(9); computerCategory(0)}}>
                                        <div>Backyard Tools</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                </ul>

                                {/* Major Kitchen */}
                                <ul className={toggleSecondCategory===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Refrigerator</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Refrigerator")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Range , Stove</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cooking Appliance")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Cooktop</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cooktop")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Wall Oven</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wall Oven")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Freezer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Freezer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Dishwasher</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dishwasher")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Microwave</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Microwave")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Kitchen Appliance Bundle</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kitchen Appliance Package")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Wash machine , Dryer */}
                                <ul className={toggleSecondCategory===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Wash Machine</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Wash Machine")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Dryer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dryer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Washer Dryer Combo</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Washer Dryer Combo")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Washer & Dryer Bundle</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Appliance Bundle")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Small Kitchen */}
                                <ul className={toggleSecondCategory===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className={toggleComputerOptions=== 1? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(1)}}>
                                        <div>Drinks Machines</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleComputerOptions=== 2? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(2)}}>
                                        <div>Bake Machines</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleComputerOptions=== 3? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(3)}}>
                                        <div>Cooker Machines</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleComputerOptions=== 4? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(4)}}>
                                        <div>Blender, Juicer Machines</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleComputerOptions=== 5? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(5)}}>
                                        <div>Snack Machines</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleComputerOptions=== 6? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(6)}}>
                                        <div>Toaster Makers</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleComputerOptions=== 7? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(7)}}>
                                        <div>Countertop Oven</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>
                                        <li className={toggleComputerOptions=== 8? "active-SelectCategory-li SelectCategory-li" : "SelectCategory-li"}
                                        onMouseOver={()=>{computerCategory(8)}}>
                                        <div>Fryer, Other</div>
                                        <div>
                                            <div style={{ fontWeight: 'bold', color: '#00BFFF',
                                             paddingRight: '5px'}}>~</div>
                                        </div></li>


                                </ul>

                                {/* Heating , Cooling , Air Quality */}
                                <ul className={toggleSecondCategory===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Air Conditioner</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Air Conditioner")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Air Purifier</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Air Purifier")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Humidifier</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Humidifier")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Dehumidifier</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dehumidifier")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Thermostat</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Thermostat")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Evaporative Air Cooler</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Evaporative Cooler")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Fan</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Electric Fan")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Heater</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Heater")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Fire Place</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Fire Place")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Barberque Appliances */}
                                <ul className={toggleSecondCategory===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Grill</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Outdoor Grill")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Smoker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Outdoor Smoker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Kitchen Torch</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kitchen Torch")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Kitchen Thermometer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Kitchen Thermometer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Indoor Appliance */}
                                <ul className={toggleSecondCategory===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Iron</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Clothing Iron")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Steamer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Steamer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Vacuum Cleaner</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Vacuum Cleaner")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Robot Vacuum</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Robot Vacuum")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Steam Mob , Vacuum</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Steam Cleaner")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Carpet Sweeper</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Carpet Cleaner")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Hair Appliance */}
                                <ul className={toggleSecondCategory===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Hair Straightner</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Straightner")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Straightener Brush</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Straightening Brush")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Curling Iron, Wand</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Curling Iron")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Hair Dryer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Dryer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li">
                                    <div>Hair Steamer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Steamer")}} className='Category-select_button'>select</div>
                                        </div></li>

                                    <li className="SelectCategory-li"
                                        >
                                        <div>Clipper</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Clipper")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Trimmer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hair Trimmer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Electric Shaver</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Electric Shaver")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Epilator</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Epilator")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
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

                                {/* Power Tool */}
                                <ul className={toggleSecondCategory===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Power Drill</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Power Drill")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Electric Chainsaw</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Electric Chainsaw")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Electric Planer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Electric Planer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Electric Sander</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Electric Sander")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Jig Saw</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Jig Saw")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Nail Gun</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Nail Gun")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                {/* Backyard , Garden */}
                                <ul className={toggleSecondCategory===9 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Leaf Blower</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Leaf Blower")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Trimmer , Edger</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Trimmer Tool")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Pressure Washer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pressure Washer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Log Splitter</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Log Splitter")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Lawn Mower</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Lawn Mower")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Medal Detector</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Medal Detector")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul>

                                <div>
                                {/* Small Appliance Category */}
                                {/* Drink Machines */}
                                <ul className={toggleComputerOptions===1 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                <li className="SelectCategory-li"
                                        >
                                        <div>Coffee Maker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Coffee Maker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Tea Maker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Tea Maker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Expresso Machine</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Expresso Machine")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Soda Maker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Soda Maker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Ice Maker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ice Maker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Water Cooler Dispenser</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Water Cooler Dispenser")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul> 

                                {/* Bake Machines */}
                                <ul className={toggleComputerOptions===2 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Bread Maker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Bread Maker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Waffle Maker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Waffle Maker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Pancake Maker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Pancake Maker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Mixer Machine</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mixer Machine")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Hand Mixer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hand Mixer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Mixer Attachment</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Mixer Attachment")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul> 

                                {/* Cooker Machines */}
                                <ul className={toggleComputerOptions===3 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Instant Pot</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Instant Pot")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Multi Cooker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Multi Cooker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Slow Cooker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Slow Cooker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Electric Griddle</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Griddle")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >                       
                                        <div>Indoor Grill</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Indoor Grill")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul> 

                                {/* Blender Machines */}
                                <ul className={toggleComputerOptions===4 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Blender</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Blender")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Hand Blender</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Hand Blender")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Juicer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Juicer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Food Processor</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Food Processor")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Food Chopper</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Food Chopper")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul> 

                                {/* Snack Makers */}
                                <ul className={toggleComputerOptions===5 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Popcorn Machine</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Popcorn Machine")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Ice Cream Machine</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ice Cream Machine")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Cotton Candy Machine</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Cotton Candy Machine")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Ice Cream Shaver</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ice Cream Shaver")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Ice Shaver</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Ice Shaver")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Fondue Maker</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Fondue Maker")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul> 

                                {/* Toast Makers */}
                                <ul className={toggleComputerOptions===6 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Slice Toaster</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Slice Toaster")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Sandwitch Toaster</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Sandwitch Toaster")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Conveyor Toaster</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Conveyor Toaster")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul> 

                                {/* Countertop Ovens */}
                                <ul className={toggleComputerOptions===7 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Toaster Oven</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Toaster Oven")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Convection Oven</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Convection Oven")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                </ul> 

                                {/* Fryers, Dehydrator, Grill */}
                                <ul className={toggleComputerOptions===8 ? "Electronics_dropdown-selects": "Electronics_dropdown-selects-hide"}>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Dehydrator</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dehydrator")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Deep Fryer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Deep Fryer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Air Fryer</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Air Fryer")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Air Fryer Oven</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Air Fryer Oven")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>
                                    <li className="SelectCategory-li"
                                        >
                                        <div>Dry Ager</div>
                                        <div>
                                            <div onClick={()=>{props.sethoverCategory(); props.setProductType("Dry Ager")}} className='Category-select_button'>select</div>
                                        </div>
                                    </li>

                                </ul> 

                                </div>

                                </div>
    </div>
  )
}

export default CategoryAppliances