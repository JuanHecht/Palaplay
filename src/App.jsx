import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/ResponsiveAppBar'
/* import Footer from './components/Footer' */
import HomePage from './pages/Homepage'
import GameInfo from './pages/GameInfo'
import CreateGame from './pages/CreateGame';
import MyGames from './pages/MyGames';
import EditGame from './pages/EditGame';

function App() {
  
  return (
    <div>
      <Navbar/>
    
      <Routes >
        <Route path="/" element={<HomePage/>}/>
        <Route path="/game/:gameId" element={<GameInfo/>} />
        <Route path="/createGame" element={<CreateGame />} />
        <Route path="/my games" element={<MyGames />} />
        <Route path="/editGame/:gameId" element={<EditGame />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
      
}

export default App