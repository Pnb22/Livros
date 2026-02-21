import { useEffect, useState } from "react";

interface Livro {
  _id?: string;
  titulo: string;
  autor: string;
}

const API_URL = "https://crudcrud.com/api/c970be1ead8f4f97a792abae25701603/livros";

function App() {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [titulo, setTitulo] = useState("");
  const [autor, setAutor] = useState("");

  useEffect(() => {
    carregarLivros();
  }, []);

  async function carregarLivros() {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setLivros(data);
    } catch (error) {
      console.error("Erro ao carregar livros:", error);
    }
  }

  async function adicionarLivro() {
    if (!titulo || !autor) return;

    const novoLivro = { titulo, autor };

    try {
      await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(novoLivro),
      });

      setTitulo("");
      setAutor("");
      carregarLivros();
    } catch (error) {
      console.error("Erro ao adicionar livro:", error);
    }
  }

  async function removerLivro(id?: string) {
    if (!id) return;

    try {
      await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      carregarLivros();
    } catch (error) {
      console.error("Erro ao remover livro:", error);
    }
  }

  return (
    <div>
      <h1>Catálogo de Livros</h1>

      <input
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <input
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />

      <button onClick={adicionarLivro}>Adicionar</button>

      <ul>
        {livros.map((livro) => (
          <li key={livro._id}>
            {livro.titulo} - {livro.autor}
            <button onClick={() => removerLivro(livro._id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;