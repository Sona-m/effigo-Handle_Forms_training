import React, { useState } from "react";

const BookEdit = ({ onSubmit, book }) => {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleChange = (e) => {
    setNewTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(book.id, newTitle);
  };
  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          value={newTitle}
          onChange={handleChange}
        />
        <button className="button is-primary">Save</button>
      </form>
    </div>
  );
};

export default BookEdit;
