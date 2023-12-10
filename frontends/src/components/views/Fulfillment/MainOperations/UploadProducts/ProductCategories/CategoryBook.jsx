import React, { useState } from 'react'

function CategoryBook(props) {
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
    <li className="SelectCategory-li">
        <div>Soon</div>
        <div>
            <div style={{ fontWeight: 'bold', color: '#00BFFF',
             paddingRight: '5px'}}>~</div>
        </div></li>

</ul>


</div>

</div>
  )
}

export default CategoryBook