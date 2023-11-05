import React from "react";
import image1 from "./images/image-1.webp";

const SingleFeaturedImageComponent = () => {
    return (
        <>
            <div className='singleFeaturedImageDiv'>
                <img className='singleFeaturedImage' src={image1} alt='book' />
            </div>
        </>
    );
};

export default SingleFeaturedImageComponent;
