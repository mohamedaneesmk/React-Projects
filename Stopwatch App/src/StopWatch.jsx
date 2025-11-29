import React, { useState, useEffect, useRef } from 'react';

export default function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const formatTime = (ms) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const milliseconds = Math.floor((ms % 1000) / 10);

    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
  };

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setLaps([]);
  };

  const handleLap = () => {
    if (time > 0) {
      setLaps(prev => [{ time, lapTime: time - (prev[0]?.time || 0) }, ...prev]);
    }
  };

  return (
    <div className="stopwatch-container">
      <div className="stopwatch-card">
        <h1 className="title">Stopwatch</h1>
        
        <div className="time-display">
          <div className="time-text">
            {formatTime(time)}
          </div>
        </div>

        <div className="controls">
          <button
            onClick={handleStartStop}
            className={`btn btn-primary ${isRunning ? 'btn-stop' : 'btn-start'}`}
          >
            <span className="btn-icon">{isRunning ? '⏸' : '▶'}</span>
            {isRunning ? 'Stop' : 'Start'}
          </button>

          <button
            onClick={handleReset}
            className="btn btn-reset"
          >
            <span className="btn-icon">↻</span>
            Reset
          </button>

          <button
            onClick={handleLap}
            disabled={time === 0}
            className="btn btn-lap"
          >
            <span className="btn-icon">⚑</span>
            Lap
          </button>
        </div>

        {laps.length > 0 && (
          <div className="laps-container">
            <h2 className="laps-title">Lap Times</h2>
            <div className="laps-list">
              {laps.map((lap, index) => (
                <div key={index} className="lap-item">
                  <span className="lap-number">Lap {laps.length - index}</span>
                  <div className="lap-times">
                    <div className="lap-time">{formatTime(lap.lapTime)}</div>
                    <div className="lap-total">
                      Total: {formatTime(lap.time)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
