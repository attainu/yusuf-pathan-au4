import { createStore } from 'redux';

let initialState = {
  taskname: '',
};

function appReducerFunction(state = initialState, action) {
  let stateCopy = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'taskname':
      stateCopy.taskname = action.payload;
      console.log(stateCopy.taskname)
      return stateCopy;
    default:
      return stateCopy;
  }
}

const store = createStore(appReducerFunction);

export default store;
