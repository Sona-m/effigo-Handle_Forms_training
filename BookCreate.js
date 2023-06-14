import React, { useState } from "react";

const BookCreate = ({ onCreate }) => {
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onCreate({ id: Math.floor(Math.random() * 1000), title: title });
    setTitle("");
  };
  return (
    <div className="book-create" style={{zIndex:"20 !important"}}>
      <h3>Add a Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          className="input"
          type="text"
          onChange={handleChange}
          value={title}
        />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};

export default BookCreate;
