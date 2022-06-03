// Hooks
import { Link } from 'react-router-dom'

import illustrationImg from '../../assets/illustration.svg'
import logoImg from '../../assets/logo.svg'

import { Button } from '../../components/Button/Button'

import './newRoom.scss'

export function NewRoom() {
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
          <form action="">
            <input type="text" placeholder="Nome da Sala" />
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
