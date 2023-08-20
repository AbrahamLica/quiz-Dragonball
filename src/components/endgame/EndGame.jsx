import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import './EndGame.css'

const EndGame = () => {
    
    const {state, dispatch} = useContext(Context)

    const navigate = useNavigate()

    function reiniciarGame() {
        navigate('/')
        dispatch({
          type: 'RESTART_GAME'
        })
    }
    
  return (
    <div className='centralContainerEndGame'>
      <div className='mainContainerEndGame'>
        <div className='containerInformations'>
            <p>Placar: {state.quiz.placar}</p>
            <p>Você acertou {state.quiz.placar} de {state.quiz.perguntas.length} perguntas</p>
        </div>
        <div className='containerButton'>
            <button onClick={reiniciarGame}>Reiniciar</button>
        </div>

        <p className='author'>By <a href="https://github.com/AbrahamLica" target='_blank'>Abraham Licá</a></p>
      </div>
    </div>
  )
}

export default EndGame