import React, { useLayoutEffect } from "react";
import { bindActionCreators } from "redux";
import BookList from "../components/book-list";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";
import { connect } from "react-redux";
import { withBookstoreService } from "../components/hoc";
import { fetchBooks, bookAddedToCart } from "../actions";
import { compose } from "../utils";

const BookListContainer = (props) => {
  useLayoutEffect(() => {
    const { fetchBooks } = props;
    fetchBooks();
  }, []);

  const { books, loading, error, onAddedToCart } = props;

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return <BookList books={books} onAddedToCart={onAddedToCart} />;
};

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedToCart: bookAddedToCart,
    },
    dispatch
  );
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);
