import React from 'react';
import { useState, useEffect } from 'react';
import SeriesNum from '../interfaces/SeriesNum';
import SeriesHeader from './SeriesHeader';
import { SeriesDispatch, Event } from '../types/UtilTypes';

const STORAGE_KEY = 'fibonacci_key';

export default function FibonacciSeq(): any {
  const [seq, setSeq]: [SeriesNum[], SeriesDispatch] = useState([
    {
      pos: 1,
      value: 1
    },
    {
      pos: 2,
      value: 2
    }
  ]); 
  function addToFibonacci(e: Event) {
    e.preventDefault();
    const lastElem = seq[seq.length - 1];
    const nextToLast = seq[seq.length - 2];
    const newElem: SeriesNum = {
      pos: lastElem.pos + 1,
      value: lastElem.value + nextToLast.value
    };
    setSeq(prevElems => [...prevElems, newElem]);
  }
  function clearFibonacci(e: Event) {
    e.preventDefault();
    setSeq([
       {
        pos: 1,
        value: 1
       },
       {
         pos: 2,
         value: 2
       }
    ]);
  }  
  return (
    <div>
      <div className="box">
        <SeriesHeader title="Fibonacci Series" />
        <div>
          <button onClick={addToFibonacci} className="button is-success is-family-code">Add to Fibonacci Sequence</button>
          <button onClick={clearFibonacci} className="button is-danger is-family-code">Clear Fibonacci Sequence</button>
        </div>
      </div>
      <div className='box'>
        <SeriesHeader title="Results:" />
        {
          seq.map(seqNum => <p className="is-inline-block mr-2">
            {seqNum.value},
          </p>) 
        }
      </div>
    </div>
  );  
}