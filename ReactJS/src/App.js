import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

import logo from './logo.svg';
import Sidebar from './Components/Sidebar';
import Home from './Pages/Home/Home';
import Lista from './Pages/Lista/Lista';
import Update from './Pages/Update/Update';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/lista' element={<Lista />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;