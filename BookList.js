import React from "react";
import BookShow from "./BookShow";

const BookList = ({ books, onDelete, onUpdate }) => {
  return (
    <div className="book-list" style={{marginBottom : '250px'}}>
      {books.map((book) => (
        <BookShow
          key={book.id}
          book={book}
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};
export default BookList;
