import React from 'react';

function GuessInput({handleSubmitedGuess,gameStatus}) {

  const [submittedguess,setSubmittedGuess] = React.useState('');

  function inputFormHandeler(event){
    event.preventDefault();
    handleSubmitedGuess(submittedguess);
    setSubmittedGuess('')
  }

  return(
  <form onSubmit={inputFormHandeler} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input 
        id="guess-input" 
        type="text"
        required
        disabled={gameStatus !== 'active' }
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        value={submittedguess}
        onChange={ (event) => {
          const toString = event.target.value.toString();
          const toUppercase = toString.toUpperCase();
          setSubmittedGuess(toUppercase);
          
        }} 
      />
  </form>
  );
}

export default GuessInput;
