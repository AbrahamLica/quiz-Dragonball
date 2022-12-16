import './app.css'
import Home from './components/home/Home'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Questions from './components/questions/Questions';
import { useContext } from 'react';
import { Context } from './context/Context';


function App() {

const {pontuacao} = useContext(Context)


  return (

    <BrowserRouter>
      <div className='main-container'>
      </div>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/questions' element={<Questions />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
