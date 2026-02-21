import { useState } from "react";
import { Book } from "../types/Book";

interface Props {
  onAdd: (book: Book) => void;
}

export default function BookForm({ onAdd }: Props) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState<"Lido" | "Não lido">("Não lido");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;
    onAdd({ title, author, status });
    setTitle("");
    setAuthor("");
    setStatus("Não lido");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as "Lido" | "Não lido")}
      >
        <option value="Lido">Lido</option>
        <option value="Não lido">Não lido</option>
      </select>
      <button type="submit">Adicionar</button>
    </form>
  );
}
