import React from 'react';
import CalculatorTopScreen from '../CalculatorTopScreen/CalculatorTopScreen.jsx';
import CalculatorTopResult from '../CalculatorTopResult/CalculatorTopResult.jsx';

export default class CalculatorTop extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <div className="col-md-8"><CalculatorTopScreen /></div>
                <div className="col-md-1 calculator-symbol">=</div>
                <div className="col-md-3"><CalculatorTopResult /></div>
            </div>
        )
    }
}