import React from 'react'
import './towns.css'

function AvailableLocation(props) {
  return (
    <div style={{ display:'flex', flexWrap: 'wrap', width: '100%', paddingTop: '7px', justifyContent: 'center'}}>
        
        {
        props.Product && props.Product.Windhoek === true ?
        <button className='Town_location-show'>Windhoek</button>
        :
        <></>
        }

        {
        props.Product && props.Product.Walvis === true ?
        <button className='Town_location-show'>Walvis Bay</button>
        :
        <></>
        }

        {
        props.Product && props.Product.Swakop === true ?
        <button className='Town_location-show'>Swakopmund</button>
        :
        <></>
        }

        {
        props.Product && props.Product.Okahandja === true ?
        <button className='Town_location-show'>Okahandja</button>
        :
        <></>
        }

        {
        props.Product && props.Product.Oshakati === true ?
        <button className='Town_location-show'>Oshakati</button>
        :
        <></>
        }

        {
        props.Product && props.Product.Grootfontein === true ?
        <button className='Town_location-show'>Grootfontein</button>
        :
        <></>
        }

        {
        props.Product && props.Product.Rehoboth === true ?
        <button className='Town_location-show'>Rehoboth</button>
        :
        <></>
        }

        {
        props.Product && props.Product.KatimaMulilo === true ?
        <button className='Town_location-show'>Katima Mulilo</button>
        :
        <></>
        }

        {
        props.Product && props.Product.Ongwediva === true ?
        <button className='Town_location-show'>Ongwediva</button>
        :
        <></>
        }

        {
        props.Product && props.Product.Otjiwarongo === true ?
        <button className='Town_location-show'>Otjiwarongo</button>
        :
        <></>
        }

        {
        props.Product && props.Product.Tsumeb === true ?
        <button className='Town_location-show'>Tsumeb</button>
        :
        <></>
        }

        {
        props.Product && props.Product.Gobabis === true ?
        <button className='Town_location-show'>Gobabis</button>
        :
        <></>
        }

        {
        props.Product && props.Product.Rundu === true ?
        <button className='Town_location-show'>Rundu</button>
        :
        <></>
        }
        
    </div>
  )
}

export default AvailableLocation