import React from 'react';

function KeyBoard({validatedGuesses}) {
  const row1 = ['Q','W','E','R','T','Y','U','I','O','P'];
  const row2 = ['A','S','D','F','G','H','J','K','L'];
  const row3 = ['Z','X','C','V','B','N','M']
  const ROW = [row1,row2,row3]


  const statusObj = {}
  const allLetters = validatedGuesses.flat() 

  allLetters.map(({ letter, status }) => {
    const currentStatus = statusObj[letter];

    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }

  // The same letter might have multiple matched statuses.
    // For example, if the answer is "APPLE" and the user guesses
    // "PAPER", then the letter "P" is misplaced (for the first P)
    // and correct (for the second P).
    //
    // We want to prioritize the statuses in this order:
    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    const currentStatusRank = STATUS_RANKS[currentStatus]; 
    console.log(letter)
    console.log(currentStatusRank)
    const newStatusRank = STATUS_RANKS[status];
    console.log(newStatusRank)

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }

  })

  return (
    <div className="keyboard">
      {ROW.map( (row,index) =>
        <p  className='wordRow' key={index}>
          {row.map( letter => 
            <span 
              className={`wordCell ${statusObj[letter]}`} 
              key={letter}> {letter} 
            </span>)
          }
        </p>
      )}
    </div>
  );
}

export default KeyBoard;
