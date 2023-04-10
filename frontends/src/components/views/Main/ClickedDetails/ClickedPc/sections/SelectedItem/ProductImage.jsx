import React, { useState, useEffect } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import "../../clickedpc.css"

function ProductImage(props) {

const [Images, setImages] = useState([])
const [Product, setProduct] = useState({})
const [toggleImage, settoggleImage] = useState(1);

const toggleImageTab = (index) => {
settoggleImage(index);
}

useEffect(() => {
setProduct(props.detail)
if (props.detail.images && props.detail.images.length > 0) {
setImages(props.detail.images)
}
}, [props.detail])


return (
    <div style={{ display: 'block', width: '590px'}}>
<div className='Images-detail_box'>
<div className='Images_box-left'>
    {Images[0] ?
    <div className='Side_image'>
        <button className={toggleImage===1 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(1)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${Images[0]}`}  /> </button>

    </div>
    :
    <></>
    }

    {Images[1] ?
    <div className='Side_image'>
        <button className={toggleImage===2 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(2)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${Images[1]}`}  /> </button>

    </div>
    :
    <></>
    }

    {Images[2] ?
    <div className='Side_image'>
        <button className={toggleImage===3 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(3)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${Images[2]}`}  /> </button>

    </div>
    :
    <></>
    }

    {Images[3] ?
    <div className='Side_image'>
        <button className={toggleImage===4 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(4)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${Images[3]}`}  /> </button>

    </div>
    :
    <></>
    }
    {Images[4] ?
    <div className='Side_image'>
        <button className={toggleImage===5 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(5)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${Images[4]}`}  /> </button>

    </div>
    :
    <></>
    }

</div>

<div  style={{ width: '100%', paddingLeft: '10px'}}>
    {Images[0] ?
    <div className={toggleImage===1 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${Images[0]}`}
             /></div>
    :
    <></>
    }

    {Images[1] ?
    <div className={toggleImage===2 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${Images[1]}`}
             /></div>
    :
    <></>
    }

    {Images[2] ?
    <div className={toggleImage===3 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${Images[2]}`}
             /></div>
    :
    <></>
    }

    {Images[3] ?
    <div className={toggleImage===4 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${Images[3]}`}
             /></div>
    :
    <></>
    }

    {Images[4] ?
    <div className={toggleImage===5 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${Images[4]}`}
             /></div>
    :
    <></>
    }
</div>
</div>
<div style={{ padding: '10px', marginTop: '40px'}}>
    <div style={{ width: '100%', paddingTop: '20px', borderTop: '1px solid #3e4e5b'}}>
        <div style={{ paddingRight: '30px', display: 'flex'}}>
            <span style={{ color: '#222', fontSize: '20px', fontWeight: '700'}}>Product Description</span>
        </div>
    </div>
    <div className='Info-productdetail_description'>
                    <TextareaAutosize minRows={3} readOnly className='Info-productdetail_des-attr_right-font'
                        style={{ width: '570px', outline: 'none', resize: 'none',
                         border: 'none', borderRadius: '2px', padding: '5px'}}
                        // value={Product.description}
                        value="Enjoy crisp, immersive audio from the two 7-watt speakers and DTS studio sound virtual surround sound, or wirelessly connect a compatible sound bar, headphone, or stereo components using built-in Bluetooth connectivity.
                        Combining rich 1080p picture quality, the voice-enabled android TV platform, built-in Wi-Fi, and innovative technologies, Hisense h55 series smart TVs are great for all your needs - streaming, cable, satellite, gaming, and free over-the-air TV.
                        Enjoy crisp, immersive audio from the two 7-watt speakers and DTS studio sound virtual surround sound, or wirelessly connect a compatible sound bar, headphone, or stereo components using built-in Bluetooth connectivity.
                        Combining rich 1080p picture quality, the voice-enabled android TV platform, built-in Wi-Fi, and innovative technologies, Hisense h55 series smart TVs are great for all your needs - streaming, cable, satellite, gaming, and free over-the-air TV.
                        Enjoy crisp, immersive audio from the two 7-watt speakers and DTS studio sound virtual surround sound, or wirelessly connect a compatible sound bar, headphone, or stereo components using built-in Bluetooth connectivity.
                        Combining rich 1080p picture quality, the voice-enabled android TV platform, built-in Wi-Fi, and innovative technologies, Hisense h55 series smart TVs are great for all your needs - streaming, cable, satellite, gaming, and free over-the-air TV."
                         />

    </div>
</div>
</div>
)
}

export default ProductImage