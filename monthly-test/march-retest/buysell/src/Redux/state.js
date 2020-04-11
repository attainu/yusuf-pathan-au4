import { createStore } from 'redux';

let initialstate = {
  productdata: '',
  productdataCopy: '',
  categories: '',
  cities: '',
};

function appReducer(state = initialstate, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  let filtereddata
  switch (action.type) {
    case 'productdata':
      stateCopy.productdata = action.payload;
      stateCopy.productdataCopy = action.payload;
      return stateCopy;
    case 'cities':
      stateCopy.cities = action.payload;
      return stateCopy;
    case 'categories':
      stateCopy.categories = action.payload;
      return stateCopy;
    case 'filtercategory':
      stateCopy.productdata = stateCopy.productdataCopy;
      console.log(stateCopy.productdata);
      filtereddata = stateCopy.productdata.filter((productdata) => {
        return productdata.category.indexOf(action.payload) !== -1;
      });
      stateCopy.productdata = filtereddata;
      return stateCopy;

    case 'filtercity':
      stateCopy.productdata = stateCopy.productdataCopy;
      console.log(stateCopy.productdata);
      filtereddata = stateCopy.productdata.filter((productdata) => {
        return productdata.city.indexOf(action.payload) !== -1;
      });
      stateCopy.productdata = filtereddata;
      return stateCopy;

    default:
      return state;
  }
}

const store = createStore(appReducer);

export default store;
