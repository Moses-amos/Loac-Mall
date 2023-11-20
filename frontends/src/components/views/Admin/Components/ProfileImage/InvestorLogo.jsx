import React from 'react'

function InvestorLogo(props) {

    const renderCartImage = (images) => {
        if(images && images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

  return (
    <div style={{ position: 'relative'}}>
      <img style={{ width: '150px', height: '110px', borderRadius: '50%' }} alt="" 
      src={renderCartImage(props.images)} />    
</div>
  )
}

export default InvestorLogo