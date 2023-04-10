import React from 'react'

function SidebarLogo(props) {

    const renderCartImage = (images) => {
        if(images && images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

  return (
    <div style={{ position: 'relative'}}>
    <img style={{ width: '177px', height: '76px', borderRadius: '5px' }} alt="product" 
        src={renderCartImage(props.images)} />
</div>
  )
}

export default SidebarLogo