import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import ShopHeader from "../shop-header";
import "./app.scss";

function App() {
  return (
    <div className="container">
      <ShopHeader numItems={5} total={210} />
      <Routes>
        <Route path="/" exact element={<HomePage></HomePage>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="*" element={<h1>Page not found.</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;
