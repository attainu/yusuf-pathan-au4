/* eslint-disable no-unused-expressions */

import React from 'react';
import axios from 'axios';

class Sell extends React.Component {
  state = {
    productname: '',
    productprice: '',
    discountprice: '',
    sellername: '',
    sellernumber: '',
    category: '',
    city: '',
    cities: '',
    categories: '',
  };

  HandleSubmit = (e) => {
    
    axios
      .post('http://localhost:5000/seller', this.state)
      .then((res) => {
        alert("Product added successfully");
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  HandleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };

  componentDidMount() {
    axios.get('http://localhost:5000/cities').then((res) => {
      console.log(res.data);
      this.setState({
        cities: res.data,
      });
    });

    axios.get('http://localhost:5000/categories').then((res) => {
      console.log(res.data);
      this.setState({
        categories: res.data,
      });
    });
  }

  render() {
    return (
      <div>
        <div className='container mt-5'>
          <div className='card offset-md-3' style={{ width: '30rem' }}>
            <div className='card-body p-1'>
              <h4 className='display-4 ml-4'>Sell</h4>
              <form onSubmit={this.HandleSubmit}>
                <div className='form-group col-md-8 offset-md-2'>
                  <br />
                  <input
                    className='form-control'
                    type='text'
                    placeholder='productname'
                    id='productname'
                    required
                    name='productname'
                    onChange={this.HandleChange}
                  />
                </div>
                <div className='form-group col-md-8 offset-md-2 mt-4'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='productprice'
                    id='productprice'
                    required
                    name='productprice'
                    onChange={this.HandleChange}
                  />
                </div>
                <div className='form-group col-md-8 offset-md-2 mt-4'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='discountprice'
                    id='discountprice'
                    required
                    name='discountprice'
                    onChange={this.HandleChange}
                  />
                </div>
                <div className='form-group col-md-8 offset-md-2 mt-4'>
                  <select name='category' onClick={this.HandleChange}>
                    {this.state.categories &&
                      this.state.categories.map((category) => {
                        return (
                          <option key={category.id}>{category.category}</option>
                        );
                      })}
                  </select>
                </div>
                <div className='form-group col-md-8 offset-md-2 mt-4'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='sellername'
                    id='sellername'
                    required
                    name='sellername'
                    onChange={this.HandleChange}
                  />
                </div>
                <div className='form-group col-md-8 offset-md-2 mt-4'>
                  <input
                    className='form-control'
                    type='text'
                    placeholder='sellernumber'
                    id='sellernumber'
                    required
                    name='sellernumber'
                    onChange={this.HandleChange}
                  />
                </div>
                <div className='form-group col-md-8 offset-md-2 mt-4'>
                  <select name='city' onClick={this.HandleChange}>
                    {this.state.cities &&
                      this.state.cities.map((city) => {
                        return <option key={city.id}>{city.city}</option>;
                      })}
                  </select>
                </div>
                <div>
                  <button className='btn col-md-8 offset-md-2 mt-4' id='login'>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Sell;
