'use strict'

import React from 'react';
import ReactDOM from 'react-dom';
import CalculatorTop from './components/CalculatorTop/CalculatorTop.jsx';
import CalculatorBoard from './components/CalculatorBoard/CalculatorBoard.jsx';
import CalculatorHistory from './components/CalculatorHistory/CalculatorHistory.jsx';

ReactDOM.render(<CalculatorTop />, document.getElementById('calculator-top'));
ReactDOM.render(<CalculatorBoard />, document.getElementById('calculator-board'));
ReactDOM.render(<CalculatorHistory />, document.getElementById('calculator-history'));
