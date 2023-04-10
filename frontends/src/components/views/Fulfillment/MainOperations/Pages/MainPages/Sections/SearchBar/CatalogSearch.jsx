import React, { useState } from 'react'

import '../../../../../../Main/00Components/pages.css'

function CatalogSearch(props) {

const [SearchTerms, setSearchTerms] = useState("")

const onChangeSearch = (event) => {
  setSearchTerms(event.currentTarget.value)

  props.refreshFunction(event.currentTarget.value)

}

  return (
    <div className='Search-bar_box_royal'>
  <div className='Search-bar_input_box'>
    <input placeholder='Search your Catalog' className='Search-bar_input' 
    value={SearchTerms} 
    maxLength={50}
    onChange={onChangeSearch} type='text' />
  </div>
  <div className='Search-bar_button_box'>
    <button className='Search-bar_button' onClick={()=> props.showResults()}>
      <span style={{width: '100%', height: '100%'}}>Search</span> 
    </button>
  </div>
</div>
  )
}

export default CatalogSearch