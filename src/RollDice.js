import React from "react";
import Dice from './Dice.js'
import './RollDice.css'

class RollDice extends React.Component{

    static defaultProps = {
        faces : ['one', 'two', 'three', 'four', 'five', 'six']
    }

    constructor(props){
        super();
        this.state = {face1 : 'four', face2 : 'six', rolling:false}
        this.roll = this.roll.bind(this);
    }

    roll() {

    let _1 = Math.floor(Math.random() * this.props.faces.length);
    let _2 =  Math.floor(Math.random() * this.props.faces.length);

    //set new values to dice
    this.setState({rolling:true})

    
    //set rolling to false after 1 sec
    setTimeout(()=>{

  this.setState( { face1 : this.props.faces[_1], face2 : this.props.faces[_2], rolling:false})
    },1000)
    }


    render(){
        return (
            <div className="RollDice">
                <div className="Dices"> 
                <Dice face={this.state.face1} rolling={this.state.rolling}></Dice>
                <Dice face={this.state.face2} rolling={this.state.rolling}></Dice>  </div>
               
                <button onClick={this.roll}  disabled={this.state.rolling} > {this.state.rolling? 'Rolling...' : 'Roll Dice!'}  </button>

            </div>
        )
    }
}

export default RollDice;