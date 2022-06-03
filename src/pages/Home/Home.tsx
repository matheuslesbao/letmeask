// Hooks
import { useNavigate } from 'react-router-dom'
//Autenticação Google
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
// Images
import illustrationImg from '../../assets/illustration.svg'
import logoImg from '../../assets/logo.svg'
import googleIconImg from '../../assets/google-icon.svg'
// Components
import { Button } from '../../components/Button/Button'
// Sass
import './auth.scss'
import { app } from '../../services/firebase'
import { firebaseConfig } from '../../services/firebase'

export function Home() {
  /* Função de Navegação */
  const navigate = useNavigate()
  /*  */
  const provider = new GoogleAuthProvider()
  const auth = getAuth(app)
  function handleCreateRoom() {
    signInWithPopup(auth, provider)
      .then(result => {
        console.log(result)
      })
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        // The email of the user's account used.
        const email = error.email
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error)
      })

    // navigate('/rooms/new')
  }
  /* Tela do Home */
  return (
    <div id="page-auth">
      {/* Conteúdo Roxo */}
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
          <form action="">
            <input type="text" placeholder="Digite o código da sala" />
            {/* Button Submit */}
            <Button type="submit">Entrar na sala</Button>
          </form>
        </div>
      </main>
    </div>
  )
}
