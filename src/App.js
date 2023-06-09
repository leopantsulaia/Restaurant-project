import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./app.scss";
import MyComponent from "./components/JS/MyComponent";
import Magidebi from "./components/JS/Logic/Magidebi"; // Import the Magidebi component
import {SaveTappedProvider} from "./components/JS/Logic/SaveTapped";

function App() {
  return (
    <SaveTappedProvider>
      <div className='App'>
        <header className='header'>
          <ul className='header-items'>
            <li>
              <a href='./'> Home </a>
            </li>
            <li>
              <a href='./magidebi'>Magidebi</a>{" "}
            </li>
            <li>
              <a href='./about'>about</a>
            </li>
          </ul>
        </header>
        <div className='mid-div'>
          <Router>
            {/* Wrap your Route components inside a Routes component */}
            <Routes>
              {/* Use the element prop to specify the component to render for this route */}
              <Route path='/Magidebi' element={<Magidebi />} />
            </Routes>
            <MyComponent />
          </Router>
        </div>
      </div>
    </SaveTappedProvider>
  );
}

export default App;
