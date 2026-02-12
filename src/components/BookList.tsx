
import { Book } from "../types/Book";
import BookItem from "./BookItem";

interface Props {
  books: Book[];
  onDelete: (id: string) => void;
}

export default function BookList({ books, onDelete }: Props) {
  return (
    <ul>
      {books.map((book) => (
        <BookItem key={book._id} book={book} onDelete={onDelete} />
      ))}
    </ul>
  );
}
