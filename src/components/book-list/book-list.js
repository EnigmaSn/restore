import React from "react";
import BookListItem from "../book-list-item";
import "./book-list.scss";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list flex gap-4 items-stretch justify-evenly 2xl:justify-start flex-wrap">
      {books?.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BookList;
