import React, { useState, useEffect } from 'react';
import './App.css'
function SnabbdomComponent() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  // Log message when the component is mounted
  useEffect(() => {
    console.log("SnabbdomComponent mounted");
  }, []);

  // Log message when the state is changed
  useEffect(() => {
    console.log(`State changed: count is now ${count}`);
  }, [count]);

  return (
    <div className="background">
      <h1>Count: {count}</h1>
      <button className="button" onClick={increment}>Add</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <SnabbdomComponent />
    </div>
  );
}

export default App;