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
        type: 'NEXT_QUESTION'
      })
    }
  }

 

  return (
    <div className="centralContainerQuestions">
    <div className="mainContainerQuestions">
          <h1>{perguntaAtual.pergunta}</h1>
          <div className="alternativasContainer">
          {perguntaAtual.alternativas.map((item, index, respostaCerta) => (
              <div
                className={`itemContainer${
                  state.quiz.respostaSelecionada && item === state.quiz.perguntas[state.quiz.perguntaAtual].resposta ? 'Correct': ''
                } ${state.quiz.respostaSelecionada && item !== state.quiz.perguntas[state.quiz.perguntaAtual].resposta ? 'Wrong' : ''}`}
                key={index}
                respostaCerta={perguntaAtual}
                onClick={() =>
                {if(state.quiz.perguntas[state.quiz.perguntaAtual].resposta === item) {
                  console.log('resposta correta')
                } else {console.log('reposta errada')}

                dispatch({
                  type: 'CHECK_QUESTION',
                  payload: {
                    resposta: state.quiz.perguntas[state.quiz.perguntaAtual].resposta, item
                  }
                })}}>  
                <p>{item}</p>
              </div>
            ))}
          </div>

          {state.quiz.respostaSelecionada && (<button onClick={nextQuestion}>Avançar</button>)}
          
    </div>
    </div>
  )
}

export default Questions