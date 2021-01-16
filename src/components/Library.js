import React from 'react'
// Components
import { LibrarySong } from './LibrarySong'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { isMobile } from '../helpers/isMobile';

export const Library = ({songs, setCurrentSong, audioRef, isPlaying, currentSong, libraryStatus, setLibraryStatus, setIsPlaying}) => {
  return (
    <div className={`library ${ libraryStatus ? 'active-library' : '' }`}>
      <div className="library__header">
        <div className="library__header--title">
          <h2>Library</h2>
        </div>
        {
          isMobile() &&
            <div className="library__header--close" onClick={ () => setLibraryStatus(!libraryStatus) }>
              <FontAwesomeIcon icon={faTimes} size="2x"/>
            </div>

        }
      </div>
      <div className="library__songs">
        {
          songs.map( song => (
            <LibrarySong 
              songs={songs} 
              song={song}
              setCurrentSong={setCurrentSong} 
              key={song.id} 
              audioRef={audioRef}
              isPlaying={isPlaying}
              currentSong={currentSong}
              libraryStatus={libraryStatus}
              setLibraryStatus={setLibraryStatus}
              setIsPlaying={setIsPlaying}
            />))
        }
      </div>
    </div>
  )
}
