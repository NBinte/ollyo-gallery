import React from "react";
import image1 from "../src/images/image-1.webp";

const SingleImageComponent = ({ imageData }) => {
    return (
        <>
            <div className='singleImageDiv'>
                <img className='singleImage' src={imageData.image} alt='book' />
            </div>
        </>
    );
};

export default SingleImageComponent;
