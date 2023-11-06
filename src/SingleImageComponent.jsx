import React from "react";
import image1 from "../src/images/image-1.webp";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const SingleImageComponent = ({ imageData, index }) => {
    return (
        <>
            <Draggable
                draggableId={imageData.id.toString()}
                index={index}
                key={imageData.id}
            >
                {(provided, snapshot) => (
                    <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                    >
                        <div className='singleImageDiv'>
                            <img
                                className='singleImage'
                                src={imageData.image}
                                alt='book'
                            />
                        </div>
                    </div>
                )}
            </Draggable>
        </>
    );
};

export default SingleImageComponent;
