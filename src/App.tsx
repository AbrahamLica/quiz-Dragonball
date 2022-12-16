import './App.css'
import Home from './components/home/Home'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Questions from './components/questions/Questions';
import { useContext } from 'react';
import { Context, ContextProvider } from './context/Context';
import EndGame from './components/endgame/EndGame';


function App() {

const {state, dispatch} = useContext(Context)

  return (
    <ContextProvider>
      <BrowserRouter>
        <div className='main-container'>
        </div>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/questions' element={<Questions />}/>
          <Route path='/endgame' element={<EndGame />}/>
        </Routes>
      </BrowserRouter>
    </ContextProvider>

  );
}

export default App;
