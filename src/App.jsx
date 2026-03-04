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
import Quiz from './Quiz'


function App() {
 
  return (
    <>
    <BrowserRouter>
      
    
    <Quiz/>
    
    
   
    </BrowserRouter>

      
      </>
    
  )
}

export default App;
