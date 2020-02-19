import React, {Component} from "react";

class Task08 extends Component {
    render() {

        let color = prompt('Podaj kolor');
        let jsx;

        if (['red', 'green', 'blue'].indexOf(color.toLowerCase()) === -1
        ) {
            jsx = <div>Nieprawidłowy kolor</div>
        } else {
            let style = {
                width: '100px',
                height: '100px',
                border: `5px solid ${color}`
            };
            jsx = <div style={style}/>;
        }
        return jsx;
    }
}

export default Task08;