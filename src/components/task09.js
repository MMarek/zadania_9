import React, {Component} from "react";
import people from "./people";

class Task09 extends Component {

    render() {
        let peopleJsx = people.map(p =>
            <div key={p.pesel}>
                {p.title} {p.name} {p.surname}
            </div>
        );
        return ({peopleJsx})
    }
}

export default Task09;