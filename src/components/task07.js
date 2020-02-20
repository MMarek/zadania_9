import React, {Component} from "react";


class Task07 extends Component {

    render() {

        function genNumber() {
            return Math.round(Math.random() * 9 + 1)
        }

        let num1 = genNumber();
        let num2 = genNumber();

        let result = parseFloat(prompt(`Podaj sumę liczby ${num1} oraz ${num2} do zadania 7`));

        let jsx;
        if (num1 + num2 === result) {
            jsx = <div style={{background: 'green'}}>Poprawna odpowiedź</div>;
        } else {
            jsx = <div style={{background: 'red'}}>Odpowiedź błędna</div>;
        }

        return jsx;
    }
}

export default Task07;