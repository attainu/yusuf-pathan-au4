import React from "react";

class Table extends React.Component {
  state = {
    id: "",
    strength: "",
    name: "",
    floor_number: ""
  };

  async componentDidMount() {
    const url = "http://localhost:5000/tables";
    const res = await fetch(url);
    const data = await res.json();
    data.map(table => {
      console.log(table, "single table");
      this.setState({
        id: table.id,
        strength: table.strength,
        name: table.name,
        floor_number: table.floor_number
      });
    });
  }

  render() {
    return (
      <div>
        { }
      </div>
    );
  }
}

export default Table;
