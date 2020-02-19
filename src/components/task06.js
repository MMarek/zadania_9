import React, {Component} from "react";
import animals from "./animals";

class Task06 extends Component{

    render() {
        return (
            <ul>
                {animals.length}
                {animals.map((el,ind) => <li key={ind}> {el} </li> )}
            </ul>
        )
    }
}

export default Task06;