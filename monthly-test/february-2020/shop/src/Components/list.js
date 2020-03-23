import React from "react";
import { connect } from "react-redux";

class List extends React.Component {
  setArea = area => {
    //   console.log(area)
    this.props.dispatch({
      type: "SetAreaDisplay",
      payload: area
    });
  };

  setCategory = category => {
    this.props.dispatch({
      type: "SetCategoryDisplay",
      payload: category
    });
  };

  render() {
    return (
      <div>
        <div className="row"
          style={{
            border: "2px solid black",
            padding: "2rem",
            display: "flex",
            justifyContent: "space-between",
            margin: "2rem"
          }}
        >
          <select
            //   value={this.props.areas}
            onChange={e => this.setArea(e.target.value)}
          >
            {this.props.areas &&
              this.props.areas.map(area => {
                return <option key={area}>{area}</option>;
              })}
          </select>
          <select
            //   value={this.props.category}
            onChange={e => this.setCategory(e.target.value)}
          >
            {this.props.category &&
              this.props.category.map(category => {
                return <option key={category}>{category}</option>;
              })}
          </select>
        </div>
        <div className = "row">
        <ul>
          { this.props.shopdetails.map((shopdetail, index) =>{
            return (
                
            <li key={index}>{shopdetail.name} -- {shopdetail.area} -- {shopdetail.category} -- {shopdetail.opening} -- {shopdetail.closing}</li>
            );
          }) }
        </ul>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
    return {
      shopdetails: state.app.shopdetails,
    areas: state.app.areas,
    category: state.app.category
  };
};

export default connect(mapStateToProps)(List);
