'use client'

import { useEffect, useState } from "react";
import axios from "axios";

import { Book } from "./types/Book";

export default function Home() {
  const [query, setQuery] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    if (query) {
      getBooksByQuery();
    }
  }, [query]);

  const handleSetQuery = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const inputValue = e.currentTarget.query.value; 
    setQuery(inputValue);
  };

  const getBooksByQuery = () => {
    axios.get(`https://openlibrary.org/search.json?q=${query}&sort=rating&limit=10`)
      .then((response) => {
        setBooks(response.data.docs);
      });
  };

  return (
    <div className="flex flex-row">
      <nav className="bg-red-800 h-svh flex flex-col gap-4 px-6 py-3">
        <div className="flex justify-center items-center gap-2">
          <img src="#" alt="User avatar" />
          <p className="text-base">username</p>
        </div>

        <a href="#" className="text-xl">Home</a>

        <ul>
          <h3 className="text-xl">My Books List</h3>
          <li>Read</li>
          <li>To Read</li>
          <li>Reading</li>
        </ul>

        <ul>
          <h3 className="text-xl">My Bookshelfs</h3>
          <li>2024 Books</li>
          <li>2025 Books</li>
        </ul>

        <a className="text-xl" href="#">Find Users</a>
      </nav>

      <main className="w-full flex flex-col items-center gap-10 py-3">
        <div className="flex flex-col items-center">
          <h1 className="text-6xl">MyBooks</h1>
          <h2 className="text-2xl">Keep track of your readings!</h2>
        </div>

        <form className="w-1/5 flex flex-row gap-2" onSubmit={handleSetQuery}>
          <input
            type="text"
            name="query" // Add a name to the input
            className="border-black border-solid border-2 rounded-md px-2 py-1 w-full"
          />
          <button className="bg-red-600 px-3 py-1 rounded-sm text-sm" type="submit">Search</button>
        </form>

        <ul className="grid grid-cols-5 gap-4">
          {books.map((book, index) => (
            <li key={index} className="bg-blue-400">
              <h3>{book.title}</h3>
              <h4>{book.author_name?.join(', ')}</h4>
              {book.cover_edition_key && (
                <img src={`https://covers.openlibrary.org/b/olid/${book.cover_edition_key}-M.jpg`} alt={book.title} />
              )}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}