import React, { useEffect, useState } from 'react'
import Axios from 'axios'
import TextareaAutosize from 'react-textarea-autosize';
import '../../../../Main/ClickedDetails/ClickedPc/clickedpc.css'
import ImageOne from './ImagesUpload/ImageOne';
import ImageTwo from './ImagesUpload/ImageTwo';
import ImageThree from './ImagesUpload/ImageThree';
import ImageFour from './ImagesUpload/ImageFour';
import ImageFive from './ImagesUpload/ImageFive';

function UpdateImage(props) {

const [toggleImage, settoggleImage] = useState(1);
const [ImageInfoOne, setImageInfoOne] = useState([])
const [ImageInfoTwo, setImageInfoTwo] = useState([])
const [ImageInfoThree, setImageInfoThree] = useState([])
const [ImageInfoFour, setImageInfoFour] = useState([])
const [ImageInfoFive, setImageInfoFive] = useState([])

const [SpecificationValue, setSpecificationValue] = useState("")
const [savedClick, setsavedClick] = useState(false)
const [Product, setProduct] = useState({})
const [ImageListedOne, setImageListedOne] = useState([])
const [ImageListedTwo, setImageListedTwo] = useState([])
const [ImageListedThree, setImageListedThree] = useState([])
const [ImageListedFour, setImageListedFour] = useState([])
const [ImageListedFive, setImageListedFive] = useState([])

const [ShowImageOneDetails, setShowImageOneDetails] = useState(1)
const [ShowImageTwoDetails, setShowImageTwoDetails] = useState(1)
const [ShowImageThreeDetails, setShowImageThreeDetails] = useState(1)
const [ShowImageFourDetails, setShowImageFourDetails] = useState(1)
const [ShowImageFiveDetails, setShowImageFiveDetails] = useState(1)

const [IsLoading, setIsLoading] = useState(true)

const InfoPopupOne = (index) => {
    setShowImageOneDetails(index);
  }

  const InfoPopupTwo = (index) => {
    setShowImageTwoDetails(index);
  }

    const InfoPopupThree = (index) => {
    setShowImageThreeDetails(index);
  }

      const InfoPopupFour = (index) => {
    setShowImageFourDetails(index);
  }

        const InfoPopupFive = (index) => {
    setShowImageFiveDetails(index);
  }

const clickSave = () => setsavedClick(!savedClick)

function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {

    setTimeout(() => {
      setIsLoading(false)
    }, 1000);
    
  }, [])


useEffect(() => {

    setProduct(props.detail)
    }, [props.detail])

    const updateImageListedOne = (newImage) => {
        setImageListedOne(newImage)
        }

        const updateImageListedTwo = (newImage) => {
            setImageListedTwo(newImage)
            }

            const updateImageListedThree = (newImage) => {
                setImageListedThree(newImage)
                }

                const updateImageListedFour = (newImage) => {
                    setImageListedFour(newImage)
                    }

                    const updateImageListedFive = (newImage) => {
                        setImageListedFive(newImage)
                        }


const toggleImageTab = (index) => {
settoggleImage(index);
}

const onSpecificationChange = (event) => {
    setSpecificationValue(event.currentTarget.value)
    }


useEffect(() => {
    setImageInfoOne(props.detail.imageOne)
    setImageInfoTwo(props.detail.imageTwo)
    setImageInfoThree(props.detail.imageThree)
    setImageInfoFour(props.detail.imageFour)
    setImageInfoFive(props.detail.imageFive)

}, [props.detail])

