import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

export const Player = () => {
  return (
    <div className="player">
      <div className="player__time-control">
          <p className="player__time-control--start-time">Start Time</p>
          <input className="player__time-control--range" type="range"/>
          <p className="player__time-control--end-time">End Time</p>
      </div>
      <div className="player__play-control">
        <FontAwesomeIcon className="player__play-control--skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon className="player__play-control--play" size="2x" icon={faPlay} />
        <FontAwesomeIcon className="player__play-control--skip-forward" size="2x" icon={faAngleRight} />
      </div>
    </div>
  );
};
