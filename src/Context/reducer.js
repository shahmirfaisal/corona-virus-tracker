const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_GLOBAL_CASES":
      return {
        ...state,
        globalCases: action.data
      };

    case "ADD_COUNTRIES":
      return {
        ...state,
        countries: action.data
      };

    case "UPDATE_FETCHING":
      return {
        ...state,
        fetchingData: action.data
      };

    case "ERROR":
      return {
        ...state,
        error: action.data
      };
  }

  return state;
};
export default reducer;
