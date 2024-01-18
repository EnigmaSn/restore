import React, { useLayoutEffect } from "react";
import BookList from "../components/book-list";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import { connect } from "react-redux";
import { withBookstoreService } from "../components/hoc";
import { fetchBooks } from "../actions";
import { compose } from "../utils";

const BookListContainer = (props) => {
  useLayoutEffect(() => {
    const { fetchBooks } = props;
    fetchBooks();
  }, []);

  const { books, loading, error } = props;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <BookList books={books} />;
};

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps;

  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
