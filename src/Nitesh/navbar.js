import React, { Component } from 'react';
import './../App.css';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import 'react-router-dom';


class Navbar extends Component {

  constructor(props){
    super(props); 
    this.state = {
        isMin: true,
        scrollPositionY: 0,
    }
  }

  componentDidMount() {
    // 32 is the number of milliseconds to debounce
    // I picked this because it's approx 1 frame (ie: 16.7ms)
    // You'll want to modulate that to your taste.
    // Add console.logs in handleScroll function to check if its flooding.
    return window.addEventListener('scroll', this.handleScroll)
  }
  componentWillUnmount() {
    return window.removeEventListener('scroll', this.handleScroll)
  }
  handleScroll = () => {
    // + is unary operator, same as Number(window.scrollY)
    const scrollPositionY = +window.scrollY
    return this.setState({ scrollPositionY })
  }


  scrollToSkills() {
    scroller.scrollTo('skills', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToAbout() {
    scroller.scrollTo('about', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  scrollToContact() {
    scroller.scrollTo('contact', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }

  renderRedirect = () => {
    console.log(this.props)
      this.props.history.push('/resume');
  }

  

  
  render() {
    //console.log(this.state.scrollPositionY);
    return (
      <div>
        <nav className={`navbar navbar-fixed-top navbar-default ${this.state.scrollPositionY > 100 ? 'navbarStyleAfterScroll' : 'navbarstyle'}`}role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-main">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

    <div className="collapse navbar-collapse" id="navbar-collapse-main">
      <ul className="nav navbar-nav navbar-right">
      {/* onClick={() => scroll.scrollTo(0)} */}
        <li><a className="active"   onClick={this.props.clickedHome} onClick={() => scroll.scrollTo(0)}><strong >Home</strong></a></li>
        <li><a onClick={() => this.scrollToSkills()}><strong >Skills</strong></a></li>
        <li><a ><strong onClick={() => this.scrollToAbout()}>About me</strong></a></li>
        <li><a onClick={this.renderRedirect}><strong >Resume</strong> </a></li>
        <li><a onClick={() => scroll.scrollTo(3500)}><strong >Contact</strong> </a></li>
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    );
  }
}
export default Navbar;
