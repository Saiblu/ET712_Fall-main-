import './App.css';
import {useState} from 'react';
// use State 


function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue(`X`);
  }

  return (
    <button className='square' onClick={handleClick}>
      {value}
    </button>
  );
}

function App() {
  return (
    <div>
      <h1 className='title'>Tic Tac Toe by Elias Muniz</h1>
      <div className='boardcontainer'>
        <div className='board-row'>
          <Square />
          <Square />
          <Square />
        </div>
        <div className='board-row'>
          <Square />
          <Square />
          <Square />
        </div>
        <div className='board-row'>
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
    
  );
}

export default App;
