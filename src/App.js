// Components
import { Song } from './components/Song';
import { Player } from "./components/player";
// Styles
import './styles/app.scss'
// Data
import data from './data';

const App = () => {
  return (
    <div className="App">
      <Song/>
      <Player/>
    </div>
  );
}

export default App;

