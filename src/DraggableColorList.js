import React from 'react';
import {SortableContainer} from 'react-sortable-hoc';
import DraggableColorBox from "./DraggableColorBox";

 const DraggableColorList =  SortableContainer(({colors, removeColor}) => {
    return (
      <div style={{height: "100%"}}>
          {colors.map((color, index) => {
          return (
            <DraggableColorBox
              index={index}
              Draggablkey={color.name}
              color={color.color}
              colorName={color.name}
              handleClick={() => removeColor(color.name)}
            ></DraggableColorBox>
          );
        })}
      </div>
    )
})

export default DraggableColorList;