const initialState = [
  { id: 1, title: "Harry Potter and FS", author: "JKR" },
  { id: 2, title: "Harry Potter and CS", author: "JKR" },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return { books: action.payload };
    default:
      return state;
  }
};

export default reducer;
