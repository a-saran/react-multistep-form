import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import { List, ListItem } from "material-ui/List";
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
    const {
      values: { firstName, lastName, occupation, city, bio, email }
    } = this.props;

    return (
      <Card style={styles.card}>
        <AppBar title="Confirm User Details" />
        <List>
          <ListItem primaryText="First Name" secondaryText={firstName} />
          <ListItem primaryText="Last Name" secondaryText={lastName} />
          <ListItem primaryText="Email" secondaryText={email} />
          <ListItem primaryText="Bio" secondaryText={bio} />
          <ListItem primaryText="occupation" secondaryText={occupation} />
          <ListItem primaryText="City" secondaryText={city} />
        </List>
        <RaisedButton
          label="confirm & Continue"
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
