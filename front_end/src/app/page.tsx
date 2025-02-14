'use client'

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import axios from "axios";

export default function Home() {

  const [query, setQuery] = useState('')
  const queryRef = useRef('')
  console.log(query)

  useEffect(() => {
    if (query) {
      getBooksByQuery();
    }
  }, [query]);

  const handleSetQuery = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    setQuery(queryRef.current.value)
  }

  const getBooksByQuery = () => {
    axios.get(`https://openlibrary.org/search.json?q=${query}`)
    .then((response)=>{
      console.log(response.data);
    })
  }

  return (
    <div className="flex flex-row">

      <nav className="bg-red-800 h-svh flex flex-col gap-4 px-6 py-3">
        <div className="flex justify-center items-center gap-2">
          <img src="#" />
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

        <form className="w-1/5 flex flex-row gap-2" onSubmit={(e) => handleSetQuery(e)}>
          <input type="text" className="border-black border-solid border-2 rounded-md px-2 py-1 w-full" ref={queryRef}/>
          
          <button className="bg-red-600 px-3 py-1 rounded-sm text-sm" type="submit">Search</button>
        </form>

        <ul>
          <li>TESTE</li>
        </ul>
      </main>

    </div>
  );
}
