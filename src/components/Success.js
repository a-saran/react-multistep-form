import React from "react";
import AppBar from "material-ui/AppBar";
import Card from "@material-ui/core/Card";

const Success = () => (
  <Card style={styles.card}>
    <AppBar title="Confirm User Details" />
    <h1>Thank You For Your Submission</h1>
    <p>You will get an email with furthuer instructions</p>
  </Card>
);

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

export default Success;
