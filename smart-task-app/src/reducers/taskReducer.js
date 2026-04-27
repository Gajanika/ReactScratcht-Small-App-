export const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload, done: false }];

    case "DELETE":
      return state.filter(t => t.id !== action.payload);

    case "TOGGLE":
      return state.map(t =>
        t.id === action.payload ? { ...t, done: !t.done } : t
      );

    default:
      return state;
  }
};