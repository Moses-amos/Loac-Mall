import React from 'react'

function ConfirmPage() {
  return (
    <div style={{ width: '100%'}}>
    <div style={{ background: 'orange', paddingBottom: '290px'}}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <span style={{ fontSize: '38px',fontWeight: '700', paddingTop: '180px', color: '#fff'}}>LOGIN TO CONFIRM EMAIL</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
        <div style={{ width: '150px', height: '40px', background: '#007aff',borderRadius: '3px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
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