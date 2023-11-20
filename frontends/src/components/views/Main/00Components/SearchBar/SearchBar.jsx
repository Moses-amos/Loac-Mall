import React, { useState } from 'react'
import '../pages.css'
// import { Input } from 'antd';

// const { Search } = Input;

function SearchBar(props) {

const [SearchTerms, setSearchTerms] = useState("")

const onChangeSearch = (event) => {
  setSearchTerms(event.currentTarget.value)

  props.refreshFunction(event.currentTarget.value)

}

return (
<div className='Search-bar_box_main'>
  <div className='Search-bar_input_box'>
    <input className='Search-bar_input_main' 
    value={SearchTerms} 
    maxLength={50}
    onChange={onChangeSearch} type='text' />
  </div>
  <div className='Search-bar_button_box_main'>
    <button className='Search-bar_button' onClick={()=> props.showResults()}>
      <span style={{width: '100%', height: '100%'}}>Search</span> 
    </button>
  </div>
</div>
)
}

export default SearchBar