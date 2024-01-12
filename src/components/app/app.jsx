import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage, CartPage } from "../pages";
import "./app.scss";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<HomePage></HomePage>}></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route path="*" element={<h1>Page not found.</h1>}></Route>
      </Routes>
    </>
  );
}

export default App;
