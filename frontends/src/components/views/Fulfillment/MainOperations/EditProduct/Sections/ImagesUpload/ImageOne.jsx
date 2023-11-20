import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import Axios from 'axios';

function ImageOne(props) {

    const [Images, setImages] = useState([])
    const [toggleStage, settoggleStage] = useState(false)
    const [SavedImage, setSavedImage] = useState()

    // const SaveImageToggle = () => setSavedImage(!SavedImage)
    
    const showImage = () => settoggleStage(!toggleStage)

    // const showImage = (index) => {
    //     settoggleStage(index);
    //   }

    function refreshPage() {
        window.location.reload(false);
      }
      
    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        formData.append("file", files[0])
        //save the Image we chose inside the Node Server 
        Axios.post('/api/product/uploadImage', formData, config)
            .then(response => {
                if (response.data.success) {

                    setImages([response.data.image])
                    props.refreshFunction([response.data.image])

                } else {
                    alert('Failed to save the Image in Server')
                }
            })
    }

    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }

    const SaveImageListedOne = (image) => {
        const variables = {
        productId: props.productId,
        imageOne: image,
        }
        
        Axios.post('/api/product/getProduct', variables)
        .then(response => {
        if(response.data.success) {
            refreshPage()
        }
        }, [])
        }

  return (
    <div style={{ display: 'block'}}>
        <div className="Dropzone_Edit_show" onClick={() => {showImage(); setSavedImage(false)}}>
        <Dropzone
        onDrop={onDrop}
        multiple={false}
        maxSize={800000000}
    >
        {({ getRootProps, getInputProps }) => (
            <div className='Dropzone_Add_Image_Box'
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                <span style={{ fontWeight: '700', fontSize: '15px'}}>Add Image</span>
                {/* <Icon type="plus" style={{ fontSize: '3rem' }} /> */}
            </div>
        )}
    </Dropzone>
        </div>
                <div 
            className="Uploaded-Edit_image_show"
        // className={toggleStage ? "Uploaded-Edit_image_show" : "Uploaded-image_hide"}
        //  onClick={showImage}
        //  onClick={()=> { showImage(1)}}
          >
                {Images.map((image, index) => (
                    <div key={index}>
                        <div style={{ position: 'relative'}}>
                            <img style={{ cursor: 'pointer', width: '100%', height: '390px', borderRadius: '10px'}} src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
                            <div className='Edit_Image_delete_box'>
                            <div className='Edit_Image_delete_button' 
                            onClick={() =>{onDelete(image); showImage()}}
                            >Delete Image</div>
                        </div>
                        </div>

                    </div>
                ))}
            </div>
            <div className={toggleStage ? "Edit_Image_space_box" : "Uploaded-image_hide"}>

            </div>
            <div className={toggleStage ? "Edit_Image_save_box" : "Uploaded-image_hide"}>
                            
                            {Images.map((image, index) => (
                                <div className={SavedImage ? "Edit_Image_save_clicked_button" : 'Edit_Image_save_button'} 
                                key={index}
                                onClick={() => {SaveImageListedOne(image); setSavedImage(true)}}
                                >
                                {SavedImage === false ?
                                <>Save Image</>
                                :
                                SavedImage === true ?
                                <>Image Saved</>
                                :
                                <></>
                                }
                                </div>
                            ))
                            }
            </div>
</div>
  )
}

export default ImageOne