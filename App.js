import { useState } from "react";
import "./App.css";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

function App() {
  const [books, setBooks] = useState([]);

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  const createBook = (bookObj) => {
    console.log(bookObj);
    setBooks([...books, bookObj]);
  };

  const updateBook = (id, newTitle) => {
    setBooks(
      books.map((book) =>
        book.id === id ? { ...book, title: newTitle } : book
      )
    );
  };

  console.log(books);

  return (
    <div className="App">
      <h1 style={{ fontSize: "2.5em", color: "#00d1b2", margin: "30px" }}>
        <b>Reading List</b>
      </h1>
      <BookList books={books} onDelete={deleteBook} onUpdate={updateBook} />
      <BookCreate onCreate={createBook} />
    </div>
  );
}

export default App;
