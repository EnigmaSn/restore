import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";

class BookList extends Component {
  render() {
    const { books } = this.props;

    return (
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book}></BookListItem>
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return { books: state };
};

export default connect(mapStateToProps, {})(BookList);