const UpdateProduct = () => {

    const variables = {
    productId: props.productId,
    description: SpecificationValue === "" ? Product.description : SpecificationValue,
    }
    
    Axios.post('/api/product/getProduct', variables)
    .then(response => {
    if(response.data.success) {
      refreshPage()
    }
    }, [])
    }

            const SaveImageListedThree = () => {
                const variables = {
                productId: props.productId,
                imageThree: ImageListedThree,
                }
                
                Axios.post('/api/product/getProduct', variables)
                .then(response => {
                if(response.data.success) {
                }
                }, [])
                }

                const SaveImageListedFour = () => {
                    const variables = {
                    productId: props.productId,
                    imageFour: ImageListedFour,
                    }
                    
                    Axios.post('/api/product/getProduct', variables)
                    .then(response => {
                    if(response.data.success) {
                    }
                    }, [])
                    }

                    const SaveImageListedFive = () => {
                        const variables = {
                        productId: props.productId,
                        imageFive: ImageListedFive,
                        }
                        
                        Axios.post('/api/product/getProduct', variables)
                        .then(response => {
                        if(response.data.success) {
                        }
                        }, [])
                        }

  return (
    <div style={{ display: 'block', width: '590px'}}>
<div className='Images-detail_box'>
<div className='Images_box-left'>
    <div className='Side_image'>
        <button className={toggleImage===1 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(1)}>  
            {ImageInfoOne && ImageInfoOne.length === 0 ?
            <img className='Side-img' alt=''
            src={`http://localhost:5000/${ImageListedOne[0]}`} />
            :
            ImageInfoOne && ImageInfoOne.length === 1 ? 
            <img className='Side-img' alt=''
            src={`http://localhost:5000/${ImageInfoOne[0]}`} />
            :
            <></>
            }
                 </button>
    </div>

    <div className='Side_image'>
        <button className={toggleImage===2 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(2)}>
            {ImageInfoTwo && ImageInfoTwo.length === 0 ?
            <img className='Side-img' alt=''
            src={`http://localhost:5000/${ImageListedTwo[0]}`} />
            :
            ImageInfoTwo && ImageInfoTwo.length === 1 ? 
            <img className='Side-img' alt=''
            src={`http://localhost:5000/${ImageInfoTwo[0]}`} />
            :
            <></>
            }
                </button>

    </div>

    <div className='Side_image'>
        <button className={toggleImage===3 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(3)}>
            {ImageInfoThree && ImageInfoThree.length === 0 ?
            <img className='Side-img' alt=''
            src={`http://localhost:5000/${ImageListedThree[0]}`} />
            :
            ImageInfoThree && ImageInfoThree.length === 1 ? 
            <img className='Side-img' alt=''
            src={`http://localhost:5000/${ImageInfoThree[0]}`} />
            :
            <></>
            }
            </button>

    </div>

    <div className='Side_image'>
        <button className={toggleImage===4 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(4)}>
            {ImageInfoFour && ImageInfoFour.length === 0 ?
            <img className='Side-img' alt=''
            src={`http://localhost:5000/${ImageListedFour[0]}`} />
            :
            ImageInfoFour && ImageInfoFour.length === 1 ? 
            <img className='Side-img' alt=''
            src={`http://localhost:5000/${ImageInfoFour[0]}`} />
            :
            <></>
            }
            </button>

    </div>

    <div className='Side_image'>
        <button className={toggleImage===5 ? "Side-image_tabs active-Side-image_tabs" :"Side-image_tabs"}
            onMouseOver={()=> toggleImageTab(5)}>
            {ImageInfoFive && ImageInfoFive.length === 0 ?
            <img className='Side-img' alt=''
            src={`http://localhost:5000/${ImageListedFive[0]}`} />
            :
            ImageInfoFive && ImageInfoFive.length === 1 ? 
            <img className='Side-img' alt=''
            src={`http://localhost:5000/${ImageInfoFive[0]}`} />
            :
            <></>
            }
        </button>

    </div>

</div>

<div style={{ width: '100%', paddingLeft: '10px'}}>
    <>
        <div className={toggleImage===1 ? "active-Side-main_image" :"Side-main_image"}>
            {
            ImageInfoOne && ImageInfoOne.length === 0 ?
            <>
            {IsLoading === undefined ?
            <></>
            :
            IsLoading === false ?
            <ImageOne productId={props.productId} refreshFunction={updateImageListedOne} /> 
            :
            <></>
            }
            </>

            :
            ImageInfoOne && ImageInfoOne.length === 1 ?
            <>
            <div className={ShowImageOneDetails === 1 ? "Show_Picture" : "Hide_Product_Image"}
            >
                <>
                <div>
                <img 
                style={{  cursor: 'pointer', width: '100%', height: '390px', borderRadius: '10px'}}
                 alt='' src={`http://localhost:5000/${ImageInfoOne[0]}`} />
                </div>
                <div className='Edit_Image_change_box' >
                <button className='Edit_Image_change_button' onClick={()=> { InfoPopupOne(2)}}>Change Image</button>
            </div>
                </>
            </div>

            <div className={ShowImageOneDetails === 2 ? "Show_Picture" : "Hide_Product_Image"}
            >
            <ImageOne productId={props.productId} refreshFunction={updateImageListedOne} /> 
            {ShowImageOneDetails === 2 && ImageInfoOne.length === 1 && ImageListedOne.length === 0 ?
            <div className='Edit_Image_change_edit_box' >
                <button className='Edit_Image_change_edit_button' onClick={()=> { InfoPopupOne(1)}}>Cancel Edit</button>
            </div>
            :
            <></>
            }
            </div>

            </>
            :
            <></>
            }
             </div>
    </>

    <>
        <div className={toggleImage===2 ? "active-Side-main_image" :"Side-main_image"}>
        {ImageInfoTwo && ImageInfoTwo.length === 0 ?
            <ImageTwo productId={props.productId} refreshFunction={updateImageListedTwo}  />
            :
            ImageInfoTwo && ImageInfoTwo.length === 1 ?
            <>
            <div className={ShowImageTwoDetails === 1 ? "Show_Picture" : "Hide_Product_Image"}
            >
                <>
                <div>
                <img 
                style={{  cursor: 'pointer', width: '100%', height: '390px', borderRadius: '10px'}}
                 alt='' src={`http://localhost:5000/${ImageInfoTwo[0]}`} />
                </div>
                <div className='Edit_Image_change_box'>
                <button className='Edit_Image_change_button' onClick={()=> { InfoPopupTwo(2)}}>Change Image</button>
            </div>
                </>
            </div>

            <div className={ShowImageTwoDetails === 2 ? "Show_Picture" : "Hide_Product_Image"}
            >
            <ImageTwo productId={props.productId} refreshFunction={updateImageListedTwo}  />
            {ShowImageTwoDetails === 2 && ImageInfoTwo.length === 1 && ImageListedTwo.length === 0 ?
                <div className='Edit_Image_change_edit_box'>
                <button className='Edit_Image_change_edit_button' onClick={()=> { InfoPopupTwo(1)}}>Cancel Edit</button>
            </div>
            :
            <></>
            }
            </div>

            </>
            :
            <></>
            }
           
        </div>

    </>

    <>
    <div className={toggleImage===3 ? "active-Side-main_image" :"Side-main_image"}>
    {ImageInfoThree && ImageInfoThree.length === 0 ?
        <ImageThree productId={props.productId} refreshFunction={updateImageListedThree} />
        :
            ImageInfoThree && ImageInfoThree.length === 1 ?
            <>
            <div className={ShowImageThreeDetails === 1 ? "Show_Picture" : "Hide_Product_Image"}
            >
                <>
                <div>
                <img 
                style={{  cursor: 'pointer', width: '100%', height: '390px', borderRadius: '10px'}}
                 alt='' src={`http://localhost:5000/${ImageInfoThree[0]}`} />
                </div>
                <div className='Edit_Image_change_box'>
                <button className='Edit_Image_change_button' onClick={()=> { InfoPopupThree(2)}}>Change Image</button>
            </div>
                </>
            </div>

            <div className={ShowImageThreeDetails === 2 ? "Show_Picture" : "Hide_Product_Image"}
            >
        <ImageThree productId={props.productId} refreshFunction={updateImageListedThree} />
            {ShowImageThreeDetails === 2 && ImageInfoThree.length === 1 && ImageListedThree.length === 0 ?
            <div style={{ display: 'flex'}}>
            <div className='Edit_Image_change_edit_box'>
                <button className='Edit_Image_change_edit_button' onClick={()=> { InfoPopupThree(1)}}>Cancel Edit</button>
            </div>
            <div className='Edit_Image_No_edit_box' >
                <button className='Edit_Image_No_edit_button' onClick={()=> { SaveImageListedThree()}}>Unset Image</button>
            </div>
            </div>
            :
            <></>
            }
            </div>

            </>
            :
            <></>
            }
    </div>

</>

    <>
    <div className={toggleImage===4 ? "active-Side-main_image" :"Side-main_image"}>
    {ImageInfoFour && ImageInfoFour.length === 0 ?
        <ImageFour productId={props.productId} refreshFunction={updateImageListedFour} />
        :
            ImageInfoFour && ImageInfoFour.length === 1 ?
            <>
            <div className={ShowImageFourDetails === 1 ? "Show_Picture" : "Hide_Product_Image"}
            >
                <>
                <div>
                <img 
                style={{  cursor: 'pointer', width: '100%', height: '390px', borderRadius: '10px'}}
                 alt='' src={`http://localhost:5000/${ImageInfoFour[0]}`} />
                </div>
                <div className='Edit_Image_change_box'>
                <button className='Edit_Image_change_button' onClick={()=> { InfoPopupFour(2)}}>Change Image</button>
            </div>
                </>
            </div>

            <div className={ShowImageFourDetails === 2 ? "Show_Picture" : "Hide_Product_Image"}
            >
        <ImageFour productId={props.productId} refreshFunction={updateImageListedFour} />
            {ShowImageFourDetails === 2 && ImageInfoFour.length === 1 && ImageListedFour.length === 0 ?
            <div style={{ display: 'flex'}}>
            <div className='Edit_Image_change_edit_box'>
                <button className='Edit_Image_change_edit_button' onClick={()=> { InfoPopupFour(1)}}>Cancel Edit</button>
            </div>
            <div className='Edit_Image_No_edit_box' >
                <button className='Edit_Image_No_edit_button' onClick={()=> { SaveImageListedFour()}}>Unset Image</button>
            </div>
            </div>
            :
            <></>
            }
            </div>

            </>
            :
            <></>
            }
    </div>

</>

    <>
    <div className={toggleImage===5 ? "active-Side-main_image" :"Side-main_image"}>
    {ImageInfoFive && ImageInfoFive.length === 0 ?
        <ImageFive productId={props.productId} refreshFunction={updateImageListedFive} />
        :
            ImageInfoFive && ImageInfoFive.length === 1 ?
            <>
            <div className={ShowImageFiveDetails === 1 ? "Show_Picture" : "Hide_Product_Image"}
            >
                <>
                <div>
                <img 
                style={{  cursor: 'pointer', width: '100%', height: '390px', borderRadius: '10px'}}
                 alt='' src={`http://localhost:5000/${ImageInfoFive[0]}`} />
                </div>
                <div className='Edit_Image_change_box'>
                <button className='Edit_Image_change_button' onClick={()=> { InfoPopupFive(2)}}>Change Image</button>
            </div>
                </>
            </div>

            <div className={ShowImageFiveDetails === 2 ? "Show_Picture" : "Hide_Product_Image"}
            >
        <ImageFive productId={props.productId} refreshFunction={updateImageListedFive} />
            {ShowImageFiveDetails === 2 && ImageInfoFive.length === 1 && ImageListedFive.length === 0 ?
<div style={{ display: 'flex'}}>
<div className='Edit_Image_change_edit_box'>
    <button className='Edit_Image_change_edit_button' onClick={()=> { InfoPopupFive(1)}}>Cancel Edit</button>
</div>
<div className='Edit_Image_No_edit_box' >
    <button className='Edit_Image_No_edit_button' onClick={()=> { SaveImageListedFive()}}>Unset Image</button>
</div>
</div>
            :
            <></>
            }
            </div>

            </>
            :
            <></>
            }
    </div>

</>

</div>
    </div>
    <div style={{ padding: '10px', marginTop: '40px'}}>
    <div style={{ width: '100%', paddingTop: '20px', borderTop: '1px solid #3e4e5b'}}>
        <div style={{ paddingRight: '30px', display: 'flex'}}>
            <span style={{ color: '#222', fontSize: '20px', fontWeight: '700'}}>Product Description</span>
        </div>
    </div>
    <div className='Info-productdetail_description'>
    <TextareaAutosize minRows={2} style={{ width: '570px', fontSize: '13px', color: '#656481', outline: '2px solid orange',
            fontWeight: 'bold', border: 'none', borderRadius: '2px', padding: '10px 20px'}} onChange={onSpecificationChange}
          placeholder={Product.description} value={SpecificationValue} />

    </div>
</div>

<div style={{ marginBottom: '10px'}} className='Submit-upload-button_box'>
      <button style={{ cursor: 'pointer'}} className={savedClick ? "Submit-upload-button_clicked": "Submit-upload-button"} onClick={() => {UpdateProduct(); clickSave()}}>
        {savedClick === false ?
        <span>Save</span>
        :
        <span>Saved</span>
        }
      </button>
  </div>

    </div>
  )
}

export default UpdateImage