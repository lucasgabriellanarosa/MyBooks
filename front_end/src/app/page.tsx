import Image from "next/image";

export default function Home() {
  return (
    <div>

      <nav>
        <div>
          <img src="#" />
          <p>username</p>
        </div>

        <a href="#">Home</a>

        <ul>
          <h3>My Books List</h3>
          <li>Read</li>
          <li>To Read</li>
          <li>Reading</li>
        </ul>

        <ul>
          <h3>My Bookshelfs</h3>
          <li>2024 Books</li>
          <li>2025 Books</li>
        </ul>

        <a href="#">Find Users</a>

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
