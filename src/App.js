import './App.css';
import React from 'react';
import Post from './Post';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (

    <Routes>
      <Route index element={
        <main>
        <Header />
        <Post />
        </main>
      } />
      <Route path={'./login'} element={
        <div>login page</div>
      } />
    </Routes>
    
    
  );
}

export default App;