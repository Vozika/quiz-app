import React from "react";
import "./App.css";
import Data from "./data_json.js";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";

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
      <Typography variant="h3" paddingBottom={3}>
        Capital Quiz App
      </Typography>

      <div className={currentQuestion === 11 ? "gameover" : "gameover none"}>
        <Stack
          width="100vw"
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Item>
            <Typography variant="h5" paddingTop={2}>
              {score} out of {numberOfQuestions} is correct - (
              {(score / numberOfQuestions) * 100}%)
            </Typography>
            <br />
            <Button onClick={resetQuestions} variant="contained">
              Start Again
            </Button>
            <br />
            <br />
          </Item>
        </Stack>
      </div>

      <div className={currentQuestion === 11 ? "container none" : "container"}>
        {question.country && (
          <>
            {/* <h2>Score: {score}</h2> */}

            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Item>
                Right answers:
                <Typography variant="h6" padding={1} color="green">
                  <strong>{rightAnswer}</strong>
                </Typography>
              </Item>
              <Item>
                Wrong answers:{" "}
                <Typography variant="h6" padding={1} color="red">
                  <strong>{wrongAnswer}</strong>
                </Typography>
              </Item>
            </Stack>

            <Typography variant="h6" padding={1} color="gray">
              Question {currentQuestion} out of {numberOfQuestions}
            </Typography>
            <Typography variant="h4" paddingBottom={3}>
              {question.question} {question.country}?
            </Typography>
          </>
        )}
        <Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {question.options.map((answer) => {
              return (
                <Item
                  onClick={() => optionClicked(answer.isCorrect)}
                  key={answer.id}
                >
                  <Button>{answer.capital}</Button>
                </Item>
              );
            })}
          </Stack>
        </Box>
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
