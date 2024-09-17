import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NoPage from './pages/NoPage'
import Signup from './pages/Signup'
import './App.css'
import Login from './pages/Login'

import EditorPage from './pages/Editor'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/signup' element={<Signup />}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/editor/:projectID' element={<EditorPage/>} />
        <Route path='/*' element={<NoPage/>}/>
      </Routes>
    </div>
  )
}

export default App