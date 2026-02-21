
import axios from "axios";
import { Book } from "../types/Book";

const API_URL = "https://crudcrud.com/api/289efd14ff294b8b92de981d42a34217/books ";

export const getBooks = () => axios.get<Book[]>(API_URL);

export const addBook = (book: Book) => axios.post(API_URL, book);

export const deleteBook = (id: string) =>
  axios.delete(`${API_URL}/${id}`);
