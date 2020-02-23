import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Card from "@material-ui/core/Card";

class FormOne extends Component {
  continue = () => {
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;

    return (
      <Card style={styles.card}>
        <AppBar title="Enter User Details" />
        <TextField
          hintText="Enter your First Name"
          floatingLabelText="First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
        />
        <br />
        <TextField
          hintText="Enter your Last Name"
          floatingLabelText="Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
        />
        <br />
        <TextField
          hintText="Enter your Email"
          floatingLabelText="Email"
          onChange={handleChange("email")}
          defaultValue={values.email}
        />
        <br />
        <RaisedButton
          label="Continue"
          primary={true}
          style={styles.button}
          onClick={this.continue}
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
