export const userReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { loading: true, users: [], error: null };

    case "FETCH_SUCCESS":
      return { loading: false, users: action.payload, error: null };

    case "FETCH_ERROR":
      return { loading: false, users: [], error: "Error fetching data" };

    default:
      return state;
  }
};