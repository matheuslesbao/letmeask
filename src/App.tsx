import { Router, Route, Routes } from 'react-router-dom'

// Pages
import { Home } from './pages/Home/Home'
import { NewRoom } from './pages/NewRoom/NewRoom'
import { Room } from './pages/Room/Room'
// Context
import { AuthContextProvider } from './context/AuthContext'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
          <Route path="/rooms/:id" element={<Room />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
