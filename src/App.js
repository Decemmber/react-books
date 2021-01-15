import "./App.css";
import React, { useEffect, useState, Component } from "react";
import Navigation from "./components/Navigation/Navigation";
import BooksCards from "./components/BooksCards";
import ShoppingBag from "./components/ShoppingBag/ShoppingBag";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import axios from "axios";

function App() {
  const [loading, setLoading] = useState(true);
  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState(null);

  // Add item to cart
  const addToCart = (book) => {
    setCart([...cart, book]);
    console.log(cart);
  };

  // Total price on the cart
  const totalPrice = cart.reduce(
    (previousPrice, currentPrice) =>
      previousPrice + parseFloat(currentPrice.price),
    0
  );

  // Remove book from the cart
  const removeFromCartHandler = (bookToRemove) => {
    console.log(bookToRemove);
    setCart(cart.filter((book) => book !== bookToRemove));
    console.log(cart.book);
  };

  // Toggle open/close modal
  const toggleModal = () => {
    setModal(!modal);
  };

  // Search a book
  const searchBook = (event) => {
    let keyword = event.target.value;
    setSearch(keyword);
  };

  // Filtered books by Search
  const filteredBooks = books.filter((book) => {
    if (search === null) {
      return book;
    } else if (book.title.toLowerCase().includes(search.toLowerCase())) {
      return book;
    }
  });

  // Fetch data from API
  useEffect(async () => {
    const result = await axios(
      "http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books"
    );
    setBooks(result.data.books);
  }, []);

  return (
    <div className="App">
      <Navigation
        searchBook={searchBook}
        cart={cart}
        modalToggleHandler={toggleModal}
      />
      <BooksCards
        filteredBooks={filteredBooks}
        books={books}
        onClick={addToCart}
      />
      <ShoppingBag
        totalPrice={totalPrice}
        removeFromCart={removeFromCartHandler}
        booksOnTheCart={cart}
        modalState={modal}
        modalToggleHandler={toggleModal}
      />
    </div>
  );
}

export default App;
