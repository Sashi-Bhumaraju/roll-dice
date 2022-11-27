import React from "react";
import  './Dice.css';

class Dice extends React.Component{
    // face = "fa-solid fa-dice-" + this.props.face;
    render(){
        return (
            <div className={`Dice ${this.props.rolling? 'shaking' : ''}`}>  <i class={  "fa-solid fa-dice-" + this.props.face}></i> </div>
        );
    }
}

export default Dice;