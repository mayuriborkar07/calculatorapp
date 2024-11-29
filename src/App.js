import React, { useState } from 'react';

// Include the CSS directly in the component
const App = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleEvaluate = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <input type="text" value={input} readOnly />
        </div>
        <div className="buttons">
          <button onClick={() => handleButtonClick('1')}>1</button>
          <button onClick={() => handleButtonClick('2')}>2</button>
          <button onClick={() => handleButtonClick('3')}>3</button>
          <button onClick={() => handleButtonClick('+')}>+</button>
          <button onClick={() => handleButtonClick('4')}>4</button>
          <button onClick={() => handleButtonClick('5')}>5</button>
          <button onClick={() => handleButtonClick('6')}>6</button>
          <button onClick={() => handleButtonClick('-')}>-</button>
          <button onClick={() => handleButtonClick('7')}>7</button>
          <button onClick={() => handleButtonClick('8')}>8</button>
          <button onClick={() => handleButtonClick('9')}>9</button>
          <button onClick={() => handleButtonClick('*')}>*</button>
          <button onClick={() => handleButtonClick('0')}>0</button>
          <button onClick={handleClear}>C</button>
          <button onClick={handleEvaluate}>=</button>
          <button onClick={() => handleButtonClick('/')}>/</button>
        </div>
      </div>

      {/* CSS Styling in the same file */}
      <style jsx="true">
        {`
          /* Global styles for the entire app */
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
          }

          /* Container for the calculator */
          .calculator {
            background-color: #fff;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
            width: 260px;
            padding: 20px;
            text-align: center;
          }

          /* Display section */
          .display input {
            width: 100%;
            padding: 15px;
            font-size: 2em;
            text-align: right;
            border: 1px solid #ccc;
            border-radius: 10px;
            margin-bottom: 20px;
            box-sizing: border-box;
          }

          /* Button styling */
          .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
          }

          button {
            padding: 20px;
            font-size: 1.5em;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            border-radius: 8px;
            cursor: pointer;
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          button:hover {
            background-color: #e0e0e0;
            transform: scale(1.05);
          }

          button:active {
            background-color: #d0d0d0;
            transform: scale(1);
          }

          /* Special button styles */
          button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }

          button:nth-child(4n) {
            background-color: #f8b400;
            color: white;
          }

          button:nth-child(4n):hover {
            background-color: #f39c12;
          }

          button:nth-child(4n):active {
            background-color: #e67e22;
          }

          button:nth-child(15) {
            background-color: #3498db;
            color: white;
          }

          button:nth-child(15):hover {
            background-color: #2980b9;
          }

          button:nth-child(15):active {
            background-color: #1f6f9d;
          }

          button:nth-child(16) {
            background-color: #e74c3c;
            color: white;
          }

          button:nth-child(16):hover {
            background-color: #c0392b;
          }

          button:nth-child(16):active {
            background-color: #a83229;
          }
        `}
      </style>
    </div>
  );
};

export default App;