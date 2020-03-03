import React from "react";
import { connect } from "react-redux";

class Input extends React.Component {
  handleShopInput = shop => {
    this.props.dispatch({
      type: "SetShop",
      payload: shop
    });
  };

  handleAreaSelection = area => {
    this.props.dispatch({
      type: "SetArea",
      payload: area
    });
  };

  handleCategorySelection = category => {
    this.props.dispatch({
      type: "SetCategory",
      payload: category
    });
  };

  handleOpening = opening => {
    this.props.dispatch({
      type: "SetOpening",
      payload: opening
    });
  };

  handleClosing = closing => {
    this.props.dispatch({
      type: "SetClosing",
      payload: closing
    });
  };

  handleSubmit = () => {
    this.props.dispatch({
        type: "AddShop"
    })
  };

  render() {
    return (
      <div
        style={{
          border: "2px solid black",
          padding: "2rem",
          margin: "2rem",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <input
          type="text"
          placeholder="Enter Shop name"
          onChange={e => {
            this.handleShopInput(e.target.value);
          }}
        />
        <select
          //   value={this.props.areas}
          onChange={e => this.handleAreaSelection(e.target.value)}
        >
          {this.props.areas &&
            this.props.areas.map(area => {
              return <option key={area}>{area}</option>;
            })}
        </select>
        <select
          //   value={this.props.category}
          onChange={e => this.handleCategorySelection(e.target.value)}
        >
          {this.props.category &&
            this.props.category.map(category => {
              return <option key={category}>{category}</option>;
            })}
        </select>
        <input type="date" onChange={e => this.handleOpening(e.target.value)} />
        <input type="date" onChange={e => this.handleClosing(e.target.value)} />
        <button onClick = { () => this.handleSubmit() } >Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
 
  return {
    areas: state.app.areas,
    category: state.app.category
  };
};

export default connect(mapStateToProps)(Input);
