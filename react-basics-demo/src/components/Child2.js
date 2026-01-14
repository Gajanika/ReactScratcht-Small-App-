function Child2({ greet }) {
  return (
    <div>
      <h3>Child2 Component</h3>
      <button onClick={greet}>Greet Parent</button>
    </div>
  );
}

export default Child2;
