import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import { Icon } from 'antd';
import Axios from 'axios';
function DescriptImages(props) {

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

                    setImages([...Images, response.data.manufacturerImages])
                    props.refreshFunction([...Images, response.data.manufacturerImages])

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
    <Dropzone
        onDrop={onDrop}
        multiple={false}
        maxSize={800000000}
    >
        {({ getRootProps, getInputProps }) => (
            <div style={{
                width: '300px', cursor: 'pointer', height: '240px',
                display: 'flex', alignItems: 'center', justifyContent: 'center', border: '2px solid red'
            }}
                {...getRootProps()}
            >
                <input {...getInputProps()} />
                <Icon type="plus" style={{ fontSize: '3rem' }} />
            </div>
        )}
    </Dropzone>

    <div style={{ marginLeft: '30px',overflowX: 'scroll', display: 'flex', width: '550px', height: '260px' }}>
        {Images.map((image, index) => (
            <div key={index} style={{paddingLeft: '15px'}} onClick={() => onDelete(image)}>
                <img style={{  cursor: 'pointer',minWidth: '300px', width: '300px', height: '240px', border: '3px solid red' }} src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
            </div>
        ))}
    </div>
</div>
  )
}

export default DescriptImages