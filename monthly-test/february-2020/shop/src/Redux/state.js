import { createStore, combineReducers } from "redux";

let shopdetails = [
    {
        name: "Yusuf",
        area: "Padmanabhanagar",
        category: "Baker",
        opening: "03-03-2020",
        closing: "10-03-2020"
    },
    {
        name: "Asif",
        area: "Uttarahalli",
        category: "Chemist",
        opening: "04-03-2020",
        closing: "09-03-2020"
    }
] 

let appState = {
  shops: { name: "", area: "Jayanagar", category: "Grocery", opening: "", closing: "" },
  name: [],
  areas: [
    "Jayanagar",
    "Basavanagudi",
    "JP Nagar",
    "Padmanabhanagar",
    "Banashankari",
    "Uttarahalli",
    "Kumaraswamy",
    "Girinagar"
  ],
  category: [
    "Grocery",
    "Butcher",
    "Baker",
    "Chemist",
    "Stationery shop",
    "Hardware shop",
    "Flower",
    "Newsagent",
    "Furniture"
  ],
  opening: "",
  closing: "",
  shopdetails: [...shopdetails],
  shopdetailsCopy: [...shopdetails]
};

function appReducer(state = appState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case "SetShop":
      stateCopy.shops.name = action.payload;
      return stateCopy;

    case "SetArea":
      stateCopy.shops.area = action.payload;
      return stateCopy;

    case "SetCategory":
      stateCopy.shops.category = action.payload;
      return stateCopy;

    case "SetOpening":
      stateCopy.shops.opening = action.payload;
      return stateCopy;

    case "SetClosing":
      stateCopy.shops.closing = action.payload;
      return stateCopy;

    case "AddShop":
      let shop = {};
      shop.name = stateCopy.shops.name;
    //   console.log(shop.name);
      shop.area = stateCopy.shops.area;
      shop.category = stateCopy.shops.category;
      shop.opening = stateCopy.shops.opening;
      shop.closing = stateCopy.shops.closing;
      stateCopy.shopdetails.push(shop);
      return stateCopy

      case "SetAreaDisplay":
        let shopdetailsCopy = stateCopy.shopdetailsCopy.slice();
        shopdetailsCopy = shopdetailsCopy.filter(shopdetail => shopdetail.area == action.payload);
        // console.log(shopdetails)
        stateCopy.shopdetails = shopdetailsCopy;
        // console.log(stateCopy.shopdetails)
        return stateCopy

        case "SetCategoryDisplay":
        let shopdetailsCopy1 = stateCopy.shopdetailsCopy.slice();
        shopdetailsCopy1 = shopdetailsCopy1.filter(shopdetail => shopdetail.category == action.payload);
        // console.log(shopdetails)
        stateCopy.shopdetails = shopdetailsCopy1;
        // console.log(stateCopy.shopdetails)
        return stateCopy

  }
  return state;
}

const rootReducers = combineReducers({
  app: appReducer
});

const store = createStore(rootReducers);

export default store;
