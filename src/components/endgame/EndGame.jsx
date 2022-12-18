import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const EndGame = () => {
    
    const {state, dispatch} = useContext(Context)

    const navigate = useNavigate()

    function reiniciarGame() {
        navigate('/')
        dispatch({
          type: 'RESTART_GAME'
        })
    }

    function teste() {
      console.log(state.quiz.placar)
    }

  return (
    <div>
        <h1>Placar: {state.quiz.placar}</h1>

        <button onClick={reiniciarGame}>Reiniciar</button>

        <button onClick={teste}>teste</button>
    </div>
  )
}

export default EndGame