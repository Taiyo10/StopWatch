import React, { useState, useRef, useEffect } from 'react';
import StopWatch from './StopWatch'; 
import StopWatchButton from './StopWatchButton';
import './App.css';

export default function StopWatchReal() {
  
  const [time, setTime] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [lapList, addLap] = useState<number[]>([]);
  const [rotationSec, setRotationSec] = useState<number>(0);
  const [rotationMin, setRotationMin] = useState<number>(0);
  const [rotationHr, setRotationHr] = useState<number>(0);

  const timerRef = useRef<any>(null);

  function start() {
    if (!isRunning) {
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
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


  function lap() {
    if (isRunning) {
      addLap((prevLap) => [...prevLap, time]);
    }
  }


  useEffect(() => {
    setRotationSec((time % 60) * 6);
    setRotationMin((Math.floor(time/60)%60) * 6)
    setRotationHr(((Math.floor(time/3600))*30))
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
          {lapList.map((lapTime, index) => <li key={index}>{<StopWatch time={lapTime} />}</li>)}
        </ol>
      </div>
      <div className='hands'>
        <div id='hour-hand' style={{ transform: `rotate(${rotationHr}deg)` }}></div> 
        <div id='min-hand' style={{ transform: `rotate(${rotationMin}deg)` }}></div>
        <div id='sec-hand' style={{ transform: `rotate(${rotationSec}deg)` }}></div>
      </div>
    </div>
  );
}

