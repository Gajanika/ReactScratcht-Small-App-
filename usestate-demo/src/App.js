import { useState } from "react";

function App() {

  // 1️ useState with previous state (Counter)
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // 2️ useState with Object (User Form)
  const [user, setUser] = useState({
    name: "",
    age: ""
  });

  const handleChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name]: e.target.value
    }));
  };

  // 3️ useState with Array (Todo List)
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState("");

  const addTodo = () => {
    if (task === "") return;

    setTodos(prevTodos => [...prevTodos, task]);
    setTask("");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h1> useState Demo Project</h1>

      {/* 1. Previous State */}
      <hr />
      <h2>1️ Counter (Previous State)</h2>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>

      {/* 2. Object State */}
      <hr />
      <h2>2️ User Form (Object State)</h2>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={user.name}
        onChange={handleChange}
      />

      <br /><br />

      <input
        type="number"
        name="age"
        placeholder="Enter age"
        value={user.age}
        onChange={handleChange}
      />

      <p>
         Name: <b>{user.name}</b> <br />
         Age: <b>{user.age}</b>
      </p>

      {/* 3. Array State */}
      <hr />
      <h2>3️ Todo List (Array State)</h2>

      <input
        type="text"
        value={task}
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />

      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
