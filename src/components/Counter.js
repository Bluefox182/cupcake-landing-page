import React, { useState } from 'react';
import styled from 'styled-components';

function Counter() {
  const [counter, setCounter] = useState(1);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    setCounter(counter - 1);
  };
  return (
    <StyledCounter>
      <div className='Counter-Container'>
        <button
          className='counter-button'
          onClick={decrease}
          disabled={counter <= 1}
        >
          -
        </button>
        <h2>{counter}</h2>
        <button className='counter-button' onClick={increase}>
          +
        </button>
      </div>
      <div className='Add-Button'>
        <button className='button-add'>Add To Cart</button>
      </div>
    </StyledCounter>
  );
}

export default Counter;

const StyledCounter = styled.div`
  display: flex;
  width: 100%;
  padding: 5px 20px;
  justify-content: center;
  align-items: center;

  .Counter-Container {
    display: flex;
    padding: 0 20px;
    align-items: center;
    h2 {
      padding: 0 10px;
      color: #354259;
    }
  }

  .counter-button {
    padding: 5px;
    border: none;
    width: 30px;
    border-radius: 50%;
    background-color: #f47c7c;
    color: #f9f9f9;
    cursor: pointer;
    &:disabled {
      background-color: #ccc;
    }
  }
  .Add-Button {
    padding: 7px;
  }

  .button-add {
    padding: 5px 10px;
    background-color: #ad8b73;
    border: none;
    border-radius: 10px;
    color: #f9f9f9;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    cursor: pointer;
    &:hover {
      background-color: #f47c7c;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
        rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    }
  }
`;
