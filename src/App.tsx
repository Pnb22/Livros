import { useEffect, useState } from "react";
import { Book } from "./types/Book";
import BookForm from "./components/BookForm";
import BookList from "./components/BookList";
import { getBooks, addBook, deleteBook, updateBook } from "./services/bookService";

function App() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {
    try {
      setLoading(true);
      const response = await getBooks();
      setBooks(response.data);
    } catch (err) {
      setError("Erro ao carregar livros. Verifique a URL da API.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  async function handleAdd(book: Book) {
    try {
      await addBook(book);
      await loadBooks();
    } catch (err) {
      setError("Erro ao adicionar livro.");
      console.error(err);
    }
  }

  async function handleDelete(id: string) {
    try {
      await deleteBook(id);
      await loadBooks();
    } catch (err) {
      setError("Erro ao remover livro.");
      console.error(err);
    }
  }

  async function handleToggleStatus(
    id: string,
    currentStatus: "Lido" | "Não lido"
  ) {
    const newStatus = currentStatus === "Lido" ? "Não lido" : "Lido";
    const book = books.find((b) => b._id === id);
    if (!book) return;
    try {
      await updateBook(id, { title: book.title, author: book.author, status: newStatus });
      await loadBooks();
    } catch (err) {
      setError("Erro ao atualizar status.");
      console.error(err);
    }
  }

  return (
    <div>
      <h1>Catálogo de Livros</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <BookForm onAdd={handleAdd} />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <BookList
          books={books}
          onDelete={handleDelete}
          onToggleStatus={handleToggleStatus}
        />
      )}
    </div>
  );
}

export default App;
