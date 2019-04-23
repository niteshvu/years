import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';


class About extends Component {
  render() {
    return (
      <div>
        <div id="fixed">
          <div className="landing-text container" id="about" name="about">
            <div className="row">
                <div className="col-sm-12 padding1">
                    <h3>"Versatile iOS Application Developer with around 3 years of experience in designing, developing and managing complex iOS Applications and internal frameworks. Specializes in <strong>Swift</strong>, <strong>Objective-C</strong> and iOS SDK"</h3>
                    <div className="padding" id="skills" name="skills">
                      <div className="container">
                        <div className="row">
                            <div className="col-sm-12 oksign">
                              <h3><span className="glyphicon glyphicon-ok-sign"></span> Developed unique user experiences that drove interaction</h3>
                              <br></br>
                              <h3><span className="glyphicon glyphicon-ok-sign"></span> Developed fully functional responsive prototypes based on Business Requirements</h3>
                            </div>
                        </div>
                      </div>
                      </div>
                </div>
            </div>      
          </div>
        </div>
      </div>
    );
  }
}

export default About;
