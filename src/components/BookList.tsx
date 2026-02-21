import { Book } from "../types/Book";
import BookItem from "./BookItem";

interface Props {
  books: Book[];
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, currentStatus: "Lido" | "Não lido") => void;
}

export default function BookList({ books, onDelete, onToggleStatus }: Props) {
  if (books.length === 0) {
    return <p>Nenhum livro cadastrado ainda.</p>;
  }

  return (
    <ul>
      {books.map((book) => (
        <BookItem
          key={book._id}
          book={book}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </ul>
  );
}
