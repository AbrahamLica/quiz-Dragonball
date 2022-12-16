import React from 'react'
import './home.css'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom'

const Home = () => {

  const {state, dispatch} = useContext(Context)
  const navigate = useNavigate()

  function iniciarGame() {
    dispatch({
      type: 'START_GAME',
      payload: {
        gameStage: 'Playing'
      }
    })

    navigate('/questions')
  }

  return (
    <div className='mainContainer'>
        <h1>Quiz Comum</h1>
        <button onClick={iniciarGame}>Iniciar Quiz</button>
    </div>
  )
}

export default Home