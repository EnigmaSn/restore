import React from "react";

const BookListItem = (props) => {
  const { title, author } = props.book;
  return (
    <>
      <p>
        <b>Title:</b> {title}{" "}
      </p>
      <p>
        <b>Author:</b> {author}{" "}
      </p>
    </>
  );
};

export default BookListItem;
