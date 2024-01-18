import React from 'react';
import StopWatchReal from './StopWatchReal';
import './App.css';

export default function App() {


  return (
    <div>
      <div className='grid-container'>
        <h1 className='grid-item'>10</h1>
        <h1 className='grid-item'>11</h1>
        <h1 className='grid-item'>12</h1>
        <h1 className='grid-item'>1</h1>
        <h1 className='grid-item' >2</h1>
        <h1 className='grid-item'>3</h1>
        <h1 className='grid-item'>4</h1>
        <h1 className='grid-item'>5</h1>
        <h1 className='grid-item'>6</h1>
        <h1 className='grid-item'>7</h1>
        <h1 className='grid-item'>8</h1>
        <h1 className='grid-item'>9</h1>
        <StopWatchReal />
      </div>
    </div>
  );
}

