import React from "react";
import Input from "./Components/input";
import List from "./Components/list";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Input />
        <List />
      </div>
    );
  }
}

export default App;
