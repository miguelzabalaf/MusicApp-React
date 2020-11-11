import React from 'react'

export const LibrarySong = ({song, songs, setCurrentSong, id}) => {

  const songSelectHandler = () => {
    const selectedSong = songs.filter( state => state.id === id);
    console.log(selectedSong)
    setCurrentSong(selectedSong[0])
  }

  return (
    <div 
      onClick={songSelectHandler}
      className={song.active ? 'library-song songActive' : 'library-song'}
    >
      <div className="library-song__cover">
        <img src={song.cover} alt="song.name"/>
      </div>
      <div className="library-song__details">
        <h3 className="library-song__details--name">{song.name}</h3>
        <p className="library-song__details--artist">{song.artist}</p>
      </div>
    </div>
  )
}
