import React from "react";
import "./App.css";
import Data from "./data_json.js";

import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

let newData = [];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "gray" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: "50%",
  hover: { backgroundColor: "rgb(7, 177, 77, 0.42)" },
}));

function App() {
  console.log(Data);

  const [score, setScore] = React.useState(0);
  const [rightAnswer, setRightAnswer] = React.useState(0);
  const [wrongAnswer, setWrongAnswer] = React.useState(0);
  const [currentQuestion, setCurrentQuestion] = React.useState(0);

  const [question, setQuestion] = React.useState({
    question: "What is the capital of",
    country: "",
    options: [],
  });

  const numberOfQuestions = 10;
  const numberOfOptions = 3;

  function getRandom(a) {
    const randomNumber = Math.floor(Math.random() * a);
    return randomNumber;
  }

  function getCountry() {
    if (Data.length < numberOfOptions + 2) {
      Data.push.apply(Data, newData);
      newData = [];
      console.log(newData);
      console.log(Data);
    }

    const randomCountry = getRandom(Data.length);
    const correctCountry = Data[randomCountry];

    newData.push(correctCountry);
    console.log(newData);
    const country = Data[randomCountry].country;
    correctCountry.isCorrect = true;
    correctCountry.id = 666;
    Data.splice(randomCountry, 1);

    const options = [];
    const splicedCountries = [];
    options.push(correctCountry);

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
    options.sort(() => (Math.random() > 0.5 ? 1 : -1));

    setQuestion((prevQuestion) => ({
      ...prevQuestion,
      country: country,
      options: options,
    }));
    setCurrentQuestion(currentQuestion + 1);
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

  function resetQuestions() {
    setScore(0);
    setRightAnswer(0);
    setWrongAnswer(0);
    setCurrentQuestion(1);
  }

  return (
    <div className="App">
      <div className="container--title">
        
        <Typography variant="h5">
          <strong>CAPITAL QUIZ 1.0</strong>
        </Typography>
      </div>

      <div className={currentQuestion === 11 ? "container flex" : "none"}>
        
          <Item>
            <Typography variant="h6">
              {score} out of {numberOfQuestions} correct (
              {(score / numberOfQuestions) * 100}%)
            </Typography>
            <br />
            <Button onClick={resetQuestions} variant="contained">
              Start Again
            </Button>
            <br />
            <br />
          </Item>
        
      </div>

      <div className={currentQuestion === 11 ? "container none" : "container"}>
        {question.country && (
          <>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={1}
            >
              <Item>
                <div className="answer">
                  <ThumbUpIcon color="success" />

                  <strong>{rightAnswer}</strong>
                </div>
              </Item>
              <Item>
                <div className="answer">
                  <ThumbDownIcon color="error" />

                  <strong>{wrongAnswer}</strong>
                </div>
              </Item>
            </Stack>
            <br />

            {/* <Typography variant="h6" padding={1} color="gray">
              Question {currentQuestion} out of {numberOfQuestions}
            </Typography> */}

            <Divider>
              <Chip label={`${currentQuestion} out of ${numberOfQuestions}`} />
            </Divider>
            <br />

            <Typography variant="h5">
              {question.question} {question.country}?
            </Typography>
            <br />
            <br />

            <Divider></Divider>
            <br />
          </>
        )}

        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          {question.options.map((answer) => {
            return (
              <Button
                variant="contained"
                
                fullWidth="true"
                onClick={() => optionClicked(answer.isCorrect)}
                key={answer.id}
              >
                {answer.capital}
              </Button>
            );
          })}
        </Stack>

        {!question.country && (
          <Button onClick={getCountry} variant="contained">
            Start
          </Button>
        )}
      </div>
    </div>
  );
}

export default App;
