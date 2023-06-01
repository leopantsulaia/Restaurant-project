import "./app.scss";
import Creation from "./components/Creation.jsx";

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
      <div className="mid-div">
        <aside className="mid-leftSide">Create Table</aside>
        <aside className="mid-rightSide">Tables Now</aside>
      </div>
    </div>
  );
}

export default App;
