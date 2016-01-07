import React from 'react';

export default class CalculatorTopScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            firstValue: '',
            operator: '',
            secondValue: '',
            currentValue: ''
        };
    }

    componentDidMount() {
        window.addEventListener('updateCalculatorScreen', this.update.bind(this));
        window.addEventListener('updateCalculatorOperator', this.updateOperator.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('updateCalculatorScreen', this.update.bind(this));
        window.removeEventListener('updateCalculatorOperator', this.updateOperator.bind(this));
    }

    isOperatorUndefined() {
        return this.state.operator === '';
    }

    update(event) {
        if(this.isOperatorUndefined()) {
            this.setState({ firstValue: this.state.firstValue + event.detail });
            this.setState({ currentValue: this.state.firstValue + event.detail });
        } else {
            this.setState({ secondValue: this.state.secondValue + event.detail });
            this.setState({ currentValue: this.state.secondValue + event.detail });
        }
    }

    updateOperator(event) {
        this.setState({
            operator: event.detail,
            currentValue: event.detail
        }); console.log(this.state);
    }

    render() {
        return (
            <div className="calculator-field">{ this.state.currentValue }</div>
        )
    }
}