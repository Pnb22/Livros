import { Book } from "../types/Book";

interface Props {
  book: Book;
  onDelete: (id: string) => void;
  onToggleStatus: (id: string, currentStatus: "Lido" | "Não lido") => void;
}

export default function BookItem({ book, onDelete, onToggleStatus }: Props) {
  return (
    <li>
      <strong>{book.title}</strong> - {book.author}{" "}
      <em>({book.status})</em>
      <button onClick={() => onToggleStatus(book._id!, book.status)}>
        {book.status === "Lido" ? "Marcar como Não lido" : "Marcar como Lido"}
      </button>
      <button onClick={() => onDelete(book._id!)}>Remover</button>
    </li>
  );
}
