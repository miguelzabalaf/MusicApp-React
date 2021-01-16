import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
// Helpers
import { getTime } from "../helpers/getTime";

export const Player = ({ audioRef, currentSong, isPlaying, setIsPlaying, setSongInfo, songInfo, songs, setCurrentSong }) => {

  const SONG = audioRef.current

  // Destruct songInfo
  const { currentTime, duration } = songInfo;

  const [playerButtons, setPlayerButtons] = useState({
    back: true,
    play: true,
    skip: true
  })

  // Events Hanlders
  const playSongHandler = () => {
    const song = audioRef.current
    if (isPlaying) {
      song.pause()
      setIsPlaying(!isPlaying);
    } else {
      song.play()
      setIsPlaying(!isPlaying);
    }
  };

  const dragRangeHandler = (event) => {
    audioRef.current.currentTime = event.target.value
    setSongInfo({
      ...songInfo,
      currentTime: event.target.value
    })
  };

  const skipTrackHandler = (direction) => {
    const selectCurrentIndex = songs.findIndex((song) => song.id === currentSong.id);
    switch (direction) {
      // BACK
      case 'skip-back':
        // BACK
        if (selectCurrentIndex === 0) {
          setPlayerButtons({
            ...playerButtons,
            back: false,
            skip: true,
          })
          setIsPlaying(true);
          SONG.play();
        } else {
          setCurrentSong(songs[selectCurrentIndex - 1])
          setPlayerButtons({
            ...playerButtons,
            back: true,
            skip: true,
          })
        }
        if (isPlaying) {
          const playPromise = SONG.play();
          if (playPromise !== undefined) {
            playPromise.then((audio) => {
              SONG.play();
            })
          }
        } else {
          SONG.play();
        }
        break;
        // NEXT
        case 'skip-next':
          // NEXT
          if ( songs.length - 1 === selectCurrentIndex) {
            setPlayerButtons({
              ...playerButtons,
              skip: false,
              back: true
            })
          } else {
            setCurrentSong(songs[selectCurrentIndex + 1])
            setPlayerButtons({
              ...playerButtons,
              skip: true,
              back: true
            })
            setIsPlaying(true);
            SONG.play();
          }
          if (isPlaying) {
            const playPromise = SONG.play();
            if (playPromise !== undefined) {
              playPromise.then((audio) => {
                SONG.play();
              })
            }
          } else {
            SONG.play();
          }
        break;
    
      default:
        break;
    }
  }

  return (
    <div className="player">
      <div className="player__time-control">
        <p className="player__time-control--start-time">{getTime(currentTime)}</p>
        <input 
          onChange={dragRangeHandler}
          value={currentTime} 
          max={duration || '00:00'} 
          min={0} 
          className="player__time-control--range" 
          type="range"
        />
        <p className="player__time-control--end-time">{getTime(duration)}</p>
      </div>
      <div className="player__play-control">
        <button className="player__play-control--skip-back" onClick={ () => skipTrackHandler('skip-back') } disabled={ playerButtons.back ? false : true }>
          <FontAwesomeIcon size="2x" icon={faAngleLeft} />
        </button>
        <button onClick={playSongHandler} className="player__play-control--play">
          <FontAwesomeIcon size="2x" icon={isPlaying ? faPause : faPlay} />
        </button>
        <button className="player__play-control--skip-forward" onClick={ () => skipTrackHandler('skip-next') } disabled={ playerButtons.skip ? false : true }>
          <FontAwesomeIcon size="2x" icon={faAngleRight} />
        </button>
      </div>
    </div>
  );
};
