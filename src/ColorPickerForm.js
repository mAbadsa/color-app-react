import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";

const styles = {
    picker: {
        width: "100% !important",
        marginTop: "2rem"
    },
    addColorBtn: {
        width: "100%",
        padding: "0.6rem",
        marginTop: "0.8rem",
        fontSize: "1.2rem",
        boxSizing: "border-box"
    },
    colorNameInput: {
        width: "100%",
        height: "70px",
        // padding: "0.6rem",
        // marginTop: "0.8rem",
    }
}

class ColorPickerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: "green",
      newColorName: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.updateCurrentColor = this.updateCurrentColor.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    ValidatorForm.addValidationRule("isColorNameUnique", value => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isColorUnique", value => {
      return this.props.colors.every(
        ({ color }) => color !== this.state.currentColor
      );
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  updateCurrentColor(newColor) {
    this.setState({ currentColor: newColor.hex });
  }

  handleSubmit() {
      const newColor = {
          color: this.state.currentColor,
          name: this.state.newColorName
      }

      this.props.addNewColors(newColor);
  }

  render() {
    const {
      paletteIsFull,
      classes
    } = this.props;
    const { newColorName, currentColor } = this.state;
    return (
      <div>
        <ChromePicker
          color={currentColor}
          onChangeComplete={this.updateCurrentColor}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            className={classes.colorNameInput}
            onChange={this.handleChange}
            value={newColorName}
            variant="filled"
            placeholder="Color Name"
            margin="normal"
            name="newColorName"
            validators={["required", "isColorNameUnique", "isColorUnique"]}
            errorMessages={[
              "This field is required",
              "Color name must be unique",
              "Color is already used!"
            ]}
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={paletteIsFull}
            className={classes.addColorBtn}
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentColor
            }}
          >
            {paletteIsFull ? "Palette Full" : "Add Color"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(ColorPickerForm);
