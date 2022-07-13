import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import BookCard from "./LandingPage/BookCard";
import Home from "./LandingPage/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className='App'>
        <Home />
        <Routes>
          <Route
            exact
            path='/'
            element={<BookCard key='react' category='react' pageSize={20} />}
          />{" "}
          <Route
            exact
            path='/javascript'
            element={
              <BookCard key='javascript' category='javascript' pageSize={20} />
            }
          />{" "}
          <Route
            exact
            path='/india'
            element={<BookCard key='india' category='india' pageSize={20} />}
          />{" "}
          <Route
            exact
            path='/biography'
            element={
              <BookCard key='biography' category='biography' pageSize={20} />
            }
          />
          <Route
            exact
            path='/html'
            element={<BookCard key='html' category='html' pageSize={20} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
