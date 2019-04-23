import React,  { Component } from 'react';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router-dom'
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import Fade from 'react-reveal/Fade';
import Input from './input/input';
import './contact.css';
import axios from '../axios-orders';
class Contact extends Component {
  state = {
    inputs: [
      {
        label: "Name",
        value: '',
        type: "text"
      },
      {
        label: "Email",
        value: '',
        type: "text"
      }
    ],
    message: ''
  }
  onChangeHandler = (event, index) => {
    this.state.inputs[index].value = event.target.value;
    console.log(this.state.inputs[index].value);
  }
  onMessageChangeHandler = (event) => {
    this.state.message = event.target.value;
    console.log(this.state.message);
  }
  onSubmitHandler = () =>{

     let valid =  this.state.inputs.every((el) => {
       return el.value != '' && this.state.message != ''
     })
     if(valid){
        let message = {
          name: this.state.inputs[0].value,
          email: this.state.inputs[1].value,
          message: this.state.message
        }
        axios.post('/messages.json', message)
        .then(Response => {
          alert("Thank you the message. I will get back to you in less than a day");
          (() => scroll.scrollTo(0))();
        })
     }
     else{
       alert("Invaid Details. Can't Submit Message");
     }
     let inputs = [...this.state.inputs];
          inputs.map(el => el.value = '');
          this.setState({
            inputs: inputs,
            message: ''
          })
  }
  render() {
    
    return (
    <div>
      <footer className="container-fluid contact-container">
      <div className = "infoContainer">
                <p><strong>Phone: </strong>(210) 777-1000</p>
                <p><strong>Lives in </strong>Los Angeles, CA</p>
                <p><strong><a href = "www.linkedin.com/in/nithinchakravarthyd" target = "_blank">LinkedIn</a> </strong></p>
          </div>
        </footer>
      </div>
    );
  }
}

export default Contact;

