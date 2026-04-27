import React, { useReducer, useEffect } from "react";

const initialState = {
  loading: true,
  user: "",
  error: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "success":
      return { loading: false, user: action.data, error: "" };
    case "error":
      return { loading: false, user: "", error: "Error" };
    default:
      return state;
  }
}

export default function FetchUser() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) =>
        dispatch({ type: "success", data: data.name })
      )
      .catch(() => dispatch({ type: "error" }));
  }, []);

  return (
    <div>
      {state.loading ? "Loading..." : state.user}
    </div>
  );
}