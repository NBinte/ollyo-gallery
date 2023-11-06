import React from "react";
import TitleComponent from "./TitleComponent";
import AuthorComponent from "./AuthorComponent";
import SingleImageComponent from "./SingleImageComponent";

const ImageComponent = ({ imageData, index }) => {
    return (
        <>
            <SingleImageComponent imageData={imageData} index={index} />
            {/* <TitleComponent />
                <AuthorComponent /> */}
        </>
    );
};

export default ImageComponent;
