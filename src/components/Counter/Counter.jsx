import { Component } from "react";
// import "./Counter.css"

export  class Counter extends Component{
handleIncrement =()=> {
console.log(this)
};
handleDecrement =()=> {
console.log(this)
};

        
render() {
        
    return <div className="Counter">
    <span className="Counter__value">0</span>

        <div className="Counter__controls">
            <button type="button" onClick={this.handleIncrement}>Увеличить на 1</button>
            <button type="button" onClick={()=> {}}>Уменьшить на 1</button>
        </div>
    </div>
    }
}
