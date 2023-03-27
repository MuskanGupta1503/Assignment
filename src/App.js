import './App.css';
// import React, { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./components/Home"
import About from "./components/About"
import Profile from "./components/Profile"
import Navbar from './components/Navbar';
import SingleUser from './components/SingleUser';
// function App() {
//   useEffect(() => {
//     fetch('https://hub.dummyapis.com/employee')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     }, []);
//   return (
//     <h1 className='text-2xl font-bold'>Hello world</h1>
//   );
// }
// https://restcountries.com/#endpoints-all
//https://hub.dummyapis.com/employee
//https://www.codingdeft.com/posts/react-fetch-data-api/

function App() {
  return (
    <>
  <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route exact path="/" element={
      <>
        <Home/>
      </>}
    />
    <Route exact path="/about" element={
      <>
        <About/>
      </>
    }/>
    <Route exact path="/profile" element={
      <>
        <Profile/>
      </>
    }/>
    <Route exact path="/:id" element={
      <>
        <SingleUser/>
      </>
    }/>
    </Routes>
   </BrowserRouter>
  </>
  );
}


// export default AsyncAwait
export default App;
