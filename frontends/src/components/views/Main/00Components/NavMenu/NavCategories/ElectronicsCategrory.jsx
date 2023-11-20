import React from 'react'

function ElectronicsCategrory(props) {
  return (
    <>
    {/* Computers Category */}
        <div className={ props.toggleElectronics === 1 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
          <div className='Top_categories_Select'><a href='/laptops'>
            <div className='Top_categories_Select_link'>Laptops</div></a></div>
          <div className='Top_categories_Select'><a href='/desktops'>
            <div className='Top_categories_Select_link'>Desktops</div></a></div>
          <div className='Top_categories_Select'><a href='/monitors'>
            <div className='Top_categories_Select_link'>Monitors</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(1)}}><a>
            <div className='Top_categories_Select_link'>Computer Components</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(2)}}><a>
            <div className='Top_categories_Select_link'>Computer Accessories</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(3)}}><a>
            <div className='Top_categories_Select_link'>Laptop Components</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(4)}}><a>
            <div className='Top_categories_Select_link'>Laptop Accessories</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(5)}}><a>
            <div className='Top_categories_Select_link'>Hard Drives, SSD & Storage</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(6)}}><a>
            <div className='Top_categories_Select_link'>Software</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(7)}}><a>
            <div className='Top_categories_Select_link'>Wi-Fi & Networking</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              ComputersCategory(8)}}><a>
            <div className='Top_categories_Select_link'>Printers, Scanners</div></a></div>
        </div>
        </div>

        {/* Cell Phones & Tablet Category */}
        <div className={ props.toggleElectronics === 2 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a 
          // href='/iPhones'
          >
            <div className='Top_categories_Select_link'>iPhones</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/galaxy-phones'
          >
            <div className='Top_categories_Select_link'>Samsung Galaxy</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/huawei'
          >
            <div className='Top_categories_Select_link'>Huawei</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/google-pixel'
          >
            <div className='Top_categories_Select_link'>Google Pixel</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/smartphones'
          >
            <div className='Top_categories_Select_link'>Smartphones</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/tablets'
          >
            <div className='Top_categories_Select_link'>Tablets</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/iPads'
          >
            <div className='Top_categories_Select_link'>iPads</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              PhonesAccessoriesCategory(1)}}><a>
            <div className='Top_categories_Select_link'>Phone Accessories</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              PhonesAccessoriesCategory(2)}}><a>
            <div className='Top_categories_Select_link'>Tablet, iPad Accessories</div></a></div>
        </div>
        </div>

        {/* Tv's & Home Theater */}
        <div className={ props.toggleElectronics === 3 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a 
          // href='/tv-sets'
          >
            <div className='Top_categories_Select_link'>TVs</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/sound-bars'
          >
            <div className='Top_categories_Select_link'>Sound Bars</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/streaming-devices'
          >
            <div className='Top_categories_Select_link'>Streaming Devices</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/streaming-device'
          >
            <div className='Top_categories_Select_link'>Blu-Ray, DVD Players</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/projectors-screens'
          >
            <div className='Top_categories_Select_link'>Projectors & Screens</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/wall-mounts'
          >
            <div className='Top_categories_Select_link'>Wall Mounts</div></a></div>
            
        </div>
        </div>

        {/* Cameras & Camcorders */}
        <div className={ props.toggleElectronics === 4 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a 
          // href='/cameras'
          >
            <div className='Top_categories_Select_link'>DSLR Cameras</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/cameras'
          >
            <div className='Top_categories_Select_link'>Mirrorless Cameras</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/cameras'
          >
            <div className='Top_categories_Select_link'>Instant Cameras</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/Cameras'
          >
            <div className='Top_categories_Select_link'>Action Cameras</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/Cameras'
          >
            <div className='Top_categories_Select_link'>Digital Cameras</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/webcams'
          >
            <div className='Top_categories_Select_link'>Webcams</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/Cameras'
          >
            <div className='Top_categories_Select_link'>Camcorders</div></a></div>
          <div className='Top_categories_Select' onClick={() => {ElectronicsCategory(); 
              CameraAccessoriesCategory(1)}}><a>
            <div className='Top_categories_Select_link'>Camera Accessories</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/drones'
          >
            <div className='Top_categories_Select_link'>Drones</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/binoculars-telescopes'
          >
            <div className='Top_categories_Select_link'>Binoculars</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/binoculars-telescopes'
          >
            <div className='Top_categories_Select_link'>Telescopes</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/editing-software'
          >
            <div className='Top_categories_Select_link'>Editing Softwares</div></a></div>
        </div>
        </div>

        {/* Headphones */}
        <div className={ props.toggleElectronics === 5 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a 
          // href='/headphones'
          >
            <div className='Top_categories_Select_link'>Earbuds</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/headphones'
          >
            <div className='Top_categories_Select_link'>AirPods</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/headphones'
          >
            <div className='Top_categories_Select_link'>Headphones</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/headphones'
          >
            <div className='Top_categories_Select_link'>Gaming Headsets</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/headphones'
          >
            <div className='Top_categories_Select_link'>Kids Headphones</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/earphone-accessories'
          >
            <div className='Top_categories_Select_link'>Accessories</div></a></div>
        </div>
        </div>

        {/* Video Games */}
        <div className={ props.toggleElectronics === 6 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a 
          // href='/playstations'
          >
            <div className='Top_categories_Select_link'>PlayStations Consoles</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/xbox'
          >
            <div className='Top_categories_Select_link'>Xbox Consoles</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/nintendo'
          >
            <div className='Top_categories_Select_link'>Nintendo Consoles</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/virtual-reality'
          >
            <div className='Top_categories_Select_link'>Virtual Reality</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/pc-gaming'
          >
            <div className='Top_categories_Select_link'>PC Gaming</div></a></div>
        </div>
        </div>

        {/* Speakers Audio Systems */}
        <div className={ props.toggleElectronics === 7 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a 
          // href='/portable-speakers'
          >
            <div className='Top_categories_Select_link'>Bluetooth Speakers</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/audio-systems'
          >
            <div className='Top_categories_Select_link'>Stereo System</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/sound-bars'
          >
            <div className='Top_categories_Select_link'>Sound Bars</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/audio-systems'
          >
            <div className='Top_categories_Select_link'>CD/DVD Players</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/audio-systems'
          >
            <div className='Top_categories_Select_link'>Boom Boxes</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/audio-systems'
          >
            <div className='Top_categories_Select_link'>Radios</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/audio'
          >
            <div className='Top_categories_Select_link'>Turntables</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/audio'
          >
            <div className='Top_categories_Select_link'>Audio Mixers</div></a></div>
        </div>
        </div>

        {/* Wearable Technology */}
        <div className={ props.toggleElectronics === 8 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a 
          // href='/watches'
          >
            <div className='Top_categories_Select_link'>Watches</div></a></div>
        <div className='Top_categories_Select'><a 
          // href='/smart-watches'
          >
            <div className='Top_categories_Select_link'>Smart Watches</div></a></div>
            <div className='Top_categories_Select'><a 
          // href='/smart-watches'
          >
            <div className='Top_categories_Select_link'>Fitness Trackers</div></a></div>
        </div>
        </div>

        {/* Wi-Fi Networking */}
        <div className={ props.toggleElectronics === 9 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a 
          // href='/networking'
          >
            <div className='Top_categories_Select_link'>WiFi Routers</div></a></div>
          <div className='Top_categories_Select'><a 
          // href='/networking'
          >
            <div className='Top_categories_Select_link'>Mesh WiFi</div></a></div>
          <div className='Top_categories_Select'><a 
          // href='/networking'
          >
            <div className='Top_categories_Select_link'>Cable Modems</div></a></div>
            <div className='Top_categories_Select'><a 
            // href='/networking'
            >
            <div className='Top_categories_Select_link'>Range Extenders</div></a></div>
            <div className='Top_categories_Select'><a 
            // href='/networking-accessories'
            >
            <div className='Top_categories_Select_link'>Cable & Adapters</div></a></div>
        </div>
        </div>

        {/* Smart Home */}
        <div className={ props.toggleElectronics === 10 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a 
          // href='/smart-home'
          >
            <div className='Top_categories_Select_link'>Smart Doorbells & Locks</div></a></div>
          <div className='Top_categories_Select'><a 
          // href='/smart-home'
          >
            <div className='Top_categories_Select_link'>Smart Assistants</div></a></div>
          <div className='Top_categories_Select'><a 
          // href='/smart-home'
          >
            <div className='Top_categories_Select_link'>Home Security</div></a></div>
            <div className='Top_categories_Select'><a 
            // href='/smart-trackers'
            >
            <div className='Top_categories_Select_link'>Smart Trackers</div></a></div>
            <div className='Top_categories_Select'><a 
            // href='/smart-home'
            >
            <div className='Top_categories_Select_link'>Smart Thermostats</div></a></div>
        </div>
        </div>

        {/* Auto Electronics */}
        <div className={ props.toggleElectronics === 11 ? "Toggle_first_category" : "Toggle_first_category_hide"}>
      <div className='Top_sidebar_departments'>
        <div className='Top_categories_departments' onClick={() => {ElectronicsCategory(0); SecondCategory(1)}}>
          <div className='Top_categories_Select_department'>Back</div>
          <div className='sidebar_arrow_pointer'>
          <div className='Arrow_right_flip'><svg width="10.7" height="12" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" 
              className="RWB9Wm"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#74767c"
              className="_2JzwqO"></path></svg>
          </div>
          </div>
          </div>
        </div>
        <div className='Top_sidebar_categories'>
        <div className='Top_categories_Select'><a 
          // href='/auto-cams'
          >
            <div className='Top_categories_Select_link'>Dash & Backup Cams</div></a></div>
          <div className='Top_categories_Select'><a 
          // href='/gps-stereos'
          >
            <div className='Top_categories_Select_link'>GPS & Navigation</div></a></div>
          <div className='Top_categories_Select'><a 
          // href='/gps-stereos'
          >
            <div className='Top_categories_Select_link'>Car Stereos</div></a></div>
            <div className='Top_categories_Select'><a 
            // href='/gps-stereos'
            >
            <div className='Top_categories_Select_link'>CB Radios</div></a></div>
            <div className='Top_categories_Select'><a 
            // href='/gps-stereos'
            >
            <div className='Top_categories_Select_link'>Car Amplifiers</div></a></div>
            <div className='Top_categories_Select'><a 
            // href='/gps-stereos'
            >
            <div className='Top_categories_Select_link'>Power Inverters</div></a></div>
            <div className='Top_categories_Select'><a 
            // href='/car-accessories'
            >
            <div className='Top_categories_Select_link'>Phone Mounts, Other</div></a></div>
        </div>
        </div>
    </>
  )
}

export default ElectronicsCategrory