import React from 'react'
import { Router, Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { NewRoom } from './pages/NewRoom/NewRoom'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms/new" element={<NewRoom />} />
      </Routes>
    </>
  )
}

export default App
