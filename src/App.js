import { useRef, useState } from 'react';
// Components
import { Song } from './components/Song';
import { Player } from "./components/player";
import { Library } from './components/Library';
import { Nav } from './components/Nav';
// Styles
import './styles/app.scss'
// Data
import data from './data';

const App = () => {

  // Ref
  const audioRef = useRef(null);

  // State Songs
  const [songs, setSongs] = useState(data())
  
  // State Song currently
  const [currentSong, setCurrentSong] = useState(songs[1])
  
  //State Playing
  const [isPlaying, setIsPlaying] = useState(false)
  
  // State songInfo
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });

  // State Navbar
  const [libraryStatus, setLibraryStatus] = useState(false);

  const timeUpdateHandler = (event) => {
    const currentAudioTime = event.target.currentTime;
    const currentAudioDuration = event.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: currentAudioTime,
      duration: currentAudioDuration
    })
  };

  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} />
      <Player 
        audioRef={audioRef}
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying}
        currentSong={currentSong} 
        setSongInfo={setSongInfo}
        songInfo={songInfo}
        songs={songs}
        setCurrentSong={setCurrentSong}
      />
      <Library 
        libraryStatus={libraryStatus}
        audioRef={audioRef}
        songs={songs}
        currentSong={currentSong} 
        setCurrentSong={setCurrentSong}
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        setLibraryStatus={setLibraryStatus}
        libraryStatus={libraryStatus}
      />
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef} 
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;

