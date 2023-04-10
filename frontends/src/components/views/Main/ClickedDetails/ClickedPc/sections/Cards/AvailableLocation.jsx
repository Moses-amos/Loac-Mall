import React from 'react'

function AvailableLocation(props) {
  return (
    <>
    <div style={{ padding: '15px 0px 5px 0px'}}>
        <div style={{ position: 'relative'}}>
            <span style={{ fontSize: '16px', fontWeight: '700', color: '#656481'}}>Available In</span>
        </div>
        <div className='Detaile_retailer_logo'>
        <img style={{ width: '92px', borderRadius: '3px', height: '42px'}} alt="" 
        src={`http://localhost:5000/${props.Images[0]}`} 
        /> 
        </div>
    </div>
    <div style={{ padding: '0px 0px 20px 0px', display:'flex', flexWrap: 'wrap', width: '550px'}}>
        
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Windhoek" && props.Product.Windhoek === true ?
        <button className='Town_location-present'>Windhoek</button>
        :
        props.Product && props.Product.Windhoek === true ?
        <button className='Town_location-show'>Windhoek</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Walvis" && props.Product.Walvis === true ?
        <button className='Town_location-present'>Walvis Bay</button>
        :
        props.Product && props.Product.Walvis === true ?
        <button className='Town_location-show'>Walvis Bay</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Swakop" && props.Product.Swakop === true ?
        <button className='Town_location-present'>Swakopmund</button>
        :
        props.Product && props.Product.Swakop === true ?
        <button className='Town_location-show'>Swakopmund</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Okahandja" && props.Product.Okahandja === true ?
        <button className='Town_location-present'>Okahandja</button>
        :
        props.Product && props.Product.Okahandja === true ?
        <button className='Town_location-show'>Okahandja</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Oshakati" && props.Product.Oshakati === true ?
        <button className='Town_location-present'>Oshakati</button>
        :
        props.Product && props.Product.Oshakati === true ?
        <button className='Town_location-show'>Oshakati</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Grootfontein" && props.Product.Grootfontein === true ?
        <button className='Town_location-present'>Grootfontein</button>
        :
        props.Product && props.Product.Grootfontein === true ?
        <button className='Town_location-show'>Grootfontein</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Rehoboth" && props.Product.Rehoboth === true ?
        <button className='Town_location-present'>Rehoboth</button>
        :
        props.Product && props.Product.Rehoboth === true ?
        <button className='Town_location-show'>Rehoboth</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "KatimaMulilo" && props.Product.KatimaMulilo === true ?
        <button className='Town_location-present'>Katima Mulilo</button>
        :
        props.Product && props.Product.KatimaMulilo === true ?
        <button className='Town_location-show'>Katima Mulilo</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Ongwediva" && props.Product.Ongwediva === true ?
        <button className='Town_location-present'>Ongwediva</button>
        :
        props.Product && props.Product.Ongwediva === true ?
        <button className='Town_location-show'>Ongwediva</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Otjiwarongo" && props.Product.Otjiwarongo === true ?
        <button className='Town_location-present'>Otjiwarongo</button>
        :
        props.Product && props.Product.Otjiwarongo === true ?
        <button className='Town_location-show'>Otjiwarongo</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Tsumeb" && props.Product.Tsumeb === true ?
        <button className='Town_location-present'>Tsumeb</button>
        :
        props.Product && props.Product.Tsumeb === true ?
        <button className='Town_location-show'>Tsumeb</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Gobabis" && props.Product.Gobabis === true ?
        <button className='Town_location-present'>Gobabis</button>
        :
        props.Product && props.Product.Gobabis === true ?
        <button className='Town_location-show'>Gobabis</button>
        :
        <></>
        }
        {props.UserData && props.Product && props.Product === undefined ?
        <></>
        :
        props.UserData && props.UserData.userLocation === "Rundu" && props.Product.Rundu === true ?
        <button className='Town_location-present'>Rundu</button>
        :
        props.Product && props.Product.Rundu === true ?
        <button className='Town_location-show'>Rundu</button>
        :
        <></>
        }
    </div>
        </>
  )
}

export default AvailableLocation