import React, {Component} from "react";


class Task05 extends Component {

    render() {
        let num1 = parseFloat(prompt('Wprowadź pierwszą dowolną liczbę (zad.5)'));
        let num2 = parseFloat(prompt('Wprowadź drugą dowolną liczbę (zad.5)'));
        let operation = prompt('Wprowadź operację (+ , - , * , /) (zad.5)');

        let jsx;
        if (operation === '+') {
            jsx = <h1>{num1} + {num2} = {num1 + num2}</h1>
        } else if (operation === '-') {
            jsx = <h2>{num1} - {num2} = {num1 - num2}</h2>
        } else if (operation === '*') {
            jsx = <h3>{num1} * {num2} = {num1 * num2}</h3>
        } else if (operation === '/') {
            jsx = <h4>{num1} / {num2} = {num1 / num2}</h4>
        }
        return jsx;
    }
}

export default Task05;