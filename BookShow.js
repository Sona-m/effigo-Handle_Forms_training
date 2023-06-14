import React, { useState } from "react";
import BookEdit from "./BookEdit";

const BookShow = ({ book, onDelete, onUpdate }) => {
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    onDelete(book.id);
  };

  const handleEditClick = () => {
    setEdit(!edit); //true
  };

  const handleSubmit = (id, newTitle) => {
    setEdit(!edit); //false
    onUpdate(id, newTitle);
  };
  return (
    <div className="book-show" >
      <img
        src={`https://picsum.photos/seed/${book.id}/300/200`}
        alt={book.title}
      />
      <h1>
        {edit ? <BookEdit onSubmit={handleSubmit} book={book} /> : book.title}
      </h1>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookShow;
