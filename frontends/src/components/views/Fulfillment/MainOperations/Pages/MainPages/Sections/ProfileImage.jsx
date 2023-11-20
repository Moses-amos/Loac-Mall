import React from 'react'

function ProfileImage(props) {
    const renderCartImage = (images) => {
        if(images && images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

  return (
<div style={{ position: 'relative'}}>
    <img style={{ width: '170px', height: '70px' }} alt='logo'  
        src={renderCartImage(props.images)} />
</div>
  )
}

export default ProfileImage