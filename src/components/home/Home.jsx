import React from 'react'
import './home.css'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
import avatar from '../../imgs/avatar.png'
import github from '../../imgs/github.png'
import linkedin from '../../imgs/linkedin.png'

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
    <div className='centralContainerHome'>

      <div className='mainContainer'>
          <h2>Quiz Dragon Ball</h2>
          <button onClick={iniciarGame}>Iniciar Quiz</button> 
      </div>

      <div className='containerImgs'>
            <a href="https://github.com/AbrahamLica" target='_blank'><img src={avatar} alt="meu avatar" /></a>
            <a href="https://github.com/AbrahamLica" target='_blank'><img src={github} alt="github" /></a>
            <a href="https://www.linkedin.com/in/abraham-melquisedeque-pereira-lic%C3%A1-0a1736203/" target='_blank'><img src={linkedin} alt="linkedin" /></a>
      </div>

    </div>
  )
}

export default Home