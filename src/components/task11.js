import React, {Component} from "react";
import people from "./people";

class Task11 extends Component {
    render() {
        let peopleJsx = people.map(p =>
            <div key={p.title}>
                {/*<img src={p.avatar}/>*/}
                {/*<div className='info'>*/}
                    <h1>{p.title}  {p.name}  {p.surname}</h1>
                    <p>{p.bio}</p>
                {/*</div>*/}
            </div>
        );
        return peopleJsx;
    }
}

export default Task11;