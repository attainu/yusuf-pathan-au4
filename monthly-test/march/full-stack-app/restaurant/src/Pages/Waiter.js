import React from "react";

class Waiter extends React.Component {
  state = {
    id: "",
    name: "",
    age: "",
    mobile: "",
    ratings:"",
    experience:""
  };

  async componentDidMount() {
    const url = "http://localhost:5000/waiters";
    const res = await fetch(url);
    const data = await res.json();
    data.map(waiter => {
      console.log(waiter);
      this.setState({
        id: waiter.id,
        name: waiter.item,
        age: waiter.cuisine,
    mobile: waiter.veg,
        ratings: waiter.price,
        experience: waiter.experience
      });
    });
    console.log(data);
  }

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Waiter;
