
import { useEffect, useState } from "react";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { Book } from "./types/Book";
import { getBooks, addBook, deleteBook } from "./services/bookService";

export default function App() {
  const [books, setBooks] = useState<Book[]>([]);

  const loadBooks = async () => {
    const res = await getBooks();
    setBooks(res.data);
  };

  const handleAdd = async (book: Book) => {
    await addBook(book);
    loadBooks();
  };

  const handleDelete = async (id: string) => {
    await deleteBook(id);
    loadBooks();
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <div>
      <h1>Catálogo de Livros</h1>
      <BookForm onAdd={handleAdd} />
      <BookList books={books} onDelete={handleDelete} />
    </div>
  );
}
 

