import React from 'react';

import {NUM_OF_GUESSES_ALLOWED} from '../../constants'
import {range} from '../../utils'
import Guess from '../Guess'

function GuessResult({guesses, answer}) {
  const backgroundDisplay = range(NUM_OF_GUESSES_ALLOWED)

  return (
    <div className="guess-results">
      {backgroundDisplay.map((round)=>(
        <Guess key={round} value={guesses[round]} answer={answer}/>
      ))}
    </div>
  );
}

export default GuessResult;