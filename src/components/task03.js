import React, {Component} from "react";

class Task03 extends Component {

    render() {
        let year = parseFloat(prompt('Twój rok urodzenia, to?'));
        let currentYear = new Date().getFullYear();

        return (
            <h1>Doświadczyłeś użytkowniku, już {currentYear - year} lat życia :) </h1>
        )
    }
}

export default Task03;