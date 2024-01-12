import React from "react";
import BookList from "../book-list/book-list";

const HomePage = () => {
  const books = [
    { id: 1, title: "Harry Potter and FS", author: "JKR" },
    { id: 2, title: "Harry Potter and CS", author: "JKR" },
  ];

  return (
    <>
      <h2>HomePage</h2>
      <BookList books={books}></BookList>
    </>
  );
};

export default HomePage;
