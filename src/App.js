import React from 'react'
// route from BrowserRouter - gave us functionality
import { Route, Routes } from 'react-router-dom'
// pages
import Main from './pages/Main'
import Price from './pages/Price'
import Currencies from './pages/Currencies'
import Nav from './components/Nav'

function App() {
  return (
    <div id='App'>
      <Nav />
      <Routes>
        {/* number pages - how much routes there are */}
        <Route path='/' element={<Main />}/>
        <Route path='/currencies' element={<Currencies />}/>
        <Route path='/price/:symbol' element={<Price />}/>
      </Routes>
    </div>
  )
}

export default App
