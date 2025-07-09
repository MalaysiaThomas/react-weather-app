import './App.css';

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <footer>
        <p>
          Created by
          <a href="https://github.com/MalaysiaThomas" target="_blank"
            rel="noopener noreferrer">
            {" "}
            Malaysia Thomas
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/MalaysiaThomas/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          . Hosted on{" "}
          <a
            href="https://react-weather-app-aeris.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >Netlify
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

