import React from "react";
import "./app.scss";
import MyComponent from "./components/JS/MyComponent";

function App() {
  return (
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
        <MyComponent />
      </div>
    </div>
  );
}

export default App;
