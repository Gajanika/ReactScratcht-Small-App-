import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductApp() {

  //  state
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // GET: page load
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data.slice(0, 5)); // 5 products only
      });
  }, []);

  //    POST: add product
  const addProduct = () => {
    axios.post("https://fakestoreapi.com/products", {
      title: name,
      price: price
    }).then((res) => {
      alert("Product added (fake API)");
      setProducts([...products, res.data]);
      setName("");
      setPrice("");
    });
  };

  return (
    <div>
      <h2>🛒 Product App</h2>

      {/* Add Product */}
      <input
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={addProduct}>Add Product</button>

      <hr />

      {/* Product List */}
      {products.map((p) => (
        <div key={p.id}>
          <h4>{p.title}</h4>
          <p>₹ {p.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductApp;
