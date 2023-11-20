import React, { useState, useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import "../../clickedpc.css"

function ProductImage(props) {

const [ImageInfoOne, setImageInfoOne] = useState([])
const [ImageInfoTwo, setImageInfoTwo] = useState([])
const [ImageInfoThree, setImageInfoThree] = useState([])
const [ImageInfoFour, setImageInfoFour] = useState([])
const [ImageInfoFive, setImageInfoFive] = useState([])

const [Product, setProduct] = useState({})
const [toggleImage, settoggleImage] = useState(1);

const toggleImageTab = (index) => {
settoggleImage(index);
}


useEffect(() => {
setProduct(props.detail)
if (props.detail.imageOne && props.detail.imageOne.length > 0) {
    setImageInfoOne(props.detail.imageOne)
    setImageInfoTwo(props.detail.imageTwo)
    setImageInfoThree(props.detail.imageThree)
    setImageInfoFour(props.detail.imageFour)
    setImageInfoFive(props.detail.imageFive)
}
}, [props.detail])

return (
    <div className='Clicked_page_image_container'>
<div className='Clicked_page_Images_detail_box'>
<div className='Clicked_Images_box_left'>
    <div>
        {ImageInfoOne[0] ?
    <div className='Side_image'>
        <button className={toggleImage===1 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(1)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${ImageInfoOne[0]}`}  /> </button>

    </div>
    :
    <></>
    }

    {ImageInfoTwo[0] ?
    <div className='Side_image'>
        <button className={toggleImage===2 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(2)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${ImageInfoTwo[0]}`}  /> </button>

    </div>
    :
    <></>
    }

    {ImageInfoThree[0] ?
    <div className='Side_image'>
        <button className={toggleImage===3 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(3)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${ImageInfoThree[0]}`}  /> </button>

    </div>
    :
    <></>
    }

    {ImageInfoFour[0] ?
    <div className='Side_image'>
        <button className={toggleImage===4 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(4)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${ImageInfoFour[0]}`}  /> </button>

    </div>
    :
    <></>
    }
    {ImageInfoFive[0] ?
    <div className='Side_image'>
        <button className={toggleImage===5 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(5)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${ImageInfoFive[0]}`}  /> </button>

    </div>
    :
    <></>
    }
    </div>
</div>

<div className='Clicked_Main_Image_box'>
    {ImageInfoOne[0] ?
    <div className={toggleImage===1 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${ImageInfoOne[0]}`}
             /></div>
    :
    <></>
    }

    {ImageInfoTwo[0] ?
    <div className={toggleImage===2 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${ImageInfoTwo[0]}`}
             /></div>
    :
    <></>
    }

    {ImageInfoThree[0] ?
    <div className={toggleImage===3 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${ImageInfoThree[0]}`}
             /></div>
    :
    <></>
    }

    {ImageInfoFour[0] ?
    <div className={toggleImage===4 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${ImageInfoFour[0]}`}
             /></div>
    :
    <></>
    }

    {ImageInfoFive[0] ?
    <div className={toggleImage===5 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${ImageInfoFive[0]}`}
             /></div>
    :
    <></>
    }
</div>

<div className='Clicked_Images_box_bottom'>
    {ImageInfoOne[0] ?
    <div className='Side_image'>
        <button className={toggleImage===1 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(1)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${ImageInfoOne[0]}`}  /> </button>

    </div>
    :
    <></>
    }

    {ImageInfoTwo[0] ?
    <div className='Side_image'>
        <button className={toggleImage===2 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(2)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${ImageInfoTwo[0]}`}  /> </button>

    </div>
    :
    <></>
    }

    {ImageInfoThree[0] ?
    <div className='Side_image'>
        <button className={toggleImage===3 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(3)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${ImageInfoThree[0]}`}  /> </button>

    </div>
    :
    <></>
    }

    {ImageInfoFour[0] ?
    <div className='Side_image'>
        <button className={toggleImage===4 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(4)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${ImageInfoFour[0]}`}  /> </button>

    </div>
    :
    <></>
    }
    {ImageInfoFive[0] ?
    <div className='Side_image'>
        <button className={toggleImage===5 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(5)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${ImageInfoFive[0]}`}  /> </button>

    </div>
    :
    <></>
    }

</div>
</div>

<div className='Clicked_page_description_box_conatiner'>
    <div style={{ width: '100%'}}>
        <div className='Clicked_Item_description_title'>
            <span>Product Description</span>
        </div>
    </div>
    <div className='Info-productdetail_description'>
                    <TextareaAutosize minRows={3} readOnly className='Info-productdetail_des-attr_right-font'
                        style={{ width: '100%', outline: 'none', resize: 'none',
                         border: 'none', borderRadius: '2px', padding: '5px'}}
                        value={Product.description}
                         />

    </div>
</div>

</div>
)
}

export default ProductImage