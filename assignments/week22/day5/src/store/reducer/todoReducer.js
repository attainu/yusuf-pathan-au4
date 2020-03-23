function todoReducer(state = [], action) {
  if (action.type === "ADD_TODO") {
    state = [...state, action.data];
  }
  if (action.type === "DELETE_TODO") {
    state = state.filter(obj => obj.todo !== action.data);
  }
  if (action.type === "COMPLETED") {
    state = state.map(obj => {
      if (obj.todo === action.data) {
        obj.completed = !obj.completed;
      }
      return obj;
    });
  }
  if (action.type === "EDIT_TODO") {
    state = state.map(obj => {
      if (obj.todo === action.data.toEdit) {
        obj.todo = action.data.todo;
        obj.date = action.data.date;
      }
      return obj;
    });
  }
  return state;
}

export default todoReducer;
