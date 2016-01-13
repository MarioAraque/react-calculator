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
        window.addEventListener('executeCalculatorOperation', this.executeOperation.bind(this));
    }

    componentWillUnmount() {
        window.removeEventListener('updateCalculatorScreen', this.update.bind(this));
        window.removeEventListener('updateCalculatorOperator', this.updateOperator.bind(this));
        window.removeEventListener('executeCalculatorOperation', this.executeOperation.bind(this));
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
        });
    }

    executeOperation(event) {
        if(event.detail == 'execute') {
            if(this.isOperatorUndefined()) return;
            this.setState({ currentValue: eval(this.state.firstValue + this.state.operator + this.state.secondValue) });
        } else {
            this.clearTopScreen();
        }
    }

    clearTopScreen() {
        this.setState({
            firstValue: '',
            operator: '',
            secondValue: '',
            currentValue: ''
        });
    }

    render() {
        return (
            <div className="col-md-8 calculator-field">{ this.state.currentValue }</div>
        )
    }
}