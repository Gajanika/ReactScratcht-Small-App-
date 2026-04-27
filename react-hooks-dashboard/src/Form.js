import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    default:
      return state;
  }
}

export default function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h3>Form</h3>

      <input
        placeholder="Name"
        onChange={(e) =>
          dispatch({ type: "name", value: e.target.value })
        }
      />

      <input
        placeholder="Email"
        onChange={(e) =>
          dispatch({ type: "email", value: e.target.value })
        }
      />

      <p>{state.name}</p>
      <p>{state.email}</p>
    </div>
  );
}