import React from 'react'
import './confirmpage.css'

function ConfirmPage() {
  return (
    <div className='Confirm_Page_box'>
    <div style={{ paddingBottom: '290px'}}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <span style={{ fontSize: '40px',fontWeight: '900', paddingTop: '180px', color: '#fff'}}>Confirm Email</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
        <div className='Confirm_Page_button'>
              <a href='/login' 
              style={{ width: '100%', height: '100%', display: 'flex', 
              justifyContent: 'center', alignItems: 'center' }}>
                <span style={{color: '#fff', fontWeight: '700', fontSize: '17px'}}>Login</span>
              </a>
        </div>
    </div>
</div>
    </div>
  )
}

export default ConfirmPage