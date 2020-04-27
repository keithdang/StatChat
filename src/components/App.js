import React from "react";
import logo from "../logo.svg";
import Header from "./Header";
import AddName from "../containers/AddName";
import VisibleNameList from "../containers/VisibleNameList";
import Results from "../containers/Results";
import "../App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Input-Div">
          <Header />
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="Input-Div">
          <div>
            <AddName />
            <VisibleNameList />
          </div>
          <Results />
        </div>
      </header>
    </div>
  );
}

export default App;
