import React, { useState, useEffect } from 'react'
import '../../../../Main/ClickedDetails/ClickedPc/clickedpc.css'


function UpdateImage(props) {
    const [Images, setImages] = useState([])
const [toggleImage, settoggleImage] = useState(1);

const toggleImageTab = (index) => {
settoggleImage(index);
}

useEffect(() => {
if (props.detail.images && props.detail.images.length > 0) {
setImages(props.detail.images)
}
}, [props.detail])

  return (

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
            onMouseOver={()=> toggleImageTab(4)}><img className='Side-img' alt=''
                src={`http://localhost:5000/${Images[4]}`}  /> </button>

    </div>
    :
    <></>
    }
</div>

<div style={{ width: '100%', paddingLeft: '10px'}}>
    {Images[0] ?
    <>
        <div className={toggleImage===1 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${Images[0]}`}
             /></div>
        <div className='Edit_Image_delete_box'>
            <button className='Edit_Image_delete_button'>Delete Image</button>
        </div>
    </>

    :
    <></>
    }

    {Images[1] ?
    <>
        <div className={toggleImage===2 ? "active-Side-main_image" :"Side-main_image"}><img
            className='Side-img' alt='' src={`http://localhost:5000/${Images[1]}`}
             /></div>
                     <div className='Edit_Image_delete_box'>
            <button className='Edit_Image_delete_button'>Delete Image</button>
        </div>
    </>

    :
    <></>
    }

    {Images[2] ?
    <>
    <div className={toggleImage===3 ? "active-Side-main_image" :"Side-main_image"}><img
        className='Side-img' alt='' src={`http://localhost:5000/${Images[2]}`}
         /></div>
                 <div className='Edit_Image_delete_box'>
        <button className='Edit_Image_delete_button'>Delete Image</button>
    </div>
</>
    :
    <></>
    }

    {Images[3] ?
    <>
    <div className={toggleImage===4 ? "active-Side-main_image" :"Side-main_image"}><img
        className='Side-img' alt='' src={`http://localhost:5000/${Images[3]}`}
         /></div>
                 <div className='Edit_Image_delete_box'>
        <button className='Edit_Image_delete_button'>Delete Image</button>
    </div>
</>
    :
    <></>
    }

{Images[4] ?
    <>
    <div className={toggleImage===5 ? "active-Side-main_image" :"Side-main_image"}><img
        className='Side-img' alt='' src={`http://localhost:5000/${Images[4]}`}
         /></div>
                 <div className='Edit_Image_delete_box'>
        <button className='Edit_Image_delete_button'>Delete Image</button>
    </div>
</>
    :
    <></>
    }

</div>
    </div>

  )
}

export default UpdateImage