import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';
// Helpers
import { getTime } from "../helpers/getTime";

export const Player = ({ currentSong, isPlaying, setIsPlaying }) => {

  // State songInfo
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });
  
  // Destruct songInfo
  const { currentTime, duration } = songInfo;

  // Ref
  const audioRef = useRef(null);

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

  const timeUpdateHandler = (event) => {
    const currentAudioTime = event.target.currentTime;
    const currentAudioDuration = event.target.duration;
    setSongInfo({
      ...songInfo,
      currentTime: currentAudioTime,
      duration: currentAudioDuration
    })
  };

  const dragRangeHandler = (event) => {
    audioRef.current.currentTime = event.target.value
    setSongInfo({
      ...songInfo,
      currentTime: event.target.value
    })
  }

  return (
    <div className="player">
      <div className="player__time-control">
        <p className="player__time-control--start-time">{getTime(currentTime)}</p>
        <input 
          onChange={dragRangeHandler}
          value={currentTime} 
          max={duration} 
          min={0} 
          className="player__time-control--range" 
          type="range"
          smooth="yes"
        />
        <p className="player__time-control--end-time">{getTime(duration)}</p>
      </div>
      <div className="player__play-control">
        <div className="player__play-control--skip-back">
        <FontAwesomeIcon size="1x" icon={faAngleLeft} />
        </div>
        <div onClick={playSongHandler} className="player__play-control--play">
        <FontAwesomeIcon size="1x" icon={isPlaying ? faPause : faPlay} />
        </div>
        <div className="player__play-control--skip-forward">
        <FontAwesomeIcon size="1x" icon={faAngleRight} />
        </div>
      </div>
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef} 
        src={currentSong.audio}
      ></audio>
    </div>
  );
};
