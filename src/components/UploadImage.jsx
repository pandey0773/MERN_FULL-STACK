import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const [uploadError, setUploadError] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
            setUploadSuccess(false);
            setUploadError(null);
            setUploadProgress(0);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (selectedImage) {
            const formData = new FormData();
            formData.append('image', selectedImage);

            try {
                const response = await axios.post('/upload', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                    onUploadProgress: (progressEvent) => {
                        const progress = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                        setUploadProgress(progress);
                    },
                });

                console.log('Image uploaded successfully:', response.data);
                setUploadSuccess(true);
            } catch (error) {
                console.error('Error uploading image:', error);
                setUploadError(error);
            }
        }
    };

    return (
        <div>
            <h2>Upload an Image</h2>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <button type="submit">Upload</button>
            </form>
            {selectedImage && (
                <div>
                    <h3>Image Preview:</h3>
                    <img
                        src={URL.createObjectURL(selectedImage)}
                        alt="Selected"
                        style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                    />
                    {uploadProgress > 0 && (
                        <div>
                            <p>Upload Progress: {uploadProgress}%</p>
                        </div>
                    )}
                    {uploadSuccess && (
                        <div>
                            <p style={{ color: 'green' }}>Upload successful!</p>
                        </div>
                    )}
                    {uploadError && (
                        <div>
                            <p style={{ color: 'red' }}>Error uploading image: {uploadError.message}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default ImageUpload;