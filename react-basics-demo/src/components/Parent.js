import Child from "./Child";

function Parent() {
  function greet() {
    alert("Hello from Parent");
  }

  return (
    <div>
      <h2>Parent Component</h2>
      <Child greet={greet} />
    </div>
  );
}

export default Parent;
