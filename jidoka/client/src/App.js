import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './components/Auth';
import Header from './components/Header';
import { useSelector } from 'react-redux';
import Home from './components/Home';
import Dashboard from './components/Dashboard';

function App() {
  const isLoggedIn = useSelector(state=> state.isLoggedIn);
  console.log(isLoggedIn)

  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Routes>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/home" element={<Home/>}/>

      </Routes>
    </main>
    </>
  );
}

export default App;
