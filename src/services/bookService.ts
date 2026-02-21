import axios from "axios";
import { Book } from "../types/Book";

const API_URL = "https://crudcrud.com/api/c970be1ead8f4f97a792abae25701603/books";
export const getBooks = () => axios.get<Book[]>(API_URL);

export const addBook = (book: Book) => axios.post(API_URL, book);

export const deleteBook = (id: string) =>
  axios.delete(`${API_URL}/${id}`);

export const updateBook = (id: string, book: Omit<Book, "_id">) =>
  axios.put(`${API_URL}/${id}`, book);
