import React, { useState } from 'react';
import StopWatchReal from './StopWatchReal';
import './App.css';

export default function App() {

  const addBars = ()=> {
    let barList:any = [];
    let barTop:any = [];
    let barBottom:any = [];
    let barLeft:any = [];
    let barRight:any = [];
    let bars = 0;
    while (bars < 4) { //Top and Bottom (4 sections)
      for (let i = 0; i < 5; i++) {
        let uniqueKey = `bar-${bars}-${i}`
        barTop.push(<div className='bar' style={{left: `${(i+2*i)+8 + bars*24}vw`, top: 0}} key={uniqueKey}></div>)
        barBottom.push(<div className='bar' style={{left: `${(i+2*i)+6 + bars*25}vw`, bottom: 0}} key={uniqueKey}></div>)
      }
      bars++;
    } 

    bars = 0;
    while (bars < 2) { //Top and Bottom (4 sections)
      for (let i = 0; i < 5; i++) {
        let uniqueKey = `bar-${bars}-${i}`
        barRight.push(<div className='bar' style={{right: `1vw`, top: `${(i+5*i)+13 + bars*45}vh`, transform: 'rotate(90deg)'}} key={uniqueKey}></div>)
        barLeft.push(<div className='bar' style={{left: `1vw`, top: `${(i+5*i)+13 + bars*45}vh`, transform: 'rotate(90deg)'}} key={uniqueKey}></div>)
      }
      bars++;
    } 

    barList.push(barTop);
    barList.push(barBottom);
    barList.push(barLeft);
    barList.push(barRight);
    return barList;
  }

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
      {addBars()}
    </div>
  );
}

