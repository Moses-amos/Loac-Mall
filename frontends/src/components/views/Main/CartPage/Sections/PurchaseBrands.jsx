import React from 'react'

function PurchaseBrands(props) {
    const renderCartImage = (images) => {
        if(images && images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

  return (
    <>
    {props.products === undefined ?
    <></>
    :
    <div style={{ padding: '10px 0px'}}> 
    <div><span style={{ fontSize: '16px', fontWeight: '700', color: '#74767c'}}>Retailers</span>
</div>
<div style={{ display: 'flex', flexWrap: 'wrap', padding: '10px 0px 5px 3px', background: 'lightgray', borderRadius: '3px'}}>
    {props.products && props.products.map(product => (
    <div className='PurchaseBrand-display'>
    <img style={{ width: '100%', height: '100%'}} alt="" 
        src={renderCartImage(product.retailerImage)} />
    </div>
    ))
    }


</div>
    </div>
    }
    </>

  )
}

export default PurchaseBrands