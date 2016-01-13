import React from 'react';
import CalculatorTop from '../CalculatorTop/CalculatorTop.jsx';
import CalculatorBoard from '../CalculatorBoard/CalculatorBoard.jsx';
import CalculatorHistory from '../CalculatorHistory/CalculatorHistory.jsx';

export default class Calculator extends React.Component {
    render() {
        return (
            <div className="container">
                <CalculatorTop />
                <CalculatorBoard />
                <CalculatorHistory />
            </div>
        )
    }
}