import React from "react";
import "./App.css";
import Data from "./data_json.js";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Finish from "./components/Finish/Finish";
import Start from "./components/Start/Start";
import Counter from "./components/Counter/Counter";
import Question from "./components/Question/Question";
import Answers from "./components/Answers/Answers";

import { Typography } from "@mui/material";
import Difficulty from "./components/Difficulty/Difficulty";

let newData = [];

function App() {
  // States
  const [score, setScore] = React.useState(0);
  const [rightAnswer, setRightAnswer] = React.useState(0);
  const [wrongAnswer, setWrongAnswer] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showRightAnimation, setshowRightAnimation] = React.useState(false);
  const [showWrongAnimation, setshowWrongAnimation] = React.useState(false);
  const [numberOfOptions, setNumberOfOptions] = React.useState(3);

  const [question, setQuestion] = React.useState({
    question: "What is the capital of",
    country: "",
    options: [],
  });

  const numberOfQuestions = 10;
  // const numberOfOptions = 3;

  // Standart function for a random number
  function getRandom(a) {
    const randomNumber = Math.floor(Math.random() * a);
    return randomNumber;
  }

  function getCountry() {
    if (Data.length < numberOfOptions + 2) {
      Data.push.apply(Data, newData);
      newData = [];
    }

    // Randomizing a correct country from a data array of countries as objects
    const randomCountry = getRandom(Data.length);
    const correctCountry = Data[randomCountry];

    newData.push(correctCountry);

    const country = Data[randomCountry].country;
    correctCountry.isCorrect = true;
    correctCountry.id = 666;
    Data.splice(randomCountry, 1);

    const options = [];
    const splicedCountries = [];
    options.push(correctCountry);

    // Loop for adding 3 random incorrect countries to 1 correct
    for (let i = 0; i < numberOfOptions; i++) {
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

    // Randomizing 4 answers before adding them to a state
    options.sort(() => (Math.random() > 0.5 ? 1 : -1));

    // Adding everything to a state object
    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      country: country,
      options: options,
    }));
    setCurrentQuestion(currentQuestion + 1);
  }

  function optionClicked(isCorrect) {
    if (showRightAnimation || showWrongAnimation) {
      return;
    }

    if (isCorrect) {
      setScore(score + 1);
      showAnimationFunc(setshowRightAnimation);
      setRightAnswer(rightAnswer + 1);
    } else {
      showAnimationFunc(setshowWrongAnimation);
      setWrongAnswer(wrongAnswer + 1);
    }

    setTimeout(() => {
      getCountry();
    }, 1000);
  }

  function showAnimationFunc(state) {
    state((prevState) => !prevState);
    setTimeout(() => {
      state((prevState) => !prevState);
    }, 800);
  }

  function resetQuestions() {
    setScore(0);
    setRightAnswer(0);
    setWrongAnswer(0);
    setCurrentQuestion(0);
  }

  function handleChange(event) {
    setNumberOfOptions(event.target.value);
  }

  function resetApp() {
    resetQuestions();
    setQuestion({
      question: "What is the capital of",
      country: "",
      options: [],
    });
  }

  return (
    <div className="App">
      <Header />
      <div
        className={
          currentQuestion === numberOfQuestions + 1
            ? "container flex animate__animated animate__fadeInUp"
            : "none"
        }
      >
        <Finish
          reset={resetApp}
          score={score}
          numberOfQuestions={numberOfQuestions}
        />
      </div>
      <div
        className={
          currentQuestion === numberOfQuestions + 1
            ? "container none"
            : "container"
        }
      >
        {question.country && (
          <>
            <Counter
              showRightAnimation={showRightAnimation}
              showWrongAnimation={showWrongAnimation}
              wrongAnswer={wrongAnswer}
              rightAnswer={rightAnswer}
            />
            <br />
            <Question
              currentQuestion={currentQuestion}
              numberOfQuestions={numberOfQuestions}
              question={question}
              showRightAnimation={showRightAnimation}
              showWrongAnimation={showWrongAnimation}
            />
            <br />
          </>
        )}
        <Answers
          question={question}
          optionClicked={optionClicked}
          showRightAnimation={showRightAnimation}
          showWrongAnimation={showWrongAnimation}
        />
        <br />
        {question.country && (
          <Typography sx={{ marginBottom: "15px" }}>
            <a href="#" onClick={resetApp}>
              Back to Start
            </a>
          </Typography>
        )}

        {!question.country && (
          <>
            <Difficulty
              numberOfOptions={numberOfOptions}
              handleChange={handleChange}
            />
            <Start handleCountry={getCountry} />
          </>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
