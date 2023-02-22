import { Routes, Route } from 'react-router-dom'
import * as React from 'react';
import './App.css';

import Posts from './components/Posts';
import Create from './components/Create';
import Login from './components/Login';
import Single from './components/Single';
import Signin from './components/Signin';
import Admin from './components/Admin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Posts/>} />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/create" element={<Create/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/post/:slug" element={<Single/>} />
    </Routes>
  );
}

export default App;
