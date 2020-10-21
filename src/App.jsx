import React from "react";
import "./App.scss";

// Components
import { ThemeProvider, createMuiTheme } from "@material-ui/core";

// Pages
import Home from "./pages/Home/Home";

// Theme
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

function App() {
  return (
    <div className="App" theme="dark">
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}

export default App;
