import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import Axios from 'axios';
function ImageUploadFour(props) {

    const [Images, setImages] = useState([])

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

    return (
        <div style={{ display: 'block'}}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div className='Dropzone-style'
                        {...getRootProps()}
                    >
                        <div className='Click-to-Add-Image'>
                        {/* {console.log('getRootProps', { ...getRootProps() })}
                        {console.log('getInputProps',{ ...getInputProps() })} */}
                        <input {...getInputProps()} />
                        {/* <Icon type="plus" style={{ fontSize: '3rem' }} /> */}
                        <span style={{ fontWeight: '600', fontSize: '15px', color: '#fff'}}>Add Main Image</span>
                        </div>
                    </div>
                )}
            </Dropzone>

            <div className='Dropped-Image_box'>
                {Images.map((image, index) => (
                    <div key={index} className="Dropped_Image_left_margin">
                        <div style={{ position: 'relative'}}>
                            <img className='Dropped-Image_style' src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
                            <div className='Image-remove_button'>
                            <div className='Image_remove-button' onClick={() => onDelete(image)}>Remove Image</div>
                        </div>
                        </div>

                    </div>
                ))}
            </div>

        </div>
    )
}

export default ImageUploadFour
