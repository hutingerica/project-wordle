import React from 'react';
import { sample } from '../../utils';
import { WORDS } from '../../data';

import GuessInput from '../GuessInput'
import GuessResult from '../GuessResult';
import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import WinBanner from '../WinBanner'
import LostBanner from '../LostBanner'
import Keyboard from '../KeyBoard'
import { checkGuess } from '../../game-helpers';



// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses,setGuesses] = React.useState([]);
  const [gameStatus,setGameStatus] = React.useState('active');
  const validatedGuesses = guesses.map((guess) =>
    checkGuess(guess, answer)
  );

  function handleSubmitedGuess(submitedGuess) {
    const nextGuesses = [...guesses,submitedGuess]
    setGuesses(nextGuesses);

    if(submitedGuess==answer){
      setGameStatus('win');
    }else if(nextGuesses.length >=NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost');
    }
  }
  
  return (
  <>
    <GuessResult guesses={guesses} answer={answer} />
    <Keyboard validatedGuesses={validatedGuesses}/>
    <GuessInput 
      handleSubmitedGuess={handleSubmitedGuess}
      gameStatus={gameStatus}
    />
    {gameStatus == 'win' && <WinBanner guessTime={guesses.length}/>}
    {gameStatus == 'lost' && <LostBanner answer={answer}/>}
    
  </>
  );
}

export default Game;
