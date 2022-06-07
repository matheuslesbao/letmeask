// Hooks
import { useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
// Context
import { useAuth } from '../../hooks/useAuth'
// Images
import illustrationImg from '../../assets/illustration.svg'
import logoImg from '../../assets/logo.svg'
import googleIconImg from '../../assets/google-icon.svg'
// Components
import { Button } from '../../components/Button/Button'
// Sass
import './auth.scss'
import { ref, get, child, set } from 'firebase/database'
import { database } from '../../services/firebase'

export function Home() {
  /* Função de Navegação */
  const navigate = useNavigate()
  /* Contexto */
  const { user, signInWithGoogle } = useAuth()

  const [roomCode, setRoomCode] = useState('')
  // Navigation / Google
  async function handleCreateRoom() {
    if (!user) {
      await signInWithGoogle()
    }

    navigate('/rooms/new')
  }
  // Entrar na sala existente ou nao
  function handleJoinRoom(event: FormEvent) {
    event.preventDefault()

    if (roomCode.trim() === '') {
      return
    }

    const roomRef = ref(database, 'rooms')
    get(child(roomRef, `/rooms/${roomRef}`)).then(roomRef => {
      if (!roomRef.exists()) {
        console.log(roomCode)
        alert('Room does not exists.')
      }
    })

    navigate(`/rooms/${roomCode}`)
  }
  /* Tela do Home */
  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        {/* Tittle */}
        <strong>Crie salas de Q&amp; A Ao vivo</strong>
        {/* Paragrafo */}
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        {/* Conteúdo Principal */}
        <div className="main-content">
          <img src={logoImg} alt="Logo do letmeask" />
          {/* Button de autenticação */}
          <button onClick={handleCreateRoom} className="create-room">
            <img src={googleIconImg} alt="Logo do google" />
            Crie uma sala com a Google
          </button>
          {/* div separadora */}
          <div className="separator"> ou entre em uma sala</div>
          {/* Input de código de sala */}
          <form onSubmit={handleJoinRoom}>
            <input
              type="text"
              placeholder="Digite o código da sala"
              onChange={event => setRoomCode(event.target.value)}
              value={roomCode}
            />
            {/* Button Submit */}
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}
