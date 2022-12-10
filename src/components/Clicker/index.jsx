import React, { useState, useEffect, useRef } from "react";

const Clicker = () => {
  const [step, setStep] = useState(1);
  const [speed, setSpeed] = useState(1000);
  const [clicks, setClicks] = useState(0);
  const [isStarted, setIsStarted] = useState(false);
  const [isIncrement, setIsIncrement] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    autoClicks();
    return stopAutoClicks;
  }, []);

  function stepChange(e) {
    setStep(+e.target.value);
  }
  function speedChange(e) {
    setSpeed(+e.target.value);
  }
  const addClicks = () => {
    setClicks((clicks) => clicks + step);
  };
  const deleteClicks = () => {
    if (clicks > 0 && clicks >= step) {
      setClicks((clicks) => clicks - step);
    }
  };

  const autoClicks = () => {
    if (!isStarted) {
      setIsStarted(true);
      const intervalId = setInterval(addClicks, speed);
      intervalRef.current = intervalId;
    }
  };

  const stopAutoClicks = () => {
    clearInterval(intervalRef.current);
    setIsStarted(false);
  };

  const reset = () => {
    setClicks(0);
  };

  return (
    <div>
      <p>Clicks: {+clicks}</p>
      <button onClick={() => setIsIncrement(!isIncrement)}>
        {!isIncrement ? "Добавить" : "Отнять"}
      </button>
      <button onClick={isIncrement ? addClicks : deleteClicks}>
        {isIncrement
          ? `Добавить ${step} клика(-ов)`
          : `Отнять ${step} клик(-ов)`}
      </button>
      {/* <button onClick={deleteClicks}>Отнять {step} клик(-ов)</button> */}
      <button onClick={autoClicks}>
        Авто-клик по {step} клика(-ов) {speed}ms
      </button>
      <button onClick={stopAutoClicks}>Остановка авто-клика</button>
      <button onClick={reset}>Сброс</button>
      <select value={step} onChange={stepChange}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
        <option value={5}>5</option>
      </select>
      <select value={speed} onChange={speedChange}>
        <option value={500}>Пол секунды</option>
        <option value={1000}>Секунда</option>
        <option value={1500}>Полторы секунды</option>
        <option value={2000}>Две секунды</option>
        <option value={2500}>Две с половиной секунды</option>
      </select>
    </div>
  );
};

export default Clicker;
