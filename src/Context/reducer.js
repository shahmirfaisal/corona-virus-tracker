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
        countries: action.data,
        fullCountries: action.data
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

    case "SEARCH_COUNTRY":
      return {
        ...state,
        countries: state.fullCountries.filter(v =>
          v.country.toLowerCase().startsWith(action.data.toLowerCase().trim())
        )
      };

    case "REMOVE_FILTER":
      return {
        ...state,
        countries: state.fullCountries
      };
  }

  return state;
};
export default reducer;
