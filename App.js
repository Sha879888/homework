import React, { useState } from 'react';

import CalculatorIpoteka from './components/CalculatorIpoteka.js';
import CalculatorAuto from './components/CalculatorAuto.js';
import CalculatorPotreb from './components/CalculatorPotreb.js';
import CalculatorProc from './components/CalculatorProc.js';

import './App.css';

let App = () => {
  const [activeCalculator, setActiveCalculator] = useState(1);

  const renderCalculator = () => {
    switch (activeCalculator) {
      case 1:
        return <CalculatorIpoteka text="ипотеку" />;
      case 2:
        return <CalculatorAuto text="автокредит" />;
      case 3:
        return <CalculatorPotreb text="кредит" />;
      case 4:
        return <CalculatorProc text="" />;
      default:
        return <CalculatorIpoteka text="ипотеку" />;
    }
  };

  return (
    <div className="App">
      <header></header>
      <h2>Рассчитайте условия</h2>
      <div className="Btns">
        <button className="Потреб" onClick={() => setActiveCalculator(3)}>Калькулятор Потреб.Кредита (14.5%)</button>
        <button className="Ипотека" onClick={() => setActiveCalculator(1)}>Калькулятор Ипотеки (9.6%)</button>
        <button className="Авто" onClick={() => setActiveCalculator(2)}>Калькулятор Автокредита (3.5%)</button>
        <button className="Процент" onClick={() => setActiveCalculator(4)}>Калькулятор</button>
      </div>
      <h6 style={{fontSize: "14px", color: "rgb(40, 40, 40)"}}>Узнайте предварительные условия и платёж</h6>
      <div className="CalculatorForm">
        {renderCalculator()}
      </div>
    </div>
  );
}

export default App;

//<header className="App-header">