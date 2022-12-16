import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const EndGame = () => {
    
    const {state, dispatch} = useContext(Context)

    const navigate = useNavigate()

    function reiniciarGame() {
        navigate('/')
    }

  return (
    <div>
        EndGame

        <button onClick={reiniciarGame}>Reiniciar</button>
    </div>
  )
}

export default EndGame