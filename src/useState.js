import React, { useState } from 'react';

function AccountClicks() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <p>Você clicou x vezes</p>
      <button onClick={() => setCounter(counter++)}>Clicar</button>
    </div>
  );
}