import React, { useState, useEffect } from "react";

const Clicker = () => {
  const [step, setStep] = useState(1);
  const [speed, setSpeed] = useState(1000);
  const [clicks, setClicks] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  function stepChange(e) {
    setStep(e.target.value);
  }
  function speedChange(e) {
    setSpeed(e.target.value);
  }
  const addClicks = () => {
    setClicks((clicks) => clicks + +step);
  };
  const deleteClicks = () => {
    if (clicks > 0 && clicks >= step) {
      setClicks((clicks) => clicks - +step);
    }
  };

  const autoClicks = () => {
    if (!isStarted) {
      setIsStarted(true);
      const intervalId = setInterval(addClicks, +speed);
      setIntervalId(intervalId);
    }
  };

  const stopAutoClicks = () => {
    clearInterval(intervalId);
    setIsStarted(false);
  };

  const reset = () => {
    setClicks(0);
    setIsStarted(true)
  };

  /*   useEffect(() => {
    autoClicks();
    return stopAutoClicks();
  }, []); */

  return (
    <div>
      <p>Clicks: {+clicks}</p>
      <button onClick={addClicks}>Добавить {step} клика(-ов)</button>
      <button onClick={deleteClicks}>Отнять {step} клик(-ов)</button>
      <button onClick={autoClicks}>
        Авто-клик по {step} клика(-ов) {speed}ms
      </button>
      <button onClick={stopAutoClicks}>Остановка авто-клика</button>
      <button onClick={reset}>Сброс</button>
      <select value={step} onChange={stepChange}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>
      <select value={speed} onChange={speedChange}>
        <option>500</option>
        <option>1000</option>
        <option>1500</option>
        <option>2000</option>
        <option>2500</option>
      </select>
    </div>
  );
};

export default Clicker;
