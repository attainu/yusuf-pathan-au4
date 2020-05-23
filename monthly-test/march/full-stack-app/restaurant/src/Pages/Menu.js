import React from "react";

class Menu extends React.Component {
  state = {
    id: "",
    item: "",
    cuisine: "",
    veg: "",
    price: ""
  };

  async componentDidMount() {
    const url = "http://localhost:5000/menus";
    const res = await fetch(url);
    const data = await res.json();
    data.map(menu => {
      console.log(menu);
      this.setState({
        id: menu.id,
        item: menu.item,
        cuisine: menu.cuisine,
        veg: menu.veg,
        price: menu.price
      });
    });
    console.log(data);
  }

  render() {
    return <div></div>;
  }
}

export default Menu;
