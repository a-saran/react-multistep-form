import React, { Component } from "react";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import Confirm from "./Confirm";
import Success from "./Success";

class Userform extends Component {
  state = {
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    ocupation: "",
    city: "",
    bio: ""
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  handleChange = input => e => this.setState({ [input]: e.target.value });

  render() {
    const { step } = this.state;
    const { firstName, lastName, email, occupation, city, bio } = this.state;
    const values = {
      firstName,
      lastName,
      email,
      occupation,
      city,
      bio
    };

    switch (step) {
      case 1:
        return (
          <FormOne
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormTwo
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
      case 4:
        return <Success />;
      default:
        return <h1>you are done</h1>;
    }
  }
}

export default Userform;
