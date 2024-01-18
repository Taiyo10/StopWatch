import React, { useState, useRef, useEffect } from 'react';
import StopWatch from './StopWatch'; 
import StopWatchButton from './StopWatchButton';
import { random } from './random'
import './App.css';

export default function StopWatchReal() {
  
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [lapList, addLap] = useState<number[]>([]);
  const [rotationMili, setRotationMili] = useState<number>(0);
  const [rotationSec, setRotationSec] = useState<number>(0);
  const [rotationMin, setRotationMin] = useState<number>(0);
  const [rotationHr, setRotationHr] = useState<number>(0);
  const [randomY, setRandomY] = useState<number[]>([]);
  const [randomX, setRandomX] = useState<number[]>([]);

  const timerRef = useRef<any>(null);

  function start() {
    if (!isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setIsRunning(true);
      setIsStarted(true);
    }
  }

  function pause() {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
    }
    if (!isRunning && isStarted) {
      start();
    }
  }

  function Reset() {
    if (isStarted) {
      clearInterval(timerRef.current);
      setIsRunning(false);
      setIsStarted(false);
      setTime(0);
      addLap([]);
    }
  }

  // Adds the current time to the lap list
  function lap() {
    if (isRunning) {
      addLap((prevLap) => [...prevLap, time]);
      setRandomY((prevY) => [...prevY, random(-30,35)]);
      setRandomX((prevX) => [...prevX, random(-30,40)]);
    }
  }


  // Sets the rotation of the hands
  useEffect(() => {
    setRotationMili((time % 1000) * 0.36);
    setRotationSec((Math.floor(time / 1000) % 60) * 6);
    setRotationMin((Math.floor(time / 60000) % 60) * 6)
    setRotationHr((Math.floor(time/3600000)) * 30)
  }, [time]);


  return (
    <div className='container, grid-item'>
      <div className='stopwatch'>
        <StopWatch time={time} />
        <div className='button-container'>
          <StopWatchButton onClick={start}> Start </StopWatchButton>
          <StopWatchButton onClick={pause}> {isStarted && !isRunning ? "Resume": "Pause"} </StopWatchButton>
          <StopWatchButton onClick={Reset}> Reset </StopWatchButton>
          <StopWatchButton onClick={lap}> Lap </StopWatchButton>
        </div>
        <ol>
          {lapList.map((lapTime, index) => <li className='lap' key={index}  style={{top: `${randomY[index]}vh`, left:`${randomX[index]}vw`}}>{<StopWatch time={lapTime} />}</li>)}
        </ol>
      </div>
      <div className='hands'>
        <div id='hour-hand' style={{ transform: `rotate(${rotationHr}deg)` }}></div> 
        <div id='min-hand' style={{ transform: `rotate(${rotationMin}deg)` }}></div>
        <div id='sec-hand' style={{ transform: `rotate(${rotationSec}deg)` }}></div>
        <div id='mili-hand' style={{ transform: `rotate(${rotationMili}deg)` }}></div>
      </div>
    </div>
  );
}

