import React from "react";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Johannesburg" />

        <footer class="d-none d-lg-block">
          This project was coded by{" "}
          <a
            href="https://www.Github.com/MsibiD/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Msibi Dieketseng
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/MsibiD/react-weather-project."
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://bright-gumption-568e54.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
