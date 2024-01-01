import { useState } from 'react';
import './App.css';
import Reorder from './Reorder';

function App() {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1);
  };

  const handleDecrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };


  return (
    <>

      <div className="card">
        <h1>Inventory Tracker</h1>
        <button>
          Inventory count : {count}
        </button>
        <div className='function'>
          <button onClick={handleIncrease}>+</button>
          <button onClick={handleDecrease} disabled={!count}>-</button>
        </div>
        {count === 0 && <Reorder onReorder={() => setCount(5)} />}
      </div>
    </>
  );
}

export default App;
