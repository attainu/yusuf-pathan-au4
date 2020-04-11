import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Buy from './Buy';
import Sell from './Sell';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <BrowserRouter>
          <div className='col-md-6'>
            <Link to='/buy'>
              <button className='btn-success'>Buy</button>
            </Link>
          </div>
          <div className='col-md-6'>
            <Link to='/sell'>
              <button className='btn-success'>Sell</button>
            </Link>
          </div>

          <Route path='/buy'>
            <Buy />
          </Route>
          <Route path='/sell'>
            <Sell />
          </Route>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
