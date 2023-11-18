import React, { useState } from 'react';
import OutputScreen from './outputScreen';
import CalculatorTitle from './CalculatorTitle';
import '../index.css';

const CalculatorOne = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
      setInput('');
    } else if (value === 'clear') {
      setInput('');
      setResult('');
    }else if(value==='delete'){
      const str=input;
      const newstr=str.substring(0,str.length-1);
      setInput(newstr);
    }
     else {
      setInput((prevInput) => prevInput + value);
    }
  
  };

  return (
    <div className="frame">
      <CalculatorTitle title='React Calculator'/>
      <div className='mainCalculator'>
        {/* <input type="text" value={input} readOnly /> */}
        <OutputScreen input={input} result={result} />
        {/* <div className="result">{result}</div> */}

      <div className='button-row'>
        <button onClick={() => handleButtonClick('clear')}>Clear</button>
        <button onClick={() => handleButtonClick('delete')}>Delete</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
      </div>
      <div className="button-row">
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
      </div>
      <div className='button-row'>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
      </div>
      <div className='button-row'>
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
      </div>

      <div className='button-row'>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
      </div>
    </div>
  </div>
  );
};

export default CalculatorOne;
