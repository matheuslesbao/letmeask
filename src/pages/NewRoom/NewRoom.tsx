// Hooks
import { Link, useNavigate } from 'react-router-dom'
import { FormEvent, useState } from 'react'
// Context
import { useAuth } from '../../hooks/useAuth'
// Images
import illustrationImg from '../../assets/illustration.svg'
import logoImg from '../../assets/logo.svg'
// Components
import { Button } from '../../components/Button/Button'
// Sass
import './newRoom.scss'
//database
import { database } from '../../services/firebase'

export function NewRoom() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [newRoom, setNewRoom] = useState('')

  async function handleCreateRoom(event: FormEvent) {
    event.preventDefault()

    if (newRoom.trim() === '') {
      return
    }
    const roomRef = database.ref('rooms')

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id
    })

    navigate(`/rooms/${firebaseRoom.key}`)
  }

  return (
    <div id="page-auth">
      <aside>
        <img
          src={illustrationImg}
          alt="Ilustração simbolizando perguntas e respostas"
        />
        <strong>Crie salas de Q&amp; A Ao vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Logo do letmeask" />

          <h2>Criar uma nova Sala</h2>
          <div className="separator"> ou entre em uma sala</div>
          <form onSubmit={handleCreateRoom}>
            <input
              type="text"
              placeholder="Nome da Sala"
              onChange={event => setNewRoom(event.target.value)}
              value={newRoom}
            />
            <Button type="submit">Criar Sala</Button>
          </form>
          <p>
            Quer entrar em uma sala existente ? <Link to="/">Clique aqui</Link>
          </p>
        </div>
      </main>
    </div>
  )
}
