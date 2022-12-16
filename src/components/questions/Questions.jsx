import { useContext } from "react"
import { Context } from "../../context/Context"
import { useNavigate } from "react-router-dom"
import './Questions.css'

const Questions = () => {

  const {state, dispatch} = useContext(Context)
  const perguntaAtual = state.quiz.perguntas[state.quiz.perguntaAtual]
  const navigate = useNavigate()

  function nextQuestion() {
    if (state.quiz.perguntaAtual === 5) {
      navigate('/endgame')
    } else {
      dispatch({
        type: 'NEXT_QUESTION',
      })
    }
    
  }

  return (
    <div className="mainContainer">
          <h1>{perguntaAtual.pergunta}</h1>
          <div className="alternativasContainer">
            {perguntaAtual.alternativas.map((item, index) => (
              <div className="itemContainer" key={index}><p>{item}</p></div>
            ))}
          </div>
          <button onClick={nextQuestion}>Avançar</button>
    </div>
  )
}

export default Questions