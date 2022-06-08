import { Router, Route, Routes } from 'react-router-dom'

// Pages
import { Home } from './pages/Home/Home'
import { NewRoom } from './pages/NewRoom/NewRoom'
import { Room } from './pages/Room/Room'
import { AdminRoom } from './pages/AdminRoom/AdminRoom'
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

          <Route path="/admin/rooms/:id" element={<AdminRoom />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
