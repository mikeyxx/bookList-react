import { useState } from 'react'
import Header from "./Components/Header";
import AddBooks from "./Components/AddBooks";
import Table from "./Components/Table";

function App() {
  const [books, setBook] = useState([
    
  ])

  const addBook = (book) => {
    const id = Date.now().toString()
    const newBook = {id, ...book}
    setBook([...books, newBook])
  }

  const deleteBook = (isbn) => {
    setBook(books.filter(book => book.isbn !== isbn))
  }

  return (
    <div className="container">
      <Header />
      <AddBooks addBooks={addBook} />
      <Table books={books} onDelete={deleteBook} />
    </div>
  );
}

export default App;