import Image from "next/image";

export default function Home() {
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

      <main>
        <div>
          <h1>MyBooks</h1>
          <h2>Keep track of your readings!</h2>
        </div>

        <input type="text" />
      </main>

    </div>
  );
}
