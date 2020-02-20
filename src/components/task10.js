import React, {Component} from "react";
import person from "./person";

class Task10 extends Component{

    render() {
        let personJsx = <>
            <h1>{person.name} {person.surname}</h1>
            <span>lat {person.age}</span>
        </>;
return personJsx;
    }
}

export default Task10;