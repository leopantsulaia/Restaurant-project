import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import "./app.scss";
import MyComponent from "./components/JS/MyComponent";
import Tables from "./components/JS/Logic/Tables";
import {SaveTappedProvider} from "./components/JS/Logic/SaveTapped";

function App() {
  return (
    <SaveTappedProvider>
      <Router>
        <div className='App'>
          <header className='header'>
            <nav>
              <ul className='header-items'>
                <li>
                  <Link to='/Home'>Home</Link>
                </li>
                <li>
                  <Link to='/Tables'>Tables</Link>
                </li>
                <li>
                  <Link to='/about'>About</Link>
                </li>
              </ul>
            </nav>
          </header>
          <div className='mid-div'>
            <Routes>
              <Route path='/Home' element={<MyComponent />} /> {/* Add this line */}
              <Route path='/Tables' element={<Tables />} />
            </Routes>
          </div>
        </div>
      </Router>
    </SaveTappedProvider>
  );
}

export default App;