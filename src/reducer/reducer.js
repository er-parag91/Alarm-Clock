const initialState = {
  date: new Date(),
  alarmTime: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TIME":
      return {
        ...state,
        date: new Date()
      };
    case "SET_ALARM":
      return {
        ...state,
        alarmTime: action.time
      };
  }
  return state;
};

export default reducer;
