import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Nitesh/home';
import About from './Nitesh/about';
import Skills from './Nitesh/skills';
import Contact from './Nitesh/contact';
import Resume from './Nitesh/resume';
import Navbar from './Nitesh/navbar';

class App extends Component {

   state = {
     loading: true
   }

  // hideContent = () => {
  //   let show = this.state.condition;
  //  //  this.state.condition = !this.state.condition;
    
  //   this.setState({
  //     condition : false
  //   });
  
  // }
  componentDidMount() {
    // the setTimeout just simulates an async action, after which the component will render the content
    this.setState({ loading: false });
  }

  // showHome = () => {
  //   let show = this.state.condition;
  //  //  this.state.condition = !this.state.condition;
    
  //   this.setState({
  //     condition : true
  //   });
   
  // }


  render() {
    // let persons = (
    //   <div>
    //     <Navbar clickedResume={this.hideContent.bind(this)} clickedHome={this.showHome.bind(this)}/>
    //     <Home/>
    //     <Skills/>
    //     <About/>
    //     <Contact/>
    //   </div>
    // );
    // if(!this.state.condition){
    //   persons = (
    //     <Resume clickedHome={this.showHome.bind(this)}/>
    //   );
    // }
    let content = (
      <div>
        <Navbar history={this.props.history}/>
        <Home/>
        <Skills/>
        <About/>
        <Contact/>
      </div>
    );
    if(this.state.loading){
      content = (
        <p>Loading...</p>
      );
    }

    return (
      <div className="App">
       
        {content}
       
      </div>
    );
  }
}

export default App;
