import { Router, Route, Routes } from 'react-router-dom'

// Pages
import { Home } from './pages/Home/Home'
import { NewRoom } from './pages/NewRoom/NewRoom'
// Context
import { AuthContextProvider } from './context/AuthContext'

function App() {
  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
