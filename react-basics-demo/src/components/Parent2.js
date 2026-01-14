import Child2 from "./Child2";

function Parent2() {
  function greetParent2() {
    alert("Hello from Parent2 Component 👋");
  }

  return (
    <div>
      <h2>Parent2 Component</h2>
      <Child2 greet={greetParent2} />
    </div>
  );
}

export default Parent2;
