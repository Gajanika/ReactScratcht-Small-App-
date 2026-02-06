import React, { useEffect, useState } from "react";
import axios from "axios";

function ProductList() {

  
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h2>🛒 Product List</h2>

      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid gray", margin: 10 }}>
          <h4>{product.title}</h4>
          <p>₹ {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
