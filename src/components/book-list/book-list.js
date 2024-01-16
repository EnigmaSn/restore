import React, { useLayoutEffect } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

import { withBookstoreService } from "../hoc";
import { booksLoaded } from "../../actions";
import { compose } from "../../utils";

import "./book-list.scss";

const BookList = (props) => {
  const { books } = props;

  useLayoutEffect(() => {
    const { bookstoreService, booksLoaded } = props;

    // 1. receive data
    const data = bookstoreService.getBooks();
    // 2. dispacth action to store
    booksLoaded(data);
  }, []);

  return (
    <ul>
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

const mapStateToProps = (state) => {
  return { books: state.books };
};

const mapDispatchToProps = {
  booksLoaded,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
