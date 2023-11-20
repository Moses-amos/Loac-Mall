import React from 'react'
import './towns.css'

function TownLocations() {
  return (
    <>
    {/* <div>
        <span style={{ fontSize: '14px', fontWeight: '700', color: '#333'}}>Available In</span>
     </div> */}
    <div style={{ display:'flex', flexWrap: 'wrap', width: '100%', paddingTop: '7px', justifyContent: 'center'}}>
        
        <button className='Town_location-show'>Windhoek</button>

        <button className='Town_location-show'>Walvis Bay</button>

        <button className='Town_location-show'>Swakopmund</button>

        <button className='Town_location-show'>Okahandja</button>

        <button className='Town_location-show'>Oshakati</button>

       {/* <button className='Town_location-show'>Grootfontein</button>

         <button className='Town_location-show'>Rehoboth</button>

        <button className='Town_location-show'>Katima Mulilo</button>

        <button className='Town_location-show'>Ongwediva</button>

        <button className='Town_location-show'>Otjiwarongo</button>

        <button className='Town_location-show'>Tsumeb</button>

        <button className='Town_location-show'>Gobabis</button>

        <button className='Town_location-show'>Rundu</button> */}

    </div>
    </>
    
  )
}

export default TownLocations