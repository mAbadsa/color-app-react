import React from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
import { SortableElement } from "react-sortable-hoc";
import styles from './styles/DraggableColorBoxStyles';

const  DraggableColorBox = SortableElement((props) => {
  const { classes, handleClick, color, colorName } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.boxContent}>
        <span>{colorName}</span>
        <span>
          <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
        </span>
      </div>
    </div>
  );
})

export default withStyles(styles)(DraggableColorBox);
