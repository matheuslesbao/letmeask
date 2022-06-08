// Hooks
import { useEffect, useState, FormEvent } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
// Components
import { Button } from '../../components/Button/Button'
import { RoomCode } from '../../components/RoomCode/RoomCode'
import { Question } from '../../components/Question/Question'
// Img
import logoImg from '../../assets/logo.svg'
import deleteImg from '../../assets/delete.svg'
import checkImg from '../../assets/check.svg'
import answerImg from '../../assets/answer.svg'
// Hooks
import { useRoom } from '../../hooks/useRoom'
import { useAuth } from '../../hooks/useAuth'
//import { child, push, ref, set, onValue } from 'firebase/database'
// firebase
import { database } from '../../services/firebase'
// Style
import './admin-room.scss'

type RoomParams = {
  id: any
}
export function AdminRoom() {
  // const { user } = useAuth()
  const params = useParams<RoomParams>()
  const navigate = useNavigate()
  const roomId = params.id

  const { title, questions } = useRoom(roomId)

  async function handleEndRoom() {
    database.ref(`rooms/${roomId}`).update({
      endedAt: new Date()
    })
    navigate('/')
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighLightQuestion(questionId: string) {
    await database.ref(`rooms/${roomId}/questions/${questionId}`).update({
      isHighLighted: true
    })
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('tem certeza que voce quer deletar ?')) {
      await database.ref(`rooms/${roomId}/questions/${questionId}`).remove()
    }
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutLined onClick={handleEndRoom}>
              Encerrar Sala
            </Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          {questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </div>

        <div className="questions-list">
          {questions.map(question => {
            return (
              <Question
                key={question.id}
                content={question.content}
                author={question.author}
                isAnswered={question.isAnswered}
                isHighLighted={question.isHighLighted}>
                {!question.isAnswered && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        handleCheckQuestionAsAnswered(question.id)
                      }>
                      <img src={checkImg} alt=" Marcar Como Respondido" />
                    </button>

                    <button
                      type="button"
                      onClick={() => handleHighLightQuestion(question.id)}>
                      <img src={answerImg} alt=" Dar destaque a pergunta" />
                    </button>
                  </>
                )}

                <button
                  type="button"
                  onClick={() => handleDeleteQuestion(question.id)}>
                  <img src={deleteImg} alt=" remover pergunta" />
                </button>
              </Question>
            )
          })}
        </div>
      </main>
    </div>
  )
}
