import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Route,Routes,Link} from 'react-router-dom'
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App
