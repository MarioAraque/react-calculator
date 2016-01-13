import React from 'react';

export default class CalculatorButton extends React.Component {
    constructor() {
        super();

        this.operatorKey = 'operator';
        this.operatorEventName = 'updateCalculatorOperator';
        this.literalKey = 'literal';
        this.literalEventName = 'updateCalculatorScreen';
        this.submitKey = 'submit';
        this.submitEventName = 'executeCalculatorOperation';
    }

    handleClick() {
        let operator = this.props.type;
        let eventName = this.literalEventName;
        let value = this.props.value;

        if(operator === this.operatorKey) {
            eventName = this.operatorEventName;
        } else if(operator === this.submitKey) {
            value = this.props.action;
            eventName = this.submitEventName;
        }

        let event = new CustomEvent(eventName, { 'detail': value });
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