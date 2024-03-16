import React from 'react';
import {range} from '../../utils'
import { checkGuess } from '../../game-helpers';

function Guess({value,answer}) {
  const words = range(5);
  const result = checkGuess(value,answer)
  
  return (
    <p className="guess">
      {words.map( (index) =>(
        result ?
        <span key={index} className={`cell ${result[index].status}`}>{result[index].letter}
        </span> 
        : 
        <span key={index} className="cell"> {undefined} </span>
      ))}
    </p>
  );
}

export default Guess;
