import React from 'react';

function WinBanner({guessTime}) {
  return(
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in
        <strong>{guessTime === 1 ? '1 guess' : `${guessTime} guesses`}</strong>.
      </p>
    </div>
    
  )

}

export default WinBanner;
