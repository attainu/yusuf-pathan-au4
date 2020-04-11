/* eslint-disable no-unused-expressions */

import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Buy extends React.Component {
  componentDidMount() {
    axios
      .get('http://localhost:5000/seller')
      .then((res) => {
        this.props.dispatch({
          type: 'productdata',
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios.get('http://localhost:5000/cities').then((res) => {
      this.props.dispatch({
        type: 'cities',
        payload: res.data,
      });
    });

    axios.get('http://localhost:5000/categories').then((res) => {
      this.props.dispatch({
        type: 'categories',
        payload: res.data,
      });
    });
  }

  SetCategory = (e) => {
    this.props.dispatch({
      type: 'filtercategory',
      payload: e.target.value,
    });
    // let filtereddata = this.state.productdata.filter((productdata) => {
    //   return productdata.category.indexOf(e.target.value) !== -1;
    // });
    // this.setState({
    //   productdata: filtereddata
    // });
  };

  SetCity = (e) => {
    this.props.dispatch({
      type: 'filtercity',
      payload: e.target.value,
    });
  };

  // OnChange = (e) => {
  //   if (e.target.name == 'category') {
  //     this.state.productdata.filter((productdata) => {
  //       return productdata.category.indexOf(this.state.category) !== -1;
  //     });
  //   } else {
  //     this.state.productdata.filter((productdata) => {
  //       return productdata.city.indexOf(this.state.city) !== -1;
  //     });
  //   }
  // };

  // _page(event, previous) {
  //   if (previous) {
  //     this._getUsers(this.state.topId, previous);
  //   } else {
  //     this._getUsers(this.state.bottomId, previous);
  //   }
  // }

  // _getUsers(lastId, previous) {
  //   const json = { lastId: lastId, previous: previous };
  //   fetch(“/api/users/getAllUsers”, {
  //     method: “POST”,
  //     body: JSON.stringify(json)
  //   })

  render() {
    // let filterdata = this.onChange;
    return (
      <div>
        <div className='container mt-5'>
          <div className='card offset-md-1'>
            <div className='card-body p-1'>
              <h4 className='display-4 ml-4'>Buy</h4>
              <div className='form-group col-md-8 offset-md-2'>
                <select name='category' onChange={this.SetCategory}>
                  {this.props.categories &&
                    this.props.categories.map((category) => {
                      return (
                        <option key={category.id}>{category.category}</option>
                      );
                    })}
                </select>
                <select></select>
                <select name='city' onChange={this.SetCity}>
                  {this.props.cities &&
                    this.props.cities.map((city) => {
                      return <option key={city.id}>{city.city}</option>;
                    })}
                </select>
              </div>
              <div className='form-group col-md-8 offset-md-2'>
                <table className='table'>
                  <thead>
                    <tr>
                      <th scope='col'></th>
                      <th scope='col'>Product</th>
                      <th scope='col'>Price</th>
                      <th scope='col'>Last Price</th>
                      <th scope='col'>Category</th>
                      <th scope='col'>Seller Name</th>
                      <th scope='col'>Seller Number</th>
                      <th scope='col'>City</th>
                    </tr>
                  </thead>
                  {this.props.productdata &&
                    this.props.productdata.map((product) => {
                      return (
                        <tbody>
                          <tr>
                            <th scope='row' key={product.id}>
                              {product.id}
                            </th>
                            <td>{product.productname}</td>
                            <td>{product.productprice}</td>
                            <td>{product.discountprice}</td>
                            <td>{product.category}</td>
                            <td>{product.sellername}</td>
                            <td>{product.sellernumber}</td>
                            <td>{product.city}</td>
                          </tr>
                        </tbody>
                      );
                    })}
                </table>
              </div>
              <button>Previous</button>
              <button>Next </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //console.log(state)
  return {
    productdata: state.productdata,
    cities: state.cities,
    categories: state.categories,
  };
};

export default connect(mapStateToProps)(Buy);
