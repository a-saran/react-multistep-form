import React from "react";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import UserForm from "./components/Userform";

function App() {
  return (
    <div className="App">
      <MuiThemeProvider>
        <UserForm />
      </MuiThemeProvider>
    </div>
  );
}

export default App;
