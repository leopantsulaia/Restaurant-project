import React, {useState} from "react";
import {Routes, Route, Link} from "react-router-dom";
import TableOne from "./Tables/TableOne";
import TableTwo from "./Tables/TableTwo";
import TableThree from "./Tables/TableThree";
import TableFour from "./Tables/TableFour";

const Creation = () => {
  const [showMenuOne, setShowMenuOne] = useState(false);
  const [showMenuTwo, setShowMenuTwo] = useState(false);
  const [showMenuThree, setShowMenuThree] = useState(false);
  const [showMenuFour, setShowMenuFour] = useState(false);

  return (
    <div className='Creation' id='CreationId'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='crt-header'>
                <span>
                  <h1>CHOOSE THE TABLE</h1>
                </span>
              </div>
              <nav className='nav-tables'>
                <ul className='nav-tables'>
                  <li id='btn-one'>
                    <Link to='/Table1'>Table One</Link>
                  </li>
                  <li id='btn-two'>
                    <Link to='/Table2'>Table Two</Link>
                  </li>
                  <li id='btn-three'>
                    <Link to='/Table3'>Table Three</Link>
                  </li>
                  <li id='btn-four'>
                    <Link to='/Table4'>Table Four</Link>
                  </li>
                </ul>
              </nav>
            </>
          }
        />
        <Route path='/Table1' element={<TableOne />} />
        <Route path='/Table2' element={<TableTwo />} />
        <Route path='/Table3' element={<TableThree />} />
        <Route path='/Table4' element={<TableFour />} />
      </Routes>
    </div>
  );
};
export default Creation;
