import React from 'react';

export default class CalculatorButton extends React.Component {
    constructor() {
        super();

        this.operatorKey = 'operator';
        this.operatorEventName = 'updateCalculatorOperator';
        this.literalKey = 'literal';
        this.literalEventName = 'updateCalculatorScreen';
    }

    handleClick() {
        let operator = this.props.type;
        let eventName = this.literalEventName;

        if(operator === this.operatorKey) {
            eventName = this.operatorEventName;
        }
console.log(eventName);
        let event = new CustomEvent(eventName, { 'detail': this.props.value });
        window.dispatchEvent(event);
    }

    render() {
        return (
            <button className="btn btn-default" onClick={this.handleClick.bind(this)}>
                { this.props.value }
            </button>
        )
    }
}