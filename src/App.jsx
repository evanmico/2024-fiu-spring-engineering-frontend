import { useEffect, useState } from 'react'
import './App.css'

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Account from './pages/Account';
import Add from './pages/Add';
import Update from './pages/Update';
import Client from './pages/Client';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Account' element={<Account/>}/>
          <Route path="/add" element={<Add/>}/>
          <Route path="/update" element={<Update/>}/>
          <Route path="/client" element={<Client/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
