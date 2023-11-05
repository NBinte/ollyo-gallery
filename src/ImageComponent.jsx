import React from "react";
import TitleComponent from "./TitleComponent";
import AuthorComponent from "./AuthorComponent";
import SingleImageComponent from "./SingleImageComponent";

const ImageComponent = ({ imageData }) => {
    return (
        <>
            <div className='imageComponentDiv'>
                <SingleImageComponent imageData={imageData} />
                <TitleComponent />
                <AuthorComponent />
            </div>
        </>
    );
};

export default ImageComponent;
