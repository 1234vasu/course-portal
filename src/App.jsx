import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Products'
import image1 from './assets/buds.jpeg'
import image2 from'./assets/buds2.jpeg'
import image3 from './assets/buds3.jpeg'
import Counter from './Counter'
import Student from './Student'
import Studentdash from './Studentdash'
import Navbar from './Navbar'
import Login from './Login'

import {BrowserRouter, Routes,Route} from "react-router-dom";
import Home from './Home'
import Question from './Question'


function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Studentdash" element={<Studentdash/>}></Route>
    <Route path="/Login" element={<Login/>}></Route>
    <Route path="/Student" element={<Student/>}></Route>
    
   </Routes>
    </BrowserRouter>

      
      </>
    
  )
}

export default App;
