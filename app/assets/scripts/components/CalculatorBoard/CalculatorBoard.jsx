import React from 'react';
import CalculatorButton from '../CalculatorButton/CalculatorButton.jsx';

export default class CalculatorBoard extends React.Component {
    render() {
        return (
            <div className="col-md-6">
                <div className="row">
                    <div className="col-md-2">
                        <CalculatorButton value="7" type="literal" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="8" type="literal" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="9" type="literal" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <CalculatorButton value="4" type="literal" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="5" type="literal" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="6" type="literal" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="-" type="operator" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="+" type="operator" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <CalculatorButton value="1" type="literal" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="2" type="literal" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="3" type="literal" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="/" type="operator" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="*" type="operator" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <CalculatorButton value="C" type="submit" action="clear" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="0" type="literal" />
                    </div>
                    <div className="col-md-2">
                        <CalculatorButton value="=" type="submit" action="execute" />
                    </div>
                </div>
            </div>
        )
    }
}