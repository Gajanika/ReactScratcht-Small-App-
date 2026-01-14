import Child from "./components/Child";
import Counter from "./components/Counter";
import EventDemo from "./components/EventDemo";
import ClassDemo from "./components/ClassDemo";
import Child2 from "./components/Child2";
import Parent2 from "./components/Parent2";
function App() {
  return (
    <div>
      <h1>Step 2 – State Destructuring</h1>
      <Child name="Gajanika" age={22} />
      <Counter />
      <EventDemo />
      <ClassDemo/>
      <Child2/>
      <Parent2 />

    </div>
  );
}

export default App;
