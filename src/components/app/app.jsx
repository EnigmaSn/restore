import React from "react";
import { withBookstoreService } from "../hoc/";
import "./app.scss";

function App({ bookstoreService }) {
  console.log(bookstoreService.getBooks());
  return (
    <>
      <p>App component!</p>
    </>
  );
}

export default withBookstoreService()(App);
