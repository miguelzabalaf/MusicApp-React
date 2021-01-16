import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import { isMobile } from '../helpers/isMobile';

export const Nav = ({ libraryStatus, setLibraryStatus }) => {
  return (
    <nav>
      <div className="container">
        <h1>Waves</h1>
        <button onClick={ () => setLibraryStatus(!libraryStatus) }>
          <FontAwesomeIcon icon={libraryStatus & !isMobile() ? faTimes : faBars} size="2x"/>
        </button>
      </div>
    </nav>
  )
}
