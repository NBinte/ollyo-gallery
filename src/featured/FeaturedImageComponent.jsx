import React from "react";
import FeaturedSingleImageComponent from "./FeaturedSingleImageComponent";
import FeaturedTitleComponent from "./FeaturedTitleComponent";
import FeaturedAuthorComponent from "./FeaturedAuthorComponent";

const FeaturedImageComponent = () => {
    return (
        <>
            <div className='featuredImageComponentDiv'>
                <FeaturedSingleImageComponent />
                <FeaturedTitleComponent />
                <FeaturedAuthorComponent />
            </div>
        </>
    );
};

export default FeaturedImageComponent;
