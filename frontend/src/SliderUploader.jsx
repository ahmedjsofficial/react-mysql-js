import React, { useState } from 'react'
import Dropzone from 'react-dropzone-uploader';
import "react-dropzone-uploader/dist/styles.css";

const SliderUploader = () => {
    const [files, setFiles] = useState([]);
    const [images, setImages] = useState([]);

    const handleImageState = ({ meta, file }, status) => {
        setImages();
    }    
    const handleSubmit = (e) => {
        
    }
  
    return (
    <>
        <div className='app-container'>
            <form method='POST'>
                <Dropzone
                    maxFiles={1}
                    canRemove
                    inputContent={"Drop A Image"}
                    onChangeStatus={handleImageState}
                    accept="image/*,audio/*,video/*"
                    styles={{
                        dropzone: { width: "100%", minHeight: 50 },
                        dropzoneActive: { borderColor: "#84cc16" },
                    }}
                />
                <button type='button' className='button-theme'>Uplod Images</button>
            </form>
        </div>
    </>
  )
}

export default SliderUploader