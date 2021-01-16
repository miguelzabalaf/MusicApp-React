import React, { useState } from 'react'
import { isMobile } from '../helpers/isMobile'

export const LibrarySong = ({song, songs, setCurrentSong, audioRef, isPlaying, setIsPlaying, currentSong, libraryStatus, setLibraryStatus}) => {

  const SONG = audioRef.current

  const songSelectHandler = () => {
    const selectedSong = songs.filter( state => state.id === song.id);
    setCurrentSong({...song, active: true});
    closeLibrary();
    setIsPlaying(true);
    // Check if the song is playing
    if (true) {
      const playPromise = SONG.play();
      if (playPromise !== undefined) {
        playPromise.then((audio) => {
          SONG.play();
        })
      }
    } else {
      SONG.play();
    }
  }

  const closeLibrary = () => {
    if (isMobile()) {
      setLibraryStatus(!libraryStatus);
    } else {
      return;
    }
  }

  return (
    <div 
      onClick={songSelectHandler}
      className={`library-song ${ currentSong.id === song.id ? 'songActive' : '' }`}
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
