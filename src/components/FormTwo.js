import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Card from "@material-ui/core/Card";

class FormOne extends Component {
  continue = e => {
    this.props.nextStep();
  };

  back = () => {
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    
    return (
      <Card style={styles.card}>
        <AppBar title="Enter Personal Details" />
        <TextField
          hintText="Enter your Ocupation"
          floatingLabelText="Ocupation"
          onChange={handleChange("ocupation")}
          defaultValue={values.ocupation}
        />
        <br />
        <TextField
          hintText="Enter your City"
          floatingLabelText="City"
          onChange={handleChange("city")}
          defaultValue={values.city}
        />
        <br />
        <TextField
          hintText="Enter your Bio"
          floatingLabelText="Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={this.continue}
        />
        <RaisedButton
          label="Back"
          primary={false}
          style={styles.button}
          onClick={this.back}
        />
      </Card>
    );
  }
}

const styles = {
  button: {
    margin: 15
  },
  card: {
    minWidth: "320px",
    width: "100%",
    maxWidth: "450px",
    margin: "auto",
    minHeight: "400px"
  }
};

export default FormOne;
