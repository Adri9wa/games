import React, { ChangeEvent, useState } from "react";
import { GuessWrap, PageWrapper } from "./styles";
import { Button, TextField, Typography } from "@mui/material";

const NumbersGamePage = () => {
  const initialState = {
    started: false,
    guess: "",
    pickedNumber: "",
    rightAnswers: 0,
    showRightAnswers: false,
  };
  const [gameState, setGameState] = useState(initialState);
  const handleStartGame = () => {
    const random4Digits = Math.floor(1000 + Math.random() * 9000).toString();

    setGameState((prev) => ({
      ...prev,
      started: true,
      pickedNumber: random4Digits,
    }));
  };

  const setGuess = (guess: string) => {
    setGameState((prev) => ({ ...prev, guess }));
  };

  const handleChangeGuess = (e: ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.toString();
    if (val.length > 4) return;
    setGuess(val);
  };

  const handleUserGuess = () => {
    const guessedNumbers = gameState.pickedNumber
      .split("")
      .filter((digit, index) => gameState.guess[index] === digit);
    console.log(guessedNumbers);
    setGameState((prev) => ({
      ...prev,
      rightAnswers: guessedNumbers.length,
      showRightAnswers: true,
    }));
    // if(gameState.pickedNumber)
  };

  console.log(gameState);

  return (
    <PageWrapper>
      {gameState.started ? (
        <GuessWrap>
          <TextField
            value={gameState.guess}
            type="number"
            label="Type your guess"
            onChange={handleChangeGuess}
            inputProps={{ maxLength: 4 }}
          />
          <Button variant="contained" onClick={handleUserGuess}>
            Next
          </Button>
          {gameState.showRightAnswers && (
            <Typography>Right answers: {gameState.rightAnswers}</Typography>
          )}
        </GuessWrap>
      ) : (
        <Button variant="contained" onClick={handleStartGame}>
          Start
        </Button>
      )}
    </PageWrapper>
  );
};

export default NumbersGamePage;
