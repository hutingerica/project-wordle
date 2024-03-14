import React from 'react';

function GuessInput() {
  const [guess,setGuess] = React.useState('');

  function guessHandeler(event){
    event.preventDefault();
    setGuess('')

  }
  return(
  <form onSubmit={guessHandeler} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        required
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={guess}
        onChange={ (event) => {
          const toString = event.target.value.toString();
          const toUppercase = toString.toUpperCase();
          setGuess(toUppercase);
        }} 
      />
  </form>
  );
}

export default GuessInput;
