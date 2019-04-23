import React, { Component } from 'react';
import './../App.css';
import Creative from '../img/creativity.png';
import Bar from '../img/bar1.png';
import Multi from '../img/multi.png';
import Clck from '../img/clck.png';
import Typing from 'react-typing-animation';
import Fade from 'react-reveal/Fade';

class Home extends Component {
  render() {
    return (
      <div>
              <Fade><div id="home">
                <div className="container">
                        <div className="row">
                                
                                        <div className="col-sm-12 type">
                                                <Typing>
                                                        <span><h1>I am Nithin Dampetla</h1></span>
                                                        <span><h4>iOS App Developer</h4></span>
                                                </Typing>
                                        </div>
                                
                        </div>
                </div>
                
                <div className="container">
                        <div className="row hidden-xs">
                        <div className="col-sm-3  abilities">
                                <img src={Creative} className="img-responsive"></img>
                                <h4><strong>CREATIVE SOLUTIONS</strong></h4>
                                <p>Some problems have complicated solutions and for me finding the most creative, but efficient, route to success is always my top priority.</p>
                        </div>
                        <div className="col-sm-3 abilities">
                                <img src={Bar} className="img-responsive"></img>
                                <h4><strong>ANALYTICAL MINDSET</strong></h4>
                                <p>I always work to balance my creative mind with realistic timeframes and good documentation to always have the most precise and error free outcome.</p>
                        </div>
                        <div className="col-sm-3 abilities">
                                <img src={Multi} className="img-responsive"></img>
                                <h4><strong>MULTITASKER</strong></h4>
                                <p> If there is a deadline I can get it done no matter what, but I create much better solutions when stepping back and forth between all the moving pieces.</p>
                        </div>
                        <div className="col-sm-3 abilities">
                                <img src={Clck} className="img-responsive"></img>
                                <h4><strong>ALWAYS AVAILABLE</strong></h4>
                                <p>There is never a point in which I will not respond to an email or message that is work related. Most days you can also find me enjoying work at 3am.
                                </p>
                        </div>
                        </div>
                   
                </div>

                <div className="container visible-xs">
                        <div className="row">
                        <div className="col-xs-12  abilities_small first_abilities">
                                <img src={Creative} className="img-responsive"></img>
                                <h4><strong>CREATIVE SOLUTIONS</strong></h4>
                                <p>Some problems have complicated solutions and for me finding the most creative, but efficient, route to success is always my top priority.</p>
                        </div>
                        <div className="col-xs-12 abilities_small">
                                <img src={Bar} className="img-responsive"></img>
                                <h4><strong>ANALYTICAL MINDSET</strong></h4>
                                <p>I always work to balance my creative mind with realistic timeframes and good documentation to always have the most precise and error free outcome.</p>
                        </div>
                        <div className="col-xs-12 abilities_small">
                                <img src={Multi} className="img-responsive"></img>
                                <h4><strong>MULTITASKER</strong></h4>
                                <p> If there is a deadline I can get it done no matter what, but I create much better solutions when stepping back and forth between all the moving pieces.</p>
                        </div>
                        <div className="col-xs-12 abilities_small">
                                <img src={Clck} className="img-responsive"></img>
                                <h4><strong>ALWAYS AVAILABLE</strong></h4>
                                <p>There is never a point in which I will not respond to an email or message that is work related. Most days you can also find me enjoying work at 3am.
                                </p>
                        </div>
                        </div>
                   
                </div>
            </div></Fade>
        
      </div>
    );
  }
}

export default Home;


