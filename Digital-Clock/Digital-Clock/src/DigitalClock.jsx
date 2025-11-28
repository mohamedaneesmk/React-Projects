import React, { useState, useEffect } from "react";

function DigitalClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`;
  }

  function padZero(number) {
    return (number < 10 ? "0" : "") + number;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="backdrop-blur-md bg-white/10 rounded-3xl p-12 shadow-2xl border border-white/20">
        <div className="text-white text-center text-8xl font-bold font-mono drop-shadow-[0_5px_10px_rgba(0,0,0,0.8)]">
          <span>{formatTime()}</span>
        </div>
      </div>
    </div>
  );
}

export default DigitalClock;