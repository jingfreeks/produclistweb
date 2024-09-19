import React from "react";
import { ProductDetails, Product } from "./screens";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/:prodId" element={<ProductDetails />} />
    </Routes>
  );
}

export default App;
