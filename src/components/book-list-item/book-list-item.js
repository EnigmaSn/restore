import React from "react";
import "./book-list-item.scss";

const BookListItem = (props) => {
  const { onAddedToCart } = props;
  const { title, author, price, coverImage } = props.book;
  return (
    // <div className="book-list-item">
    <div className="w-64 max-w-sm h-full p-6 bg-white border border-cyan-200 rounded-lg shadow dark:bg-cyan-800 dark:border-cyan-700">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <a href="#" className="book-title">
          {title}
        </a>
        <div className="book-author">{author}</div>
        <div className="book-price text-2xl font-bold tracking-tight">
          ${price}
        </div>
        <button
          onClick={onAddedToCart}
          className="
          bg-cyan-600 hover:bg-cyan-700
          focus:outline-none
          focus:shadow-sm
          focus:shadow-cyan-500
          text-white
          py-2 px-4
          mb-2
          rounded"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default BookListItem;
