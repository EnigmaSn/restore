import React from "react";
import BookListItem from "../book-list-item";
import "./book-list.scss";

const BookList = ({ books }) => {
  return (
    <ul className="book-list">
      {books?.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
