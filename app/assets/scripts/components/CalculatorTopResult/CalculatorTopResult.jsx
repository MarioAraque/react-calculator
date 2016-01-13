import React from 'react';

export default class CalculatorTopResult extends React.Component {
    constructor() {
        super();

        this.state = {
            result: ''
        }
    }

    render() {
        return (
            <div className="col-md-3 calculator-field">{ this.state.result }</div>
        )
    }
}