import { useState, useEffect } from 'react';
import Header from './components/Header';
import CountdownTimer from './components/CountdownTimer';
import './App.css';

function App() {
  const [year, setYear] = useState(new Date().getFullYear() + 1);

  useEffect(() => {
    const interval = setInterval(
      () => setYear(new Date().getFullYear() + 1),
      1000
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <CountdownTimer date={`Jan 01 ${year}`} />
    </div>
  );
}

export default App;
