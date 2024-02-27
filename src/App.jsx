import './App.css'
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/ResponsiveAppBar'
/* import Footer from './components/Footer' */
import HomePage from './pages/Homepage'
import AllGames from './pages/AllGames'
import GameInfo from './pages/GameInfo'
import CreateGame from './pages/CreateGame';
import MyGames from './pages/MyGames';
import EditGame from './pages/EditGame';
import MyFriends from './pages/MyFriends';

function App() {
  
  return (
    <div>
      {<Navbar/>}
    
      <Routes >
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/games" element={<AllGames />} />
        <Route path="games/game/:gameId" element={<GameInfo/>} />
        <Route path="my games/game/:gameId" element={<GameInfo/>} />
        <Route path="/createGame" element={<CreateGame />} />
        <Route path="/my games" element={<MyGames />} />
        <Route path="/editGame/:gameId" element={<EditGame />} />
        <Route path="/my friends" element={<MyFriends />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  )
      
}

export default App