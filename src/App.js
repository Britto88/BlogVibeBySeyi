import './App.css';
import React from 'react';
import Post from './Post';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={ // Assuming you want this to be the home page
        <main>
          <Header />
          <Post />
          <Post />
          <Post />
        </main>
      } />
      <Route path="/login" element={
        <div>login page</div>
      } />
    </Routes>
  );
}

export default App;
