import React, {Component} from "react";


class Task02 extends Component {

    render() {
        let num1 = parseFloat(prompt('Wprowadź pierwszą liczbę'));
        let num2 = parseFloat(prompt('Wprowadź drugą liczbę'));

        return (

                <div>{num1} + {num2} = {num1 + num2}</div>

        )
    }
}

export default Task02;