import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import "./app.scss";
import Header from "./components/header";
import TableSelection from "./components/JS/TableSelection";
import Tables from "./components/JS/Logic/Tables";
import About from "./components/about";
import UseLocalStorage from "./components/JS/Logic/UseLocalStorage";

function App() {
  return (
      <Router>
        <div className='App'>
          <Header />
          <div className='mid-div'>
            <Routes>
              <Route path='/home' element={<TableSelection />} />
              <Route path='/' element={<TableSelection />} />
              <Route path='/home/:tableNumber' element={<TableSelection />} />
              <Route path='/tables' element={<Tables />} />
              <Route path='/about' element={<About />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
