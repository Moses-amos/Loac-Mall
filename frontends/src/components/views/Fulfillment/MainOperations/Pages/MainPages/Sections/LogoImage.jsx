import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import Axios from 'axios';

function LogoImage(props) {

    const [Images, setImages] = useState([])
    const [toggleStage, settoggleStage] = useState(false)

    const showImage = () => settoggleStage(!toggleStage)

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

                    setImages([...Images, response.data.image])
                    props.refreshFunction([...Images, response.data.image])

                } else {
                    alert('Failed to save the Image in Server')
                }
            })
    }

    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }

  return (
    <div style={{ display: 'flex' }}>
        <div className={toggleStage? "Dropzone_hide":"Dropzone_show"} onClick={showImage}>
        <Dropzone
        onDrop={onDrop}
        multiple={false}
        maxSize={800000000}
    >
        {({ getRootProps, getInputProps }) => (
            <div style={{
                width: '100%', cursor: 'pointer', height: '70px',
                display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                {/* <Icon type="plus" style={{ fontSize: '3rem' }} /> */}
                <span style={{ fontWeight: '700', fontSize: '15px'}}>Add logo</span>
            </div>
        )}
    </Dropzone>
        </div>
            <div onClick={showImage} className={toggleStage? "Uploaded-image_show" : "Uploaded-image_hide"}>
            {Images.map((image, index) => (
                <div key={index} onClick={() =>{onDelete(image); showImage()} }>
                    <img style={{  cursor: 'pointer', width: '176px', height: '66px'}} src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
                </div>
            ))}
        </div>

</div>
  )
}

export default LogoImage