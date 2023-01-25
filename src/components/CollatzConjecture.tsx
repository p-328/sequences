import React from 'react';
import { useState, useRef } from 'react';
import { Event, RefInput } from '../types/UtilTypes';
import SeriesHeader from './SeriesHeader';

export default function CollatzConjecture() {
  const [chainRes, setChainRes] = useState([0]);
  const inputRef = useRef() as RefInput;
  
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const input = inputRef.current.value;
    if (input == null) return;
    let number = Number(input);
    const newArr: number[] = [];
    while (number > 1) {
      newArr.push(number);
      if (number % 2 !== 0) {
        number = 3 * number + 1;
      } else {
        number /= 2;
      }
    }
    newArr.push(1);
    setChainRes(newArr);
    inputRef.current.value = "";
  };

  const clearChainRes = (e: Event) => {
    e.preventDefault();
    setChainRes([]);
  };
  
  return (
    <div>
      <div className='box'>
        <SeriesHeader title="Collatz Conjecture" />
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <p className='control'>
              <input className='input' ref={inputRef} type="number" placeholder='Enter number' min="0" required/>
            </p>
          </div>
          <input className="button is-success is-family-code" type="submit"/>
        </form>
      </div>
      <div className='box'>
        <SeriesHeader title="Results" />
        <button className='button is-primary is-family-code' onClick={clearChainRes}>Clear sequence</button>
        <br />
        {chainRes.map(num => <p className="is-inline-block mr-2">{num}</p>)}
      </div>
      
    </div>
  );
}