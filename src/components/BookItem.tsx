
import { Book } from "../types/Book";

interface Props {
  book: Book;
  onDelete: (id: string) => void;
}

export default function BookItem({ book, onDelete }: Props) {
  return (
    <li>
      {book.title} - {book.author} ({book.status})
      <button onClick={() => onDelete(book._id!)}>Remover</button>
    </li>
  );
}
