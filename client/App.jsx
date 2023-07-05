import React from 'react';
import Main from './containers/mainContainer.jsx';
import NavBar from './containers/NavBar.jsx';
import DetailPage from './containers/detail.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

//create detail page

const App = (props) => {
  return (
    <Router>
        <NavBar />
      <main>
        <div className="container">
          <Routes>
            <Route index element={<Main />}/>
            <Route path='produce/:id' element={<DetailPage />}/>
          </Routes>
        </div>
      </main>
    </Router>
  );
};

export default App;
