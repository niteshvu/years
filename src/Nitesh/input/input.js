import React, {Component} from 'react';
import './input.css';

class Input extends Component{
    
    render(){
        let styles = {
            color: 'black'
        }
        return(
            <div>
                <label style = {styles}>{this.props.label}: </label>
                <input type = {this.props.type} onChange = {this.props.changed}/>
            </div>
        )
    }
}

export default Input;
