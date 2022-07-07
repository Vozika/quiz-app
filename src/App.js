import React from "react";
import "./App.css";
import Data from "./data_json.js";

function App() {
  const [score, setScore] = React.useState(0);
  const [rightAnswer, setRightAnswer] = React.useState(0);
  const [wrongAnswer, setWrongAnswer] = React.useState(0);

  const [question, setQuestion] = React.useState({
    question: "What is the capital of",
    country: "",
    options: [],
  });

  function getRandom(a) {
    const randomNumber = Math.floor(Math.random() * a);
    return randomNumber;
  }



  function getCountry() {
    const randomCountry = getRandom(Data.length);
    const correctCountry = Data[randomCountry];
    const country = Data[randomCountry].country;
    correctCountry.isCorrect = true;
    correctCountry.id = 666;
    Data.splice(randomCountry, 1);

    const options = [];
    const splicedCountries = [];
    options.push(correctCountry);

    for (let i = 0; i < 3; i++) {
      let countriesLoop = Data;
      let randomCountryLoop = getRandom(countriesLoop.length);
      countriesLoop[randomCountryLoop].isCorrect = false;
      countriesLoop[randomCountryLoop].id = i;
      options.push(countriesLoop[randomCountryLoop]);
      splicedCountries.push(countriesLoop[randomCountryLoop]);
      countriesLoop.splice(randomCountryLoop, 1);
    }

    splicedCountries.map((country) => {
      return Data.push(country);
    });
    options.sort(() => (Math.random() > 0.5 ? 1 : -1));

    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      country: country,
      options: options,
    }));
  }

  function optionClicked(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
      setRightAnswer(rightAnswer + 1);
    } else {
      setWrongAnswer(wrongAnswer + 1);
    }
    getCountry();
  }

  return (
    <div className="App">
      <h1>Quiz App</h1>
      {question.country && (
        <>
          <h2>Score: {score}</h2>
          <h3>Right answers: {rightAnswer}</h3>
          <h3>Wrong answers: {wrongAnswer}</h3>
        </>
      )}
      {question.country && (
        <h2>
          {question.question} {question.country}?
        </h2>
      )}
      {question.options.map((answer) => {
        return (
          <div
            onClick={() => optionClicked(answer.isCorrect)}
            key={answer.id}
            className="options"
          >
            {answer.capital}
          </div>
        );
      })}
      {!question.country && (
        <button onClick={getCountry}>
          {question.country ? "Get New Country" : "Start"}
        </button>
      )}
    </div>
  );
}

export default App;
