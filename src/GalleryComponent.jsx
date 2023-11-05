import React, { useState } from "react";
import ImageComponent from "./ImageComponent";
import FeaturedImageComponent from "./featured/FeaturedImageComponent";
import image1 from "../src/images/image-1.webp";
import image2 from "../src/images/image-2.webp";
import image3 from "../src/images/image-3.webp";
import image4 from "../src/images/image-4.webp";
import image5 from "../src/images/image-5.webp";
import image6 from "../src/images/image-6.webp";
import image7 from "../src/images/image-7.webp";
import image8 from "../src/images/image-8.webp";
import image9 from "../src/images/image-9.webp";
import image10 from "../src/images/image-10.jpeg";
import image11 from "../src/images/image-11.jpeg";

const GalleryComponent = () => {
    const [data, setData] = useState([
        { id: 0, image: image1 },
        { id: 1, image: image2 },
        { id: 2, image: image3 },
        { id: 3, image: image4 },
        { id: 4, image: image5 },
        { id: 5, image: image6 },
        { id: 6, image: image7 },
        { id: 7, image: image8 },
        { id: 8, image: image9 },
        { id: 9, image: image10 },
        { id: 10, image: image11 },
    ]);

    return (
        <>
            <div className='parentDiv'>
                <div className='featuredDiv'>
                    <FeaturedImageComponent />
                </div>

                <div className='imageList'>
                    {data.map((each, index) => {
                        return (
                            <>
                                <ImageComponent imageData={each} />
                            </>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default GalleryComponent;
