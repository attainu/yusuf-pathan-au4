import React from "react";

class Order extends React.Component {
  state = {
    id: "",
    user_name: "",
    user_mobile: "",
    items: "",
    total: "",
    payment: "",
    waiter_id: "",
    table_id: ""
  };

  async componentDidMount() {
    const url = "http://localhost:5000/bills";
    const res = await fetch(url);
    const data = await res.json();
    data.map(order => {
      console.log(order);
      this.setState({
        id: order.id,
        user_name: order.user_name,
        user_mobile: order.user_mobile,
        items: order.items,
        total: order.total,
        payment: order.payment,
        waiter_id: order.waiter_id,
        table_id: order.table_id
      });
    });
    console.log(data);
  }

  render() {
    return <div></div>;
  }
}

export default Order;
