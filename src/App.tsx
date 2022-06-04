import { createContext, useState } from 'react'
import { Router, Route, Routes } from 'react-router-dom'
//Autenticação Google
import { app } from './services/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// Pages
import { Home } from './pages/Home/Home'
import { NewRoom } from './pages/NewRoom/NewRoom'

type User = {
  id: string
  name: string
  avatar: string
}

type AuthContextType = {
  user: User | undefined
  signInWithGoogle: () => Promise<void>
}

export const AuthContext = createContext({} as AuthContextType)

function App() {
  const [user, setUser] = useState<User>()
  // Autenticação
  const provider = new GoogleAuthProvider()
  const auth = getAuth(app)

  async function signInWithGoogle() {
    const result = await signInWithPopup(auth, provider)

    if (result.user) {
      const { displayName, photoURL, uid } = result.user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google Account. ')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  return (
    <>
      <AuthContext.Provider value={{ user, signInWithGoogle }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rooms/new" element={<NewRoom />} />
        </Routes>
      </AuthContext.Provider>
    </>
  )
}

export default App
