import React from "react";
import image2 from "../images/image-2.webp";

const FeaturedSingleImageComponent = () => {
    return (
        <>
            <div className='featuredSingleImageDiv'>
                <img className='featuredSingleImage' src={image2} alt='book' />
            </div>
        </>
    );
};

export default FeaturedSingleImageComponent;
