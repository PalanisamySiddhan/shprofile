import logo from './logo.svg';
import sharlogo from './sharlogo.jpeg'
import config from './const.json'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={sharlogo} className="App-logo" alt="logo" />
        <p>
        {config.Skill.join('\n')}
        </p>
        <p>
        {config.Sport}
        </p>
        <div>
          <p>Movies</p>
        <a
          className="App-link"
          href="https://youtu.be/hnlK_eYtAuw?si=dfsVcPCmF39Q16Iu"
          target="_blank"
          rel="noopener noreferrer"
        >
          Crash Landing
        </a>

        </div>
        
      </header>
    </div>
  );
}

export default App;
