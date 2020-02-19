import React, {Component} from "react";
import Person from './person';

class Task04 extends Component {

    render() {
        return (
            <>
                <div>Wywołana postać, to:</div>
                <ul>
                    <li>{Person.title}</li>
                    <li>{Person.name}</li>
                    <li>{Person.surname}</li>
                    <li>{Person.age}</li>
                </ul>
            </>
        )
    }
}

export default Task04;