import React, {Component} from "react";


class Task02 extends Component {

    render() {
        let num1 = parseFloat(prompt('Wprowadź pierwszą dowolną liczbę (zad.2)'));
        let num2 = parseFloat(prompt('Wprowadź drugą dowolną liczbę (zad.2)'));

        return (

                <div>{num1} + {num2} = {num1 + num2}</div>

        )
    }
}

export default Task02;