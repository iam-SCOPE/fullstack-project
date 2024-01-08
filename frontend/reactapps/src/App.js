import React from 'react'
//import logo from './logo.svg';
//import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.css';
import Corporate from "./components/Corporate"

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path="/corporate" element={<Corporate/>} />
      </Routes>
    </div>
  )
}

export default App