import React, { useEffect, useLayoutEffect } from "react";
import BookListItem from "../book-list-item";
import Spinner from "../spinner";
import { connect } from "react-redux";

import { withBookstoreService } from "../hoc";
import { booksLoaded, booksRequested } from "../../actions";
import { compose } from "../../utils";

import "./book-list.scss";

const BookList = (props) => {
  console.log(props);
  const { books, loading } = props;

  useLayoutEffect(() => {
    const { bookstoreService, booksLoaded, booksRequested } = props;
    booksRequested();
    bookstoreService.getBooks().then((data) => {
      booksLoaded(data);
    });
  }, []);

  if (loading) {
    return <Spinner />;
  }

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

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = {
  booksLoaded,
  booksRequested,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
