import React, { useState, useEffect } from 'react';
import './App.css';

//prettier > foramat auto save
//eslint > auto fix

function App() {
  const [value, setValue] = useState('');
  useEffect(() => {
    console.log(value);
  }, [value]);

  return (
    <div>
      <p>와우</p>
    </div>
  );
}

export default App;
