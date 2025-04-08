import "bootstrap/dist/css/bootstrap.min.css";

import NavCustom from "./components/NavCustom";
import FooterCustom from "./components/FooterCustom";
import CardBook from "./components/CardBook";
import AlertC from "./components/AlertC";
import SingleBook from "./components/SingleBook";
import BookList from "./components/BookList";
import bookh from "./assets/books/romance.json";

function App() {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <header className=" sticky-top">
        <NavCustom />
      </header>
      <main className=" flex-grow-1 bg-body-secondary">
        <BookList book={bookh} />
      </main>
      <footer className=" d-flex justify-content-center">
        <FooterCustom />
      </footer>
    </div>
  );
}

export default App;
