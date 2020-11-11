import React from 'react'
// Components
import { LibrarySong } from './LibrarySong'

export const Library = ({songs, setCurrentSong}) => {
  return (
    <div className="library">
      <div className="library__header">
        <h2>Library</h2>
      </div>
      <div className="library__songs">
        {
          songs.map( song => (
            <LibrarySong 
              songs={songs} 
              song={song}
              setCurrentSong={setCurrentSong} 
              key={song.id} 
              id={song.id} 
            />))
        }
      </div>
    </div>
  )
}
