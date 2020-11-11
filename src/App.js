import { useState } from 'react';
// Components
import { Song } from './components/Song';
import { Player } from "./components/player";
import { Library } from './components/Library';
// Styles
import './styles/app.scss'
// Data
import data from './data';

const App = () => {

  // State Songs
  const [songs, setSongs] = useState(data())
  
  // State Song currently
  const [currentSong, setCurrentSong] = useState(songs[1])
  
  //State Playing
  const [isPlaying, setIsPlaying] = useState(false)
  

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        currentSong={currentSong} 
      />
      <Library 
        songs={songs} 
        setCurrentSong={setCurrentSong}
      />
    </div>
  );
}

export default App;

