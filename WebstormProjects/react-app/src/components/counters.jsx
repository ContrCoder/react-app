import React, {Component} from "react";
import Counter from "./counterComponent";

export default class Counters extends Component {

    render() {
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (<div>
                <button
                    className="btn btn-primary btn-sm m- 2"
                    onClick={onReset}>
                    Reset
                </button>
                {counters.map(c => (
                    <Counter key={c.id}
                             onDelete={onDelete}
                             counter={c}
                             onIncrement={onIncrement}
                    />
                ))}
            </div>
        );
    }
}